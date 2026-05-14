# getCustomContentURL.php

Gets the URL for the music & SFX library server.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->

### Required Parameters

None

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
