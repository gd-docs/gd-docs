# getGJContentStatus.php

Fetches the current daily/weekly/event/gauntlet. Used to notify the user of new content.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `special`<ParamInfo req="no" sent="always"/> | Always `1` |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a small list of comma-separated values in this order:
`{dailyNumber},{weeklyNumber},{eventNumber},{gauntletVersion},{latestGauntlet}`

Where:
* `dailyNumber` is the ID of the current Daily Level.
* `weeklyNumber` is the ID of the current Weekly Demon offset by 100000.
* `eventNumber` is the ID of the current Event Level offset by 200000.
* `gauntletVersion` increments by 1 every time a new gauntlet is added.
* `latestGauntlet` is the [Gauntlet ID](/resources/server/gauntlet) of the latest gauntlet added to the game.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7"
}

req = requests.post('https://www.boomlings.com/database/getGJContentStatus.php', data=data)
print(req.text)
```

**Response**
```py
3630,100481,200028,50,44
```

<!-- tabs:end -->
