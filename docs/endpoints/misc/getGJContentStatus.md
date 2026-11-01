# getGJContentStatus.php

Fetches the current daily/weekly/event/gauntlet, and displays it to the user if they're out of date.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a small list of comma-separated values in this order:
`{dailyNumber},{weekly dailyNumber},{event dailyNumber},{gauntletVersion},{latestGauntlet}`

Where:
* The first dailyNumber is the ID of the current Daily Level.
* The second dailyNumber is the ID of the current Weekly Demon.
* The third dailyNumber is the ID of the current Event Level.
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
