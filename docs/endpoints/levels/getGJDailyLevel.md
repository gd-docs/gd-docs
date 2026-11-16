# getGJDailyLevel.php

Gets which daily level we're on and gets how much time is left. To fetch the current level ID of the daily level, either use [downloadGJLevel](/endpoints/levels/downloadGJLevel22) with a negative `levelID` or check [the safe](/endpoints/levels/getGJLevels21).

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `type`<ParamInfo req="no" sent="always"/> | 0 for daily, 1 for weekly, 2 for event level. |
| `chk`<ParamInfo req="cond" sent="always"/> | [Rewards CHK](/topics/encryption/rewards_chk) using the [chest rewards](/topics/encryption/xor.html#keys) key <ParamCond req>type is 2</ParamCond> |
| `weekly` | 0 for daily, 1 for weekly. Defaults to 0 if not sent. This parameter is outdated since 2.207 |

<ParamInfoFooter/>
</ParamGroup>

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
    "type": "2",
    "chk": f"{''.join(random.choice('1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') for i in range(5))}{base64.b64encode(xor_cipher(str(random.randint(10000, 1000000)), '59182').encode()).decode()}",
}
headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)
```

### **curl**

```plain
curl -X POST https://www.boomlings.com/database/getGJDailyLevel.php -d "secret=Wmfd2893gb7&type=1" -A ""
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
