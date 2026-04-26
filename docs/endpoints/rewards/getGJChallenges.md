# getGJChallenges.php

Gets a user's quests.

## Parameters

<ParamDesc />

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `udid`          | <ParamDesc name="udid"/> | Yes | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes | <!--a-->
| `chk`           | [Rewards CHK](/topics/encryption/rewards_chk) using the [daily challenges](/topics/encryption/xor.html#keys) key | Yes | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |  | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |  | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |  | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |  | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |  | <!--a-->
| `world`         | Effectively [`gdw`](/endpoints/generic#common-parameters), default is `0` |  | <!--a-->
| `gdl`           | <ParamDesc name="gdl"/> |  | <!--a-->

## Response

A list of attributes of the quests, separated by colons `:` as follows:
- A random string of 5 characters
- User's player ID
- The number used for the `chk`
- `udid`
- User's account ID
- Seconds left until quests are replenished
- First quest's attributes in a comma separated list
	- Maybe the amount of quests completed?
	- The type of item needed: 1 is orbs, 2 is coins, and 3 is stars
	- The amount of the item needed
	- How many diamonds the quest gives
	- The name of the quest
- Second quest's attributes in a comma separated list
- Third quest's attributes in a comma separated list

This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its [hash](/resources/server/hashes.md?id-getgjchallenges) by a pipe `|`. It also has a random string of 5 characters appended to the front.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "udid": "I can put BS here",
    "secret": "Wmfd2893gb7",
    "chk": "funnyBwAMBgc"
}

req = requests.post("https://www.boomlings.com/database/getGJChallenges.php", data=data)
print(req.text)
```

**Response**
```py
uFpntVWhadWMLCAsADwgLCwwCCw8BAAUBA3EUVFBXGERCRRl6ZxdZXEpRDQEDAAYHAgMJGAUdCxQBG3JWUVoXd1BWUFJDAwkYBB0ICBgGARVrQFZDGXtbW11cW0BYQwMJGAYdCAgEBx0IDRh4Q1sYeVZCTV1G|00bb89e2d55fc22fb9b60b9f41f1d6e5663b3036
```

<!-- tabs:end -->
