# Build Stats String

> [!WARNING]
> WIP

The `bs` upload parameter contains the string returned by `EditorBuildStats::toString()`.

In the 2.2091 Android client, `GameLevelManager::uploadLevel` appends this value to every level upload as `&bs=...`.

`EditorBuildStats` is also serialized with local level data under client key `k156` and reconstructed with `EditorBuildStats::fromString()`.

## Format

In the 2.2091 Android client, the string contains 23 comma-separated values: format version `1`, followed by 22 fields. The serializer writes the first 19 fields as integers, then one unsigned 64-bit value, then two more integers. The playtest-time field is stored as a float and converted to an integer for serialization.

`EditorBuildStats::fromString()` splits the string into tokens, reads the first token as the version, and returns without loading stats if that value is less than `1`. It then parses the numeric fields in decimal.

## Fields

The table numbers values by their position in the serialized string. The first row is the format version; the remaining rows correspond to fields in the `EditorBuildStats` structure.

`✅` marks a meaning confirmed by Ghidra or by client/traffic inspection.

| String value | Meaning |
| ---: | --- |
| 1 | ✅ Format version (`1`) |
| 2 | ✅ Objects created. The counter increments when `LevelEditorLayer::createObject()` successfully creates an object, subject to its mode flag. |
| 3 | ✅ Objects pasted. The counter increases by the number of objects returned by `createObjectsFromString()`. |
| 4 | ✅ Objects deleted. The counter increases by the number removed, calculated from the change in the level's object count. |
| 5 | ✅ Transform operations. The counter increments per transform command handled, rather than by the number of objects affected. |
| 6 | ✅ Executions of the editor actions `Edit Special`, `Edit Group`, `Edit Object`, and `Object Options`. `Object Options` increments this counter when invoked by its key binding; opening it through `Edit Group` -> `Extra` does not. <!--TODO jak to działa że nawet gdy obiekt nie może mieć otwartego Edit Special ze względu na jego typ (przycisk nieaktywny a dźwięk nie jest puszczany) to i tak to się zwiększa?--> |
| 7 | ✅ Undo/redo calls. Each call that passes the playtest-state guard increments the counter before handling the action, so repeated undo/redo calls keep increasing it. |
| 8 | ✅ Playtests started |
| 9 | ✅ Cumulative playtest duration in seconds. The field is a float; `toString()` casts it to an unsigned integer and formats that integer in decimal. Fractional seconds are discarded (for nonnegative durations, this is equivalent to floor). |
| 10 | Integer sample used by `noteAction()` as the editor-activity clock. `noteAction()` compares it with the previous sample to measure gaps. Its source and unit are unknown, so names such as `active_edit_time_ms` are not confirmed. |
| 11-18 | ✅ Gap histogram. When a previous clock value is available, `noteAction()` increments bucket `min(floor(log2(gap)), 7)`; gaps of 0 or 1 go to bucket 0. |
| 19 | most likely editor UI inputs or actions (commands) |
| 20 | could be saves/opens/exits |
| 21 | ✅ First-open Unix timestamp in seconds |
| 22 | ✅ Copied-from level ID (from online level) <!--TODO k42?--> |
| 23 | ✅ Copied-from level version (from online level) <!--TODO k46? k16 is probably the local level version, k46 is the online level version--> |

`GJGameLevel::dataLoaded()` loads the string from `k156` into that level object's `EditorBuildStats` member. `GJGameLevel::encodeWithCoder()` serializes the same member back to `k156`. `GameLevelManager::uploadLevel()` also calls `EditorBuildStats::toString()` to produce the `bs` upload parameter.

The editor action tracking call sites pass an `EditorBuildStats` object owned by `LevelEditorLayer` to `noteAction()`. This is distinct from the `GJGameLevel` object used by `dataLoaded()` and `encodeWithCoder()`; how the editor's live stats are transferred to the level object has not been established here.

The `Edit Special`, `Edit Group`, `Edit Object`, and `Object Options` handlers increment the field for value 6 directly, then call `noteAction()`. `noteAction()` takes no action identifier and does not select or increment that counter; it records the gap histogram using the current and previous clock samples.
