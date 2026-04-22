# uploadGJMessage20.php

Sends a message to a user

## Parameters

| Parameter       | Explanation                                                                           | Required |
| --------------- | ------------------------------------------------------------------------------------- | -------- |
| `accountID`     | Account ID of the user sending the message                                            | Yes      | <!--v-->
| `gjp2`          | The [GJP2](/topics/gjp.md) of the user sending the message                            | Yes      | <!--v-->
| `toAccountID`   | Account ID of the user retrieving the message                                         | Yes      | <!--v-->
| `subject`       | The subject of the message, converted to [URL-safe base64](/topics/encryption/base64) | Yes      | <!--v-->
| `body`          | The body of the message, [Xor'd](/topics/encryption/xor) with a key of `14251` and then encoded in [URL-safe base64](/topics/encryption/base64)    | Yes      | <!--v-->
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`                                 | Yes      | <!--v-->
| `gameVersion`   | `22`                                                                                  |          | <!--v-->
| `binaryVersion` | `47`                                                                                  |          | <!--v-->
| `udid`          | The sender's [UDID](/topics/encryption/id#udid) |  | <!--v-->
| `uuid`          | The sender's [UUID](/topics/encryption/id#uuid) |  | <!--v-->
| `dvs`           | `3`                                                                                   |          | <!--v-->

## Response

1 if the message was sent, -1 if a problem occurred, or if the receiver has messages disabled

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

def xor_encrypt(msg, key="14251"):
    return "".join(chr(ord(c) ^ ord(key[i % len(key)])) for i, c in enumerate(msg))

data = {
	"accountID": 173831, # This is DevExit's account ID
	"gjp2": "*******", # This would be DevExit's password encoded with GJP2 encryption
    "toAccountID": 173831, # Yes! You can send messages to yourself
    "subject": base64.b64encode(b"You're dumb lol").decode(),
    "body": base64.b64encode(xor_encrypt("Mhm yep you're p dumb lmao").encode()).decode(),
    "secret": "Wmfd2893gb7",
}

r = requests.post('https://www.boomlings.com/database/uploadGJMessage20.php', data=data)
print(r.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
