# uploadGJDeathData.php

Uploads the user's death data to the server.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret` <ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `data` <ParamInfo req="always"/> | The player's death data, see [format](#data) |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |

<ParamInfoFooter/>
</ParamGroup>

### Data


#### Format
`{levelID},{unknown},{encodedDeathData}`
- `{levelID}` is the ID of the level to upload death data for
- `{unkown}` unknown, maybe total deaths?
- `{encodedDeathData}` is the death data encoded as a [Level String](/topics/levelstring_encoding_decoding#encoding), in the format `{deathMarkers};{percentages};{completed}`
  - `{deathMarkers}` is a list of death markers in the format `{x},{y},{deaths},{percent},{x},{y},{deaths},{percent},...`
  - `{percentages}` is a list of the user's deaths by percentage in the format `{percentage},{deaths},{percentage},{deaths},...`
  - `{completions}` is the number of times the user has completed the level

#### Example Data
```plaintext
151563139,17,H4sIAAAAAAAACi2NUQ7AMAhCL8RHodq16f3vNZxLjBLxYRAccMPSBl2omQHW8kH8SuBM6NQlGBO0Zxl2FZWwsY0tu5j2PPVx8gP5Hud2kIylo71prn8WxTtewA55LJIAAAA=
```

## Response

1 if successful, -1 if not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests
url = "https://www.boomlings.com/database/uploadGJDeathData.php"
data = {
    "secret": "Wmfd2893gb7",
    "accountID": 11757536, # Encamped's accountID
    "gjp2": "********",
    "data": "151563139,17,H4sIAAAAAAAACi2NUQ7AMAhCL8RHodq16f3vNZxLjBLxYRAccMPSBl2omQHW8kH8SuBM6NQlGBO0Zxl2FZWwsY0tu5j2PPVx8gP5Hud2kIylo71prn8WxTtewA55LJIAAAA="
}
headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)
```

<!-- tabs:end -->

**Response**
```plain
1
```

<!-- tabs:end -->
