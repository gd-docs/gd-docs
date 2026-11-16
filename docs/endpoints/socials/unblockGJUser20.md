# unblockGJUser20.php

Unblocks a user.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `targetAccountID`<ParamInfo req="always"/> | The account ID of the person getting unblocked |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
