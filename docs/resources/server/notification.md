# Server Notification Resource

## Notification

Notifications are a feature in Geometry Dash where you can receive alerts about events such as your levels reaching a certain amount of downloads, or one of your friends/people you follow getting a rated level.

A typical notification server response is structured with a `key:value:key:value` pairing and is then split with a `|`.
<!-- tabs:start -->

#### **Notification Example Response**
```md
1:238513:2:15:3:epic:4:RXBpYyE=:5:PGNnPnJvYWRraWxsZXI8L2M-J3MgbGV2ZWwgPGN5PmtpbGxlZDwvYz4gaXMgbm93IDxjbz5FcGljPC9jPiE=:6:1
week:7:0:8:1:9:149867590:10::11:0:12:0:13:0:14:0:15:2171511:16:roadkiller
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.
A list of all known keys can be found in the table below.

### Notification Structure

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | notificationID  | **Integer** | The notification ID
| 2   | type  | **Integer** | The notification's type. Current known types are 10 for new levels, 11 for level download milestones, 13 for follower milestone notifications, 14 for friend accepts, 15 for level rates
| 3   | emoteIcon   | **String** | The name of the emote used as the icon
| 4   | title      | **String** | The title encoded in [Base64](/topics/encryption/base64.md)
| 5   | description | **String** | The description of the notification encoded in [Base64](/topics/encryption/base64.md)
| 6   | age   | **String** | How old the notification is (e.g. "1 week")
| 7   | isNew		   | **Bool** | Whether you are seeing the notification for the first time. Adds a green circle to the top left of the notification's icon in-game
| 8	  | hasLevel	   | **Bool** | 1 if the notification has a level attached to it, 0 otherwise
| 9	  | levelID	   | **Integer** | The level ID for this notification, if it has one. 0 otherwise
| 10  | achievement	   | **String** | The achievement given by this notification
| 11   | unknown		   | **Integer** | Seems to always be 0
| 12  | unknown		   | **Integer** | Seems to always be 0
| 13  | hasChest		 | **Bool** | Whether the notification has a chest
| 14  | chestType		 | **Integer** | 0 if chest isn't present, otherwise a value from 1 to 9 indicating the texture the chest will use
| 15  | accountID		 | **Integer** | The account ID of the account associated with this notification, if applicable. 0 otherwise
| 16  | username   	 | **Integer** | The username of the account associated with this notification, if applicable
