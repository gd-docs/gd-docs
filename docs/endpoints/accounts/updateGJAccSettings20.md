# updateGJAccSettings20.php

Updates a user's account settings

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="account"/> |
| `mS`<ParamInfo req="no" sent="always"/> | Who the user allows messages from: 0 for anyone, 1 for just friends, and 2 for no one |
| `frS`<ParamInfo req="no" sent="always"/> | Who the user allows friend requests from: 0 for anyone, 1 for no one, 2 for anyone + they can include a message |
| `cS`<ParamInfo req="no" sent="always"/> | Who the user allows to view their comments: 0 for anyone, 1 for just friends, and 2 for only themselves |
| `gF` | Who the user allows group chat invites from: 0 for anyone, 1 for friends, and 2 for no one |
| `gO` | Unknown, sent as 2 |
| `yt`<ParamInfo req="no" sent="always"/> | The end of the link to the user's youtube channel, after the `/channel/`. e.g. `UCZoN2WLAooS6uhREa9Cgpwg` |
| `twitter`<ParamInfo req="no" sent="always"/> | The user's twitter handle |
| `twitch`<ParamInfo req="no" sent="always"/> | The user's twitch username |
| `instagram`<ParamInfo req="no" sent="always"/> | The user's Instagram username |
| `tiktok`<ParamInfo req="no" sent="always"/> | The user's TikTok handle |
| `discord`<ParamInfo req="no" sent="always"/> | The user's Discord handle |
| `custom`<ParamInfo req="no" sent="always"/> | The user's custom one-time authentication token |

<ParamInfoFooter/>
</ParamGroup>

## Response

1 if the required parameters are passed, regardless of whether anything is being updated, -1 otherwise.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "secret": "Wmfv3899gc9",
    "mS": 0,
    "frS": 0,
    "cS": 0,
    "yt": "UCZoN2WLAooS6uhREa9Cgpwg",
    "twitter": "DevExit",
    "twitch": "devexit",
    "instagram": "devexit",
    "tiktok": "",
    "discord": "devexit",
    "custom": "Custom123"
}

req = requests.post('https://www.boomlings.com/database/updateGJAccSettings20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
