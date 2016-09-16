from django.shortcuts import render
from django.http import HttpResponse
from FrontEnd import creation
import pdb
import json

class userdata():
    def __init__(self, picture , id, access_token, name, email):
        self.picture = picture
        self.id = id
        self.access_token = access_token
        self.name = name
        self.email = email

def index(request):
    some_data = json.loads(request.body)
    user_data = userdata(
        some_data['user']['Picture'],
        some_data['user']['id'],
        some_data['user']['accessToken'],
        some_data['user']['name'],
        some_data['user']['email']
    )
    listOfUsers = [user_data.id]
    adminID = [user_data.id]
    gods_work = creation.creation(user_data.access_token)
    return HttpResponse(gods_work.arrangeTables(listOfUsers, adminID))

