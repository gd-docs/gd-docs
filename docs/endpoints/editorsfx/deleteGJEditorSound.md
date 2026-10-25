# deleteGJEditorSound.php

Deletes a sound pack from the server.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      |
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      |
| `secret`        | <ParamDesc name="secret" type="level"/> | Yes      |
| `soundID`       | The ID of the pack being deleted | Yes      |
| `udid`          | <ParamDesc name="udid"/> |          |
| `uuid`          | <ParamDesc name="uuid"/> |          |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          |
| `dvs`           | <ParamDesc name="dvs"/> |          |

## Response

Returns 1 if deleted, -1 if it failed or the pack does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the sound pack with ID 53820
headers = {
    "User-Agent": ""
}

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "listID": 53820,
        "secret": "Wmfv2898gc9"
}

req = requests.post("https://www.boomlings.com/database/deleteGJEditorSound.php", data=data, headers=headers)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
