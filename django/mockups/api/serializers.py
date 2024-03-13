from rest_framework import serializers
from .models import MockupTemplate, Category

class MockupTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MockupTemplate
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'




