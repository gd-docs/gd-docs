# downloadGJMessage20.php

Download a message.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `messageID`<ParamInfo req="always"/> | The ID of the message to read |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `isSender`<ParamInfo req="cond" sent="cond"/> | Whether you're the message author <ParamCond req>you are the message author</ParamCond> <ParamCond sent="req"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

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
