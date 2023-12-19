
from django.urls import path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

from . import views

# from .views import MyTokenObtainPairView
# from .views import *
app_name = "power_app"
urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('promos', TemplateView.as_view(template_name='index.html')),
    path('soySocio', TemplateView.as_view(template_name='index.html')),
    path('entrada', TemplateView.as_view(template_name='index.html')),
    
    # path('get_users/', views.get_users),

    # API rest
    path('usuario/<int:dni>', views.usuario, name="usuario"),
    path('admin_usuario/<int:dni>', views.admin_usuario, name="admin_usuario"),
    path('tarifas/', views.tarifas, name="tarifas"),
    path('rutina/<int:dni>/<int:sesion>', views.rutina, name="rutina"),
    path('sesiones/<int:dni>', views.sesiones, name="sesiones"),
    path('servicios/', views.servicios, name="servicios"),
    path('requestRutine/', views.request_rutine, name="request_rutine"),
    path('carrousel/', views.carrousel, name="carrousel_photos"),

    path('pdf_view/<int:dni>', views.ViewPDF.as_view(), name="pdf_view"),

    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),



    
]