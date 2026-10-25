# getGJThreadMembers.php

Gets the members of a thread. You can use this for threads you are a member of and threads you have a pending invite to.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `threadID`      | The ID of the thread to fetch messages from | Yes | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

A successful request will return the data in the format

```
{members}#{formerMembers}#{invites}
```

where:

- `{members}` is a list of [User Objects](/resources/server/user) of all the members, separated by pipes `|`
- `{formerMembers}` is a list of [Thread Former User Objects](/resources/server/user#thread-former-user-object) of members that left or were kicked, separated by pipes `|`
- `{invites}` is a list of [Thread Invite User Objects](/resources/server/user#thread-invite-user-object) of all the users that have been invited

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the messages from a thread

data = {
    "accountID": 26068292, # GMDAntiMatter's account ID
    "gjp2": "********", # This would be GMDAntiMatter's password encoded with GJP2 encryption
    "secret": "Wmfd2893gb7",
    "threadID": 49028
}

req = requests.post("https://www.boomlings.com/database/getGJThreadMembers.php", data=data)
print(req.text)
```

**Response**
```plain
1:HDanke:2:5057576:9:3:10:74:11:14:51:15:14:8:15:2:3:19198:52:615:4:334:13:164:17:2394:46:31841:64:1792222717:16:227228|1:Cvolton:2:6330800:9:101:10:19:11:12:51:0:14:0:15:0:3:12632:52:451:4:145:13:152:17:1347:46:
17890:64:1702931415:16:761691|1:230V:2:39365305:9:65:10:41:11:3:51:3:14:1:15:2:3:14683:52:529:4:107:13:123:17:3557:46:40233:64:1792126081:16:8028036|1:Rifct:2:81183402:9:148:10:17:11:12:51:105:14:3:15:2:3:23434:5
2:1603:4:475:13:132:17:1904:46:35865:64:1792218462:16:8927557|1:GMDAntiMatter:2:234213135:9:296:10:0:11:3:51:3:14:0:15:0:3:0:52:0:4:0:13:0:17:0:46:0:64:1741627657:16:26068292##5327860:18018899:cWppdnhu:26068292:3
7:8:3:52:7:0:49103:10070:3779:164:7421:139073:1703675348
```

<!-- tabs:end -->
