# followGJUser.php

Follows a user.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `targetAccountID`| Who to follow | Yes | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> | Yes | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |  | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |  | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |  | <!--a-->

## Response

1 if the account was successfully followed, -1 otherwise.
