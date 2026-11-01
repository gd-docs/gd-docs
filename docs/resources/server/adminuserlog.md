# Server Admin User Log Resource

## Admin User Log

The User Log includes all actions inflicited on a user account by a Moderator.

Unlike most other server objects, user logs do not have a typical `key:value:key:value` pair. Instead, they are a fixed list of values separated by colons `:`, without any keys.
<!-- tabs:start -->

#### **User Log Example Response**
```md
comment_ban:temp:60:0:RXhhbXBsZSByZWFzb24=:RXhhbXBsZU1vZA==:1730000000:5:
```
<!-- tabs:end -->

A list of all known values can be found in the table below.

### User Log Structure

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1     | action      | **String** | The punishment/action identifier.
| 2     | mode     | **String** | The status of the `action` (see below).
| 3     | durationMinutes     | **Integer** | The duration of the punishment.
| 4     | count        | **Integer** | The amount of removed items (comments, posts,  etc)
| 5     | reason   | **String (Base64URL)** | The encoded reason for the punishment
| 6     | moderatorName | **String (Base64URL)** | The encoded userName of the Moderator that took action.
| 7     | timestamp   | **Integer** | UNIX timestamp of when the action was taken
| 8     | categoryMask		   | **Integer (bitmask)** | The categories the rule-break falls under. 1=Inappropriate, 2=Harassment, 4=Spam, 8=Scam, 16=Cheating, 32=Impersonation, 64=Stolen, 128=Danger. For multiple reasons, the values are added together: `5` = Inappropriate (1) + Spam (4)
| 9     | target | **String (Base64URL)** | Identifies what the action concerns. Example is `thread_<id>`, where the ID is the thread involved.

### Action-dependent fields

- Ban and freeze actions use `mode=perm` for Permanent; otherwise the UI shows `durationMinutes`.
- `delete_comments` and `delete_posts` display `count` as the number removed.
- `reports_clear` displays `count` as an item count.
- `case_done` interprets `mode=banned` as Penalty Applied and `mode=removed` as Content Removed; all other modes display Nothing Needed. Positive `count` values append an items-cleared message.
- `flag_clear` and `flag_actioned` display `count` as a score.
