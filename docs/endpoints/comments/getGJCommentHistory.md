# getGJCommentHistory.php

Gets a user's comment history.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `userID`        | The user ID of the target user. **This is different from the account ID.** | Yes      | <!--a-->
| `page`          | Which page of comments you want to see | Yes      | <!--a-->
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7` | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `accountID`     | <ParamDesc name="accountID"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->
| `mode`          | `0` for most recent, and `1` for most liked |          | <!--a-->
| `total`         | Probably the cached total number of comments, default is `0` |          | <!--a-->
| `count`         | The number of comments you want to get. `20` in normal view, `40` in compact view. Capped at `100` |          | <!--a-->

## Response

Returns a list of [comment objects](/resources/server/comment.md) separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code retrieves DevExit's most liked comments

data = {
    "userID": 3935672, # DevExit's player ID
    "page": 0,
	"mode": 1, # This can be left out and will default to 0
    "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/getGJCommentHistory.php", data=data)
print(req.text)
```

**Response**
```py
2~MTQ0aHogYnVnIGF0IHRoaXMgcGVyY2VudCA6Yw==~1~59291804~3~3935672~4~303~10~43~9~5 months~6~17381271:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~T1ZFUiAxMDAwMCBET1dOTE9BRFMhISEhIFRIWCBTT09PTyBNVUNIISEh~1~14278830~3~3935672~4~16~10~0~9~4 years~6~20407183:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~V2h5~1~39387387~3~3935672~4~16~10~0~9~2 years~6~6965185:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~cGFzcyAzNjk3NDE=~1~20374388~3~3935672~4~15~10~0~9~4 years~6~25437852:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~TCBpIGsgZSBiIG8gdA==~1~45375100~3~3935672~4~11~10~0~9~2 years~6~18743065:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~Njk3NDY5IHBhc3MhISEhISEhISE=~1~9834617~3~3935672~4~9~10~0~9~4 years~6~25333196:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~ICAg~1~28093070~3~3935672~4~7~10~0~9~3 years~6~44155639:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~MTU2MjU1IHBhc3M=~1~20727320~3~3935672~4~7~10~0~9~4 years~6~25238380:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~NTU2Mjg3IGlzIHRoZSBQQVNTU1NTU1NTIQ==~1~20742226~3~3935672~4~7~10~0~9~4 years~6~25333304:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831|2~TmljZSBsaWtlYm90~1~34571961~3~3935672~4~6~10~0~9~3 years~6~5908756:1~DevExit~9~119~10~18~11~16~14~0~15~2~16~173831#999:0:10
```

<!-- tabs:end -->