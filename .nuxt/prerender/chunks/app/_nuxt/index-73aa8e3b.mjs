import { useSSRContext, defineComponent, mergeProps } from 'file://D:/myPortFolioWebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://D:/myPortFolioWebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './create-76d37ef8.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../renderer.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "auto",
        class: "flex flex-col p-4 gap-1 pb-4 bg-white w-full"
      }, _attrs))} data-v-b95f9a15><h4 class="f28-400" data-v-b95f9a15>${ssrInterpolate(_ctx.$t("Articles", { name: "Articles" }))}</h4><p class="f18-400 text-[#919191] text-blog" data-v-b95f9a15>${ssrInterpolate(_ctx.$t("descArticels", { name: "descArticels" }))}</p><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b95f9a15></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b95f9a15"]]);

export { index as default };
//# sourceMappingURL=index-73aa8e3b.mjs.map
