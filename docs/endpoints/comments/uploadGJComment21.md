# uploadGJComment21.php

Uploads a comment to a user level.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `userName`<ParamInfo req="always"/> | The commenter's username |
| `comment`<ParamInfo req="always"/> | The comment, converted to [URL-safe base64](/topics/encryption/base64) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `levelID`<ParamInfo req="always"/> | The ID of the level to comment on. If commenting on a list, the ID should be negative |
| `chk`<ParamInfo req="always"/> | [Comments CHK](/topics/encryption/chk#comment) |
| `percent`<ParamInfo req="no" sent="cond"/> | The level percentage shown on the comment as an integer <ParamCond sent="cond">non-zero</ParamCond> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns the ID of the posted comment if successful. Otherwise the following errors can be returned: 

- `-1` if the request was rejected
- `-10` if the user is permanently comment banned (directly by RobTop, prior to 2.11). This displays a message to contact support with the player's user ID.
- `temp_{time}_{reason}` if the user/IP is temporarily comment banned (by an Elder Moderator/RobTop), with `time` representing the number of seconds left until the user is unbanned. The servers cap the time at 34 days and 22 hours (3020399 seconds) even if the ban is longer. If no ban reason was provided, the reason value and its separator are omitted (`temp_{time}`)

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is posting the comment "Hello from the GDDocs!" to 62687277

chk = generate_chk(key="29481", values=["devexit", "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", 62687277, 69, 0], salt="xPT6iUrtws0J")
# These values can be found in the XOR and CHK pages

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "userName": "devexit",
    "comment": "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", # "Hello from the GDDocs!"
    "levelID": 62687277,
    "percent": 69,
    "chk": chk,
    "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/uploadGJComment21.php", data=data)
print(req.text)
```

**Response**
```py
31444784
```

<!-- tabs:end -->
