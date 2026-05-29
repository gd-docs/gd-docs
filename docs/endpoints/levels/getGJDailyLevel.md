# getGJDailyLevel.php

Gets which daily level we're on and gets how much time is left.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->
| `type`          | 0 for daily, 1 for weekly, 2 for event level. |          | <!--a-->
| `chk`           | [Rewards CHK](/topics/encryption/rewards_chk) using the [chest rewards](/topics/encryption/xor.html#keys) key |          | <!--a/*: required for type 2-->
| `weekly`        | 0 for daily, 1 for weekly. Defaults to 0 if not sent. This parameter is outdated since 2.207 |          |

## Response

Returns the index of the current daily level and the time left in seconds, separated by a pipe `|`.

Event levels also return the reward chest data and an integrity [hash](/resources/server/hashes.md#getgjrewards). Time left will always be `10` for event levels.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests
url = "https://www.boomlings.com/database/getGJDailyLevel.php"
data = {
    "secret": "Wmfd2893gb7",
    "type": "2"
}
headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)
```

### **curl**

```plain
curl -X POST https://www.boomlings.com/database/getGJDailyLevel.php -d "secret=Wmfd2893gb7&type=2" -A ""
```

<!-- tabs:end -->

**Response**
```plain
2959|19186
```

<!-- tabs:end -->

## Changelog

## 2.207

In 2.207, the **weekly** parameter (0 for daily, 1 for weekly) was replaced with the **type** parameter. A [**chk**](/topics/encryption/rewards_chk) is now sent when the type is 2 (event levels).
