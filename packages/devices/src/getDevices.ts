import {Platform} from "@storybook/native-types";
import axios from "axios";

export const getDefaultDevice = (platform: Platform): string => {
    if (process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL) {
        return "";
    }

    if (platform === "android") {
        return "nexus5";
    }
    if (platform === "ios") {
        return "iphone12";
    }

    throw new Error(`No device for platform: ${platform}`);
};

export const getDevices = (platform: Platform): string[] => {
    if (platform === "android") {
        return [
            "nexus5",
            "nexus7",
            "nexus9",
            "pixel4",
            "pixel4xl",
            "pixel6",
            "pixel6pro",
            "galaxytabs7"
        ];
    }
    if (platform === "ios") {
        return [
            "ipadair",
            "iphone6s",
            "iphone6splus",
            "ipadair2",
            "iphone9",
            "iphone11pro",
            "iphone11promax",
            "iphone12",
            "iphone12mini",
            "iphone12pro",
            "iphone12promax"
        ];
    }

    throw new Error(`No devices for platform: ${platform}`);
};

export interface Interface {
    name: string;
    ipv4: string;
}

export interface Device {
    udid: string;
    state: string;
    interfaces: Interface[];
    pid: number;
    "wifi.interface": string;
    "ro.build.version.release": string;
    "ro.build.version.sdk": string;
    "ro.product.manufacturer": string;
    "ro.product.model": string;
    "ro.product.cpu.abi": string;
    "last.update.timestamp": number;
}

export const getDevicesEmulators = async (platform: Platform): Promise<string[]> => {
    const data = await axios.get<Device[]>(`${process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL}/devices/${platform}`);
    return data.data.map((device) => {
        return `${device.udid}, ${device["ro.product.manufacturer"]} ${device["ro.product.model"]}`;
    });
};
