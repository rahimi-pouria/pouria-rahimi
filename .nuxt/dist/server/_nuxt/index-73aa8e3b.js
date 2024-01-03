import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./create-76d37ef8.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue-i18n";
import "defu";
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
const index_vue_vue_type_style_index_0_scoped_b95f9a15_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b95f9a15"]]);
export {
  index as default
};
//# sourceMappingURL=index-73aa8e3b.js.map
