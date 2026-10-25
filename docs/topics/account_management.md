# Account Management

The Boomlings servers whitelist the `database/accounts` directory for user access (no requirement for a blank user agent). This directory is used to access several account management pages, including a few that can be accessed ingame. These requests are typically captcha blocked.

## register.php

This page replaced [registerGJAccount.md](/endpoints/accounts/registerGJAccount.md) in the 2.2 update. Besides the captcha, it does not contain any additional registration fields.

## accountManagement.php

Login for the account management page, which allows for changing username, the password, or deleting an account.

## lostpassword.php

Entering an email will send a password reset request to that email.

## lostusername.php

Entering an email will have the username associated with that email sent in an email.

## changepassword.php

Entering your current password will allow you to change it to a new one.

## changeusername.php

Allows you to change your current username via text input. Emails you when your username is changed, along with adding a button to revert your username with a 24 hour grace period.

## changeEmail.php

Entering your current password along with a new email will allow you to change the email associated with your Geometry Dash account.

## manageSecondaryEmail.php

Entering your current password along with a new email will allow you to add a recovery (secondary) email to your Geometry Dash account. There is also a button for removing your recovery email.

## takeback.php

Entering the main email of your Geometry Dash account will send you a link to both reset your password and remove any recovery email.
