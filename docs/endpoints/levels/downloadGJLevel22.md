# downloadGJLevel22.php

Downloads a user level and info so it can be played.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `levelID`<ParamInfo req="always"/> | The ID of the level to download. Use -1 for the daily level, -2 for the weekly and -3 for the event level. |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `inc`<ParamInfo req="no" sent="cond"/> | Whether the amount of downloads should be incremented on the level (requires proper authentication) <!--TODO ParamCond--> |
| `extras` | Used to return some extra data when set to 1, but was disabled sometime in 2022 |
| `rs`<ParamInfo req="no" sent="always"/> | [See here](/topics/encryption/id#rs) |
| `chk`<ParamInfo req="no" sent="always"/> | [See here](/topics/encryption/chk#download-level) |

<ParamInfoFooter/>
</ParamGroup>

## Response

```
{level}#{hash1}#{hash2}#{user}#{songs}#{extraArtistNames}
```
where:
- `{level}` is the [level object](/resources/server/level)
- `{hash1}` and `{hash2}` are integrity [hashes](/resources/server/hashes.md#downloadgjlevel) the GD client uses to validate the response
- `{user}` is the user that uploaded the level, in the format `userID:username:accountID` - only returned when requesting level ID `-1` (daily), `-2` (weekly) or `-3` (event)
- `{songs}` is the list of [song objects](/resources/server/song) (without key 15 `extraArtistNames`) the level uses, separated by `~:~`
- `{extraArtistNames}` is a deduplicated dictionary of extra artists' names for all `{songs}` in the format `id,name,id,name,...`

The last 3 segments are only returned when `binaryVersion` >= 42, else it's just `{level}#{hash1}#{hash2}`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
    "levelID": 128,
    "secret": "Wmfd2893gb7"
}

url = "https://www.boomlings.com/database/downloadGJLevel22.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl https://www.boomlings.com/database/downloadGJLevel22.php -A "" -d "levelID=128&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

**Response**
```plain
1:128:2:1st level:3::4:H4sIAAAAAAAAC6WXUZLkIAiGL5StEgWV2qc5wxzAA8wV9vDbielEvumprtp9if3_AiIi0l-fpW8yNI08JNsoI5sNkTnkOUyyDkkpjTZkiO2fPtLoQ_7IOLRTfqst_6qt45dME_7SxC4zFd65kMeu-n829KX-Hr6nfnq3DfvRjfTeidtM_cHM9vUhZUv7YHOoc9Dt8Z2_22TOoe_DZ_ED5eM7DRwTH3p856ykOciWfssmW95yt61sYicsEqEGqCXCGqEHaPmCfYcWZ3uYrRJhXLe2AFuKMHrVbq8eE3nrhx_5CV0C3A804Iz5gnm9zdUdW4yYtBhQ6ZjvcWvZDRgHknAiSYEbDjABF-AaIl3EI84ZOPpXmDDMmCVlDn3FestJHwEt8_jyU79jvY71HOs51vMWsKYEjBxOS7r4QRwBqReWDGxPfOhL9E8L7BdckhJviWqMt6oBx4uiJsC4ohbzQWsChn8d8XLEywswLz1ufcrAuPcpxstEgBU4-mfFgGN8zCrw4l_ZiXYs-FhlL7NXNTq0NFkkSiOhJATE436AMBL5JhC8iRX4cqLi8td5-RX4drLOanAbOKtBuokZrnITTiLFfZ7Evc_T6HfCsMpKOIiz7BQQq4S9JJa9nKWJxOLYWawSiGVzs3ytRHspsdpoIOYzuagoQ6j1pcQ3GytRSTg2pzw5YwiNIZyv8ErwGM5nu0BlIWZBX2ycFX6RUEooJRolGiTmm79INOZYY46dbUKBykow-RvTsjGmnTHtjGlnCPsawryI-N3QxKLaUqwLTTKwAcei2rIAKzAaqsKOKhb9VipwbBqawj-Ffwr_0DQ1PGLNYtFvNQGz5UP8KuLX4J9jvw57jv163G_HI9fxyPXlkTt70NhF9hKb0q4a8XzFblx7xB32HE1uuuzt_jiaOEcT52jiHH2_l5gvrgk45ouj6XON8XOL8XP8OXCDfxX-4f-B15gv3hIw_GsxX7zFfPEO_66m9C_bF5V-dQ8AAA==:5:1:6:30144023:8:10:9:30:10:2147720:12:4:13:21:14:206221:17::43:0:25::18:0:19:0:42:0:45:208:15:2:30:128:31:0:28:10 years:29:6 years:35:0:36:0_46_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0:37:0:38:0:39:2:46::47::40::27:Aw==#30c4a15cfeb12f97de69d6bd0cc9478794e6c6c4#48e36e24b267df00a9c87aed127b4a9f020ac9c1
```

<!-- tabs:end -->
