# getGJFriendRequests20.php

This endpoint is to fetch friend requests recieved by other users

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |  | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |  | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |  | <!--a-->
| `page`          | Which page of requests you want |  | <!--a-->
| `total`         | Probably the cached total number of friend requests recieved, default is `0` |  | <!--a-->
| `getSent`       | `1` if the server should fetch requests sent by the player |  | <!--optional-->

## Response

The response for this endpoint is a `key:value` format with `|` being the seperator for each object. A `#` is used to seperate the metadata

The metadata is split up into 3 segments: `total requests : page number : total requests per page`

**Below is a raw response for a single friend request**

```plain
1:TheWylieMaster:2:84696119:9:31:10:4:11:16:14:0:15:2:16:9276649:32:45404710:35:aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==:41::37:2024 years#1:0:1
```

If the request fails, the server will return `-1`.
If there are no friend requests sent/received, the server will return `-2`.
