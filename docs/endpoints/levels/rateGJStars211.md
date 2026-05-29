# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `levelID`       | The ID of the level receiving the star suggestion | Yes      | <!--a-->
| `stars`         | The amount of stars being suggested | Yes      | <!--a-->
| `rs`            | 10 randomly generated characters from `[A-Za-z0-9]` | Yes      | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `udid`          | <ParamDesc name="udid"/> | Yes      | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> | Yes      | <!--a-->
| `chk`           | [See here](/topics/encryption/chk.md#rate)           | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

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
