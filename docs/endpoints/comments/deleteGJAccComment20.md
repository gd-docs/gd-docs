# deleteGJAccComment20.php

Deletes an account comment.

## Parameters

| Parameter       | Explanation                                                                                                           | Required |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | -------- |
| `accountID`     | Account ID of the user deleting the comment                                                                           | Yes      |
| `gjp2`          | The [GJP2](/topics/gjp#generating-gjp2) of the user deleting the comment                                                            | Yes      |
| `commentID`     | The ID of the comment being deleted (Returned by [uploadGJAccComment20](/endpoints/comments/uploadGJAccComment20.md)) | Yes      |
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`                                                                 | Yes      |
| `gameVersion`   | 21                                                                                                                    | No       |
| `binaryVersion` | 35                                                                                                                    | No       |
| `gdw`           | 0                                                                                                                     | No       |

## Response

1 if the comment was deleted, -1 if there was an error

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting his account comment with ID 1772717

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "commentID": 1772717,
    "secret": "Wmfd2893gb7"
}

r = requests.post('https://www.boomlings.com/database/deleteGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
