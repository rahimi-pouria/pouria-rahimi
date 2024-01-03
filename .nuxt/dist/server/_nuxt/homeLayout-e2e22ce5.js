import { _ as __nuxt_component_0$1 } from "./nuxt-link-6bdec6f5.js";
import { ref, defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { d as defineStore, _ as _export_sfc } from "../server.mjs";
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
const useMainMenu = defineStore("menu", () => {
  const MainMenu = ref([
    {
      id: 1,
      name: "خانه",
      path: "/"
    },
    {
      id: 2,
      name: "نمونه کارها",
      path: "/Portfolio"
    },
    {
      id: 3,
      name: "بلاگ",
      path: "/Blog"
    }
  ]);
  return {
    MainMenu
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const Main = useMainMenu();
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between md:p-4 w-full relative" }, _attrs))} data-v-9d3da0f1><div class="flex w-[20%] logo p-4 items-end justify-start" data-v-9d3da0f1>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="f48-700" data-v-9d3da0f1${_scopeId}> Pouria Rahimi </p>`);
          } else {
            return [
              createVNode("p", { class: "f48-700" }, " Pouria Rahimi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div dir="auto" class="flex w-[80%] show-menu items-center justify-center" data-v-9d3da0f1><!--[-->`);
      ssrRenderList(unref(Main).MainMenu, (item, i) => {
        _push(`<div class="flex px-5 justify-between items-center" data-v-9d3da0f1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "f22-400",
          to: item.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`item${item.id}name`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`item${item.id}name`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><form class="flex items-center justify-center" data-v-9d3da0f1><select class="px-6 rounded-xl py-2 bg-white text-black border-none hover:border-none focus:border-none active:border-none selection:border-none" data-v-9d3da0f1><option class="focus:border-none active:border-none selection:border-none hover:border-none" value="fa" data-v-9d3da0f1> fa</option><option class="focus:border-none active:border-none selection:border-none hover:border-none" value="en" data-v-9d3da0f1> en</option></select></form></div>`);
    };
  }
});
const Menu_vue_vue_type_style_index_0_scoped_9d3da0f1_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9d3da0f1"]]);
const _imports_0 = "" + __buildAssetsURL("profile-pic.a404817c.png");
const _imports_1$1 = "" + __buildAssetsURL("resume.53fbcde2.png");
const _imports_2$1 = "" + __buildAssetsURL("nemoneh.2cf73382.png");
const _imports_3$1 = "" + __buildAssetsURL("blog.72055599.png");
const _imports_4$1 = "" + __buildAssetsURL("contact.20cfd3f3.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdvanceUser",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex xl:flex-col lg:flex-col md:flex-col bg-white w-[40%] rounded-full py-3 items-center px-3 options-menu sm:order-6" }, _attrs))} data-v-0fb921c6><div class="flex flex-col gap-9 relative w-full link-advance justify-center" data-v-0fb921c6>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="rounded-full photo-advance w-[65px]" alt="" data-v-0fb921c6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "rounded-full photo-advance w-[65px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/pouria-rahimi.pdf",
        class: "flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1$1)} class="photo-advance w-[40px] h-[40px]" alt="" data-v-0fb921c6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1$1,
                class: "photo-advance w-[40px] h-[40px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/Portfolio",
        class: "flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2$1)} class="photo-advancew-[40px] h-[40px]" alt="" data-v-0fb921c6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2$1,
                class: "photo-advancew-[40px] h-[40px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/Blog",
        class: "flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3$1)} class="photo-advance w-[40px] h-[40px]" alt="" data-v-0fb921c6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3$1,
                class: "photo-advance w-[40px] h-[40px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#ContactMe",
        class: "flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_4$1)} class="photo-advance w-[40px] h-[40px]" alt="" data-v-0fb921c6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_4$1,
                class: "photo-advance w-[40px] h-[40px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const AdvanceUser_vue_vue_type_style_index_0_scoped_0fb921c6_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AdvanceUser.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0fb921c6"]]);
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAV2VkIDE5IEp1bCAyMDIzIDA2OjUwOjA4IEFNICswMzMw/iGh8wAAAhFJREFUWIXtl8trE1EUh7+ZTB4m6Zg2aVoSIU0VH7UUH0S6UakKKii66KbiTl0pbly56p/gohtx4UKzE9xJEYpvilRFra8WJFFRMcZgOuTRNMnElYFCMnPTFLKZ3/Lec87vmzncM3OlkbnJGh2U3ElzC8ACsAAsAABlPYrUdB3twQLLn1MogS58R4exdbkA0PMlZI9z7QB/771lw7Z+XFv6Gu7rhRWSl+MU3n2vr6VvPaPn1B5yr74QunIM1+Zg0/qmLVia+Ujy4m0KH3403E9df7jKHKCc0kjdeITic5N/882wvimAZJOpZAskzt/k19QM1VxpNeDjhaa55ZTGxsNDhvVNW6CObUd7ukhNr5GOz5K5M4d6aAhvLIoz4kcvrjTNDV44iOJztwdg71PxxqLkXiQB0EsVstPzZKfnzVJRuo3NQaAF2fvv6+YtSZZwhLrbBwhMjCIprY8L985w/Si2BeAa7CU6dRZntLclAN/xEaE48Uer6sKhit9Lz8ld6wfg2R3BPRwWBghfPYHkEBuyYm9Aktg0eZqBaxN49w0ahgbPHUDdv1WoLLTwLVhOpMk9T5B//bUxo02m/9IRAmdGhc1NAaq5En/is2TuvqS6VGwa59k7YDrzm0kSuReUf2toTxYpfvpJJZMHWcIe8OKMBFDHduAI+Vo2/i+hFtiDKv7x2JpNjNTxHxILwALoOMA/6I6TRsIMwYwAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAV2VkIDE5IEp1bCAyMDIzIDA2OjUwOjIyIEFNICswMzMwsW+I+wAAAaxJREFUWIVj1DtV/59hAAHTQFo+6oBRB4w6YFA4gIVYhf9//WV42rGF4cvZBwycquIMMrX+DMz8nBQ7gOgQeL/tIsP7rRcZfr/4yPDp8C2GN8uOU2w5SQ5gZGJE08mIXSGJgOgoEPDUY/h25QnD13MPGTjUJRhEoiyp4gBGWlZG///8Y2BkwR/IRIfAt4uPGZ52bIHzxdMcGPgcNRleLTjC8HHnZbi4wqQYhteLjzJ82HaJ4e/nHwysYnwMQkHGDGLxNlijjWgH/P32k+HHvddw/p9PPyDi776iiD+uWcvw9cIjOP/3q08ML2fsZ/jz5guDVKknhrlULwe+XnjEwMzHycAiwIUi/nbtaYZfT97R3gF8tuoMmtuLGTR3FDMIeOohJP4zMHw+eof2DhDPcoIkPEZGBpEIcxS5Xy8/0t4BLEilI6sIL4rc/59/qO+A/wx4cjERZdWAV0aUO4DCYowKDqDMBQMeAkTXBX8/fWf4ceclnM8uJ8LAIsLD8PPxO4Y/rz/Bxbl0ZRkYWZkhbvv9l+Hb5cdwORZRPgZ2WSHyHEArMAxywagDhroDAGXeiPvao18KAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAV2VkIDE5IEp1bCAyMDIzIDA2OjUwOjQ1IEFNICswMzMwuwZZwQAAAVBJREFUWIXtlrtKA0EUhr+ZvblkE9Q1QRRDkICoINja501stbIRC1/CB/ABooWNiG8QFEHEUiSKBCF4IRpi3F2L1UWxyWxc1mL/6jAznP/jnDnMiKXGdkCKkmmaZwAZQAbwLwD0YRMEnk/38o5+6wmkQNoGueUK0jaSB3i9uKW5tReaf1N1dxV7fipZAK/To7lZp3//HDfFcACPh+c/zPXxHFaliNAEMmclD9C7aUex5ljM7a8hbVM5T+wpCN68KDZKhVjmQwH8lYTKf6BdP6G1cwyEFQg8P9yQAml9dlMIFo42EOZg3VW6A8G7h9/t/97wg2hdn3AGNocEWmBOjymdV6pAfqWK7joAPByc0WlcAeElnFyvhQClQnIAVtnFKrsAvJxeR+uaYzFaW1Qy/lLqU5ABZACpA8R+DY1inpHZIgDmjBsbQOktSEKptyAD+AD5gVDUF7//8AAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAV2VkIDE5IEp1bCAyMDIzIDA2OjUwOjUzIEFNICswMzMwd5b2RgAAA0lJREFUWIXtl81rVFcUwH/3zZvPTGeSmbx8lKYwIjQJdWygotbSJqG1pQVbKKVYid10UQQV/wKhm7abQukiG1eCiguxosFmEwkIpqK1MUJS0caampj4kkwmGWfmzbx7XUyYyZjkTWsqcZGzeu/cc9/5nXPPPfc+Eb96VLGOoq2n8w2ADYANgA2AFwJA/0/WSiEfW0jLBluilEIIAS6BcOu4Ah7QxP8MoBTTZ66T6B0ic2cS+dha1VTz6ng31RFqb8bYtxPhdq0RQCnGjp4l0XsLb8yg5qM4eiSI5nODa8nqSYW08tgzKVJDY0x297Fw5Q6xn7sQHmcIR4DEr0Mkem9hfPU2DQc6K0ajrDwyk2Oub5gH313g0fHL1H39ruMcxyKc7RnEXR+i4ZuOis4B7h05xcienwi1NxOINzHXN1xxjmMGsqMmgTeaygtLKqbPXGPm3O9Y4wnc0SDh3a9j7N+Fv6URJRWa30PV1ibMUwOovEToq8fpCGAvZNAjwTLd2LfnSFy8iW+TQbi9mew9k6lj/aSujRLr3o/QCs70mipUXmIn0+iRqmcDkFYezVsySV4aJnHxJrV7d9B46P1iZszTvzHxYy/miQGMrrcAEF43UKgLJ3FuRFKBKKV/tmcQPVJFw8H3ypal9ovt+FtfZvb8jaJOLI4r6Xzjq9gJlS2Lz7npBbxNUYRr+TRfzCBnLqwcxFoAljrz1IfJjD5CZp9Kq1KkRybwNFav4MG5MzoDaKIsgshnb2In04x/fwFl2QWlVDzsvkTm7hTRz7eVmKRcFsBK4liEmldHZnPF9+C2GLVf7sA8OcD81b/wb64ne38aazxB6J3XiHzSVgJYzNKaOqHrJT/5p9a18fBuAlteYfb8H4U+0FCN0bWLmk/bygo2Z84jPC5cYf+zA/g215EavL+smYQ7Wwl3tjp+OHX9b3wxo9gXVhPH0cieNvIzKR780IPKSyfTkijF1LF+0n9OUP3BlormjhkIdbRQu28n5okrzF++TWDrq7iji6ehJlC2LBSZWnoa/kPu4Rzhjhaie7dXBBD/5t8w2T/CzC83yNydxE6mC9tw6f7WBJpHRwt68cUMqj+MU/NxvKwm1gTwPGXd74TrDvAEx5I10o3YRQsAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAvdEVYdENyZWF0aW9uIFRpbWUAV2VkIDE5IEp1bCAyMDIzIDA2OjUxOjAzIEFNICswMzMw21eDgQAAAw9JREFUWIXtlktoE1EUhr9p3m2TJm1sSG0x2EhFrS9Ei+IbteADFMWi7qSgKxHRrbpyoS5050JxJb5wpS6MIIoLW9yoSbVKlGKMpU1imqSTdJLMuJAqMZlmpiLd9N/NmfP4uPeec6+wtP+swgyqZiaLzwLMAgAYdUcoCmLoG9mBKPlYBlAwue3YFrVQu3guCML/AVCkIvF7/cRuvSIfS1f0MbntuA910XRgNYLZoCmvoGUO5D6PMnT6DlIkoSmpubWReRcPYp0/p6pv1TMgBiOEj17XXBxAiiQIH72OGIz8G0B+NM3QmbvIoqS5+KRkUWLozF3yo5W3SxPA8JUnFOIZ3cUnVYhnGL4amB5ALjxC8mlIV0Fbh5em/atKbMlAkFx4RDVGtQvGngRBwzVlaLDh7O6kcc8KrH4PUjRJ/P7rPw4KjAVCWNub9QGk+z6rV60RsK9px7V7OY4NHeRjaTL9X7D6PWQHohVyhfEc26wPID88VmYzt7pw7VyOa9cyTM0OlKJM/HYf0vAY3pPbARAHvmnKVRWgmMmVfLed34tzx5Lfky47ECVy4SGOdQtoOdX92y8bLAcopnNltqoAxobakokXvfiY9MuP2Nd3IAYjJB68xnuyu+TQKbJMdvB7eS5nrX4A01xnCUAxM0EyECIZ+NUZ3hPby078RHgUOZcvy2VucakCqLahfe0C1SAAq78ZKZosWV4xVL78APZ1fv0Azm2LEQzqcyo/kiLce4NPR64hvouoAgjGGhq2LVHNY/D0bjpX8YfDRiGRqdhWAKkXg8iihJyZIPnoDcVUltSz98jZ0i1o2rcKZ3enKsCUo9hzfCsWn3sqFwCUokzsdh+FxHiJ3eJz4zm+ZcrYKQEM9RbmXerB5HFUhfhbJo8D3+UeDPWW6QMAWNoa8d/spW6lT3PxupU+/Dd7Mbc2VvXV9CCZVOr5B2K3XjH+9ivIf4XVCNR1tuE+3IVj40LNsLoAJlX4IZId/E4h9uuqNrrrsXV4MbrUB46a9D9KAaOrFntX+3RCyzTjz/JZgBkH+AkBWxyZjhSeKQAAAABJRU5ErkJggg==";
const userData_vue_vue_type_style_index_0_scoped_aff49dde_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><div class="flex flex-col gap-9 bg-[#2eca7f] w-full p-6 items-center justify-center" data-v-aff49dde><img${ssrRenderAttr("src", _imports_0)} class="rounded-full w-[195px] h-[195px]" alt="pouria rahimi" data-v-aff49dde><div class="flex flex-col gap-9 items-center" data-v-aff49dde><h2 class="f38-700" data-v-aff49dde>${ssrInterpolate(_ctx.$t("Name", { name: "Name" }))}</h2><p class="f14-400" data-v-aff49dde>${ssrInterpolate(_ctx.$t("myJob", { name: "myJob" }))}</p></div><div class="flex w-full justify-center gap-4" data-v-aff49dde>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="twitter-pouria-rahimi" data-v-aff49dde${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "twitter-pouria-rahimi"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="linkdin-pouria-rahimi" data-v-aff49dde${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: "linkdin-pouria-rahimi"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="facebook-pouria-rahimi" data-v-aff49dde${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: "facebook-pouria-rahimi"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="instagram-pouria-rahimi" data-v-aff49dde${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: "instagram-pouria-rahimi"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="instagram-pouria-rahimi" data-v-aff49dde${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
            alt: "instagram-pouria-rahimi"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex w-full shadow-xl bg-white p-9 justify-center items-center" data-v-aff49dde>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/pouria-rahimi.pdf",
    class: "btn bg-[#000] text-white p-3 rounded-lg w-[70%] text-center pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("resume", { name: "resume" }))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("resume", { name: "resume" })), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/userData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-aff49dde"]]);
const homeLayout_vue_vue_type_style_index_0_scoped_fd20fd7a_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutMenu = __nuxt_component_0;
  const _component_LayoutAdvanceUser = __nuxt_component_1;
  const _component_LayoutUserData = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex container layout-yourself-website gap-6 mx-auto flex-col w-full" }, _attrs))} data-v-fd20fd7a>`);
  _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
  _push(`<div class="flex w-full gap-4 sm:p-6 layouts-user flex-wrap relative" data-v-fd20fd7a><div class="flex xl:w-[13%] lg:w-[13%] md:w-[13%] sm:w-[100%] xl:fixed lg:fixed md:fixed Advance-User sm:order-6 justify-center" data-v-fd20fd7a>`);
  _push(ssrRenderComponent(_component_LayoutAdvanceUser, null, null, _parent));
  _push(`</div><div class="flex md:absolute md:w-[61%] sm:order-4 bg-white show-data-page container mx-auto" data-v-fd20fd7a>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="flex flex-col xl:fixed lg:fixed md:fixed xl:right-[4.5%] lg:right-[4.5%] md:right-[1%] User-Data md:w-[27%] items-center j ustify-center sm:order-5 show-resourse-user" data-v-fd20fd7a>`);
  _push(ssrRenderComponent(_component_LayoutUserData, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/homeLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fd20fd7a"]]);
export {
  homeLayout as default
};
//# sourceMappingURL=homeLayout-e2e22ce5.js.map
