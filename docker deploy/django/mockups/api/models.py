from django.db import models
from cloudinary_storage.storage import RawMediaCloudinaryStorage

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=500)
    slug = models.SlugField()
    

    def __str__(self):
        return self.name


class MockupTemplate(models.Model):
    name = models.CharField(max_length=500)
    slug = models.SlugField()
    glb = models.FileField(upload_to='glb/',storage=RawMediaCloudinaryStorage())
    description = models.TextField(max_length=5000)
    templateImage = models.ImageField(upload_to='templateImages/')
    templateImageHeight = models.IntegerField()
    templateImageWidth = models.IntegerField()
    image = models.ImageField(upload_to='images/')
    category = models.ManyToManyField(Category, blank=True, related_name='mockuptemplate_set')

    def __str__(self):
        return self.name