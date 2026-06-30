# restoreGJItems.php

> [!NOTE]
> This endpoint no longer exists. This page is kept for historical reasons.

Restores user's data. Defunct as of the new save system.

## Parameters

| Parameter | Explanation                                                              | Required |
| --------- | ------------------------------------------------------------------------ | -------- |
| `udid`    | A unique identifier for the user's device, can be replaced with anything | Yes      |
| `secret`  | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`                       | Yes      |

## Response

A 404 error code; original HTTP error 500 response is below

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "secret": "Wmfd2893gb7"
}

req = requests.post('https://www.boomlings.com/database/restoreGJItems.php', data=data)
print(req.status_code)
```

**Response**
```py
500
```

<!-- tabs:end -->
