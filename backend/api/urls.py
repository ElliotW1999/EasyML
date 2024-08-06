from django.urls import path
from .views import get_data
from . import views

urlpatterns = [
    path('data/', get_data),
    path('upload/', views.upload_file, name='upload_file'),
]
