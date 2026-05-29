# Server User Resource

## Users

Each player of Geometry Dash has their own profile which includes various different elements such as in-game stats, icons and even socials.

A typical user server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->

#### **User Example Response**
```md
1:Rifct:2:81183402:13:132:17:1921:10:17:11:12:51:105:3:23843:52:1607:46:36431:4:502:8:66:18:0:19:0:50:0:20:Rifct:21:334:22:129:23:67:24:148:25:62:26:40:28:1:43:38:48:1:53:25:54:1:30:6481:16:8927557:31::44:Rifct:45:RifctGD:59:RifctGD:60::58:Rifct:61:balls:49:0:55:336,34,15,12,9,16,5,5,2,1,51,11:56:90,95,100,1010,1424,346,210,66:57:4,3,11,101,92,25,0:29:1
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component. A list of all known keys can be found in the table below.

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1 | userName | **String** | The player's display name |
| 2 | userID | **Integer** | The player's User ID |
| 3 | stars | **Integer** | The player's star count |
| 4 | demonCount | **Integer** | The number of demons the player has completed |
| 6 | ranking | **Integer** | The player's ranking on the global leaderboard |
| 7 | accountHighlight | **Integer** | The player's account ID. Used for highlighting the player on the leaderboards<br/>*(only returned by [getGJScores20](/endpoints/users/getGJScores20) when viewing yourself on a leaderboard)* |
| 8 | creatorpoints | **Integer** | The number of creator points the player has |
| 9 | iconID | **Integer** | The ID of the player's display icon (see iconType) |
| 10 | color | **Integer** | The player's primary icon color |
| 11 | color2 | **Integer** | The player's secondary icon color |
| 12 | shipID | **Integer** | Deprecated key; the player's ship ID in 1.4 and 1.5. Was 0 if a cube was selected instead of a ship |
| 13 | secretCoins | **Integer** | The number of secret coins the player has |
| 14 | iconType | **Integer** | The icon displayed on leaderboards, comments, etc. (see the [Gamemode](/resources/client/level-components/enumerations#gamemode) enum) |
| 15 | special | **Integer** | Mirrors accGlow for non-[getGJUserInfo20](/endpoints/users/getGJUserInfo20) requests. 0 = Glow Disabled, 2 = Enabled. Was the ID of the player's trail prior to 2.0 |
| 16 | accountID | **Integer** | The player's account ID |
| 17 | userCoins | **Integer** | The number of user coins the player has |
| 18* | messageState | **Integer** | Who can send the player messages. 0 = All, 1 = Friends only, 2 = None |
| 19* | friendsState | **Integer** | Who can send the player friend requests. 0 = All, 1 = None |
| 20* | youTube | **String** | The player's YouTube channel |
| 21* | accIcon | **Integer** | The ID of the player's cube |
| 22* | accShip | **Integer** | The ID of the player's ship |
| 23* | accBall | **Integer** | The ID of the player's ball |
| 24* | accBird | **Integer** | The ID of the player's UFO |
| 25* | accDart | **Integer** | The ID of the player's wave |
| 26* | accRobot | **Integer** | The ID of the player's robot |
| 27 | accStreak | **Integer** | The ID of the player's trail. Is not sent, see [trivia](#trivia) |
| 28* | accGlow | **Bool** | If the player has glow enabled |
| 29* | isRegistered | **Bool** | If the player is registered |
| 30* | globalRank | **Integer** | The global rank of the player |
| 31* | friendState | **Integer** | Friendship status. Empty = Unfriended, 1 = Friended, 3 = Friend request sent to the player, 4 = Friend request received from the player |
| 32* | friendRequestID | **Integer** | An ID unique to each friend request<br/>*(only returned if player sent you a friend request)* |
| 35* | friendRequestMessage | **String** | The friend request's message, encoded in [base64](/topics/encryption/base64.md)<br/>*(only returned if player sent you a friend request)* |
| 37* | friendRequestAge | **Integer** | How long ago the friend request was sent (e.g. "2 months")<br/>*(only returned if player sent you a friend request)* |
| 38* | messages | **Integer** | The number of new messages you have<br/>*(only returned when logged in and viewing own profile)* |
| 39* | friendRequests | **Integer** | The number of new friend requests you have |
| 40* | newFriends | **Integer** | The number of new friends you have |
| 41 | newFriendRequest | **Bool** | If the friend request is new<br/>*(only returned by [getGJFriendRequests20](/endpoints/socials/getGJFriendRequests20))* |
| 42* | age | **String** | The time since you submitted a levelScore<br/>*(only returned by [getGJLevelScores211](/endpoints/levels/getGJLevelScores211 ))* |
| 43* | accSpider | **Integer** | The ID of the player's spider |
| 44* | twitter | **String** | The player's Twitter handle |
| 45* | twitch | **String** | The player's Twitch channel |
| 46 | diamonds | **Integer** | The number of diamonds the player has |
| 48* | accExplosion | **Integer** | The ID of the player's explosion effect |
| 49* | mod | **Integer** | The mod level of the player. 0 = None, 1 = Normal Mod (Yellow), 2 = Elder Mod (Orange), 3 = Leaderboard Mod (Blue). Leaderboard mods show as 0 if gameVersion is not set to 22 or above |
| 50* | commentHistoryState | **Integer** | Who can view the player's comment history. 0 = All, 1 = Friends only, 2 = None |
| 51 | color3 | **Integer** | The player's glow color |
| 52 | moons | **Integer** | The player's moon count |
| 53* | accSwing | **Integer** | The ID of the player's swing |
| 54* | accJetpack | **Integer** | The ID of the player's jetpack |
| 55* | demons | **String** | Breakdown of the player's demons, in the format `{easy},{medium},{hard},{insane},{extreme},{easyPlatformer},{mediumPlatformer},{hardPlatformer},{insanePlatformer},{extremePlatformer},{weekly},{gauntlet}` |
| 56* | classicLevels | **String** | Breakdown of the player's classic mode non-demons, in the format `{auto},{easy},{normal},{hard},{harder},{insane},{daily},{gauntlet}` |
| 57* | platformerLevels | **String** | Breakdown of the player's platformer mode non-demons, in the format `{auto},{easy},{normal},{hard},{harder},{insane},{the map}` |
| 58* | discord | **String** | The player's Discord handle |
| 59* | instagram | **String** | The player's Instagram username |
| 60* | tiktok | **String** | The player's TikTok handle |
| 61* | custom | **String** | The player's custom one-time authentication token |

Keys indicated with an asterisk (*) are only returned from the [getGJUserInfo20](/endpoints/users/getGJUserInfo20) endpoint. Conversely, keys 6, 9, 14, & 15 are only returned by user search endpoints ([getGJUsers20](/endpoints/users/getGJUsers20), [getGJScores20](/endpoints/users/getGJScores20))

### Trivia

- Setting Key `29` to `0` stops most aspects of your profile from loading

- Key `27` is impossible to recieve from the server as there is no way for the server to know what the player's `streak` is

- Key `15` represented the player's `streak` prior to 2.0; the `2` it now returns would have corresponded to the rainbow trail
