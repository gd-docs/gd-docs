# getGJSongUsage.php

Gets miscellaneous Geometry Dash-related info about a song

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `songID`<ParamInfo req="always"/> | The newgrounds ID of the song you want information about |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion` | <ParamDesc name="gameVersion"/> |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |
| `udid` | <ParamDesc name="udid"/> |
| `uuid` | <ParamDesc name="uuid"/> |
| `dvs` | <ParamDesc name="dvs"/> |
| `accountID` | <ParamDesc name="accountID"/> |
| `gjp2` | <ParamDesc name="gjp2"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

3 integers separated by commas:
  - Amount of levels that use the song as the main one
  - Amount of rated levels that use the song as the main one
  - Total amount of downloads on all the rated levels with the song

Then, separated by a `#`, the groupings of which difficulties use the song. The groupings have 3 values each, which are separated by `:`. The groupings are separated by a pipe (`|`).
  - Rating: 0 for rated, 1 for featured, 2 for epic, 3 for legendary, 4 for mythic
  - Difficulty: 0 for Auto, 1 for Easy, 2 for Normal, 3 for Hard, 4 for Harder, 5 for Insane, 6 for Demon
  - Amount: the amount of levels in this grouping

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "songID": 1132447
}

req = requests.post("https://www.boomlings.com/database/getGJSongUsage.php", data=data)
print(req.text)
```

**Response**
```plain
98566,58,9569973#0:2:1|0:3:4|0:4:8|0:5:4|0:6:4|1:2:1|1:3:8|1:4:13|1:5:5|1:6:5|2:2:1|2:3:1|2:6:3
```

<!-- tabs:end -->
