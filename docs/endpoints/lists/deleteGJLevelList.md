# deleteGJLevelList.php

Deletes a list from the server.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `udid`<ParamInfo req="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="always"/> | <ParamDesc name="uuid"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `listID`<ParamInfo req="always"/> | The ID of the list being deleted |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="level"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
