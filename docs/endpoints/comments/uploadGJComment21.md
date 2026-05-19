# uploadGJComment21.php

Uploads a comment to a user level.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `userName`      | The commenter's username | Yes      | <!--a-->
| `comment`       | The comment, converted to [URL-safe base64](/topics/encryption/base64) | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `levelID`       | The ID of the level to comment on. If commenting on a list, the ID should be negative | Yes      | <!--a-->
| [`chk`](/topics/encryption/chk#comment) | `userName` + `comment` + `levelID` + `percent` + `0` | Yes      | <!--a-->
| `percent`       | The level percentage shown on the comment as an integer. Only sent if percentage is not 0 |          | <!--o: not sent when zero-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns the ID of the posted comment, or `-1` if the request was rejected.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is posting the comment "Hello from the GDDocs!" to 62687277

chk = generate_chk(key="29481", values=["devexit", "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", 62687277, 69, 0], salt="xPT6iUrtws0J")
# These values can be found in the XOR and CHK pages

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "userName": "devexit",
    "comment": "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", # "Hello from the GDDocs!"
    "levelID": 62687277,
    "percent": 69,
    "chk": chk,
    "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/uploadGJComment21.php", data=data)
print(req.text)
```

**Response**
```py
31444784
```

<!-- tabs:end -->
