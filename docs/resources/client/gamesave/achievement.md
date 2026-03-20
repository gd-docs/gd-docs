---
aside: true
---
# Achievements

Geometry Dash has 570 achievements that you can acquire, 2 of them are exclusive to the Steam version of the game. You can find out how to get all the achievements [here](https://geometry-dash.fandom.com/wiki/Achievements).

Keep in mind that adding the achievements into your save data manually will only show them as completed in game, but won't give you the reward for the completion.

## Achievement key structure

Inside CCGameManager.dat, every achievement you have progress on can be found in the `<k>reportedAchievements</k>` dictionary. They are all organised like this:
 ```xml
 <k>geometry.ach.[internal achievement name]</k><i>[percentage complete]</i><k>geometry.ach.[internal achievement name]</k><i>[percentage complete]</i>
 ```

## Internal Names

| Internal name | How it's acquired |
| --------------| --------------- |
| geometry.ach.level01b | Beat Stereo Madness in normal Mode |
| geometry.ach.level01a | Beat Stereo Madness in practice Mode |
| geometry.ach.level02b | Beat Back On Track in normal Mode |
| geometry.ach.level02a | Beat Back On Track in practice Mode |
| geometry.ach.level03b | Beat Polargeist in normal Mode |
| geometry.ach.level03a | Beat Polargeist in practice Mode |
| geometry.ach.level04b | Beat Dry Out in normal Mode |
| geometry.ach.level04a | Beat Dry Out in practice Mode |
| geometry.ach.level05b | Beat Base after Base in normal Mode |
| geometry.ach.level05a | Beat Base After Base in practice Mode |
| geometry.ach.level06b | Beat Cant Let Go in normal Mode |
| geometry.ach.level06a | Beat Cant Let Go in practice Mode |
| geometry.ach.level07b | Beat Jumper in normal Mode |
| geometry.ach.level07a | Beat Jumper in practice Mode |
| geometry.ach.level08b | Beat Time Machine in normal Mode |
| geometry.ach.level08a | Beat Time Machine in practice Mode |
| geometry.ach.level09b | Beat Cycles in normal Mode |
| geometry.ach.level09a | Beat Cycles in practice Mode |
| geometry.ach.level10b | Beat Xstep in normal Mode |
| geometry.ach.level10a | Beat Xstep in practice Mode |
| geometry.ach.level11b | Beat Clutterfunk in normal Mode |
| geometry.ach.level11a | Beat Clutterfunk in practice Mode |
| geometry.ach.level12b | Beat Theory Of Everything  in normal Mode |
| geometry.ach.level12a | Beat Theory Of Everything in practice Mode |
| geometry.ach.level13b | Beat Electroman Adventures in normal Mode |
| geometry.ach.level13a | Beat Electroman Adventures in practice Mode |
| geometry.ach.level14b | Beat Clubstep in normal Mode |
| geometry.ach.level14a | Beat Clubstep in practice Mode |
| geometry.ach.level15b | Beat Electrodynamix in normal Mode |
| geometry.ach.level15a | Beat Electrodynamix in practice Mode |
| geometry.ach.level16b | Beat Hexagon Force in normal Mode |
| geometry.ach.level16a | Beat Hexagon Forece in practice Mode |
| geometry.ach.level17b | Beat Blast Processing in normal Mode |
| geometry.ach.level17a | Beat Blast Processing in practice Mode |
| geometry.ach.level18b | Beat Theory Of Everything 2 in normal Mode |
| geometry.ach.level18a | Beat Theory Of Everything 2 in practice Mode |
| geometry.ach.level19b | Beat Geometrical Dominator in normal Mode |
| geometry.ach.level19a | Beat Geometrical Dominator in practice Mode |
| geometry.ach.level20b | Beat Deadlocked in normal Mode |
| geometry.ach.level20a | Beat Deadlocked in practice Mode |
| geometry.ach.level21b | Beat Fingerdash in normal Mode |
| geometry.ach.level21a | Beat Fingerdash in practice Mode |
| geometry.ach.level22b | Beat Dash in normal Mode |
| geometry.ach.level22a | Beat Dash in practice Mode |
| geometry.ach.tower01 | Beat The Tower|
| geometry.ach.tower02 | Beat The Sewers|
| geometry.ach.tower03 | Beat The Cellar|
| geometry.ach.tower04 | Beat The Secret Hollow|
| geometry.ach.tower01Coin | Beat The Tower with all 3 Coins|
| geometry.ach.tower02Coin | Beat The Sewers with all 3 Coins|
| geometry.ach.tower03Coin | Beat The Cellar with all 3 Coins|
| geometry.ach.tower04Coin | Beat The Secret Hollow with all 3 Coins|
| geometry.ach.steam01 | Beat Stereo Madness, Back On Track and Polargeist in normal mode (steam exclusive) |
| geometry.ach.steam02 | Beat Clubstep in normal mode (steam exclusive) |
| geometry.ach.demoncoin01 | Beat Clubstep in with all coins|
| geometry.ach.demoncoin02 | Beat Theory Of Everything 2 in with all coins|
| geometry.ach.demoncoin03 | Beat Deadlocked in with all coins|
| geometry.ach.mappacks01 | Complete 1 Map Pack |
| geometry.ach.mappacks02 | Complete 5 Map Packs |
| geometry.ach.mappacks03 | Complete 10 Map Packs |
| geometry.ach.mappacks04 | Complete 15 Map Packs |
| geometry.ach.mappacks05 | Complete 20 Map Packs |
| geometry.ach.mappacks06 | Complete 25 Map Packs |
| geometry.ach.mappacks07 | Complete 30 Map Packs |
| geometry.ach.mappacks08 | Complete 35 Map Packs |
| geometry.ach.mappacks09 | Complete 40 Map Packs |
| geometry.ach.mappacks10 | Complete 45 Map Packs |
| geometry.ach.gauntlets01 | Complete 1 Gauntlet |
| geometry.ach.gauntlets02 | Complete 5 Gauntlets |
| geometry.ach.gauntlets03 | Complete 10 Gauntlets |
| geometry.ach.gauntlets04 | Complete 15 Gauntlets |
| geometry.ach.daily01 | Complete a Daily Level |
| geometry.ach.daily02 | Complete 25 Daily Levels |
| geometry.ach.daily03 | Complete 50 Daily Levels |
| geometry.ach.daily04 | Complete 100 Daily Levels |
| geometry.ach.daily05 | Complete 150 Daily Levels |
| geometry.ach.daily06 | Complete 250 Daily Levels |
| geometry.ach.daily07 | Complete 365 Daily Levels |
| geometry.ach.custom01 | Complete 1 User Created Level in Normal Mode|   
| geometry.ach.custom02 | Complete 10 User Created Levels in Normal Mode|
| geometry.ach.custom03 | Complete 50 User Created Levels in Normal Mode|
| geometry.ach.custom04 | Complete 100 User Created Levels in Normal Mode|
| geometry.ach.custom05 | Complete 200 User Created Levels in Normal Mode|
| geometry.ach.custom06 | Complete 300 User Created Levels in Normal Mode|
| geometry.ach.custom07 | Complete 500 User Created Levels in Normal Mode|
| geometry.ach.custom08 | Complete 1,000 User Created Levels in Normal Mode|
| geometry.ach.custom09 | Complete 1,500 User Created Levels in Normal Mode|
| geometry.ach.custom10 | Complete 2,000 User Created Levels in Normal Mode|
| geometry.ach.custom11 | Complete 2,500 User Created Levels in Normal Mode|
| geometry.ach.custom12 | Complete 3,000 User Created Levels in Normal Mode|
| geometry.ach.custom13 | Complete 4,000 User Created Levels in Normal Mode|
| geometry.ach.custom14 | Complete 5,000 User Created Levels in Normal Mode|
| geometry.ach.stars01 | Collect 100 stars|
| geometry.ach.stars02 | Collect 200 stars|
| geometry.ach.stars03 | Collect 300 stars|
| geometry.ach.stars04 | Collect 400 stars|
| geometry.ach.stars05 | Collect 500 stars|
| geometry.ach.stars06 | Collect 600 stars|
| geometry.ach.stars07 | Collect 700 stars|
| geometry.ach.stars08 | Collect 800 stars|
| geometry.ach.stars09 | Collect 900 stars|
| geometry.ach.stars10 | Collect 1,000 stars|
| geometry.ach.stars11 | Collect 1,500 stars|
| geometry.ach.stars12 | Collect 2,000 stars|
| geometry.ach.stars13 | Collect 2,500 stars|
| geometry.ach.stars14 | Collect 3,000 stars|
| geometry.ach.stars15 | Collect 3,500 stars|
| geometry.ach.stars16 | Collect 4,000 stars|
| geometry.ach.stars17 | Collect 4,500 stars|
| geometry.ach.stars18 | Collect 5,000 stars|
| geometry.ach.stars19 | Collect 5,500 stars|
| geometry.ach.stars20 | Collect 6,000 stars|
| geometry.ach.stars21 | Collect 6,500 stars|
| geometry.ach.stars22 | Collect 7,000 stars|
| geometry.ach.stars23 | Collect 7,500 stars|
| geometry.ach.stars24 | Collect 8,000 stars|
| geometry.ach.stars25 | Collect 9,000 stars|
| geometry.ach.stars26 | Collect 10,000 stars|
| geometry.ach.stars27 | Collect 12,000 stars|
| geometry.ach.stars28 | Collect 14,000 stars|
| geometry.ach.stars29 | Collect 16,000 stars|
| geometry.ach.stars30 | Collect 18,000 stars|
| geometry.ach.stars31 | Collect 20,000 stars|
| geometry.ach.stars32 | Collect 22,500 stars|
| geometry.ach.stars33 | Collect 25,000 stars|
| geometry.ach.moons01 | Collect 100 moons|
| geometry.ach.moons02 | Collect 200 moons|
| geometry.ach.moons03 | Collect 300 moons|
| geometry.ach.moons04 | Collect 400 moons|
| geometry.ach.moons05 | Collect 500 moons|
| geometry.ach.moons06 | Collect 600 moons|
| geometry.ach.moons07 | Collect 700 moons|
| geometry.ach.moons08 | Collect 800 moons|
| geometry.ach.moons09 | Collect 900 moons|
| geometry.ach.moons10 | Collect 1,000 moons|
| geometry.ach.moons11 | Collect 1,500 moons|
| geometry.ach.moons12 | Collect 2,000 moons|
| geometry.ach.moons13 | Collect 2,500 moons|
| geometry.ach.moons14 | Collect 3,000 moons|
| geometry.ach.moons15 | Collect 3,500 moons|
| geometry.ach.moons16 | Collect 4,000 moons|
| geometry.ach.moons17 | Collect 4,500 moons|
| geometry.ach.moons18 | Collect 5,000 moons|
| geometry.ach.moons19 | Collect 5,500 moons|
| geometry.ach.moons20 | Collect 6,000 moons|
| geometry.ach.moons21 | Collect 6,500 moons|
| geometry.ach.moons22 | Collect 7,000 moons|
| geometry.ach.moons23 | Collect 7,500 moons|
| geometry.ach.moons24 | Collect 8,000 moons|
| geometry.ach.moons25 | Collect 9,000 moons|
| geometry.ach.moons26 | Collect 10,000 moons|
| geometry.ach.demon01 | Beat 1 Demon|
| geometry.ach.demon02 | Beat 2 Demons|
| geometry.ach.demon03 | Beat 3 Demons|
| geometry.ach.demon04 | Beat 4 Demons|
| geometry.ach.demon05 | Beat 5 Demons|
| geometry.ach.demon06 | Beat 10 Demons|
| geometry.ach.demon07 | Beat 15 Demons|
| geometry.ach.demon08 | Beat 20 Demons|
| geometry.ach.demon09 | Beat 30 Demons|
| geometry.ach.demon10 | Beat 40 Demons|
| geometry.ach.demon11 | Beat 50 Demons|
| geometry.ach.demon12 | Beat 60 Demons|
| geometry.ach.demon13 | Beat 70 Demons|
| geometry.ach.demon14 | Beat 80 Demons|
| geometry.ach.demon15 | Beat 90 Demons|
| geometry.ach.demon16 | Beat 100 Demons|
| geometry.ach.demon17 | Beat 120 Demons|
| geometry.ach.demon18 | Beat 140 Demons|
| geometry.ach.demon19 | Beat 160 Demons|
| geometry.ach.demon20 | Beat 180 Demons|
| geometry.ach.demon21 | Beat 200 Demons|
| geometry.ach.demon22 | Beat 225 Demons|
| geometry.ach.demon23 | Beat 250 Demons|
| geometry.ach.demon24 | Beat 275 Demons|
| geometry.ach.demon25 | Beat 300 Demons|
| geometry.ach.demon26 | Beat 350 Demons|
| geometry.ach.demon27 | Beat 400 Demons|
| geometry.ach.demon28 | Beat 500 Demons|
| geometry.ach.insane01 | Beat 5 Insane-rated levels |
| geometry.ach.insane02 | Beat 10 Insane-rated levels |
| geometry.ach.insane03 | Beat 25 Insane-rated levels |
| geometry.ach.insane04 | Beat 50 Insane-rated levels |
| geometry.ach.insane05 | Beat 75 Insane-rated levels |
| geometry.ach.insane06 | Beat 100 Insane-rated levels |
| geometry.ach.insane07 | Beat 200 Insane-rated levels |
| geometry.ach.insane08 | Beat 300 Insane-rated levels |
| geometry.ach.insane09 | Beat 400 Insane-rated levels |
| geometry.ach.insane10 | Beat 500 Insane-rated levels |
| geometry.ach.coins01 | Collect 5 Secret Coins|
| geometry.ach.coins02 | Collect 10 Secret Coins|
| geometry.ach.coins03 | Collect 15 Secret Coins|
| geometry.ach.coins04 | Collect 20 Secret Coins|
| geometry.ach.coins05 | Collect 25 Secret Coins|
| geometry.ach.coins06 | Collect 30 Secret Coins|
| geometry.ach.coins07 | Collect 35 Secret Coins|
| geometry.ach.coins08 | Collect 40 Secret Coins|
| geometry.ach.coins09 | Collect 45 Secret Coins|
| geometry.ach.coins10 | Collect 50 Secret Coins|
| geometry.ach.coins11 | Collect 55 Secret Coins|
| geometry.ach.coins12 | Collect 60 Secret Coins|
| geometry.ach.coins13 | Collect 65 Secret Coins|
| geometry.ach.coins14 | Collect 70 Secret Coins|
| geometry.ach.coins15 | Collect 75 Secret Coins|
| geometry.ach.coins16 | Collect 80 Secret Coins|
| geometry.ach.coins17 | Collect 85 Secret Coins|
| geometry.ach.coins18 | Collect 90 Secret Coins|
| geometry.ach.coins19 | Collect 95 Secret Coins|
| geometry.ach.coins20 | Collect 100 Secret Coins|
| geometry.ach.coins21 | Collect 105 Secret Coins|
| geometry.ach.coins22 | Collect 110 Secret Coins|
| geometry.ach.coins23 | Collect 115 Secret Coins|
| geometry.ach.coins24 | Collect 120 Secret Coins|
| geometry.ach.coins25 | Collect 130 Secret Coins|
| geometry.ach.coins26 | Collect 140 Secret Coins|
| geometry.ach.coins27 | Collect 150 Secret Coins|
| geometry.ach.coins28 | Collect 160 Secret Coins|
| geometry.ach.usercoins01 | Collect 1 user Coin|
| geometry.ach.usercoins02 | Collect 10 user Coins|
| geometry.ach.usercoins03 | Collect 20 user Coins|
| geometry.ach.usercoins04 | Collect 30 user Coins|
| geometry.ach.usercoins05 | Collect 40 user Coins|
| geometry.ach.usercoins06 | Collect 50 user Coins|
| geometry.ach.usercoins07 | Collect 60 user Coins|
| geometry.ach.usercoins08 | Collect 70 user Coins|
| geometry.ach.usercoins09 | Collect 80 user Coins|
| geometry.ach.usercoins10 | Collect 90 user Coins|
| geometry.ach.usercoins11 | Collect 100 user Coins|
| geometry.ach.usercoins12 | Collect 110 user Coins|
| geometry.ach.usercoins13 | Collect 120 user Coins|
| geometry.ach.usercoins14 | Collect 130 user Coins|
| geometry.ach.usercoins15 | Collect 140 user Coins|
| geometry.ach.usercoins16 | Collect 150 user Coins|
| geometry.ach.usercoins17 | Collect 160 user Coins|
| geometry.ach.usercoins18 | Collect 170 user Coins|
| geometry.ach.usercoins19 | Collect 180 user Coins|
| geometry.ach.usercoins20 | Collect 190 user Coins|
| geometry.ach.usercoins21 | Collect 200 user Coins|
| geometry.ach.usercoins22 | Collect 225 user Coins|
| geometry.ach.usercoins23 | Collect 250 user Coins|
| geometry.ach.usercoins24 | Collect 300 user Coins|
| geometry.ach.usercoins25 | Collect 350 user Coins|
| geometry.ach.usercoins26 | Collect 425 user Coins|
| geometry.ach.usercoins27 | Collect 500 user Coins|
| geometry.ach.usercoins28 | Collect 600 user Coins|
| geometry.ach.usercoins29 | Collect 700 user Coins|
| geometry.ach.usercoins30 | Collect 800 user Coins|
| geometry.ach.usercoins31 | Collect 900 user Coins|
| geometry.ach.usercoins32 | Collect 1,000 user Coins|
| geometry.ach.usercoins33 | Collect 1,200 user Coins|
| geometry.ach.usercoins34 | Collect 1,400 user Coins|
| geometry.ach.usercoins35 | Collect 1,600 user Coins|
| geometry.ach.usercoins36 | Collect 1,800 user Coins|
| geometry.ach.usercoins37 | Collect 2,000 user Coins|
| geometry.ach.usercoins38 | Collect 2,300 user Coins|
| geometry.ach.usercoins39 | Collect 2,600 user Coins|
| geometry.ach.usercoins40 | Collect 3,000 user Coins|
| geometry.ach.diamonds01 | Collect 100 Diamonds|
| geometry.ach.diamonds02 | Collect 250 Diamonds|
| geometry.ach.diamonds03 | Collect 500 Diamonds|
| geometry.ach.diamonds04 | Collect 1,000 Diamonds|
| geometry.ach.diamonds05 | Collect 1,500 Diamonds|
| geometry.ach.diamonds06 | Collect 2,000 Diamonds|
| geometry.ach.diamonds07 | Collect 2,500 Diamonds|
| geometry.ach.diamonds08 | Collect 3,000 Diamonds|
| geometry.ach.diamonds09 | Collect 4,000 Diamonds|
| geometry.ach.diamonds10 | Collect 5,000 Diamonds|
| geometry.ach.diamonds11 | Collect 6,000 Diamonds|
| geometry.ach.diamonds12 | Collect 7,000 Diamonds|
| geometry.ach.diamonds13 | Collect 9,000 Diamonds|
| geometry.ach.diamonds14 | Collect 11,000 Diamonds|
| geometry.ach.diamonds15 | Collect 14,000 Diamonds|
| geometry.ach.diamonds16 | Collect 17,000 Diamonds|
| geometry.ach.diamonds17 | Collect 20,000 Diamonds|
| geometry.ach.diamonds18 | Collect 25,000 Diamonds|
| geometry.ach.lists01 | Claim a List Reward|
| geometry.ach.lists02 | Claim 25 List Rewards|
| geometry.ach.lists03 | Claim 50 List Rewards|
| geometry.ach.lists04 | Claim 100 List Rewards|
| geometry.ach.lists05 | Claim 150 List Rewards|
| geometry.ach.lists06 | Claim 200 List Rewards|
| geometry.ach.shardFire01 | Collect 5 Fire Shards|
| geometry.ach.shardFire02 | Collect 15 Fire Shards|
| geometry.ach.shardFire03 | Collect 35 Fire Shards|
| geometry.ach.shardFire04 | Collect 65 Fire Shards|
| geometry.ach.shardFire05 | Collect 100 Fire Shards|
| geometry.ach.shardIce01 | Collect 5 Ice Shards|
| geometry.ach.shardIce02 | Collect 15 Ice Shards|
| geometry.ach.shardIce03 | Collect 35 Ice Shards|
| geometry.ach.shardIce04 | Collect 65 Ice Shards|
| geometry.ach.shardIce05 | Collect 100 Ice Shards|
| geometry.ach.shardPoison01 | Collect 5 Poison Shards|
| geometry.ach.shardPoison02 | Collect 15 Poison Shards|
| geometry.ach.shardPoison03 | Collect 35 Poison Shards|
| geometry.ach.shardPoison04 | Collect 65 Poison Shards|
| geometry.ach.shardPoison05 | Collect 100 Poison Shards|
| geometry.ach.shardShadow01 | Collect 5 Shadow Shards|
| geometry.ach.shardShadow02 | Collect 15 Shadow Shards|
| geometry.ach.shardShadow03 | Collect 35 Shadow Shards|
| geometry.ach.shardShadow04 | Collect 65 Shadow Shards|
| geometry.ach.shardShadow05 | Collect 100 Shadow Shards|
| geometry.ach.shardLava01 | Collect 5 Lava Shards|
| geometry.ach.shardLava02 | Collect 15 Lava Shards|
| geometry.ach.shardLava03 | Collect 35 Lava Shards|
| geometry.ach.shardLava04 | Collect 65 Lava Shards|
| geometry.ach.shardLava05 | Collect 100 Lava Shards|
| geometry.ach.shardBonus01 | Collect 5 of each Tier 1 Shard|
| geometry.ach.shardBonus02 | Collect 15 of each Tier 1 Shard|
| geometry.ach.shardBonus03 | Collect 35 of each Tier 1 Shard|
| geometry.ach.shardBonus04 | Collect 65 of each Tier 1 Shard|
| geometry.ach.shardBonus05 | Collect 100 of each Tier 1 Shard|
| geometry.ach.shardEarth01 | Collect 5 Earth Shards|
| geometry.ach.shardEarth02 | Collect 15 Earth Shards|
| geometry.ach.shardEarth03 | Collect 35 Earth Shards|
| geometry.ach.shardEarth04 | Collect 65 Earth Shards|
| geometry.ach.shardEarth05 | Collect 100 Earth Shards|
| geometry.ach.shardBlood01 | Collect 5 Blood Shards|
| geometry.ach.shardBlood02 | Collect 15 Blood Shards|
| geometry.ach.shardBlood03 | Collect 35 Blood Shards|
| geometry.ach.shardBlood04 | Collect 65 Blood Shards|
| geometry.ach.shardBlood05 | Collect 100 Blood Shards|
| geometry.ach.shardMetal01 | Collect 5 Metal Shards|
| geometry.ach.shardMetal02 | Collect 15 Metal Shards|
| geometry.ach.shardMetal03 | Collect 35 Metal Shards|
| geometry.ach.shardMetal04 | Collect 65 Metal Shards|
| geometry.ach.shardMetal05 | Collect 100 Metal Shards|
| geometry.ach.shardLight01 | Collect 5 Light Shards|
| geometry.ach.shardLight02 | Collect 15 Light Shards|
| geometry.ach.shardLight03 | Collect 35 Light Shards|
| geometry.ach.shardLight04 | Collect 65 Light Shards|
| geometry.ach.shardLight05 | Collect 100 Light Shards|
| geometry.ach.shardSoul01 | Collect 5 Soul Shards|
| geometry.ach.shardSoul02 | Collect 15 Soul Shards|
| geometry.ach.shardSoul03 | Collect 35 Soul Shards|
| geometry.ach.shardSoul04 | Collect 65 Soul Shards|
| geometry.ach.shardSoul05 | Collect 100 Soul Shards|
| geometry.ach.shardBonusB01 | Collect 5 of each Tier 2 Shard|
| geometry.ach.shardBonusB02 | Collect 15 of each Tier 2 Shard|
| geometry.ach.shardBonusB03 | Collect 35 of each Tier 2 Shard|
| geometry.ach.shardBonusB04 | Collect 65 of each Tier 2 Shard|
| geometry.ach.shardBonusB05 | Collect 100 of each Tier 2 Shard|
| geometry.ach.followCreator | Follow 1 Creator|
| geometry.ach.followCreator02 | Follow 10 Creators|
| geometry.ach.followCreator03 | Follow 25 Creators|
| geometry.ach.followCreator04 | Follow 50 Creators|
| geometry.ach.friends01 | Befriend 1 user|
| geometry.ach.friends02 | Befriend 10 users|
| geometry.ach.friends03 | Befriend 25 users|
| geometry.ach.friends04 | Befriend 50 users|
| geometry.ach.youtube | Subscribe to [RobTop](https://www.youtube.com/user/RobTopGames) on YouTube|
| geometry.ach.twitter | Follow [RobTop](https://twitter.com/robtopgames) on Twitter|
| geometry.ach.facebook | Like [RobTop](https://www.facebook.com/geometrydash) on Facebook|
| geometry.ach.attempt01 | Do 100 Attempts |
| geometry.ach.attempt02 | Do 500 Attempts |
| geometry.ach.attempt03 | Do 2,000 Attempts |
| geometry.ach.attempt04 | Do 10,000 Attempts |
| geometry.ach.attempt05 | Do 20,000 Attempts |
| geometry.ach.attempt06 | Do 30,000 Attempts |
| geometry.ach.attempt07 | Do 40,000 Attempts |
| geometry.ach.attempt08 | Do 60,000 Attempts |
| geometry.ach.attempt09 | Do 80,000 Attempts |
| geometry.ach.attempt10 | Do 100,000 Attempts |
| geometry.ach.attempt11 | Do 135,000 Attempts |
| geometry.ach.attempt12 | Do 185,000 Attempts |
| geometry.ach.attempt13 | Do 250,000 Attempts |
| geometry.ach.attempt14 | Do 300,000 Attempts |
| geometry.ach.jump01 | Jump 1,000 Times |
| geometry.ach.jump02 | Jump 10,000 Times |
| geometry.ach.jump03 | Jump 20,000 Times |
| geometry.ach.jump04 | Jump 50,000 Times |
| geometry.ach.jump05 | Jump 100,000 Times |
| geometry.ach.jump06 | Jump 200,000 Times |
| geometry.ach.jump07 | Jump 300,000 Times |
| geometry.ach.jump08 | Jump 400,000 Times |
| geometry.ach.jump09 | Jump 500,000 Times |
| geometry.ach.jump10 | Jump 750,000 Times |
| geometry.ach.jump11 | Jump 1,000,000 Times |
| geometry.ach.submit | Submit an online level |
| geometry.ach.rate | Click the supporter icon when it's locked |
| geometry.ach.rateDiff | Rate the stars of an online level |
| geometry.ach.rateDiff02 | Rate the stars of 100 online levels |
| geometry.ach.rateDiff02b | Rate the stars of 500 online levels |
| geometry.ach.rateDiff03 | Rate the stars of 1,000 online levels |
| geometry.ach.rateDiff04 | Rate the stars of 2,000 online levels |
| geometry.ach.like | Like or dislike an online level |
| geometry.ach.like02 | Like or dislike 100 online levels |
| geometry.ach.like02b | Like or dislike 500 online levels |
| geometry.ach.like03 | Like or dislike 1,000 online levels |
| geometry.ach.like04 | Like or dislike 2,000 online levels |
| geometry.ach.like05 | Like or dislike 3,000 online levels |
| geometry.ach.like06 | Like or dislike 4,000 online levels |
| geometry.ach.moreGames | Click the "More Games" button |
| geometry.ach.special01 | Die at over 95% on a main level |
| geometry.ach.creator01 | Get 100 likes on your level |
| geometry.ach.creator02 | Get a star rate on your level |
| geometry.ach.creator03 | Get 50 likes on your level |
| geometry.ach.creator04 | Get 250 likes on your level |
| geometry.ach.creator05 | Get 500 likes on your level |
| geometry.ach.creator06 | Get 1,000 likes on your level |
| geometry.ach.path01.00 | Unlock the Path of Fire |
| geometry.ach.path01.01 | Reach Path of Fire Rank 1 |
| geometry.ach.path01.02 | Reach Path of Fire Rank 2 |
| geometry.ach.path01.03 | Reach Path of Fire Rank 3 |
| geometry.ach.path01.04 | Reach Path of Fire Rank 4 |
| geometry.ach.path01.05 | Reach Path of Fire Rank 5 |
| geometry.ach.path01.06 | Reach Path of Fire Rank 6 |
| geometry.ach.path01.07 | Reach Path of Fire Rank 7 |
| geometry.ach.path01.08 | Reach Path of Fire Rank 8 |
| geometry.ach.path01.09 | Reach Path of Fire Rank 9 |
| geometry.ach.path01.10 | Reach Path of Fire Rank 10 |
| geometry.ach.path02.00 | Unlock the Path of Ice |
| geometry.ach.path02.01 | Reach Path of Ice Rank 1 |
| geometry.ach.path02.02 | Reach Path of Ice Rank 2 |
| geometry.ach.path02.03 | Reach Path of Ice Rank 3 |
| geometry.ach.path02.04 | Reach Path of Ice Rank 4 |
| geometry.ach.path02.05 | Reach Path of Ice Rank 5 |
| geometry.ach.path02.06 | Reach Path of Ice Rank 6 |
| geometry.ach.path02.07 | Reach Path of Ice Rank 7 |
| geometry.ach.path02.08 | Reach Path of Ice Rank 8 |
| geometry.ach.path02.09 | Reach Path of Ice Rank 9 |
| geometry.ach.path02.10 | Reach Path of Ice Rank 10 |
| geometry.ach.path03.00 | Unlock the Path of Poison |
| geometry.ach.path03.01 | Reach Path of Poison Rank 1 |
| geometry.ach.path03.02 | Reach Path of Poison Rank 2 |
| geometry.ach.path03.03 | Reach Path of Poison Rank 3 |
| geometry.ach.path03.04 | Reach Path of Poison Rank 4 |
| geometry.ach.path03.05 | Reach Path of Poison Rank 5 |
| geometry.ach.path03.06 | Reach Path of Poison Rank 6 |
| geometry.ach.path03.07 | Reach Path of Poison Rank 7 |
| geometry.ach.path03.08 | Reach Path of Poison Rank 8 |
| geometry.ach.path03.09 | Reach Path of Poison Rank 9 |
| geometry.ach.path03.10 | Reach Path of Poison Rank 10 |
| geometry.ach.path04.00 | Unlock the Path of Shadow |
| geometry.ach.path04.01 | Reach Path of Shadow Rank 1 |
| geometry.ach.path04.02 | Reach Path of Shadow Rank 2 |
| geometry.ach.path04.03 | Reach Path of Shadow Rank 3 |
| geometry.ach.path04.04 | Reach Path of Shadow Rank 4 |
| geometry.ach.path04.05 | Reach Path of Shadow Rank 5 |
| geometry.ach.path04.06 | Reach Path of Shadow Rank 6 |
| geometry.ach.path04.07 | Reach Path of Shadow Rank 7 |
| geometry.ach.path04.08 | Reach Path of Shadow Rank 8 |
| geometry.ach.path04.09 | Reach Path of Shadow Rank 9 |
| geometry.ach.path04.10 | Reach Path of Shadow Rank 10 |
| geometry.ach.path05.00 | Unlock the Path of Lava |
| geometry.ach.path05.01 | Reach Path of Lava Rank 1 |
| geometry.ach.path05.02 | Reach Path of Lava Rank 2 |
| geometry.ach.path05.03 | Reach Path of Lava Rank 3 |
| geometry.ach.path05.04 | Reach Path of Lava Rank 4 |
| geometry.ach.path05.05 | Reach Path of Lava Rank 5 |
| geometry.ach.path05.06 | Reach Path of Lava Rank 6 |
| geometry.ach.path05.07 | Reach Path of Lava Rank 7 |
| geometry.ach.path05.08 | Reach Path of Lava Rank 8 |
| geometry.ach.path05.09 | Reach Path of Lava Rank 9 |
| geometry.ach.path05.10 | Reach Path of Lava Rank 10 |
| geometry.ach.path06.00 | Unlock the Path of Earth |
| geometry.ach.path06.01 | Reach Path of Earth Rank 1 |
| geometry.ach.path06.02 | Reach Path of Earth Rank 2 |
| geometry.ach.path06.03 | Reach Path of Earth Rank 3 |
| geometry.ach.path06.04 | Reach Path of Earth Rank 4 |
| geometry.ach.path06.05 | Reach Path of Earth Rank 5 |
| geometry.ach.path06.06 | Reach Path of Earth Rank 6 |
| geometry.ach.path06.07 | Reach Path of Earth Rank 7 |
| geometry.ach.path06.08 | Reach Path of Earth Rank 8 |
| geometry.ach.path06.09 | Reach Path of Earth Rank 9 |
| geometry.ach.path06.10 | Reach Path of Earth Rank 10 |
| geometry.ach.path07.00 | Unlock the Path of Blood |
| geometry.ach.path07.01 | Reach Path of Blood Rank 1 |
| geometry.ach.path07.02 | Reach Path of Blood Rank 2 |
| geometry.ach.path07.03 | Reach Path of Blood Rank 3 |
| geometry.ach.path07.04 | Reach Path of Blood Rank 4 |
| geometry.ach.path07.05 | Reach Path of Blood Rank 5 |
| geometry.ach.path07.06 | Reach Path of Blood Rank 6 |
| geometry.ach.path07.07 | Reach Path of Blood Rank 7 |
| geometry.ach.path07.08 | Reach Path of Blood Rank 8 |
| geometry.ach.path07.09 | Reach Path of Blood Rank 9 |
| geometry.ach.path07.10 | Reach Path of Blood Rank 10 |
| geometry.ach.path08.00 | Unlock the Path of Metal |
| geometry.ach.path08.01 | Reach Path of Metal Rank 1 |
| geometry.ach.path08.02 | Reach Path of Metal Rank 2 |
| geometry.ach.path08.03 | Reach Path of Metal Rank 3 |
| geometry.ach.path08.04 | Reach Path of Metal Rank 4 |
| geometry.ach.path08.05 | Reach Path of Metal Rank 5 |
| geometry.ach.path08.06 | Reach Path of Metal Rank 6 |
| geometry.ach.path08.07 | Reach Path of Metal Rank 7 |
| geometry.ach.path08.08 | Reach Path of Metal Rank 8 |
| geometry.ach.path08.09 | Reach Path of Metal Rank 9 |
| geometry.ach.path08.10 | Reach Path of Metal Rank 10 |
| geometry.ach.path09.00 | Unlock the Path of Light |
| geometry.ach.path09.01 | Reach Path of Light Rank 1 |
| geometry.ach.path09.02 | Reach Path of Light Rank 2 |
| geometry.ach.path09.03 | Reach Path of Light Rank 3 |
| geometry.ach.path09.04 | Reach Path of Light Rank 4 |
| geometry.ach.path09.05 | Reach Path of Light Rank 5 |
| geometry.ach.path09.06 | Reach Path of Light Rank 6 |
| geometry.ach.path09.07 | Reach Path of Light Rank 7 |
| geometry.ach.path09.08 | Reach Path of Light Rank 8 |
| geometry.ach.path09.09 | Reach Path of Light Rank 9 |
| geometry.ach.path09.10 | Reach Path of Light Rank 10 |
| geometry.ach.path10.00 | Unlock the Path of Souls |
| geometry.ach.path10.01 | Reach Path of Souls Rank 1 |
| geometry.ach.path10.02 | Reach Path of Souls Rank 2 |
| geometry.ach.path10.03 | Reach Path of Souls Rank 3 |
| geometry.ach.path10.04 | Reach Path of Souls Rank 4 |
| geometry.ach.path10.05 | Reach Path of Souls Rank 5 |
| geometry.ach.path10.06 | Reach Path of Souls Rank 6 |
| geometry.ach.path10.07 | Reach Path of Souls Rank 7 |
| geometry.ach.path10.08 | Reach Path of Souls Rank 8 |
| geometry.ach.path10.09 | Reach Path of Souls Rank 9 |
| geometry.ach.path10.10 | Reach Path of Souls Rank 10 |
| geometry.ach.secret01 | Destroy an icon on the main menu |
| geometry.ach.secret02 | Destroy 50 icons on the main menu |
| geometry.ach.secret02b | Destroy 100 icons on the main menu |
| geometry.ach.secret03 | Destroy 200 icons on the main menu |
| geometry.ach.secret03b | Destroy 500 icons on the main menu |
| geometry.ach.secret04 | Found the hidden gold coin by scrolling through the level page 3 times |
| geometry.ach.secret05 | Type 'lenny' into the 2.0 Vault |
| geometry.ach.secret06 | Type 'sparky' into the 2.0 Vault |
| geometry.ach.secret07 | Type 'spooky' into the 2.0 Vault |
| geometry.ach.secret08 | Type 'blockbite' into the 2.0 Vault |
| geometry.ach.secret09 | Type 'robotop' into the 2.0 Vault |
| geometry.ach.secret10 | Type 'ahead' into the 2.0 Vault |
| geometry.ach.secret11 | Destroy the 55th cube on the main menu |
| geometry.ach.secret12 | Destroy the 50th cube on the main menu |
| geometry.ach.secret13 | Type 'mule' into the 2.0 Vault |
| geometry.ach.secret14 | Type 'neverending' into the 2.0 Vault |
| geometry.ach.secret15 | Type 'gandalfpotter' into the 2.0 Vault |
| geometry.ach.secret16 | Consecutively type '8', '16', '30', '32', '46' and '84' into the 2.0 Vault |
| geometry.ach.secret17 | Type your username into the 2.0 Vault |
| geometry.ach.secret18 | Destroy 750 icons on the main menu |
| geometry.ach.secret19 | Type 'finalboss' into the 2.0 Vault |
| geometry.ach.v2.secret01 | Type 'brainpower' into the Vault of Secrets |
| geometry.ach.v2.secret02 | Type 'cod3breaker' and the solution to the puzzle into the Vault of Secrets |
| geometry.ach.v2.secret03 | Solve the 'glubfub' puzzle |
| geometry.ach.v2.secret04 | Type 'octocube' into the Vault of Secrets |
| geometry.ach.v2.secret05 | Type your star count into the Vault of Secrets |
| geometry.ach.v2.secret06 | Type 'seven' into the Vault of Secrets |
| geometry.ach.v2.secret07 | Type 'gimmiethecolor' into the Vault of Secrets |
| geometry.ach.v2.secret08 | Type 'thechickenisonfire' into the Vault of Secrets |
| geometry.ach.v2.secret09 | Type 'd4shg30me7ry' into the Vault of Secrets |
| geometry.ach.v2.secret10 | Type 'thechickenisready' into the Vault of Secrets |
| geometry.ach.v3.secret01 | Type 'darkness' into the Chamber of Time |
| geometry.ach.v3.secret02 | Type 'silence' into the Chamber of Time |
| geometry.ach.v3.secret03 | Type 'river' into the Chamber of Time |
| geometry.ach.v3.secret04 | Type 'hunger' into the Chamber of Time |
| geometry.ach.v3.secret05 | Type 'volcano' into the Chamber of Time |
| geometry.ach.v3.secret06 | Type 'backontrack' into the Chamber of Time |
| geometry.ach.v3.secret07 | Type 'givemehelper' into the Chamber of Time |

## GD Meltdown Achievements
| Internal name | How it's acquired |
| --------------| --------------- |
| geometry.ach.mdlevel01b | Beat The Seven Seas in normal mode |
| geometry.ach.mdlevel02b | Beat Viking Arena in normal mode |
| geometry.ach.mdlevel03b | Beat Airborne Robots in normal mode |
| geometry.ach.mdcoin01 | Collect all 3 coins on The Seven Seas |
| geometry.ach.mdcoin02 | Collect all 3 coins on Viking Arena |
| geometry.ach.mdcoin03 | Collect all 3 coins on Airborne Robots |
| geometry.ach.mdrate | Click the icon with ID 71 when it's locked (positioned as 11th) |

## GD World Achievements
| Internal name | How it's acquired |
| --------------| --------------- |
| geometry.ach.world.level001b | Beat Payload in normal mode |
| geometry.ach.world.level002b | Beat Beast Mode in normal mode |
| geometry.ach.world.level003b | Beat Machina in normal mode |
| geometry.ach.world.level004b | Beat Years in normal mode |
| geometry.ach.world.level005b | Beat Frontlines in normal mode |
| geometry.ach.world.level006b | Beat Space Pirates in normal mode |
| geometry.ach.world.level007b | Beat Striker in normal mode |
| geometry.ach.world.level008b | Beat Embers in normal mode |
| geometry.ach.world.level009b | Beat Round 1 in normal mode |
| geometry.ach.world.level010b | Beat Monster Dance Off in normal mode |

## GD Subzero Achievements
| Internal name | How it's acquired |
| --------------| --------------- |
| geometry.ach.subzero.level001 | Beat Press Start in normal mode |
| geometry.ach.subzero.level002 | Beat Nock Em in normal mode |
| geometry.ach.subzero.level003 | Beat Power Trip in normal mode |
| geometry.ach.subzero.coins001 | Collect all 3 coins on Press Start|
| geometry.ach.subzero.coins002 | Collect all 3 coins on Nock Em |
| geometry.ach.subzero.coins003 | Collect all 3 coins on Power Trip |
