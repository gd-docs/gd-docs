# updateGJAccSettings20.php

Updates a user's account settings

## Parameters

| Parameter   | Explanation | Required |
| ----------- | ------------ | -------- |
| `accountID` | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`      | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`    | <ParamDesc name="secret" type="account"/> | Yes      | <!--a-->
| `mS`        | Who the user allows messages from: 0 for anyone, 1 for just friends, and 2 for no one |          | <!--a-->
| `frS`       | Who the user allows friend requests from: 0 for anyone, and 1 for no one |          | <!--a-->
| `cS`        | Who the user allows to view their comments: 0 for anyone, 1 for just friends, and 2 for only themselves |          | <!--a-->
| `yt`        | The end of the link to the user's youtube channel, after the `/channel/`. e.g. `UCZoN2WLAooS6uhREa9Cgpwg` |          | <!--a-->
| `twitter`   | The user's twitter handle |          | <!--a-->
| `twitch`    | The user's twitch username |          | <!--a-->
| `instagram` | The user's Instagram username |          | <!--a-->
| `tiktok`    | The user's TikTok handle |          | <!--a-->
| `discord`   | The user's Discord handle |          | <!--a-->
| `custom`    | The user's custom one-time authentication token |          | <!--a-->

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
