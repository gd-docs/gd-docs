# getGJNotifications.php

Fetches your notifications.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes |
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes |
| `mask`          | Bit mask for enabled/disabled notification types, see below for details. Defaults to `65535` (all enabled) if left out |  |
| `page`          | Which page of notifications you want, starting at 0. Defaults to the first if left out |  |
| `total`         | The amount of notifications to fetch, defaults to 10. Seemingly has no upper boundary |  |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  |
| `udid`          | <ParamDesc name="udid"/> |  |
| `uuid`          | <ParamDesc name="uuid"/> |  |
| `dvs`           | <ParamDesc name="dvs"/> |  |

## Bit Mask

The `mask` parameter represents which notification types are enabled/disabled. As of now there are 6 toggleable notification types:

`XXXXXXXXX365X421`

- 1 - Friend Uploads
- 2 - Followed Uploads
- 3 - Friend Rates
- 4 - Downloads
- 5 - Followers
- 6 - Friend Accepts
- X - always 1, no effect if set to 0

## Response

The [Notification Objects](/resources/server/notification.md), separated by pipes `|`. After that, a `#` separates the page info, which is in the format `total:offset:amount` where total is the total number of notifications for the query, offset is the offset from which the current page starts and amount is the number of notifications per page.

## Example Response

`1:238895:2:15:3:star:4:UmF0ZWQh:5:PGNnPjFNYWRKYWNrMTwvYz4ncyBsZXZlbCA8Y3k-U0hVU0g8L2M-IGlzIG5vdyA8Y3M-UmF0ZWQ8L2M-IQ==:6:1 week:7:0:8:1:9:149626560:10::11:0:12:0:13:0:14:0:15:14452988:16:1MadJack1|1:238513:2:15:3:epic:4:RXBpYyE=:5:PGNnPnJvYWRraWxsZXI8L2M-J3MgbGV2ZWwgPGN5PmtpbGxlZDwvYz4gaXMgbm93IDxjbz5FcGljPC9jPiE=:6:1 week:7:0:8:1:9:149867590:10::11:0:12:0:13:0:14:0:15:2171511:16:roadkiller#2:0:10`

