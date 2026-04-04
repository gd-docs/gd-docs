# top-usercoins.json

Used for the [online leaderboard](https://geometrydash.com/leaderboards) on geometrydash.com. This dynamic file is used to gather the top 1000 coin grinders for the User Coins tab.

You can fetch the list of coin grinders by sending a GET request to `https://geometrydash.com/data/top-usercoins.json`.

## Response

Returns a list of JSON interpretations of the [user object](/resources/server/user.md) format with readable names/values.

## Example

```py
import requests

req = requests.get("https://geometrydash.com/data/top-usercoins.json")
print(req.text)

```

**Response**
```json
[{"accountID":1413859,"userID":7708568,"userName":"Smiffy777","stars":363335,"moons":20299,"diamonds":300232,"demons":9346,"coins":164,"userCoins":78788,"creatorScore":0,"globalRank":2,"icon":115,"iconType":0,"special":2,"color1":29,"color2":14,"color3":42},{"accountID":13304660,"userID":94260503,"userName":"FvckingRayZen","stars":323351,"moons":17314,"diamonds":259664,"demons":6666,"coins":164,"userCoins":74885,"creatorScore":0,"globalRank":15,"icon":84,"iconType":0,"special":2,"color1":94,"color2":17,"color3":71},{"accountID":123927,"userID":105114,"userName":"Hiroquet","stars":321133,"moons":15063,"diamonds":353994,"demons":5864,"coins":164,"userCoins":73330,"creatorScore":6,"globalRank":17,"icon":25,"iconType":0,"special":2,"color1":50,"color2":48,"color3":12},{"accountID":2840505,"userID":7135271,"userName":"Demolishers","stars":322797,"moons":15973,"diamonds":293994,"demons":5309,"coins":164,"userCoins":73227,"creatorScore":6,"globalRank":16,"icon":459,"iconType":0,"special":2,"color1":12,"color2":16,"color3":16},{"accountID":13653875,"userID":54140253,"userName":"HeyMateGD","stars":303256,"moons":10320,"diamonds":220719,"demons":4222,"coins":164,"userCoins":69295,"creatorScore":0,"globalRank":22,"icon":98,"iconType":0,"special":2,"color1":6,"color2":2,"color3":3},{"accountID":4310927,"userID":12633635,"userName":"Steekmen","stars":302527,"moons":3100,"diamonds":319885,"demons":7000,"coins":164,"userCoins":67085,"creatorScore":8,"globalRank":23,"icon":30,"iconType":0,"special":2,"color1":12,"color2":15,"color3":12},{"accountID":4015506,"userID":14357384,"userName":"ATomMcC","stars":295121,"moons":9734,"diamonds":183132,"demons":4773,"coins":164,"userCoins":64996,"creatorScore":0,"globalRank":26,"icon":314,"iconType":0,"special":2,"color1":91,"color2":83,"color3":12},{"accountID":11616257,"userID":6808633,"userName":"ult8","stars":293600,"moons":5820,"diamonds":331898,"demons":6308,"coins":164,"userCoins":64634,"creatorScore":2,"globalRank":29,"icon":6,"iconType":5,"special":2,"color1":9,"color2":15,"color3":9},{"accountID":13329,"userID":1635419,"userName":"PaidDemon","stars":247193,"moons":14140,"diamonds":451819,"demons":2818,"coins":164,"userCoins":62867,"creatorScore":0,"globalRank":52,"icon":37,"iconType":0,"special":0,"color1":1,"color2":5,"color3":3},{"accountID":1591347,"userID":5179636,"userName":"Fipur","stars":248067,"moons":12540,"diamonds":119562,"demons":2074,"coins":164,"userCoins":61356,"creatorScore":0,"globalRank":51,"icon":137,"iconType":0,"special":2,"color1":91,"color2":38,"color3":91},/*...*/]
```
