# openedRegister.php

This endpoint is used to obtain a session token for registering an account.

> [!NOTE]
> This page is under the `database/accounts` directory.

## Parameters

<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `secret`<ParamInfo req="always"/> | <ParamDesc name="secret" type="account"/> |

<ParamInfoFooter/>
</ParamGroup>

## Response

**Successful Request**

```
243d62c4f6af0528e4adb19b6abd6b54
```

**Failed Request**

`-1`
