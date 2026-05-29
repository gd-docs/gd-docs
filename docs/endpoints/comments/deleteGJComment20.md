# deleteGJComment20.php

Deletes a level comment.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | Account ID of the user deleting the comment | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `commentID`     | ID of the comment | Yes      | <!--a-->
| `levelID`       | ID of the level the comment is on | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns 1 if deleted, -1 if not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the comment with ID 31415926

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "commentID": 31415926,
        "levelID": 54953085,
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/deleteGJComment20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->