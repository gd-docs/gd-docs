# deleteGJMessages20.php

Deletes a message between two users.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `messageID`     | ID of the message being deleted. This parameter isn't sent if multiple messages are being removed |          | <!--*/o: sent if 1 msg, required if messages is not sent-->
| `messages`      | IDs of the messages being deleted, separated with `,`. This parameter isn't sent if only one message is being removed |          | <!--*/o: sent when >1 msg, required if messageID is not sent-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `isSender`      | Whether you're the message author. If not, this isn't sent |          | <!--*/o: required when 1-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

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
