// this file is based upon similar code by https://github.com/hipstersmoothie

import React, {useEffect, useState} from "react";
import {useAddonState} from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import {getDevices, getDevicesEmulators, DeviceSelections} from "@storybook/native-devices";

import {ADDON_ID} from "../constants";
import {
    DEFAULT_STATE,
    restoreFromLocalStorage,
    saveToLocalStorage
} from "../utils/localStorageUtils";

import {
    store
} from "@storybook/native-controllers";
import {Provider} from "react-redux";

export default () => {
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [androidDevices, setAndroidDevices] = useState<string[]>([]);
    const [iosDevices, setIosDevices] = useState<string[]>([]);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );

    if (process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL) {
        useEffect(() => {
            getDevicesEmulators("android").then((list) => {
                setAndroidDevices(list);
            });
            getDevicesEmulators("ios").then((list) => {
                setIosDevices(list);
            });
        }, []);
    } else {
        setAndroidDevices(getDevices("android"));
        setIosDevices(getDevices("ios"));
    }


    const saveState = (s: DeviceSelections) => {
        setState(s);
        saveToLocalStorage(s);
    };

    useEffect(() => {
        console.log("subscribe", store.getState())
        store.subscribe(() => {
            console.log("state", store.getState())
            const openCommands = store.getState().commands.filter((cmd) => {
                return cmd.response.startsWith("opened")
            })
            if (openCommands.length > 1) {
                // openCommands[openCommands.length - 1].response.split(" ")[1]
                console.log("androidDevices", androidDevices)
                saveState({
                    androidSelection: androidDevices[0],
                    iosSelection: state.iosSelection,
                    androidDevices: [],
                    iosDevices: []
                })
            }

        })
    }, [])

    return (
        <Provider store={store}>
            <>
                <WithTooltip
                    closeOnClick
                    placement="top"
                    trigger="click"
                    tooltip={(props) => (
                        <TooltipLinkList
                            links={androidDevices
                                .map((device) => {
                                    const onClick = () => {
                                        saveState({
                                            androidSelection: device,
                                            iosSelection: state.iosSelection,
                                            // androidSelection: androidDevices[0],
                                            androidDevices: [],
                                            iosDevices: []
                                        });
                                        props.onHide();
                                    };
                                    return {
                                        id: device,
                                        title: device,
                                        onClick,
                                        value: device,
                                        active: state.androidSelection === device,
                                        left: "Android"
                                    };
                                })
                                .concat(
                                    iosDevices.map((device) => {
                                        const onClick = () => {
                                            saveState({
                                                androidSelection:
                                                state.androidSelection,
                                                iosSelection: device,
                                                androidDevices: [],
                                                iosDevices: []
                                            });
                                            props.onHide();
                                        };
                                        return {
                                            id: device,
                                            title: device,
                                            onClick,
                                            value: device,
                                            active: state.iosSelection === device,
                                            left: "iOS"
                                        };
                                    })
                                )}
                        />
                    )}
                >
                    <IconButton title="Select device">
                        <Icons icon="tablet"/>
                    </IconButton>
                </WithTooltip>
            </>
        </Provider>
    );
};
