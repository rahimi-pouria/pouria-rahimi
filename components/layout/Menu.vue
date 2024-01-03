<template>
    <div class="flex justify-between md:p-4 w-full relative">
        <div class="flex w-[20%] logo p-4 items-end justify-start">
            <nuxt-link to="/">
                <p class="f48-700">
                    Pouria Rahimi
                </p>
            </nuxt-link>
        </div>
        <div dir="auto" class="flex w-[80%] show-menu items-center justify-center">
            <div class="flex px-5 justify-between items-center"
             v-for="(item, i) in Main.MainMenu" :key="item.id">
                <nuxt-link class="f22-400" :to="item.path">
                {{ $t(`item${item.id}name`) }}
                </nuxt-link>
            </div>
        </div>
        <form class="flex items-center justify-center ">
                <select
                    class="px-6 rounded-xl py-2  bg-white text-black border-none hover:border-none focus:border-none active:border-none selection:border-none"
                    v-model="$i18n.locale">
                    <option
                        class=" focus:border-none active:border-none
                                                                                                                                                                                                                                                    selection:border-none hover:border-none"
                        value="fa">
                        fa</option>
                    <option
                        class=" focus:border-none active:border-none
                                                                                                                                                                                                                                                    selection:border-none hover:border-none"
                        value="en">
                        en</option>

                </select>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// add stores menu data 
import { useMainMenu } from '@/stores/menu'
const Main = useMainMenu()
let sideBar = ref<any>(true)

</script>

<style lang="scss" scoped>
    .side-bar-menu{
        display: none;
    }
.sideBar {
    left: -24px;
    width: 20%;
    background: #fff;
    height: 100vh;
    z-index: 9;
}
@media screen and (max-width: 600px) {
    .show-menu{
        display: none;
    }
    .logo{
        width: 80%;
    }
    .hamburguer-menu-mobile {
    padding-left: 10px;
}
}
@media screen and (min-width: 820px) and (max-width: 1180px) { 
    .hamburguer-menu-mobile{
        padding-left: 0 !important;
    }
}   .logo a p {
    font-size: 30px !important;
}

@media screen and (min-width: 1200px) {

    .show-ham-menu{
        display: none !important;
    }
}

</style>