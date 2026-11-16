# getGJThreadMessages.php

Gets the messages in a thread.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `threadID`      | The ID of the thread to fetch messages from | Yes | <!--a-->
| `beforeID`      | All fetched messages will be older than this message ID | | <!--a-->
| `afterID`       | All fetched messages will be newer than this message ID | | <!--a-->
| `aroundID`      | All fetched messages will be around this message ID. Used when jumping to a message from search | |
| `date`          |
| `mv`            | Unknown. Only sent when refreshing the thread | |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

A successful request will return the data in the format

```
{messages}#{members}#{formerMembers}#{invites}#{metadata}#{lastMessageID}#{unk}
```

where:

- `{messages}` is a list of [Thread Message Objects](/resources/server/threadmessage) separated by pipes `|`. If no messages were fetched, this segment is returned as `none`
- `{members}` is a list of [User Objects](/resources/server/user) of all the members, separated by pipes `|`
- `{formerMembers}` is a list of [Thread Former User Objects](/resources/server/user#thread-former-user-object) of members that left or were kicked, separated by pipes `|`
- `{invites}` is a list of [Thread Invite User Objects](/resources/server/user#thread-invite-user-object) of all the users wh0 currently have pending invites, separated by pipes `|`
- `{metadata}` is a [Thread Metadata Object](/resources/server/thread#thread-metadata)
- `{lastMessageID}` is the last message ID you can see before you were removed from the group thread. If you are still in the thread, it's set to 0
- `{unk}` is unknown and always seems to be `3,1,10,50`. The `50` is likely how many messages can be loaded at once

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
    "threadID": 77519
}

req = requests.post("https://www.boomlings.com/database/getGJThreadMessages.php", data=data)
print(req.text)
```

**Response**
```plain
589789:0:MiwxNDA1NDM2NSxaYWx0MiwyNjA2ODI5MixHTURBbnRpTWF0dGVy:1792229420:0|589939:26068292:aGk=:1792229483:0|589952:14054365:aGVsbG8=:1792229487:0#1:Zalt2:2:139249471:9:1:10:0:11:3:51:0:14:2:15:0:3:578:52:0:4:9:1
3:54:17:55:46:650:64:1792227610:16:14054365|1:GMDAntiMatter:2:234213135:9:296:10:0:11:3:51:3:14:0:15:0:3:0:52:0:4:0:13:0:17:0:46:0:64:1741627657:16:26068292###14054365:0:2:dGhpcyBpcyBhIGRlc2NyaXB0aW9u:0:0:0:0:dGV
zdA==:0:0#0#3,1,10,50
```

<!-- tabs:end -->
