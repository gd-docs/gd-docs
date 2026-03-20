# Client Level Resource

## Level

A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a level string. It is stored in [XML](https://en.wikipedia.org/wiki/XML) format, and each level entry is a dictionary, containing key/value pairs denoting the level's properties.

### Level Data

**Level Structure**

| Key | Name/Value                     | Type                                                             | Description                                                                      |
| ---- | ------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| k1   | Level ID                       | **integer**                                                      | the id of the level                                                              |
| k2   | Level Name                     | **string**                                                       | the name of the level                                                            |
| k3   | Description                    | **string**                                                       | the level description, encoded in [base64](https://en.wikipedia.org/wiki/Base64) |
| k4   | Start Level Object             | **[Start Object String](/resources/client/level-components/level-start.md)** | the inner level string, or the playable level                  |
| k5   | Creator                        | **[user](/resources/server/user.md)Name**                                        | the name of the level creator                                                    |
| k6   | UserID                         | **integer**                                                      | The UserID of the level Creator                                                  |
| k7   | level difficulty               | **integer**                                                      | the difficulty the level has                                                     |
| k8   | Official Song ID               | **Audio Track**                     | the official Song ID (if used)                                                   |
| k9   | Rating                         | **integer**                                                      | The rating a level has                                                           |
| k10  | RatingSum                      | **integer**                                                      | the sum of all the ratings a level has                                           |
| k11  | Downloads                      | **integer**                                                      | the amount of times the level's been downloaded                                  |
| k12  | setCompletes                   | **integer**                                                      | level completions for that particular level                                      |
| k13  | isEditable                     | **Bool**                                                         | used to stop people editing online and Official levels                           |
| k14  | Verified                       | **bool**                                                         | whether the level is verified or not                                             |
| k15  | Uploaded                       | **bool**                                                         | whether the level is uploaded to the server or not                               |
| k16  | Level Version                  | **integer**                                                      | the version of the level                                                         |
| k17  | Game Version                   | **integer**                                                      | The Games Version                                                                |
| k18  | Attempts                       | **integer**                                                      | the number of attempts that are made to this level                               |
| k19  | Normal Mode Percentage         | **integer**                                                      | the max percentage that has been achieved in normal mode in this level           |
| k20  | Practice Mode Percentage       | **integer**                                                      | the max percentage that has been achieved in practice mode in this level         |
| k21  | levelType                      | **Integer**                                                         | The Level Type (1 = Official, 2 = Local, 3 = Saved, 4 = Online)                  |
| k22  | Like Rating                    | **integer**                                                      | the level's like rating (`likes - dislikes`)                                     |
| k23  | Length                         | **[Length](/resources/client/level-components/enumerations.md)**                                    | the level's length                                                               |
| k24  | Dislikes                       | **integer**                                                      | how many dislikes a level has (unused)                                           |
| k25  | isDemon                        | **Bool**                                                         | if the level is demon or not                                                     |
| k26  | Stars                          | **integer**                                                      | the stars the level is worth                                                     |
| k27  | FeatureScore                   | **integer**                                                      | A featured levels Feature Score                                                  |
| k33  | Auto                           | **Bool**                                                         | If the level is auto                                                             |
| k34  | Replay Data                    | **[Gziped String](/topics/encryption/zip.md)**                   | Contains a Gzipped String which contains replay data for levels                  |
| k35  | isPlayable?                    | **Bool**                                                        | if the level is downloaded (honestly not much is known about this)                |
| k36 | Jumps                          | **integer**                                                      | total Jumps on a level                                                           |
| k37 | required coins                 | **Integer**                                                      | coins required to unlock an official level                                       |
| k38 | isUnlocked                     | **Bool**                                                         | is Official level Unlocked                                                       |
| k39 | level Size                     | **integer**                                                      | `this->levelSize = std::floor(this->levelString.length() * 0.152);`              |
| k40 | Build Version                  | **integer**                                                      | the games build version                                                          |
| k41 | Password                       | **integer**                                                      | the password <!-- local gamesave password topic link --> set for the level   |
| k42 | Original                       | **integer**                                                      | The ID the of the original level (if the level was copied)           |
| k43 | Two-Player Mode                | **Bool**                                                         | If the level is 2 player mode                                                    |
| k45 | Custom Song ID                 | **integer**                                                      | the custom Song ID (if used)                                                     |
| k46 | Level Revision                 | **integer**                                                      | the revision of the level                                                        |
| k47 | hasBeenModified                | **Bool**                                                         | if the level has been modified from outside the GD editor                        |
| k48 | Object Count                   | **integer**                                                      | the object count of the level                                                |
| k50 | Binary Version                 | **integer**                                                      | hardcoded to binary Version                                                      |
| k51 | capacity001                 | **integer**                                                      | BatchNodes                                                     |
| k52 | capacity002                 | **integer**                                                      | BatchNodes                                                    |
| k53 | capacity003                 | **integer**                                                      | BatchNodes                                                     |
| k54 | capacity004                 | **integer**                                                      | BatchNodes                                                      |
| k60 | AccountID                      | **integer**                                                      | the Creators AccountID                                                           |
| k61 | First Coin Acquired            | **bool**                                                         | whether the first coin is acquired during verification                           |
| k62 | Second Coin Acquired           | **bool**                                                         | whether the second coin is acquired during verification                          |
| k63 | Third Coin Acquired            | **bool**                                                         | whether the third coin is acquired during verification                           |
| k64 | Total Coins                    | **Integer**                                                      | How many Coins the level has                                                     |
| k65 | areCoinsVerified                | **Bool**                                                        | denotes if the coins are verified or not                                         |
| k66 | Requested Stars                | **integer**                                                      | the requested stars during publication of the level                              |
| k67 | [Capacity String](/resources/client/level-components/capacity-string.md)| **String**              | Contains batch information about levels                                          |
| k68 | triggeredAntiCheat             | **Bool**                                                         | if you trigger the anticheat when beating demons                                 |
| k69 | High Object Count              | **Bool**                                                         | If a level has a high object count                                               |
| k71 | Mana Orb Percentage            | **integer**                                                      | the percentage up until the orb reward has been granted                          |
| k72 | hasLowDetailMode               | **Bool**                                                         | If a level has LDM                                                               |
| k73 | toggleLDM                      | **Bool**                                                         | If a LDM is Enabled                                                              |
| k74 | timelyID                       | **integer**                                                      | the timelyID for a level                                                         |
| k75 | epicRating                     | **integer**                                                      | The level's epic rating. 0 for None, 1 for Epic, 2 for Legendary, 3 for Mythic   |
| k76 | demon type                     | **integer**                                                      | Demon Type Enum                                                                  |
| k77 | isGauntlet                     | **Bool**                                                         | is the level in a gauntlet                                                       |
| k78 | isAltGame                      | **Bool**                                                         | Levels that were completed on the free games                                     |
| k79 | Unlisted                       | **bool**                                                         | whether the level is to be marked as unlisted or not during publication          |
| k80 | Seconds Spent Editing          | **integer**                                                      | the number of seconds spent editing the level                                    |
| k81 | Seconds spent Editing (copies) | **integer**                                                      | the number of seconds spent editing the level (Previous copies)                  |
| k82 | isLevelFavourited              | **Bool**                                                         | if you put the level in your favourites                                          |
| k83 | levelOrder                     | **integer**                                                      | ordering for levels                                                              |
| k84 | Level Folder                   | **integer**                                                      | the folder in which the level belongs (0 represents no folder)                   |
| k85 | Clicks                         | **integer**                                                      | Clicks done on the best attempt                                                           |
| k86 | Player Time                    | **integer**                                                      | the amount of time on a players best attempt           |
| k87 | level Seed                | **[LevelScoreSeed](/topics/encryption/chk#level-leaderboard)**| Contains info to verify the integrity of levelScores                             |
| k88 | Level Progress                 | **String**                                                      | Contains a list of high score differences seperated by a `,`                     |
| k89  | vfDChk | **Bool**                    | used to check for level completion                                               |
| k90  | Leaderboard percentage         | **integer**                                                      | Contains the percentage for level Leaderboards                      |
| k91  | Locked Editor Layers           | **string**                                                       | List of all locked layers in the editor, separated by `,`                      |
| k93  | Unlimited Objects Enabled      | **bool**                                                         | Whether Unlimited Object Count (>80,000) is enabled |
| k94  | Unlisted (Friends Only)        | **bool**                                                         | whether the level is friends-only unlisted |
| k95  | Verification Time              | **integer**                                                      | Verification time in physics steps (240 steps per second) |
| k101 | Saved Camera Positions         | **string**                                                     | A list of saved camera positions in the editor in the format: `{x},{y},{x},{y}...`. Stores 10 points in total |
| k102 | Preview Lock X                 | **integer**                                                     | X coordinate of the Preview Lock in the editor |
| k103 | Preview Lock Y                 | **integer**                                                     | Y coordinate of the Preview Lock in the editor |
| k104 | Song list                      | **string**                                                     | List of song IDs separated by `,` |
| k105 | SFX list                       | **string**                                                     | List of SFX IDs separated by `,` |
| k106 | Song Size                      | **integer**                                                     | Total song size - unused (the server never returns this value) |
| k107 | Best Time                      | **integer**                                                     | Your best time on the level in milliseconds  |
| k108 | Best Points                    | **integer**                                                     | Your point highscore on the level |
| k109 | Local Best Times               | **integer**                                                     | List of your best times on the level in milliseconds, separated by `,` |
| k110 | Local Best Points              | **integer**                                                     | List of your point highscores on the level, separated by `,` |
| k111 | Platformer Seed                | **integer**                                                     | Checksum for platformer completions, see below for code  |
| k112 | No Shake                       | **bool**                                                         | Whether the player has disabled shake for this level |
| k115 | Ticks (Best Time)              | **integer**                                                      | Amount of 240 TPS ticks on the attempt that had the fastest time |
| k116 | Ticks (Best Points)            | **integer**                                                      | Amount of 240 TPS ticks on the attempt that had the most points |
| k117 | Clicks (Best Time)             | **integer**                                                      | Amount of clicks on the attempt that had the fastest time |
| k118 | Clicks (Best Points)           | **integer**                                                      | Amount of clicks on the attempt that had the most points |
| k119 | Inputs? (Best Time)            | **string**                                                       | The inputs on the attempt that had the fastest time? - seems to be unused |
| k120 | Inputs? (Best Points)          | **string**                                                       | The inputs on the attempt that had the most points? - seems to be unused |
| k121 | Coins Collected (Best Time)    | **integer**                                                      | Amount of coins collected on the attempt that has the fastest time |
| k122 | Coins Collected (Best Points)  | **integer**                                                      | Amount of coins collected on the attempt that has the most points |
| k122 | Coins Collected (Best Points)  | **integer**                                                      | Amount of coins collected on the attempt that has the most points |
| k123 | Time Saved                     | **bool**                                                         | Whether level completion was legitimate and time was successfully saved |
| k124 | Points Saved                   | **bool**                                                         | Whether level completion was legitimate and points were successfully saved |
| k125 | Click Between Steps override   | **integer**                                                      | The Click Between Steps override for the level (2.2082 only). 0 - none, 1 - enable, 2 - disable |

The classic level seed is generated like this (please note you need to add another `1482` when submitting the level score):

```py
def generate_classic_leaderboard_seed(
    jumps: int, percentage: int, seconds: int, has_played: bool = True
) -> int:

    return (
        1482 * has_played
        + (jumps + 3991) * (percentage + 8354)
        + ((seconds + 4085) ** 2) - 50028039
    )
```

The platformer seed is generated like this:

```py
def generatePlatformerHash(bestTime, bestPoints):
  number = (((bestTime + 7890) % 34567) * 601 + ((abs(bestPoints) + 3456) % 78901) * 967 + 94819) % 94433
  return ((number ^ number >> 16) * 829) % 77849

```


**Last Editor State Key/Value Pairs**
The last editor state key/value pairs contain a few values that indicate the last state of the editor before exiting the editor on that level.

| Key | Name/Value               | Type           | Description                              |
| --- | ------------------------ | -------------- | ---------------------------------------- |
| kI1 | Editor Camera X Position | **float**      | the X position of the editor camera      |
| kI2 | Editor Camera Y Position | **float**      | the Y position of the editor camera      |
| kI3 | Editor Camera Zoom       | **float**      | the zoom level of the editor camera      |
| kI4 | Build Tab Page           | **integer**    | the displayed page within the build tab  |
| kI5 | Build Tab                | **integer**    | the selected build tab                   |
| kI6 | Build Tab Pages          | **dictionary** | the last browsed pages of each build tab |
| kI7 | Editor Layer             | **float**      | the last selected index of a layer       |

Note that the build tab pages do not depend on the user's button row/column settings. That means, if the settings are changed, the build tab pages will not reflect the correct changes. For example:

The build tab page is 5, and the button settings are 6x2 (default), meaning the currently shown elements range from `5 * 6 * 2` = 60 to `6 * 6 * 2 - 1` = 71 (zero-indexed). If the user changes the button settings to 12x3, the tab page will remain as 5, showing elements ranging from `5 * 12 * 3` = 180 to `6 * 12 * 3 - 1` = 215 (zero-indexed).

### GDL22

<!-- from what i gathered, there doesnt seem to be any code that triggers these yet-->

**Current Unknown Values**

| Key | Type        | Info                                                     |
| --- | ----------- | -------------------------------------------------------- |
| k92 | **integer** | |
