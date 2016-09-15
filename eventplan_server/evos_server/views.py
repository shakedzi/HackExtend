from django.shortcuts import render
from django.http import HttpResponse
from FrontEnd import creation

def index(request):
    aa = request.GET.getlist('inputs', '')
    listOfUsers = aa[0]
    adminID = aa[1]
    return HttpResponse(creation.arrangeTables(listOfUsers, adminID, FB_Token))

