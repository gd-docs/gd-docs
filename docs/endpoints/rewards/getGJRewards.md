# getGJRewards.php

Gets the rewards from the chests.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `udid`<ParamInfo req="always"/> | <ParamDesc name="udid"/> |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `chk`<ParamInfo req="always"/> | [Rewards CHK](/topics/encryption/rewards_chk) using the [chest rewards](/topics/encryption/xor.html#keys) key |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `gdw`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gdw"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `rewardType`<ParamInfo req="no" sent="always"/> | 0 for getting info about the chests, 1 to get a new small chest, 2 to get a new large chest. Defaults to 0 if left out <!--TODO: can you leave it out or is it required???--> |
| `r1`<ParamInfo req="no" sent="always"/> | A random 3-5 digit number |
| `r2`<ParamInfo req="no" sent="always"/> | A random 3-5 digit number |

<ParamInfoFooter/>
</ParamGroup>

## Response

A list of attributes of the Rewards, separated by colons `:` as follows:
- A random string of 5 characters
- User's player ID
- The number used for the `chk`
- `udid`
- User's account ID
- Small chest time remaining
- Small chest's rewards in a comma separated list
	- Number of orbs
	- Number of diamonds
	- Item 1 (0 is none, 1 is Fire, 2 is Ice, 3 is Poison, 4 is Shadow, 5 is Lava, 6 is Demon Key, 10 is Earth, 11 is Blood, 12 is Metal, 13 is Light and 14 is Soul)
	- Item 2
- Small chest ID
- Large chest time remaining
- Large chest's rewards in a comma separated list following the above format
- Large chest ID
- `rewardType`

This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its [hash](/resources/server/hashes.md#getgjrewards) by a pipe `|`. It also has a random string of 5 characters appended to the front.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "secret": "Wmfd2893gb7",
    "chk": f"{''.join(random.choice('1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') for i in range(5))}{base64.b64encode(xor_cipher(str(random.randint(10000, 1000000)), '59182').encode()).decode()}",
    "rewardType": 1
}

req = requests.post("https://www.boomlings.com/database/getGJRewards.php", data=data)
print(req.text)

decoded_text = xor_cipher(base64.urlsafe_b64decode(response_text.split("|")[0][5:].encode()).decode(), '59182')
print(decoded_text)
```

**Response**
```py
DA96FcVVmQnEPCggLBwMOAwIGDAAGDgsPcBFbU1sZQU1GFXtiGFpQS1QCAwIKCQsDDwsHDAQPDQEUAxkJHQgIBA4DDAgCDQcMAg8LAQgeAxUFFAIPDAILCAQ=|3f5f0ad92a601380e7eea113c223be94ff75304d
DlWzC:3935672:499769:I can put BS here:173831:2646:40,1,0,0:1724:74640:200,6,4,0:533:1
```

<!-- tabs:end -->
