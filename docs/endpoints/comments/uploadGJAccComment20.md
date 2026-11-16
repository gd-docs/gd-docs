# uploadGJAccComment20.php

Posts an account comment

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `comment`<ParamInfo req="always"/> | The comment's text, converted to [URL-safe base64](/topics/encryption/base64) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `userName`<ParamInfo req="no" sent="always"/> | The name of the user |
| `cType`<ParamInfo req="no" sent="always"/> | The comment type. `0` for level (unused), `1` for account |
| [`chk`](/topics/encryption/chk#comment)<ParamInfo req="no" sent="always"/> | The comment chk |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns account comment ID if the comment was successfully posted, but a 500 error code if the comment is either left out or could not be posted. The following errors can also be returned:

- `-1` if the request was rejected
- `-10` if the user is permanently comment banned (directly by RobTop, prior to 2.11). This displays a message to contact support with the player's user ID.
- `temp_{time}_{reason}` if the user is temporarily comment banned (by an Elder Moderator/RobTop), with `time` representing the number of seconds left until the user is unbanned. Traditionally, this value would be capped at 34 days and 22 hours, even if the ban was longer. If no ban reason is provided, the last section, including the underscore is omitted (`temp_{time}`)

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "comment": base64.b64encode(b"This comment was uploaded for the GD Docs!").decode(),
    "secret": "Wmfd2893gb7",
}

r = requests.post('https://www.boomlings.com/database/uploadGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1772719
```

<!-- tabs:end -->
