# getGJTopArtists.php

Gets RobTop's handpicked top artists.

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
| `page`<ParamInfo req="no" sent="always"/> | Which page of the artists you want to see |
| `total`<ParamInfo req="no" sent="always"/> | Probably the cached total number of artists, default is `0` |

<ParamInfoFooter/>
</ParamGroup>

## Response

A list of [song objects](/resources/server/song.md) with only the required information, the username and the youtube link if available, delimited by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "page": 1
}

req = requests.post("https://www.boomlings.com/database/getGJTopArtists.php", data=data)
print(req.text)
```

**Response**
```plain
4:Dimrain47|4:MadhouseDUDE|4:paperskies|4:CloudierMusic|4:Stratales|4:Lockyn|4:DanJohansen|4:BurgeraX|4:ParagonX9|4:Kolkian|4:LemKuuja|4:meganeko:7:UCP3M2myndqXuAEKKnqm_7SQ|4:teminiteofficial:7:UCc_bv_5nmxy2xnPNg9kP3Rg|4:Sharks:7:UCQJuQY3hF4YCHlAR42A5trg|4:F-777|4:DrayxMusic:7:UCSn0s6RSeePeJOiUi6Vdj6g|4:ForeverBound|4:DJ-Zyzyx|4:canonblade|4:Xtrullor:7:UCejLri1RVC7kj8ZVNX2a53g#73:20:20
```

<!-- tabs:end -->
