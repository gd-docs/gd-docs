# Secrets

Secrets are 11 character strings used to validate if requests to the server were from a Geometry Dash client. Rather than generating a new secret for each request sent to the server, RobTop opted with hardcoding these secrets and slightly obfuscating them instead to stop people finding them.

### Table of Secrets

| Secret        | Type                 |
| ------------- | -------------------- |
| `Wmfd2893gb7` | Common               |
| `Wmfv3899gc9` | Account, Multiplayer |
| `Wmfv2898gc9` | Level                |
| `Wmfp3879gc3` | Mod                  |
| `Wmfx2878gb9` | Admin                |

## Secret Types

There are 4 *publicly* known secrets:
- Common Secret
- Account Secret
- Level Secret
- Moderator Secret

### Common Secret

There are <u>47</u> endpoints on the server which use the `Common Secret`. Below is a table of all known endpoints which use the Common Secret.

::: details Endpoints

| <center>Endpoint</center> | Endpoint Type |
| -------------------------- | ------------- |
| [https://www.boomlings.com/database/deleteGJAccComment20.php](/endpoints/comments/deleteGJAccComment20) | Comments |
| [https://www.boomlings.com/database/deleteGJComment20.php](/endpoints/comments/deleteGJComment20) | Comments |
| [https://www.boomlings.com/database/getGJAccountComments20.php](/endpoints/comments/getGJAccountComments20) | Comments |
| [https://www.boomlings.com/database/getGJCommentHistory.php](/endpoints/comments/getGJCommentHistory) | Comments |
| [https://www.boomlings.com/database/getGJComments21.php](/endpoints/comments/getGJComments21) | Comments |
| [https://www.boomlings.com/database/uploadGJAccComment20.php](/endpoints/comments/uploadGJAccComment20) | Comments |
| [https://www.boomlings.com/database/uploadGJComment21.php](/endpoints/comments/uploadGJComment21) | Comments |
| [https://www.boomlings.com/database/downloadGJLevel22.php](/endpoints/levels/downloadGJLevel22) | Levels |
| [https://www.boomlings.com/database/getGJDailyLevel.php](/endpoints/levels/getGJDailyLevel) | Levels |
| [https://www.boomlings.com/database/getGJGauntlets21.php](/endpoints/levels/getGJGauntlets21) | Levels |
| [https://www.boomlings.com/database/getGJLevelScores211.php](/endpoints/levels/getGJLevelScores211) | Levels |
| [https://www.boomlings.com/database/getGJLevelScoresPlat.php](/endpoints/levels/getGJLevelScoresPlat) | Levels |
| [https://www.boomlings.com/database/getGJLevels21.php](/endpoints/levels/getGJLevels21) | Levels |
| [https://www.boomlings.com/database/getGJMapPacks21.php](/endpoints/levels/getGJMapPacks21) | Levels |
| [https://www.boomlings.com/database/rateGJStars211.php](/endpoints/levels/rateGJStars211) | Levels |
| [https://www.boomlings.com/database/reportGJLevel.php](/endpoints/levels/reportGJLevel) | Levels |
| [https://www.boomlings.com/database/updateGJDesc20.php](/endpoints/levels/updateGJDesc20) | Levels |
| [https://www.boomlings.com/database/uploadGJLevel21.php](/endpoints/levels/uploadGJLevel21) | Levels |
| [https://www.boomlings.com/database/getGJLevelLists.php](/endpoints/lists/getGJLevelLists) | Lists |
| [https://www.boomlings.com/database/uploadGJLevelList.php](/endpoints/lists/uploadGJLevelList) | Lists |
| [https://www.boomlings.com/database/getAccountURL.php](/endpoints/misc/getAccountURL) | Misc |
| [https://www.boomlings.com/database/getSaveData.php](/endpoints/misc/getSaveData) | Misc |
| [https://www.boomlings.com/database/likeGJItem211.php](/endpoints/misc/likeGJItem211) | Misc |
| [https://www.boomlings.com/database/requestUserAccess.php](/endpoints/misc/requestUserAccess) | Misc |
| [https://www.boomlings.com/database/restoreGJItems.php](/endpoints/misc/restoreGJItems) | Misc |
| [https://www.boomlings.com/database/getGJChallenges.php](/endpoints/rewards/getGJChallenges) | Rewards |
| [https://www.boomlings.com/database/getGJRewards.php](/endpoints/rewards/getGJRewards) | Rewards |
| [https://www.boomlings.com/database/getGJSecretReward.php](/endpoints/rewards/getGJSecretReward) | Rewards |
| [https://www.boomlings.com/database/acceptGJFriendRequest20.php](/endpoints/socials/acceptGJFriendRequest20) | Socials |
| [https://www.boomlings.com/database/blockGJUser20.php](/endpoints/socials/blockGJUser20) | Socials |
| [https://www.boomlings.com/database/deleteGJFriendRequests20.php](/endpoints/socials/deleteGJFriendRequests20) | Socials |
| [https://www.boomlings.com/database/deleteGJMessages20.php](/endpoints/socials/deleteGJMessages20) | Socials |
| [https://www.boomlings.com/database/downloadGJMessage20.php](/endpoints/socials/downloadGJMessage20) | Socials |
| [https://www.boomlings.com/database/getGJFriendRequests20.php](/endpoints/socials/getGJFriendRequests20) | Socials |
| [https://www.boomlings.com/database/getGJMessages20.php](/endpoints/socials/getGJMessages20) | Socials |
| [https://www.boomlings.com/database/getGJUserList20.php](/endpoints/socials/getGJUserList20) | Socials |
| [https://www.boomlings.com/database/readGJFriendRequest20.php](/endpoints/socials/readGJFriendRequest20) | Socials |
| [https://www.boomlings.com/database/removeGJFriend20.php](/endpoints/socials/removeGJFriend20) | Socials |
| [https://www.boomlings.com/database/unblockGJUser20.php](/endpoints/socials/unblockGJUser20) | Socials |
| [https://www.boomlings.com/database/uploadFriendRequest20.php](/endpoints/socials/uploadFriendRequest20) | Socials |
| [https://www.boomlings.com/database/uploadGJMessage20.php](/endpoints/socials/uploadGJMessage20) | Socials |
| [https://www.boomlings.com/database/getGJSongInfo.php](/endpoints/songs/getGJSongInfo) | Songs |
| [https://www.boomlings.com/database/getGJTopArtists.php](/endpoints/songs/getGJTopArtists) | Songs |
| [https://www.boomlings.com/database/getGJScores20.php](/endpoints/users/getGJScores20) | Users |
| [https://www.boomlings.com/database/getGJUserInfo20.php](/endpoints/users/getGJUserInfo20) | Users |
| [https://www.boomlings.com/database/getGJUsers20.php](/endpoints/users/getGJUsers20) | Users |
| [https://www.boomlings.com/database/updateGJUserScore22.php](/endpoints/users/updateGJUserScore22) | Users |

:::

### Account Secret

There are 5 endpoints which use the `Account Secret`. The Account Secret was created for endpoints that deal with <u>important account features such as save data and privacy settings</u>. However, some unused code in 2.2 also reveals that the secret could be used for the upcoming multiplayer mode, but this is subject to change. Below is a table of each endpoint which uses the Account Secret.

::: details Endpoints

| <center>Endpoint</center> | Endpoint Type |
| ------------------------- | ------------- |
| [https://www.robtopgames.org/database/accounts/backupGJAccountNew.php](/endpoints/accounts/backupGJAccountNew) | Accounts |
| [https://www.boomlings.com/database/accounts/loginGJAccount.php](/endpoints/accounts/loginGJAccount) | Accounts |
| [https://www.boomlings.com/database/accounts/registerGJAccount.php](/endpoints/accounts/registerGJAccount) | Accounts |
| [https://www.robtopgames.org/database/accounts/syncGJAccountNew.php](/endpoints/accounts/syncGJAccountNew) | Accounts |
| [https://www.boomlings.com/database/updateGJAccSettings20.php](/endpoints/accounts/updateGJAccSettings20) | Accounts |

:::

::: details Known Multiplayer Endpoints

| <center>Endpoint</center> | Endpoint Type |
| ------------------------- | ------------- |
| [https://www.boomlings.com/database/exitMPLobby.php](/endpoints/multiplayer/exitMPLobby) | Multiplayer |
| [https://www.boomlings.com/database/joinMPLobby.php](/endpoints/multiplayer/joinMPLobby) | Multiplayer |
| [https://www.boomlings.com/database/uploadMPComment.php](/endpoints/multiplayer/uploadMPComment) | Multiplayer |

:::

### Level Secret

There are only 3 endpoints that use the `Level Secret`. The Level Secret is used to handle level deletions. Below you can find the 3 endpoints which use the Level Secret.

::: details Endpoints

| <center>Endpoint</center> | Endpoint Type |
| ------------------------- | ------------- |
| [https://www.boomlings.com/database/deleteGJLevelUser20.php](/endpoints/levels/deleteGJLevelUser20) | Levels |
| [https://www.boomlings.com/database/deleteGJLevelList.php](/endpoints/lists/deleteGJLevelList) | Lists |
| [https://www.boomlings.com/database/deleteGJEditorSound.php](/endpoints/editorsfx/deleteGJEditorSound) | Sound Packs |

:::

### Moderator Secret

There are only 2 endpoints which use the `Moderator Secret`. These endpoints allow hand-picked users called moderators to send in-game levels to the server which then have a chance to earn a star rating. Below are the endpoints in question.

::: details Endpoints

| <center>Endpoint</center> | Endpoint Type |
| ------------------------- | ------------- |
| [https://www.boomlings.com/database/rateGJDemon21.php](/endpoints/levels/rateGJDemon21) | Levels |
| [https://www.boomlings.com/database/suggestGJStars20.php](/endpoints/levels/suggestGJStars20) | Levels |

:::

### Admin Secret

In the client for Geometry Dash 1.9, RobTop mistakenly included the secret for `Admin Endpoints` inside of a function. Admin Endpoints are only accessible for game admins and they make direct changes in-game that affect everyone.

Below is a screenshot of the Admin Secret being created from Geometry Dash 1.9. RobTop split it into 6 segments to obfuscate it.

<img src="https://raw.githubusercontent.com/Wyliemaster/gddocs/master/assets/screenshots/admin_secret.png" class="padded decomp">

Currently, the Admin Secret no longer works as RobTop became aware of it.

<!-- todo: clean-up + explain reasoning clearer-->

## Secret Structure

<!-- TODO: A more accurate description would be W|xxx|xxxx|g|x|x -->

A Secret is split into 5 components and can be divided as such: `x|xxx|xxxx|xx|x`. From analysing the available secrets that we have access too, we have a general idea of what each component may represent.

- The first component of a Secret is always a `W`.

- The second component denotes the permissions level of the user.
    - `mfd` is endpoints that anyone can use.
    - `mfv` is endpoints that anyone can use but, they handle important information regarding a users account - save data and levels.
    - `mfp` is endpoints that are restricted to a select few individuals - Geometry Dash Moderators.
    - `mfx` is endpoints that are restricted to everyone except Game Admins.

- The third component is a 4-digit number which it's purpose is unknown.
    - `2893`
    - `3899`
    - `2898`
    - `3879`
    - `2878`

<!-- TODO: In the fourth component, `g` is presumably a constant due to the way it's formatted in-code: -->
<!-- CCString::createWithFormat("%c%s%s%c%c%s", (char)'W', (char*)premissionsRequired, (char*)unkNumbers, (char)'g', (char)endpointPurpose, (char*)endpointPower) -->

- The fourth component denotes the purpose of the secret.
    - `gb` is general use.
    - `gc` is specialised use - managing accounts, sending levels, deleting levels.

- The fifth component is overall power the endpoints have:
    - `3` being able to submit data that can greatly affect in-game levels,
    - `7` being able to perform general activities on the server,
    - `9` being able to alter accounts and remove levels from the server.
