# Server Thread Message Resource

## Thread Message

Thread Messages are the new type of message in Geometry Dash that can be found in threads.

Unlike most other server objects, thread messages do not have a typical `key:value:key:value` pair. Instead, they are a fixed list of 5 values separated by colons `:`, without any keys.
<!-- tabs:start -->

#### **Thread Message Example Response**
```md
589952:14054365:aGVsbG8=:1792229487:0
```

The values are as follows:

- Message ID
- Sender account ID. This is 0 for system messages
- Message content. This is just the message content encoded in [Base64](/topics/encryption/base64.md) if this is a regular message, otherwise this is its own string with a few values which are comma-separated
- UNIX timestamp of when the message was sent
- Whether the message is deleted

### System Messages

System Messages are messages that do not have an author attached, and appear as small text. Their content is a list of 5 values separated by commas `,` and encoded in [Base64](/topics/encryption/base64.md). System Messages only exist in Group threads.

The values are:

- Type of system message:
  - 1 - new user added (user1 - the user who added them, user2 - the user that was added). May be unused, or only limited to moderators
  - 2 - new user joined (user1 - the user who invited them, user2 - the user who joined)
  - 3 - user left (user1 - the user who left)
  - 4 - user kicked (user1 - the user who did the kick, user2 - the user that was kicked)
  - 5 - ownership transferred (user1 - the previous owner, user2 - the new owner)
  - 6 - user invited (user1 - the inviter, user2 - the user that was invited)
  - 7 - description was changed (user1 - the user who changed the description)
  - 8 - thread was renamed (user1 - the user who renamed the thread)
  - 9 - conversation started by advisor (user1 - the advisor who started the conversation)
  - 10 - conversation started by moderator (user1 - the moderator who started the conversation)
  - 11 - conversation was closed (user1 - the user who closed the conversation, not necessarily specified)
- User 1 Account ID. User 1 is not specified for type 5 if the ownership was transferred as a result of the previous owner leaving
- User 1 Username
- User 2 Account ID. User 2 is not specified for types 3, 7 and 8
- User 2 Username

<!-- tabs:end -->
