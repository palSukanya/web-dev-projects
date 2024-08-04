from django.shortcuts import render, redirect
from django.db.models import F
from .models import SubmitCount

def index(request):
    submit_count = SubmitCount.objects.get_or_create(id=1,)[0]
    return render(request, 'index.html', {'submit_count': submit_count})

def submit(request):
    if request.method == 'POST':
        SubmitCount.objects.update_or_create(id=1, defaults={'count': F('count') + 1})
        return redirect('index')
    submit_count = SubmitCount.objects.get_or_create(id=1)[0]
    return render(request, 'index.html', {'submit_count': submit_count})