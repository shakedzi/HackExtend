print ('hello world!')

import facebook
access_token = 'EAACwfY8MG8sBAAOJqoitK4I9mav3vnrK2gLvtLqGzkJk2gm8XNMQim9ZCL7qnZAIUdLxjUKKSZC4KRyh7ziRvn9H1nh85W9H2ZCuM9pgNCmSmWZCoPaUKmOk18afaNZBZCRIzMwYgNVboeoAU2YZAb0wCpnL8VERSi2ZC9ZBnmUala8AZDZD'

graph = facebook.GraphAPI(access_token=access_token, version='2.1')
profile = graph.get_object("me")
friends = graph.get_connections("me", "friends")

friend_list = [friend['name'] for friend in friends['data']]

print friend_list
