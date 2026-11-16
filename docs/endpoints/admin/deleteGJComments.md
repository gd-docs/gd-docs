# deleteGJComments.php

::: warning
All info related to Admin endpoints should be used for development purposes only. Misuse of these has led to punishment in the past, so we do not recommend poking around.
:::

Bulk-deletes comments with a custom reason and a list of categories.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `gameVersion`<ParamInfo sent="always"/> | <ParamDesc name="gameVersion"/> |
| `binaryVersion`<ParamInfo sent="always"/> | <ParamDesc name="binaryVersion"/> |
| `udid`<ParamInfo sent="always"/> | <ParamDesc name="udid"/> |
| `uuid`<ParamInfo sent="always"/> | <ParamDesc name="uuid"/> |
| `dvs`<ParamInfo sent="always"/> | <ParamDesc name="dvs"/> |
| `accountID`<ParamInfo sent="always"/> | <ParamDesc name="accountID"/> |
| `gjp2`<ParamInfo sent="always"/> | <ParamDesc name="gjp2"/> |
| `secret`<ParamInfo sent="always"/> | <ParamDesc name="secret" type="common"/> |
| `cType`<ParamInfo sent="always"/> | Comment type. 0 - Level/list comment, 1 - Account comment (unknown if possible to get in vanilla), 6 - Sound pack comment, 7 - Advisors' level comments. |
| `items`<ParamInfo sent="always"/> | List of `commentID,parentID` pairs, separated by `;`, identyfing the comments to remove. The meaning of `parentID` depends on `cType`. |
| `reason`<ParamInfo sent="cond"/> | [Base64](/topics/encryption/base64)-encoded reason. <ParamCond sent="cond">not empty</ParamCond> |
| `categories`<ParamInfo sent="cond"/> | Comma-separated list of category IDs. 0 - Inappropriate Content, 1 - Harassment / Hate, 2 - Spam / Trolling, 3 - Scam / Phishing, 7 - Threats / Danger. <ParamCond sent="cond">not empty</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>

## Response

The number of comments deleted or `-1` in case of an error.
