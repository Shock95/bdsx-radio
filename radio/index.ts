import { NBSLoader } from "./loader";
import "./command";
import { events } from "bdsx/event";

const fs = require("fs");
const path = require("path");

let dir = path.join(process.cwd(), '../songs');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
NBSLoader.init(dir);

events.networkDisconnected.on((ni) => {
    let actor = ni.getActor();
    if (actor){
        NBSLoader.stopPlaying(actor);
    }
});