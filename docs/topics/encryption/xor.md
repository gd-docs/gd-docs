# XOR

XOR is a bitwise operation used by Geometry Dash to encrypt data. It is commonly denoted as a `^` in many programming languages

Geometry Dash has 2 methods to encrypting data using XOR:
- Using a singular key
- Cycling through a 5 digit key

When needed, Geometry Dash iterates through every byte of the data and applies the XOR operation using its key

## Examples

Below are examples of the algorithms used

<!-- tabs:start -->

### **Singular**

#### Pseudocode
```js
result = "";
for (i = 0; i < input.length; i++) {
  byte = input[i].toByte();
  result += (byte ^ key).toChar();
}
```

#### Python
```py
def xor(input: str, key: int):
    return "".join(
        chr(ord(char) ^ key)
        for char in input
    )
```

### **Cycle**

#### Pseudocode
```js
result = "";
for (i = 0; i < input.length; i++) {
  byte = input[i].toByte();
  xKey = key[i % key.length].toByte();
  result += (byte ^ xKey).toChar();
}
```

#### Python
```py
def cyclic_xor(input: str, key: int):
    key_str = str(key)
    
    return "".join(
        chr(ord(char) ^ ord(key_str[i % len(key_str)]))
        for i, char in enumerate(input)
    )
```

<!-- tabs:end -->

### Keys

| Key     | Usage                       | XOR Type |
| ------- | --------------------------- | -------- |
| `11`    | Player Save Data            | Singular |
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
