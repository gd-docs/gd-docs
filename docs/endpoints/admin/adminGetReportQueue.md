# adminGetReportQueue.php

::: warning
All info related to Admin endpoints should be used for development purposes only. Misuse of these has led to punishment in the past, so we do not recommend poking around.
:::

Gets the report queue (Moderator only). The queue is grouped by accounts, which can be reviewed.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo sent="always"/> | <ParamDesc name="gjp2"/> |
| `page`<ParamInfo sent="always"/> | The page to get |
| `sort`<ParamInfo sent="always"/> | `0` - Top, `1` - New |
| `mode`<ParamInfo sent="always"/> | `0` - All, `1` - Reports, `2` - Flagged |
| `flags`<ParamInfo sent="always"/> | Always `1` |
| `secret`<ParamInfo sent="always"/> | <ParamDesc name="secret" type="common"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a list of [Report Queue Entry Objects](/resources/server/reportqueue.md) separated by `|`, followed by a `#` and page info in the following format: `total:offset:pageSize`.

## Example

```py
import requests

data = {
    "gameVersion": 22,
    "binaryVersion": 51,
    "udid": "<udid>",
    "uuid": "<uuid>",
    "dvs": "<dvs>",
    "accountID": 8028036,
    "gjp2": "<gjp2>",
    "page": 0,
    "sort": 0,
    "mode": 0,
    "flags": 1,
    "secret": "Wmfd2893gb7",
}

url = "https://www.boomlings.com/database/adminGetReportQueue.php"
response = requests.post(url, data=data, headers={"User-Agent": ""})
print(response.text)
```

**Response**

```text
8028036:Tm8gYW5vbg==:3:4:0:0:7:1 day:0|8028036:Tm8gcmVwb3J0cw==:0:4:0:1:7::0|8028036:T25seSBpdGVtcw==:3:4:0:2:7:58 nanoseconds:0|8028036:T25seSBkaXJlY3Q=:0:4:0:3:7::9|8028036:Vmlld2VkIGJ5IGFub3RoZXI=:3:4:5:4:7:1 day:9:10:MjMwVg==:2m|8028036:Vmlld2VkIGJ5IHlvdQ==:3:4:0:5:7::9:8028036:MjMwVg==:a long time|8028036:RmxhZ2dlZCB3aXRoIHNjb3JlIDA=:3:4:0:6:7::9::::0:14:15:16:0:18|8028036:RmxhZ2dlZCAwIHRpbWVz:3:4:0:7:7::9::::13:0:15:16:0:18|8028036:RmxhZ2dlZCBzcGFtIG9uY2U=:3:4:0:8:7::9::::13:1:15:16:1:18|8028036:RmxhZ2dlZCBwcmVkIHdpdGggcHRz:3:4:0::1793563118:1 day:9:8028036::idk:13:2:15:1:17:1793563118:19:20#10:0:20
```
