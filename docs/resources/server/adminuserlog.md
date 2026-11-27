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
| 4     | count        | **Integer** | Action-dependent. Can be total removed/cleared items or a flag score.
| 5     | reason   | **String (Base64URL)** | The encoded reason for the action
| 6     | moderatorName | **String (Base64URL)** | The encoded userName of the Moderator that took action.
| 7     | timestamp   | **Integer** | UNIX timestamp of when the action was taken
| 8     | categoryMask		   | **Integer (bitmask)** | The categories the rule-break falls under. 1=Inappropriate, 2=Harassment, 4=Spam, 8=Scam, 16=Cheating, 32=Impersonation, 64=Stolen, 128=Danger. For multiple reasons, the values are added together: `5` = Inappropriate (1) + Spam (4)
| 9     | target | **String (Base64URL)** | Identifies what the action concerns. Example is `thread_<id>`, where the ID is the thread involved.

### User Log Actions

| Action | Displayed title | Detail |
| --- | --- | --- |
| `comment_ban` | Comment Ban | `mode=perm` = `Permanent`; `mode=temp` = total `durationMinutes` |
| `comment_unban` | Comment Unban |  |
| `upload_ban` | Upload Ban | `mode=perm` = `Permanent`; `mode=temp` = total `durationMinutes` |
| `upload_unban` | Upload Unban |  |
| `message_ban` | Message Ban | `mode=perm` = `Permanent`; `mode=temp` = total `durationMinutes` |
| `message_unban` | Message Unban |  |
| `account_freeze` | All Bans Applied | `mode=perm` = `Permanent`; `mode=temp` = total `durationMinutes` |
| `account_unfreeze` | All Bans Lifted |  |
| `trending_ban` | Trending Ban |  |
| `trending_allow` | Trending Allow |  |
| `name_lock` | Name Lock |  |
| `name_unlock` | Name Unlock |  |
| `thread_lock` | Thread Lock (Owner) if `mode=owner`; otherwise Thread Lock (Member) |  |
| `thread_unlock` | Thread Unlock (Owner) if `mode=owner`; otherwise Thread Unlock (Member) |  |
| `delete_comments` | Delete Comments | `<count> removed` |
| `delete_posts` | Delete Posts | `<count> removed` |
| `delete_level` | Delete Level |  |
| `delete_list` | Delete List |  |
| `delete_sound` | Delete Sound Pack |  |
| `delete_message` | Delete Message |  |
| `reports_clear` | Reports Dismissed | `<count> item` or `<count> items` |
| `case_done` | Case Closed | `Penalty Applied` for `mode=banned`; `Content Removed` for `mode=removed`; otherwise `Nothing Needed`. If `count > 0`, add ` - <count> item(s) cleared`. |
| `flag_clear` | Case Dismissed | `score <count>` |
| `flag_actioned` | Case Actioned | `score <count>` |