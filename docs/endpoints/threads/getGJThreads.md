# getGJThreads.php

Gets a user's message threads.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `page`          | The page of threads you want to fetch, starting from 0. Defaults to the first if left out |       |
| `filter`        | Which threads to show: 0 for all (default), 1 for DM, 2 for Group |       |
| `removed`       | Unknown, always sent as 1 |       |
| `user`          | Filter for threads that have these users. Comma-separated list of account IDs |       |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

## Response

A list of [Thread Objects](/resources/server/thread.md) separated by pipes `|`. This is then followed by page info, separated from the threads by `#`.

The page info has 5 values separated with colons `:`, which are:

- total - total number of levels for the query
- offset - offset from which the current page starts
- amount - number of levels per page (always 10 for the gd servers)
- invites - the amount of new invites
- interval - how often to refresh threads (in seconds). The GD server sets this to 60

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the threads GMDAntiMatter has

data = {
    "accountID": 26068292, # GMDAntiMatter's account ID
    "gjp2": "********", # This would be GMDAntiMatter's password encoded with GJP2 encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/getGJThreads.php", data=data)
print(req.text)
```

**Response**
```plain
49028:0::OmV5ZXM6:0:26068292:12 minutes:3::26068292:0:0:0:0:0:0:0:0:0:0:0:dGVzdHR0dHQ=:globe:1792167374:0:0|53803:44153388:YWlBc3Npc3RhbnQ=::0:44153388:12 hours:2:YWlBc3Npc3RhbnQ=:44153388:0:0:1:0:0:1:2:3:0:0:0:::1792174565:0:0#2:0:20:0:60
```

<!-- tabs:end -->
