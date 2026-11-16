# getCustomContentURL.php

Gets the URL for the music & SFX library server.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

https://geometrydashfiles.b-cdn.net

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {}

req = requests.post("https://www.boomlings.com/database/getCustomContentURL.php", data=data)
print(req.text)
```

**Response**
```plain
https://geometrydashfiles.b-cdn.net
```

<!-- tabs:end -->
