# getGJFriendRequests20.php

Gets friend requests received from other users.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `page`<ParamInfo req="no" sent="always"/> | Which page of requests you want |
| `total`<ParamInfo req="no" sent="always"/> | Probably the cached total number of friend requests recieved, default is `0` |
| `getSent`<ParamInfo req="no" sent="cond"/> | `0` to fetch received requests, `1` to fetch sent requests, `2` to fetch ignored requests <ParamCond sent="cond">non-zero</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>

## Response

The response for this endpoint is a `key:value` format with `|` being the seperator for each object. A `#` is used to seperate the metadata.

The metadata is split up into 3 segments: `total requests : page number : total requests per page`.

**Below is a raw response for a single friend request**

```plain
1:TheWylieMaster:2:84696119:9:31:10:4:11:16:14:0:15:2:16:9276649:32:45404710:35:aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==:41::37:2024 years#1:0:1
```

If the request fails, the server will return `-1`.
If there are no friend requests sent/received, the server will return `-2`.
