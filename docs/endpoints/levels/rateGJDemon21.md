# rateGJDemon21.php

Rates the demon difficulty of a demon level

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="always"/> | <ParamDesc name="binaryVersion"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="mod"/> |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `levelID`<ParamInfo req="always"/> | The ID of the demon being rated |
| `rating`<ParamInfo req="always"/> | 1 for Easy Demon, 2 for Medium Demon, 3 for Hard Demon, 4 for Insane Demon and 5 for Extreme Demon |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `mode`<ParamInfo req="no" sent="cond"/> | 1 if the user is an advisor, not sent if it's a normal player |

<ParamInfoFooter/>
</ParamGroup>

## Response

If `mode` is not included/not set to 1, and `levelID` is included, and `rating` is included and within 1-5, the response is 1. `accountID`, `gjp2`, `udid`, etc. are not required for a 1 response, but the rating probably won't be added. 

if mode=1:
if the user is an advisor, the level id is the response. if the user is not an advisor, the response is -2. the -2 reponse also causes the game to remove the advisor status from save data.

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
