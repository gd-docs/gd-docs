# Server Thread Resource

## Thread

Threads are a feature in Geometry Dash that replaces the legacy message system from 2.0.

Unlike most other server objects, threads do not have a typical `key:value:key:value` pair. Instead, they are a fixed list of values separated by colons `:`, without any keys.
<!-- tabs:start -->

#### **Thread Example Response**
```md
49028:0::OmV5ZXM6:0:26068292:8 minutes:3::26068292:0:0:0:0:0:0:0:0:0:0:0:dGVzdHR0dHQ=:globe:1792167374:0:0
```
<!-- tabs:end -->

A list of all known values can be found in the table below.

Values indicated with an asterisk (*) are only returned for DM threads, and are empty or 0 for group threads.

Values indicated with a dagger (†) are only returned for group threads, and are empty or 0 for DM threads.

### Thread Structure

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1     | threadID      | **Integer** | The thread ID
| 2     | accountID     | **Integer** | The account ID of the user on the other end of the thread
| 3     | username*     | **String** | The username of the user on the other end of the thread encoded in [Base64](/topics/encryption/base64.md)
| 4     | title†        | **String** | The title of the group thread encoded in [Base64](/topics/encryption/base64.md)
| 5     | newMessages   | **Integer** | The amount of new messages in the thread
| 6     | lastSenderID | **String** | The account ID of the person who sent the last message
| 7     | lastMessage   | **String** | How long ago the last message in the thread was sent (e.g. "13 hours")
| 8     | members		   | **Integer** | The amount of members in the thread
| 9     | lastSenderUsername | **String** | The username of the person who sent the last message encoded in [Base64](/topics/encryption/base64.md)
| 10    | ownerID	   | **Integer** | The account ID of the user who owns this thread
| 11    | muted		   | **Bool** | Whether you have muted the thread or not
| 12    | invitePermission | **Integer** | Who can invite members to the group: `0` = any active member, `1` = owner only
| 13    | threadType		 | **Bool** | 0 if this is a group thread and 1 if it's a DM thread
| 14    | unknown		 | **Integer** | Seems to always be 0
| 15  | pinned		 | **Bool** | Whether you have pinned the thread or not
| 16  | icon*  	 | **Integer** | The icon ID of the user on the other end of the thread
| 17  | color1*  	 | **Integer** | The primary color of the user on the other end of the thread
| 18  | color2*  	 | **Integer** | The secondary color of the user on the other end of the thread
| 19  | color3*  	 | **Integer** | The glow color of the user on the other end of the thread
| 20  | iconType*  	 | **Integer** | The icon type of the user on the other end of the thread
| 21  | special*  	 | **Integer** | Whether this person has glow enabled
| 22  | description†  	 | **String** | The description of this group thread encoded in [Base64](/topics/encryption/base64.md)
| 23  | emoteIcon†  	 | **String** | The emote icon used for this group thread
| 24  | lastMessageTimestamp | **Integer** | The UNIX timestamp of the last message
| 25  | modBadgeLevel* | **Integer** | The mod level of the user on the other end of the DM |
| 26  | status		 | **Integer** | DM status: `0` = default, `2` = pending request, `4` = friends-only recipient, `5` = recipient does not accept messages, `7` = one user blocked the other. `8` =  kicked from group thread. |

### Thread Invite Object
The getGJThreadInvites.php endpoint returns a fixed list of values for each pending invite:

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1 | threadID | **Integer** | The thread ID |
| 2 | inviterAccountID | **Integer** | The account ID of the user who invited you |
| 3 | inviterUsername | **String** | The inviter's username encoded in [Base64](/topics/encryption/base64.md) |
| 4 | title | **String** | The group title encoded in [Base64](/topics/encryption/base64.md); empty for DMs |
| 5 | members | **Integer** | Number of active group members; `0` for DMs |
| 6 | inviteAge | **String** | Relative age of the invite |
| 7 | lastMessageAge | **String** | Relative age of the latest message, or the thread creation time if there is no message |
| 8 | requestMessage | **String** | First regular message in a DM request; empty for groups and when absent |
| 9 | description | **String** | Group description encoded in [Base64](/topics/encryption/base64.md); empty for DMs |
| 10 | threadType | **Bool** | `0` = group, `1` = DM |
| 11 | muted | **Bool** | Whether the invitee has muted the thread |
| 12 | inviterIcon | **Integer** | The inviter's icon ID |
| 13 | ignoredInvite | **Bool** | Whether the invite was ignored |
| 14 | inviterColor2 | **Integer** | The inviter's secondary color |
| 15 | inviterColor3 | **Integer** | The inviter's glow color |
| 16 | inviterIconType | **Integer** | The inviter's icon type |
| 17 | inviterGlow | **Integer** | `2` when the inviter has glow enabled, otherwise `0` |
| 18 | inviterIcon | **Integer** | The inviter's icon ID (repeated in this position) |
| 19 | inviterColor1 | **Integer** | The inviter's primary color |
| 20 | emoteIcon | **String** | The group emote icon; empty for DMs |
| 21 | inviteTimestamp | **Integer** | UNIX timestamp when the invite was created |

### Pending Member Object
In getGJThreadMessages.php and getGJThreadMembers.php, pending invitees are represented differently from the invite objects returned by getGJThreadInvites.php. The fixed list is:

```
accountID:userID:username:invitedBy:iconID:color1:color2:color3:iconType:special:stars:moons:demons:secretCoins:userCoins:diamonds:inviteTimestamp:accIcon:accShip:accBall:accBird:accDart:accRobot:accGlow:accSpider:accExplosion:accSwing:accJetpack
```

The username is encoded in [Base64](/topics/encryption/base64.md).

### Thread Metadata

In the getGJThreadMessages.php endpoint, a more limited set of values is returned as one of the segments. They are as follows:

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1     | threadID      | **Integer** | The thread ID
| 2     | invitePermission | **Integer** | `0` = any active member can invite; `1` = owner only
| 3     | memberCount     | **Integer** | The amount of members in the group
| 4     | description        | **String** | The description of this group thread encoded in [Base64](/topics/encryption/base64.md)
| 5     | mv   | **Integer** | The value used in the `mv` key which is sent when refreshing the messages. What it does is currently unknown
| 6     | showLoadEarlier | **Bool** | Whether Show Earlier button should be shown prematurely
| 7     | unknown   | **Integer** | Seems to always be 0
| 8     | unknown		   | **Integer** | Seems to always be 0
| 9     | title | **String** | The title of the group thread encoded in [Base64](/topics/encryption/base64.md)
| 10    | locked	   | **Bool** | Whether the thread is locked or not
| 11    | status		   | **Integer** | DM status: `0` = default, `2` = pending request, `4` = friends-only recipient, `5` = recipient does not accept messages, `7` = one user blocked the other. `8` =  removed from group thread.

`{threadID}:{invitePermission}:{memberCount}:{description}:{mv}:0:0:0:{title}:{locked}:{status}`
