# getGJTopArtists.php

Gets RobTop's handpicked top artists.

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
| `page`          | Which page of the artists you want to see |          | <!--a-->
| `total`         | Probably the cached total number of artists, default is `0` |          | <!--a-->

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
