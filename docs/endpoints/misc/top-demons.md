# top-demons.json

Used for the [online leaderboard](https://geometrydash.com/leaderboards) on geometrydash.com. This dynamic file is used to gather the top 1000 demon grinders for the Demons tab.

You can fetch the list of demon grinders by sending a GET request to `https://geometrydash.com/data/top-demons.json`.

## Response

Returns a list of JSON interpretations of the [user object](/resources/server/user.md) format with readable names/values.

## Example

```py
import requests

req = requests.get("https://geometrydash.com/data/top-demons.json")
print(req.text)

```

**Response**
```json
[{"accountID":1413859,"userID":7708568,"userName":"Smiffy777","stars":363335,"moons":20299,"diamonds":300232,"demons":9346,"coins":164,"userCoins":78788,"creatorScore":0,"globalRank":2,"icon":115,"iconType":0,"special":2,"color1":29,"color2":14,"color3":42},{"accountID":1711800,"userID":2989276,"userName":"MrSpaghetti","stars":363565,"moons":8020,"diamonds":334717,"demons":8898,"coins":164,"userCoins":44730,"creatorScore":105,"globalRank":1,"icon":459,"iconType":0,"special":2,"color1":12,"color2":13,"color3":98},{"accountID":22114794,"userID":198451459,"userName":"chuuwon","stars":113823,"moons":18880,"diamonds":155435,"demons":8810,"coins":164,"userCoins":19491,"creatorScore":0,"globalRank":333,"icon":272,"iconType":0,"special":2,"color1":8,"color2":12,"color3":12},{"accountID":1175115,"userID":7345248,"userName":"Plasma64","stars":251730,"moons":8896,"diamonds":159745,"demons":8569,"coins":164,"userCoins":15409,"creatorScore":0,"globalRank":47,"icon":75,"iconType":0,"special":2,"color1":18,"color2":44,"color3":44},{"accountID":2379669,"userID":11448554,"userName":"Lia","stars":206580,"moons":10150,"diamonds":225044,"demons":8509,"coins":164,"userCoins":25108,"creatorScore":2,"globalRank":98,"icon":98,"iconType":0,"special":2,"color1":12,"color2":43,"color3":15},{"accountID":5189757,"userID":14188128,"userName":"Volplay","stars":349663,"moons":363,"diamonds":226823,"demons":8218,"coins":164,"userCoins":32210,"creatorScore":2,"globalRank":3,"icon":284,"iconType":0,"special":2,"color1":26,"color2":22,"color3":64},{"accountID":1367488,"userID":9033864,"userName":"Keleru","stars":349636,"moons":19621,"diamonds":264041,"demons":8201,"coins":164,"userCoins":54935,"creatorScore":3,"globalRank":4,"icon":132,"iconType":0,"special":2,"color1":37,"color2":14,"color3":71},{"accountID":5249815,"userID":14014499,"userName":"Salvoe","stars":107820,"moons":12807,"diamonds":152483,"demons":7889,"coins":164,"userCoins":13567,"creatorScore":0,"globalRank":385,"icon":270,"iconType":0,"special":2,"color1":36,"color2":3,"color3":3},{"accountID":1671059,"userID":5424170,"userName":"Pizzabote6h","stars":108570,"moons":2681,"diamonds":105440,"demons":7752,"coins":164,"userCoins":14481,"creatorScore":0,"globalRank":375,"icon":17,"iconType":1,"special":0,"color1":12,"color2":11,"color3":3},{"accountID":18325101,"userID":166382632,"userName":"uueemm","stars":338617,"moons":3311,"diamonds":143319,"demons":7643,"coins":164,"userCoins":23432,"creatorScore":0,"globalRank":6,"icon":14,"iconType":5,"special":2,"color1":40,"color2":41,"color3":12},/*...*/]
```
