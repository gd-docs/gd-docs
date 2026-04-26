# updateGJUserScore22.php

Updates a user's data

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `stars`         | The amount of stars the user has | Yes      | <!--a-->
| `moons`         | The amount of moons the user has | Yes      | <!--a-->
| `demons`        | The amount of demons the user has, including official levels | Yes      | <!--a-->
| `diamonds`      | The amount of diamonds the user has | Yes      | <!--a-->
| `icon`          | Which icon the iconType has selected, for example if iconType is 0 (cube), then it's the selected cube | Yes      | <!--a-->
| `iconType`      | Which gamemode the player has last selected when changing their icons, 0 for cube, 1 for ship, 2 for ball, 3 for ufo, 4 for wave, 5 for robot, 6 for spider | Yes      | <!--a-->
| `coins`         | The amount of secret coins the user has | Yes      | <!--a-->
| `userCoins`     | The amount of user coins the user has | Yes      | <!--a-->
| `accIcon`       | The ID of the user's selected icon. | Yes      | <!--a-->
| `accShip`       | The ID of the user's selected ship. | Yes      | <!--a-->
| `accBall`       | The ID of the user's selected ball. | Yes      | <!--a-->
| `accBird`       | The ID of the user's selected UFO. | Yes      | <!--a-->
| `accDart`       | The ID of the user's selected wave. | Yes      | <!--a-->
| `accRobot`      | The ID of the user's selected robot. | Yes      | <!--a-->
| `accGlow`       | Whether the user has glow enabled. | Yes      | <!--a-->
| `accSpider`     | The ID of the user's selected spider. | Yes      | <!--a-->
| `accExplosion`  | The ID of the user's selected death effect. | Yes      | <!--a-->
| `accSwing`      | The ID of the user's selected swing. | Yes      | <!--a-->
| `accJetpack`    | The ID of the user's selected jetpack. | Yes      | <!--a-->
| `seed2`         | [See here](/topics/encryption/chk#user-profile) | Yes      | <!--a-->
| `sinfo`         | List of counts of completed levels of each non-demon difficulty, separately for classic and platformer levels. Includes official levels. Format: `{autoClassic},{easyClassic},{normalClassic},{hardClassic},{harderClassic},{insaneClassic},{autoPlatformer},{easyPlatformer},{normalPlatformer},{hardPlatformer},{harderPlatformer},{insanePlatformer}` | Yes      | <!--a-->
| `sinfod`        | Amount of completed dailies | Yes      | <!--a-->
| `sinfog`        | Amount of completed gauntlet non-demon levels | Yes      | <!--a-->
| `sinfoe`        | Amount of completed event non-demon levels | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |  | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |  | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |  | <!--a-->
| `userName`      | The username of the player |          | <!--a-->
| `color1`        | Color 1 of the player. Defaults to the default primary color when left out |          | <!--a-->
| `color2`        | Color 2 of the player. Defaults to the default secondary color when left out |          | <!--a-->
| `color3`        | Glow color of the player. Defaults to secondary color when left out |          | <!--a-->
| `special`       | Glow (2 if enabled) |          | <!--a-->
| `dinfo`         | List of all completed demons (level IDs separated by `,`). Does not include official, weekly, gauntlet and event levels. Not sent if empty |          | <!--o-->
| `dinfow`        | Amount of completed weeklies. Sent only together with dinfo |          | <!--a-->
| `dinfog`        | Amount of completed gauntlet demons. Sent only together with dinfo |          | <!--a-->
| `dinfoe`        | Amount of completed event demons. Sent only together with dinfo |          | <!--a-->
| `seed`          | A random set of 10 numbers and letters in `A-Za-z0-9` |          | <!--a-->

## Response

The player ID of the user

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 5317656, # PasswordFinders' Account ID
    "gjp2": "********", # This would be PasswordFinders' password encoded with GJP2 encryption
    "userName": "PasswordFinders",
    "stars": 6969,
    "moons": 696,
    "demons": 69,
    "diamonds": 5000,
    "icon": 0,
    "color1": 21,
    "color2": 42,
    "color3": -1,
    "iconType": 0,
    "coins": 150,
    "userCoins": 400,
    "special": 2,
    "accIcon": 0,
    "accShip": 0,
    "accBall": 0,
    "accBird": 0,
    "accDart": 0,
    "accRobot": 0,
    "accGlow": 0,
    "accSpider": 0,
    "accExplosion": 1,
    "accSwing": 0,
    "accJetpack": 0,
    "dinfo": "13519,10109",
    "dinfow": 0,
    "dinfog": 0,
    "dinfoe": 0,
    "sinfo": "6,9,6,9,6,9,6,9,6,9,6,9",
    "sinfod": 0,
    "sinfog": 0,
    "sinfoe": 0,
    "secret": "Wmfd2893gb7",
    "seed": ''.join(random.sample("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM", 10))
}
data['seed2'] = generate_chk([data['accountID'], data['userCoins'], data['demons'], data['stars'], data['coins'], data['iconType'], data['icon'], data['diamonds'], data['accIcon'], data['accShip'], data['accBall'], data['accBird'], data['accDart'], data['accRobot'], data['accGlow'], data['accSpider'], data['accExplosion'], len(data['dinfo']), data['dinfow'], data['dinfog'], data['sinfo'], data['sinfod'], data['sinfog']], "85271", "xI35fsAapCRg")

r = requests.post('https://www.boomlings.com/database/updateGJUserScore22.php', data=data)
print(req.text)
```

**Response**
```py
17787971
```

<!-- tabs:end -->
