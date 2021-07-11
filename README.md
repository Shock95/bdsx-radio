# bdsx-radio
.NBS song player for [BDSX](https://github.com/bdsx/bdsx)

## Installing
- Download repository and extract contents to the BDSX directory
- Edit ```index.ts``` and add the following line: 
```ts
import "./radio";
```
- Run ```update.bat``` or ```update.sh```


## Setup
- Put .NBS files in the ```songs``` folder
- Restart the server

The songs will play automatically once the server is started.

You can find a few .NBS files here:
- https://github.com/thatcraniumguy/Songs
- https://github.com/Ruinscraft/powder-resources/tree/master/songs/songs

## Commands
```/radioplay``` - Connects player to the radio

```/radiostop``` - Disconnects player from the radio

```/radiostatus``` - Shows radio status (Current song, volume, etc)

```/radiovolume <number>``` - Sets the player's volume for the radio

## References
[libnbs](https://github.com/thebigsmileXD/libnbs) (XenialDan)
