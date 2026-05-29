# requestUserAccess.php

Requests moderator access.

## Parameters

| Parameter       | Explanation| Required |
| --------------- | ----------- | -------- |
| `accountID`     | The accountID of the user requesting mod access | Yes      | <!--a-->
| `gjp2`          | The [GJP2](/topics/gjp.md) of the user requesting mod access | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

1 if granted Moderator, 2 if granted Elder Moderator, 99 if granted Leaderboard Moderator, and -1 if not granted

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP2 encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post('https://www.boomlings.com/database/requestUserAccess.php', data=data)
print(req.text)
```

**Response**
```py
-1
```

<!-- tabs:end -->
