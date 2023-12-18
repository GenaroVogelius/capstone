
from datetime import date

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import *


class UsuarioSerializer(serializers.ModelSerializer):

    days_to_vencimiento = serializers.SerializerMethodField()
    
    class Meta:
        model = Usuario
        fields = ('nombre', 'activo', 'sexo', 'vencimiento','solicitud_nueva_rutina', 'days_to_vencimiento',)
        
        
    def to_representation(self, instance):
        data = super(UsuarioSerializer, self).to_representation(instance)
        # Format the "vencimiento" field
        data['vencimiento'] = instance.vencimiento.strftime('%d/%m/%Y')
        return data
        
    def get_days_to_vencimiento(self, obj):
        today = date.today()
        delta = obj.vencimiento - today
        return delta.days
class EjercicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detalle_de_ejercicio
        fields = ['ejercicio','gif']


    def to_representation(self, instance):
        data = super().to_representation(instance)

        # Modify the foto_del_carrusel URL to include only the desired part
        url_parts = data["gif"].split("/")
        gif_part = "/".join(url_parts[-2:])
        data["gif"] = gif_part

        return data
        
class RutinaSerializer(serializers.ModelSerializer):
    detalles_de_ejercicio = EjercicioSerializer(many=False) 
    class Meta:
        model = RutinaFormulario  
        fields = ("detalles_de_ejercicio", "series", "repeticiones",)
class PromocionEspecialSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromocionEspecial
        fields = ['promo_especial']


        
class TarifaSerializer(serializers.ModelSerializer):
    # ? SerializerMethodField sirve para agregar un field al serializador, tenes que crear la función get_(nombre del field y decirle que queres que devuelva)
    promociones_especiales = serializers.SerializerMethodField()
    
    class Meta:
        model = Tarifa
        fields = ['tipo_de_tarifa', 'precio', "promociones_especiales"]

    def get_promociones_especiales(self, obj_tarifa):
        return [promocion.promo_especial for promocion in obj_tarifa.promociones_especiales.all()]


class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ("titulo", "descripcion", "flaticon",)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['DNI'] = int(user.username)
        # ...

        return token


class CarrouselSerializer(serializers.ModelSerializer):

    class Meta:
        model = FotosGimnasio
        fields = ("foto_del_carrusel",)

    def to_representation(self, instance):
        data = super().to_representation(instance)

        # Modify the foto_del_carrusel URL to include only the desired part
        url_parts = data["foto_del_carrusel"].split("/")
        carrousel_part = "/".join(url_parts[-2:])
        data["foto_del_carrusel"] = carrousel_part

        return data