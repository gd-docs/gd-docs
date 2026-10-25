# searchGJThreadMessages.php

Searches messages in a thread for a substring.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `threadID`      | The ID of the thread to search messages in | Yes | <!--a-->
| `query`         | The search query converted to [Base64](/topics/encryption/base64.md) | Yes | <!--a-->
| `beforeID`      | All fetched messages will be older than this message ID | | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

A successful request will return the data in the format

```
{messages}#{pages}
```

where:

- `{messages}` is a list of [Thread Message Objects](/resources/server/threadmessage) separated by pipes `|`. If no messages were fetched, this segment is returned as `none`
- `{pages}` is the amount of pages left

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
    "threadID": 49028,
    "query": "YWJjZGVm" // abcdef in base64
}

req = requests.post("https://www.boomlings.com/database/searchGJThreadMessages.php", data=data)
print(req.text)
```

**Response**
```plain
815725:26068292:YWJjZGVm:1792278193:0|815721:26068292:YWJjZGVm:1792278192:0|815719:26068292:YWJjZGVm:1792278192:0|815718:26068292:YWJjZGVm:1792278192:0|815716:26068292:YWJjZGVm:1792278192:0|815714:26068292:YWJjZG
Vm:1792278191:0|815711:26068292:YWJjZGVm:1792278191:0|815709:26068292:YWJjZGVm:1792278191:0|815706:26068292:YWJjZGVm:1792278190:0|815700:26068292:YWJjZGVm:1792278190:0|815696:26068292:YWJjZGVm:1792278189:0|815694
:26068292:YWJjZGVm:1792278189:0|815689:26068292:YWJjZGVm:1792278189:0|815686:26068292:YWJjZGVm:1792278188:0|815684:26068292:YWJjZGVm:1792278188:0|815683:26068292:YWJjZGVm:1792278187:0|815682:26068292:YWJjZGVm:179
2278187:0|815681:26068292:YWJjZGVm:1792278187:0|815680:26068292:YWJjZGVm:1792278187:0|815674:26068292:YWJjZGVm:1792278186:0#1
```

<!-- tabs:end -->
