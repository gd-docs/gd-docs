# downloadGJMessage20.php

Download a message.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `messageID`     | The ID of the message to read                      | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `isSender`      | `0` for the messages the user has received, `1` for the messages they sent. If left out defaults to `0` |          | <!--o-->

## Response

Returns a [message object](/resources/server/message.md) separated by colons `:`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code we are getting the message info of the message with ID 54109536

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "messageID": 54109536,
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/downloadGJMessage20.php", data=data)
print(req.text)
```

**Response**
```plain
6:DevExit:3:3935672:2:173831:1:54109536:4:WW91J3JlIGR1bWIgbG9s:8:1:9:0:5:TWhtIHllcCB5b3UncmUgcCBkdW1iIGxtYW8=:7:19 minutes
```

<!-- tabs:end -->
