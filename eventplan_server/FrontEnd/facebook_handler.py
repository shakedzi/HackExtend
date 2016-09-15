import requests
import facebook


class Facebook_helper():

    def __init__(self):
        self.FACEBOOK_APP_ID = '137780206406222'
        self.FACEBOOK_APP_SECRET = 'e45b1666df00671abfe403c5a3e86c95'
        self.get_graph_object()

    def get_fb_token(self, app_id, app_secret):
        payload = {'grant_type': 'client_credentials',
                   'client_id': app_id,
                   'client_secret': app_secret
                   }
        file = requests.post('https://graph.facebook.com/oauth/access_token?', params = payload)
        result = file.text.split("=")[1]
        return result

    def get_graph_object(self):
        # access_token = self.get_fb_token(self.FACEBOOK_APP_ID, self.FACEBOOK_APP_SECRET)
        access_token = 'EAACEdEose0cBAHZCx0B996tnx4xvZCHinUvrrsN1JZC8Rm7qX4Ak9MqZBhAc5d7GEOqrkr7two2EZBuYTMsKH4zxwpK0PJUitFFJZCDjBkRB1YVsWwnS4wmgZBeiyZCjQbpQ0hYbDbwuCoZC90WX7ZAoRaT13RZADx7GlKWzZCPGXwSvQQZDZD'
        self.graph = facebook.GraphAPI(access_token=access_token, version='2.7')

    def get_friend_list_ids(self, myid , after=''):
        friends = self.graph.get_connections(myid, "friends", args=after)
        friend_id_list = [friend['id'] for friend in friends['data']]
        after_token = friends['paging']['cursors']['after']
        return friend_id_list, after_token
    def get_name_from_id(self, myid):
        return self.graph.get_object(myid)['name']

    def is_the_user_my_friend(self, myid, otherid):
        myfriends = self.get_friend_list_ids(myid)
        if otherid in myfriends: return 'true'
        else: return 'false'