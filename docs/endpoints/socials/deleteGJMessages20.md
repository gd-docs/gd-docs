# deleteGJMessages20.php

Deletes a message between two users.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `messageID`<ParamInfo req="cond" sent="cond"/> | ID of the message being deleted <ParamCond req>the `messages` parameter is not sent</ParamCond> <ParamCond sent="cond">only one message is removed</ParamCond> |
| `messages`<ParamInfo req="cond" sent="cond"/> | IDs of the messages being deleted, separated with `,` <ParamCond req>the `messageID` parameter is not sent</ParamCond> <ParamCond sent="cond">more than one message is removed</ParamCond> |
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

Always returns 1, regardless of whether the message was deleted or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting a message with the ID 3141592
# DevExit received this message, and therefore the isSender parameter is not needed

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "messageID": 3141592,
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/deleteGJMessages20.php", data=data)
print(req.text)


```

**Response**
```py
1
```

<!-- tabs:end -->
