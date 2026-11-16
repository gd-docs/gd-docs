# reportGJContent.php

Reports a level, list, comment, profile post, user, friend request, message, thread or sound pack.

## Parameters

| Parameter   | Explanation | Required |
| ----------- | ----------- | -------- |
| `secret`    | <ParamDesc name="secret" type="common"/> | Yes      |
| `targetID`  | The ID of the level being reported | Yes     |
| `type`      | The type of object being reported. 0 - user, 1 - level, 2 - list, 3 - comment (level or list), 4 - profile post, 5 - legacy message, 6 - friend request, 7 - comment on sound pack, 8 - thread, 9 - sound pack | Yes     |
| `reasons`   | Comma-separated list of report reasons, [see values](#reasons) | Yes    |
| `messageID` | The message ID being reported (type 8 only, when reporting a specific message and not the entire thread) |    |
| `special`   | Extra ID. For types 3 and 7 (comment), this is the level/list/sound pack ID (negative if list ID). For type 4 (profile post), this is the account ID of the poster |    |
| `accountID` | <ParamDesc name="accountID"/> |  |
| `gjp2`      | <ParamDesc name="gjp2"/> | |

::: details `reasons` {#reasons open}

| ID   | In-Game Name          | Applicable to Types |
| ---- | --------------------- | ------------------- |
| `0`  | Inappropriate Content | All |
| `1`  | Harassment / Hate     | All |
| `2`  | Spam / Trolling       | All |
| `3`  | Scam / Phishing       | 0, 1, 2, 3, 4, 5, 6, 7, 8 |
| `4`  | Cheating / Hacking    | 0 |
| `5`  | Impersonation         | 0 |
| `6`  | Stolen / Reupload     | 1, 2, 9 |
| `7`  | Threats / Danger      | 0, 1, 2, 3, 4, 5, 6, 7, 8 |

:::

## Response

1 if all valid parameters are passed, -1 otherwise.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	  "targetID": 30194711,
    "type": 1,
    "reasons": "0,1,2,3,6,7", # every reason
    "secret": "Wmfd2893gb7"
}

req = requests.post('https://www.boomlings.com/database/reportGJContent.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
