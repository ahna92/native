import React from "react";
import {
    ControllerManager,
    ACTION_EVENT_NAME,
    store,
    getAppetizeIframeId,
    getFullDeepLinkUrl
} from "@storybook/native-controllers";
import {useDevice, useFirstDevice} from "@storybook/native-devices";
import { EmulatorActions } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { Provider } from "react-redux";

import type { DeepLinkRendererProps } from "../types";
import CommandsList from "../commands/CommandsList";

const manager = new ControllerManager();

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        extraParams,
        storyParams,
        deepLinkBaseUrl,
        appetizeBaseUrl,
        context
    } = props;

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
    let deviceId = null;
    let deviceUrl = "";
    if (process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL && device !== "") {
        deviceId = device.split(",")[0];
        const wsUrl = encodeURIComponent(`${process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL.replace("http", "ws").replace("https", "wss")}/?action=proxy-adb&remote=tcp%3A8886&udid=${deviceId}`);
        deviceUrl = `${process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL}/#!action=stream&udid=${deviceId}&player=mse&ws=${wsUrl}`;
    }
    store.subscribe(()=>{
        const openCommands = store.getState().commands.filter((cmd)=>{
            return cmd.response.startsWith("opened")
        })
        if(openCommands.length > 1){
            // openCommands[openCommands.length - 1].response.split(" ")[1]
            useFirstDevice(platform)
        }

    })

    React.useEffect(() => {
        const onAction = (action: EmulatorActions) => {
            const controller = manager.getController(context);
            controller.sendMessage({
                message: action
            });
        };

        addons.getChannel().on(ACTION_EVENT_NAME, onAction);
        return () => {
            addons.getChannel().off(ACTION_EVENT_NAME, onAction);
        };
    }, [context]);

    React.useEffect(() => {
        const controller = manager.getController(context);
        controller.updateConfig({
            apiKey,
            settings: {
                device
            },
            platform,
            baseUrl: appetizeBaseUrl
        });
    }, [device, apiKey, context, platform, appetizeBaseUrl]);

    const storyParamsWithExtras = { ...storyParams, ...extraParams };
    React.useEffect(() => {
        const controller = manager.getController(context);
        const newAppUrl = getFullDeepLinkUrl(
            deepLinkBaseUrl,
            storyParamsWithExtras
        );
        controller.openDeepLink(newAppUrl);
    }, [
        device,
        JSON.stringify(storyParamsWithExtras),
        deepLinkBaseUrl,
        apiKey,
        context,
        appetizeBaseUrl
    ]);

    React.useEffect(() => {
        const elementId = `native-iframe-css-${context || ""}`;
        const persistentIFrameCss = `
        #root[hidden="true"] ~ #${getAppetizeIframeId(context)} {
            display: none;
        }
    
        #${getAppetizeIframeId(context)} {
            display: none;
        }
        `;

        const existingStyle = document.head.querySelector(`#${elementId}`);
        if (!existingStyle) {
            const style = document.createElement("style");
            style.innerHTML = persistentIFrameCss;
            style.id = elementId;
            document.head.appendChild(style);
        }
    }, [context]);

    const renderedIFrameCss = `
    #${getAppetizeIframeId(context)} {
        display: block;
    }
    .test{
    }
    `;

    const divStyle = {
        height: '720px',
        width: '500px',
    };

    return (
        <Provider store={store}>
            <>
                <style>{renderedIFrameCss}</style>
                {process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR_STREAM_URL && deviceId && (
                    <div style={divStyle}>
                        <iframe
                            title="device"
                            style={divStyle}
                            src={deviceUrl}
                        />
                    </div>
                )}
                <CommandsList context={context} />
            </>
        </Provider>
    );
};
