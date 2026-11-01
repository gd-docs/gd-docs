# adminGetUserHistory.php

> [!WARNING]
> All info related to Admin endpoints should be used for development purposes only. Misuse of these has led to punishment in the past, so we do not recommend poking around.

Gets the punishment history of an account (Moderator Only).

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `targetAccountID`<ParamInfo req="always"/> | accountID of the user you want to see the history of |
| `page`<ParamInfo req="always"/> | The page of actions you want to see |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a list of [Admin User Log Objects](/resources/server/adminuserlog.md) separated by a pipe `|`, followed by a `#` and page info in the following format: `total:offset:page_size`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is viewing the action log of his own account (this would not work in-game without Moderator credentials and is just an example)

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "page": 0,
    "targetAccountID": 173831, # DevExit's account ID
    "secret": "Wmfd2893gb7"
}

r = requests.post('https://www.boomlings.com/database/adminGetUserHistory.php', data=data)
print(req.text)
```

**Response**
```plain
comment_ban:temp:60:0:RXhhbXBsZSByZWFzb24=:RXhhbXBsZU1vZA==:1730000000:5:
```

<!-- tabs:end -->
