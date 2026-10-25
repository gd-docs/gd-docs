# Server Sound Pack Resource

A sound pack is a list of sound effects to be played for each action in the editor.

A typical sound pack server response is structured with a `key:value:key:value` pairing and is then split with a `|`.

#### Sound Pack Example Response
```md
1:2:2:Test Beta 06:3:OmVwaWM6IFRoaXMgaXMgbXkgYW1hemluZyBlZGl0b3Igc291bmQgbGlzdCEgOmVwaWM6IFZlcnNpb24gMiEgOnlheTogY2Fmw6o=:5:1:49:71:50:RobTop:10:11846:14:381:19::51:H4sIAAAAAAAACj2LMQ7CMAxFLxQJ28FJnMoDE6gSC1KRYO1ALoDaoYdvnAam9_38Pw3oEMCRw5oIEuUKScEAHhoSNhnBKpF6mYHb_RufkQ-BXUgQMcHwX2AN7ILEGDwP962nbJ_8uI3lTfKdF9XTdF3Li6bP86K6A7m3A1ulAAAA:28:1789211693:29:1789211693:59:5:60:9:61:0:64:fist
```

Each `key` is tied to a component within the client and the `value` sets data for the specific component.
A list of all known keys can be found in the table below.

#### Sound Pack Structure

| Key | Name/Value | Type | Description
|-----|------------|------|-------------
| 1   | soundID | **Integer** | The ID of the pack
| 2   | soundName | **String** | The name of the pack
| 3   | description | **String** | The pack description, encoded in [base64](/topics/encryption/base64.md)
| 5   | version | **Integer** | The version of the pack published
| 10  | downloads | **Integer** | The amount of times the pack has been downloaded
| 14  | likes | **Integer** | likes - dislikes |
| 19  | rated | **Bool** | If the pack is rated or not
| 28  | uploadDate | **String** | The Unix timestamp of when the list was uploaded
| 29  | updateDate | **String** | The Unix timestamp of when the list was last updated
| 49  | accountID | **Integer** | The account ID of the pack author
| 50  | username | **String** | The username of the pack author
| 51  | soundString | **Sound Pack String** | The data for this pack
| 59  | actions | **Integer** | How many actions have a sound
| 60  | sounds | **Integer** | The amount of sounds used
| 61  | unknown | **Integer** | Seems to always be 0
| 64  | icon | **String** | The emote used as the icon
