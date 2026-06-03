# registerGJAccount.php

This endpoint is used to register an account. In 2.2, this was replaced with [register.php](/topics/account_management#register-php).

> [!NOTE]
> This page is under the `database/accounts` directory.

## Parameters

| Parameter  | Explanation                                         | Required |
| ---------- | --------------------------------------------------- | -------- |
| `userName` | The username of the account to create               | Yes      |
| `password` | The password of the account to create               | Yes      |
| `email`    | The email of the account to create                  | Yes      |
| `secret`   | [Account Secret](/reference/secrets.md): `Wmfv3899gc9` | Yes      |

## Response

**Successful Request**

```
1
```

**Failed Request**

| Error Code | Meaning                                                                          |
| ---------- | -------------------------------------------------------------------------------- |
| `-1`       | Generic Error (displays "Something went wrong." ingame)                          |
| `-2`       | Username is already in use                                                       |
| `-3`       | Email is already in use                                                          |
| `-4`       | Username is longer than 20 characters (displays "Username is invalid" ingame)    |
| `-5`       | Password is invalid                                                              |
| `-6`       | Email is invalid                                                                 |
| `-7`       | Password confirmation does not match (only used internally, not sent by servers) |
| `-8`       | Password too short (under 6 characters)                                          |
| `-9`       | Username too short (under 3 characters)                                          |
| `-99`      | Email confirmation does not match (only used internally, not sent by servers)    |
