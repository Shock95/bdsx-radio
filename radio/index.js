"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = require("./loader");
require("./command");
const event_1 = require("bdsx/event");
const fs = require("fs");
const path = require("path");
let dir = path.join(process.cwd(), '../songs');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
loader_1.NBSLoader.init(dir);
event_1.events.networkDisconnected.on((ni) => {
    let actor = ni.getActor();
    if (actor) {
        loader_1.NBSLoader.stopPlaying(actor);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyxxQkFBbUI7QUFDbkIsc0NBQW9DO0FBRXBDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUM7SUFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNyQjtBQUNELGtCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXBCLGNBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUNqQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsSUFBSSxLQUFLLEVBQUM7UUFDTixrQkFBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=