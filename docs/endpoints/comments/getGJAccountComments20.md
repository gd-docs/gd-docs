# getGJAccountComments20.php

Gets a user's account comments.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | The account ID of the player whose comments you're getting | Yes      | <!--a-->
| `page`          | Which page of comments you want to see | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> |          | <!--a-->
| `total`         | Probably the cached total number of account comments, default is `0` |          | <!--a-->
| `count`         | Amount of account comments that will be returned. Max 20, default 10 |          | <!--old? not sent-->

## Response

Returns a list of [comment objects](/resources/server/comment.md) separated by a pipe `|`, followed by a `#` and page info in the following format: `total:offset:page_size`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831,  # DevExit's account ID
    "page": 0,
    "secret": "Wmfd2893gb7"
}

headers = {
    "User-Agent": ""
}

url = "https://www.boomlings.com/database/getGJAccountComments20.php"
req = requests.post(url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl -X POST "https://www.boomlings.com/database/getGJAccountComments20.php" -H "User-Agent: " -d "accountID=173831&page=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

**Response**
```plain
2~NTAwMCBzdGFycyE=~4~9~9~2 months~6~1756926|2~Qmxvb2RiYXRoIEdHISEh~4~19~9~6 months~6~1745624|2~QWxsZWdpYW5jZSAxMDAl~4~2~9~6 months~6~1744292|2~SUNEWCAxMDAlIDop~4~1~9~6 months~6~1743608|2~T2ggeWVhaCBDYXRhIGFuZCBUVVAgMTAwJQ==~4~1~9~7 months~6~1742661|2~Mi4xMSBpcyBvdXQgOik=~4~43~9~2 years~6~1295890|2~SSBsaWtlIGhvdyBzb21lb25lIGRpc2xpa2UgYm90dGVkIG1vc3Qgb2YgbXkgY29tbWVudHMgOikgU2hvd3MgdGhhdCBJJ20uLi5mQW1PdVM=~4~16~9~2 years~6~1279970|2~TmVjcm9wb2xpeCBpbiAyMTYgYXR0IGluIHByYWN0aWNl~4~14~9~2 years~6~1264265|2~IkhpIEx1bmEi~4~15~9~3 years~6~1246506|2~TyB3YWl0IG15IDUwdGggZGVtb24gd2FzIGdvaW5nIHRvIGJlIEJ1Y2sgRm9yY2UsIG5vdCByZWFsbHkgY2VsZWJyYXRvcnkuLi4=~4~7~9~3 years~6~1238082#67:0:10
```

<!-- tabs:end -->
