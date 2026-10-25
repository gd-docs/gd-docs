---
aside: true
---
# Changelog

> [!NOTE]
> Happy 2.209 release! This page will be updated very soon with every update-related change.

> [!IMPORTANT]
> Right now, the changelog for 2.209 includes only server-related changes. The client-related changes require looking at a decomp of the game which will take longer.

## 2.209, 2.2091

- `binaryVersion`: `51`
- Level key [`54`](/resources/server/level#:~:text=54,SFX%2C%20in%20bytes), which was only present in the game's code, is now sent by the server
- New level keys [`58`, `62`, `63` and `65`](#) with exact upload and update times and timely ID. Key `58` is a new unused key.
- Comments now have a Unix timestamp, show the friend status ([keys `13`-`15`](#)) and may belong to sound packs
- New user keys [62-70](#) related to the follow system, notifications, new privacy settings and a Unix timestamp key
- New user object formats for [invited and former thread members](/resources/server/user#thread-invite-user-object)
- [Account Management](/topics/account_management#changeemail-php) supports changing the primary email and managing the recovery email
- [Error responses](/topics/custom_error) now include the title and body of an error message popup
- [In-game news](#) have been added
- 52 new endpoints:
    - Editor sound packs: [`getGJEditorSounds`](/endpoints/editorsfx/getGJEditorSounds), [`uploadGJEditorSound`](/endpoints/editorsfx/uploadGJEditorSound), [`downloadGJEditorSound`](/endpoints/editorsfx/downloadGJEditorSound), [`deleteGJEditorSound`](/endpoints/editorsfx/deleteGJEditorSound), `updateGJSoundDesc`. Sound packs reuse the level list structure with a few new keys.
    - Custom platformer controls: `uploadGJLevelControls`, `getGJLevelControls`, `deleteGJLevelControls`
    - Death markers and death stats: `getGJDeathData`, `uploadGJDeathData`
    - Thread system (group chats): [`getGJThreads`](/endpoints/threads/getGJThreads), [`getGJThreadMessages`](/endpoints/threads/getGJThreadMessages), [`getGJThreadMembers`](/endpoints/threads/getGJThreadMembers), [`getGJThreadInvites`](/endpoints/threads/getGJThreadInvites), [`sendGJThreadMessage`](/endpoints/threads/sendGJThreadMessage), [`updateGJThread`](/endpoints/threads/updateGJThread), [`searchGJThreadMessages`](/endpoints/threads/searchGJThreadMessages)
    - Notification system: [`getGJNotifications`](/endpoints/socials/getGJNotifications), `claimGJNotificationReward`, [`muteGJUser`](/endpoints/socials/muteGJUser)
    - [`reportGJContent`](/endpoints/misc/reportGJContent), a new content-reporting system covering levels, lists, sound packs, users, threads, comments, messages and friend requests
    - Server-side follow system: [`followGJUser`](/endpoints/socials/followGJUser), [`unfollowGJUser`](/endpoints/socials/unfollowGJUser), [`getGJFollowing`](/endpoints/socials/getGJFollowing), `syncGJFollowing`
    - Song usage statistics: [`getGJSongUsage`](/endpoints/songs/getGJSongUsage)
    - Global user search in the submenus of your user profile: `getGJUserSearch`
    - `getGJAudioFilesize` for retrieving the total size of audio assets in the editor
    - `getGJContentStatus`
    - [`openedRegister`](/endpoints/accounts/openedRegister) which returns an `rsession` token used with [`registerGJAccount`](/endpoints/accounts/registerGJAccount)
    - 22 moderation endpoints: `adminGetUserHistory`, `adminGetReportedContent`, `adminClearReportedContent`, `adminGetReportQueue`, `adminGetAbuseInfo`, `adminGetAccountReview`, `adminThreadAction`, `adminDeleteUserComments`, `adminCommentBan`, `adminUploadBan`, `adminMessageBan`, `adminFreezeAccount`, `adminTrendingBan`, `adminNameLock`, `adminCommentUnban`, `adminUploadUnban`, `adminCloseCase`, `adminMessageUnban`, `adminUnfreezeAccount`, `adminTrendingUnban`, `adminNameUnlock`, `deleteGJComments`
- `registerGJAccount` now requires the new [`rsession`](#) from `openedRegister`
- [`updateGJAccSettings20`](#) now allows to disable friend request messages and introduces a new privacy option for threads, along with an unknown `gO` parameter
- `getGJComments21` [supports](#) sound packs
- [Four new `type`s](#) in `getGJLevels21`: hyped 🔥 and timely histories without the current one. There's also an unknown [`hypeSecret`](#) param with a hardcoded value.
- [`reportGJLevel`](#) was deprecated in favor of [`reportGJContent`](#)
- `deleteGJFriendRequests20`  [doesn't delete friend requests](#) anymore. They become ignored and can still be accepted later.
- `getGJFriendRequests20` [supports](#) ignored friend requests
- The legacy messaging system was superseded by threads. [`getGJMessages20`](#) and [`downloadGJMessage20`](#) are still functional, but [`uploadGJMessage20`](#) was disabled and returns `-1`.
- `getGJUserList20` supports [new list types](#) for followed and muted accounts. It also now includes user stats in responses.
- `downloadGJLevel` now [includes](#) death data at the end of the response
- `uploadGJLevel` accepts [5 new params](/endpoints/levels/uploadGJLevel21#:~:text=notify,client%20key%20k105) with upload notification settings, song/sfx ID lists, the new [Build Stats String](/resources/client/level-components/build-stats-string) and current timestamp
- [New CCGameManager keys](#): `newsLastReadID`, `recentEmotes`, `editorSFXGlobalVolume`, `scrollSensitivity`, `specialPermKey`
- CCGamemanager GLM now [tracks](#) timely levels for both the user and the server
- 30(?) new [game variables](#)
- New [`gdlvl`](#) format for transferring local levels

## 2.2082

- `binaryVersion`: `48`
- New client level key: [`k125`](/resources/client/level#:~:text=k125,disable) - Click Between Steps override

## 2.208, 2.2081

- `binaryVersion`: `46` (2.208), `47` (2.2081)
- New getGJScores20 param: [`stat`](/endpoints/users/getGJScores20#:~:text=stat,Default%3A%200.) which orders the requested leaderboard by a statistic
- New updateGJAccSettings20 params: [`instagram`, `tiktok`, `discord`, `custom`](/endpoints/accounts/updateGJAccSettings20#:~:text=instagram,time%20authentication%20token) and the corresponding user keys [58-61](/resources/server/user#:~:text=58*,time%20authentication%20token)
- User key `51` (glow color) is now always included in responses
- New getGJGauntlets21 param: [`vkey`](/endpoints/levels/getGJGauntlets21#:~:text=vkey,which%20is%202.2080\)) hardcoded to `binaryVersion`
- New [getGJLevelScores211](/endpoints/levels/getGJLevelScores211#:~:text=s11,The%20level%20version) and [getGJLevelScoresPlat](/endpoints/levels/getGJLevelScoresPlat#:~:text=s11,The%20level%20version) params: `s11`-`s20`
- The [Level Leaderboard CHK](topics/encryption/chk#level-leaderboard) is now more secure ✨ - jumps were removed, best attempt info was added
- `time` param in getGJLevelScores is now sent for classic levels too, not just platformer ones
- New client level keys: [`k115`-`k124`](/resources/client/level#:~:text=k115,were%20successfully%20saved)
- New gauntlets ([55-60](/resources/server/gauntlet#:~:text=Cosmos-,55,Love,-Trivia))
- New song type `2`: CHOMPO
- New game variables ([176-181](/resources/client/gamesave/gv#:~:text=gv_0176,Trace%20Arrows%20\(editor\)))
- The `Cookie: gd=1` header is not sent in requests anymore, it was probably replaced by the new [`dvs`](/endpoints/generic#:~:text=dvs,8%20for%20macOS) parameter that's common for almost all endpoints
