# uploadGJLevelList.php

Uploads a created list to the servers.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `gameVersion`   | <ParamDesc name="gameVersion"/>| Yes      | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/>| Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `listID`        | The ID of the list if updating to a newer version, otherwise `0` | Yes      | <!--a-->
| `listName`      | The name of the list, in plain text | Yes      | <!--a-->
| `listDesc`      | The description of the list, in [URL-safe base64](/topics/encryption/base64.md) | Yes      | <!--a-->
| `listLevels`    | All level IDs included in the list, separated by `,` | Yes      | <!--a-->
| `difficulty`    | The list's difficulty face. `-1` is N/A, and then it's `0`-`10` where `0` is Auto and `10` is Extreme Demon | Yes      | <!--a-->
| `listVersion`   | Always `0` | Yes      | <!--a-->
| `original`      | The ID of the original list if the list was copied, otherwise `0` | Yes      | <!--a-->
| `unlisted`      | Set to `2` if the list should be unlisted, and to `1` if the list should be unlisted and only viewable by friends | Yes      | <!--a-->
| `seed`          | A mandatory [chk value](/topics/encryption/chk.md) generated from the first 50 characters of the listLevels parameter, followed by the accountID | Yes      | <!--a-->
| `seed2`         | 5 randomly generated characters from `[A-Za-z0-9]` | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/>| Yes      | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns the ID of the uploaded list, or `-1` if the request was rejected.

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

