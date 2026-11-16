# updateGJDesc20.php

Updates the description of a level

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `levelID`<ParamInfo req="always"/> | The ID of the level |
| `levelDesc`<ParamInfo req="always"/> | The new description of the level, converted to [URL-safe base64](/topics/encryption/base64) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
