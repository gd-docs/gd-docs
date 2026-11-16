# getGJThreadInvites.php

Gets your current thread invites.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

A list of [Thread Invite Objects](/resources/server/thread#thread-invite-object) separated by pipes `|`, or `none` if there are no pending invites.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the messages from a thread

data = {
    "accountID": 26068292, # GMDAntiMatter's account ID
    "gjp2": "********", # This would be GMDAntiMatter's password encoded with GJP2 encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/getGJThreadInvites.php", data=data)
print(req.text)
```

**Response**
```plain
95413:11689559:WmFsdGVk:ZmhkamQ=:1:4 minutes:4 minutes::dHlwZSBzaGk=:0:0:41:2:13:0:2:0:easydemon:1792278851|92574:11689559:WmFsdGVk:MTIzNDU2Nzg5MDEyMzQ1Njc4OTA=:1:9 minutes:1 hour:::0:1:41:2:13:0:2:0::1792278594
```

<!-- tabs:end -->
