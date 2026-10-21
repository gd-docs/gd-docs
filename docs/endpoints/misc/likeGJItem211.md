# likeGJItem211.php

Likes a level, comment, etc.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `itemID`<ParamInfo req="always"/> | The ID of the level, comment, or account comment |
| `type`<ParamInfo req="always"/> | 1 for level, 2 for level comment, 3 for account comment, 4 for list |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `like`<ParamInfo req="no" sent="always"/> | 0 is dislike, 1 is like. Not sure what it defaults to if left out, but it can be left out. |
| `special`<ParamInfo req="no" sent="always"/> | 0 if liking level/list, the level/list ID for comment (list ID should be negative), the account ID for profile post |
| `rs`<ParamInfo req="no" sent="always"/> | 10 randomly generated characters |
| `chk`<ParamInfo req="no" sent="always"/> | [See here](/topics/encryption/chk.md#like) |

<ParamInfoFooter/>
</ParamGroup>

## Response

Always returns 1, regardless of whether the item was liked/disliked or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
	"itemID": 62687277,
	"type": 1
}

req = requests.post('https://www.boomlings.com/database/likeGJItem211.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
