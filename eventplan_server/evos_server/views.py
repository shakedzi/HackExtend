from django.shortcuts import render
from django.http import HttpResponse
from FrontEnd import creation

def index(request):

    return HttpResponse(creation.arrangeTables("", 1))

