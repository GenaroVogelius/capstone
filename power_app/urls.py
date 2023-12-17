
from django.urls import path
from django.views.generic import TemplateView
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

# from .views import MyTokenObtainPairView
# from .views import *
app_name = "power_app"
urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('promos', TemplateView.as_view(template_name='index.html')),
    path('soySocio', TemplateView.as_view(template_name='index.html')),
    
    # path('get_users/', views.get_users),

    
]