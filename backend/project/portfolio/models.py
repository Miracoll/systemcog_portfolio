from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from django.conf import settings
from django.utils import timezone
from django.core.validators import FileExtensionValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import validate_email
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from PIL import Image

def validate_systemcog_email(value):
    # First, ensure it's a valid email
    validate_email(value)
    # Then check domain
    if not value.lower().endswith("@systemcog.cc"):
        raise ValidationError(
            _('%(value)s must be a systemcog.cc email'),
            params={'value': value},
        )

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"Message from {self.name} - {self.email}"

class Service(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = models.TextField()
    detailed_description = RichTextField()
    image = models.ImageField(upload_to='services/images/', blank=True, null=True)
    icon = models.FileField(upload_to="service_icons/", validators=[FileExtensionValidator(allowed_extensions=["svg"])], blank=True, null=True, help_text="SVG file only")  # upload .svg
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("service_detail", kwargs={"slug": self.slug})
    
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return f"/blog/category/{self.slug}/"

class Portfolio(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = RichTextField()
    service = models.ForeignKey(Service,on_delete=models.SET_NULL,related_name="portfolios",null=True, blank=True)
    date = models.DateField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to="portfolio/images/", help_text="Ideal size: 1712px X 840px")
    short_image = models.ImageField(upload_to="portfolio/images/short/", help_text="Ideal size: 832px X 840px")
    author = models.CharField(max_length=100, default="SystemCog Team")
    category = models.ManyToManyField(Category, related_name="portfolios", blank=True)

    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Portfolio.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug

        # auto-update website if empty
        if not self.website:
            domain = getattr(settings, "SITE_DOMAIN", "https://systemcog.cc")
            self.website = f"{domain}{reverse('portfolio_detail', kwargs={'slug': self.slug})}"

        super().save(*args, **kwargs)

        # --- Auto Resize Image ---
        if self.image:
            img_path = self.image.path
            try:
                img = Image.open(img_path)
                if img.size != (1712, 840):  # Only resize if not already correct
                    img = img.resize((1712, 840), Image.Resampling.LANCZOS)
                    img.save(img_path)  # Overwrite original
            except Exception as e:
                raise ValueError(f"Error processing image: {e}")
            
        # --- Auto Resize Short Image for Grid ---
        if self.short_image:
            short_path = self.short_image.path
            try:
                img = Image.open(short_path)
                if img.size != (832, 840):
                    img = img.resize((832, 840), Image.Resampling.LANCZOS)
                    img.save(short_path)
            except Exception as e:
                raise ValueError(f"Error processing short image: {e}")

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("portfolio_detail", kwargs={"slug": self.slug})

class TeamMember(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    bio = models.TextField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True, help_text="Domain must be systemcog.cc", validators=[validate_systemcog_email])

    # Social links
    facebook = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)

    # Profile Image
    image = models.ImageField(
        upload_to="team/images/",
        help_text="Ideal size: 612px X 660px"
    )

    # Slug field (unique)
    slug = models.SlugField(max_length=160, unique=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} - {self.role}"

    def get_absolute_url(self):
        return reverse("team_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):
        # Generate slug if missing
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while TeamMember.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug

        super().save(*args, **kwargs)  # Save first to ensure file exists

        # Resize image if needed
        if self.image:
            img_path = self.image.path
            try:
                img = Image.open(img_path)
                if img.size != (612, 660):  # Only resize if not already correct
                    img = img.resize((612, 660), Image.Resampling.LANCZOS)
                    img.save(img_path)  # Overwrite the original file
            except Exception as e:
                raise ValidationError(f"Error processing image: {e}")
    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=60, unique=True, blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return f"/blog/tag/{self.slug}/"
    
class Blog(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    content = RichTextUploadingField()
    excerpt = models.TextField(blank=True, null=True, help_text="Optional short summary")
    image = models.ImageField(upload_to='blog/images/', blank=True, null=True, help_text="Ideal size: 1712px X 1080px")
    short_image = models.ImageField(upload_to="blog/images/short/", help_text="Ideal size: 832px X 680px")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="blogs")
    author = models.CharField(max_length=100, default="SystemCog Team")
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    comments_enabled = models.BooleanField(default=True)
    number_of_views = models.PositiveIntegerField(default=0)
    number_of_comments = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField(Tag, related_name='blogs', blank=True)
    quote = models.CharField(max_length=255, blank=True, null=True, help_text="Optional quote to highlight")

    # Optional SEO fields (if you want custom overrides)
    meta_title = models.CharField(max_length=255, blank=True, null=True)
    meta_description = models.CharField(max_length=500, blank=True, null=True)
    meta_keywords = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

        # --- Auto Resize Image ---
        if self.image:
            img_path = self.image.path
            try:
                img = Image.open(img_path)
                if img.size != (1712, 1080):  # Only resize if not already correct
                    img = img.resize((1712, 1080), Image.Resampling.LANCZOS)
                    img.save(img_path)  # Overwrite original
            except Exception as e:
                raise ValueError(f"Error processing image: {e}")
            
        # --- Auto Resize Short Image for Grid ---
        if self.short_image:
            short_path = self.short_image.path
            try:
                img = Image.open(short_path)
                if img.size != (832, 680):
                    img = img.resize((832, 680), Image.Resampling.LANCZOS)
                    img.save(short_path)
            except Exception as e:
                raise ValueError(f"Error processing short image: {e}")

    def get_absolute_url(self):
        return f"/blog/{self.slug}/"
    
class Comment(models.Model):
    blog = models.ForeignKey(Blog,on_delete=models.CASCADE,related_name="comments")
    parent = models.ForeignKey("self",on_delete=models.CASCADE,null=True,blank=True,related_name="replies")
    name = models.CharField(max_length=100)
    email = models.EmailField()
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Comment by {self.name} on {self.blog.title}"

    @property
    def is_reply(self):
        return self.parent is not None
