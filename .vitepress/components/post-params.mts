export default {
    "descriptions": {
        "@default": "<em>No description found for this parameter</em>",
        "gameVersion": "A number representing the game's version. The current value is <code>22</code> for 2.2",
        "binaryVersion": "A number representing the game's small version. The current value is <code>47</code> for 2.2081 on PC and <code>48</code> for 2.208 on mobile",
        "uuid": "In modern versions, this is sent as the user ID. See the previous format <a href=\"/topics/encryption/id#uuid\">here</a>",
        "udid": "The player's <a href=\"/topics/encryption/id#udid\">UDID</a> (Unique Device Identifier). Used to identify unregistered users",
        "accountID": "The player's account ID (not to be confused with user ID). Used for authorization",
        "gjp2": "The player's account password, encoded with <a href=\"/topics/gjp\">GJP2</a>. Used for authorization",
        "dvs": "A number added in 2.208 representing the device the player is using. Corresponds to the <a href=\"https://docs.cocos2d-x.org/api-ref/cplusplus/V2.2/dd/d96/_c_c_platform_config_8h.html\" target=\"_blank\" rel=\"noreferrer\">Cocos2d <code>CC_TARGET_PLATFORM</code> macro</a>: 1 for iOS, 2 for Android, 3 for Windows, 8 for macOS",
        "gdw": "Whether the request is coming from GD World. This used to block some requests if set to <code>1</code>, and used to be sent as <code>0</code> in full GD 2.1, but is no longer sent at all outside of GDW",
        "gdl": "Whether the request is coming from GD Lite",
        "secret": "<a href=\"/reference/secrets\">$0 Secret</a>: <code>$1</code>"
    },
    "formats": {
        "secret": {
            "common": ["Common", "Wmfd2893gb7"],
            "account": ["Account", "Wmfv3899gc9"],
            "level": ["Level", "Wmfv2898gc9"],
            "mod": ["Moderator", "Wmfp3879gc3"]
        }
    }
};