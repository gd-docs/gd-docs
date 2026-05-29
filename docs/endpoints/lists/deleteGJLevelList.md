# deleteGJLevelList.php

Deletes a list from the server.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `udid`          | <ParamDesc name="udid"/> | Yes      | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `listID`        | The ID of the list being deleted | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="level"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns 1 if deleted, -1 if it failed or the list does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the list with ID 414808
headers = {
    "User-Agent": ""
}

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "listID": 414808,
        "secret": "Wmfv2898gc9"
}

req = requests.post("https://www.boomlings.com/database/deleteGJLevelList.php", data=data, headers=headers)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
