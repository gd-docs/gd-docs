# rateGJDemon21.php

Rates the demon difficulty of a demon level - only works for Geometry Dash moderators

## Parameters

| Parameter       | Explanation                                                                                        | Required |
| --------------- | -------------------------------------------------------------------------------------------------- | -------- |
| `gameVersion`   | <ParamDesc name="gameVersion"/> | Yes      | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="mod"/> | Yes      | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `levelID`       | The ID of the demon being rated                                                                    | Yes      | <!--a-->
| `rating`        | 1 for Easy Demon, 2 for Medium Demon, 3 for Hard Demon, 4 for Insane Demon and 5 for Extreme Demon | Yes      | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

For normal Players: Internal Server Error or -1

if mode=1

mod: levelID

normal user: -2

## Example

<!-- tabs:start -->

### **Python - normal Players**

```py
import requests

headers = {
}

data = {
    "secret": "Wmfp3897gc3",
    "levelID": 3979721,
    "rating": 5
}

req = requests.post('https://www.boomlings.com/database/rateGJDemon21.php', headers=headers, data=data)
print(req.text)
```

**Response**
```py
-1
```

### **Python - Moderators**

```py
import requests

headers = {
}

data = {
    "gameVersion": 21,
    "binaryVersion": 35
    "accountID": 71,
    "gjp2": *********, #the GJP of the moderator
    "secret": "Wmfp3897gc3",
    "levelID": 4284013,
    "rating": 3
}

req = requests.post('https://www.boomlings.com/database/rateGJDemon21.php', headers=headers, data=data)
print(req.text)
```

**Response**
```py
4284013
```

<!-- tabs:end -->
