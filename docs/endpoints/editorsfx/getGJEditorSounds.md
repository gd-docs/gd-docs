# getGJEditorSounds.php

Searches sound packs by name and/or type.

## Parameters

| Parameter       | Description | Required |
| --------------- | ----------- | -------- |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  |
| `accountID`     | <ParamDesc name="accountID"/> |  |
| `gjp2`          | <ParamDesc name="gjp2"/> |  |
| `str`           | Search query, user ID or level list depending on `type` | Only on [types 0 and 5](#type) |
| `type`          | Search type, [see values](#type). Defaults to most liked |  |
| `page`          | Which page to request, defaults to 0 |  |
| `star`          | Whether to only return featured sound packs, does not seem to be used in game |  |
| `total`         | Does not seem to affect anything, sent as 0 |  |
| `count`         | Does not seem to affect anything, sent as 10 |  |

::: details `type` {#type open}

| Type | Description                                    |
| ---- | ---------------------------------------------- |
| `0`  | Search query                                   |
| `1`  | Most downloaded                                |
| `2`  | Most liked                                     |
| `3`  | Trending                                       |
| `4`  | Recent                                         |
| `5`  | User's packs, uses `str` as the **account ID** |
| `6`  | Featured                                       |
| `11` | Awarded (unused in-game)                       |
| `13` | Friends (login required)                       |

:::

## Response

A successful sound pack search will return the data in the format:

```
pack#creators#page info#hash
```

where:

- `pack` is a list of [Sound Pack Objects](/resources/server/editorsfx.md) separated by `|`
- `creators` is a list of creators separated by `|`, each in the format `userID:username:accountID`
- `page info` is in the format `total:offset:amount` where:
  - `total` - total number of levels for the query
  - `offset` - offset from which the current page starts
  - `amount` - number of levels per page (always 10 for the gd servers)
- `hash` is an integrity hash, see [Hashes](/resources/server/hashes#getgjeditorsounds-downloadgjeditorsound)

If the request is not successful, it will return `-1`.


<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
    "str": "Actually good sounds",
    "type": 0,
    "secret": "Wmfd2893gb7",
}

url = "https://www.boomlings.com/database/getGJEditorSounds.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl https://www.boomlings.com/database/getGJEditorSounds.php -A "" -d "str=Actually good sounds&type=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

### Output

```plain
1:99:2:Actually good sounds:3:SSB0cmllZCBteSBiZXN0IHRvIG1ha2UgYSBnb29kIHNvdW5kIHBhY2sgOmN1YmU6Om1veWFpOi4gdmVyc2lvbiAxLjE=:5:4:49:28117397:50:sp0oopy:10:5833:14:236:19::28:1792104819:29:1792194585:59:59:60:141:61:0:64:cube|1:245:2:Actually good sounds:3:SSB0cmllZCBteSBiZXN0IHRvIG1ha2UgYSBnb29kIHNvdW5kIHBhY2sgOmN1YmU6Om1veWFpOjpsZWdlbmRhcnk6Om15dGhpYzo6bXl0aGljOg==:5:3:49:38692068:50:DaGamerr:10:73:14:3:19::28:1792112105:29:1792186245:59:52:60:104:61:0:64:mythic|1:1089:2:Actually good packv2:3:VGhpcyBpcyBhIGdvb2Qgc291bmQgcGFjaw==:5:1:49:37874821:50:LuckyKM:10:22:14:2:19::28:1792198720:29:1792198720:59:30:60:66:61:0:64:globe|1:372:2:actually good pack:3::5:2:49:37874821:50:LuckyKM:10:17:14:1:19::28:1792121462:29:1792190587:59:29:60:63:61:0:64:star|1:849:2:actually good sounds:3:bGlrZSBhY3R1YWxseSBnb29kIHNvdW5kcyB3aXRoIGEgZmV3IHZhcml0aW9ucyBvZiBlYWNoLiBub3Qgb3Zlcmx5IGFubm95aW5nLiBnb29kIGFzbXIgdHlwZSBzb3VuZHMuIHR5cGV3cml0ZXIgYXN0aGV0aWMgdGJo:5:3:49:24692783:50:Zolguroth27:10:13:14:1:19::28:1792182089:29:1792182467:59:63:60:96:61:0:64:relieved#220328242:Zolguroth27:24692783|149513507:sp0oopy:28117397|327675800:LuckyKM:37874821|333026650:Dagamerr:38692068#0:0:10#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
  ```
