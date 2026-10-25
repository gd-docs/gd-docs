# updateGJUserScore22.php

Updates a user's data

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="always"/> | <ParamDesc name="gjp2"/> |
| `stars`<ParamInfo req="always"/> | The amount of stars the user has |
| `moons`<ParamInfo req="always"/> | The amount of moons the user has |
| `demons`<ParamInfo req="always"/> | The amount of demons the user has, including official levels |
| `diamonds`<ParamInfo req="always"/> | The amount of diamonds the user has |
| `icon`<ParamInfo req="always"/> | Which icon the iconType has selected, for example if iconType is 0 (cube), then it's the selected cube |
| `iconType`<ParamInfo req="always"/> | Which gamemode the player has last selected when changing their icons, 0 for cube, 1 for ship, 2 for ball, 3 for ufo, 4 for wave, 5 for robot, 6 for spider |
| `coins`<ParamInfo req="always"/> | The amount of secret coins the user has |
| `userCoins`<ParamInfo req="always"/> | The amount of user coins the user has |
| `accIcon`<ParamInfo req="always"/> | The ID of the user's selected icon. |
| `accShip`<ParamInfo req="always"/> | The ID of the user's selected ship. |
| `accBall`<ParamInfo req="always"/> | The ID of the user's selected ball. |
| `accBird`<ParamInfo req="always"/> | The ID of the user's selected UFO. |
| `accDart`<ParamInfo req="always"/> | The ID of the user's selected wave. |
| `accRobot`<ParamInfo req="always"/> | The ID of the user's selected robot. |
| `accGlow`<ParamInfo req="always"/> | Whether the user has glow enabled. |
| `accSpider`<ParamInfo req="always"/> | The ID of the user's selected spider. |
| `accExplosion`<ParamInfo req="always"/> | The ID of the user's selected death effect. |
| `accSwing`<ParamInfo req="always"/> | The ID of the user's selected swing. |
| `accJetpack`<ParamInfo req="always"/> | The ID of the user's selected jetpack. |
| `seed2`<ParamInfo req="always"/> | [See here](/topics/encryption/chk#user-profile) |
| `sinfo`<ParamInfo req="always"/> | List of counts of completed levels of each non-demon difficulty, separately for classic and platformer levels. Includes official levels. Format: `{autoClassic},{easyClassic},{normalClassic},{hardClassic},{harderClassic},{insaneClassic},{autoPlatformer},{easyPlatformer},{normalPlatformer},{hardPlatformer},{harderPlatformer},{insanePlatformer}` |
| `sinfod`<ParamInfo req="always"/> | Amount of completed dailies |
| `sinfog`<ParamInfo req="always"/> | Amount of completed gauntlet non-demon levels |
| `sinfoe`<ParamInfo req="always"/> | Amount of completed event non-demon levels |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `userName`<ParamInfo req="no" sent="always"/> | The username of the player |
| `color1`<ParamInfo req="no" sent="always"/> | Color 1 of the player. Defaults to the default primary color when left out |
| `color2`<ParamInfo req="no" sent="always"/> | Color 2 of the player. Defaults to the default secondary color when left out |
| `color3`<ParamInfo req="no" sent="always"/> | Glow color of the player. Defaults to secondary color when left out |
| `special`<ParamInfo req="no" sent="always"/> | Glow (2 if enabled) |
| `dinfo`<ParamInfo req="no" sent="cond"/> | List of all completed demons (level IDs separated by `,`). Does not include official, weekly, gauntlet and event levels. <ParamCond sent="cond">not empty</ParamCond> |
| `dinfow`<ParamInfo req="no" sent="always"/> | Amount of completed weeklies. Sent only together with dinfo |
| `dinfog`<ParamInfo req="no" sent="always"/> | Amount of completed gauntlet demons. Sent only together with dinfo |
| `dinfoe`<ParamInfo req="no" sent="always"/> | Amount of completed event demons. Sent only together with dinfo |
| `seed`<ParamInfo req="no" sent="always"/> | A random set of 10 numbers and letters in `A-Za-z0-9` |

<ParamInfoFooter/>
</ParamGroup>

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
