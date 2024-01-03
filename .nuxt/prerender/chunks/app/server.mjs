import { version, getCurrentInstance, inject, ref, watchEffect, watch, useSSRContext, createApp, reactive, markRaw, effectScope, isRef, isReactive, toRef, toRaw, nextTick, computed, unref, getCurrentScope, onScopeDispose, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRefs, shallowRef, isReadonly, defineAsyncComponent, withCtx, defineComponent, h, Suspense, Transition } from 'file://D:/myPortFolioWebSite/node_modules/vue/index.mjs';
import { $fetch } from 'file://D:/myPortFolioWebSite/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file://D:/myPortFolioWebSite/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://D:/myPortFolioWebSite/node_modules/unctx/dist/index.mjs';
import { renderSSRHead } from 'file://D:/myPortFolioWebSite/node_modules/@unhead/ssr/dist/index.mjs';
import { getActiveHead, createServerHead as createServerHead$1 } from 'file://D:/myPortFolioWebSite/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/myPortFolioWebSite/node_modules/@unhead/shared/dist/index.mjs';
import { createMemoryHistory, createRouter, useRoute as useRoute$1, RouterView } from 'file://D:/myPortFolioWebSite/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file://D:/myPortFolioWebSite/node_modules/h3/dist/index.mjs';
import { hasProtocol, parseURL, joinURL } from 'file://D:/myPortFolioWebSite/node_modules/ufo/dist/index.mjs';
import { createI18n } from 'file://D:/myPortFolioWebSite/node_modules/vue-i18n/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file://D:/myPortFolioWebSite/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file://D:/myPortFolioWebSite/node_modules/defu/dist/defu.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/destr/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/scule/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/klona/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/ohash/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unstorage/dist/index.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/myPortFolioWebSite/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://D:/myPortFolioWebSite/node_modules/ipx/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.callAsync(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin2 of _plugins2) {
    if (typeof plugin2 !== "function") {
      continue;
    }
    let _plugin = plugin2;
    if (plugin2.length > 1) {
      _plugin = (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin2, meta) {
  var _a;
  if (typeof plugin2 === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin2 }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin2.hooks) {
      nuxtApp.hooks.addHooks(plugin2.hooks);
    }
    if (plugin2.setup) {
      return plugin2.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin2.name || ((_a = plugin2.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin2.order || orderMap[plugin2.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      {
        throw new Error("[nuxt] instance unavailable");
      }
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol("pinia") ;
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration") ;
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } 
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) );
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || currentInstance && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const __nuxt_page_meta$3 = {
  layout: "home-layout"
};
const __nuxt_page_meta$2 = {
  layout: "home-layout"
};
const __nuxt_page_meta$1 = {
  layout: "home-layout"
};
const __nuxt_page_meta = {
  layout: "home-layout"
};
const _routes = [
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "Blog",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/Blog",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_nuxt/index-73aa8e3b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "Blog-previewBlog",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/Blog/previewBlog",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/previewBlog-2771f345.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "Portfolio",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/Portfolio",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/index-93a59c2c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "index",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/index-2d86d081.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position2 = savedPosition || void 0;
    if (!position2 && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position2 = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position2 = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position2);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else if (to.redirectedFrom) {
        await callWithNuxt(nuxtApp, navigateTo, [to.fullPath || "/"]);
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
const Name$1 = "Pouria Rahimi";
const myJob$1 = "Front-end developer (Vue js & Nuxt Js)";
const item1name$1 = "home";
const portfolio$1 = "portfolio";
const item2name$1 = "portfolio";
const item3name$1 = "blog";
const About$1 = "AboutMe";
const Introduction$1 = "Hello, my name is Pouria Rahimi";
const description$1 = "I have been working in front programming for a year and a half. I started with React JS in 1400, and Squid Game and Puzzle Game and my personal website, which is also written with Next. It works, it's only important for me to write a program.";
const PersonalInformation$1 = "Personal Information";
const Age$1 = "Age";
const Address$1 = "residence";
const Address2$1 = "Address";
const Email$1 = "Email";
const PhoneNumber$1 = "Phone Number";
const cooperate$1 = "cooperate";
const Chess$1 = "Chess";
const Music$1 = "Music";
const Soccer$1 = "Soccer";
const hamburger$1 = "hamburger";
const mySkills$1 = "my skills";
const experience$1 = "Experience";
const item1title$1 = "Digital Marketing Company Bamdad";
const item2title$1 = "Trader 4 Company";
const item1position$1 = "In January 2021, I was hired by Bammad company and I did the Lornia project with vue js and nuxt js.";
const position$1 = "job position";
const item1jobTitle$1 = "Front-end developer (Vue js)";
const item2jobTitle$1 = "Front-end developer (Vue js)";
const item1description$1 = "In January 1400, I was hired by Bammad company , and I did the";
const item2description$1 = "On January 28, 1401, I was hired remotely at Trader Four, and we were customizing the Metronic format.";
const item1location$1 = "Tehran";
const item2location$1 = "England";
const item1nameSAmple$1 = "Admin panel for renting barbershop chairs";
const item2nameSAmple$1 = "online chat";
const item1descriptionSample$1 = "This project is implemented with NextJS 3, Pinia and Typescript. This project is remote and is done for a person.";
const item2descriptionSample$1 = "This project has been implemented with NextJS 3, Pinia and TypeScript, which was used on the lrnia site, and was carried out";
const company2$1 = "Trader company 4";
const Companylocation1$1 = "Company location";
const Companylocation2$1 = "England";
const portfolio2$1 = "portfolio";
const TitlePortfolio1$1 = "Admin panel for renting barbershop chairs";
const TitlePortfolio2$1 = "online chat";
const descPortFolio1$1 = "This project is implemented with NextJS3, Pinia, and Typescript. This project is remote and done for a person.";
const descPortFolio2$1 = "This project is implemented with NextJS3, Pinia and TypeScript, which is used on the Lornia site, and is done at Bammad company.";
const Articles$1 = "Articles";
const item1Blogtitle$1 = "Introduction of Nuxt js framework";
const item2Blogtitle$1 = "Introducing the Vue js framework";
const item1descBlog$1 = "JavaScript is one of the client-side programming languages. In line with the development of languages item1descBlog";
const item2descBlog$1 = "Vue JS is one of the popular JavaScript frameworks that was presented by Mr. Evan You in 2013;";
const titleArticle1$1 = "Introduction of Nuxt js framework";
const titleArticle2$1 = "Introducing the Vue js framework";
const descArticle1$1 = "JavaScript is one of the client-side programming languages. In line with the development of languages";
const descArticle2$1 = "Vue JS is one of the popular JavaScript frameworks that was presented by Mr. Evan You in 2013";
const item1writer$1 = "pouria rahimy";
const item2writer$1 = "pouria rahimy";
const seeMore$1 = "see more";
const ShowProject$1 = "Show project";
const Tehran = "Tehran";
const HomeAddress$1 = "No. 12, No. 12, Shariati St., Moalem St., Gohri St., Khoremi Shad Alley, Tekeh Alley, Tehran";
const resume$1 = "download Resume";
const work$1 = "Full time - part time - telecommuting";
const faviorate$1 = "faviorate";
const seeProject$1 = "seeProject";
const seeSourceCode$1 = "seeSourceCode";
const item1titlePortFolio$1 = "Pouria Rahimi's personal site";
const item2titlePortFolio$1 = "Admin panel for renting barbershop chairs";
const item3titlePortFolio$1 = "online chat";
const item4titlePortFolio$1 = "Admin panel like WordPress";
const item5titlePortFolio$1 = "Puzzle Game";
const item6titlePortFolio$1 = "Squid game";
const item1descSample$1 = "This project has been implemented with NextJS 3, Pinia and TypeScript. This project has been implemented to introduce myself to dear employers.";
const item2descSample$1 = "This project is implemented with NextJS 3, Pinia, and TypeScript. This project is remote and done for a person, and the accesses are specified based on Middleware.";
const item3descSample$1 = "This project is implemented with NextJS 3, Pinia and TypeScript, which is used on the Lrnia site, and is done at Bammad company.";
const item4descSample$1 = "This project was implemented based on Vue JS, Next 3, TypeScript, and Pinia, as requested by Raha Teb and Figma design.";
const item5descSample$1 = "This project is implemented with React JS. This was implemented when I applied for a job at Bammad company and this project was a task to enter Bammad company.";
const item6descSample$1 = "This project has been implemented with React JS. This project was implemented in Aishan company when I was in the last stage of employment, and accordingly,";
const descArticels$1 = "Hello, to all my dear friends who visit my site. We are sorry for encountering this page from our website. We are building a blog page. In the near future, we will be at your service with updated articles.";
const en = {
  Name: Name$1,
  myJob: myJob$1,
  item1name: item1name$1,
  portfolio: portfolio$1,
  item2name: item2name$1,
  item3name: item3name$1,
  About: About$1,
  Introduction: Introduction$1,
  description: description$1,
  PersonalInformation: PersonalInformation$1,
  Age: Age$1,
  Address: Address$1,
  Address2: Address2$1,
  Email: Email$1,
  PhoneNumber: PhoneNumber$1,
  cooperate: cooperate$1,
  Chess: Chess$1,
  Music: Music$1,
  Soccer: Soccer$1,
  hamburger: hamburger$1,
  mySkills: mySkills$1,
  experience: experience$1,
  item1title: item1title$1,
  item2title: item2title$1,
  item1position: item1position$1,
  position: position$1,
  item1jobTitle: item1jobTitle$1,
  item2jobTitle: item2jobTitle$1,
  item1description: item1description$1,
  item2description: item2description$1,
  item1location: item1location$1,
  item2location: item2location$1,
  item1nameSAmple: item1nameSAmple$1,
  item2nameSAmple: item2nameSAmple$1,
  item1descriptionSample: item1descriptionSample$1,
  item2descriptionSample: item2descriptionSample$1,
  company2: company2$1,
  Companylocation1: Companylocation1$1,
  Companylocation2: Companylocation2$1,
  portfolio2: portfolio2$1,
  TitlePortfolio1: TitlePortfolio1$1,
  TitlePortfolio2: TitlePortfolio2$1,
  descPortFolio1: descPortFolio1$1,
  descPortFolio2: descPortFolio2$1,
  Articles: Articles$1,
  item1Blogtitle: item1Blogtitle$1,
  item2Blogtitle: item2Blogtitle$1,
  item1descBlog: item1descBlog$1,
  item2descBlog: item2descBlog$1,
  titleArticle1: titleArticle1$1,
  titleArticle2: titleArticle2$1,
  descArticle1: descArticle1$1,
  descArticle2: descArticle2$1,
  item1writer: item1writer$1,
  item2writer: item2writer$1,
  seeMore: seeMore$1,
  ShowProject: ShowProject$1,
  Tehran,
  HomeAddress: HomeAddress$1,
  resume: resume$1,
  work: work$1,
  faviorate: faviorate$1,
  seeProject: seeProject$1,
  seeSourceCode: seeSourceCode$1,
  item1titlePortFolio: item1titlePortFolio$1,
  item2titlePortFolio: item2titlePortFolio$1,
  item3titlePortFolio: item3titlePortFolio$1,
  item4titlePortFolio: item4titlePortFolio$1,
  item5titlePortFolio: item5titlePortFolio$1,
  item6titlePortFolio: item6titlePortFolio$1,
  item1descSample: item1descSample$1,
  item2descSample: item2descSample$1,
  item3descSample: item3descSample$1,
  item4descSample: item4descSample$1,
  item5descSample: item5descSample$1,
  item6descSample: item6descSample$1,
  descArticels: descArticels$1
};
const Name = "پوریا رحیمی";
const myJob = " برنامه نویس فرانت(Vue js & Nuxt Js)";
const item1name = "خانه";
const item3name = "بلاگ";
const portfolio = "نمونه کارها";
const item2name = "نمونه کارها";
const About = "درباره من";
const Introduction = "سلام من پوریا رحیمی هستم";
const description = "بنده یک سال و نیم هست که در زمینه برنامه نویسی فرانت فعالیت دارم.             که در سال 1400 با ری اکت جی اس شروع کردم             و بازی اسکویید گیم و بازی پازل و سایت شخصی خودم که هم با ناکست سه نوشته با نکست هم نوشته شده است             بنده آدمی هستم که دنبال پیشرفته و براش مهم نیست که چه فریمورک یا کتابخونه ای کار بکنه فقط این برام مهمه که برنامه بنویسم.";
const PersonalInformation = "اطلاعات شخصی";
const Age = "سن";
const Address = "محل سکونت";
const Address2 = "آدرس";
const Email = "ایمیل";
const PhoneNumber = "شماره تلفن";
const cooperate = "نحوه همکاری";
const Chess = "بازی شطرنج";
const Music = "موسیقی";
const Soccer = "فوتبال";
const hamburger = "همبرگر";
const mySkills = "مهارت های من";
const experience = "سابقه کار";
const item1title = "شرکت دیجیتال مارکتینگ بامداد";
const item2title = "شرکت تریدر 4";
const item1position = "در تاریخ دی ماه 1400 در شرکت بامداد استخدام شدم و پروژه لرنیا با vue js , nuxt js انجام دادم";
const position = "سمت شغلی";
const item1jobTitle = "برنامه نویس فرانت (Vue js)";
const item2jobTitle = "برنامه نویس فرانت (Vue js)";
const item1description = "'در تاریخ دی ماه 1400 در شرکت بامداد استخدام شدم و پروژه لرنیا با vue js , nuxt js انجام دادم";
const item2description = "در 28 دی ماه 1401 در شرکت تریدر فور به صورت ریموت استخدام شدم و قالب مترونیک  رو سفارشی سازی میکردیم";
const item1location = "تهران";
const item2location = "انگلستان";
const item1nameSAmple = "پنل ادمین اجاره صندلی آرایشگاه";
const item2nameSAmple = "چت آنلاین";
const item1descriptionSample = "'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است";
const item2descriptionSample = "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است";
const company2 = "Trader company 4";
const Companylocation1 = "محل شرکت";
const Companylocation2 = "England";
const portfolio2 = "portfolio";
const TitlePortfolio1 = "Admin panel for renting barbershop chairs";
const TitlePortfolio2 = "online chat";
const descPortFolio1 = "This project is implemented with NextJS3, Pinia, and Typescript. This project is remote and done for a person.";
const descPortFolio2 = "This project is implemented with NextJS3, Pinia and TypeScript, which is used on the Lornia site, and is done at Bammad company.";
const Articles = "مقاله ها";
const item1Blogtitle = "معرفی فریمورک Nuxt js";
const item2Blogtitle = "معرفی فریمورک Vue js";
const item1descBlog = "جاوااسکریپت (JavaScript) از زبان های برنامه نویسی سمت کلاینت (Client) است. در راستای توسعه زبان ها item1descBlog";
const item2descBlog = "ویو جی اس یکی از فریمورک های محبوب جاوا اسکریپت هست که در سال 2013 توسط آقای Evan You ارایه شد؛";
const item1writer = "پوریا رحیمی";
const item2writer = "پوریا رحیمی";
const titleArticle1 = "Introduction of Nuxt js framework";
const titleArticle2 = "Introducing the Vue js framework";
const descArticle1 = "JavaScript is one of the client-side programming languages. In line with the development of languages";
const descArticle2 = "Vue JS is one of the popular JavaScript frameworks that was presented by Mr. Evan You in 2013";
const seeMore = "نمایش بیشتر";
const ShowProject = "Show project";
const HomeAddress = "تهران خیابان شریعتی خیابان معلم خیابان گوهری کوچه خرمی شاد کوچه تکیه پلاک 12";
const resume = "دانلود رزومه";
const work = "تمام وقت - پاره وقت - دورکاری";
const faviorate = "علایق";
const seeProject = "نمایش پروژه";
const seeSourceCode = "نمایش سورس کد";
const item1titlePortFolio = "سایت شخصی پوریا رحیمی";
const item2titlePortFolio = "پنل ادمین اجاره صندلی آرایشگاه";
const item3titlePortFolio = "چت آنلاین";
const item4titlePortFolio = "پنل ادمین همانند وردپرس";
const item5titlePortFolio = "بازی  پازل";
const item6titlePortFolio = "بازی  اسکویید گیم";
const item1descSample = "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه برای معرفی هر چه بهتر اینجانب به کارفرمایان عزیز پیاده سازی شده است.";
const item2descSample = "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است و بر اساس میدلور دسترسی ها مشخص شده است";
const item3descSample = "این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است ";
const item4descSample = "این پروژه بر اساس ویو جی اس و ناکست سه و تایپ اسکریپت و پینیا پیاده سازی شده اکه بنا بر خواسته شرکت رها طب و طرح فیگما انجام شده است";
const item5descSample = "این پروژه با ری اکت جی اس پیاده سازی شده است. این زمانی پیاده سازی شد که بنده برای استخدامی شرکت بامداد اقدام کرده بودم و این پروژه تسکی بود برای ورود به شرکت بامداد";
const item6descSample = "این پروژه با ری اکت جی اس پیاده سازی شده است این پروژه رو در شرکت آیشن زمانی که آخرین مرحله استخدامی بودم پیاده سازی شد و بر این اسا مورد تایید منتور قرار گرفت";
const descArticels = "با سلام خدمت همه عزیزانی از سایت اینجانب دیدن میفرمایند. با عرض معذرت بابت روبرو شدن با این برگه از سایت ما در حال ساخت برگه وبلاگ هستیم در آینده ای نزدیک با مقاله های به روز در خدمت شما عزیزان هستی";
const fa = {
  Name,
  myJob,
  item1name,
  item3name,
  portfolio,
  item2name,
  About,
  Introduction,
  description,
  PersonalInformation,
  Age,
  Address,
  Address2,
  Email,
  PhoneNumber,
  cooperate,
  Chess,
  Music,
  Soccer,
  hamburger,
  mySkills,
  experience,
  item1title,
  item2title,
  item1position,
  position,
  item1jobTitle,
  item2jobTitle,
  item1description,
  item2description,
  item1location,
  item2location,
  item1nameSAmple,
  item2nameSAmple,
  item1descriptionSample,
  item2descriptionSample,
  company2,
  Companylocation1,
  Companylocation2,
  portfolio2,
  TitlePortfolio1,
  TitlePortfolio2,
  descPortFolio1,
  descPortFolio2,
  Articles,
  item1Blogtitle,
  item2Blogtitle,
  item1descBlog,
  item2descBlog,
  item1writer,
  item2writer,
  titleArticle1,
  titleArticle2,
  descArticle1,
  descArticle2,
  seeMore,
  ShowProject,
  HomeAddress,
  resume,
  work,
  faviorate,
  seeProject,
  seeSourceCode,
  item1titlePortFolio,
  item2titlePortFolio,
  item3titlePortFolio,
  item4titlePortFolio,
  item5titlePortFolio,
  item6titlePortFolio,
  item1descSample,
  item2descSample,
  item3descSample,
  item4descSample,
  item5descSample,
  item6descSample,
  descArticels
};
const i18n_VfGcjrvSkj = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      fa
    }
  });
  vueApp.use(i18n);
});
const _plugins = [
  plugin,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_jmwsqit4Rs,
  i18n_VfGcjrvSkj
];
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  "home-layout": () => import('./_nuxt/homeLayout-e2e22ce5.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-68e204bc.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-a82355a5.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useRouter as a, createError as c, defineStore as d, entry$1 as default, navigateTo as n, useHead as u };
//# sourceMappingURL=server.mjs.map
