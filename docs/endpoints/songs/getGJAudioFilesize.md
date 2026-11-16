# getGJAudioFilesize.php

Gets the combined size of the specified songs and/or SFXs

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `songIDs`<ParamInfo req="no"/> | Comma-separated list of song IDs to include in the calculation (max. 101) |
| `sfxIDs`<ParamInfo req="no"/> | Comma-separated list of SFX IDs to include in the calculation (max. 1001) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion` | <ParamDesc name="gameVersion"/> |
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |
| `udid` | <ParamDesc name="udid"/> |
| `uuid` | <ParamDesc name="uuid"/> |
| `dvs` | <ParamDesc name="dvs"/> |
| `accountID` | <ParamDesc name="accountID"/> |
| `gjp2` | <ParamDesc name="gjp2"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns two values separated by a colon (`:`):
- The combined size of the specified songs and/or SFXs, in bytes
- The maximum allowed audio size for a level, in bytes (currently 100 MiB)

If no audio IDs are supplied, the calculated size is `0`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "songIDs": "482872,1135786",
    "sfxIDs": "10736"
}

req = requests.post("https://www.boomlings.com/database/getGJAudioFilesize.php", data=data)
print(req.text)
```

**Response**
```plain
14410674:104857600
```

<!-- tabs:end -->
