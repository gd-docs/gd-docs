# getGJSongInfo.php

Gets info about a newgrounds song.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `songID`<ParamInfo req="always"/> | The newgrounds ID of the song you want information about |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

A [song object](/resources/server/song.md) with `~|~` as the delimiter.

Error code `-1` indicates a general error ("Failed to fetch song info"), usually meaning the song ID is invalid.\
Error code `-2` indicates the song is not allowed for use.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "songID": 803223
}

req = requests.post("https://www.boomlings.com/database/getGJSongInfo.php", data=data)
print(req.text)
```

**Response**
```plain
1~|~803223~|~2~|~Xtrullor - Arcana~|~3~|~2159~|~4~|~Xtrullor~|~5~|~8.81~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F803000%2F803223_Xtrullor---Arcana.mp3%3Ff1524940372~|~7~|~UCejLri1RVC7kj8ZVNX2a53g
```

<!-- tabs:end -->
