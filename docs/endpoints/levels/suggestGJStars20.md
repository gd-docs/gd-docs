# suggestGJStars20.php

Endpoint used by moderators to send levels to RobTop

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      |
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      |
| `levelID`       | The ID of the level | Yes      |
| `stars`         | How many stars that are requested | Yes      |
| `secret`        | <ParamDesc name="secret" type="mod"/> | Yes      |
| `gameVersion`   | <ParamDesc name="gameVersion"/> | Yes      |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> | Yes      |
| `feature`       | 0 for star rate, 1 for feature, 2 for epic, 3 for legendary, 4 for mythic | Yes      |
| `udid`          | <ParamDesc name="udid"/> |          |
| `uuid`          | <ParamDesc name="uuid"/> |          |
| `dvs`           | <ParamDesc name="dvs"/> |          |

## Response

-2 or 1

## example

<!--tabs:start -->

## Python
```py
import requests

data = {
        "gameVersion": 21,
        "binaryVersion":35
        "accountID": 71, # a moderators accountID
        "gjp2": "********", # This would be the mods password encoded with GJP2 encryption
        "levelID": 128,
        "stars": 3,
        "feature": 0,
        "gdw": 0,
        "secret": "Wmfp3879gc3"
}

req = requests.post("https://www.boomlings.com/database/suggestGJStars20.php", data=data)
print(req.text)

```

**Response**
```py
1
```
