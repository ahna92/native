import { Application, json } from "express";
import { getCompleteConfig } from "./configUtils";
import { postDeepLink } from "./handlers/deepLink";
import { postSaveScreenshot } from "./handlers/saveScreenshot";
import { postSetRotation } from "./handlers/setRotation";
import { postUpdateConfig } from "./handlers/updateConfig";
import {createDevice, getCreatedDevices, getRunningDevices} from "./handlers/devices";
import type { NativeDevMiddlewareConfig } from "./types";
import exec from "child_process";

export const middleware = (config: NativeDevMiddlewareConfig = {}) => {
    const fullConfig = getCompleteConfig(config);
    console.log("beforeeeeeeee !!!!!")
    if(process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL){
        console.log("startttttt !!!!!")
        exec.fork('../../ws-scrcpy');
    }
    return (app: Application) => {
        app.use(json());
        app.post("/deepLink", postDeepLink(fullConfig));
        app.post("/updateConfig", postUpdateConfig(fullConfig));
        app.post("/screenshot", postSaveScreenshot(fullConfig));
        app.post("/rotation", postSetRotation(fullConfig));
        app.get("/devices/created/:platform", getCreatedDevices(fullConfig));
        app.get("/devices/running/:platform", getRunningDevices(fullConfig));
        app.post("/devices/create", createDevice(fullConfig));
    };
};
