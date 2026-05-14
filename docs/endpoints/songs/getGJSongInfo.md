# getGJSongInfo.php

Gets info about a newgrounds song.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `songID`        | The newgrounds ID of the song you want information about | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->

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