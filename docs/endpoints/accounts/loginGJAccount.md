# loginGJAccount.php

This endpoint is used to log into a players Geometry Dash account.

> [!NOTE]
> This page is under the `database/accounts` directory.

## Parameters

| Parameter  | Explanation                                                                                           | Required |
| ---------- | ----------------------------------------------------------------------------------------------------- | -------- |
| `udid`     | The user's [UDID](/topics/encryption/id.md#udid)                                                      | Yes      |
| `userName` | The username for the account the player is trying to log into                                         | Yes      |
| `password` | The plaintext password for the account the player is trying to log into                               | Yes      |
| `secret`   | [Account Secret](/reference/secrets.md): `Wmfv3899gc9`                                                | Yes      |
| `sID`      | The player's Steam ID                                                                                 |          |

**Note** 
the `sID` parameter is only sent to the servers if the player is logging into their account from the steam release of Geometry Dash. From what has been observed, it has not been utilised.

## Responses

A successful login attempt will return the players accountID and player ID seperated by a `,`

```py
# response = 71,16
accountID, playerID = response.split(",")
```

If the request was not successful, there are 7 different error codes that can be returned

| Error Code | Meaning                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| `-1`       | Generic Error                                                                                          |
| `-8`       | If the user's password is less than 6 characters long                                                  |
| `-9`       | If the user's Username is less than 3 characters long                                                  |
| `-10`      | User account ID does not match the currently logged in ID (only used internally, not sent by servers)  |
| `-11`      | If the user's login credentials are incorrect                                                          |
| `-12`      | If the user's account is disabled                                                                      |
| `-13`      | If the account the user is trying to log into has a different steam ID to to that account **(Unused)** |
