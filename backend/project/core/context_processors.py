from portfolio.models import Service, Portfolio

def services_context(request):
    return {
        "services": Service.objects.all(),
        "portfolios": Portfolio.objects.all()[:6],
    }
