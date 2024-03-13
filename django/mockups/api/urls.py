from django.urls import path
from .views import MockupTemplateByCategoryView, AllMockupsView, AllCategoriesView, MockupTemplateBySlugView, CategoryByIdView

urlpatterns = [
    path('category/<slug:slug>/', MockupTemplateByCategoryView.as_view(), name='mockup-templates-by-category'),
    path('allmockups/', AllMockupsView.as_view(), name='all-mockups'),
    path('allcategories/', AllCategoriesView.as_view(), name='all-categories'),
    path('mockuptemplates/<slug:slug>/', MockupTemplateBySlugView.as_view(), name='mockuptemplate-by-slug'),
    path('categories/<int:id>/', CategoryByIdView.as_view(), name='category-by-id'),
]
