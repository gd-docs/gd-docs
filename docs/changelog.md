---
aside: true
---
# Changelog

## 2.2082

- `binaryVersion`: `48`
- new client level key: [`k125`](/resources/client/level#:~:text=k125,disable) - Click Between Steps override

## 2.208, 2.2081

- `binaryVersion`: `46` (2.208), `47` (2.2081)
- new getGJScores20 param: [`stat`](/endpoints/users/getGJScores20#:~:text=stat,Default%3A%200.) which orders the requested leaderboard by a statistic
- new updateGJAccSettings20 params: [`instagram`, `tiktok`, `discord`, `custom`](/endpoints/accounts/updateGJAccSettings20#:~:text=instagram,time%20authentication%20token) and the corresponding user keys [58-61](/resources/server/user#:~:text=58*,time%20authentication%20token)
- new getGJGauntlets21 param: [`vkey`](/endpoints/levels/getGJGauntlets21#:~:text=vkey,which%20is%202.2080\)) hardcoded to `binaryVersion`
- new [getGJLevelScores211](/endpoints/levels/getGJLevelScores211#:~:text=s11,The%20level%20version) and [getGJLevelScoresPlat](/endpoints/levels/getGJLevelScoresPlat#:~:text=s11,The%20level%20version) params: `s11`-`s20`
- the [Level Leaderboard CHK](topics/encryption/chk#level-leaderboard) is now more secure ✨ - jumps were removed, best attempt info was added
- `time` param in getGJLevelScores is now sent for classic levels too, not just platformer ones
- new client level keys: [`k115`-`k124`](/resources/client/level#:~:text=k115,were%20successfully%20saved)
- new gauntlets ([55-60](/resources/server/gauntlet#:~:text=Cosmos-,55,Love,-Trivia))
- new song type `2`: CHOMPO
- new game variables ([176-181](/resources/client/gamesave/gv#:~:text=gv_0176,Trace%20Arrows%20\(editor\)))
- the `Cookie: gd=1` header is not sent in requests anymore, it was probably replaced by the new [`dvs`](/endpoints/generic#:~:text=dvs,8%20for%20macOS) parameter that's common for almost all endpoints
