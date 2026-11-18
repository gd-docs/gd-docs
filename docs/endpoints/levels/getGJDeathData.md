# getGJDeathData.php

Fetches the death data for a level.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret` <ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `levelID` <ParamInfo req="always"/> | The ID of the level to fetch death data for |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

```plaintext
{unknown1};{unknown2};{encodedDeathData}
```

- `{unk1}` unknown, seems to be either 0 or 1000
- `{unk2}` unknown, seems to range 0-3
- `{encodedDeathData}` is the death data encoded as a [Level String](/topics/levelstring_encoding_decoding#decoding), in the format `{deathMarkers}|{globalProgress}`
    - `{deathMarkers}` is a list of death markers in the following format, separated by `;`:
      - `{x},{y},{deaths},{deathPercentage},{wallPercentage},{unk},{stars},{deathPercentageBorder},{wallPercentageBorder}`
        - `{x}` the x position of the death marker
        - `{y}` the y position of the death marker
        - `{deaths}` the number of deaths at the death marker
        - `{deathPercentage}` the percentage of deaths at the marker, multiplied by 10 to be an integer 0-1000
        - `{wallPercentage}` the percentage of deaths at the marker where the player did not get past, multiplied by 10 to be an integer 0-1000
        - `{unk}` unknown, seems to correlate with deaths
        - `{stars}` the star rating of the death marker, 0-5 stars
        - `{deathPercentageBorder}` the border of of the deathPercentage icon
        - `{wallPercentageBorder}` the border of of the wallPercentage icon
    - `{globalProgress}` is the global level progress in the format `{n0},{n1},...,{n102}`, where the index is the level percentage, and the value is the number of runs reaching said percentage. The last two values (indices 101 & 102) are the total runs and total completions respectively.


## Example

<!-- tabs:start -->

### **Python**

```py
import requests
url = "https://www.boomlings.com/database/getGJDeathData.php"
data = {
    "secret": "Wmfd2893gb7",
    "levelID": 128
}

headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)
```

### **curl**

```plain
curl -X POST https://www.boomlings.com/database/getGJDeathData.php -d "secret=Wmfd2893gb7&levelID=128" -A ""
```

<!-- tabs:end -->

**Response**
```plain
0;1;H4sIAAAAAAAAA51XS3JEIQi8kAsRUKlcLYePwNN5otlMJaEybctfdComKKlWSZxz6j0h98QJUv4hSJATNUlFysAT1J4o5bFUqi1hSaVQgp5aTmgrtag-LDm9fkzVWBDY0EqGtrqh-nkoF7bPKA-MxXR0_0yTXQSV3c2vVPpkd4OHw32gTf8ptiDFF8quxviQ6u42EimZH1dgRsPmOKPD0yaJeciuGp-ofnj4hsNUTbWpgyO_4Hxqlqvmrk8-lvKCVwapG7rnSusAWpqNKk8NNpRHbIrmPXBia4CZuIlmU1HcB-B3PhY8yS1bloqnA_oyaOkowQ3NBqSydwKh9drTNTATzejOBdgMwrK0yGLt5CjgMjiybL9blt05CEkG0xtBMw2-U5ZaGsdioovbWeN40OUweqUn_MkyvuCt6eDQDHBD2cPYGwALv9BVvJKvXD-EFKrUNJEB1W47qHagysr3pIqdp4Ayy4VrGiyOzTFx7o4S1RvK5YJaEHVVYaXXk7Oj4sfrKc060SQvdHJtQEFE66jxyKXslSex7MjugqZhtlJZhTDm3tM2liJIYPnaQXMqMi0D-ICzc3u2XO9Nzj7SHGzv7RyY1uIQQbGkenN-pkX9gMsQ5QuIPpT3kjSr6N6uzP0EbXpAAJEuTKz4AaefdXT0SP4z5N8uRZ1t3I8wN64Sd774iRfr1iJ4MG020GkogsV7KRw_umy3auYAktA_TIjW8WV9zeJ-NXRz_nkDbNvxDS5mphNkvIFqPQeQpJ5MO1yQ9lFQRzOMw7mD0vyCOrdHUDifYNWbF1OcT3xhat0jaCU-_ByGcDLxtX3c-zvIfDOk22OYNXd9TISn17iAdfIffh5MHu2tF13oEL_QzhpB1DkGyGGIuZ7b7RRHsNUbSBdQw4TnabW6ThpfmFq4GwgxTMsn3sKMEUm7RKQ6Sw4gXiL6LZlGJ71Eri5AcIo23rDfiKHvG5H5LaoW3ATrFGJtXm5LqH8u9PVDuupifHkAUn3Y8ybGFw5AvciCKG0JO0rWFDbf9f3qwmaWXs0voV9P_hf60PqIrE-LR9RNdBXq87dCO_AR-kLIzYXI-WeVHv_8ATXvrKWCDQAA
```

<!-- tabs:end -->
