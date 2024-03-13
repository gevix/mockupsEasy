from django.contrib import admin
from .models import MockupTemplate, Category
# Register your models here.

class MockupTemplateAdmid(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

    class Meta:
        model = MockupTemplate


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

    class Meta:
        model = Category


admin.site.register(MockupTemplate, MockupTemplateAdmid)
admin.site.register(Category, CategoryAdmin)