import { NBSLoader } from "./loader";
import { MinecraftPacketIds, netevent } from "bdsx/index";
import "./command";

const fs = require("fs");
const path = require("path");

let dir = path.join(process.cwd(), '../songs');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
NBSLoader.init(dir);

netevent.before(MinecraftPacketIds.Disconnect).on((ev, networkIdentifier) => {
    NBSLoader.stopPlaying(networkIdentifier.getActor()!);
});