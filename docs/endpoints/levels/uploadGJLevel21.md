# uploadGJLevel21.php

Uploads a created level to the servers.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="always"/> | <ParamDesc name="gameVersion"/> |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `userName`<ParamInfo req="always"/> | The uploader's username |
| `levelID`<ParamInfo req="always"/> | The ID of the level if updating to a newer version, otherwise `0` |
| `levelName`<ParamInfo req="always"/> | The name of the level |
| `levelDesc`<ParamInfo req="always"/> | The description of the level, in [URL-safe base64](/topics/encryption/base64.md) |
| `levelVersion`<ParamInfo req="always"/> | The version number of the level |
| `levelLength`<ParamInfo req="always"/> | The length of the level as a number, where `0` is Tiny, `4` is XL and `5` is Platformer |
| `audioTrack`<ParamInfo req="always"/> | The [official song number](/reference/songs#table-of-official-songs) used in the level (Stereo Madness = 0). Set to `0` if a newgrounds song is used |
| `auto`<ParamInfo req="always"/> | Whether the player has jumped during verification |
| `password`<ParamInfo req="no" sent="always"/> | The level's copy password. Set to `0` for no copy or `1` for free copy. Other valid values consist of `1` followed by the password - either 4 or 6 digits. Ignored since `binaryVersion=39` |
| `original`<ParamInfo req="always"/> | The ID of the original level if the level was copied, otherwise `0` |
| `twoPlayer`<ParamInfo req="always"/> | Set to `1` if the level utilizes two player mode |
| `songID`<ParamInfo req="always"/> | The ID of the custom song used in the level. Set to `0` if an official song is used |
| `objects`<ParamInfo req="always"/> | The number of objects in the level |
| `coins`<ParamInfo req="always"/> | The number of user coins in the level |
| `requestedStars`<ParamInfo req="always"/> | The requested star rating for the level. The number is not limited to 10 |
| `unlisted`<ParamInfo req="no" sent="always"/> | Set to `2` if the level should be unlisted, `1` if it should be unlisted and only viewable by friends, `0` if it should be listed |
| `ldm`<ParamInfo req="always"/> | Whether the level uses high detail objects |
| `levelString`<ParamInfo req="always"/> | The actual level data. Must be gzip compressed and then converted to [URL-safe base64](/topics/encryption/base64.md) |
| `seed2`<ParamInfo req="always"/> | See the [upload level chk](/topics/encryption/chk#upload-level) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `wt`<ParamInfo req="no" sent="always"/> | The amount of time spent in the editor of a level (local copy) |
| `wt2`<ParamInfo req="no" sent="always"/> | The amount of time spent in the editor of a level (previous copies) |
| `seed`<ParamInfo req="no" sent="always"/> | A random string |
| `extraString`<ParamInfo req="no" sent="cond"/> | [Capacity String](/resources/client/level-components/capacity-string) <ParamCond sent="cond">value is not empty</ParamCond> |
| `levelInfo` | pre-2.208 `lrs` |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `ts`<ParamInfo req="no" sent="always"/> | The amount of 240 TPS steps the verification attempt took |
| `lrs`<ParamInfo req="no" sent="always"/> | The [replay string](/resources/client/level-components/replay-string) of the verification attempt, for leaderboard moderators |
| `notify`<ParamInfo req="no" sent="always"/> | Which users to notify about the upload: `0` - none, `1` - friends, `2` - followers, `3` - friends and followers |
| `ct`<ParamInfo req="no" sent="always"/> | The current Unix timestamp in seconds |
| `bs`<ParamInfo req="no" sent="always"/> | The [Build Stats String](#) |
| `songIDs`<ParamInfo req="no" sent="cond"/> | The level's song ID list, as stored in client key [`k104`](/resources/client/level#:~:text=k104,by%20%2C) <ParamCond sent="cond">not empty</ParamCond> |
| `sfxIDs`<ParamInfo req="no" sent="cond"/> | The level's SFX ID list, as stored in client key [`k105`](/resources/client/level#:~:text=k105,by%20%2C) <ParamCond sent="cond">not empty</ParamCond> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>


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

