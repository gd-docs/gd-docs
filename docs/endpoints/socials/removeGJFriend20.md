# removeGJFriend20.php

Removes someone from a user's friend list

## Parameters

| Parameter         | Explanation | Required |
| ----------------- | ----------- | -------- |
| `accountID`       | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`            | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `targetAccountID` | The accountID of the user being removed | Yes      | <!--a-->
| `secret`          | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`     | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion`   | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`            | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`            | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`             | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Always returns `1`, regardless of the passed `targetAccountID`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP2 encryption
    'targetAccountID': 5317656,
    'secret': 'Wmfd2893gb7'
}

r = requests.post('https://www.boomlings.com/database/removeGJFriend20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->