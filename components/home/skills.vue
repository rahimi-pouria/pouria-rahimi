<template>
    <div dir="auto" class="flex flex-wrap gap-8 p-4 skills">
        <h4 class="f28-700">
            {{ $t('mySkills', {name: 'mySkills'}) }}
        </h4>
        <div class="flex w-full flex-wrap sikll-mobil">
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/html5.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/css.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/javascript.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/bootstrap.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/vue.png" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/nuxtlogo.png" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/Pinialogo.svg.png" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/typescript.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/vuetify-logo.png" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/react.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/redux.png" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/sass.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/tailwind.svg" class="w-[60%]" alt="">
            </div>
            <div class="flex w-[13%] skills-responsive items-center justify-center">
                <img src="@/assets/img/vscode-icons_file-type-vscode.svg" class="w-[60%]" alt="">
            </div>
        </div>
    </div>  
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
// responsive
@media screen and (max-width: 600px) {
    .sikll-mobil{
        flex-wrap: wrap !important;
        gap: 10px;
    }
    .skills-responsive{
        width: 45% !important;
    }
}

</style>