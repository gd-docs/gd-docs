# uploadGJLevelList.php

Uploads a created list to the servers.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="always"/> | <ParamDesc name="gameVersion"/> |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `listID`<ParamInfo req="always"/> | The ID of the list if updating to a newer version, otherwise `0` |
| `listName`<ParamInfo req="always"/> | The name of the list, in plain text |
| `listDesc`<ParamInfo req="always"/> | The description of the list, in [URL-safe base64](/topics/encryption/base64.md) |
| `listLevels`<ParamInfo req="always"/> | All level IDs included in the list, separated by `,` |
| `difficulty`<ParamInfo req="always"/> | The list's difficulty face. `-1` is N/A, and then it's `0`-`10` where `0` is Auto and `10` is Extreme Demon |
| `listVersion`<ParamInfo req="always"/> | Always `0` |
| `original`<ParamInfo req="always"/> | The ID of the original list if the list was copied, otherwise `0` |
| `unlisted`<ParamInfo req="always"/> | Set to `2` if the list should be unlisted, and to `1` if the list should be unlisted and only viewable by friends |
| `seed`<ParamInfo req="always"/> | A mandatory [chk value](/topics/encryption/chk.md) generated from the first 50 characters of the listLevels parameter, followed by the accountID |
| `seed2`<ParamInfo req="always"/> | 5 randomly generated characters from `[A-Za-z0-9]` |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns the ID of the uploaded list, or `-1` if the request was rejected. Oddly, this endpoint returns a wide variety of error codes for errors that traditionally return a generic error code, but the game displays the generic error message for all of them (while also displaying the error code if it is not -1).

## Example

<!-- tabs:start -->

### **Python**

```py
import requests
import random
from string import ascii_letters, digits  # so we don't have to type [A-Za-z0-9] by hand

possible_letters = ascii_letters + digits
seed = ("").join(random.choices(possible_letters, k=5))

data = {
    "gameVersion": 22,
    "accountID": 173831, # This is DevExit's account ID
    "gjp2": "*******", # This would be DevExit's password encoded with GJP2 encryption
    "listLevels": "128,132,133,134,136", # These are the IDs of the levels in the list
    "listID": 0,
    "listName": "First Levels", # This is the list name
    "listDesc": "QSB0ZXN0IGxpc3QgZm9yIHRoZSBHRCBEb2NzIQ==", # "A test list for the GD Docs!"
    "listVersion": 0,
    "original": 0,
    "difficulty": 3, # This indicates a Hard difficulty face
    "unlisted": 2, # This list is unlisted, but does exist!
    "levelString": levelString, # The level string for the level described above
    "seed": seed,
    "seed2": '', # TODO,
    "secret": "Wmfd2893gb7"
}

headers = {
	"User-Agent": ""
}

url = "https://www.boomlings.com/database/uploadGJLevelList.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

<!-- tabs:end -->

**Response**

```plain
297650
```

