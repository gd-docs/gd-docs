# Server Level Resource

## Level

A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a [level string](/topics/levelstring_encoding_decoding).

A typical level server response is structured with a `key:value:key:value` pairing and is then split with a `|`
<!-- tabs:start -->

### **Level Example Response**
```
1:6508283:2:ReTraY:3:VGhhbmtzIGZvciBwbGF5aW5nIEdlb21ldHJ5IERhc2g=:4:{levelString}:5:3:6:4993756:8:10:9:10:10:39431612:12:0:13:21:14:4125578:17::43:3:25::18:2:19:7730:42:0:45:20000:15:3:30:0:31:0:28:5 years:29:1 year:35:557117:36:0_733_0_0_0_0_574_716_0_0_352_78_729_0_42_0_833_68_0_347_0_38_240_205_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0:37:3:38:1:39:2:46:7729:47:13773:40:0:27:AwMABAYDBw==#eb541c03f8355c0709f8007a1d9a595ae5bedc5d#291568b26b08d70a198fca10a87c736a2823be0c
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.
A list of all known keys can be found in the table below

### Level Object

Keys indicated with an asterisk (\*) are only returned from the downloadGJLevel22 endpoint.

Keys indicated with a dagger (†) were only returned from downloadGJLevel22 when extras was enabled. These were restricted to RobTop's account during 2022, and are not parsed or displayed by the client at all (outside of [developer builds](https://www.youtube.com/watch?v=UdMo19JstYg)).

#### Level Structure

| Key | Name/Value | Type | Description 
|-----|------------|------|-------------
| 1   | levelID | **Integer** | The id of the level 
| 2   | levelName | **String** | The name of the level 
| 3   | description | **String** | The level description, encoded in [base64](/topics/encryption/base64.md) 
| 4*  | levelString | **[Level String](/topics/levelstring_encoding_decoding)**| All the data for the level 
| 5   | version | **Integer** | The version of the level published 
| 6   | playerID | **Integer** | The player ID of the level author
| 8   | difficultyDenominator | **Integer** | Returns 0 if the level is N/A, returns 10 if a difficulty is assigned. Historically used to be the amount of people who have voted on the difficulty.
| 9   | difficultyNumerator | **Integer** | The nominator used for calculating the level difficulty. Divided by the denominator to get the difficulty icon. Nowadays just 0 = unrated, 10 = easy, 20 = normal, 30 = hard, 40 = harder, 50 = insane. Can be also used to determine the demon difficulty as a side-effect of the voting system. Historically used to be the sum of stars from all votes |
| 10  | downloads | **Integer** | The amount of times the level has been downloaded 
| 11  | setCompletes | **Integer** | The Number of people who have completed a specific level removed in update 2.1
| 12  | officialSong | **Integer** | The official song number used by the level, if applicable 
| 13  | gameVersion | **Integer** | The GD version the level was uploaded in. Versions 1.0 to 1.6 use version numbers 1 to 7 respectively. Version 10 is 1.7. Otherwise, divide the version number by ten to get the correct number. 
| 14  | likes | **Integer** | likes - dislikes |
| 15  | length | **Integer** | A number from 0-4, where 0 is tiny and 4 is XL |  
| 16  | dislikes | **Integer** | dislikes - likes |
| 17  | demon | **Bool** | If the level's difficulty is demon 
| 18  | stars | **Integer** | The amount of stars rewarded for completing the level
| 19  | featureScore | **Integer** | 0 if the level is not featured, otherwise a positive number. The higher it is, the higher the level appears on the featured levels list.
| 20† | starRatings | **Integer** | Amount of users who voted on a star rating for the level
| 21† | starRatingsSum | **Integer** | Sum of star rating votes
| 22† | minStarRatings | **Integer** | Amount of users who voted for a 1 star rating (auto)
| 23† | maxStarRatings | **Integer** | Amount of users who voted for a 10 star rating (demon)
| 24† | demonVotes | **Integer** | Amount of users who voted for a demon difficulty. After the difficulty voting system was removed in 2.0, this value would instead be incremented from 10 star votes.
| 25  | auto | **Bool** | If the level's difficulty is auto
| 26† | recordString | **String** | Replay string captured during level verification (`levelInfo` parameter during upload)
| 27* | password | **Encrypted String** | The password required to copy the level. It is XOR encrypted with a key of 26364
| 28* | uploadDate | **String** | The approximate date the level was uploaded on
| 29* | updateDate | **String** | The approximate date the level was last updated on
| 30  | copiedID | **Integer** | The ID the of the original level (if the level was copied) 
| 31  | twoPlayer | **Bool** | Whether the level uses two player mode
| 32† | rateStars | **Integer** | Star rating from the last Moderator to send the level
| 33† | rateFeature | **Bool** | If the latest send was a feature
| 34† | rateUser | **String** | Account ID of the latest send (possibly originally referred to the secret used when sending a level with the original send page)
| 35  | customSongID | **Integer** | The ID of the custom Newgrounds song used in the level 
| 36  | extraString | **String** | The extraString passed when uploading the level. Its use is currently unknown
| 37  | coins | **Integer** | The number of user coins placed in the level 
| 38  | verifiedCoins | **Bool** | If the level's user coins are verified (silver)
| 39  | starsRequested | **Integer** | The star value requested for the level 
| 40* | lowDetailMode | **Bool** | If the level has a low detail checkbox 
| 41* | dailyNumber | **Integer** | Daily/weekly levels only. Returns which daily/weekly the level was (e.g. the 500th daily level). Subtract 100,000 if the level is weekly
| 42  | epic | **Integer** | The epic rating for the level. 0 = none, 1 = epic, 2 = legendary, 3 = mythic. 
| 43  | demonDifficulty {#demon-difficulty} | **Integer** | The difficulty of the demon rating. 3 = easy, 4 = medium, 0 = hard, 5 = insane, 6 = extreme. Can also be used to determine the level difficulty non-demons had before rating as a side-effect of the voting system.
| 44  | isGauntlet | **Bool** | if the level is in a gauntlet |
| 45  | objects | **Integer** | The amount of objects in the level, used to determine if the level is considered "large". It caps at 65535   
| 46  | editorTime | **Integer** | the total number of seconds spend on the current copy of a level
| 47  | editorTime(Copies) | **Integer** | The accumulative total of seconds spend on previous copies of the level
| 48  | settingsString [Unused] | **String** | It was found in early 2.1 coming from the servers and was removed shortly after. The `December 2019 2.2 Leaks` however have information regarding it showing that it is called `settingsString` but, there is no information regarding its usage |
| 52* | songIDs | **Comma-Separated List** | The list of all song IDs in the level, separated by commas
| 53* | sfxIDs | **Comma-Separated List** | The list of all SFX IDs in the level, separated by commas
| 54  | songSize | **Integer** | Supposed to be the total song size. Seemingly unused as it is not returned by the server |
| 57* | verificationTime | **Integer** | How long the level took to verify (in frames, assume 240 FPS)

### Trivia

- The getGJLevels endpoint returns the keys `46` and `47` however they aren't actually correct (as of 2.1)

- Keys `46` and `47` are also capped at the 24-bit integer limit so any time longer than around 4660 hours won't be accurate

- key `45` caps at the 16-bit integer limit so any level with more objects won't be accurate

- Key `57` caps at the 24-bit integer limit so any time longer than around 465 hours won't be accurate

- Keys `28` and `29` were originally formatted as absolute datetimes, with commas being used in place of colons as a time separator (`yyyy-MM-dd HH,mm`). Those commas would be replaced with colons during parsing. This was changed to relative timestamps during 2.0, with the character replacement being removed as well.
