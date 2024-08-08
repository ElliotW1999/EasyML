from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
import time # Purely for testing
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny 
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer

def get_data(request):
    data = {'message': 'Hello from Django!'}
    return JsonResponse(data)


@csrf_exempt  # Use CSRF exempt for simplicity; in production, handle CSRF properly
def upload_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('file')
        if uploaded_file:
            # Handle the uploaded file (e.g., save it or process it)
            file_name = uploaded_file.name
            file_path = default_storage.save(file_name, ContentFile(uploaded_file.read()))
            time.sleep(10)

            return JsonResponse({'message': 'File uploaded successfully'})
        return JsonResponse({'message': 'No file uploaded'}, status=400)
    return JsonResponse({'message': 'Invalid request method'}, status=405)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(password=make_password(request.data['password']))
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)