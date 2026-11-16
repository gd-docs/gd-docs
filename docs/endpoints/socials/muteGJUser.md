# muteGJUser.php

Mutes or unmutes a user from sending you notifications.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `targetAccountID`| Who to mute / unmute | Yes |
| `accountID`     | <ParamDesc name="accountID"/> | Yes |
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes |
| `mute`          | 1 to mute, 0 to unmute. If left out, defaults to 1 |  |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  |
| `udid`          | <ParamDesc name="udid"/> |  |
| `uuid`          | <ParamDesc name="uuid"/> |  |
| `dvs`           | <ParamDesc name="dvs"/> |  |

## Response

Always 1 if the correct values are provided, even if the account does not exist.

However, if you mute a nonexistent account ID, your muted account list will break, displaying "Something went wrong".
