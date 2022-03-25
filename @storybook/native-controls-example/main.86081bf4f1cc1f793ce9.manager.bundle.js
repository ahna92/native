(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{220:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActionTypes=exports.ACTION_EVENT_NAME=exports.BASE_IFRAME_ID=void 0,exports.BASE_IFRAME_ID="appetize-iframe",exports.ACTION_EVENT_NAME="native-action",function(ActionTypes){ActionTypes.PERFORM_COMMAND="load",ActionTypes.COMMAND_ERROR="error",ActionTypes.COMMAND_SUCCESS="success",ActionTypes.RESET_COMMANDS="reset-commands"}(exports.ActionTypes||(exports.ActionTypes={}))},314:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||exports.hasOwnProperty(p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(905),exports);var DeepLinksContainer_1=__webpack_require__(906);Object.defineProperty(exports,"DeepLinksContainer",{enumerable:!0,get:function(){return DeepLinksContainer_1.default}})},315:function(module,exports,__webpack_require__){"use strict";var EmulatorRotation;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RotationsList=exports.EmulatorRotation=exports.EmulatorActions=void 0,function(EmulatorActions){EmulatorActions.rotateLeft="rotateLeft",EmulatorActions.rotateRight="rotateRight",EmulatorActions.saveScreenshot="saveScreenshot"}(exports.EmulatorActions||(exports.EmulatorActions={})),function(EmulatorRotation){EmulatorRotation[EmulatorRotation.vertical=0]="vertical",EmulatorRotation[EmulatorRotation.horizontal=1]="horizontal",EmulatorRotation[EmulatorRotation.invertedVertical=2]="invertedVertical",EmulatorRotation[EmulatorRotation.invertedHorizontal=3]="invertedHorizontal"}(EmulatorRotation=exports.EmulatorRotation||(exports.EmulatorRotation={})),exports.RotationsList=[EmulatorRotation.vertical,EmulatorRotation.horizontal,EmulatorRotation.invertedVertical,EmulatorRotation.invertedHorizontal]},316:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEEP_LINKS_PARAM_KEY=exports.LOCAL_STORAGE_KEY=exports.ADDON_ID=void 0,exports.ADDON_ID="native",exports.LOCAL_STORAGE_KEY="native-device-selection",exports.DEEP_LINKS_PARAM_KEY="native-deep-links"},317:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeviceContext=void 0;var React=__importStar(__webpack_require__(0)),getDevices_1=__webpack_require__(482);exports.DeviceContext=React.createContext({androidSelection:getDevices_1.getDefaultDevice("android"),iosSelection:getDevices_1.getDefaultDevice("ios")})},466:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAppetizeUrl=void 0,exports.getAppetizeUrl=function(_a){var launchArgs=_a.launchArgs,settings=_a.settings,apiKey=_a.apiKey,_b=_a.baseUrl,baseUrl=void 0===_b?"https://appetize.io":_b;if(!apiKey)throw new Error("No appetize API key was specified");var options=__assign({xdocMsg:!0,autoplay:!0},settings);return launchArgs&&(options.params=JSON.stringify(launchArgs)),baseUrl+"/embed/"+apiKey+"?"+new URLSearchParams(options).toString()}},467:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateIframeUrl=exports.getAppetizeIframe=exports.createAppetizeIframe=exports.getAppetizeIframeId=exports.getInnerDocument=void 0;var constants_1=__webpack_require__(220);exports.getInnerDocument=function(){var _a,storybookFrame=document.getElementById("storybook-preview-iframe"),innerDoc=storybookFrame?storybookFrame.contentDocument||(null===(_a=storybookFrame.contentWindow)||void 0===_a?void 0:_a.document):document;if(!innerDoc)throw new Error("The inner document was not found");return innerDoc},exports.getAppetizeIframeId=function(context){return context?constants_1.BASE_IFRAME_ID+"-"+context:constants_1.BASE_IFRAME_ID},exports.createAppetizeIframe=function(context){var innerDoc=exports.getInnerDocument(),iframe=innerDoc.createElement("iframe");return iframe.id=exports.getAppetizeIframeId(context),iframe.style.border="0",iframe.style.overflow="hidden",iframe.style.width="100vw",iframe.style.height="100vh",iframe.src="about:blank",iframe.title="appetize-embed",iframe.scrolling="no",innerDoc.body.appendChild(iframe),iframe},exports.getAppetizeIframe=function(context){var innerDoc=exports.getInnerDocument(),iframeId=exports.getAppetizeIframeId(context),appetizeFrame=innerDoc.getElementById(iframeId);if(!appetizeFrame)throw new Error("The appetize.io iframe was not found for context: "+context);return appetizeFrame},exports.updateIframeUrl=function(url,context){var iframe=exports.getAppetizeIframe(context);iframe&&iframe.src!==url&&(iframe.src=url)}},468:function(module,exports,__webpack_require__){"use strict";var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetCommands=exports.performCommand=void 0;var axios_1=__importDefault(__webpack_require__(885)),constants_1=__webpack_require__(220);exports.performCommand=function(url,data){return function(dispatch){return __awaiter(void 0,void 0,void 0,(function(){var response,ex_1,details,_a,_b;return __generator(this,(function(_c){switch(_c.label){case 0:dispatch({type:constants_1.ActionTypes.PERFORM_COMMAND}),_c.label=1;case 1:return _c.trys.push([1,3,,4]),[4,axios_1.default.post(url,data)];case 2:return response=_c.sent(),details={message:data,response:response.data.message,successful:!0},dispatch({type:constants_1.ActionTypes.COMMAND_SUCCESS,payload:details}),[3,4];case 3:return ex_1=_c.sent(),console.error(ex_1),details={message:data,response:null===(_b=null===(_a=ex_1.response)||void 0===_a?void 0:_a.data)||void 0===_b?void 0:_b.message,successful:!1},dispatch({type:constants_1.ActionTypes.COMMAND_ERROR,payload:details}),[3,4];case 4:return[2]}}))}))}},exports.resetCommands=function(dispatch){dispatch({type:constants_1.ActionTypes.RESET_COMMANDS})}},477:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.dispatchThunk=void 0;var redux_1=__webpack_require__(923),redux_thunk_1=__importDefault(__webpack_require__(903)),reducer_1=__importDefault(__webpack_require__(904)),enhancer=redux_1.applyMiddleware(redux_thunk_1.default),store=redux_1.createStore(reducer_1.default,enhancer);exports.default=store,exports.dispatchThunk=function(thunk){return store.dispatch(thunk)}},478:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var lodash_1=__webpack_require__(479),deep_link_logger_1=__webpack_require__(314),iframeUtils_1=__webpack_require__(467),getAppetizeUrl_1=__webpack_require__(466),AppetizeEmulatorController=function(){function AppetizeEmulatorController(context){var _this=this;this.lastUrlMessage=void 0,this.connected=!1,this.emulatorContext=void 0,this.config=void 0,this.handleIncomingMessage=function(event){"firstFrameReceived"===event.data?(_this.connected=!0,setTimeout((function(){_this.lastUrlMessage&&_this.sendMessage({message:_this.lastUrlMessage})}),600)):"sessionEnded"===event.data&&(_this.connected=!1)},this.openDeepLink=lodash_1.debounce((function(deepLinkUrl){_this.undebouncedOpenDeepLink(deepLinkUrl)}),400),this.emulatorContext=context}return AppetizeEmulatorController.prototype.sendMessage=function(_a){var message=_a.message,requireConnection=_a.requireConnection,appetizeFrame=iframeUtils_1.getAppetizeIframe(this.emulatorContext);"object"==typeof message&&"url"===message.type&&(this.lastUrlMessage=message),appetizeFrame&&appetizeFrame.contentWindow&&(this.connected||!requireConnection)&&appetizeFrame.contentWindow.postMessage(message,"*")},AppetizeEmulatorController.prototype.createEmulator=function(){iframeUtils_1.createAppetizeIframe(this.emulatorContext),window.addEventListener("message",this.handleIncomingMessage,!1)},AppetizeEmulatorController.prototype.undebouncedOpenDeepLink=function(deepLinkUrl){deep_link_logger_1.logDeepLink(deepLinkUrl),this.sendMessage({message:{type:"url",value:deepLinkUrl},requireConnection:!0})},AppetizeEmulatorController.prototype.getContext=function(){return this.emulatorContext},AppetizeEmulatorController.prototype.updateConfig=function(config){this.config=config;var appetizeUrl=getAppetizeUrl_1.getAppetizeUrl(config);iframeUtils_1.updateIframeUrl(appetizeUrl,this.emulatorContext)},AppetizeEmulatorController}();exports.default=AppetizeEmulatorController},480:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEEP_LINKS_EVENT_ID=void 0,exports.DEEP_LINKS_EVENT_ID="native-deep-links-add"},481:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||exports.hasOwnProperty(p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(317),exports),__exportStar(__webpack_require__(916),exports),__exportStar(__webpack_require__(917),exports),__exportStar(__webpack_require__(482),exports)},482:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDevices=exports.getDefaultDevice=void 0,exports.getDefaultDevice=function(platform){if("android"===platform)return"nexus5";if("ios"===platform)return"iphone12";throw new Error("No device for platform: "+platform)},exports.getDevices=function(platform){if("android"===platform)return["nexus5","nexus7","nexus9","pixel4","pixel4xl","pixel6","pixel6pro","galaxytabs7"];if("ios"===platform)return["ipadair","iphone6s","iphone6splus","ipadair2","iphone9","iphone11pro","iphone11promax","iphone12","iphone12mini","iphone12pro","iphone12promax"];throw new Error("No devices for platform: "+platform)}},503:function(module,exports,__webpack_require__){__webpack_require__(504),__webpack_require__(920),__webpack_require__(924),__webpack_require__(922),__webpack_require__(879),module.exports=__webpack_require__(919)},571:function(module,exports){},879:function(module,exports,__webpack_require__){__webpack_require__(880)},880:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),addons_1=__webpack_require__(58),components_1=__webpack_require__(19),native_controllers_1=__webpack_require__(881),deep_link_logger_1=__webpack_require__(314),native_types_1=__webpack_require__(315),react_fontawesome_1=__webpack_require__(913),free_solid_svg_icons_1=__webpack_require__(914),constants_1=__webpack_require__(316),DeviceSelector_1=__importDefault(__webpack_require__(915));addons_1.addons.register(constants_1.ADDON_ID,(function(api){var rotateLeft=function(){api.getChannel().emit(native_controllers_1.ACTION_EVENT_NAME,native_types_1.EmulatorActions.rotateLeft)},rotateRight=function(){api.getChannel().emit(native_controllers_1.ACTION_EVENT_NAME,native_types_1.EmulatorActions.rotateRight)},captureScreenshot=function(){api.getChannel().emit(native_controllers_1.ACTION_EVENT_NAME,native_types_1.EmulatorActions.saveScreenshot)};addons_1.addons.add(constants_1.ADDON_ID+"/rotateLeft",{type:addons_1.types.TOOL,title:"Rotate left",render:function(){return react_1.default.createElement(components_1.IconButton,{title:"Rotate left",onClick:rotateLeft},react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon,{size:"sm",icon:free_solid_svg_icons_1.faUndo}))}}),addons_1.addons.add(constants_1.ADDON_ID+"/rotateRight",{type:addons_1.types.TOOL,title:"Rotate right",render:function(){return react_1.default.createElement(components_1.IconButton,{title:"Rotate right",onClick:rotateRight},react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon,{size:"sm",icon:free_solid_svg_icons_1.faRedo}))}}),addons_1.addons.add(constants_1.ADDON_ID+"/captureScreenshot",{type:addons_1.types.TOOL,title:"Capture screenshot",render:function(){return react_1.default.createElement(components_1.IconButton,{title:"Capture screenshot",onClick:captureScreenshot},react_1.default.createElement(components_1.Icons,{icon:"camera"}))}}),addons_1.addons.add(constants_1.ADDON_ID+"/devicePicker",{type:addons_1.types.TOOL,title:"Select device",render:function(){return react_1.default.createElement(DeviceSelector_1.default,null)}}),addons_1.addons.add(constants_1.ADDON_ID+"/deepLinks/panel",{title:"Deep links",type:addons_1.types.PANEL,render:function(_a){var active=_a.active,key=_a.key;return react_1.default.createElement(deep_link_logger_1.DeepLinksContainer,{key:key,api:api,active:active})},paramKey:constants_1.DEEP_LINKS_PARAM_KEY})}))},881:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||exports.hasOwnProperty(p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(466),exports),__exportStar(__webpack_require__(467),exports),__exportStar(__webpack_require__(882),exports),__exportStar(__webpack_require__(220),exports),__exportStar(__webpack_require__(883),exports),__exportStar(__webpack_require__(884),exports),__exportStar(__webpack_require__(468),exports);var store_1=__webpack_require__(477);Object.defineProperty(exports,"store",{enumerable:!0,get:function(){return store_1.default}});var AppetizeEmulatorController_1=__webpack_require__(478);Object.defineProperty(exports,"AppetizeEmulatorController",{enumerable:!0,get:function(){return AppetizeEmulatorController_1.default}});var ControllerManager_1=__webpack_require__(909);Object.defineProperty(exports,"ControllerManager",{enumerable:!0,get:function(){return ControllerManager_1.default}})},882:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFullDeepLinkUrl=void 0;exports.getFullDeepLinkUrl=function(baseDeepLinkUrl,storyParams){var data;return baseDeepLinkUrl+"?"+(data=storyParams,Object.keys(data).map((function(key){return encodeURIComponent(key)+"="+encodeURIComponent(data[key])})).join("&"))}},883:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},884:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAppDispatch=void 0;var react_redux_1=__webpack_require__(921);exports.useAppDispatch=function(){return react_redux_1.useDispatch()}},904:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var constants_1=__webpack_require__(220),defaultState={loading:!1,commands:[]};exports.default=function(state,action){switch(void 0===state&&(state=defaultState),action.type){case constants_1.ActionTypes.PERFORM_COMMAND:return __assign(__assign({},state),{loading:!0});case constants_1.ActionTypes.COMMAND_SUCCESS:case constants_1.ActionTypes.COMMAND_ERROR:if(!action.payload)throw new Error("No payload for action: "+action.type);return __assign(__assign({},state),{loading:!1,commands:state.commands.concat(action.payload)});case constants_1.ActionTypes.RESET_COMMANDS:return __assign(__assign({},state),{commands:[]});default:return state}}},905:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logDeepLink=void 0;var addons_1=__webpack_require__(58),constants_1=__webpack_require__(480);exports.logDeepLink=function(url){addons_1.addons.getChannel().emit(constants_1.DEEP_LINKS_EVENT_ID,url)}},906:function(module,exports,__webpack_require__){"use strict";var __read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error:error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__spread=this&&this.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),components_1=__webpack_require__(19),constants_1=__webpack_require__(480),DeepLinksList_1=__importDefault(__webpack_require__(907));exports.default=function(_a){var api=_a.api,active=_a.active,_b=__read(react_1.default.useState([]),2),links=_b[0],setLinks=_b[1],addUrl=function(url){setLinks((function(allLinks){return __spread(allLinks,[url])}))};return react_1.default.useEffect((function(){return api.on(constants_1.DEEP_LINKS_EVENT_ID,addUrl),function(){api.off(constants_1.DEEP_LINKS_EVENT_ID,addUrl)}}),[]),react_1.default.createElement(components_1.AddonPanel,{key:"deep-links-panel",active:Boolean(active)},react_1.default.createElement(DeepLinksList_1.default,{links:links,onClear:function(){setLinks([])}}))}},907:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),theming_1=__webpack_require__(1),components_1=__webpack_require__(19),copy_to_clipboard_1=__importDefault(__webpack_require__(225)),DeepLinkDetails_1=__importDefault(__webpack_require__(908)),Wrapper=theming_1.styled((function(_a){var children=_a.children;return react_1.default.createElement(components_1.ScrollArea,{vertical:!0},children)}))({margin:0,padding:"10px 5px 20px"});exports.default=function(_a){var links=_a.links,onClear=_a.onClear;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(Wrapper,{title:"linksLogger"},links.map((function(link,index){return react_1.default.createElement(DeepLinkDetails_1.default,{key:link+"-"+index,link:link})}))),react_1.default.createElement(components_1.ActionBar,{actionItems:[{title:"Copy All",onClick:function(){copy_to_clipboard_1.default(JSON.stringify(links))}},{title:"Clear",onClick:onClear}]}))}},908:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),components_1=__webpack_require__(19),copy_to_clipboard_1=__importDefault(__webpack_require__(225));exports.default=function(_a){var link=_a.link;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{style:{display:"flex"}},react_1.default.createElement(components_1.Button,{style:{minWidth:"60px"},onClick:function(){copy_to_clipboard_1.default(link)}},"Copy"),react_1.default.createElement("div",{style:{marginLeft:"16px",alignSelf:"center"}},link)),react_1.default.createElement("hr",null))}},909:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var controllerFactory_1=__webpack_require__(910),ControllerManager=function(){function ControllerManager(){this.controllers=[]}return ControllerManager.prototype.createController=function(context){var controller=controllerFactory_1.getNewController(context);return controller.createEmulator(),this.controllers.push(controller),console.log("Created native storybook controller for context: "+context),controller},ControllerManager.prototype.sendMessageToControllers=function(options){this.controllers.forEach((function(controller){controller.sendMessage(options)}))},ControllerManager.prototype.getController=function(context){var result=this.controllers.find((function(controller){return controller.getContext()===context}));return result||this.createController(context)},ControllerManager}();exports.default=ControllerManager},910:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNewController=void 0;var AppetizeEmulatorController_1=__importDefault(__webpack_require__(478)),LocalEmulatorController_1=__importDefault(__webpack_require__(911));exports.getNewController=function(context){return Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).STORYBOOK_NATIVE_LOCAL_EMULATOR?new LocalEmulatorController_1.default(context):new AppetizeEmulatorController_1.default(context)}},911:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var native_types_1=__webpack_require__(315),lodash_1=__webpack_require__(479),deep_link_logger_1=__webpack_require__(314),commandsSlice_1=__webpack_require__(468),store_1=__webpack_require__(477),rotationUtils_1=__webpack_require__(912),LocalEmulatorController=function(){function LocalEmulatorController(context){var _this=this;this.emulatorContext=void 0,this.config=void 0,this.rotationMode=native_types_1.EmulatorRotation.vertical,this.openDeepLink=lodash_1.debounce((function(deepLinkUrl){_this.undebouncedOpenDeepLink(deepLinkUrl)}),400),this.emulatorContext=context}return LocalEmulatorController.prototype.updateRotation=function(newRotation){var _a;this.rotationMode=newRotation;var thunk=commandsSlice_1.performCommand("/rotation",{platform:null===(_a=this.config)||void 0===_a?void 0:_a.platform,rotationMode:newRotation});store_1.dispatchThunk(thunk)},LocalEmulatorController.prototype.saveScreenshot=function(){var _a,thunk=commandsSlice_1.performCommand("/screenshot",{platform:null===(_a=this.config)||void 0===_a?void 0:_a.platform});store_1.dispatchThunk(thunk)},LocalEmulatorController.prototype.sendMessage=function(_a){var message=_a.message;if(!this.config)throw new Error("No config was set for emulator: "+this.emulatorContext);if(message===native_types_1.EmulatorActions.rotateLeft){var newRotation=rotationUtils_1.getPreviousRotation(this.rotationMode);this.updateRotation(newRotation)}else if(message===native_types_1.EmulatorActions.rotateRight){newRotation=rotationUtils_1.getNextRotation(this.rotationMode);this.updateRotation(newRotation)}else message===native_types_1.EmulatorActions.saveScreenshot&&this.saveScreenshot()},LocalEmulatorController.prototype.createEmulator=function(){},LocalEmulatorController.prototype.undebouncedOpenDeepLink=function(deepLinkUrl){var _a;if(deep_link_logger_1.logDeepLink(deepLinkUrl),!this.config)throw new Error("No config was set for emulator: "+this.emulatorContext);var thunk=commandsSlice_1.performCommand("/deepLink",{platform:null===(_a=this.config)||void 0===_a?void 0:_a.platform,url:deepLinkUrl});store_1.dispatchThunk(thunk)},LocalEmulatorController.prototype.getContext=function(){return this.emulatorContext},LocalEmulatorController.prototype.updateConfig=function(config){this.config=config},LocalEmulatorController}();exports.default=LocalEmulatorController},912:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNextRotation=exports.getPreviousRotation=void 0;var native_types_1=__webpack_require__(315);exports.getPreviousRotation=function(rotation){var index=native_types_1.RotationsList.findIndex((function(val){return val===rotation}));return 0===index?native_types_1.RotationsList[native_types_1.RotationsList.length-1]:native_types_1.RotationsList[index-1]},exports.getNextRotation=function(rotation){var newIndex=(native_types_1.RotationsList.findIndex((function(val){return val===rotation}))+1)%native_types_1.RotationsList.length;return native_types_1.RotationsList[newIndex]}},915:function(module,exports,__webpack_require__){"use strict";var __read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error:error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),api_1=__webpack_require__(6),components_1=__webpack_require__(19),native_devices_1=__webpack_require__(481),constants_1=__webpack_require__(316),localStorageUtils_1=__webpack_require__(918);exports.default=function(){var savedState=localStorageUtils_1.restoreFromLocalStorage(localStorageUtils_1.DEFAULT_STATE),_a=__read(api_1.useAddonState(constants_1.ADDON_ID,savedState),2),state=_a[0],setState=_a[1],androidDevices=native_devices_1.getDevices("android"),iosDevices=native_devices_1.getDevices("ios"),saveState=function(s){setState(s),localStorageUtils_1.saveToLocalStorage(s)};return react_1.default.createElement(components_1.WithTooltip,{closeOnClick:!0,placement:"top",trigger:"click",tooltip:function(props){return react_1.default.createElement(components_1.TooltipLinkList,{links:androidDevices.map((function(device){return{id:device,title:device,onClick:function(){saveState({androidSelection:device,iosSelection:state.iosSelection}),props.onHide()},value:device,active:state.androidSelection===device,left:"Android"}})).concat(iosDevices.map((function(device){return{id:device,title:device,onClick:function(){saveState({androidSelection:state.androidSelection,iosSelection:device}),props.onHide()},value:device,active:state.iosSelection===device,left:"iOS"}})))})}},react_1.default.createElement(components_1.IconButton,{title:"Select device"},react_1.default.createElement(components_1.Icons,{icon:"tablet"})))}},916:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeviceWrapper=void 0;var react_1=__importDefault(__webpack_require__(0)),DeviceContext_1=__webpack_require__(317);exports.DeviceWrapper=function(_a){var children=_a.children,value=__rest(_a,["children"]),context=react_1.default.useContext(DeviceContext_1.DeviceContext);return react_1.default.createElement(DeviceContext_1.DeviceContext.Provider,{value:__assign(__assign({},context),value)},children)}},917:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useDevice=void 0;var react_1=__importDefault(__webpack_require__(0)),DeviceContext_1=__webpack_require__(317);exports.useDevice=function(platform){var state=react_1.default.useContext(DeviceContext_1.DeviceContext);return"android"===platform?state.androidSelection:state.iosSelection}},918:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.restoreFromLocalStorage=exports.saveToLocalStorage=exports.DEFAULT_STATE=void 0;var native_devices_1=__webpack_require__(481),constants_1=__webpack_require__(316);exports.DEFAULT_STATE={androidSelection:native_devices_1.getDefaultDevice("android"),iosSelection:native_devices_1.getDefaultDevice("ios")},exports.saveToLocalStorage=function(data){window.localStorage.setItem(constants_1.LOCAL_STORAGE_KEY,JSON.stringify(data))},exports.restoreFromLocalStorage=function(state){var data=window.localStorage.getItem(constants_1.LOCAL_STORAGE_KEY);if(!data)return __assign(__assign({},exports.DEFAULT_STATE),state);var androidDevices=native_devices_1.getDevices("android"),iosDevices=native_devices_1.getDevices("ios"),storedSelections=JSON.parse(data);return androidDevices.includes(storedSelections.androidSelection)||(storedSelections.androidSelection=native_devices_1.getDefaultDevice("android")),iosDevices.includes(storedSelections.iosSelection)||(storedSelections.iosSelection=native_devices_1.getDefaultDevice("ios")),storedSelections}},919:function(module,exports,__webpack_require__){"use strict";__webpack_require__(58).addons.setConfig({refs:{}})}},[[503,2,3]]]);