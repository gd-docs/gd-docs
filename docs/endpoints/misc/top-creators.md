# top-creators.json

Used for the [online leaderboard](https://geometrydash.com/leaderboards) on geometrydash.com. This dynamic file is used to gather the top 1000 creators for the Creators tab.

You can fetch the list of creators by sending a GET request to `https://geometrydash.com/data/top-creators.json`.

## Response

Returns a list of JSON interpretations of the [user object](/resources/server/user.md) format with readable names/values.

## Example

```py
import requests

req = requests.get("https://geometrydash.com/data/top-creators.json")
print(req.text)
```

**Response**
```json
[{"accountID":11839560,"userID":117806273,"userName":"Split72","stars":57538,"moons":5257,"diamonds":85945,"demons":1013,"coins":164,"userCoins":5797,"creatorScore":475,"globalRank":1187,"icon":357,"iconType":0,"special":2,"color1":25,"color2":62,"color3":51},{"accountID":1187377,"userID":36314,"userName":"YunHaSeu14","stars":44962,"moons":1628,"diamonds":130282,"demons":123,"coins":135,"userCoins":12588,"creatorScore":419,"globalRank":1795,"icon":463,"iconType":0,"special":2,"color1":14,"color2":43,"color3":3},{"accountID":5226017,"userID":17140189,"userName":"robotchief","stars":40289,"moons":10000,"diamonds":65379,"demons":1267,"coins":164,"userCoins":4723,"creatorScore":309,"globalRank":2242,"icon":371,"iconType":0,"special":2,"color1":87,"color2":70,"color3":2},{"accountID":5981309,"userID":20276986,"userName":"SwtCyn","stars":116449,"moons":4282,"diamonds":133743,"demons":1016,"coins":164,"userCoins":13630,"creatorScore":291,"globalRank":318,"icon":55,"iconType":0,"special":2,"color1":12,"color2":3,"color3":3},{"accountID":2795,"userID":1078150,"userName":"ViPriN","stars":39391,"moons":1610,"diamonds":65292,"demons":1309,"coins":164,"userCoins":3824,"creatorScore":286,"globalRank":2357,"icon":42,"iconType":1,"special":2,"color1":11,"color2":13,"color3":47},{"accountID":4322668,"userID":14098234,"userName":"AleXins","stars":6428,"moons":1826,"diamonds":30498,"demons":115,"coins":126,"userCoins":910,"creatorScore":283,"globalRank":90964,"icon":124,"iconType":0,"special":2,"color1":23,"color2":3,"color3":3},{"accountID":11937526,"userID":120444088,"userName":"dkitey","stars":43666,"moons":11459,"diamonds":56936,"demons":706,"coins":118,"userCoins":3701,"creatorScore":266,"globalRank":1903,"icon":98,"iconType":0,"special":2,"color1":10,"color2":11,"color3":70},{"accountID":6945480,"userID":40076255,"userName":"DangerKat","stars":17065,"moons":1002,"diamonds":27805,"demons":332,"coins":101,"userCoins":1185,"creatorScore":264,"globalRank":12942,"icon":37,"iconType":0,"special":0,"color1":12,"color2":15,"color3":52},{"accountID":119741,"userID":4170784,"userName":"Serponge","stars":9958,"moons":243,"diamonds":11964,"demons":76,"coins":105,"userCoins":1770,"creatorScore":259,"globalRank":42233,"icon":46,"iconType":0,"special":0,"color1":0,"color2":3,"color3":3},{"accountID":4697863,"userID":14524162,"userName":"BridgetTheCroco","stars":14,"moons":4,"diamonds":1,"demons":0,"coins":0,"userCoins":0,"creatorScore":252,"globalRank":4538,"icon":1,"iconType":0,"special":0,"color1":0,"color2":3,"color3":0},/*...*/]
```
