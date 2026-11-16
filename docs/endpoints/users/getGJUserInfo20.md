# getGJUserInfo20.php

Gets info about a user

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `targetAccountID`<ParamInfo req="always"/> | The account ID of the person you want the info of |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a [user object](/resources/server/user.md) for the player you want

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

url = "https://www.boomlings.com/database/getGJUserInfo20.php"
data = {
    "secret": "Wmfd2893gb7",
    "targetAccountID": "173831"
}
headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)

```

### **curl**
```plain
curl -X POST https://www.boomlings.com/database/getGJUserInfo20.php -d "secret=Wmfd2893gb7&targetAccountID=173831" -A ""
```

<!-- tabs:end -->



**Response**
```plain
1:meluwudy:2:3935672:13:148:17:1068:10:12:11:15:51:10:3:9990:52:320:46:21504:4:476:8:1:18:0:19:0:50:0:20:UCZoN2WLAooS6uhREa9Cgpwg:21:82:22:17:23:113:24:83:25:85:26:24:28:1:43:2:48:2:53:26:54:3:30:29855:16:173831:31:0:44:logout:45:devexit:49:0:55:143,67,56,112,56,1,1,2,1,0,21,14:56:144,157,134,300,190,88,59,67:57:4,7,7,18,16,5,0:29:1
```

<!-- tabs:end -->
