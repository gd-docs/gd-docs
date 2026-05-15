# getGJUsers20.php

Searches for a user and returns their info

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="accountID"/> |          | <!--a-->
| `str`           | The name or user ID of the user you want to search for |          | <!--a-->
| `page`          | The page of users you want. Redundant as it only returns 1 user |          | <!--a-->
| `total`         | Probably the cached total number of users, default is `0` |          | <!--a-->

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
