# acceptGJFriendRequest20.php

Accepts a received friend request.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `targetAccountID`<ParamInfo req="always"/> | The account which the player is trying to send a friend request to |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `requestID`<ParamInfo req="no" sent="always"/> | The ID of the friend request being accepted |

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
