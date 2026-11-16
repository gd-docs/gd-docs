# deleteGJAccComment20.php

Deletes an account comment.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `commentID`<ParamInfo req="always"/> | The ID of the comment being deleted (Returned by [uploadGJAccComment20](/endpoints/comments/uploadGJAccComment20.md)) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `cType`<ParamInfo req="no" sent="always"/> | The comment type. `0` for level (unused), `1` for account |
| `targetAccountID`<ParamInfo req="always"/> | Account ID of the comment author |

<ParamInfoFooter/>
</ParamGroup>

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
