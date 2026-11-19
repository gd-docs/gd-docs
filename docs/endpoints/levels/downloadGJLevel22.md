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
{level}#{hash1}#{hash2}#{user}#{songs}#{extraArtistNames}#{deathData}#{unknown}#
```
where:
- `{level}` is the [level object](/resources/server/level)
- `{hash1}` and `{hash2}` are integrity [hashes](/resources/server/hashes.md#downloadgjlevel) the GD client uses to validate the response
- `{user}` is the user that uploaded the level, in the format `userID:username:accountID` - only returned when requesting level ID `-1` (daily), `-2` (weekly) or `-3` (event)
- `{songs}` is the list of [song objects](/resources/server/song) (without key 15 `extraArtistNames`) the level uses, separated by `~:~`
- `{extraArtistNames}` is a deduplicated dictionary of extra artists' names for all `{songs}` in the format `id,name,id,name,...`
- `{deathData}` is the death data for the level, returned in the same format as [getGJDeathData](/endpoints/levels/getGJDeathData#response)

The segments following `{hash2}` are only returned when `binaryVersion` >= 42.

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
    "secret": "Wmfd2893gb7",
    "binaryVersion": 51
}

url = "https://www.boomlings.com/database/downloadGJLevel22.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl https://www.boomlings.com/database/downloadGJLevel22.php -A "" -d "levelID=128&secret=Wmfd2893gb7&binaryVersion=51"
```

<!-- tabs:end -->

**Response**
```plain
1:128:2:1st level:3::4:H4sIAAAAAAAAC6WXUZLkIAiGL5StEgWV2qc5wxzAA8wV9vDbielEvumprtp9if3_AiIi0l-fpW8yNI08JNsoI5sNkTnkOUyyDkkpjTZkiO2fPtLoQ_7IOLRTfqst_6qt45dME_7SxC4zFd65kMeu-n829KX-Hr6nfnq3DfvRjfTeidtM_cHM9vUhZUv7YHOoc9Dt8Z2_22TOoe_DZ_ED5eM7DRwTH3p856ykOciWfssmW95yt61sYicsEqEGqCXCGqEHaPmCfYcWZ3uYrRJhXLe2AFuKMHrVbq8eE3nrhx_5CV0C3A804Iz5gnm9zdUdW4yYtBhQ6ZjvcWvZDRgHknAiSYEbDjABF-AaIl3EI84ZOPpXmDDMmCVlDn3FestJHwEt8_jyU79jvY71HOs51vMWsKYEjBxOS7r4QRwBqReWDGxPfOhL9E8L7BdckhJviWqMt6oBx4uiJsC4ohbzQWsChn8d8XLEywswLz1ufcrAuPcpxstEgBU4-mfFgGN8zCrw4l_ZiXYs-FhlL7NXNTq0NFkkSiOhJATE436AMBL5JhC8iRX4cqLi8td5-RX4drLOanAbOKtBuokZrnITTiLFfZ7Evc_T6HfCsMpKOIiz7BQQq4S9JJa9nKWJxOLYWawSiGVzs3ytRHspsdpoIOYzuagoQ6j1pcQ3GytRSTg2pzw5YwiNIZyv8ErwGM5nu0BlIWZBX2ycFX6RUEooJRolGiTmm79INOZYY46dbUKBykow-RvTsjGmnTHtjGlnCPsawryI-N3QxKLaUqwLTTKwAcei2rIAKzAaqsKOKhb9VipwbBqawj-Ffwr_0DQ1PGLNYtFvNQGz5UP8KuLX4J9jvw57jv163G_HI9fxyPXlkTt70NhF9hKb0q4a8XzFblx7xB32HE1uuuzt_jiaOEcT52jiHH2_l5gvrgk45ouj6XON8XOL8XP8OXCDfxX-4f-B15gv3hIw_GsxX7zFfPEO_66m9C_bF5V-dQ8AAA==:5:1:6:30144023:8:10:9:30:10:4647036:12:4:13:21:14:309207:17::43:0:25::18:0:19:0:42:0:45:208:15:2:30:128:31:0:28:13 years:29:9 years:62:1376365057:63:1488295294:35:0:36:0_46_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0:37:0:38:0:39:2:46::47::40::57::27:Aw==#30c4a15cfeb12f97de69d6bd0cc9478794e6c6c4#48e36e24b267df00a9c87aed127b4a9f020ac9c1####0;1;H4sIAAAAAAAAA51XS3JEIQi8kAsRUKlcLYePwNN5otlMJaEybctfdComKKlWSZxz6j0h98QJUv4hSJATNUlFysAT1J4o5bFUqi1hSaVQgp5aTmgrtag-LDm9fkzVWBDY0EqGtrqh-nkoF7bPKA-MxXR0_0yTXQSV3c2vVPpkd4OHw32gTf8ptiDFF8quxviQ6u42EimZH1dgRsPmOKPD0yaJeciuGp-ofnj4hsNUTbWpgyO_4Hxqlqvmrk8-lvKCVwapG7rnSusAWpqNKk8NNpRHbIrmPXBia4CZuIlmU1HcB-B3PhY8yS1bloqnA_oyaOkowQ3NBqSydwKh9drTNTATzejOBdgMwrK0yGLt5CjgMjiybL9blt05CEkG0xtBMw2-U5ZaGsdioovbWeN40OUweqUn_MkyvuCt6eDQDHBD2cPYGwALv9BVvJKvXD-EFKrUNJEB1W47qHagysr3pIqdp4Ayy4VrGiyOzTFx7o4S1RvK5YJaEHVVYaXXk7Oj4sfrKc060SQvdHJtQEFE66jxyKXslSex7MjugqZhtlJZhTDm3tM2liJIYPnaQXMqMi0D-ICzc3u2XO9Nzj7SHGzv7RyY1uIQQbGkenN-pkX9gMsQ5QuIPpT3kjSr6N6uzP0EbXpAAJEuTKz4AaefdXT0SP4z5N8uRZ1t3I8wN64Sd774iRfr1iJ4MG020GkogsV7KRw_umy3auYAktA_TIjW8WV9zeJ-NXRz_nkDbNvxDS5mphNkvIFqPQeQpJ5MO1yQ9lFQRzOMw7mD0vyCOrdHUDifYNWbF1OcT3xhat0jaCU-_ByGcDLxtX3c-zvIfDOk22OYNXd9TISn17iAdfIffh5MHu2tF13oEL_QzhpB1DkGyGGIuZ7b7RRHsNUbSBdQw4TnabW6ThpfmFq4GwgxTMsn3sKMEUm7RKQ6Sw4gXiL6LZlGJ71Eri5AcIo23rDfiKHvG5H5LaoW3ATrFGJtXm5LqH8u9PVDuupifHkAUn3Y8ybGFw5AvciCKG0JO0rWFDbf9f3qwmaWXs0voV9P_hf60PqIrE-LR9RNdBXq87dCO_AR-kLIzYXI-WeVHv_8ATXvrKWCDQAA#0;#
```

<!-- tabs:end -->
