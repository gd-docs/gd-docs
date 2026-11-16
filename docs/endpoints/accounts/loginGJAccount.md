# loginGJAccount.php

This endpoint is used to log in to a player's Geometry Dash account.

> [!NOTE]
> This page is under the `database/accounts` directory.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `udid`<ParamInfo req="always"/> | <ParamDesc name="udid"/> |
| `userName`<ParamInfo req="always"/> | The username of the account the player is trying to log into |
| `gjp2`<ParamInfo req="always"/> | The password of the account the player is trying to log into, encoded with [GJP2](/topics/gjp.md) |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="account"/> |
| `sID`<ParamInfo req="no" sent="platform"/> | The player's Steam ID <ParamCond sent="platform">Windows</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>

**Note** 
the `sID` parameter is only sent to the servers if the player is logging into their account from the steam release of Geometry Dash. From what has been observed, it has not been utilised.

## Responses

A successful login attempt will return the players accountID and player ID seperated by a `,`

```py
# response = 71,16
accountID, playerID = response.split(",")
```

If the request was not successful, there are 7 different error codes that can be returned

| Error Code | Meaning |
| ---------- | ------- |
| `-1`       | Generic error |
| `-8`       | "Too short. Minimum 6 characters". If the user's password is less than 6 characters long |
| `-9`       | "Too short. Minimum 3 characters". If the user's Username is less than 3 characters long |
| `-10`      | "Already linked to different account". User account ID does not match the currently logged in ID (only used internally while refreshing login, not sent by servers) |
| `-11`      | If the user's login credentials are incorrect. Displays the generic "Login failed" message |
| `-12`      | "Account has been disabled". If the user's account is disabled |
| `-13`      | "Already linked to different Steam account". If the account the user is trying to log into has a different steam ID to to that account **(Unused)** |
