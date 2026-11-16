# Admin Report Queue Entry Object

A report queue entry represents an account in the [moderation queue](/endpoints/admin/adminGetReportQueue), along with summary data about its reports and moderation flags.

An entry is a fixed list of values separated by `:`, without key numbers.

There are four entry layouts:

| Layout | Fields |
| ------ | ------ |
| Anonymous only | 1-9 |
| Viewed | 1-12 |
| Flagged | 1-18 |
| Full | 1-20 |

## Structure

| Index | Name | Type | Description |
| ----- | ---- | ---- | ----------- |
| 1 | `reportedAccountID` | Integer | Account ID associated with the reported entry. Used to open the account review and profile. |
| 2 | `reportedUsername` | [Base64](/topics/encryption/base64) string | Username for the `reportedAccountID`. |
| 3 | `itemCount` | Integer | Displayed as the number of items. |
| 4 | `unk4` | Integer | Unknown. <!-- Parsed and stored; no use was observed in `buildRows` or its Review/author button handlers. --> |
| 5 | `anonymousReporterCount` | Integer | Number of anonymous reporters (presumably unregistered users). The client adds an `+{n} anonymous` label when positive. |
| 6 | `topReportReason` | Integer | `0` - Inappropriate, `1` - Harassment, `2` - Spam, `3` - Scam, `4` - Cheating, `5` - Impersonation, `6` - Stolen, `7` - Danger, other - ?. Defaults to `0` |
| 7 | `unk7` | Integer | Unknown. <!-- Parsed and stored; no use was observed in `buildRows` or its Review/author button handlers. --> |
| 8 | `entryAge` | String | Age of the entry. |
| 9 | `directReportCount` | Integer | Probably number of times the account was reported directly. Displayed as `reported directly x{n}` when positive. |
| 10 | `viewerAccountID` | Integer | Compared with the logged-in account ID to decide whether to show `viewerUsername` as the viewer name or "you". |
| 11 | `viewerUsername` | [Base64](/topics/encryption/base64) string | Viewer name. |
| 12 | `viewAge` | String | How long ago the entry was viewed. |
| 13 | `score` | Integer | Probably related to automated flagging. When positive, the client displays the score and flag labels. |
| 14 | `flagType` | Integer | Selects the flag label: `1` - AD SPAM, `2` - PREDATOR, other - FLAGGED. |
| 15 | `unk15` | Integer | Unknown. <!-- Parsed and stored; no use was observed in `buildRows` or its Review/author button handlers. --> |
| 16 | `unk16` | Integer | Unknown. <!-- Parsed and stored; no use was observed in `buildRows` or its Review/author button handlers. --> |
| 17 | `flagCount` | Integer | Number of times the account was flagged with `flagType`. Appended as `x{n}` to the flag label when greater than 1. |
| 18 | `unk18` | Integer | Unknown. <!-- Parsed and stored; no use was observed in `buildRows` or its Review/author button handlers. --> |
| 19 | `points` | Integer | Points. |
| 20 | `reporterCount` | Integer | Number of reporters (presumably registered users). The client adds a `{reporterCount} reporter(s)` label when this or `anonymousReporterCount` is positive. |
