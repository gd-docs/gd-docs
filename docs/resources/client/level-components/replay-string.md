---
aside: true
---

# Replay String Resource

The replay string is a feature first added in 1.6, removed in 2.200 and re-added in 2.208 as a new format. This page documents the new 2.208 format.

Currently, it is only used for local levels, with it being stored on the client in keys `k34`, `k119` and `k120` and sent to the servers via uploadGJLevel21.php's `lrs` parameter.

It is separated into 2 sections with a `#` character: the inputs and the metadata

## Inputs
The inputs are a list of click/release actions, separated by `;`. 

Each input has a half-step value, which is the amount of 240 TPS half-steps (or 480 TPS steps) that have passed since any previous input. The number is negative if the input is being released.

Note that half-steps are used even if Click Between Steps is disabled.

Every replay string starts with either a `-0` or `0`, which indicates if the player is holding on the first halfstep of the level or not.

All input types other than P1 jump include a `,` after the value and the ID of the input being done.

| Key | Name                
|-----|---------------------|
| 2   | P1 Left             |
| 3   | P1 Right            |
| 6   | P2 Jump             | 
| 7   | P2 Left             | 
| 8   | P2 Right            | 

Here are some input examples:

- `460` - P1 jump pressed down 460 half-steps after the previous input
- `-120` - P1 jump released 120 half-steps after the previous input
- `340,7` - P2 left pressed down 340 half-steps after the previous input
- `-60,3` - P1 right released 60 half-steps after the previous input

## Checkpoint Data
TODO

## Metadata
The metadata is comparatively simple. It's a list of 5 values separated by `,`. The values are:

`randomSeed,attempts,gameVersion,binaryVersion,unknown,itemPersData`

- Random Seed is the seed used for random triggers on the attempt of the replay.
- Attempts is NOT the total amount of attempts, just the amount of attempts the replay took
- gameVersion and binaryVersion are the same as what the game sends to the servers. Currently `22` and `47` (`48` on mobile) respectively.
- The next value is unknown and seems to always be 1
- The Item Pers data stores information about item and timer IDs that have been made persistent with the Item Pers trigger

## Item Pers Data
The Item Pers data is formatted as follows:

`item_id|item_value|item_id|item_value...@timer_id|timer_data|timer_id|timer_data...|`

These values represent the state of persistent item IDs and triggers at the start of the winning replay attempt.

`item_id` and `item_value` are all the item IDs that are persistent and their value.

`timer_id` and `timer_data` is the same for timers, but `timer_data` stores more than just the timer value as it contains a bunch of timer settings, separated by `&`. The values are:

`timer_id&timer_value&running&time_mod&ignoreTimewarp&stopTime&stopTimeEnabled&targetGroupID&unk&unk&unk&`

- `timer_id` is the timer ID
- `timer_value` is the value the timer is at
- `running` is 0 if the timer is paused, 1 otherwise
- `time_mod` is the value the time is multipled by (the TimeMod value in the Time trigger)
- `ignoreTimewarp` is 1 if Ignore TimeWarp is enabled, 0 otherwise
- `stopTime` is the value at which the timer will stop
- `stopTimeEnabled` is 1 if the Stop Time is enabled, 0 otherwise
- `targetGroupID` is the group ID that is set to spawn when the timer hits StopTime
