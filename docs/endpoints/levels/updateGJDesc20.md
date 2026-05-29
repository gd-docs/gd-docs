# updateGJDesc20.php

Updates the description of a level

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `levelID`       | The ID of the level                                                                         | Yes      | <!--a-->
| `levelDesc`     | The new description of the level, converted to [URL-safe base64](/topics/encryption/base64) | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

1 if successful, -1 if not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 18178627, # shikoshib's account ID
    "gjp2": "********", # This would be shikoshib's password encoded with GJP2 encryption
    "levelID": 85555028,
    "levelDesc": "V2l0aCBsb3ZlIGZyb20gR0QgRG9jcyE=", # With love from GD Docs!
    "secret": "Wmfd2893gb7",
}

r = requests.post('https://www.boomlings.com/database/updateGJDesc20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
