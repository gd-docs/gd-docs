---
title: Smart Templates
---

# Smart Templates (kCEK 10 & 11)

Smart Templates are user-made templates used for the Auto Build feature. They are stored in [GLM_20](/resources/client/gamesave/GLM.md#GLM_20).

## kCEK 10

| Key | Value               | Type    |
| --- | ------------------- | ------- |
| 1   | Smart Template ID   | integer |
| 2   | Name                | string  |
| 3   | Template Variations | dict    |
| 4   | Allow Rotation      | integer |
| 5   | Allow Flip X        | integer |
| 6   | Allow Flip Y        | integer |
| 7   | Ignore Corners      | integer |

Keys 4 to 7 are set upon first selection to value 1 while the template is selected in-game, once saved these keys cannot be removed. The keys are functionally useless as the template does not remember the last selected options when loaded.

Key 3 stores a dictionary that maps a 9-character long string key (representing the template's 3x3 layout) to a list of kCEK 11 dictionaries.

The character's index represents its position inside the layout:

| Char | Position      |
| ---- | ------------- |
| 1    | Center        |
| 2    | Top           |
| 3    | Bottom        |
| 4    | Left          |
| 5    | Right         |
| 6    | Top Left      |
| 7    | Top Right     |
| 8    | Bottom Left   |
| 9    | Bottom Right  |

The character's value represents the type of template that will be matched at that position:

| Value | Template                     |
| ----  | ---------------------------- |
| 0     | None                         |
| 1     | Square                       |
| 2     | 1x Slope Bottom-Right        |
| 3     | 1x Slope Bottom-Left         |
| 4     | 1x Slope Top-Left            |
| 5     | 1x Slope Top-Right           |
| 6     | 2x Slope Center Bottom-Right |
| 7     | 2x Slope Side Bottom-Right   |
| 8     | 2x Slope Center Bottom-Left  |
| 9     | 2x Slope Side Bottom-Left    |
| A     | 2x Slope Center Top-Right    |
| B     | 2x Slope Side Top-Right      |
| C     | 2x Slope Center Top-Left     |
| D     | 2x Slope Side Top-Left       |
| E     | 2x Slope Center Right-Top    |
| F     | 2x Slope Side Right-Top      |
| G     | 2x Slope Center Right-Bottom |
| H     | 2x Slope Side Right-Bottom   |
| I     | 2x Slope Center Left-Bottom  |
| J     | 2x Slope Side Left-Bottom    |
| K     | 2x Slope Center Left-Top     |
| L     | 2x Slope Side Left-Top       |
	    
The directions represent what side the legs of the slope point towards. 1x Slopes have equal legs so they are interchangeable while for 2x slopes the first direction is the one the longer leg sits on while the second direction is for the shorter leg.

2x slopes cover 2 blocks so they are represented by 2 different templates where center is the smaller half of the slope while side is the larger half.

## kCEK 11

| Key | Value         | Type   |
| --- | ------------- | ------ |
| 1   | Object String | string |
| 2   | Weight        | int    |

Key 1 is the [object string](/resources/client/level-components/level-string.md) of the template variation. The object string is **unencoded** and stored raw. The center point is at X: 0, Y: -90. 

The center smart template object is also encoded alongside the rest of the template variation's objects and is given property 34 (group parent) when serialized.

Key 2 is the variation's weight used to calculate the template's random chance to be picked.
