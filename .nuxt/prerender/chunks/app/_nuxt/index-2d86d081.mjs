import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, ref } from 'file://D:/myPortFolioWebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://D:/myPortFolioWebSite/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _imports_0$4 } from './login-1e2d03aa.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/h3/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/ofetch/dist/node.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/destr/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/hookable/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/scule/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/klona/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/defu/dist/defu.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/ohash/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unstorage/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://D:/myPortFolioWebSite/node_modules/ipx/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unctx/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unhead/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/vue-i18n/index.mjs';

const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    dir: "auto",
    class: "flex flex-col p-4 gap-8 w-full",
    id: "ContactMe"
  }, _attrs))} data-v-597732e9><h3 class="f28-700" dir="auto" data-v-597732e9>${ssrInterpolate(_ctx.$t("About", { name: "About" }))}</h3><p class="f22-400 text-[#565656]" dir="auto" data-v-597732e9>${ssrInterpolate(_ctx.$t("Introduction", { name: "Introduction" }))}</p><p class="14-400 pararaph-about-me" dir="auto" data-v-597732e9>${ssrInterpolate(_ctx.$t("description", { name: "description" }))}</p></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/aboutMe.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-597732e9"]]);
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAU3VuIDIzIEp1bCAyMDIzIDA4OjI4OjM5IEFNICswMzMwkOLgewAAArlJREFUWIXtl01IFGEcxn+z43646rZ+lq5hllGmZVEQXZI85K08BZ2DgoIOHbpGGh2CLkEZdOnjUEFEqHh1lT4gKhMPuuphhWzXdGJz3c/ZfaeDX407syimROxz+z/zzPub933/vDMjaZqmscWybDUwB81B/2NoXKjc9HcRF+rWQOdSMXqVYV7PfKFXGWYuFdt8qD+u8CgwAMCjwAD+uPLXoGhZNJMMa4c+3tBmkuFssXVLMjp7r028pC/kA0BoAou0sCAt7v3crTu34YkaLm9dfgVCEwhNLIOFJqjLr9gw0BR6tuwwEpLOk5A4U9a0eVCPvZijRTU675hrFx57sc57HHzHaDTA21/jdE55eTM7yKwa5uF3L5F0whSaZ2R6Qz7GYtM6zxcN0h/y0ezet+zd/9bH7PZ5JuMKA6ExahylpLQ0nVNeWksaqZXta4cmhEp6cT+XJDSNhEjpPEmCZ8EPy/VkXKHD37NwzXSeJsvbWtLIrdo2nddR28bpkgadd7Cg2nDQcmsRO2zb1gcFmEvHdXV4VQ1wb+95DhRUAfCi4RLl1iLceU6e1l/AYbGuH/pTjehqRZ3PyBTIdqoXm6vGUYo7z4lLdlBld5sCwWRPAcZXNdJE7IdhLrb4Mjjx+TYAFTZXVmBWaIFs57hr93LtlG2GuT2OcpKulQYrNOnYP2V4DKpaGlVLZ4StkoxVknVeXKgIVoaQgHyL8QMuKWOmCZGiefAOMZHMCDstNrxHrmO3LNzWH/Jxdfx5Ru6Kp4WLVSdNobpGiqQTtPu7DYEAUZGk3d9NJJ3AFw3yYMprmHs184mB0NjaoCPRAD3KkGkYoEcZYiQaoGv2K6PRgGFmOjnHk+B70zF0y1vvrOSy55Thfi7JKsnUOytxWmw4ZRtm/yRNhTtNxzBspM3Wv/c1mIPmoDnoav0GSKlqLZvdLHQAAAAASUVORK5CYII=";
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAU3VuIDIzIEp1bCAyMDIzIDA4OjI4OjUyIEFNICswMzMwgLfRzwAAAetJREFUWIXt1sFr02AYx/HvmyZr3dq1ugVXxTEZnQwFcTuoUL14F0QvIl704tGrB3F/haf9AyrCvIgnRetBUakyGKXVDTvptExNtrQla5t4kbFqsyQ29GJ+ueXN+3yew/s+RNi2bdPnSP0GQzREA4vca4Gm3ebd5mdyWpG8scr1dJZze6eDR9ebm+S0Ei/0Eq/0T9Stre21e9U3waAWNku1Cs+1IjmtSKH+FZvuM6VtW671dkWf/izwTCvwUi/xo1nz0p+nOKIL63nurDwKDNoZx9O7ZuqeChyK7uPy/pOciI97Rn0fJFlEmEmMczY5RTaV4XBsFIDbKwvkjXJw6KgSJ5vMcCaV4fTwJEORqN9e/aFjA0meHL+JQPQE7YzrRBK/nyATzl7XfGxUma/keG+UqVtbtDxMop7QiqlxdWm+Y+b6SQf6wVjl9cYyeqtBsfHNcdNi7YsjqEgR7+it5Yc8/r7oqdNTw5MciKaomFrHe0lIXFJnvaGF+pojKLrclqS8h/tHb/Cg+pa8Uca0WkzERrioznJkcMwbqioJopKCaTX/+mB6MN11YyIS41o66wp0iwQwosS5O3WFY0MHtxcGhMwFdYa5ifP/VHi3iD//8Gttk412A1VJIAv3QxEI2o/8P2MwREM0RH3lFxWZoYWXxRKaAAAAAElFTkSuQmCC";
const _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAU3VuIDIzIEp1bCAyMDIzIDA4OjI5OjAzIEFNICswMzMww7TPNgAAA8hJREFUWIXtlllsVFUYx3935s56207b6XQdKXaB2goIikgiJIj4gBJR09aEECOiMUSbEPWFB8OLRKPBmKipMWpD3FJIGolCUEPEEEklbYBSaGpn6hSG2s7Wzj5zZ/Gh9abDdLog8mL/b+ef73y/s3w55xPS6XSaOyzVnQYuQZegS9BFS1xMsFsOYIu4SJGmWmemUlf430BDyRhGtZZwMs7zAx2MRD0AlGjy+LrxJSYSYbxyiI2m2gVD5zzebr+dJ/s+5JDjBJJaxwd1zyKpdQC45SBtf3xDtd5M+41f2D/0LYFk9N9Bf/ZdYd/gV7jkAJ3j5znm6qHGYGFvxSYlZiA8yjFXDweqH+e0b4Dnrn7OZCJya9DB8BgH7F0k0knF+21yCIBdZRuwaPIV/4vRsyzXm1mdZ8UWGec1Wydp5v5DZoW+5fieWEoGpu7uvboW3q1t5mLwGjqVhu3mVUqsWw5yytvPUyXrADjvH+Y794XFQXsDDi4ErwFQY7DwZeOLFIsSzf3tvGE7CsCWooaMOWcmBlmXv0wZfzZ6ds7dZkFPefsBWGks58g9L9Dtt7N3oANbZJyxuB97xEWjsTJjTn/ISbXerBTZSNTDYHhs4dC+kBOTaOD9ulZ+8Fzi4PBxUjNW7YxPoFOJFIpGxRuTAwCUa02KdznkXDjUlwjx5vIdjMS8vOM4mXFM+Wo9ZlECYF/VFiqmIal0ingqiTAjj0cO5YRmPQ735d3Fw6Z6dvZ9lLHDBmMFh+taqNIVkUqnaC1dT7PlfvpCTi6FrqNVqdluXkU0laDeUMqDBXfnhAo390geOciP3n7eHjmpeDUGCx0NeygQ9Rz56xyf3viVJ0rWsMO8hiapMivpfMqCAjxz+WOGIuMAmEQDnU0vU641cfDP43S5ejNii0SJBqmcMk0BWpWITw4xEvPyycrdFE1fxc3KOt5wKo496lbG+63bKNeaOO27mgWEqRo4N2nL8DaaanMCYZZCMqq0PF2yFoBGqZKdlrU4Yz42FNTQvmI3q/OsOZMBCAi8UvXInDGz/jJt1kfp9g/TYnkAAYFDjhMMhEd51bqVjoY92KMuzkwM0he8zmh8klgqgaTWsUxXzKbCeu6VquZeWK5m2xH1UKrNJ5CIsu3iYcUvFI08VtzEZlM91fqpP1VAIJSMIal1qIX5+4Kc0H/0k+8Krw915k6AgE4l0mbdyq6yh+YFLggK0BNw0OXu5Xf/MGNxPwAaQU29sYzNphW0lq6nWJO7cG4JOlNyOkl8+g5vVYuG3g79f1rQJegS9Lbob2y4cN4CcuK4AAAAAElFTkSuQmCC";
const _imports_3$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAU3VuIDIzIEp1bCAyMDIzIDA4OjI5OjIzIEFNICswMzMwm9h29wAAAiRJREFUWIXtlk9PE0EYxn/bblu2FbZQKlITJBBMjDGCNurRixdiOBiJ+AE8mHg0gY9ATPxz96Ah8WBSrv5NOGgwJqAXJQYVVEhqU9Ii29TSdtvx1MRlOy3dIhf7HJ+Zd34z8868M4oQQrDPcu03sAVtQVvQhqU20rkoSiwY31jKxkkUDIrCpMOtMaCFOdcxQMQX3DtotpTnQWKex8kFDDMn7Rdt7+f64fNE2/trjqfUK4PvMz+YXJ0lWTAs/lF/D5e6TzG99tQWczl8mqkjo3gUd9Uxa+b09dYXri3PkCwY9Pm6LG3bZZOUmbV4uqqhqxqxjXfc+PyIgjAbg8bzv5hciWGKEh7Fzb2hCdS/Zr62neJ+/JUlZiw0zMXQSQDeGqvcWX9ZdWzp9t5ef8FM4o1sTruSC4W5kZt0qoEdvkR79eIpKDZPenones6wmPlOsphxBHMrLsbDUYKq3z6RWqe3IExMUXYEVYA2l2f3KxUIplZmeZ5eQuB8mzvVAHeHrjByoM/iV83p8u8Ez9IfmwICbJpZHv6ct/lVoYe8OgG3rylgRYPaQZsnzenXXJK5zU8URMkRTAEi3iBj3cO4FevapFdmy8w5BgIIIL2jYlUkvTKxjUWepD44hlZ0oeu4rYRKV3rM39s0UFc1Il7d5kuhV3vOMho6Yam3jajXq3NrcLxqfN2nrSTK5CWvhUwuFNpcHml7Xei/0P/zMWtBW9AWtCH9Ad6kudozfV9xAAAAAElFTkSuQmCC";
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap w-full" }, _attrs))} data-v-50fd7a25><div dir="auto" class="flex flex-col p-4 gap-8 md:w-[70%]" data-v-50fd7a25><h4 class="f28-700 personal" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("PersonalInformation", { name: "PersonalInformation" }))}</h4><div class="flex gap-8 flex-col w-full" data-v-50fd7a25><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Age", { name: "Age" }))}</p><p class="f18-400 text-[#919191] w-[75%]" data-v-50fd7a25> 32 </p></div><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Address", { name: "Address" }))}</p><p class="f18-400 text-[#919191] w-[75%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Tehran", { name: "Tehran" }))}</p></div><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Address2", { name: "Address2" }))}</p><p class="f18-400 text-[#919191] break-words w-[75%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("HomeAddress", { name: "HomeAddress" }))}</p></div><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Email", { name: "Email" }))}</p><p class="f18-400 text-[#919191] break-words w-[75%]" data-v-50fd7a25> pouria.rahimy@gmail.com </p></div><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("PhoneNumber", { name: "PhoneNumber" }))}</p><p class="f18-400 text-[#919191] w-[75%]" data-v-50fd7a25> 09184095907 - 09220529612 </p></div><div class="flex justify-between w-full" data-v-50fd7a25><p class="f18-400 text-[#333333] w-[25%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("cooperate", { name: "cooperate" }))}</p><p class="f18-400 text-[#919191] w-[75%]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("work", { name: "work" }))}</p></div></div></div><div dir="auto" class="flex flex-col p-4 gap-5 md:w-[30%] faviorate" data-v-50fd7a25><h4 class="f28-700" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("faviorate", { name: "faviorate" }))}</h4><div class="flex gap-3 items-center" data-v-50fd7a25><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-50fd7a25><p class="f18-400 text-[#919191]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Chess", { name: "Chess" }))}</p></div><div class="flex gap-3 items-center" data-v-50fd7a25><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-50fd7a25><p class="f18-400 text-[#919191]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Music", { name: "Music" }))}</p></div><div class="flex gap-3 items-center" data-v-50fd7a25><img${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-50fd7a25><p class="f18-400 text-[#919191]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("Soccer", { name: "Soccer" }))}</p></div><div class="flex gap-3 items-center" data-v-50fd7a25><img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-50fd7a25><p class="f18-400 text-[#919191]" data-v-50fd7a25>${ssrInterpolate(_ctx.$t("hamburger", { name: "hamburger" }))}</p></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/PersonalInformation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-50fd7a25"]]);
const _imports_0$2 = "" + buildAssetsURL("html5.5af9c5ed.svg");
const _imports_1 = "" + buildAssetsURL("css.0e83d614.svg");
const _imports_2 = "" + buildAssetsURL("javascript.76e9fa80.svg");
const _imports_3 = "" + buildAssetsURL("bootstrap.fcfe2c04.svg");
const _imports_4 = "" + buildAssetsURL("vue.16ed474a.png");
const _imports_5 = "" + buildAssetsURL("nuxtlogo.a9944077.png");
const _imports_6 = "" + buildAssetsURL("Pinialogo.svg.6192b086.png");
const _imports_7 = "" + buildAssetsURL("typescript.b841119c.svg");
const _imports_8 = "" + buildAssetsURL("vuetify-logo.d1e020c7.png");
const _imports_9 = "" + buildAssetsURL("react.bcc601c2.svg");
const _imports_10 = "data:image/png;base64,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";
const _imports_11 = "" + buildAssetsURL("sass.37a9b8c8.svg");
const _imports_12 = "" + buildAssetsURL("tailwind.229b6722.svg");
const _imports_13 = "" + buildAssetsURL("vscode-icons_file-type-vscode.27a96ec7.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    dir: "auto",
    class: "flex flex-wrap gap-8 p-4 skills"
  }, _attrs))} data-v-d9904ad2><h4 class="f28-700" data-v-d9904ad2>${ssrInterpolate(_ctx.$t("mySkills", { name: "mySkills" }))}</h4><div class="flex w-full flex-wrap sikll-mobil" data-v-d9904ad2><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_0$2)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_1)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_2)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_3)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_4)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_5)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_6)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_7)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_8)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_9)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_10)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_11)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_12)} class="w-[60%]" alt="" data-v-d9904ad2></div><div class="flex w-[13%] skills-responsive items-center justify-center" data-v-d9904ad2><img${ssrRenderAttr("src", _imports_13)} class="w-[60%]" alt="" data-v-d9904ad2></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/skills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d9904ad2"]]);
const useSamplePOrtFolio = defineStore("samples", () => {
  const portData = ref([
    {
      id: 1,
      nameSAmple: "\u067E\u0646\u0644 \u0627\u062F\u0645\u06CC\u0646 \u0627\u062C\u0627\u0631\u0647 \u0635\u0646\u062F\u0644\u06CC \u0622\u0631\u0627\u06CC\u0634\u06AF\u0627\u0647",
      description: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u06A9\u0633\u062A \u062C\u06CC \u0627\u0633 3 \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u0631\u06CC\u0645\u0648\u062A \u0628\u0648\u062F\u0647 \u0648 \u0628\u0631\u0627\u06CC \u0634\u062E\u0635 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A",
      pathCode: "https://github.com/rahimi-pouria/Front-End",
      pathView: "/",
      photo: "@/assets/img/login.jpg"
    },
    {
      id: 2,
      nameSAmple: "\u0686\u062A \u0622\u0646\u0644\u0627\u06CC\u0646",
      descriptionSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u06A9\u0633\u062A \u062C\u06CC \u0627\u0633 3 \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u06CC\u062A \u0644\u0631\u0646\u06CC\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u062F\u0631 \u0634\u0631\u06A9\u062A \u0628\u0627\u0645\u062F\u0627\u062F \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A",
      pathCode: "/",
      pathView: "lrnia.com",
      photo: "~/assets/img/chat.jpg"
    }
  ]);
  return {
    portData
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Sample",
  __ssrInlineRender: true,
  setup(__props) {
    const protfolioPage = useSamplePOrtFolio();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "auto",
        class: "sample p-3 flex flex-col gap-8"
      }, _attrs))} data-v-b95af3fc><h4 class="f28-700" data-v-b95af3fc>${ssrInterpolate(_ctx.$t("portfolio", { name: "portfolio" }))}</h4><div dir="auto" class="flex w-full sample-mobile gap-3" data-v-b95af3fc><!--[-->`);
      ssrRenderList(unref(protfolioPage).portData, (item, i) => {
        _push(`<div class="flex flex-col w-[50%] card-mobile gap-3 shadow-xl" data-v-b95af3fc><div class="header-card flex" data-v-b95af3fc><img${ssrRenderAttr("src", _imports_0$4)} alt="" data-v-b95af3fc></div><div class="flex flex-col gap-5 justify-between" data-v-b95af3fc><div class="flex flex-col p-4 gap-3" data-v-b95af3fc><h5 class="f28=400" data-v-b95af3fc>${ssrInterpolate(_ctx.$t(`item${item.id}nameSAmple`))}</h5><p class="text-[#919191]" data-v-b95af3fc>${ssrInterpolate(_ctx.$t(`item${item.id}descriptionSample`))}</p></div><div class="flex w-full justify-between gap-3 p-4" data-v-b95af3fc>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.pathCode,
          class: "f14-400 rounded-lg bg-[#2eca7f] p-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("seeMore", { name: "seeMore" }))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("seeMore", { name: "seeMore" })), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/Portfolio",
          class: "f14-400 rounded-lg bg-[#2eca7f] p-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("seeProject", { name: "seeProject" }))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("seeProject", { name: "seeProject" })), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Sample.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b95af3fc"]]);
const _imports_0$1 = "" + buildAssetsURL("nuxt.a971a1dd.jpg");
const useBlogHome = defineStore("blog", () => {
  const blogHome = ref([
    {
      id: 1,
      Blogtitle: "\u0645\u0639\u0631\u0641\u06CC \u0641\u0631\u06CC\u0645\u0648\u0631\u06A9 Nuxt js",
      description: "\u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A (JavaScript) \u0627\u0632 \u0632\u0628\u0627\u0646 \u0647\u0627\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0633\u0645\u062A \u06A9\u0644\u0627\u06CC\u0646\u062A (Client) \u0627\u0633\u062A. \u062F\u0631 \u0631\u0627\u0633\u062A\u0627\u06CC \u062A\u0648\u0633\u0639\u0647 \u0632\u0628\u0627\u0646 \u0647\u0627",
      description2: "",
      writer: "\u067E\u0648\u0631\u06CC\u0627 \u0631\u062D\u06CC\u0645\u06CC",
      date: "1402/05/02"
    },
    {
      id: 2,
      Blogtitle: "\u0645\u0639\u0631\u0641\u06CC \u0641\u0631\u06CC\u0645\u0648\u0631\u06A9 Vue js",
      description: "\u0648\u06CC\u0648 \u062C\u06CC \u0627\u0633 \u06CC\u06A9\u06CC \u0627\u0632 \u0641\u0631\u06CC\u0645\u0648\u0631\u06A9 \u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628 \u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0647\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u0644 2013 \u062A\u0648\u0633\u0637 \u0622\u0642\u0627\u06CC Evan You \u0627\u0631\u0627\u06CC\u0647 \u0634\u062F\u061B",
      description2: "",
      writer: "\u067E\u0648\u0631\u06CC\u0627 \u0631\u062D\u06CC\u0645\u06CC",
      date: "1402/05/02"
    }
  ]);
  return {
    blogHome
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blog = useBlogHome();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "auto",
        class: "sample p-3 flex flex-col gap-8"
      }, _attrs))} data-v-e6653c31><h4 class="f28-700" data-v-e6653c31>${ssrInterpolate(_ctx.$t("Articles", { name: "Articles" }))}</h4><div class="flex blog-mobile w-full gap-3" data-v-e6653c31><!--[-->`);
      ssrRenderList(unref(blog).blogHome, (item, i) => {
        _push(`<div class="flex flex-col card-blog-mobile w-[50%] gap-3 shadow-xl" data-v-e6653c31><div class="header-card flex" data-v-e6653c31><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-e6653c31></div><div class="flex flex-col gap-5 justify-between" data-v-e6653c31><div class="flex flex-col p-4 gap-3" data-v-e6653c31><h5 class="f28=400" data-v-e6653c31>${ssrInterpolate(_ctx.$t(`item${item.id}Blogtitle`))}</h5><p class="text-[#919191]" data-v-e6653c31>${ssrInterpolate(_ctx.$t(`item${item.id}descBlog`))}</p></div><div class="flex w-full justify-between gap-3 p-4" data-v-e6653c31><p class="f14-400 rounded-lg bg-[#2eca7f] p-2" data-v-e6653c31>${ssrInterpolate(_ctx.$t(`item${item.id}writer`))}</p><p class="f14-400 rounded-lg bg-[#2eca7f] p-2" data-v-e6653c31>${ssrInterpolate(item.date)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e6653c31"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA4CAYAAAChbZtkAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAU3VuIDIzIEp1bCAyMDIzIDA5OjI3OjE2IEFNICswMzMwsJ1GkwAAA7NJREFUaIHtmElME1Ecxr+ZUpZCBaEGXAEJRQWNBg+eNBq3xCgqHozbySBGjYkJYjxojCaKMWqiHuQIbgnVuCUqxiVeNBGjRhBbLVQQo3QjlKUw7YwXHK3YOn0zr+p0fj299/7v/76v85Z5wwiCICCOYP+2gFijGVY7mmG1oxlWO3FnOIG04xDP4WzXIzz0tsLN9SupKSKJrA5FhhzsmbwU0w3jo+7PkL5pVdkb0OhpIemqCAY2EQ0l2zEpaWxU/YimtJPz/VWzADDAD8PibIq6H5HhDr+HpJvifCTQQbSGBYxeBWcKN5Ckioqrzhd43GP9oYNgNRJvWr8yP8OsVKqwPOttk50j7o4lzTANAkIQVfYGLHl9Eh8Gu0PaBAg42H4Di16dQHN/F3Ut1A0HBR5VdgsaPS3oHu7FTttF8D9tenVfnuK66yXcXB8qrfV42/+Zqh6qhoMCj2q7BQ+9rWJdbnIWWDBieUpyplj2Bf3YZquHdeALNU3UDPMCj/1t13Df+1asm2vMw+nC9SFxCzOm4VB+mWi6NzCICmsdbANfqeiiZvh45z3c9TSL5VJjLs6aNyCFTRwVu8o0O8R0T2AAFdY6uLk+xXXFbJdmRn6R2mMBNcN7Jy/D8swSsdzkc2CH7SL8PDcq9pbrNQ60Xxc3s4wEA2qLtiBLn6a4LmqGWYbF0alrsTSzWKxr8jmw+/3lkLhHPe9CzKYnpKC2aAvMhmw6uqhk/Z6cYXFsajkWj50h1nUMeUKOpU9+r1geM2K2yJBDTxO1zCPoGBY1BeVYnlmCnMR0nCvcGHIsbcqZh/JxpTDpjThv3oxpBJf6aFDs8hBxEEaHmoJ1v21jwOBA3spYyACgvUurH8Wm9JMem1KpwtI15JWdQzHDu95fUioVVeJuSsedYaIpzYL57SUg1iSx0csn/hD/vyL5L3JxfRjmA8QDpSekIFWXFLadE4JwDvuI8zMMYNIboWd0EeMkGb7jfoN9bVeJxQDAatMcHMovC9v+wNuKartF1hgzUyfhwoytEWMkbVoOv1uWEAC46XoFi7Np1PWQh4CW/i6c+fRA9hjtftcfYyQ94VSd/A2Kh4DDjts47LgtO1c40iIsme9IesKlxjy5WmLCXAk6JRkuTp2AFVmz5OqhilGXjMqJC/4YJ/lYCghBnOq8jyvdzxEQgrIFKonZkI0j+WskfTiI+hz2Bf1oG3SC+wdMM2Bg0qchNzlLep94e/GIu3dpzbDa0QyrHc2w2tEMqx3NsNr5BtwSKdLuyEaWAAAAAElFTkSuQmCC";
const useExperience = defineStore("experience", () => {
  const exper = ref([
    {
      id: 1,
      title: "\u0634\u0631\u06A9\u062A \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF \u0628\u0627\u0645\u062F\u0627\u062F",
      description: "\u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u062F\u06CC \u0645\u0627\u0647 1400 \u062F\u0631 \u0634\u0631\u06A9\u062A \u0628\u0627\u0645\u062F\u0627\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0644\u0631\u0646\u06CC\u0627 \u0628\u0627 vue js , nuxt js \u0627\u0646\u062C\u0627\u0645 \u062F\u0627\u062F\u0645",
      location: "\u062A\u0647\u0631\u0627\u0646",
      position: "\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633 \u0641\u0631\u0627\u0646\u062A (Vue js)"
    },
    {
      id: 2,
      title: "\u0634\u0631\u06A9\u062A \u062A\u0631\u06CC\u062F\u0631 4",
      description: "\u062F\u0631 28 \u062F\u06CC \u0645\u0627\u0647 1401 \u062F\u0631 \u0634\u0631\u06A9\u062A \u062A\u0631\u06CC\u062F\u0631 \u0641\u0648\u0631 \u0628\u0647 \u0635\u0648\u0631\u062A \u0631\u06CC\u0645\u0648\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0645 \u0648 \u0642\u0627\u0644\u0628 \u0645\u062A\u0631\u0648\u0646\u06CC\u06A9  \u0631\u0648 \u0633\u0641\u0627\u0631\u0634\u06CC \u0633\u0627\u0632\u06CC \u0645\u06CC\u06A9\u0631\u062F\u06CC\u0645",
      location: "\u0627\u0646\u06AF\u0644\u0633\u062A\u0627\u0646",
      position: "\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633 \u0641\u0631\u0627\u0646\u062A (Vue js)"
    }
  ]);
  return {
    exper
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    const experience2 = useExperience();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "auto",
        class: "flex flex-col p-4 gap-8"
      }, _attrs))} data-v-0c1d5b30><h4 class="f28-700" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t("experience", { name: "experience" }))}</h4><div class="flex flex-wrap w-full" data-v-0c1d5b30><!--[-->`);
      ssrRenderList(unref(experience2).exper, (item, i) => {
        _push(`<div class="flex flex-col w-[50%] expirence-responsive gap-4 p-4 items-start" data-v-0c1d5b30><img${ssrRenderAttr("src", _imports_0)} class="w-[90px] mr-[-16px]" alt="" data-v-0c1d5b30><h5 class="f22-400 title-responsive" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t(`item${item.id}title`))} </h5><div class="flex gap-1" data-v-0c1d5b30><span class="f18-400 text-[#919191]" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t("position", { name: "position" }))}</span> : <span class="f18-400 text-[#919191]" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t(`item${item.id}jobTitle`))}</span></div><p class="f18-400 decription text-[#919191]" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t(`item${item.id}description`))}</p><p class="text-[#919191]" data-v-0c1d5b30>${ssrInterpolate(_ctx.$t("Companylocation1", { name: "Companylocation1" }))} : ${ssrInterpolate(_ctx.$t(`item${item.id}location`))}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/experience.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c1d5b30"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeAboutMe = __nuxt_component_0;
      const _component_HomePersonalInformation = __nuxt_component_1;
      const _component_HomeSkills = __nuxt_component_2;
      const _component_HomeSample = __nuxt_component_3;
      const _component_HomeBlog = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex container p-8 text-justify w-full gap-4 flex-col container mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HomeAboutMe, null, null, _parent));
      _push(`<hr class="w-full">`);
      _push(ssrRenderComponent(_component_HomePersonalInformation, null, null, _parent));
      _push(`<hr class="w-full">`);
      _push(ssrRenderComponent(_component_HomeSkills, null, null, _parent));
      _push(`<hr class="w-full">`);
      _push(ssrRenderComponent(experience, null, null, _parent));
      _push(`<hr class="w-full">`);
      _push(ssrRenderComponent(_component_HomeSample, null, null, _parent));
      _push(`<hr class="w-full">`);
      _push(ssrRenderComponent(_component_HomeBlog, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2d86d081.mjs.map
