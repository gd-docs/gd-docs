# News format

The news feed is stored in your save directory as `news/news.dat`. The news images are stored in the same folder.

To decode news.dat, you need to [Base64](/topics/encryption/base64.md)-decode it and [Gzip](/topics/encryption/zip.md)-decompress it.

The news feed is split into 2 parts:

```
{header}|{entries}
```

## Header format

The header is in the format `{version},{entryCount}`. `{version}` corresponds to the version at `https://geometrydashfiles.b-cdn.net/news/news_version.txt`.

## Entries format

> [!NOTE]
> All forms of text support newlines, emojis (ex. `:eyes:`), and color tags.

`{entries}` is a list of news entries, sorted newest first, separated by `|`.

Each entry is structured with `key:value` pairing, with each pair being separated with `;`. The list of known keys can be found in the table below:

| Key | Name | Type        | Description                                                                                                                 |
| --- | ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | Entry ID   | **Integer** | The news entry ID                                                                                                           |
| 2   | Date       | **String**  | The date of the news entry in plaintext (ex. "January 1, 1970"), encoded in [base64](/topics/encryption/base64.md) |
| 3   | Title      | **String**  | The title of the news entry, encoded in [base64](/topics/encryption/base64.md)                                     |
| 4   | Elements   | **String**  | The elements of the news entry                                                                                              |

## Elements format

Elements are in the format `{type},{data}`, and are separated by `~`.

There are 3 known types of elements that can be in a news entry. Information about each type can be found below:

| `type` | Name   | Description                                    | `data` format                                          |
| -- | ------ | ---------------------------------------------- | ---------------------------------------------------- |
| 0  | Text   | A text element                                 | `{b64 text}`                                         |
| 1  | Image  | An image element with an optional URL          | `{filename},{width},{height},{isYouTube},{b64 url}` |
| 2  | Link   | A text element, but clickable                  | `{b64 text},{b64 url}`                               |

### Image element structure

| Segment     | Description                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `filename` | The file name of the image accessible at `https://geometrydashfiles.b-cdn.net/news/{filename}` |
| `width` | The width of the image in pixels                                                               |
| `height` | The height of the image in pixels                                                              |
| `isYouTube` | `0` for false and `1` for true. If true, a play button will be drawn over the image            |
| `url` | The optional URL opened when clicking the image, encoded in [base64](/topics/encryption/base64.md). If blank, the image will not be clickable     |

> [!NOTE]
> RobTop uses the format `news_{entry id}_{0-based element position}_{hash}.{ext}` for the image file names. This is not required.

## Example

Example decoded news.dat (version 5)

```md
5,9|1:9;2:T2N0b2JlciAxOCwgMjAyNg==;3:TmV3IEV2ZW50IExldmVsOiBTaHJpbXBpcmUgU3RhdGU=;4:0,VGhlIG5ldyBFdmVudCBsZXZlbCwgIlNocmltcGlyZSBTdGF0ZSIgYnkgRGViaWhhbiBhbmQgTmFldnNrYWkgaXMgbGl2ZSEgOnBhcnR5Og==~0,Q2hlY2sgaXQgb3V0IGluLWdhbWUgb3Igd2F0Y2ggaGVyZTo=~0,PGNqPiJzaHJpbXBsZSIgbWF5IG9yIG1heSBub3QgYmUgYSBuZXcgd3JhaXRoIGNvZGUgOmV5ZXM6PC9jPg==~1,news_9_3_b903b61e.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1fQjgtbzZoVTU3WQ==|1:8;2:U2VwdGVtYmVyIDEzLCAyMDI2;3:TmV3IEV2ZW50IExldmVsOiBCZWR0aW1l;4:0,VGhlIG5ldyBFdmVudCBsZXZlbCwgIkJlZHRpbWUiIGJ5IG5hc2d1YmIsIGlzIGxpdmUhIDpwYXJ0eToKQ2hlY2sgaXQgb3V0IGluLWdhbWUgb3Igd2F0Y2ggaGVyZTo=~1,news_8_1_308c6ca4.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1OZ0hMUWVZci1xaw==|1:7;2:U2VwdGVtYmVyIDUsIDIwMjY=;3:OmV5ZXM6;4:1,news_7_0_f88c6a21.jpg,800,562,0,|1:6;2:SnVseSAyNCwgMjAyNg==;3:TmV3IEV2ZW50IExldmVsOiBNT0FJ;4:0,VGhlIG5ldyBFdmVudCBsZXZlbCwgIk1PQUkiIGJ5IFNlbmlvclNhdHVybm8sIGlzIGhlcmUhIFRyeSBpbi1nYW1lIG9yIHdhdGNoIGJlbG93LiBJdCB1c2VzIGEgbmV3IHNvbmcgYnkgRXh5bCwgVGVtaW5pdGUsIGFuZCBDcmVvLg==~1,news_6_1_d32961e7.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj05ajc3ZEhlUW5RMA==|1:5;2:SnVseSAyMCwgMjAyNg==;3:VGhlIEdlb21ldHJ5IERhc2ggQXdhcmRzIDIwMjYgU3VnZ2VzdGlvbnM=;4:0,Tm93IHRoYXQgdGhlIGZpcnN0IGhhbGYgb2YgMjAyNiBpcyBkb25lLCB3ZSBhcmUgdGFraW5nIHN1Z2dlc3Rpb25zIGZvciBUaGUgR2VvbWV0cnkgRGFzaCBBd2FyZHMgMjAyNiwgdGFraW5nIHBsYWNlIGluIEphbnVhcnkgMjAyNy4gVGhpcyBpbmNsdWRlcyBmZWVkYmFjayBvbiB0aGUgSnVyeSBzeXN0ZW0u~2,aHR0cHM6Ly9mb3Jtcy5nbGUvd3lwRGJNQXQ2U3Mxd2ViZjg=,aHR0cHM6Ly9mb3Jtcy5nbGUvd3lwRGJNQXQ2U3Mxd2ViZjg=~1,news_5_2_b2860517.jpg,800,454,0,aHR0cHM6Ly9mb3Jtcy5nbGUvd3lwRGJNQXQ2U3Mxd2ViZjg=|1:4;2:SnVuZSAyMiwgMjAyNg==;3:R2VvbWV0cnkgRGFzaCBTcG90bGlnaHQgQ2hhbm5lbA==;4:0,R2VvbWV0cnkgRGFzaCBTcG90bGlnaHQgaXMgbm93IGxpdmUhCkEgbmV3IGNoYW5uZWwgd2hlcmUgd2Ugd2lsbCBiZSBzaGFyaW5nIEV2ZW50IGxldmVscywgY29tbXVuaXR5IGhpZ2hsaWdodHMsIGFuZCBtb3JlLgpDaGVjayBpdCBvdXQgOik=~1,news_4_1_f0e26676.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1YcF9RT2ZYZXVSTQ==|1:3;2:QXByaWwgNiwgMjAyNg==;3:RHVhbGl0eSBHYXVudGxldCBDb250ZXN0;4:0,VGhlIER1YWxpdHkgR2F1bnRsZXQgQ29udGVzdCBpcyBoZXJlISBXYXRjaCB0aGUgdmlkZW8gZm9yIG1vcmUgaW5mbyA6KQ==~1,news_3_1_824062c2.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1uREJoV3Blbi1lVQ==|1:2;2:QXByaWwgNCwgMjAyNg==;3:TmV3IFdlYnNpdGUh;4:0,VGhlIG5ldyBHZW9tZXRyeSBEYXNoIHdlYnNpdGUgaXMgbGl2ZSEgQ2hlY2sgb3V0IHRoZSBsZWFkZXJib2FyZHMsIGdhbWUgcGFnZXMsIGFuZCB0cnkgdGhlIHBsYXlhYmxlIGJyb3dzZXIgZGVtbyBvZiBTdGVyZW8gTWFkbmVzcyByaWdodCBmcm9tIHRoZSBob21lIHBhZ2Uu~0,PGNqPlVzZSBjb2RlICJnZW9tZXRyeWRhc2guY29tIiBpbiB0aGUgc2VjcmV0IHZhdWx0IGZvciBhIGxpdHRsZSBib251cyBnaWZ0IDopPC9jPg==~2,R28gdG8gR2VvbWV0cnlEYXNoLmNvbQ==,aHR0cHM6Ly93d3cuZ2VvbWV0cnlkYXNoLmNvbQ==~1,news_2_3_e7b1bb54.png,800,454,0,aHR0cHM6Ly93d3cuZ2VvbWV0cnlkYXNoLmNvbQ==|1:1;2:RmVicnVhcnkgMjgsIDIwMjY=;3:VGhlIEdlb21ldHJ5IERhc2ggQXdhcmRzIDIwMjU6IFdpbm5lcnM=;4:0,VGhlIHdpbm5lcnMgb2YgVGhlIEdlb21ldHJ5IERhc2ggQXdhcmRzIDIwMjUgaGF2ZSBiZWVuIGRlY2lkZWQhIFdhdGNoIHRoZSB2aWRlbyB0byBzZWUgdGhlIGJlc3QgdGhhdCBHZW9tZXRyeSBEYXNoIGhhZCB0byBvZmZlciBpbiAyMDI1Lg==~1,news_1_1_a16d644f.jpg,800,454,1,aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1nVTJWTXQwVVZKMA==
```
