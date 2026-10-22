# Parameter components

## `ParamInfo`

Adds small symbols next to a parameter name. The `req` attribute specifies whether the parameter is required:

- `req="always"` — the parameter is required (`*`). This implies the client always sends it.
- `req="cond"` — the parameter is required only in certain situations (`?`).
- `req="no"` — the parameter is optional; no requirement symbol is added.

The `sent` attribute describes when the client sends the parameter. Use it when `req` is `cond` or `no`.

- `sent="always"` — the client always sends the parameter (`a`).
- `sent="platform"` — the client sends it on specific platforms (`p`).
- `sent="cond"` — the client sends it conditionally (`c`).

Symbol descriptions appear on hover and in the [`ParamInfoFooter`](#paraminfofooter).

**Do not** insert any spaces between the parameter name and ParamInfo. This may result in a browser breaking the line in the table cell. ParamInfo connects the name and symbols with non-breaking spaces.

```md
| `accountID`<ParamInfo req="always"/> | The account ID |
| `percent`<ParamInfo req="no" sent="cond"/> | The completion percentage |
```

## `ParamCond`

Adds text explaining a parameter's condition. Put the text between the component tags. Use one of these attributes per instance:

- `req` — explains when the parameter is required.
- `sent="cond"` — explains when the client sends the parameter.
- `sent="platform"` — explains on which platforms the client sends it. The text should be a list of OS platforms or spin-off versions.
- `sent="req"` — indicates that the client sends the parameter when it is required. This is used to avoid duplicating the condition from `ParamCond req`. No text is needed between the component tags.

```md
| `percent`<ParamInfo req="no" sent="cond"/> | The completion percentage <ParamCond sent="cond">non-zero</ParamCond> |
| `accountID`<ParamInfo req="cond" sent="cond"/> | The account ID <ParamCond req>the request requires authentication</ParamCond> <ParamCond sent="req"/> |
```

### Examples of conditions

❌ 1\
✔️ value is 1

❌ not 0\
✔️ non-zero

❌ `otherParam`=1\
✔️ `otherParam` is 1

✔️ value is 1 and `p1` is 2 and the mogus is asus

❌ `type` is 5 or `type` is 10 or `p` is 4\
✔️ `type` is 5 or 10 or `p` is 4

✔️ (`type` is 5 or `p1` is 10) and `p2` is 4

✔️ it's a beautiful day outside and flowers are blooming and birds are singing and on days like these kids like you should be burning in hell

## `ParamGroup`

Groups a parameter table with its legend. `ParamInfoFooter` then lists only the symbols used by `ParamInfo`s in that group. Place both the table and its footer inside a `ParamGroup`.

## `ParamInfoFooter`

Displays a legend of the symbols used in the group. It collects symbols from `ParamInfo`, so place it below the table inside `ParamGroup`.

```md
<ParamGroup>

| Parameter | Explanation |
| --------- | ----------- |
| `accountID`<ParamInfo req="always"/> | The account ID |
| `percent`<ParamInfo req="no" sent="cond"/> | The completion percentage <ParamCond sent="cond">the value is non-zero</ParamCond> |

<ParamInfoFooter/>
</ParamGroup>
```
