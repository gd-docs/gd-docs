## Force Blocks

The acceleration in Vels from a force block without relative or range turned on can be calculated with the following equation.
![Eq](forceblocksvg/equation1.svg)

The acceleration ends once the player is no longer touching the force block and it returns back to \(A\). If the player is touching two or more force blocks with no ForceIDs or different ForceIDs at once, then their accelerations get added up together, which is all added to the acceleration \(A\) as usual. However, if a force block causes the velocity to go past the maximum velocity, then the maximum velocity is temporarily increased by \(F\). Another way of saying that is the velocity is set to \(F\) rather than increase by \(F\) every tick. The force is also affected depending on the rotation of the force block.

The equation above can be simplified if there is no force block stacking.
![Eq](forceblocksvg/equation2.svg)
