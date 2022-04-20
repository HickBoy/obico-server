(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213327"],{ac3b:function(i,o,t){"use strict";t.r(o);var s=function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("section",{staticClass:"discord"},[t("h2",{staticClass:"section-title"},[i._v("Discord")]),i._m(0),t("br"),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 col-sm-3 col-form-label",attrs:{for:"id_discord_webhook"}},[i._v("Webhook URL")]),t("div",{staticClass:"col-md-10 col-sm-9 col-form-label"},[t("saving-animation",{attrs:{errors:i.errorMessages.discord_webhook,saving:i.saving.discord_webhook}},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.user.discord_webhook,expression:"user.discord_webhook"}],staticClass:"form-control",attrs:{type:"text",maxlength:"256",placeholder:"Discord Webhook",id:"id_discord_webhook"},domProps:{value:i.user.discord_webhook},on:{input:function(o){o.target.composing||i.$set(i.user,"discord_webhook",o.target.value)}}})])],1)]),t("div",{staticClass:"form-group row"},[t("div",{staticClass:"col-md-10 offset-md-2 col-sm-9 offset-sm-3 col-form-label"},[t("saving-animation",{attrs:{errors:i.errorMessages.print_notification_by_discord,saving:i.saving.print_notification_by_discord}},[t("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.user.print_notification_by_discord,expression:"user.print_notification_by_discord"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_print_notification_by_discord"},domProps:{checked:Array.isArray(i.user.print_notification_by_discord)?i._i(i.user.print_notification_by_discord,null)>-1:i.user.print_notification_by_discord},on:{change:[function(o){var t=i.user.print_notification_by_discord,s=o.target,e=!!s.checked;if(Array.isArray(t)){var r=null,c=i._i(t,r);s.checked?c<0&&i.$set(i.user,"print_notification_by_discord",t.concat([r])):c>-1&&i.$set(i.user,"print_notification_by_discord",t.slice(0,c).concat(t.slice(c+1)))}else i.$set(i.user,"print_notification_by_discord",e)},function(o){return i.$emit("updateSetting","print_notification_by_discord")}]}}),t("label",{staticClass:"custom-control-label",attrs:{for:"id_print_notification_by_discord"}},[i._v(" Send print job notifications via Discord Webhook ")])])]),t("small",{staticClass:"text-muted"},[i._v("You will always be alerted via Discord on print failures.")])],1)])])},e=[function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("small",{staticClass:"form-text text-muted"},[i._v(" If you have a Discord channel you wish to receive notifications on, you can "),t("a",{attrs:{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"}},[i._v("generate webhook url")]),i._v(" and enter it here. ")])}],r=t("847e"),c={name:"DiscordNotifications",components:{SavingAnimation:r["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0}}},n=c,a=t("2877"),d=Object(a["a"])(n,s,e,!1,null,null,null);o["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d213327.js.map