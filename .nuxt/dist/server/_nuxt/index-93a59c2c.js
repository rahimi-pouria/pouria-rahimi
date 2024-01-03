import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./login-1e2d03aa.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
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
import "vue-i18n";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sample = [
      {
        id: 1,
        titlePortFolio: "سایت شخصی پوریا رحیمی",
        descSample: "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه برای معرفی هر چه بهتر اینجانب به کارفرمایان عزیز  پیاده سازی شده است.",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "https://pouria-rahimi.ir",
        photo: "login.jpg"
      },
      {
        id: 2,
        titlePortFolio: "پنل ادمین اجاره صندلی آرایشگاه",
        descSample: "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است و بر اساس میدلور دسترسی ها مشخص شده است",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "/",
        photo: "login.jpg"
      },
      {
        id: 3,
        titlePortFolio: "چت آنلاین",
        descSample: "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است",
        pathCode: "/",
        pathView: "lrnia.com",
        photo: "chat.jpg"
      },
      {
        id: 4,
        titlePortFolio: "پنل ادمین همانند وردپرس",
        descSample: "این پروژه بر اساس ویو جی اس و ناکست سه و تایپ اسکریپت و پینیا پیاده سازی شده اکه بنا بر خواسته شرکت رها طب و طرح فیگما انجام شده است ",
        pathCode: "https://github.com/rahimi-pouria/Front-End",
        pathView: "/",
        photo: "login.jpg"
      },
      {
        id: 5,
        titlePortFolio: "بازی  پازل",
        descSample: "این پروژه با ری اکت جی اس پیاده سازی شده است. این زمانی پیاده سازی شد که بنده برای استخدامی شرکت بامداد اقدام کرده بودم و این  پروژه تسکی بود برای ورود به شرکت بامداد",
        pathCode: "/",
        pathView: "lrnia.com",
        photo: "chat.jpg"
      },
      {
        id: 6,
        titlePortFolio: "بازی  اسکویید گیم",
        descSample: "این پروژه با ری اکت جی اس پیاده سازی شده است این پروژه رو در شرکت آیشن زمانی که آخرین مرحله استخدامی بودم پیاده سازی شد و بر این اسا مورد تایید منتور قرار گرفت  ",
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
const index_vue_vue_type_style_index_0_scoped_9ba0d283_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ba0d283"]]);
export {
  index as default
};
//# sourceMappingURL=index-93a59c2c.js.map
