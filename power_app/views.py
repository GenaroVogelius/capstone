# Create your views here.
from io import BytesIO
from pathlib import Path

import pandas
from django.conf import settings
from django.contrib import messages
from django.db.models import Count
from django.http import (HttpResponse, HttpResponseForbidden,
                         HttpResponseRedirect)
from django.shortcuts import get_object_or_404, render
from django.template.loader import get_template
from django.urls import reverse
from django.views import View
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from xhtml2pdf import pisa

from .models import *
from .serializers import *
from .utils import GraphicsDataGenerator



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer






@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def usuario(request, dni):
    # TODO activar esto
    # if request.get_host() not in settings.ALLOWED_HOSTS:
    #     return HttpResponseForbidden("Access denied")

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

    elif request.method == "POST" and request.user.is_staff:
        try:
            user = Usuario.objects.get(DNI=dni)
            Asistencia.objects.create(usuario=user)
            return Response({"message": "asistencia tomada"}, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response(
                {"not found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )
    else:
        return Response(
            {"error": "Permission denied"},
            status=status.HTTP_403_FORBIDDEN,
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
                {"not found": f"Usuario with DNI {dni} does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )


# no necesitas esto, se borra bien
# def get_users(request):
#     users = User.objects.all()
#     usuarios = Usuario.objects.all()

#     lista_de_usuarios_dni = []
#     for usuario in usuarios:
#         lista_de_usuarios_dni.append(int(usuario.DNI))

#     print(lista_de_usuarios_dni)

#     lista_de_users = []
#     for user in users:
#         print(user.username)
#         try:
#             if int(user.username) not in lista_de_usuarios_dni:
#                 print("no esta")
#                 # user.delete()
#         except ValueError:
#             pass

#     print(users)

# @api_view(["GET"])
# def rutina(request, dni, sesion):
#     if request.method == "GET":
#         try:
#             pagination_class = LimitOffsetPagination()
#             rutinas = Rutina.objects.filter(Q(usuario__DNI=dni) & Q(sesion=sesion))
#             rutinas = RutinaFormulario.objects.filter(rutina__in=rutinas)
#             paginated_rutinas = pagination_class.paginate_queryset(rutinas, request, request.path_info)
#             print(paginated_rutinas)
#             print(rutinas)
#             # serializer = RutinaSerializer(rutinas, many=True)
#             serializer = RutinaSerializer(paginated_rutinas, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except RutinaFormulario.DoesNotExist:
#             return Response(
#                 {"not found": f"Usuario with DNI {dni} does not exist"},
#                 status=status.HTTP_400_BAD_REQUEST,
#             )

@api_view(["GET"])
def sesiones(request, dni):
    if request.method == "GET":
        try:
            sesiones_list = Rutina.objects.filter(usuario__DNI=dni).values_list('sesion', flat=True)
            sesiones_list = list(sesiones_list)

            return Response({"sesiones": sesiones_list}, status=status.HTTP_200_OK)
        except RutinaFormulario.DoesNotExist:
            return Response(
                {"not found": f"No tienes ninguna sesion cargada"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    # if request.method == "GET":

    #     # inicializas la clase de pagination

    #     posts = Post.objects.all().order_by("-timestamp")
    #     posts_count = posts.count()
    #     # dentro de la clase llamas al metodo paginate_queryset, que recibe como primer parametro que es lo que va a devolver y como segundo parametro la request, dentro de la request va a haber algo llamado offset que seria desde donde te trae data, por ej posts/?offset=7 te trae los post desde el 7 en adelante.

    #     paginated_posts = pagination_class.paginate_queryset(posts, request, request.path_info)
    #     # en paginated posts se guardan esos posts y los serializas abajo

    #     serializer = PostSerializer(
    #         paginated_posts, many=True, context={"request": request, "posts_count": posts_count}
    #     )

    #     return Response({"posts":serializer.data}, status=status.HTTP_200_OK)


@api_view(["GET"])
def servicios(request):
    if request.method == "GET":
        try:
            servicios = Servicio.objects.all()
            serializer = ServicioSerializer(servicios, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Servicio.DoesNotExist:
            return Response(
                {"not found": f"No se encontraron servicios"},
                status=status.HTTP_400_BAD_REQUEST,
            )


@api_view(["GET"])
def tarifas(request):
    if request.method == "GET":
        try:
            tarifas = Tarifa.objects.all()
            serializer = TarifaSerializer(tarifas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Tarifa.DoesNotExist:
            return Response(
                {"not found": f"bad request"},
                status=status.HTTP_400_BAD_REQUEST,
            )


@api_view(["GET"])
def rutina(request, dni, sesion):
    if request.method == "GET":
        try:
            rutinas = RutinaFormulario.objects.filter(
                rutina__sesion=sesion, rutina__usuario__DNI=dni
            )
            serializer = RutinaSerializer(rutinas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except RutinaFormulario.DoesNotExist:
            return Response(
                {"not found": f"No tiene rutina cargada el usuario"},
                status=status.HTTP_400_BAD_REQUEST,
            )
@api_view(["GET"])
def carrousel(request):
    if request.method == "GET":
        try:
            pics = FotosGimnasio.objects.all().order_by('orden')
            serializer = CarrouselSerializer(pics, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except FotosGimnasio.DoesNotExist:
            return Response(
                {"not found": f"No hay fotos para mostrar"},
                status=status.HTTP_400_BAD_REQUEST,
            )


# TODO ver mecanismos de seguridad 
# @permission_classes([IsAuthenticated])
        # si le pones la autenticación le tenes que mandar en el post del front la autenticacoón
class ViewPDF(View):
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
        if request.get_host() not in settings.ALLOWED_HOSTS:
            return HttpResponseForbidden("Access denied")
        data = self.get_info(dni)
        pdf = self.render_to_pdf('pdf_template.html', data)
        return HttpResponse(pdf, content_type='application/pdf')
