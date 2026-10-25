# getGJFollowing.php

Gets followed accounts.

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
| `ack`           | Probably whether to refresh the following user list. Always 1 |  | <!--a-->

## Response

All the account IDs this account follows, separated by commas.

```plain
761691,4569963,8927557,5327860
```
