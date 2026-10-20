# sendGJThreadMessage.php

Sends a message in an existing thread or starts a new thread. A sender can post at most 20 messages in any rolling 60-second period.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `threadID`      | The ID of the thread to send a message to. `0` if starting a new thread | |
| `body`          | The message body, converted to [URL-safe base64](/topics/encryption/base64) | |
| `isDM`          | `1` if starting a DM thread | |
| `toAccountID`   | If starting a DM thread, the account ID of the person the DM thread will be shared with, 0 otherwise | |
| `subject`       | If starting a group thread, the name of the thread encoded in [URL-safe base64](/topics/encryption/base64) | |
| `description`   | If starting a group thread, the description of the thread encoded in [URL-safe base64](/topics/encryption/base64) | |
| `emote`         | If starting a group thread, the emote used as the icon encoded in [URL-safe base64](/topics/encryption/base64) | |
| `targets`       | If starting a group thread, the account IDs of the people you want to invite, separated by commas and encoded in [URL-safe base64](/topics/encryption/base64) | |
| `token`         | Sent as the current UNIX timestamp (in seconds) left-shifted by 0x14 (20) | |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

Returns the thread ID and message ID separated by a colon `:` if the message was successfully posted. Starting a new DM adds a third value: `1` if the DM was created as a pending message request, otherwise `0`. Starting a new group adds two values: the number of invited accounts and a final value of `0`.

If you are not in the thread, returns a [Custom Error Message](/topics/custom_error) with the title "Group Chat" and body "You are no longer in this group chat."

If the thread does not exist or there's another issue with your request, returns `-1`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the messages from a thread

data = {
    "accountID": 26068292, # GMDAntiMatter's account ID
    "gjp2": "********", # This would be GMDAntiMatter's password encoded with GJP2 encryption
    "secret": "Wmfd2893gb7",
    "body": "SGVsbG8gZnJvbSB0aGUgR0QgRG9jcyE=",
    "threadID": 77519
}

req = requests.post("https://www.boomlings.com/database/sendGJThreadMessage.php", data=data)
print(req.text)
```

**Response**
```plain
77519:708508
```

<!-- tabs:end -->
