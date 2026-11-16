# getGJLevels21.php

This endpoint is used to search levels by name and or filter

## Parameters

<ParamGroup>

| Parameter | Description |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `type`<ParamInfo req="no" sent="always"/> | Search type, [see values](#type). Defaults to most liked |
| `str`<ParamInfo req="cond" sent="always"/> | Search query, user ID or level list depending on [`type`](#type) <ParamCond req>[`type`](#type) is 5 or 10</ParamCond> |
| `diff`<ParamInfo req="no" sent="always"/> | Comma-separated list of difficulty values, [see values](#diff) |
| `len`<ParamInfo req="no" sent="always"/> | Level length, [see values](#len) |
| `page`<ParamInfo req="no" sent="always"/> | Which page to request, defaults to 0 |
| `total`<ParamInfo req="no" sent="always"/> | Probably the cached total number of levels, default is 0 |
| `uncompleted`<ParamInfo req="no" sent="always"/> | Uncompleted filter, either 0 or 1 |
| `onlyCompleted`<ParamInfo req="no" sent="always"/> | Completed filter, either 0 or 1 |
| `featured`<ParamInfo req="no" sent="always"/> | Featured filter, either 0 or 1 |
| `original`<ParamInfo req="no" sent="always"/> | Original filter, either 0 or 1 |
| `twoPlayer`<ParamInfo req="no" sent="always"/> | Two Player Mode filter, either 0 or 1 |
| `coins`<ParamInfo req="no" sent="always"/> | If a level has been granted verified/silver coins (which does not require the level to have coins), either 0 or 1 |
| `epic`<ParamInfo req="no" sent="cond"/> | Epic filter <ParamCond sent="cond">value is 1</ParamCond> |
| `legendary`<ParamInfo req="no" sent="cond"/> | Mythic filter (__swapped with `mythic`__) <ParamCond sent="cond">value is 1</ParamCond> |
| `mythic`<ParamInfo req="no" sent="cond"/> | Legendary filter (__swapped with `legendary`__) <ParamCond sent="cond">value is 1</ParamCond> |
| `local`<ParamInfo req="no" sent="cond"/> | Whether to fetch "My Online Levels" <ParamCond sent="cond">value is 1 and [`type`](#type) is 5 and `str` is the sender's user ID</ParamCond> |
| `song`<ParamInfo req="no" sent="cond"/> | Official (or custom) song ID (Stereo Madness = 1) <ParamCond sent="cond">non-zero or `customSong` is 1</ParamCond> |
| `customSong`<ParamInfo req="no" sent="cond"/> | Whether the `song` is a Newgrounds song. Levels with Newgrounds songs will not be removed, even if this parameter is 0/not present. <ParamCond sent="cond">value is 1</ParamCond> |
| `star`<ParamInfo req="no" sent="cond"/> | Rated filter <ParamCond sent="cond">value is 1; mutually exclusive with `noStar`</ParamCond> |
| `noStar`<ParamInfo req="no" sent="cond"/> | Unrated filter <ParamCond sent="cond">value is 1; mutually exclusive with `star`</ParamCond> |
| `demonFilter`<ParamInfo req="no" sent="cond"/> | Selects which demon difficulty to search, [see values](#demon-filter). If not sent will search all demon types <ParamCond sent="cond">a demon difficulty is selected</ParamCond> |
| `hypeSecret`<ParamInfo req="no" sent="cond"/> | Sent as 1 for hyped searches. Does not seem to do anything though <ParamCond sent="cond">[`type`](#type) is 31</ParamCond> |
| `followed`<ParamInfo req="cond" sent="cond"/> | Comma-separated list of the followed account IDs <ParamCond req>[`type`](#type) is 12</ParamCond> <ParamCond sent="req"/> |
| `completedLevels`<ParamInfo req="cond" sent="cond"/> | Comma-separated list of completed level IDs surrounded by `()` <ParamCond req>`uncompleted` is 1 or `onlyCompleted` is 1</ParamCond> <ParamCond sent="req"/> |

<ParamInfoFooter/>
</ParamGroup>

::: details `type` {#type open}

| Type | Description |
| ---- | ----------- |
| `0`  | Search query (used when opening the original level) |
| `1`  | Most downloaded |
| `2`  | Most liked |
| `3`  | Trending |
| `4`  | Recent |
| `5`  | User's levels, uses `str` as the **user ID** |
| `6`  | Featured |
| `7`  | Magic |
| `8`  | Moderator sent levels |
| `10` | List of levels (not to be confused with type 25, which is for in-game lists), uses `str` as a comma separated list of level IDs |
| `11` | Awarded |
| `12` | Followed (see `followed` parameter) |
| `13` | Friends (login required) |
| `15` | Most liked in GD World |
| `16` | Hall of fame |
| `17` | Featured in GD World |
| `18` | Unknown (always empty, perhaps robtop only?) |
| `19` | Unknown (same as type 10 but this type has pagination and no star rate filter) |
| `21` | Daily history |
| `22` | Weekly history |
| `23` | Event history |
| `24` | Reported levels (Elder Moderator only) |
| `25` | Level list, uses `str` as the list ID |
| `26` | Local level list (same as type 19 but can return up to 100 levels) |
| `27` | Sent |
| `28` | GD Lite weekly levels |
| `29` | GD Lite bonus levels (platformer) |
| `31` | Hyped |
| `32` | Daily history (without the current daily) |
| `33` | Weekly history (without the current weekly) |
| `34` | Event history (without the current event level) |

:::

::: details `diff` {#diff open}

| diff | Description                                                |
| ---- | ---------------------------------------------------------- |
| `-`  | None                                                       |
| `-1` | N/A                                                        |
| `-2` | Demons (see `demonFilter` for specifying demon difficulty) |
| `-3` | Auto                                                       |
| `1`  | Easy                                                       |
| `2`  | Normal                                                     |
| `3`  | Hard                                                       |
| `4`  | Harder                                                     |
| `5`  | Insane                                                     |

:::

::: details `demonFilter` {#demon-filter open}

| demonFilter | Description   |
| ----------- | ------------- |
| `1`         | Easy demon    |
| `2`         | Medium demon  |
| `3`         | Hard demon    |
| `4`         | Insane demon  |
| `5`         | Extreme demon |

:::

::: details `len` {#len open}

| len | Value      |
| --- | ---------- |
| `-` | Any        |
| `0` | Tiny       |
| `1` | Short      |
| `2` | Medium     |
| `3` | Long       |
| `4` | XL         |
| `5` | Platformer |

:::

## Response

A successful level search will return the data in the format

```
levels#creators#songs#page info#hash
```

where:

- `levels` is a list of [Level Objects](/resources/server/level.md)  separated by `|`
- `creators` is a list of creators separated by `|`, each in the format `userID:username:accountID`
- `songs` is a list of [Song Objects](/resources/server/song.md) separated by `:`
- `page info` is in the format `total:offset:amount` where:
  - `total` - total number of levels for the query
  - `offset` - offset from which the current page starts
  - `amount` - number of levels per page (always 10 for the gd servers)
- `hash` is a hash of every level, see [Hashes](/resources/server/hashes.md#getgjlevels)

If the request is not successful, it will return `-1`


<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
    "str": "bloodbath",
    "star": 1,
    "type": 0,
    "secret": "Wmfd2893gb7",
}

url = "https://www.boomlings.com/database/getGJLevels21.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl https://www.boomlings.com/database/getGJLevels21.php -A "" -d "str=bloodbath&star=1&type=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

### Output

```plain
1:10565740:2:Bloodbath:5:3:6:503085:8:10:9:50:10:44138442:12:0:13:21:14:2375318:17:1:43:6:25::18:10:19:10330:42:0:45:24746:3:V2hvc2UgYmxvb2Qgd2lsbCBiZSBzcGlsdCBpbiB0aGUgQmxvb2RiYXRoPyBXaG8gd2lsbCB0aGUgdmljdG9ycyBiZT8gSG93IG1hbnkgd2lsbCBzdXJ2aXZlPyBHb29kIGx1Y2suLi4=:15:3:30:7679228:31:0:37:0:38:0:39:0:46:1:47:2:35:467339|1:21761387:2:Bloodbath Z:5:1:6:3277407:8:10:9:20:10:4556435:12:0:13:20:14:200369:17:1:43:4:25::18:10:19:17840:42:0:45:0:3:UmVtYWtlIG9mIEJCLCBidXQgU2hvcnRlciBhbmQgbXVjaCBlYXNpZXIgWEQgTW9yZSBvZiBhIGdhbWVwbGF5IGxldmVsISAgSnVzdCBhIGZ1biBlYXN5IGRlbW9uLiBWZXJpZmllZCBCeSBYaW9kYXplciEgRW5qb3kgOkQ=:15:3:30:0:31:0:37:3:38:1:39:10:46:1:47:2:35:223469|1:64968478:2:Bloodbath but no:5:1:6:19747356:8:10:9:50:10:652130:12:0:13:21:14:51559:17::43:6:25::18:8:19:24992:42:0:45:23233:3:Qmxvb2RiYXRoLCBJdCdzIG5vdCBldmVuIHRoaXM=:15:3:30:0:31:0:37:0:38:1:39:8:46:1:47:2:35:706340|1:75795864:2:Bloodbath:5:2:6:12348083:8:10:9:40:10:88763:12:0:13:21:14:4326:17::43:5:25::18:7:19:25025:42:0:45:55947:3:VGhhbmtzIHRvIGV2ZXJ5b25lIGluIG15IGRpc2NvcmQgc2VydmVyIHRoYXQgY29udHJpYnV0ZWQ=:15:3:30:0:31:0:37:0:38:1:39:6:46:1:47:2:35:513064#503085:Riot:37415|3277407:Zyzyx:88354|12348083:KNOEPPEL:3009121|19747356:Texic:6152129#1~|~223469~|~2~|~ParagonX9 - HyperioxX~|~3~|~31~|~4~|~ParagonX9~|~5~|~3.77~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F223000%2F223469_ParagonX9___HyperioxX.mp3~|~7~|~~|~8~|~1~:~1~|~467339~|~2~|~At the Speed of Light~|~3~|~52~|~4~|~Dimrain47~|~5~|~9.56~|~6~|~~|~10~|~http%3A%2F%2Fgeometrydashcontent.com%2Fsongs%2F467339.mp3~|~7~|~~|~8~|~1~:~1~|~513064~|~2~|~EnV - Uprise~|~3~|~149~|~4~|~Envy~|~5~|~8.71~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F513000%2F513064_EnV---Uprise.mp3~|~7~|~UCaRqE7rKwJl1BvMRU4FFVJQ~|~8~|~1~:~1~|~706340~|~2~|~-At the Speed of Light- (8 bit Remix)~|~3~|~46724~|~4~|~ThaPredator~|~5~|~4.78~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F706000%2F706340_-At-the-Speed-of-Light--8-.mp3~|~7~|~~|~8~|~1#4:0:10#1664b8bb919b0822a4408752c37a9fb5f651f813
```
