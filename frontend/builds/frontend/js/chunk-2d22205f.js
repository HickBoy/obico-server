(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22205f"],{cd9a:function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",{staticClass:"slack"},[t("h2",{staticClass:"section-title"},[e._v("Email")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col col-form-label"},[t("saving-animation",{attrs:{errors:e.errorMessages.alert_by_email,saving:e.saving.alert_by_email}},[t("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.alert_by_email,expression:"user.alert_by_email"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_alert_by_email"},domProps:{checked:Array.isArray(e.user.alert_by_email)?e._i(e.user.alert_by_email,null)>-1:e.user.alert_by_email},on:{change:[function(i){var t=e.user.alert_by_email,a=i.target,r=!!a.checked;if(Array.isArray(t)){var s=null,n=e._i(t,s);a.checked?n<0&&e.$set(e.user,"alert_by_email",t.concat([s])):n>-1&&e.$set(e.user,"alert_by_email",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"alert_by_email",r)},function(i){return e.$emit("updateSetting","alert_by_email")}]}}),t("label",{staticClass:"custom-control-label",attrs:{for:"id_alert_by_email"}},[e._v(" Send failure alerts to all verified email addresses ")])])])],1)]),t("div",{staticClass:"row"},[t("div",{staticClass:"col col-form-label"},[t("saving-animation",{attrs:{errors:e.errorMessages.print_notification_by_email,saving:e.saving.print_notification_by_email}},[t("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.print_notification_by_email,expression:"user.print_notification_by_email"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_print_notification_by_email"},domProps:{checked:Array.isArray(e.user.print_notification_by_email)?e._i(e.user.print_notification_by_email,null)>-1:e.user.print_notification_by_email},on:{change:[function(i){var t=e.user.print_notification_by_email,a=i.target,r=!!a.checked;if(Array.isArray(t)){var s=null,n=e._i(t,s);a.checked?n<0&&e.$set(e.user,"print_notification_by_email",t.concat([s])):n>-1&&e.$set(e.user,"print_notification_by_email",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"print_notification_by_email",r)},function(i){return e.$emit("updateSetting","print_notification_by_email")}]}}),t("label",{staticClass:"custom-control-label",attrs:{for:"id_print_notification_by_email"}},[e._v(" Send print job notifications to all verified email addresses ")])])])],1)])])},r=[],s=t("847e"),n={name:"EmailNotifications",components:{SavingAnimation:s["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0}}},l=n,o=t("2877"),c=Object(o["a"])(l,a,r,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22205f.js.map