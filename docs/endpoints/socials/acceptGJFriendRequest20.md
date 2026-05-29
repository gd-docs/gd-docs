# acceptGJFriendRequest20.php

Accepts a received friend request.

## Parameters

| Parameter         | Explanation | Required |
| ----------------- | ----------- | -------- |
| `accountID`       | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `targetAccountID` | The account which the player is trying to send a friend request to | Yes      | <!--a-->
| `gjp2`            | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`          | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`     | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion`   | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`            | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`            | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`             | <ParamDesc name="dvs"/> |          | <!--a-->
| `requestID`       | The ID of the friend request being accepted |          | <!--a-->

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
