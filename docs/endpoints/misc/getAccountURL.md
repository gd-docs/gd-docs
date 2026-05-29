# getAccountURL.php

Gets the URL for the data server.

## Parameters

| Parameter   | Explanation | Required |
| ----------- | ----------- | -------- |
| `accountID` | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `type`      | Used to decide which endpoint is used after the data server is found. `1` = backup data, `2` = sync data | Yes      | <!--a-->
| `secret`    | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->

## Response

Usually [https://www.robtopgames.org](https://www.robtopgames.org). However, without a valid accountID and at type 2, [https://www.robtopgames.net](https://www.robtopgames.net) is returned instead

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
        "accountID": 71,
        "type": 2,
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/getAccountURL.php", data=data)
print(req.text)
```

**Response**
```py
https://www.robtopgames.net
```

<!-- tabs:end -->
