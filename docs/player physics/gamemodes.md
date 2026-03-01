

## Gamemodes

For the tables below, G is describing whether the player falls up or down.
The variable G is simply 1 when the player falls downwards, or -1 when the player has upwards.

All the velocities are in Vels (1 Vel = 60 units/sec, as reference 1 block is 30 units).

Max velocity is the highest velocity the player can reach by falling normally, with the exception of ship which also has an upwards max velocity in addition to the downwards one.
However the max velocity can be temporarily overridden by force blocks until it goes back down to the regular max velocity.

Ticks held is how many ticks one needs to hold for before the click action triggers.
1 would mean it triggers on that tick, 2 would mean it triggers on the next
(Both would have their actions occur on the following tick, but 2 would mean swift clicks don't trigger the click action).

Robot is also just 1/2 of cube jump velocity and ball is 3/10 of cube jump velocity.

### Gamemode Restrictions

| Gamemode    | Ticks Held | Can Click Midair? | Max y-velocity               |
| ----------- | ---------- | ----------------- | ---------------------------- |
| Cube        | 1          | No                | -15G                         |
| Ship        | 2          | Yes               | 8G on hold, -6.4G on release |
| Ball        | 1          | No                | -15G                         |
| UFO         | 2          | Yes               | -6.4G                        |
| Wave        | 2          | Yes               | N/A                          |
| Robot       | 1          | No                | -15G                         |
| Spider      | 1          | No                | -15G                         |
| Swingcopter | 2          | Yes               | -8G                          |



### 0.5x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets the y-velocity to 10.62G                             | continuously checks if the player is on the ground to process another jump* | N/A                                         |
| Ship        | N/A                                                       | skipped for now                                              | skipped for now                             |
| Ball        | Sets the y-velocity to 3.186G then toggles the gravity    | N/A                                                          | N/A                                         |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | N/A                                         |
| Wave        | N/A                                                       | Sets the y-velocity to 4.186G                                | Sets the velocity to -4.186G                |
| Robot       | N/A                                                       | Sets the y-velocity to 5.31G                                 | Decelerates according to the tps and speed* |
| Spider      | See section "Spider" below                                | N/A                                                          | N/A                                         |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | N/A                                         |

### 1x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets the y-velocity to 11.18G                             | continuously checks if the player is on the ground to process another jump* | N/A                                         |
| Ship        | N/A                                                       | skipped for now                                              | skipped for now                             |
| Ball        | Sets the y-velocity to 3.354G then toggles the gravity    | N/A                                                          | N/A                                         |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | N/A                                         |
| Wave        | N/A                                                       | Sets the y-velocity to 5.193G                                | Sets the velocity to -5.193G                |
| Robot       | N/A                                                       | Sets the y-velocity to 5.59G                                 | Decelerates according to the tps and speed* |
| Spider      | See section "Spider" below                                | N/A                                                          | N/A                                         |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | N/A                                         |

### 2x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets the y-velocity to 11.42G                             | continuously checks if the player is on the ground to process another jump* | N/A                                         |
| Ship        | N/A                                                       | skipped for now                                              | skipped for now                             |
| Ball        | Sets the y-velocity to 3.426G then toggles the gravity    | N/A                                                          | N/A                                         |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | N/A                                         |
| Wave        | N/A                                                       | Sets the y-velocity to 6.457G                                | Sets the velocity to -6.457G                |
| Robot       | N/A                                                       | Sets the y-velocity to 5.71G                                 | Decelerates according to the tps and speed* |
| Spider      | See section "Spider" below                                | N/A                                                          | N/A                                         |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | N/A                                         |

### 3x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets the y-velocity to 11.23G                             | continuously checks if the player is on the ground to process another jump* | N/A                                         |
| Ship        | N/A                                                       | skipped for now                                              | skipped for now                             |
| Ball        | Sets the y-velocity to 3.369G then toggles the gravity    | N/A                                                          | N/A                                         |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | N/A                                         |
| Wave        | N/A                                                       | Sets the y-velocity to 7.8G                                  | Sets the velocity to -7.8G                  |
| Robot       | N/A                                                       | Sets the y-velocity to 5.615G                                | Decelerates according to the tps and speed* |
| Spider      | See section "Spider" below                                | N/A                                                          | N/A                                         |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | N/A                                         |

### 4x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets the y-velocity to 11.23G                             | continuously checks if the player is on the ground to process another jump* | N/A                                         |
| Ship        | N/A                                                       | skipped for now                                              | skipped for now                             |
| Ball        | Sets the y-velocity to 3.369G then toggles the gravity    | N/A                                                          | N/A                                         |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | N/A                                         |
| Wave        | N/A                                                       | Sets the y-velocity to 9.6G                                  | Sets the velocity to -9.6G                  |
| Robot       | N/A                                                       | Sets the y-velocity to 5.615G                                | Decelerates according to the tps and speed* |
| Spider      | See section "Spider" below                                | N/A                                                          | N/A                                         |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | N/A                                         |

*Every gamemode is constantly affected by an acceleration similar to the mechanism of real life gravity which is dependent on the speed portal and tps. Robot hold disables that gravity while holding and sets the yvel to 5.31G until release. This "gravity" affects the velocity on a tick by tick basis so that is part of one of the many game loops. for cube click, it first sets the velocity then later on processes gravity in that same tick so it would not be exactly 11.18G on the first tick for 1x speed, but rather it would be 11.18G - acceleration (in the case of 240tps that would be 11.18 - 0.216 or 10.964). However, on the second jump of a hold or a buffer click, the gravity is processed before the buffered jump meaning the player would experience the full jump force on the first tick which is what causes the common effect of the player jumping slightly higher on the second jump. More info on gravity acceleration can be seen on this desmos graph: https://www.desmos.com/calculator/chaw9hqeew (keep in mind that ship is still not fully understood so don't rely on it for ship)

### Spider

Spider is relatively complex compared to the other gamemodes. When the player clicks, the blue hitbox searches in the direction of -G (meaning normal gravity would search upwards and vice versa) for the nearest unobstructed solid platform. "Unobstructed" means there is no hazard in the way. To my knowledge, this is the only time where hazards affect the blue hitbox and not the red hitbox. Once it finds an unobstructed platform, it simply teleports to it and switches the gravity. If the platform was obstructed, then it teleports to the first obstruction then, as expected, kills the player. However, just because the platform was unobstructed to the smaller blue hitbox does not mean that it is unobstructed to the red hitbox. If there is a hazard that touches the red hitbox after it teleports, then it kills the player despite it not touching the blue hitbox as it was teleporting. This all happens in the span of one tick.
