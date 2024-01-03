<template>
    <div dir="auto" class="flex flex-col p-4 gap-1 pb-4 bg-white w-full">
        <h4 class="f28-400">
            {{ $t('Articles', {name: 'Articles'}) }}
        </h4>
        <p class="f18-400 text-[#919191] text-blog">
            {{ $t('descArticels', {name: 'descArticels'}) }} 
        </p>
        <img src="@/assets/img/create.jpg" alt="">
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'home-layout'
})
</script>

<style lang="scss" scoped>
.text-blog{
    line-height: 2.5;
}
// responsive
@media screen and (max-width: 600px) {
    .blog-mobile{
        width: 100%;
    }
}

</style>