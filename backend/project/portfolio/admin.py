from django.contrib import admin
from .models import ContactMessage, Service, Portfolio, TeamMember, Blog, Category, Tag, Comment


# Register other models normally
admin.site.register(Service)
admin.site.register(Portfolio)
admin.site.register(TeamMember)
admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(ContactMessage)


# Custom Comment Admin
class CommentAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "content", "approved", "created_at")

    def get_readonly_fields(self, request, obj=None):
        """
        Make all fields readonly except `approved` if user is in the 'editor' group.
        """
        if request.user.groups.filter(name="editor").exists():
            return [f.name for f in self.model._meta.fields if f.name != "approved"]
        return []  # Superusers (and others) can edit all fields


# Register Comment with custom admin
admin.site.register(Comment, CommentAdmin)


# Branding
admin.site.site_header = "Systemcog Admin"
admin.site.site_title = "Systemcog Admin Portal"
admin.site.index_title = "Welcome - Admin"
admin.site.site_url = "admin"