(window.webpackJsonp=window.webpackJsonp||[]).push([["7e2c"],{"4QDq":function(e,t,n){"use strict";n.d(t,"p",function(){return i}),n.d(t,"j",function(){return a}),n.d(t,"a",function(){return u}),n.d(t,"l",function(){return c}),n.d(t,"m",function(){return s}),n.d(t,"n",function(){return d}),n.d(t,"q",function(){return l}),n.d(t,"r",function(){return p}),n.d(t,"v",function(){return f}),n.d(t,"s",function(){return r}),n.d(t,"t",function(){return h}),n.d(t,"g",function(){return b}),n.d(t,"o",function(){return _}),n.d(t,"h",function(){return g}),n.d(t,"c",function(){return v}),n.d(t,"b",function(){return m}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return I}),n.d(t,"i",function(){return E}),n.d(t,"u",function(){return O}),n.d(t,"e",function(){return N}),n.d(t,"k",function(){return T});var r,o,i=64,a=80,u=48,c=48,s=32,d=344,l=400,p=480,f={container:5,flyoutMenu:10,flyoutMenuMask:15,logo:20};(o=r=r||{}).Default="default",o.Light="light",o.Dark="dark",o.Hackberry="hackberry",o.Luxe="luxe",o.Purplerain="purplerain",o.Babu="babu",o.Plusberry="plusberry";Object.values(r);var h={StepsNavigation:"stepsNavigation"},b=1340,_={withNavigation:"@media (min-width: ".concat(1075,"px)"),withoutNavigation:"@media (max-width: ".concat(1074,"px)")},g={login:"login",loginComplete:"login:complete",logout:"logout",setNotification:"header:setNotification",removeNotification:"header:removeNotification",setUserProfilePicture:"header:setUserProfilePicture",clearUserProfilePicture:"header:clearUserProfilePicture",toggleNavigationMenuItem:"header:toggleNavigationMenuItem",updateUserCurrency:"header:updateUserCurrency"},v=108e5,m=216e5,y=864e5,I=216e5,E={EXPERIENCES:0,RESOURCES:1,CALENDAR:2,INBOX:3,DASHBOARD:4,REVIEWS:5},O="1_month",N="header_userpic_url",T={TOGGLE_GUEST:"fieldGuide:toggleGuest",TOGGLE_HOST:"fieldGuide:toggleHost"}},BsrZ:function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p});var r=n("q1tI"),i=n.n(r),o=n("kjyK"),a=n("d+R9"),u=n("RAqi"),c=n("hUZ1");function s(e){var t=e.css,n=e.height,r=e.styles;return i.a.createElement("div",t(r.container,{height:n}),i.a.createElement(o.a,null))}function d(){return null}n.d(t,"c",function(){return c.b});var l=Object(a.c)(function(e){return{container:{backgroundColor:e.color.white,position:"relative"}}})(s);s.defaultProps={height:300};var p=function(r){function e(e,t){var n;return(n=r.call(this,e)||this).promise=null,n.state={Component:e.loader.value||null},e.loadReady&&Object(u.b)(e.loader,t),n}babelHelpers.inheritsLoose(e,r);var t=e.prototype;return t.componentDidMount=function(){this.props.loadReady&&this.loadComponent()},t.UNSAFE_componentWillReceiveProps=function(e){!this.props.loadReady&&e.loadReady&&this.loadComponent()},t.componentWillUnmount=function(){this.promise=null},t.loadComponent=function(){var t=this,e=this.props,n=e.loader,r=e.onComponentFinishLoading;this.state.Component?this.props.onComponentFinishLoading():(this.promise=n(),this.promise.then(function(e){t.promise&&t.setState({Component:e},r)}))},t.render=function(){var e=this.state.Component,t=this.props,n=t.renderPlaceholder,r=t.placeholderHeight,o=(t.loader,t.onComponentFinishLoading,t.loadReady,babelHelpers.objectWithoutProperties(t,["renderPlaceholder","placeholderHeight","loader","onComponentFinishLoading","loadReady"]));return e?i.a.createElement(e,o):n?n(this.props):i.a.createElement(l,{height:r})},e}(i.a.PureComponent);p.contextTypes=babelHelpers.objectSpread({},u.a),p.defaultProps={onComponentFinishLoading:function(){},placeholderHeight:null,renderPlaceholder:null,loadReady:!0}},ISt3:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return a});var r=6,o=3,i={INITIAL:0,LOADING:1,SUCCESS:2,ERROR:3},a={COHOSTING_INVITATION_RECEIVED:117,COHOSTING_INVITATION_ACCEPTED:118,ACTION_NOTIFICATION:180}},IsoZ:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return f});var r=n("j/eu"),s=n.n(r),o=n("ISt3");function i(e){return e.thread_url||"/z/q/".concat(e.id)}function a(e){return e===o.a.COHOSTING_INVITATION_RECEIVED||e===o.a.COHOSTING_INVITATION_ACCEPTED}function u(e,t,n){var r=t.id,o=t.type,i=(2<arguments.length&&void 0!==n?n:{}).queue,a=void 0!==i&&i;s.a.logEvent({event_name:"cohost_notification_dropdown",queue:a,debounce:!a,event_data:{operation:e,page:"host_dashboard",section:"view_dashboard",notification_type:o,notification_id:r}})}function c(e,t,n){var r=t.actionNotificationType,o=t.id,i=t.isUnread,a=t.type,u=(2<arguments.length&&void 0!==n?n:{}).queue,c=void 0!==u&&u;s.a.logEvent({event_name:"magical_trips",queue:c,debounce:!c,event_data:{operation:e,page:"notification_menu",section:"dashboard_alerts",alert_id:o,alert_type:a,action_notification_type:r,viewed:!i}})}function d(e,t){s.a.logEvent({event_name:"magical_trips",queue:!0,event_data:{operation:"click_dashboard",page:"notification_menu",section:"dashboard_alerts",total_notifications:e,visible_notifications:t}})}function l(e){var t=e.actionNotificationType,n=e.id,r=e.isUnread,o=e.type;a(o)&&u("impression",{id:n,type:o}),c("impression",{actionNotificationType:t,id:n,isUnread:r,type:o})}function p(e){var t=e.actionNotificationType,n=e.id,r=e.isUnread,o=e.type;a(o)&&u("click",{id:n,type:o},{queue:!0}),c("click_open",{actionNotificationType:t,id:n,isUnread:r,type:o},{queue:!0})}function f(e){var t=e.actionNotificationType,n=e.id,r=e.isUnread,o=e.type;a(o)&&u("click_dismiss",{id:n,type:o}),c("click_dismiss",{actionNotificationType:t,id:n,isUnread:r,type:o})}},SRvz:function(e,t,n){"use strict";n.d(t,"j",function(){return f}),n.d(t,"e",function(){return h}),n.d(t,"g",function(){return b}),n.d(t,"f",function(){return _}),n.d(t,"l",function(){return g}),n.d(t,"m",function(){return v}),n.d(t,"o",function(){return m}),n.d(t,"n",function(){return y}),n.d(t,"k",function(){return I}),n.d(t,"i",function(){return E}),n.d(t,"h",function(){return O}),n.d(t,"c",function(){return N}),n.d(t,"a",function(){return T}),n.d(t,"b",function(){return S}),n.d(t,"d",function(){return C}),n.d(t,"t",function(){return j}),n.d(t,"u",function(){return P}),n.d(t,"A",function(){return A}),n.d(t,"q",function(){return k}),n.d(t,"C",function(){return H}),n.d(t,"y",function(){return L}),n.d(t,"r",function(){return U}),n.d(t,"p",function(){return w}),n.d(t,"z",function(){return R}),n.d(t,"x",function(){return x}),n.d(t,"v",function(){return D}),n.d(t,"w",function(){return G}),n.d(t,"B",function(){return M}),n.d(t,"s",function(){return F});var r=n("DhiP"),o=n.n(r),i=n("zLbU"),u=n.n(i),a=n("tl9J"),c=n.n(a),s=n("raNa"),d=n("4QDq"),l=n("StLt"),p=n("giB4"),f="header/SEARCH_INPUT_FOCUS",h="header/NAVIGATION_CHANGE_COLOR_THEME",b="header/NAVIGATION_ITEM_SELECT",_="header/NAVIGATION_ITEM_DESELECT",g="header/USER_LOGIN",v="header/USER_LOGOUT",m="header/USER_PROFILE_PICTURE_SET",y="header/USER_PROFILE_PICTURE_CLEAR",I="header/USER_CURRENCY_UPDATE",E="header/NOTIFICATION_SET",O="header/NOTIFICATION_REMOVE",N="header/FLYOUT_MENU_TOGGLE",T="header/ACTION_NOTIFICATION_REMOVE",S="header/DASHBOARD_ALERT_REMOVE",C="header/messages/LOAD";function j(){var a=o.a.current();return function(i){return Promise.all([Object(l.a)()?u.a.get("/v2/get_travel_guides_by_user",{data:{user_id:o.a.current().id}}).catch(function(){return{travelGuides:[]}}):Promise.resolve({travelGuides:[]}),o.a.fetchProfileImg(),Object(p.g)()]).then(function(e){var t=babelHelpers.slicedToArray(e,3),n=t[0],r=t[1],o=t[2];i({type:g,payload:{name:a.name,isHost:o,profilePicUrl:r,currency:a.curr,guidebooksCount:n&&n.travelGuides&&n.travelGuides.length}})})}}function P(){return{type:v}}function A(e){var t;return t=e,c()(d.e,t,{expires:d.f}),{type:m,payload:e}}function k(){return c()(d.e,null),{type:y}}function H(e){return{type:I,payload:e}}function L(e){return{type:b,payload:e}}function U(){return{type:_}}function w(e){return{type:h,payload:{dynamicColorTheme:e}}}function R(e){return{type:E,payload:e}}function x(e){return{type:O,payload:e}}function q(e){var t=e.actionType,n=e.id,r=e.endpoint;return n?{type:t,payload:{id:n},promise:new Promise(function(e,t){return u.a.deleteRequest(r).then(e,t)})}:null}function D(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).id;return q({actionType:T,id:e,endpoint:"/v2/action_notifications/".concat(e)})}function G(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).id;return q({actionType:S,id:e,endpoint:"/v2/dashboard_alerts/".concat(e)})}function M(){return{type:N}}function F(){var e=new Promise(function(e,t){return(new s.a).get("/threads",{query:{role:"unread",include_support_messaging_threads:!0,include_mt:!0,include_luxury_assisted_booking_threads:!0,include_plus_onboarding_threads:!0,include_generic_bessie_threads:!0,_format:"for_web_notifications",_limit:3}}).get("/dashboard_alerts",{query:{scope:"notifications",_format:"for_web_notifications",_intents:"web_show_alerts"}}).submit().then(e,t)});return{type:C,promise:e}}},StLt:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("ILXQ"),o=n.n(r),i=n("Ri7V");function a(){return!!i.a.getBootstrap("guidebook.user_profile_dropdown.force")||!!i.a.getBootstrap("guidebook.user_profile_dropdown")&&o.a.deliverExperiment("guidebook_user_profile_dropdown",{treatment:function(){return!0},control:function(){return!1},treatment_unknown:function(){return!1}})}},U4Lj:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("6pYc"),o=n.n(r),i=n("4QDq"),a=n("SRvz");function u(t){o.a.on(i.h.loginComplete,function(){t(Object(a.t)())}),o.a.on(i.h.logout,function(){t(Object(a.u)())}),o.a.on(i.h.setNotification,function(e){t(Object(a.z)(e))}),o.a.on(i.h.removeNotification,function(e){t(Object(a.x)(e))}),o.a.on(i.h.setUserProfilePicture,function(e){t(Object(a.A)(e))}),o.a.on(i.h.clearUserProfilePicture,function(){t(Object(a.q)())}),o.a.on(i.h.toggleNavigationMenuItem,function(e){t(Object(a.y)(e))}),o.a.on(i.h.updateUserCurrency,function(e){t(Object(a.C)(e))})}},"Z9/e":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n("IsoZ");function o(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return{id:e.id,imageUrl:e.other_user.thumbnail_url,isUnread:e.unread,lastMessageTime:e.last_message_at,link:Object(r.e)(e),otherUserId:e.other_user.id,otherUserName:e.inquiry_property_listing&&e.inquiry_property_listing.name||e.other_user.name,replaceProfilePhotoWithInitial:e.replace_profile_photo_with_initial,text:e.text_preview,showDiscriminatoryLanguageWarning:e.show_discriminatory_language_warning}})}function i(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return{actionNotificationType:e.action_notification_type,backgroundCircleClass:e.notification_background_circle_class,id:e.id,imageUrl:e.notification_image_url,isUnread:!e.viewed,link:e.notification_url,removable:e.removable,staticImageCategory:e.notification_static_image_category,text:e.notification_text,type:e.alert_type}})}},ZesN:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("/MKj");function r(e,t,n,r){var o=Object(i.b)(e,t||{},n,r);return function(e){var t=o(e),n=t.prototype.addExtraProps;return t.prototype.addExtraProps=function(e){var t=n.call(this,e);t.store,t.storeSubscription;return babelHelpers.objectWithoutProperties(t,["store","storeSubscription"])},t.contextTypes&&t.contextType&&delete t.contextType,t}}},aKdO:function(e,t,n){"use strict";var r=n("q1tI"),l=n.n(r),o=n("cVPA"),p=n.n(o),i=n("d+R9"),f=n("CXQn"),h=n("Kz6n"),b=n("O3M+"),_=n("5yCp"),g=n("4QDq");function a(e){var t=e.css,n=e.onHomeNavigation,r=e.onPress,o=e.styles,i=e.text,a=e.colorTheme,u=e.menuIndicatorIsActive,c=e.disableFlyoutMenu,s=l.a.createElement("div",t(o.content),l.a.createElement("div",t(o.logo),l.a.createElement("div",t(o.icon,a===g.s.Light&&o.color_light,a===g.s.Dark&&o.color_dark,a===g.s.Hackberry&&o.color_hackberry,a===g.s.Luxe&&o.color_luxe,a===g.s.Plusberry&&o.color_plusberry,a===g.s.Purplerain&&o.color_purplerain),l.a.createElement(h.default,{decorative:!0})),i&&l.a.createElement("div",t(o.text,a===g.s.Light&&o.color_light,a===g.s.Dark&&o.color_dark),i)),!c&&l.a.createElement(b.a,{inline:!0,breakpoint:"largeAndAbove"},l.a.createElement("div",t(o.menuIndicator,a===g.s.Light&&o.color_light,a===g.s.Dark&&o.color_dark),l.a.createElement(f.a,{isActive:u})))),d=l.a.createElement("a",babelHelpers.extends({href:"/?logo=1"},t(o.container),{onClick:n,"aria-label":p.a.t("header.accessible text for Airbnb logo that links to the homepage")}),s);return l.a.createElement("div",null,c&&d,!c&&l.a.createElement(_.a,{breakpoint:"largeAndAbove"},d),!c&&l.a.createElement(b.a,{breakpoint:"largeAndAbove"},l.a.createElement("button",babelHelpers.extends({onClick:r,"aria-label":p.a.t("header.accessible text for Airbnb logo button that opens flyout navigation menu"),"aria-haspopup":!0},t(o.container,o.container_button),{type:"button"}),s)))}a.defaultProps={colorTheme:null,disableFlyoutMenu:!1,menuIndicatorIsActive:!1,onHomeNavigation:function(){},onPress:function(){},text:null},t.a=Object(i.c)(function(e){var t=e.dls19,n=e.font,r=e.color,o=e.responsive,i=e.unit;return{container:{display:"table-cell"},container_button:{appearance:"none",background:"none",border:"none",padding:0,margin:0,":focus":{outline:"none"}},content:babelHelpers.defineProperty({display:"table-cell",height:g.p,position:"relative",textAlign:"center",textDecoration:"none",transition:"0.25s color",paddingLeft:3*i,paddingRight:3*i,verticalAlign:"middle",whiteSpace:"nowrap"},o.mediumAndAbove,{height:g.j}),logo:{display:"inline-block"},text:babelHelpers.objectSpread({},n.textLarge,{display:"inline-block",marginLeft:1*i,color:r.core.rausch,verticalAlign:"middle"}),icon:babelHelpers.defineProperty({color:r.core.rausch,display:"inline-block",verticalAlign:"middle",fontSize:34,transition:"0.25s color"},o.small,{fontSize:34,left:"45%"}),menuIndicator:babelHelpers.defineProperty({color:r.textMuted,display:"inline-block",fontSize:9,marginLeft:i,transition:"1s color"},o.print,{display:"none"}),color_dark:{color:r.core.hof},color_hackberry:{color:t.palette.hackberry},color_light:{color:r.white},color_luxe:{color:t.palette.luxe},color_plusberry:{color:r.core.plusberry},color_purplerain:{color:r.brand.luxury}}},{pureComponent:!0})(a)},giB4:function(e,t,n){"use strict";n.d(t,"m",function(){return g}),n.d(t,"n",function(){return v}),n.d(t,"o",function(){return m}),n.d(t,"p",function(){return y}),n.d(t,"h",function(){return I}),n.d(t,"l",function(){return E}),n.d(t,"e",function(){return O}),n.d(t,"b",function(){return N}),n.d(t,"k",function(){return T}),n.d(t,"j",function(){return S}),n.d(t,"d",function(){return C}),n.d(t,"f",function(){return j}),n.d(t,"c",function(){return P}),n.d(t,"q",function(){return k}),n.d(t,"i",function(){return H}),n.d(t,"g",function(){return L}),n.d(t,"a",function(){return U});var r=n("j/eu"),o=n.n(r),i=n("6pYc"),a=n.n(i),u=n("DhiP"),c=n.n(u),s=n("tl9J"),d=n.n(s),l=n("zLbU"),p=n.n(l),f=n("2jR3"),h=n("4QDq"),b=n("U4Lj"),_=n("SRvz");function g(e){o.a.queueEvent({event_name:"header_nav",event_data:{sub_event:e,operation:"click",datadog_key:"header_nav.".concat(e),datadog_count:1,datadog_tags:["operation:click","header:new"]}})}function v(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];o.a.queueEvent({event_name:"small_header",event_data:{page:"flyout_view",section:e,operation:t,datadog_key:"small_header.".concat(e),datadog_count:1,datadog_tags:["operation:".concat(t),"login:".concat(n)]}})}function m(e){o.a.logEvent({event_name:"header_nav",event_data:{sub_event:e,operation:"hover",datadog_key:"header_nav.".concat(e),datadog_count:1,datadog_tags:["operation:hover","header:new"]}})}function y(e){o.a.logEvent({event_name:"header_nav",event_data:{sub_event:e,operation:"impression",datadog_key:"header_nav.".concat(e),datadog_count:1,datadog_tags:["operation:impression","header:new"]}})}function I(){a.a.emit(h.k.TOGGLE_GUEST)}function E(){return c.a.isLoggedIn()?"qualified_for_hosting_services_".concat(c.a.current().id):"qualified_for_hosting_services"}function O(){return new Promise(function(n){p.a.get("/v2/check_ip_qualifies_for_hosting_services").then(function(e){var t=e.qualified;d()(E(),t,{expires:h.d}),n(t)})})}function N(){return c.a.isLoggedIn()?"experience_host_".concat(c.a.current().id):"experience_host"}function T(e){return e&&0!==e.length?e:null}function S(){return d()(N())&&d()(N()).includes(h.i.CALENDAR)}function C(){return new Promise(function(n){p.a.get("/v2/experiences_users/".concat(c.a.current().id,"?_format=for_host_entry")).then(function(e){var t=e.experiences_user.host_tabs.map(function(e){return h.i[e]});d()(N(),t,{expires:h.b}),n(t)})})}function j(){return new Promise(function(r){p.a.get("/v2/users/".concat(c.a.current().id,"?_format=for_travel_credit_status")).then(function(e){var t,n=null!=(t=e)&&null!=(t=t.user)?t.travel_credit_status:t;r(n)})})}function P(){return c.a.isLoggedIn()?p.a.get("/v2/users/me",{data:{_format:"for_a4w_header"}}).then(function(e){var t=e.user;return{businessTravelManager:t.business_travel_manager,isBookerDashboardLaunched:t.is_booker_dashboard_launched}}).catch(function(e){Object(f.a)("Error retrieving A4W header fields",{extra:{error:e}})}):Promise.resolve({businessTravelManager:!1,isBookerDashboardLaunched:!1})}function A(e){var t="".concat(e,"_").concat(c.a.current().curr);return c.a.isLoggedIn()?"".concat(t,"_").concat(c.a.current().id):"".concat(t)}function k(){return A("wmpw_become_a_host")}function H(){return A("host_a_home_wmpw")}function L(){return p.a.get("/v2/users/me",{data:{_format:"for_host_navigation"}}).then(function(e){return e.user.is_host}).catch(function(e){return Object(f.a)("Error fetching host navigation field",{extra:{error:e}})})}function U(e){var t,n;Object(b.a)(e.dispatch),n=((t=e).getState().header||{}).user,!c.a.isLoggedIn()||!n||!1!==n.isLoggedIn&&n.name&&n.profilePicUrl||t.dispatch(Object(_.t)())}},lxjy:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("DhiP"),u=n.n(r),c=n("YTWJ"),s=n("SRvz"),d=n("Z9/e"),l=n("ISt3"),p={user:{isLoggedIn:!1,profilePicUrl:null,name:null,currency:null},dynamicColorTheme:null,activeNavigationItem:null,navigationItemsWithNotifications:new Set,flyoutMenuIsOpen:!1,messageNotifications:{dashboardAlertCount:0,messages:[],notifications:[],status:l.d.INITIAL,unreadMessageCount:0}};function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p,t=1<arguments.length?arguments[1]:void 0,n=t.type,o=t.payload,r=e;switch(r.hydrated||(r=babelHelpers.objectSpread({},p,{},r,{hydrated:!0})),n){case s.j:return babelHelpers.objectSpread({},r,{activeNavigationItem:null});case s.g:return babelHelpers.objectSpread({},r,{activeNavigationItem:r.activeNavigationItem===o?null:o});case s.f:return babelHelpers.objectSpread({},r,{activeNavigationItem:null});case s.e:return babelHelpers.objectSpread({},r,{dynamicColorTheme:o.dynamicColorTheme});case s.l:return babelHelpers.objectSpread({},r,{user:babelHelpers.objectSpread({},r.user,{name:o.name,profilePicUrl:o.profilePicUrl,isHost:o.isHost,currency:o.currency,isLoggedIn:!0,guidebooksCount:o.guidebooksCount}),flyoutMenuIsOpen:!1});case s.m:return babelHelpers.objectSpread({},r,{user:babelHelpers.objectSpread({},r.user,{isLoggedIn:!1})});case s.o:return babelHelpers.objectSpread({},r,{user:babelHelpers.objectSpread({},r.user,{profilePicUrl:o})});case s.n:return babelHelpers.objectSpread({},r,{user:babelHelpers.objectSpread({},r.user,{profilePicUrl:null})});case s.k:return babelHelpers.objectSpread({},r,{user:babelHelpers.objectSpread({},r.user,{currency:o})});case s.i:var i=r.navigationItemsWithNotifications;return i.has(o)?r:(i.add(o),babelHelpers.objectSpread({},r,{navigationItemsWithNotifications:i}));case s.h:var a=r.navigationItemsWithNotifications;return a.has(o)?(a.delete(o),babelHelpers.objectSpread({},r,{navigationItemsWithNotifications:a})):r;case s.c:return babelHelpers.objectSpread({},r,{flyoutMenuIsOpen:!r.flyoutMenuIsOpen});case s.a:case s.b:return Object(c.handle)(r,t,{start:function(e){var t=o.id,n=e.messageNotifications.notifications.slice(),r=n.findIndex(function(e){return e.id===t});return-1<r&&n.splice(r,1),babelHelpers.objectSpread({},e,{messageNotifications:babelHelpers.objectSpread({},e.messageNotifications,{notifications:n})})}});case s.d:return Object(c.handle)(r,t,{start:function(e){return babelHelpers.objectSpread({},e,{messageNotifications:babelHelpers.objectSpread({},e.messageNotifications,{status:l.d.LOADING})})},success:function(e){var t=o.operations;if(!t||2===!t.length)return e;var n=u.a.current();return babelHelpers.objectSpread({},e,{messageNotifications:babelHelpers.objectSpread({},e.messageNotifications,{dashboardAlertCount:n.num_alert,messages:Object(d.a)(t[0].response.threads),notifications:Object(d.b)(t[1].response.dashboard_alerts),status:l.d.SUCCESS,unreadMessageCount:n.num_msg})})},failure:function(e){return babelHelpers.objectSpread({},e,{messageNotifications:babelHelpers.objectSpread({},e.messageNotifications,{status:l.d.ERROR})})}});default:return r}}},raNa:function(e,t,n){"use strict";var r=n("zLbU"),o=n.n(r),i=n("YejT"),a=n.n(i),u=function(){function e(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.request={_transaction:!!e,operations:[]}}var t=e.prototype;return t.addOperation=function(e,t,n){var r=2<arguments.length&&void 0!==n?n:{};if(!e)throw new TypeError("must define a method");if(!t)throw new TypeError("must define an API path");return this.request.operations.push(babelHelpers.objectSpread({},r,{method:e,path:t})),this},t.submit=function(e){var t=0<arguments.length&&void 0!==e?e:{};return a.a.ajax(babelHelpers.objectSpread({type:"POST",url:o.a.getUrl("/v2/batch"),dataType:"json",contentType:"application/json",data:JSON.stringify(this.request)},t))},t.options=function(e,t){return this.addOperation("OPTIONS",e,t)},t.get=function(e,t){return this.addOperation("GET",e,t)},t.put=function(e,t){return this.addOperation("PUT",e,t)},t.post=function(e,t){return this.addOperation("POST",e,t)},t.patch=function(e,t){return this.addOperation("PATCH",e,t)},t.delete=function(e,t){return this.addOperation("DELETE",e,t)},e}();t.a=u}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/7e2c-cdab5611.js.map