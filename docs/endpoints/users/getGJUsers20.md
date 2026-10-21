# getGJUsers20.php

Searches for a user and returns their info

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `str`<ParamInfo req="no" sent="always"/> | The name or user ID of the user you want to search for |
| `page`<ParamInfo req="no" sent="always"/> | The page of users you want. Redundant as it only returns 1 user |
| `total`<ParamInfo req="no" sent="always"/> | Probably the cached total number of users, default is `0` |

<ParamInfoFooter/>
</ParamGroup>

## Response

A [user object](/resources/server/user.md) of the person you're searching for.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "str": "Foundmyball"
}

req = requests.post('https://www.boomlings.com/database/getGJUsers20.php', data=data)
print(req.text)
```

**Response**
```plain
1:foundmyball:2:15976456:13:66:17:50:6::9:2:10:11:11:15:14:6:15:0:16:5056324:3:571:8:0:4:31#999:0:10
```

<!-- tabs:end -->
