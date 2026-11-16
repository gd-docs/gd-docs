---
aside: true
---

# Replay String Resource

The replay string is a feature first added in 1.6, removed in 2.200 and re-added in 2.208 as a new format. This page documents the new 2.208 format.

Currently, it is only used for local levels, with it being stored on the client in keys `k34`, `k119` and `k120` and sent to the servers via [uploadGJLevel21.php](/endpoints/levels/uploadGJLevel21)'s `lrs` parameter.

It is separated into 2 sections with a `#` character: the inputs and the metadata.

## Inputs

The inputs are a list of click/release actions, separated by `;`. Each input has a half-step value, which is the amount of 240 TPS half-steps (or 480 TPS steps) that have passed since any previous input. The number is negative if the input is being released.

Note that half-steps are used even if Click Between Steps is disabled.

Every replay string starts with either a `-0` or `0`, which indicates if the player is holding on the first halfstep of the level or not.

All input types other than P1 jump include a `,` after the value and the ID of the input being done.

| Key | Name               | Note                               |
| --- | ------------------ | ---------------------------------- |
| 0   | P1 Jump            |                                    |
| 2   | P1 Left            |                                    |
| 3   | P1 Right           |                                    |
| 4   | P1 Action 4        | unused                             |
| 5   | P1 Action 5        | unused                             |
| 6   | P2 Jump            |                                    |
| 7   | P2 Left            |                                    |
| 8   | P2 Right           |                                    |
| 9   | P2 Action 4        | unused                             |
| 10  | P2 Action 5        | unused                             |
| 98  | Checkpoint Load    | related to platformer saves; unused |
| 99  | Checkpoint Respawn | when respawning from a checkpoint  |

Here are some input examples:

- `460` - P1 jump pressed down 460 half-steps after the previous input.
- `-120` - P1 jump released 120 half-steps after the previous input.
- `340,7` - P2 left pressed down 340 half-steps after the previous input.
- `-60,3` - P1 right released 60 half-steps after the previous input.

Actions can store optional metadata. The action key and the metadata are separated by `:` when metadata is present. Currently only checkpoints store metadata.

### Checkpoint Data

Checkpoint actions (`98` and `99`) store their metadata as a list of key/value pairs separated by `,`, with a trailing `,`.

`-step,99:1,seed,2,id,3,attempt,4,ticks,5,clicks,6,points,7,time,8,itemPersData,`

Unlike other inputs, the step value of a checkpoint action is the absolute half-step when the checkpoint is activated, rather than the amount since the previous input. The next input counts half-steps from the checkpoint action. Checkpoint actions are always written as released, so the value starts with a `-`.

| Key | Name           | Type                                  | Description                                                                                |
| --- | -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | Random Seed    | **integer**                           | The seed used for random triggers on the attempt that started from this checkpoint         |
| 2   | Checkpoint ID  | **integer**                           | Counter that increases with every checkpoint action |
| 3   | Attempt        | **integer**                           | The attempt number shown in the "Attempt" label                                            |
| 4   | Ticks          | **integer**                           | Half-steps played so far, increases by 2 every step                                        |
| 5   | Clicks         | **integer**                           | Button presses so far                                                                      |
| 6   | Points         | **integer**                           | Points collected so far                                                                    |
| 7   | Time           | **integer**                           | Time played so far, in units of 10<sup>-5</sup> seconds (10μs), rounded to the nearest integer (e.g. `635833` = 6.35833 seconds) |
| 8   | Item Pers Data | **[Item Pers Data](#item-pers-data)** | The state of persistent items and timers at the respawn                                    |

Ticks, clicks and time are only reset when the level is restarted from the beginning ("Full Restart", Ctrl+R), so they count the whole run across respawns.

When the player respawns from a checkpoint, every input recorded after the checkpoint's step is removed before the `99` action is added, so the replay only contains the inputs of the path that continued.

## Metadata

The replay metadata is comparatively simple. It's a list of 6 values separated by `,`. The values are:

`randomSeed,attempts,gameVersion,binaryVersion,levelVersion,itemPersData`

- Random Seed is the seed used for random triggers on the attempt of the replay.
- Attempts is NOT the total amount of attempts, just the amount of attempts the replay took.
- gameVersion and binaryVersion are the same as [what the game sends](/endpoints/generic#common-parameters) to the servers.
- levelVersion is the level's version at the time of the replay.
- The itemPersData stores state of persistent items and timers on the replayed attempt.

## Item Pers Data

Item Pers data represents the state of persistent items and triggers at the start of the replay (in replay string metadata) or at a respawn (in action 98/99 metadata).

The Item Pers data is formatted as `{persItems}@{persTimers}` where both parts are optional dictionaries:

`persItems`: `itemID|itemValue|itemID|itemValue...`\
`persTimers`: `timerID|timerData|timerID|timerData...`

::: warning
Due to a bug, if the level has no persistent items, `persTimers` will not be preceded by `@`.
:::

`itemID` and `itemValue` are all the item IDs that are persistent and their value. Only non-zero items are included.

`timerID` and `timerData` is the same for timers, but `timerData` stores more than just the timer value as it contains a bunch of timer settings, separated by `&`. Only triggered timers are included. The data is:

`timerID&timerValue&running&timeMod&ignoreTimewarp&stopTime&stopTimeEnabled&targetGroupID&runtimeID&controlID&paused&remaps`

- `timerID` is the timer ID.
- `timerValue` is the value the timer is at.
- `running` is 0 if the timer is paused, 1 otherwise.
- `timeMod` is the value the time is multipled by.
- `ignoreTimewarp` is 1 if Ignore TimeWarp is enabled, 0 otherwise.
- `stopTime` is the value at which the timer will stop.
- `stopTimeEnabled` is 1 if the Stop Time is enabled, 0 otherwise.
- `targetGroupID` is the group ID that is set to spawn when the timer hits StopTime.
- `runtimeID` is the internal runtime ID of the trigger that initialized the timer.
- `controlID` is the timer's control ID.
- `paused` whether the timer is paused by a Stop trigger.
- `remaps` is the timer's serialized remap chain.

`remaps` have the following format: `remapID_remapID_...remapID_-triggerRuntimeID`.

On level load, every spawn trigger's set of remaps is added to a global array. The position of a trigger's remap set in that array is then saved in a field on this spawn trigger as `remapID`. When a spawn trigger spawns a group, it applies remaps in reverse activation order. That's the order of the chain of `remapID`s for the trigger spawning the time trigger, and this chain becomes the value of `remaps` mentioned above. The `triggerRuntimeID` at the end is the internal runtime ID of the last trigger in `remaps` (first one in the activation chain).

Item Pers data string is empty if both parts would be empty.
