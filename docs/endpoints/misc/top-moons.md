# top-moons.json

Used for the [online leaderboard](https://geometrydash.com/leaderboards) on geometrydash.com. This dynamic file is used to gather the top 1000 moon grinders for the Moons tab.

You can fetch the list of moon grinders by sending a GET request to `https://geometrydash.com/data/top-moons.json`.

## Response

Returns a list of JSON interpretations of the [user object](/resources/server/user.md) format with readable names/values.

## Example

```py
import requests

req = requests.get("https://geometrydash.com/data/top-moons.json")
print(req.text)
```

**Response**
```json
[{"accountID":17250515,"userID":164675193,"userName":"revnotruv","stars":38239,"moons":22266,"diamonds":140936,"demons":1676,"coins":164,"userCoins":11468,"creatorScore":0,"globalRank":1080,"icon":326,"iconType":0,"special":2,"color1":58,"color2":51,"color3":51},{"accountID":4103842,"userID":14480456,"userName":"spycold","stars":103337,"moons":22246,"diamonds":125383,"demons":3488,"coins":164,"userCoins":11696,"creatorScore":19,"globalRank":420,"icon":123,"iconType":0,"special":2,"color1":63,"color2":83,"color3":16},{"accountID":25201107,"userID":225105909,"userName":"MaskedMSS","stars":30200,"moons":22206,"diamonds":114534,"demons":1361,"coins":164,"userCoins":6432,"creatorScore":0,"globalRank":1108,"icon":119,"iconType":0,"special":2,"color1":39,"color2":3,"color3":17},{"accountID":16271765,"userID":155600916,"userName":"DolphDaOne","stars":2427,"moons":22182,"diamonds":26511,"demons":975,"coins":78,"userCoins":1185,"creatorScore":0,"globalRank":1224,"icon":420,"iconType":0,"special":2,"color1":84,"color2":97,"color3":47},{"accountID":177265,"userID":3745583,"userName":"Maksimym200","stars":45555,"moons":22111,"diamonds":158373,"demons":1881,"coins":164,"userCoins":8314,"creatorScore":0,"globalRank":1061,"icon":481,"iconType":0,"special":2,"color1":88,"color2":86,"color3":17},{"accountID":19483709,"userID":175040624,"userName":"thearmyants","stars":129526,"moons":22103,"diamonds":141641,"demons":2188,"coins":149,"userCoins":9704,"creatorScore":2,"globalRank":256,"icon":76,"iconType":0,"special":0,"color1":15,"color2":9,"color3":9},{"accountID":14789362,"userID":150177856,"userName":"DefffolD","stars":61726,"moons":22075,"diamonds":103487,"demons":1712,"coins":164,"userCoins":18440,"creatorScore":0,"globalRank":1000,"icon":314,"iconType":0,"special":2,"color1":38,"color2":12,"color3":15},{"accountID":7181552,"userID":44025288,"userName":"IvanCrafter026","stars":22720,"moons":21990,"diamonds":81436,"demons":2245,"coins":164,"userCoins":3300,"creatorScore":4,"globalRank":1126,"icon":97,"iconType":2,"special":0,"color1":95,"color2":1,"color3":16},{"accountID":8266130,"userID":58312187,"userName":"kgamesnyc","stars":7341,"moons":21948,"diamonds":52581,"demons":1066,"coins":164,"userCoins":3567,"creatorScore":0,"globalRank":1197,"icon":62,"iconType":2,"special":2,"color1":98,"color2":83,"color3":12},{"accountID":18117795,"userID":168213706,"userName":"Colouts","stars":5582,"moons":21898,"diamonds":44925,"demons":1024,"coins":164,"userCoins":2330,"creatorScore":0,"globalRank":1207,"icon":74,"iconType":3,"special":2,"color1":1,"color2":16,"color3":3},/*...*/]
```
