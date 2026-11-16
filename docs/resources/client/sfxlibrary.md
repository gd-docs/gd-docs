# SFX Library format

The SFX Library is stored in your save directory as `sfxlibrary.dat`. To learn how to retreive it from the servers, refer to [this page](/endpoints/songs/sfxlibrary.md).

To decode sfxlibrary.dat, you need to [Base64](/topics/encryption/base64.md) URL-Safe decode it and [Zlib](/topics/encryption/zip.md) inflate it.

The SFX library is split into 3 parts:

```
{files}|{credits}|{changelog}
```

## Files & folders

`{files}` is a list of files and folders, separated with semicolons. The file format is as follows:

`{id},{name},{isFolder},{parentFolder},{filesize},{duration}`

| Key          | Type      | Description                                          |
| ------------ | --------- | ---------------------------------------------------- |
| id           | `integer` | The sound effect/folder ID                           |
| name         | `string`  | The sound effect/folder name                         |
| isFolder     | `boolean` | Whether this is a sound effect or folder             |
| parentFolder | `integer` | The parent folder                                    |
| filesize     | `integer` | The sound effect file size in bytes                  |
| duration     | `integer` | The duration of the sound effect, in `seconds * 100` |
 
The first "folder" is a special case: it has an ID of 1 and its name corresponds to the SFX library version.

## Credits

The `{credits}` part is very simple. It's a list of all the companies/people from which RobTop has licensed the sound effects, in this format:

`{name},{link};{name},{link}...`

where `name` is the name of the company and `link` is a link to their website.

Example (SFX library version **95**):

```
Epic Stock Media,https://epicstockmedia.com;Cyberwave Orchestra,https://cyberwaveorchestra.com;Fusehive,http://fusehive.com;SoundMorph,https://www.soundmorph.com;Stormwave Audio,https://stormwave-audio.com;David Dumais,https://www.daviddumaisaudio.com;Sharks,https://www.sharkstunes.com;
```

## Changelog

This is a base64-encoded string listing all sfx library changelogs. When decoded, each entry is separated by `$` and has the following format:

`{version},{timestamp},{highest_sfx_id}:{changes}`

Changes are encoded in the following format:

`{path}~{change_count};{path}~{change_count}...`

where `path` is the updated sfx folder's path string.
