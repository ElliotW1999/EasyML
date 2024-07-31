from django.http import JsonResponse

def get_data(request):
    data = {'message': 'Hello from Django!'}
    return JsonResponse(data)