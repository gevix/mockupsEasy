from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('<slug:slug>/', index),
    path('category/<slug:slug>/', index),
]
