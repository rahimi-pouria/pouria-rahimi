import { defineComponent, mergeProps, useSSRContext } from 'file://D:/myPortFolioWebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://D:/myPortFolioWebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './create-76d37ef8.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "previewBlog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white w-full" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt=""></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/previewBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=previewBlog-2771f345.mjs.map
