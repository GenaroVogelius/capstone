

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from django.conf import settings
from .models import *
from views import *
from .serializers import *



class BaseSetUp(TestCase):
    def setUp(self):
        self.dni = "12345678"
        self.usuario = Usuario.objects.create(DNI=self.dni, nombre="Test User", apellido="testing", sexo="Masculino")
        self.client = APIClient()

class AdminUsuarioViewTest(BaseSetUp):
    def setUp(self):
        super().setUp() 
        self.admin_usuario_url = reverse("power_app:admin_usuario", args=[self.dni])

    # TODO def test_get_usuario(self):
    #     # Create a Usuario for testing
    #     usuario = Usuario.objects.create(DNI=self.dni, nombre="Test User", apellido="testing", sexo="Masculino")
        
    #     # Make a GET request to the view
    #     response = self.client.get(self.admin_usuario_url)

    #     # Check if the response status code is 200 OK
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    #     # Manually format the vencimiento field for comparison
    #     usuario_serializer = UsuarioSerializer(usuario)
    #     expected_data = usuario_serializer.data
    #     expected_data['vencimiento'] = usuario.vencimiento.strftime('%d/%m/%Y')

    #     # Check if the response data matches the expected data
    #     self.assertEqual(response.data, expected_data)

    def test_get_nonexistent_usuario(self):
        # Make a GET request for a nonexistent Usuario
        response = self.client.get(reverse("power_app:admin_usuario", args=[0]))

        # Check if the response status code is 400 Bad Request
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the expected error message is present in the response
        self.assertIn("not_found", response.data)

    def test_post_asistencia(self):
        # Create a Usuario for testing
        usuario = self.usuario

        # Make a POST request to the view
        response = self.client.post(self.admin_usuario_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if an Asistencia object is created for the Usuario
        self.assertTrue(Asistencia.objects.filter(usuario=usuario).exists())

    def test_post_nonexistent_usuario(self):
        # Make a POST request for a nonexistent Usuario
        response = self.client.post(reverse("power_app:admin_usuario", args=[0]))

        # Check if the response status code is 400 Bad Request
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the expected error message is present in the response
        self.assertIn("not found", response.data)

    def test_permission_denied(self):
        # Make a request with a host not in ALLOWED_HOSTS
        client = APIClient(HTTP_HOST='example.com')
        response = client.get(self.admin_usuario_url)

        # Check if the response status code is 403 Forbidden
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        # Check if the expected error message is present in the response
        self.assertIn("Permission denied", response.data["error"])

class RequestRutineViewTest(BaseSetUp):
    def setUp(self):
        super().setUp() 
        self.request_rutine_url = reverse("power_app:requestRutine")

    def test_request_rutine_successful(self):
        # Create a Usuario for testing
        usuario = self.usuario

        # Authenticate a user (assuming you have a user in the database)
        user = User.objects.create(username='testuser')
        self.client.force_authenticate(user=user)

        # Make a POST request to the view
        response = self.client.post(self.request_rutine_url, data={"userDNI": self.dni})

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the user's solicitud_nueva_rutina is set to True
        usuario.refresh_from_db()
        self.assertTrue(usuario.solicitud_nueva_rutina)

    def test_request_rutine_user_not_found(self):
        # Make a POST request with a DNI for a nonexistent user
        user = User.objects.create(username='testuser')

        # authenticate the user
        self.client.force_authenticate(user=user)

        # Make a POST request to the view
        response = self.client.post(self.request_rutine_url, data={"userDNI": 1})

        # Check if the response status code is 400 Bad Request
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the expected error message is present in the response
        self.assertIn("not_found", response.data)

    def test_request_rutine_unauthenticated(self):
        # Don't authenticate the user

        # Make a POST request to the view
        response = self.client.post(self.request_rutine_url, data={"userDNI": "12345678"})

        # Check if the response status code is 401 Unauthorized
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class SesionesViewTest(BaseSetUp):
    def setUp(self):
        super().setUp() 

        # Create a Rutina associated with the user
        self.sesion_data = {"sesion": 1}
        self.rutina = Rutina.objects.create(usuario=self.usuario, **self.sesion_data)

        # URL for the sesiones view
        self.sesiones_url = reverse("power_app:sesiones", args=[self.dni])

    def test_get_sesiones_successful(self):
        # Make a GET request to the view
        response = self.client.get(self.sesiones_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected sesiones list
        expected_sesiones = {"sesiones": [self.sesion_data["sesion"]]}
        self.assertEqual(response.data, expected_sesiones)

    def test_get_sesiones_no_sesiones_found(self):
        # Make a GET request to the view
        response = self.client.get(reverse("power_app:sesiones", args=[0]))

        # Check if the response status code is 400 BAD REQUEST
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the response contains the expected error message
        expected_error = {"not found": "No tienes ninguna sesion cargada"}
        self.assertEqual(response.data, expected_error)

class ServiciosViewTest(BaseSetUp):
    def setUp(self):
        super().setUp() 
        # Create some Servicio instances for testing
        self.servicio1 = Servicio.objects.create(titulo="Servicio 1", descripcion="Descripción 1", flaticon="fas fa-task")
        self.servicio2 = Servicio.objects.create(titulo="Servicio 2", descripcion="Descripción 2", flaticon="fas fa-task")

        # URL for the servicios view
        self.servicios_url = reverse("power_app:servicios")

    def test_get_servicios_successful(self):
        # Make a GET request to the view
        response = self.client.get(self.servicios_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected serialized data
        expected_data = ServicioSerializer([self.servicio1, self.servicio2], many=True).data
        self.assertEqual(response.data, expected_data)

    def test_get_servicios_no_servicios_found(self):
        # Delete all existing servicios to simulate no servicios found
        Servicio.objects.all().delete()

        # Make a GET request to the view
        response = self.client.get(self.servicios_url)

        # Check if the response status code is 404 NOT_FOUND
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

        # Check if the response contains the expected error message
        expected_error = {"not_found": "No se encontraron servicios"}
        self.assertEqual(response.data, expected_error)



class TarifasViewTest(BaseSetUp):
    def setUp(self):
        super().setUp()
        # Create some Tarifa instances for testing
        self.tarifa1 = Tarifa.objects.create(tipo_de_tarifa="Tarifa 1", precio=100)
        self.tarifa2 = Tarifa.objects.create(tipo_de_tarifa="Tarifa 2", precio=200)

        # URL for the tarifas view
        self.tarifas_url = reverse("power_app:tarifas")

    def test_get_tarifas_successful(self):
        # Make a GET request to the view
        response = self.client.get(self.tarifas_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected serialized data
        expected_data = TarifaSerializer([self.tarifa1, self.tarifa2], many=True).data
        self.assertEqual(response.data, expected_data)

    def test_get_tarifas_no_tarifas_found(self):
        # Delete all existing tarifas to simulate no tarifas found
        Tarifa.objects.all().delete()

        # Make a GET request to the view
        response = self.client.get(self.tarifas_url)

        # Check if the response status code is 400 BAD REQUEST
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the response contains the expected error message
        expected_error = {"not_found": "bad request"}
        self.assertEqual(response.data, expected_error)



class RutinaViewTest(BaseSetUp):
    def setUp(self):
        super().setUp()
        self.sesion = 1
        detalles_de_ejercicio = Detalle_de_ejercicio.objects.create(ejercicio="pecho plano")

        rutina = Rutina.objects.create(usuario=self.usuario, sesion=1)
        self.user_rutina = RutinaFormulario.objects.create(
            detalles_de_ejercicio=detalles_de_ejercicio,
            rutina=rutina,
            series="3",
            repeticiones="10-5-3",
        )


        # URL for the rutina view
        self.rutina_url = reverse("power_app:rutina", args=[self.dni, self.sesion])

    def test_get_rutina_successful(self):
        # Make a GET request to the view
        response = self.client.get(self.rutina_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected serialized data
        expected_data = RutinaSerializer([self.user_rutina], many=True).data
        self.assertEqual(response.data, expected_data)

    def test_get_rutina_no_rutina_found(self):
        # Delete the existing RutinaFormulario to simulate no rutina found
        self.user_rutina.delete()

        # Make a GET request to the view
        response = self.client.get(self.rutina_url)

        # Check if the response status code is 400 BAD REQUEST
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the response contains the expected error message
        expected_error = {"not_found": "No tiene rutina cargada el usuario"}
        self.assertEqual(response.data, expected_error)

class CarrouselViewTest(BaseSetUp):
    def setUp(self):
        # Create some FotosGimnasio instances for testing
        self.pic1 = FotosGimnasio.objects.create(nombre="Foto1", orden=1)
        self.pic2 = FotosGimnasio.objects.create(nombre="Foto2", orden=2)

        # URL for the carrousel view
        self.carrousel_url = reverse("power_app:carrousel")

    def test_get_carrousel_successful(self):
        # Make a GET request to the view
        response = self.client.get(self.carrousel_url)

        # Check if the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected serialized data
        expected_data = CarrouselSerializer([self.pic1, self.pic2], many=True).data
        self.assertEqual(response.data, expected_data)

    def test_get_carrousel_no_photos_found(self):
        # Delete all existing photos to simulate no photos found
        FotosGimnasio.objects.all().delete()

        # Make a GET request to the view
        response = self.client.get(self.carrousel_url)

        # Check if the response status code is 400 BAD REQUEST
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check if the response contains the expected error message
        expected_error = {"not_found": "No hay fotos para mostrar"}
        self.assertEqual(response.data, expected_error)


