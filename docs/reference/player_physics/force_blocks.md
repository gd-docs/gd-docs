# Force Blocks

The acceleration in Vels from force blocks without relative or range turned on can be calculated with the following equation:
$$
\large{F = \frac{\textrm{round}\left( \frac{\sum_{i=1}^n \cos(\theta_i)9x_i}{40}\cdot1000 \right)}{1000} + A}
$$
where $n$ is the number of force blocks being stacked, $x$ is the value of the force block, $A$ is the acceleration from gravity (refer to the [gravity acceleration graph](https://www.desmos.com/calculator/chaw9hqeew)), and $\theta$ is the angle of the force block.

The acceleration ends once the player is no longer touching the force block; it returns back to $A$. If the player is touching two or more force blocks with no ForceIDs or different ForceIDs at once, then their accelerations get added up together, which is all added to the acceleration $A$ as usual. However, if a force block causes the velocity to go past the maximum velocity, then the maximum velocity is temporarily increased by $F$. Another way of saying that is: the velocity is set to $F$, rather than increased by $F$ every tick. The force is also affected depending on the rotation of the force block.

The equation above can be simplified if there is no force block stacking.
$$
\large{F = \frac{\textrm{round}(\cos(\theta)\cdot225x)}{1000} + A}
$$
