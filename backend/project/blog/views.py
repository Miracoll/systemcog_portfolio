from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import DetailView
from django.contrib import messages
from django.core.paginator import Paginator
from portfolio.models import *

# Create your views here.

def home(request):
    portfolios = Portfolio.objects.all()[:6]
    teams = TeamMember.objects.all()[:4]
    blog = Blog.objects.all()[:4]
    context = {
        'portfolios':portfolios,
        'teams':teams,
        'blogs':blog,
    }
    return render(request, 'blog/home.html', context)

def about(request):
    team_members = TeamMember.objects.all()[:6]
    context = {
        'team_members':team_members
    }
    return render(request, 'blog/about.html', context)

def portfolio(request):
    portfolio_list = Portfolio.objects.all().order_by('-date')  # optional: newest first
    paginator = Paginator(portfolio_list, 9)  # 9 items per page
    page_number = request.GET.get('page')
    portfolios = paginator.get_page(page_number)  # returns Page object

    context = {
        'portfolios': portfolios
    }
    return render(request, 'blog/portfolio.html', context)

def blog(request):
    blog_list = Blog.objects.all().order_by('-created_at')  # newest first
    paginator = Paginator(blog_list, 6)  # 6 posts per page (adjust as needed)
    page_number = request.GET.get('page')  # get ?page= query param
    page_obj = paginator.get_page(page_number)

    context = {
        'blogs': page_obj
    }
    return render(request, 'blog/blog.html', context)

def blog_detail(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    categories = Category.objects.all()
    recent_blogs = Blog.objects.exclude(id=blog.id).order_by("-created_at")[:4]

    previous_blog = Blog.objects.filter(id__lt=blog.id).order_by("-id").first()
    next_blog = Blog.objects.filter(id__gt=blog.id).order_by("id").first()

    # blog view counter
    blog.number_of_views += 1
    blog.save()

    # ✅ fetch only parent comments here
    comments = blog.comments.filter(parent__isnull=True, approved=True)

    # Comment counter
    blog.number_of_comments = blog.comments.filter(approved=True).count()
    blog.save()

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        content = request.POST.get("content")

        new_comment = Comment(
            blog=blog,
            name=name,
            email=email,
            content=content,
            approved=False  # New comments need approval
        )
        new_comment.save()
        return redirect("blog_detail", slug=blog.slug)

    context = {
        "blog": blog,
        "categories": categories,
        "previous_blog": previous_blog,
        "next_blog": next_blog,
        "recent_blogs": recent_blogs,
        "comments": comments,   # pass to template
    }
    return render(request, "blog/blog_detail.html", context)

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        message = request.POST.get("message")

        new_message = ContactMessage(
            name=name,
            email=email,
            phone=phone,
            message=message
        )
        new_message.save()
        messages.success(request, "Your message has been sent successfully!")

        # Redirect back to the same page where the form was submitted
        return redirect(request.META.get("HTTP_REFERER", "contact"))

    return render(request, "blog/contact.html")

def service(request):
    services = Service.objects.all()
    context = {
        'services':services
    }
    return render(request, 'blog/service.html', context)

class ServiceDetailView(DetailView):
    model = Service
    template_name = "blog/service_detail.html"
    context_object_name = "service"
    slug_field = "slug"
    slug_url_kwarg = "slug"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        service = self.get_object()
        
        # Extra SEO context if needed
        context["title"] = f"{service.name} - SystemCog"
        context["description"] = service.description[:160]  # limit for meta
        context["detailed_description"] = service.detailed_description
        context["keywords"] = f"SystemCog {service.name}, {service.name} service, {service.name} solutions"
        context["image"] = service.image.url if service.image else "/static/services/images/default.png"
        context["url"] = service.get_absolute_url()
        context["services"] = Service.objects.all()
        return context

class PortfolioDetailView(DetailView):
    model = Portfolio
    template_name = "blog/portfolio_detail.html"
    context_object_name = "portfolio"
    slug_field = "slug"
    slug_url_kwarg = "slug"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        portfolio = self.get_object()

        # SEO meta context
        context["title"] = f"{portfolio.name} - SystemCog"
        context["description"] = portfolio.description[:160]  # truncate for meta
        context["keywords"] = (
            f"SystemCog {portfolio.name}, {portfolio.name} project, "
            f"{portfolio.name} case study, SystemCog portfolio, "
            f"technology projects, software development, IoT solutions, innovation"
        )
        context["image"] = portfolio.image.url if portfolio.image else "/static/portfolio/images/default.png"
        context["url"] = portfolio.get_absolute_url()

        # For navigation (previous/next projects)
        context["previous_portfolio"] = (
            Portfolio.objects.filter(id__lt=portfolio.id).order_by("-id").first()
        )
        context["next_portfolio"] = (
            Portfolio.objects.filter(id__gt=portfolio.id).order_by("id").first()
        )

        context["portfolio"] = portfolio

        return context

def team_detail(request, slug):
    """Single team member detail page"""
    member = get_object_or_404(TeamMember, slug=slug)
    return render(request, "blog/team_detail.html", {"member": member})

def team(request):
    teams = TeamMember.objects.all()
    context = {
        'teams':teams
    }
    return render(request, 'blog/team.html', context)