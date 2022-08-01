import {
    DEFAULT_ADB_COMMAND_PATH,
    DEFAULT_COMMAND_TIMEOUT, DEFAULT_EMULATOR_COMMAND_PATH,
    DEFAULT_XCRUN_COMMAND_PATH
} from "./constants";
import type { FullConfig, NativeDevMiddlewareConfig } from "./types";

export const getCompleteConfig = (
    config: Partial<NativeDevMiddlewareConfig>
): FullConfig => {
    return {
        androidEmulatorCommandPath: config.androidEmulatorCommandPath|| DEFAULT_EMULATOR_COMMAND_PATH,
        androidCommandPath:
            config.androidCommandPath || DEFAULT_ADB_COMMAND_PATH,
        iosCommandPath: config.iosCommandPath || DEFAULT_XCRUN_COMMAND_PATH,
        timeout: config.timeout || DEFAULT_COMMAND_TIMEOUT
    };
};
