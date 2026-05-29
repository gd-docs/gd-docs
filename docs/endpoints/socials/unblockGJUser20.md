# unblockGJUser20.php

Unblocks a user.

## Parameters

| Parameter         | Explanation | Required |
| ----------------- | ----------- | -------- |
| `accountID`       | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`            | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `targetAccountID` | The account ID of the person getting unblocked     | Yes      | <!--a-->
| `secret`          | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`     | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion`   | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`            | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`            | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`             | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Always returns 1, regardless of if the target account exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is unblocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/unblockGJUser20.php", data=data)
print(req.text)

```

**Response**
```py
1
```

<!-- tabs:end -->
