# deleteGJComment20.php

Deletes a level comment.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | Account ID of the user deleting the comment |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `commentID`<ParamInfo req="always"/> | ID of the comment |
| `levelID`<ParamInfo req="always"/> | ID of the level the comment is on |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
