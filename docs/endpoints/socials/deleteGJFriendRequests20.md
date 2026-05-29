# deleteGJFriendRequests20.php

Removes friend requests.

## Parameters

| Parameter         | Explanation | Required |
| ----------------- | ----------- | -------- |
| `accountID`       | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`            | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `targetAccountID` | The accountID of the player you are declining the friend request or `0` if multiple requests are being declined | Yes      | <!--a-->
| `secret`          | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`     | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion`   | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`            | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`            | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`             | <ParamDesc name="dvs"/> |          | <!--a-->
| `accounts`        | Account IDs seperated by `,` for players whose requests are being declined. Sent only if there are multiple requests being declined |          | <!--o: sent when targetaccountid=0-->
| `isSender`        | `1` if the player is the sender of the friend request(s) to the target account(s) |          | <!--a-->

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
