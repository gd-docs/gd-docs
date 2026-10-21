# removeGJFriend20.php

Removes someone from a user's friend list

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `targetAccountID`<ParamInfo req="always"/> | The accountID of the user being removed |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
