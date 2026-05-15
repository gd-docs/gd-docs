# uploadGJLevel21.php

Uploads a created level to the servers.

## Parameters

| Parameter        | Explanation | Required |
| ---------------- | ----------- | -------- |
| `gameVersion`    | <ParamDesc name="gameVersion"/> | Yes      | <!--a-->
| `accountID`      | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`           | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `userName`       | The uploader's username | Yes      | <!--a-->
| `levelID`        | The ID of the level if updating to a newer version, otherwise `0` | Yes      | <!--a-->
| `levelName`      | The name of the level | Yes      | <!--a-->
| `levelDesc`      | The description of the level, in [URL-safe base64](/topics/encryption/base64.md) | Yes      | <!--a-->
| `levelVersion`   | The version number of the level | Yes      | <!--a-->
| `levelLength`    | The length of the level as a number, where `0` is Tiny, `4` is XL and `5` is Platformer | Yes      | <!--a-->
| `audioTrack`     | The [official song number](/reference/songs#table-of-official-songs) used in the level (Stereo Madness = 0). Set to `0` if a newgrounds song is used | Yes      | <!--a-->
| `auto`           | Whether the player has jumped during verification | Yes      | <!--a-->
| `password`       | The level's copy password. Set to `0` for no copy or `1` for free copy. Other valid values consist of `1` followed by the password - either 4 or 6 digits. Ignored since `binaryVersion=39` | Yes      | <!--a-->
| `original`       | The ID of the original level if the level was copied, otherwise `0` | Yes      | <!--a-->
| `twoPlayer`      | Set to `1` if the level utilizes two player mode | Yes      | <!--a-->
| `songID`         | The ID of the custom song used in the level. Set to `0` if an official song is used | Yes      | <!--a-->
| `objects`        | The number of objects in the level | Yes      | <!--a-->
| `coins`          | The number of user coins in the level | Yes      | <!--a-->
| `requestedStars` | The requested star rating for the level. The number is not limited to 10 | Yes      | <!--a-->
| `unlisted`       | Set to `2` if the level should be unlisted and to `1` if the level should be unlisted and only viewable by friends | Yes      | <!--a-->
| `ldm`            | Whether the level uses high detail objects | Yes      | <!--a-->
| `levelString`    | The actual level data. Must be gzip compressed and then converted to [URL-safe base64](/topics/encryption/base64.md) | Yes      | <!--a-->
| `seed2`          | A mandatory [chk value](/topics/encryption/chk.md) generated from the first 50 characters of the **_compressed_** level data | Yes      | <!--a-->
| `secret`         | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `wt`             | The amount of time spent in the editor of a level (local copy) |          | <!--a-->
| `wt2`            | The amount of time spent in the editor of a level (previous copies) |          | <!--a-->
| `seed`           | A random string |          | <!--a-->
| `extraString`    | https://boomlings.dev/resources/client/level-components/capacity-string#capacity-string |          | <!--o-->
| `levelInfo`      | pre-2.208 `lrs` |          |
| `binaryVersion`  | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `ts`             | The amount of 240 TPS steps the verification attempt took |          | <!--a-->
| `lrs`            | The replay string of the verification attempt, for leaderboard mods. TODO: document format |          | <!--a-->
| `udid`           | <ParamDesc name="udid"/> |  | <!--a-->
| `uuid`           | <ParamDesc name="uuid"/> |  | <!--a-->
| `dvs`            | <ParamDesc name="dvs"/> |  | <!--a-->


## Response

Returns the ID of the uploaded level, or `-1` if the request was rejected.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This is an empty level with a default block at (8, 4)
# with (0, 0) being the bottom left block above the ground.

levelString = "H4sIAAAAAAAAC6WQwQ3DIAxFF3IlfxsIUU6ZIQP8AbJChy_GPSZqpF7-A4yfDOfhXcCiNMIqnVYrgYQl8rDwBTZCVbkQRI3oVHbiDU6F2jMF_lesl4q4kw2PJMbovxLBQxTpM3-I6q0oHmXjzx7N0240cu5w0UBNtESRkble8uSLHjh8nTubmYJZ2MvMrEITEN0gEJMxlLiMZ28frmj"

data = {
    "gameVersion": 21,
    "accountID": 173831, # This is DevExit's account ID
    "gjp2": "*******", # This would be DevExit's password encoded with GJP2 encryption
    "userName": "devexit",
    "levelID": 0,
    "levelName": "Test", # The level name is Test
    "levelDesc": "QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE", # "A test level for the GD Docs!"
    "levelVersion": 1,
    "levelLength": 0,
    "audioTrack": 0, # This uses a newgrounds song
    "auto": 0,
    "password": 314159,
    "original": 55610687,
    "twoPlayer": 0,
    "songID": 546561, # NK - Jawbreaker
    "objects": 1,
    "coins": 0,
    "requestedStars": 50,
    "unlisted": 1, # This level is unlisted, but does exist!
    "ldm": 0,
    "levelString": levelString, # The level string for the level described above
    "seed2": generate_chk(key="41274", values=[generate_upload_seed(levelString)], salt="xI25fpAapCQg"), # This is talked about in the CHK encryption,
    "secret": "Wmfd2893gb7"
}

headers = {
	"User-Agent": ""
}

url = "https://www.boomlings.com/database/uploadGJLevel21.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

<!-- tabs:end -->

**Response**

```plain
62687277
```

