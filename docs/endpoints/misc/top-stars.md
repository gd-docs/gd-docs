# top-stars.json

Used for the [online leaderboard](https://geometrydash.com/leaderboards) on geometrydash.com. Identically in terms of data to [getTop1000.php](/endpoints/misc/getTop1000), this dynamic file is used to gather the top 1000 star grinders for the Stars tab.

You can fetch the list of star grinders by sending a GET request to `https://geometrydash.com/data/top-stars.json`.

## Response

Returns a list of JSON interpretations of the [user object](/resources/server/user.md) format with readable names/values.

## Example

```py
import requests

req = requests.get("https://geometrydash.com/data/top-stars.json")
print(req.text)

```

**Response**
```json
[{"accountID":1711800,"userID":2989276,"userName":"MrSpaghetti","stars":363565,"moons":8020,"diamonds":334717,"demons":8898,"coins":164,"userCoins":44730,"creatorScore":105,"globalRank":1,"icon":459,"iconType":0,"special":2,"color1":12,"color2":13,"color3":98},{"accountID":1413859,"userID":7708568,"userName":"Smiffy777","stars":363335,"moons":20299,"diamonds":300232,"demons":9346,"coins":164,"userCoins":78788,"creatorScore":0,"globalRank":2,"icon":115,"iconType":0,"special":2,"color1":29,"color2":14,"color3":42},{"accountID":5189757,"userID":14188128,"userName":"Volplay","stars":349663,"moons":363,"diamonds":226823,"demons":8218,"coins":164,"userCoins":32210,"creatorScore":2,"globalRank":3,"icon":284,"iconType":0,"special":2,"color1":26,"color2":22,"color3":64},{"accountID":1367488,"userID":9033864,"userName":"Keleru","stars":349636,"moons":19621,"diamonds":264041,"demons":8201,"coins":164,"userCoins":54935,"creatorScore":3,"globalRank":4,"icon":132,"iconType":0,"special":2,"color1":37,"color2":14,"color3":71},{"accountID":5743332,"userID":18566542,"userName":"Wessel","stars":343690,"moons":2631,"diamonds":193298,"demons":7476,"coins":164,"userCoins":21129,"creatorScore":0,"globalRank":5,"icon":121,"iconType":0,"special":0,"color1":93,"color2":15,"color3":55},{"accountID":18325101,"userID":166382632,"userName":"uueemm","stars":338617,"moons":3311,"diamonds":143319,"demons":7643,"coins":164,"userCoins":23432,"creatorScore":0,"globalRank":6,"icon":14,"iconType":5,"special":2,"color1":40,"color2":41,"color3":12},{"accountID":5015844,"userID":16871274,"userName":"Kattah","stars":337198,"moons":13897,"diamonds":178341,"demons":7331,"coins":164,"userCoins":25884,"creatorScore":0,"globalRank":7,"icon":74,"iconType":0,"special":2,"color1":17,"color2":15,"color3":15},{"accountID":4271160,"userID":12789332,"userName":"iMeatR","stars":334426,"moons":3210,"diamonds":239480,"demons":6295,"coins":164,"userCoins":28260,"creatorScore":0,"globalRank":8,"icon":10,"iconType":2,"special":0,"color1":18,"color2":23,"color3":12},{"accountID":10532492,"userID":56369434,"userName":"Iminguendo","stars":332599,"moons":10131,"diamonds":238628,"demons":6593,"coins":164,"userCoins":26143,"creatorScore":3,"globalRank":9,"icon":97,"iconType":0,"special":2,"color1":35,"color2":24,"color3":98},{"accountID":770802,"userID":4760052,"userName":"R0yale","stars":332158,"moons":5150,"diamonds":262005,"demons":5876,"coins":164,"userCoins":30234,"creatorScore":0,"globalRank":10,"icon":62,"iconType":0,"special":0,"color1":12,"color2":37,"color3":37},/*...*/]
```
