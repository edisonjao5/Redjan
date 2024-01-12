from rest_framework import viewsets
from tasks.serializers.task_serializer import TaskSerializer
from tasks.models import Tasks

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Tasks.objects.all()