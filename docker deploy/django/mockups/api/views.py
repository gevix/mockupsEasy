from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, MockupTemplate
from .serializers import MockupTemplateSerializer, CategorySerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework import status


class MockupTemplateByCategoryView(APIView):
    def get(self, request, slug):
        try:
            category = Category.objects.get(slug=slug)
            mockup_templates = category.mockuptemplate_set.all()  # Assuming related_name is set to 'mockuptemplate_set' in the Category model
            
            # Pagination
            paginator = PageNumberPagination()
            paginator.page_size = 10  # Number of objects per page
            result_page = paginator.paginate_queryset(mockup_templates, request)
            
            serializer = MockupTemplateSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        except Category.DoesNotExist:
            return Response({'error': 'Category does not exist'}, status=404)

        

class AllMockupsView(APIView):
    def get(self, request):
        paginator = PageNumberPagination()
        paginator.page_size = 10  # Number of objects per page
        mockups = MockupTemplate.objects.all()
        result_page = paginator.paginate_queryset(mockups, request)
        serializer = MockupTemplateSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    

class AllCategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    

class MockupTemplateBySlugView(APIView):
    def get(self, request, slug):
        try:
            mockup_template = MockupTemplate.objects.get(slug=slug)
            serializer = MockupTemplateSerializer(mockup_template)
            return Response(serializer.data)
        except MockupTemplate.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class CategoryByIdView(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
            serializer = CategorySerializer(category)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({'error': 'Category does not exist'}, status=status.HTTP_404_NOT_FOUND)