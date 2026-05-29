# likeGJItem211.php

Likes a level, comment, etc.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      |
| `itemID`        | The ID of the level, comment, or account comment | Yes      | <!--a-->
| `type`          | 1 for level, 2 for level comment, 3 for account comment, 4 for list | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="dvs"/> |          | <!--a-->
| `like`          | 0 is dislike, 1 is like. Not sure what it defaults to if left out, but it can be left out. |          | <!--a-->
| `special`       | 0 if liking level/list, the level/list ID for comment (list ID should be negative), the account ID for profile post |          | <!--a-->
| `rs`            | 10 randomly generated characters |          | <!--a-->
| `chk`           | [See here](/topics/encryption/chk.md#like) |          | <!--a-->

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
