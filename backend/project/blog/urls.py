from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('blog/', views.blog, name='blog'),
    path("blog/<slug:slug>/", views.blog_detail, name="blog_detail"),
    path('contact/', views.contact, name='contact'),
    path('service/', views.service, name='service'),
    path("services/<slug:slug>/", views.ServiceDetailView.as_view(), name="service_detail"),
    path("portfolio/<slug:slug>/", views.PortfolioDetailView.as_view(), name="portfolio_detail"),
    path("team/<slug:slug>/", views.team_detail, name="team_detail"),
    path("team/", views.team, name="team"),
    path("working-process/", views.working_process, name="working_process"),
    path("privacy-policy/", views.privacy_policy, name="privacy_policy"),
    path("terms-conditions/", views.terms_conditions, name="terms_conditions"),
    path("faqs/", views.faqs, name="faqs"),
]