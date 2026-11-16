# reportGJLevel.php

> [!WARNING]
> This endpoint is deprecated. While it still works as usual, that may not be the case in the future and the reports made using this endpoint are likely to go nowhere.

Reports a level

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `levelID` | The ID of the level being reported |

<ParamInfoFooter/>
</ParamGroup>

## Response

1 if a secret is passed, even if no levelID is passed, and -1 otherwise

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"levelID": 30194711,
    "secret": "Wmfd2893gb7"
}

req = requests.post('https://www.boomlings.com/database/reportGJLevel.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
