# deleteGJAccComment20.php

Deletes an account comment.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `commentID`     | The ID of the comment being deleted (Returned by [uploadGJAccComment20](/endpoints/comments/uploadGJAccComment20.md)) | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `cType`         | The comment type. `0` for level (unused), `1` for account |  | <!--a-->
| `targetAccountID` | Account ID of the comment author | Yes         | <!--a-->

## Response

1 if the comment was deleted, -1 if there was an error

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting his account comment with ID 1772717

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "commentID": 1772717,
    "targetAccountID": 173831, # DevExit's account ID
    "secret": "Wmfd2893gb7"
}

r = requests.post('https://www.boomlings.com/database/deleteGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
