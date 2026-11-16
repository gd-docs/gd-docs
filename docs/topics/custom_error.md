# Custom Error Messages

In 2.209, some endpoints can return custom error messages that appear as popups (FLAlertLayers) in-game.

A typical Custom Error Message is written like this:

```
##P##t=SW52YWxpZCBOYW1l:b=TmFtZSBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzcGFjZXMu##P##-5
```

They have 3 distinct parts, which are as follows:

```
##P##t={title}:b={description}##P##{error}
```

The title and description are encoded in [URL-safe base64](/topics/encryption/base64). The error code is always a negative number, often `-1`.
