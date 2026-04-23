# likeGJItem211.php

Likes a level, comment, etc.

## Parameters

| Parameter       | Explanation                                                                                | Required |
| --------------- | ------------------------------------------------------------------------------------------ | -------- |
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`                                         | Yes      |
| `itemID`        | The ID of the level, comment, or account comment                                           | Yes      |
| `type`          | 1 for level, 2 for level comment, 3 for account comment, 4 for list                        | Yes      |
| `gameVersion`   | 22                                                                                         |          |
| `binaryVersion` | 42                                                                                         |          |
| `gdw`           | 0                                                                                          |          |
| `accountID`     | The liking/disliking person's account ID                                                   |          |
| `gjp2`          | The liking/disliking person's [GJP2](/topics/gjp#generating-gjp2)                                        |          |
| `udid`          | The liking/disliking person's [udid](/topics/encryption/id#udid)                           |          |
| `uuid`          | The liking/disliking person's [uuid](/topics/encryption/id#uuid)                           |          |
| `like`          | 0 is dislike, 1 is like. Not sure what it defaults to if left out, but it can be left out. |          |
| `chk`           | [See here](/topics/encryption/chk.md#like)                                                 |          |
| `rs`            | 10 randomly generated characters                                                           |          |
| `special`       | Unknown, leaving it as 0 works                                                             |          |

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
