# deleteGJLevelUser20.php

Deletes a level from the server.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `levelID`       | The ID of the level being deleted                 | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="level"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns 1 if deleted, -1 if it failed or the level does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the level with ID 62689548

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "levelID": 62689548,
        "secret": "Wmfv2898gc9"
}

req = requests.post("https://www.boomlings.com/database/deleteGJLevelUser20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
