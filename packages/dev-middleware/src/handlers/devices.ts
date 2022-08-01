/* eslint-disable max-len */
import exec from "child_process";
import {Request, Response} from "express";
import {Platform, EmulatorRotation} from "@storybook/native-types";
import {FullConfig, ResponseBody} from "../types";

const getCreatedDevicesCommand = (
    config: FullConfig,
    platform: Platform
) => {
    if (platform === "android") {
        const tool = config.androidEmulatorCommandPath;
        return `${tool} -list-avds`;
    }

    if (platform === "ios") {
        throw new Error(`devices are not supported on iOS`);
    }

    throw new Error(`${platform} is not a valid platform`);
};


const getRunningDevicesCommand = (
    config: FullConfig,
    platform: Platform
) => {
    if (platform === "android") {
        const tool = config.androidCommandPath;
        return `${tool} devices`;
    }

    if (platform === "ios") {
        throw new Error(`devices are not supported on iOS`);
    }

    throw new Error(`${platform} is not a valid platform`);
};

const createDeviceCommand = (
    config: FullConfig,
    platform: Platform
) => {
    if (platform === "android") {
        const tool = config.androidEmulatorCommandPath;
        return `${tool} -list-avds`;
    }

    if (platform === "ios") {
        throw new Error(`devices are not supported on iOS`);
    }

    throw new Error(`${platform} is not a valid platform`);
};

const openDeviceCommand = (
    config: FullConfig,
    platform: Platform,
    name: String
) => {
    if (platform === "android") {
        const tool = config.androidEmulatorCommandPath;
        return `${tool} -avd ${name}`;
    }

    if (platform === "ios") {
        throw new Error(`devices are not supported on iOS`);
    }

    throw new Error(`${platform} is not a valid platform`);
};

export const getCreatedDevices = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const platform = req.params.platform as Platform;
        try {
            const output = exec
                .execSync(getCreatedDevicesCommand(config, platform), {
                    timeout: config.timeout
                })
                .toString();

            res.json({message: output} as ResponseBody);
        } catch (ex) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};

export const getRunningDevices = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const platform = req.params.platform as Platform;
        try {
            const output = exec
                .execSync(getCreatedDevicesCommand(config, platform), {
                    timeout: config.timeout
                })
                .toString();

            res.json({message: output} as ResponseBody);
        } catch (ex) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};

export const createDevice = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const platform = req.body.platform;
        try {
            let output = exec
                .execSync(getRunningDevicesCommand(config, platform), {
                    timeout: config.timeout
                })
                .toString();

            console.log("getRunningDevicesCommand", output)

            if (output.replace("List of devices attached", "").trim().length == 0) {

                output = exec
                    .execSync(getCreatedDevicesCommand(config, platform), {
                        timeout: config.timeout
                    })
                    .toString();

                console.log("getCreatedDevicesCommand", output)

                if (output.trim().length == 0) {
                    output = exec
                        .execSync(createDeviceCommand(config, platform), {
                            timeout: config.timeout
                        })
                        .toString();

                } else {
                    const list = output.split("\n").filter((str, i, a) => {
                        return str !== ""
                    })

                    const device = list[list.length - 1]
                    // TODO start device in another thread and for longer time
                    exec.exec(openDeviceCommand(config, platform, device), {
                        timeout: 320000
                    }).toString()
                    output = `opened ${device}`
                }
            } else {
                output = "created"
            }

            res.json({message: output} as ResponseBody);
        } catch (ex) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};
