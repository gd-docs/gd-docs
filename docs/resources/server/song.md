# Client & Server Song Resource

## Song

Songs in Geometry Dash are supplied through a partnership with a website called [Newgrounds](https://www.newgrounds.com/audio). To be used in community made levels, a song must pass **3** requirements

- The Song must be scouted by another artist from newgrounds
- The Song must be whitelisted either by Robtop or an Elder Moderator
- The artist must enable external API use in their song settings

The songs can be downloaded and used via a private API that only RobTop has access to

A typical song server response is structured with a `key~|~value~|~key~|~value` pairing and is then split with a `:`

<!-- tabs:start -->

#### **Song Example**
```md
1~|~803223~|~2~|~Xtrullor - Arcana~|~3~|~2159~|~4~|~Xtrullor~|~5~|~8.81~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F803000%2F803223_Xtrullor---Arcana.mp3%3Ff1524940372~|~7~|~UCejLri1RVC7kj8ZVNX2a53g      
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

The IDs for Music Library songs start at 10,000,000

#### Song Structure

| Key | Name/Value       | Type                | Description                                            |
| --- | ---------------- | ------------------- | ------------------------------------------------------ |
| 1   | ID               | **Integer**         | The ID of the song on Newgrounds                       |
| 2   | name             | **String**          | The name of the song                                   |
| 3   | artistID         | **Integer**         | Newgrounds ArtistID                                    |
| 4   | artistName       | **String**          | The name of the artist who made the song               |
| 5   | size             | **Integer**         | Size of the song in MB, rounded to two decimal places  |
| 6   | videoID          | **String**          | the Video ID for the songs YouTube Video               |
| 7   | youtubeURL       | **String**          | The URL of the newgrounds user's youtube channel       |
| 8   | isVerified       | **Bool**            | if the song artist is scouted on newgrounds            |
| 9   | songPriority     | **Integer**         | priority over the song list                            |
| 10  | link             | **String**          | Link to the song's mp3                                 |
| 11  | nongEnum         | **Integer**         | Type of NONG. 0 for none, 1 for NCS, 2 for CHOMPO.     |
| 12  | extraArtistIDs   | **Array\[Integer]** | IDs of extra artists, separated by `.`                 |
| 13  | new              | **Boolean**         | Whether the NEW icon shows up or not                   |
| 14  | newType          | **Integer**         | Type of NEW icon. 0 for Yellow, 1 for Blue             |
| 15  | extraArtistNames | **Array**           | Artist names in this format: `{id},{name},{id},{name}` |
| 16  | downloadSoundtrackOverride | **String** | The link to open with the "Download Soundtrack" button |
| 17  | songLinks        | **String**          | List of song links in this format: `{artistID},{platformID},{unk},{url};...`. Platform IDs: 1 = YouTube, 2 = Newgrounds, 3 = SoundCloud, 4 = Spotify, 5 = Bandcamp, 6 = NCS, 7 = Website, 8 = Instagram, 9 = Twitter, 10 = Facebook, 11 = Twitch, 12 = Discord, 13 = TikTok, 14 = Itch.io, other = Link. `unk` is a url-encoded string, unknown if it's ever used or sent |
| 18  | artistLinks      | **String**          | Artist links in the same format as songURL |

#### **Trivia**
- The savefile song structure uses the exact same keys as the server response
- The user-friendly URL to open with the "Download Soundtrack" button is determined as follows:
	- if `downloadSoundtrackOverride` has value, use it
	- else if it's an NCS song, use `link`
	- else if `videoID` has value, use `https://www.youtube.com/watch?v={videoID}`
	- else use `https://www.newgrounds.com/audio/listen/{id}`
