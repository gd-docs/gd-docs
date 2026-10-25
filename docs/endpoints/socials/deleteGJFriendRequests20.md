# deleteGJFriendRequests20.php

Removes friend requests.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `targetAccountID`<ParamInfo req="always"/> | The accountID of the player you are declining the friend request or `0` if multiple requests are being declined |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accounts`<ParamInfo req="no" sent="cond"/> | Account IDs seperated by `,` for players whose requests are being declined. Sent only if there are multiple requests being declined <ParamCond sent="cond">`targetAccountID` is 0</ParamCond> |
| `isSender`<ParamInfo req="no" sent="always"/> | `1` if the player is the sender of the friend request(s) to the target account(s) |

<ParamInfoFooter/>
</ParamGroup>

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
