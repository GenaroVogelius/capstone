from django.contrib import admin

# Register your models here.
from django import forms
from django.contrib import admin
from django.core.cache import cache
from django.core.validators import RegexValidator
from django.forms.widgets import TextInput
from django.shortcuts import render
from django.urls import path
from django.utils.html import format_html

from .models import *
from .views import *


class RutinaFormularioInline(admin.TabularInline):
    model = RutinaFormulario
    extra = 1
    autocomplete_fields = ("detalles_de_ejercicio",)


class PromocionEspecialInline(admin.TabularInline):
    model = PromocionEspecial
    extra = 1


class PowerAdminArea(admin.AdminSite):
    site_header = "Power Gym Administración"
    site_url = "/entrada"
    index_title = "Administración del Power Gym"


power_site = PowerAdminArea(name="powerAdmin")

# ? hasta ahi lo que hiciste fue crear una administración personalizada


# ? aca lo que haces es customize el formulario de django
class UsuarioModelForm(forms.ModelForm):
    DNI = forms.IntegerField(widget=forms.TextInput(attrs={"size": 10}))
    celular = forms.IntegerField(
        widget=forms.TextInput(attrs={"size": 10}), required=False
    )
    # estableces lo que esta permitdo por medio de una regular expresion

    class Meta:
        model = Usuario
        fields = "__all__"


class ServicioAdminForm(forms.ModelForm):
    class Meta:
        model = Servicio
        fields = '__all__'


class UsuarioAdmin(admin.ModelAdmin):
    list_display = (
        "nombre",
        "apellido",
        "sexo",
        "DNI",
        "celular",
        "pago",
        "vencimiento",
        "activo",
        "solicitud_nueva_rutina",
    )
    ordering = ("-date_modified",)
    list_filter = ("activo","solicitud_nueva_rutina",)
    # te hace la paginación:
    list_per_page = 10
    search_fields = (
        "nombre",
        "apellido",
        "DNI",
    )
    search_help_text = "Buscar por nombre, apelido o DNI"
    actions = ["mark_as_published", "mark_as_unpublished"]
    change_list_template = "change_list_usuarios.html"

    # list_editable = ( "apellido", "sexo", "DNI", "celular", "pago", "vencimiento")

    form = UsuarioModelForm

    def update_activo(self, obj):
        if obj.vencimiento < timezone.now().date():
            obj.activo = False
        else:
            obj.activo = True
        obj.save()

    update_activo.short_description = "Update Activo"

    # the changelist_view method checks the last execution date stored in the cache (update_activo_last_execution_date). If it is different from the current date, the update_activo function is called for each object in the queryset, and the activo field is updated accordingly. After the execution, the current date is stored in the cache as the last execution date.
    def changelist_view(self, request, extra_context=None):
        last_execution_date = cache.get("update_activo_last_execution_date")
        current_date = timezone.now().date()

        if last_execution_date != current_date:
            queryset = self.get_queryset(request)
            for obj in queryset:
                self.update_activo(obj)

            cache.set("update_activo_last_execution_date", current_date)

        return super().changelist_view(request, extra_context=extra_context)

    def get_urls(self):
        urls = super().get_urls()
        # lo que haces aca es crear este path y que cuando se lo llame se ejecute la función upload
        new_urls = [path("upload-excel/", upload_excel), path("graphics/", graphics)]
        return new_urls + urls


class AsistenciaAdmin(admin.ModelAdmin):
    list_display = ("usuario", "dia", "hora", "activo")
    list_filter = ("dia", "activo")
    search_fields = ("usuario",)
    search_help_text = "Buscar por nombre"
    list_per_page = 10
    ordering = ("-dia",)


class RutinaAdmin(admin.ModelAdmin):
    search_fields = ("usuario__nombre", "usuario__DNI")
    search_help_text = "Buscar por sesión, nombre o DNI"
    autocomplete_fields = ("usuario",)
    ordering = ("sesion",)
    inlines = [RutinaFormularioInline]


class TarifaAdmin(admin.ModelAdmin):
    inlines = [PromocionEspecialInline]
    list_display = ("tipo_de_tarifa", "precio")

    def precio_con_signo(self, obj):
        # Agregar el signo "$" delante del valor de "precio"
        return f"${obj.precio}"

    precio_con_signo.short_description = "Precio"
    # exclude = ('promo_especial', )


class Detalle_de_ejercicioAdmin(admin.ModelAdmin):
    search_fields = ("detalles_de_ejercicio",)

    def changeform_view(self, request, object_id=None, form_url='', extra_context=None):
        extra_context = extra_context or {}
        extra_context['title'] = 'Ejercicio'
        return super().changeform_view(request, object_id, form_url, extra_context=extra_context)
    
    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['title'] = 'Ejercicio'
        return super().changelist_view(request, extra_context=extra_context)





class ServicioAdmin(admin.ModelAdmin):
    list_display = ("titulo", "descripcion", "flaticon")
    list_per_page = 10
    form = ServicioAdminForm
    list_display = ('titulo', 'descripcion', 'flaticon')


    def get_form(self, request, obj=None, **kwargs):
        form = super(ServicioAdmin, self).get_form(request, obj, **kwargs)
        # Agregar un enlace al lado del campo flaticon
        form.base_fields['flaticon'].help_text += format_html('<br><a href="https://fontawesome.com/search?m=free&o=r" target="_blank">Ver iconos para elegir</a>')
        return form


class FotosGimnasioAdmin(admin.ModelAdmin):
    ordering = ['orden']
    list_display = ('nombre', 'orden',)
    list_editable = ('orden',)
power_site.register(Usuario, UsuarioAdmin)
power_site.register(Asistencia, AsistenciaAdmin)
power_site.register(Rutina, RutinaAdmin)
power_site.register(Servicio, ServicioAdmin)
power_site.register(Detalle_de_ejercicio, Detalle_de_ejercicioAdmin)
power_site.register(Tarifa, TarifaAdmin)
power_site.register(FotosGimnasio, FotosGimnasioAdmin)