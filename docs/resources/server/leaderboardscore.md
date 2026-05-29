# Server Leaderboard Score Resource

## Leaderboard Score

Leaderboards are the in-game ranking system for Geometry Dash. There are `7` types of leaderboards that are used as of version `2.11` 
- `Star Top 100` - The top 100 best star grinders
- `Star Friends` - The relative leaderboards between the user and his friends
- `Relative Star` - The players position on the global leaderboards along with 100 other players that have a rank relative to the player
- `Creator Top 100` - The top 100 creator point grinders
- `Global Level Scores` - The fastest victors to a specific level since the level was uploaded to the servers
- `Global Weekly Level Scores` - The fastest victors to a specific level since the last `604800` seconds
- `Friend Level Scores` - The fastest victors to a specific level between the user and his friends since the level was uploaded to the servers

A typical leaderboard server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->


### **Level Leaderboard Example**

```md
1:TheWylieMaster:2:84696119:9:1:10:4:11:16:14:3:15:2:16:9276649:3:34:6:1:13:0:42:1 second       
```

### **Platformer Level Leaderboard Example**
```md
1:nebularius:2:245629812:9:24:10:17:11:3:14:5:15:2:16:28102632:3:750:6:1:42:21 hours
```

### **Top Leaderboard Example**

```md
1:Smiffy777:2:7708568:13:164:17:57051:6:1:9:115:10:29:11:14:14:0:15:2:16:1413859:3:273000:52:4684:8:0:46:204136:4:7018    
```

<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

### Level Leaderboard Score Structure

| Key | Name/Value | Type | Description 
|-----|------------|------|-------------
| 1   | userName | **String** | The username of the user
| 2   | playerID | **Integer** | The player ID of the user. **This is different than the account ID**
| 3   | percentage | **Integer** | Percentage the user has on the level. If the level is platformer, this is the time in milliseconds instead
| 6   | ranking | **Integer** | What rank they are (e.g. Viprin would have 1 in the creating leaderboard)
| 9   | Icon | **Integer** | Which icon the user is using, starting with 1 as the first icon
| 10  | playerColor | **Integer** | The user's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2 | **Integer** | The user's secondary player color, presumably ordered cronologically from left to right per update
| 12  | shipID | **Integer** | Deprecated key; the player's ship ID in 1.4 and 1.5. Was 0 if a cube was selected instead of a ship |
| 13  | coins | **Integer** | Number of usercoins you get on a level
| 14  | iconType | **Integer** | The user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider, swing, jetpack`
| 15  | special | **Integer** | functions the same as glow however it returns a 2 rather than a 1
| 16  | accountID | **Integer** | The user's account ID. **This is different than the player ID**
| 42  | age | **String** | How long ago the score was set (e.g. "2 months")
| 51  | color3 | **Integer** | The player's glow color |

### Top Leaderboard Score Structure

| Key | Name/Value | Type | Description 
|-----|------------|------|-------------
| 1   | userName | **String** | The username of the user
| 2   | playerID | **Integer** | The player ID of the user. **This is different than the account ID**
| 3   | stars | **Integer** | The amount of stars the player has
| 4   | demons | **integer** | The amount of demons the player has
| 6   | ranking | **Integer** | What rank they are (e.g. Viprin would have 1 in the creating leaderboard)
| 8   | creatorPoints | **Integer** | The amount of creator points the player has
| 9   | Icon | **Integer** | Which icon the user is using, starting with 1 as the first icon
| 10  | playerColor | **Integer** | The user's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2 | **Integer** | The user's secondary player color, presumably ordered cronologically from left to right per update
| 12  | shipID | **Integer** | Deprecated key; the player's ship ID in 1.4 and 1.5. Was 0 if a cube was selected instead of a ship |
| 13  | coins | **Integer** | Secret coins
| 14  | iconType | **Integer** | The user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider, swing, jetpack`
| 15  | special | **Integer** | functions the same as glow however it returns a 2 rather than a 1
| 16  | accountID | **Integer** | The user's account ID. **This is different than the player ID**
| 17  | userCoins | **Integer** | The amount of user coins the player has
| 46  | diamonds | **Integer** | The amount of diamonds the player has
| 51  | color3 | **Integer** | The player's glow color |
| 52  | moons | **Integer** | The amount of moons the player has

### Trivia

- The key structure that leaderboards follow are exactly the same as the structure used for [Player Profiles](/resources/server/user.md)  
