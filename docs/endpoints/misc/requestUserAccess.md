# requestUserAccess.php

Requests moderator access.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | The accountID of the user requesting mod access |
| `gjp2`<ParamInfo req="always"/> | The [GJP2](/topics/gjp.md) of the user requesting mod access |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
