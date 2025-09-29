from django.shortcuts import render
from .models import *

# Create your views here.

def home(request):
    return render(request, 'portfolio/index.html')

def manage_service(request):
    services = Service.objects.all()
    context = {
        'services':services,
    }
    return render(request, 'portfolio/manage_service.html', context)