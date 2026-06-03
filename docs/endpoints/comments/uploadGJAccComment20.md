# uploadGJAccComment20.php

Posts an account comment

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `comment`       | The comment's text, converted to [URL-safe base64](/topics/encryption/base64) | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `userName`      | The name of the user |          | <!--a-->
| `cType`         | The comment type. `0` for level (unused), `1` for account |          | <!--a-->
| [`chk`](/topics/encryption/chk#comment) | The comment chk |          | <!--a-->

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
