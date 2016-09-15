#!/usr/bin/python

import DBhandler



def createPairs(userFriendsList, relevantAdminFriends, adminID):
    # userFriendsList = map of user and it's friends
    # relevantAdminFriends = the friends the admin invited (facebook id)

    # for each admin friend - find it in userFriendsList
    for adminFriend in relevantAdminFriends:
        friendList = userFriendsList[adminFriend]
        # for each friend's userFriendList, for each friend search its friends in relevantAdminFriends
        for friend in friendList:
            if friend != adminID:
                if friend in relevantAdminFriends:
                #if found, check if not already in DB, if not, insert to DB
                    dbhandler = DBhandler.DBhandler()
                    dbhandler.insertPair(friend,adminFriend)

                else:
                    # else - continue
                    continue
    return


createPairs({2:[1,4,5], 3:[1,4,7], 4:[1,2,3]}, [2,3,4], 1)

