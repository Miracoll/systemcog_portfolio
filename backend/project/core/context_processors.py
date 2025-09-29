from portfolio.models import Service

def services_context(request):
    return {
        "services": Service.objects.all()
    }
