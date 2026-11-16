# uploadFriendRequest20.php

Sends a friend request to another player.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `toAccountID`<ParamInfo req="always"/> | The account which the player is trying to send a friend request to |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `comment`<ParamInfo req="always"/> | The message sent along with the friend request |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

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
