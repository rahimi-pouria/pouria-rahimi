import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file://D:/myPortFolioWebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'file://D:/myPortFolioWebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './login-1e2d03aa.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/ufo/dist/index.mjs';
import '../../renderer.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/h3/dist/index.mjs';
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
    const sample = [
      {
        id: 1,
        titlePortFolio: "\u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC \u067E\u0648\u0631\u06CC\u0627 \u0631\u062D\u06CC\u0645\u06CC",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u06A9\u0633\u062A \u062C\u06CC \u0627\u0633 3 \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0627\u06CC \u0645\u0639\u0631\u0641\u06CC \u0647\u0631 \u0686\u0647 \u0628\u0647\u062A\u0631 \u0627\u06CC\u0646\u062C\u0627\u0646\u0628 \u0628\u0647 \u06A9\u0627\u0631\u0641\u0631\u0645\u0627\u06CC\u0627\u0646 \u0639\u0632\u06CC\u0632  \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A.",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "https://pouria-rahimi.ir",
        photo: "login.jpg"
      },
      {
        id: 2,
        titlePortFolio: "\u067E\u0646\u0644 \u0627\u062F\u0645\u06CC\u0646 \u0627\u062C\u0627\u0631\u0647 \u0635\u0646\u062F\u0644\u06CC \u0622\u0631\u0627\u06CC\u0634\u06AF\u0627\u0647",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u06A9\u0633\u062A \u062C\u06CC \u0627\u0633 3 \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u0631\u06CC\u0645\u0648\u062A \u0628\u0648\u062F\u0647 \u0648 \u0628\u0631\u0627\u06CC \u0634\u062E\u0635 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A \u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u06CC\u062F\u0644\u0648\u0631 \u062F\u0633\u062A\u0631\u0633\u06CC \u0647\u0627 \u0645\u0634\u062E\u0635 \u0634\u062F\u0647 \u0627\u0633\u062A",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "/",
        photo: "login.jpg"
      },
      {
        id: 3,
        titlePortFolio: "\u0686\u062A \u0622\u0646\u0644\u0627\u06CC\u0646",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u06A9\u0633\u062A \u062C\u06CC \u0627\u0633 3 \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u06CC\u062A \u0644\u0631\u0646\u06CC\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u062F\u0631 \u0634\u0631\u06A9\u062A \u0628\u0627\u0645\u062F\u0627\u062F \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A",
        pathCode: "/",
        pathView: "lrnia.com",
        photo: "chat.jpg"
      },
      {
        id: 4,
        titlePortFolio: "\u067E\u0646\u0644 \u0627\u062F\u0645\u06CC\u0646 \u0647\u0645\u0627\u0646\u0646\u062F \u0648\u0631\u062F\u067E\u0631\u0633",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0648\u06CC\u0648 \u062C\u06CC \u0627\u0633 \u0648 \u0646\u0627\u06A9\u0633\u062A \u0633\u0647 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0648 \u067E\u06CC\u0646\u06CC\u0627 \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u06A9\u0647 \u0628\u0646\u0627 \u0628\u0631 \u062E\u0648\u0627\u0633\u062A\u0647 \u0634\u0631\u06A9\u062A \u0631\u0647\u0627 \u0637\u0628 \u0648 \u0637\u0631\u062D \u0641\u06CC\u06AF\u0645\u0627 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A ",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "/",
        photo: "login.jpg"
      },
      {
        id: 5,
        titlePortFolio: "\u0628\u0627\u0632\u06CC  \u067E\u0627\u0632\u0644",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0631\u06CC \u0627\u06A9\u062A \u062C\u06CC \u0627\u0633 \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u0632\u0645\u0627\u0646\u06CC \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F \u06A9\u0647 \u0628\u0646\u062F\u0647 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u06CC \u0634\u0631\u06A9\u062A \u0628\u0627\u0645\u062F\u0627\u062F \u0627\u0642\u062F\u0627\u0645 \u06A9\u0631\u062F\u0647 \u0628\u0648\u062F\u0645 \u0648 \u0627\u06CC\u0646  \u067E\u0631\u0648\u0698\u0647 \u062A\u0633\u06A9\u06CC \u0628\u0648\u062F \u0628\u0631\u0627\u06CC \u0648\u0631\u0648\u062F \u0628\u0647 \u0634\u0631\u06A9\u062A \u0628\u0627\u0645\u062F\u0627\u062F",
        pathCode: "/",
        pathView: "lrnia.com",
        photo: "chat.jpg"
      },
      {
        id: 6,
        titlePortFolio: "\u0628\u0627\u0632\u06CC  \u0627\u0633\u06A9\u0648\u06CC\u06CC\u062F \u06AF\u06CC\u0645",
        descSample: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u0631\u06CC \u0627\u06A9\u062A \u062C\u06CC \u0627\u0633 \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0631\u0648 \u062F\u0631 \u0634\u0631\u06A9\u062A \u0622\u06CC\u0634\u0646 \u0632\u0645\u0627\u0646\u06CC \u06A9\u0647 \u0622\u062E\u0631\u06CC\u0646 \u0645\u0631\u062D\u0644\u0647 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u06CC \u0628\u0648\u062F\u0645 \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u0634\u062F \u0648 \u0628\u0631 \u0627\u06CC\u0646 \u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u062A\u0627\u06CC\u06CC\u062F \u0645\u0646\u062A\u0648\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A  ",
        pathCode: "/",
        pathView: "lrnia.com",
        photo: "chat.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "auto",
        class: "samples p-4 flex flex-wrap gap-8"
      }, _attrs))} data-v-9ba0d283><h4 class="f28-700" data-v-9ba0d283>${ssrInterpolate(_ctx.$t("portfolio", { name: "portfolio" }))}</h4><div class="flex flex-wrap w-full gap-4 pr-2" data-v-9ba0d283><!--[-->`);
      ssrRenderList(sample, (item, i) => {
        _push(`<div class="flex flex-col portfolio-mobile w-[48%] gap-3 shadow-xl" data-v-9ba0d283><div class="header-card flex" data-v-9ba0d283><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-9ba0d283></div><div class="flex flex-col gap-5 justify-between" data-v-9ba0d283><div class="flex flex-col p-4 gap-3" data-v-9ba0d283><h5 class="f28=400" data-v-9ba0d283>${ssrInterpolate(_ctx.$t(`item${item.id}titlePortFolio`))}</h5><p class="text-[#919191]" data-v-9ba0d283>${ssrInterpolate(_ctx.$t(`item${item.id}descSample`))}</p></div><div class="flex w-full justify-between gap-3 p-4" data-v-9ba0d283>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
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
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "f14-400 rounded-lg bg-[#2eca7f] p-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("seeSourceCode", { name: "seeSourceCode" }))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("seeSourceCode", { name: "seeSourceCode" })), 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ba0d283"]]);

export { index as default };
//# sourceMappingURL=index-93a59c2c.mjs.map
