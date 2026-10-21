# uploadGJMessage20.php

> [!WARNING]
> This endpoint is deprecated and seems to be always returning `-1` now.

Sends a message to a user

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `toAccountID`<ParamInfo req="always"/> | Account ID of the user retrieving the message |
| `subject`<ParamInfo req="always"/> | The subject of the message, converted to [URL-safe base64](/topics/encryption/base64) |
| `body`<ParamInfo req="always"/> | The body of the message, [Xor'd](/topics/encryption/xor) with a key of `14251` and then encoded in [URL-safe base64](/topics/encryption/base64) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

1 if the message was sent, -1 if a problem occurred, or if the receiver has messages disabled.

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
