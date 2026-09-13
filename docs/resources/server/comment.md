---
aside: true
---
# Server Comment Resource

Comments are public messages players can leave on levels, lists, and profiles. There are **two** types of comments: `Level Comments` and `Account Comments`

- `Level Comments` can be found by clicking the `i` button on the right of a level or list menu; you can also view a specific player's comments by clicking the comment icon on their profile. `Level Comments` can be up to **100 characters** in length without external tools
- `Account Comments` can be found on player profiles. `Account Comments` can be up to **140 characters** in length without external tools


## Comment Object

`Level Comments` contain a comment object and a user object split by a colon `:`. Level comments are returned by endpoints [getGJComments21](/endpoints/comments/getGJComments21.md) and [getGJCommentHistory](/endpoints/comments/getGJCommentHistory)

`Account Comments` contain only a comment object with keys `2, 4, 6, 9`. Account comments are returned by [getGJAccountComments20](/endpoints/comments/getGJAccountComments20)

Comment objects are structured with a `key~value~key~value` pairing, with each comment being split with a pipe `|`

<!-- tabs:start -->

### Level Comment Example Response
```md
2~R0QgRG9jcyBhcmUgZXBpYw==~3~84696119~4~0~7~0~10~0~9~2 seconds~6~12872819:1~TheWylieMaster~9~1~10~4~11~16~51~38~14~3~15~2~16~9276649
```

### Account Comment Example Response
```md
2~R0QgRG9jcyBhcmUgZXBpYw==~4~11~9~3 months~6~18083050
```

<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component. A list of all known keys can be found in the table below

## Comment Structure

| Key | Name/Value          | Type        | Description |
| --- | ------------------- | ----------- | ----------- |
| 1*  | levelID             | **Integer** | The ID of the level or list the comment was left on. Negative if the comment is on a list. Only returned by [getGJCommentHistory](/endpoints/comments/getGJCommentHistory) |
| 2   | comment             | **String**  | The comment message, encoded in [base64](/topics/encryption/base64.md) |
| 3*  | userID              | **Integer** | The user ID of the comment author |
| 4   | likes               | **Integer** | The number of likes the comment has |
| 5   | dislikes            | **Integer** | Unused; the number of dislikes the comment has |
| 6   | messageID           | **Integer** | The message ID. Account comments have different IDs than level comments |
| 7*  | spam                | **Bool**    | If the comment has been flagged as spam. Only returned by [getGJComments21](/endpoints/comments/getGJComments21) |
| 8   | authorAccountID     | **Integer** | Unused; the account ID of the comment author |
| 9   | age                 | **String**  | How long ago the comment was posted (e.g. "2 months") |
| 10* | percent             | **Integer** | The percent the author put in their comment |
| 11* | modBadge            | **Integer** | The mod badge of the author; only present if the author is a moderator. 1 = Normal Mod, 2 = Elder Mod |
| 12* | moderatorChatColor  | **String**  | Comma separated list of the RGB values of the author's chat color; only present if author is a moderator |
| 15  | timestamp           | **Integer** | UNIX timestamp of when the comment was uploaded (in seconds) |

Keys indicated with an asterisk `*` are absent in `Account Comments`

### User Structure
  
**Note:** These values are only returned through `Level Comments`

| Key | Name/Value   | Type        | Description |
| --- | ------------ | ----------- | ----------- |
| 1   | userName     | **String**  | The author's username |
| 9   | iconID       | **Integer** | The ID of the author's display icon (see iconType) |
| 10  | color1       | **Integer** | The author's primary icon color |
| 11  | color2       | **Integer** | The author's secondary icon color |
| 14  | iconType     | **Integer** | The icon beside the author's username (see the [Gamemode](/resources/client/level-components/enumerations#gamemode) enum) |
| 15  | special      | **Integer** | If the author has glow enabled. 0 = Glow Disabled, 2 = Enabled |
| 16  | accountID    | **Integer** | The author's account ID. **This is different than the player ID** |
| 51  | color3       | **Integer** | The author's glow color |

## Comment Bans

If a user violates [the commenting rules](https://imgur.com/a/US0Biaj), they can be banned from posting comments.
As of Geometry Dash version 2.11, there are 2 different types of bans:
- Permanent Bans - Only way to receive one is from RobTop directly. The server response to trigger this is `-10`
- Temporary Bans - Elder Moderators and RobTop can enforce these onto players. The server response to trigger temporary bans is split into 3 components `temp_{length}_{reason}`

### Temporary Ban Structure

| Component | Description |
| --------- | ----------- |
| `temp`    | is used by the game to identify if the user is banned |
| `length`  | The duration of the ban in seconds |
| `reason`  | The reason the user was banned |

## Trivia

- The `User String` uses the same response parser that [player profiles](/resources/server/user) use

- The only example of `Account Comments` displaying colour is [RobTop's](https://gdbrowser.com/u/71) profile. This is because RobTop hardcoded the colour into his accountID of `71`
 


