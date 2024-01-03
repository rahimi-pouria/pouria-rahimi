<template>
    <div class="flex xl:flex-col lg:flex-col md:flex-col 
    bg-white w-[40%] rounded-full py-3 items-center px-3 options-menu sm:order-6">
        <div class="flex flex-col gap-9 relative  w-full link-advance justify-center">
            <nuxt-link to="/">
                <img
                 src="@/assets/img/profile-pic.png" 
                 class="rounded-full photo-advance w-[65px]" alt="">
            </nuxt-link>
            <nuxt-link to="/pouria-rahimi.pdf" class="flex justify-center">
                <img src="@/assets/img/resume.png" class="photo-advance  w-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/Portfolio" class="flex justify-center">
                <img src="@/assets/img/nemoneh.png" class="photo-advancew-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/Blog" class="flex justify-center">
                <img src="@/assets/img/blog.png" class="photo-advance w-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/#ContactMe" class="flex justify-center">
                <img src="@/assets/img/contact.png" class="photo-advance w-[40px] h-[40px]" alt="">
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
let toolTipsHome = ref<any>(true)
let toolTipsResume = ref<any>(true)
</script>

<style lang="scss" scoped>
.show-name{
    top: 3px;
    left: 100%;
    padding: 10px;
    z-index: 999;
}
.show-resume{
    top: 23%;
    left: 100%;
    padding: 10px;
    z-index: 999;
}
.showHome{
    display: none;
}
.show-resume-file{
    display: none;
}
// responsive
@media screen and (max-width: 600px) {
    .options-menu{
        width: 100% !important;
        order: 6;
    }
    .photo-advance{
        width: 50px !important;
    }
    .link-advance {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) { 
    .options-menu{
        width: 60% !important;
    }
}
@media screen and (min-width: 820px) and (max-width: 1180px) { 
    .options-menu{
        width: 60% !important;
    }

}
</style>