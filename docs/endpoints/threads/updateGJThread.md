# updateGJThread.php

Performs a wide variety of actions on threads.

## Parameters

| Parameter       | Explanation | Required |
| --------------- | ----------- | -------- |
| `accountID`     | <ParamDesc name="accountID"/> | Yes      | <!--a-->
| `gjp2`          | <ParamDesc name="gjp2"/> | Yes      | <!--a-->
| `secret`        | <ParamDesc name="secret" type="common"/> | Yes      | <!--a-->
| `threadID`      | The thread to update | Yes (except type 3) | <!--a-->
| `mode`          | The type of action to perform, [see values](#mode) | Yes | <!--a-->
| `value`         | Action-specific value. **Always** encoded in Base64 | Depends on mode |
| `gameVersion`   | <ParamDesc name="gameVersion"/> |          | <!--a-->
| `binaryVersion` | <ParamDesc name="binaryVersion"/> |          | <!--a-->
| `udid`          | <ParamDesc name="udid"/> |          | <!--a-->
| `uuid`          | <ParamDesc name="uuid"/> |          | <!--a-->
| `dvs`           | <ParamDesc name="dvs"/> |          | <!--a-->

::: details `mode` {#mode open}

| Mode  | Description           | Value Description   |
| ----- | --------------------- | ------------------- |
| `1`   | Clear message history | Not sent |
| `2`   | Rename thread         | The new name |
| `3`   | Mark as read          | Thread IDs to mark as read, separated by commas. The threadID param is sent as 0 |
| `4`   | Invite users          | List of account IDs, separated by commas |
| `5`   | Leave thread          | Not sent |
| `6`   | Kick member           | Account ID of the person you want to kick |
| `7`   | Transfer ownership    | Account ID of the new owner |
| `8`   | Accept invite         | Not sent |
| `9`   | Ignore invite         | Not sent |
| `10`  | Mute/unmute thread    | 1 (`MQ==`) to mute, 0 (`MA==`) to unmute |
| `11`  | Take back invite      | Account ID of the person you want to take back the invite for |
| `12`  | Delete message        | The message ID |
| `13`  | Invite permissions    | 1 (`MQ==`) for Owner Only, 0 (`MA==`) for Anyone |
| `14`  | Change description    | The new description |
| `15`  | Pin/unpin thread      | 1 (`MQ==`) to pin, 0 (`MA==`) to unpin |
| `16`  | Change emote icon     | The new emote to use as the icon |
| `18`  | Remove thread after getting kicked | Not sent |

:::

## Response

1 if successful, -1 otherwise.
