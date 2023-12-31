# Create your views here.
from io import BytesIO
from pathlib import Path
import pandas
from django.contrib import messages
from django.http import (HttpResponse,HttpResponseRedirect)
from django.shortcuts import render
from django.template.loader import get_template
from django.urls import reverse
from django.views import View
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from xhtml2pdf import pisa
from .models import *
from .serializers import *
from .utils import GraphicsDataGenerator
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle
from rest_framework.decorators import throttle_classes


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class TarifaThrottle(UserRateThrottle):
    scope = 'tarifas'

class ServiciosThrottle(UserRateThrottle):
    scope = 'servicios'

class AdminThrottle(UserRateThrottle):
    scope = 'admin'


@api_view(["GET", "POST"])
@throttle_classes([AdminThrottle])
def admin_usuario(request, dni):
    if request.method == "GET":
        try:
            usuario = Usuario.objects.get(DNI=dni)
            serializer = UsuarioSerializer(usuario, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response(
                {"not_found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    elif request.method == "POST":
        try:
            user = Usuario.objects.get(DNI=dni)
            Asistencia.objects.create(usuario=user)
            return Response({"message": "asistencia tomada"}, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response(
                {"not found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )



@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def usuario(request, dni):
    if request.method == "GET":
        try:
            usuario = Usuario.objects.get(DNI=dni)
            serializer = UsuarioSerializer(usuario, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response(
                {"not found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

def upload_excel(request):
    if request.method == "POST":
        excel_file = request.FILES["excel_upload"]

        if not excel_file.name.endswith(".xlsx"):
            messages.warning(request, "The wrong file type was uploaded")
            url = reverse("admin:index")
            return HttpResponseRedirect(url)

        # Load the Excel file into a Pandas DataFrame
        data_frame = pandas.read_excel(excel_file)

        # Iterate over the rows of the DataFrame and create or update instances of the Usuario model
        for index, row in data_frame.iterrows():
            Usuario.objects.update_or_create(
                nombre=row["nombre"],
                apellido=row["apellido"],
                sexo=row["sexo"],
                DNI=row["DNI"],
                pago=row["pago"],
                vencimiento=row["vencimiento"],
                celular=int(row["celular"]) if pandas.notna(row["celular"]) else None,
            )

        return HttpResponseRedirect(reverse("admin:index"))

def graphics(request):
    data_generator = GraphicsDataGenerator()
    data = data_generator.generate_graphics_data()
    return render(request, "graphics.html", {"data": data})


# ? @staticmethod decorator is a good practice for methods that don't need access to instance attributes and are more like utility functions. It clarifies that these methods are not bound to instance-specific data and can be called on the class itself.
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def request_rutine(request):
    if request.method == "POST":
        try:
            data = request.data
            dni = data.get("userDNI")
            user = Usuario.objects.get(DNI=dni)

            user.solicitud_nueva_rutina = True
            user.save()
            return Response({"message": "Se ha solicitado exitosamente la rutina"}, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response(
                {"not_found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def sesiones(request, dni):
    if request.method == "GET":
        sesiones_list = Rutina.objects.filter(usuario__DNI=dni).values_list('sesion', flat=True)

        sesiones_list = list(sesiones_list)
        return Response({"sesiones": sesiones_list}, status=status.HTTP_200_OK)


@api_view(["GET"])
@throttle_classes([ServiciosThrottle])
def servicios(request):
    if request.method == "GET":
        try:
            servicios = Servicio.objects.all()
            if not servicios:
                raise Servicio.DoesNotExist
            serializer = ServicioSerializer(servicios, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Servicio.DoesNotExist:
            return Response(
                {"not_found": f"No se encontraron servicios"},
                status=status.HTTP_404_NOT_FOUND,
            )
        


@api_view(["GET"])
@throttle_classes([TarifaThrottle])
def tarifas(request):
    if request.method == "GET":
        try:
            tarifas = Tarifa.objects.all()
            if not tarifas:
                raise Tarifa.DoesNotExist
            
            serializer = TarifaSerializer(tarifas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Tarifa.DoesNotExist:
            return Response(
                {"not_found": f"bad request"},
                status=status.HTTP_400_BAD_REQUEST,
            )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def rutina(request, dni, sesion):
    if request.method == "GET":
        try:
            rutinas = RutinaFormulario.objects.filter(
                rutina__sesion=sesion, rutina__usuario__DNI=dni
            )
            if not rutinas:
                raise RutinaFormulario.DoesNotExist
            
            serializer = RutinaSerializer(rutinas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except RutinaFormulario.DoesNotExist:
            return Response(
                {"not_found": f"No tiene rutina cargada el usuario"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        

@api_view(["GET"])
def carrousel(request):
    if request.method == "GET":
        try:
            pics = FotosGimnasio.objects.all().order_by('orden')
            if not pics:
                raise FotosGimnasio.DoesNotExist
            serializer = CarrouselSerializer(pics, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except FotosGimnasio.DoesNotExist:
            return Response(
                {"not_found": f"No hay fotos para mostrar"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class ViewPDF(APIView):
    permission_classes = [IsAuthenticated]
    def render_to_pdf(self, template_src, context_dict={}):
        template = get_template(template_src)
        html  = template.render(context_dict)
        result = BytesIO()
        pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
        if not pdf.err:
            return HttpResponse(result.getvalue(), content_type='application/pdf')
        return None
    
    def get_info(self, dni):
        STATIC_DIR = Path(__file__).resolve().parent
        
        rutina_data = Rutina.objects.filter(usuario__DNI=dni).values('usuario__nombre', 'usuario__apellido', 'sesion')
        usuario_data = rutina_data[0]
        nombre = usuario_data['usuario__nombre']
        apellido = usuario_data['usuario__apellido']
        # Extract session values
        sesiones_list = [rutina['sesion'] for rutina in rutina_data]

        sesiones_and_form_de_rutinas = []
        for sesion in sesiones_list:
            form_rutinas = RutinaFormulario.objects.filter(
                    rutina__usuario__DNI=dni, rutina__sesion=sesion
                )
            dictionary = {sesion : form_rutinas}
            sesiones_and_form_de_rutinas.append(dictionary)
            
        return {
	        "nombre": nombre,
	        "apellido": apellido,
            "sesiones_and_form_de_rutinas":sesiones_and_form_de_rutinas,
            "STATIC_DIR": STATIC_DIR,
	        }

    def get(self, request, dni, *args, **kwargs):
        data = self.get_info(dni)
        pdf = self.render_to_pdf('pdf_template.html', data)
        return HttpResponse(pdf, content_type='application/pdf')
