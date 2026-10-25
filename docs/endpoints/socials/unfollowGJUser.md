# unfollowGJUser.php

Unfollows a user.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `targetAccountID`| Who to unfollow | Yes | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> | Yes | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |  | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |  | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |  | <!--a-->

## Response

Always 1 if the required parameters are provided, even if the account does not exist.
