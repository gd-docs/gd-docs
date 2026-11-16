# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `levelID`<ParamInfo req="always"/> | The ID of the level receiving the star suggestion |
| `stars`<ParamInfo req="always"/> | The amount of stars being suggested |
| `rs`<ParamInfo req="always"/> | 10 randomly generated characters from `[A-Za-z0-9]` |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `udid`<ParamInfo req="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="always"/> | <ParamDesc name="uuid"/> |
| `chk`<ParamInfo req="always"/> | [See here](/topics/encryption/chk.md#rate) |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Always 1 if the parameters `secret`, `levelID` and `stars` are specified. `chk`, `udid`, `uuid`, `rs`, `accountID` and `gjp2` are technically not required but the star rating will not go through if these parameters aren't specified

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "levelID": 15254724,
    "stars": 3
}

req = requests.post('https://www.boomlings.com/database/rateGJStars211.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
