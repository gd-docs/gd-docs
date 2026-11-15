# rateGJDemon21.php

Rates the demon difficulty of a demon level

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="cond" sent="always"/> | <ParamDesc name="gjp2"/> <ParamCond req>`accountID` is not empty</ParamCond> |
| `levelID`<ParamInfo req="always"/> | The ID of the demon being rated |
| `rating`<ParamInfo req="always"/> | 1 for Easy Demon, 2 for Medium Demon, 3 for Hard Demon, 4 for Insane Demon and 5 for Extreme Demon |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="mod"/> |
| `mode`<ParamInfo req="no" sent="cond"/> | 1 if the user is an Advisor or a Moderator <ParamCond sent="cond">non-zero</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>

## Response

If the required params are valid, the response is 1.

If `mode` is set to 1 and `accountID` and `gjp2` are provided for an account without the required [moderator access](/endpoints/misc/requestUserAccess), the response is -2. This error reponse also causes the game to remove the status from save data.

## Example

<!-- tabs:start -->

### **Python**

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
1
```

<!-- tabs:end -->
