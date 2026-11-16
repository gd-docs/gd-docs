# downloadGJEditorSound.php

Downloads a sound pack.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `soundID`       | The ID of the sound pack you want to download | Yes      |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      |
| `accountID`     | <ParamDesc name="accountID"/> |       |
| `udid`          | <ParamDesc name="udid"/> |      |
| `uuid`          | <ParamDesc name="uuid"/> |       |
| `gjp2`          | <ParamDesc name="gjp2"/> |      |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          |
| `dvs`           | <ParamDesc name="dvs"/> |          |

## Response

Returns the [Sound Pack Object](/resources/server/editorsfx.md) along with a constant hash of `f5da5823d94bbe7208dd83a30ff427c7d88fdb99`, separated from the object via a `#`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
        "soundID": 95,
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/downloadGJEditorSound.php", data=data, headers=headers)
print(req.text)
```

**Response**
```plain
1:95:2:lol:3:dGVzdA==:5:1:49:12211654:50:Mifuu:10:14:14:0:19::51:H4sIAAAAAAAACj2LMQ7CMAxFLxQJ28FJnMoDE6gSC1KRYO1ALoDaoYdvnAam9_38Pw3oEMCRw5oIEuUKScEAHhoSNhnBKpF6mYHb_RufkQ-BXUgQMcHwX2AN7ILEGDwP962nbJ_8uI3lTfKdF9X
TdF3Li6bP86K6A7m3A1ulAAAA:28:1792104761:29:1792104761:59:5:60:9:61:0:64:#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
```

<!-- tabs:end -->
