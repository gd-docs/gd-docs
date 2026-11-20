# suggestGJStars20.php

Endpoint used by moderators to send levels to RobTop

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `levelID`<ParamInfo req="always"/> | The ID of the level |
| `stars`<ParamInfo req="always"/> | How many stars that are requested |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="mod"/> |
| `gameVersion`<ParamInfo req="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="always"/> | <ParamDesc name="binaryVersion"/> |
| `feature`<ParamInfo req="always"/> | 0 for star rate, 1 for feature, 2 for epic, 3 for legendary, 4 for mythic |
| `coin`<ParamInfo req="always"/> | 0 for Unverified Coins, 1 for Verified Coins |
| `demonDiff`<ParamInfo req="always"/> | Demon Rating, 0 for Easy Demon, 5 for Extreme Demon. 0 if not demon. |
| `udid` | <ParamDesc name="udid"/> |
| `uuid` | <ParamDesc name="uuid"/> |
| `dvs` | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

-2 if not a moderator (which clears the Advisor status from save data), 1 otherwise

## example

<!--tabs:start -->

## Python
```py
import requests

data = {
        "gameVersion": 22,
        "binaryVersion":51
        "accountID": 71, # a moderators accountID
        "gjp2": "********", # This would be the mods password encoded with GJP2 encryption
        "levelID": 128,
        "stars": 3,
        "feature": 0,
        "coin": 0,
        "demonDiff": 0,
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
