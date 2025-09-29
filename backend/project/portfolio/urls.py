from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='admin-home'),
    path('service/', views.manage_service, name='admin-service'),
]