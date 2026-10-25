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
| 12    | unknown		   | **Integer** | Seems to always be 0
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
| 25  | modBadgeLevel?* | **Integer** | Presumably the mod badge of the user on the other end of the thread
| 26  | status		 | **Integer** | Thread status. 0 - default, 2 - pending, 4 - this user only accepts messages from friends, 5 - this user does not accept messages, 7 - one of the users has the other one blocked, 8 - removed (kicked from group thread)

### Thread Invite Object
In the getGJThreadMessages.php endpoint, a different set of values is returned. They are as follows:

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1     | threadID      | **Integer** | The thread ID
| 2     | accountID     | **Integer** | The account ID of the user who invited you
| 3     | username     | **String** | The username of the user who invited you encoded in [Base64](/topics/encryption/base64.md)
| 4     | title        | **String** | The title of the group thread encoded in [Base64](/topics/encryption/base64.md)
| 5     | members   | **Integer** | Amount of members in the thread
| 6     | inviteAge | **String** | How long ago you were invited (e.g. "1 hour")
| 7     | lastMessage   | **String** | How long ago the last message in the thread was sent (e.g. "13 hours")
| 8     | message		  | **String** | The pending DM invite message
| 9     | description | **String** | The description of the thread encoded in [Base64](/topics/encryption/base64.md)
| 10    | threadType	   | **Bool** | 0 - group thread, 1 - DM thread
| 11    | ignoredInvite		 | **Bool** | Whether you have ignored this invite
| 12  | icon  	 | **Integer** | The icon ID of the user who invited you
| 13  | color1  	 | **Integer** | The primary color of the user who invited you
| 14  | color2  	 | **Integer** | The secondary color of the user who invited you
| 15  | color3  	 | **Integer** | The glow color of the user who invited you
| 16  | iconType 	 | **Integer** | The icon type of the user who invited you
| 17  | special 	 | **Integer** | The special value of the user who invited you
| 18  | emoteIcon 	 | **String** | The emote icon used for this group thread
| 19  | inviteTimestamp 	 | **Integer** | The UNIX timestamp of when you were invited

### Thread Metadata

In the getGJThreadMessages.php endpoint, a more limited set of values is returned as one of the segments. They are as follows:

| Index | Name/Value  | Type | Description |
| ----- | ----------- | ---- | ----------- |
| 1     | threadID      | **Integer** | The thread ID
| 2     | unknown     | **Integer** | Seems to always be 0
| 3     | memberCount     | **Integer** | The amount of members in the group
| 4     | description        | **String** | The description of this group thread encoded in [Base64](/topics/encryption/base64.md)
| 5     | mv   | **Integer** | The value used in the `mv` key which is sent when refreshing the messages. What it does is currently unknown
| 6     | showLoadEarlier | **Bool** | Whether Show Earlier button should be shown prematurely
| 7     | unknown   | **Integer** | Seems to always be 0
| 8     | unknown		   | **Integer** | Seems to always be 0
| 9     | title | **String** | The title of the group thread encoded in [Base64](/topics/encryption/base64.md)
| 10    | locked	   | **Bool** | Whether the thread is locked or not
| 11    | unknown		   | **Bool** | Seems to always be 0

`{threadID}:0:{memberCount}:{description}:{mv}:{shwoL`
