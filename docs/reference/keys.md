# Keys

Geometry Dash uses [XOR Cipher](/topics/encryption/xor.md) combined with [base64 encoding](/topics/encryption/base64.md) to protect various strings within the client. Multiple Keys are used to protect different aspects of the game

## XOR Keys

| Key     | Usage                       | XOR Type |
| ------- | --------------------------- | -------- |
| `11`*   | Player Save Data            | Singular |
| `14251` | Player Messages             | Cycled   |
| `19283` | Vault Codes                 | Cycled   |
| `19847` | Daily Challenges            | Cycled   |
| `26364` | Level Password              | Cycled   |
| `29481` | Comment Integrity           | Cycled   |
| `37526` | Account Password            | Cycled   |
| `39673` | Level Leaderboard Integrity | Cycled   |
| `41274` | Level Integrity             | Cycled   |
| `48291` | Load Data                   | Cycled   |
| `52832` | Multiplayer                 | Cycled   |
| `57709` | Music/SFX Library Secret    | Cycled   |
| `58281` | Rating Integrity            | Cycled   |
| `59182` | Chest Rewards               | Cycled   |
| `85271` | Stat Submission Integrity   | Cycled   |

- *`11` in this case refers to the literal `11` (`0x0B`) byte, not the number `11`

## XOR Types

There are **two** ways Geometry Dash applies [XOR Cipher](/topics/encryption/xor.md) to strings - **Static** and **Cycled**
- Static Ciphers apply the key as is without any changes applying to the key itself.
- Cycled Ciphers iterate through each value on the key one by one and then loops back once it reaches the end.


