# getGJComments21.php

Gets comments of a level, list or sound pack.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `levelID`<ParamInfo req="always"/> | The ID of the level, list or sound pack. Negative if it's a list ID |
| `page`<ParamInfo req="always"/> | Which page of comments you want to see |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="common"/> |
| `cType` | If set to 6, `levelID` is a sound pack ID. Not sent otherwise |
| `binaryVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `gameVersion`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gameVersion"/> |
| `udid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo req="no" sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo req="no" sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo req="no" sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo req="no" sent="always"/> | <ParamDesc name="gjp2"/> |
| `mode`<ParamInfo req="no" sent="always"/> | Set to 0 for most recent, and 1 for most liked |
| `total`<ParamInfo req="no" sent="always"/> | Probably the cached total number of comments, default is `0` |
| `count`<ParamInfo req="no" sent="cond"/> | Number of comments to fetch. Defaults to 10, but doubles if "More Comments" is enabled or in compact view (stacking) <ParamCond sent="cond">value is not 10</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>

## Response

Returns a list of [comment objects](/resources/server/comment.md) separated by a pipe `|`. If the `binaryVersion` parameter is lower than 49 or isn't provided, all non-ASCII characters in the comment's message are replaced with `?` symbols - this is likely to maintain compatibility with pre-2.209 clients, which can't parse them.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code returns the comments on VSC by Bo.

data = {
    "levelID": 60805571,
    "page": 0,
    "secret": "Wmfd2893gb7"
}

headers = {
    "User-Agent": ""
}

url = "https://www.boomlings.com/database/getGJComments21.php"
req = requests.post(url, data=data, headers=headers)
print(req.text)

```

**Response**
```plain
2~NzQgYXR0IHdoYXR0~3~210153877~4~0~7~0~10~4~9~15 minutes~6~46232563:1~dooblom~9~91~10~19~11~11~14~2~15~2~16~23631435|2~QUFBQUFBQUFBQQ==~3~267641474~4~0~7~0~10~37~9~17 minutes~6~46232555:1~CaAlexDa~9~26~10~12~11~2~14~0~15~2~16~19216511|2~SSBzaG91bGQgc3RhcnQgZ3JpbmRpbmcgY2hhbGxlbmdlcyEh~3~263506358~4~0~7~0~10~100~9~31 minutes~6~46232489:1~0bv~9~35~10~3~11~12~14~0~15~0~16~30775227|2~MTk1NiBhdHRlbXB0cyBpbiBwcmFjdGljZSBGSU5BTExZIQ==~3~245747440~4~0~7~0~10~0~9~1 hour~6~46232231:1~artistboylo~9~9~10~6~11~16~14~7~15~2~16~28706271|2~Ui5JLlAgQm8g~3~268611032~4~-2~7~0~10~100~9~5 hours~6~46231318:1~xStixGDx~9~11~10~12~11~12~14~6~15~0~16~31063613|2~bG1hbw==~3~147836572~4~1~7~0~10~5~9~8 hours~6~46231019:1~NGDK~9~1~10~1~11~12~14~6~15~0~16~15162356|2~NzQzIGF0dCBpbiBwcmFjdGljZSx3dw==~3~263745181~4~1~7~0~10~0~9~9 hours~6~46230852:1~eskibime~9~37~10~18~11~12~14~5~15~0~16~30290292|2~d3Rm~3~267359964~4~1~7~0~10~11~9~9 hours~6~46230775:1~knoxoniaa~9~58~10~102~11~12~14~0~15~2~16~30998487|2~W3ZdZXJ0aWNhbCBbc11wZWVkIFtjXW9uc2VydmF0aW9uIGlzIGEgc3VwZXIgbWFyaW8gNjQgc3BlZWRydW5uaW5nIHN0cmF0ZWd5Lg==~3~268138873~4~1~7~0~10~0~9~9 hours~6~46230770:1~ultrabucket~9~108~10~15~11~23~14~0~15~2~16~31054190|2~R0cgMTQgYXR0LiAoSSB3b250IHNob3cgbXkgcGVyY2VudGFnZSBqdXN0IHRydXN0IG1lIG9uIHRoaXMgb25lKQ==~3~116404059~4~1~7~0~10~0~9~10 hours~6~46230718:1~themuffinthief~9~6~10~12~11~9~14~2~15~2~16~18175167#46173:0:10
```

### **curl**
```plain
curl -X POST "https://www.boomlings.com/database/getGJComments21.php" -H "User-Agent: " -d "levelID=60805571&page=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->
