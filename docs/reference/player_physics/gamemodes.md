---
aside: true
---

# Gamemodes

For the tables below, G is describing whether the player falls up or down.
The variable G is simply 1 when the player falls downwards, or -1 when the player has upwards.

All the velocities are in Vels (1 Vel = 60 units/sec, as reference 1 block is 30 units).

Max velocity is the highest velocity the player can reach by falling normally, with the exception of ship, which also has an upwards max velocity in addition to the downwards one.
However, max velocity can be temporarily overridden by force blocks until it goes back down to the regular max velocity.

Ticks held is how many ticks one needs to hold for before the click action triggers.
The action occurs on the tick immediately following the last required tick.

Robot is also just 1/2 of cube jump velocity and ball is 3/10 of cube jump velocity.

## Gamemode Restrictions

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

## 0.5x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets `yvel` to 10.62G                             | Continuously checks if the player is on the ground to process another jump* | -                            |
| Ship        | -                                                         | Skipped for now                                              | Skipped for now                             |
| Ball        | Sets `yvel` to 3.186G then toggles the gravity    | -                                                            | -                                           |
| Ufo         | Sets `yvel` to 7G                                 | -                                                            | -                                           |
| Wave        | -                                                         | Sets `yvel` to 4.186G                                | Sets the velocity to -4.186G                |
| Robot       | -                                                         | Sets `yvel` to 5.31G                                 | Starts decelerating according to the tps and speed[*](#:~:text=Every%20gamemode%20is,it%20for%20ship%29.) |
| Spider      | See [Spider](#spider)                                     | -                                                            | -                                           |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | -                                                            | -                                           |

## 1x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets `yvel` to 11.18G                             | Continuously checks if the player is on the ground to process another jump* | -                            |
| Ship        | -                                                         | Skipped for now                                              | Skipped for now                             |
| Ball        | Sets `yvel` to 3.354G then toggles the gravity    | -                                                            | -                                           |
| Ufo         | Sets `yvel` to 7G                                 | -                                                            | -                                           |
| Wave        | -                                                         | Sets `yvel` to 5.193G                                | Sets the velocity to -5.193G                |
| Robot       | -                                                         | Sets `yvel` to 5.59G                                 | Starts decelerating according to the tps and speed[*](#:~:text=Every%20gamemode%20is,it%20for%20ship%29.) |
| Spider      | See [Spider](#spider)                                     | -                                                            | -                                           |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | -                                                            | -                                           |

## 2x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets `yvel` to 11.42G                             | Continuously checks if the player is on the ground to process another jump* | -                            |
| Ship        | -                                                         | Skipped for now                                              | Skipped for now                             |
| Ball        | Sets `yvel` to 3.426G then toggles the gravity    | -                                                            | -                                           |
| Ufo         | Sets `yvel` to 7G                                 | -                                                            | -                                           |
| Wave        | -                                                         | Sets `yvel` to 6.457G                                | Sets the velocity to -6.457G                |
| Robot       | -                                                         | Sets `yvel` to 5.71G                                 | Starts decelerating according to the tps and speed[*](#:~:text=Every%20gamemode%20is,it%20for%20ship%29.) |
| Spider      | See [Spider](#spider)                                     | -                                                            | -                                           |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | -                                                            | -                                           |

## 3x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets `yvel` to 11.23G                             | Continuously checks if the player is on the ground to process another jump* | -                            |
| Ship        | -                                                         | Skipped for now                                              | Skipped for now                             |
| Ball        | Sets `yvel` to 3.369G then toggles the gravity    | -                                                            | -                                           |
| Ufo         | Sets `yvel` to 7G                                 | -                                                            | -                                           |
| Wave        | -                                                         | Sets `yvel` to 7.8G                                  | Sets the velocity to -7.8G                  |
| Robot       | -                                                         | Sets `yvel` to 5.615G                                | Starts decelerating according to the tps and speed[*](#:~:text=Every%20gamemode%20is,it%20for%20ship%29.) |
| Spider      | See [Spider](#spider)                                     | -                                                            | -                                           |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | -                                                            | -                                           |

## 4x Speed Portal

| Gamemode    | Click                                                     | Hold                                                         | Release                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Cube        | Sets `yvel` to 11.23G                             | Continuously checks if the player is on the ground to process another jump* | -                            |
| Ship        | -                                                         | Skipped for now                                              | Skipped for now                             |
| Ball        | Sets `yvel` to 3.369G then toggles the gravity    | -                                                            | -                                           |
| Ufo         | Sets `yvel` to 7G                                 | -                                                            | -                                           |
| Wave        | -                                                         | Sets `yvel` to 9.6G                                  | Sets the velocity to -9.6G                  |
| Robot       | -                                                         | Sets `yvel` to 5.615G                                | Starts decelerating according to the tps and speed[*](#:~:text=Every%20gamemode%20is,it%20for%20ship%29.) |
| Spider      | See [Spider](#spider)                                     | -                                                            | -                                           |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | -                                                            | -                                           |

*Every gamemode is constantly affected by an acceleration, similar to the mechanism of real life gravity, which is dependent on the speed portal and TPS. Robot hold disables that gravity while holding and sets the yvel to 5.31G until release. This "gravity" affects the velocity on a tick-by-tick basis, so that is part of one of the many game loops. For cube click, it first sets the velocity, then later on processes gravity in that same tick, so it would not be exactly 11.18G on the first tick for 1x speed, but rather it would be `11.18G - acceleration` (in the case of 240tps, that would be `11.18 - 0.216`, or 10.964). However, on the second jump of a hold or a buffer click, the gravity is processed before the buffered jump, meaning the player would experience the full jump force on the first tick, which is what causes the common effect of the player jumping slightly higher on the second jump. More info on gravity acceleration can be seen on [this Desmos graph](https://www.desmos.com/calculator/chaw9hqeew) (keep in mind that ship is still not fully understood, so don't rely on it for ship).

## Spider

Spider is relatively complex compared to the other gamemodes. When the player clicks, the blue hitbox searches in the direction of -G (meaning normal gravity would search upwards and vice versa) for the nearest unobstructed solid platform. "Unobstructed" means there is no hazard in the way. To my knowledge, this is the only time where hazards affect the blue hitbox and not the red hitbox. Once it finds an unobstructed platform, it simply teleports to it and switches the gravity. If the platform was obstructed, then it teleports to the first obstruction and, as expected, kills the player. However, just because the platform was unobstructed to the smaller blue hitbox does not mean that it is unobstructed to the red hitbox. If there is a hazard that touches the red hitbox after it teleports, then it kills the player despite it not touching the blue hitbox as it was teleporting. This all happens in the span of one tick.
