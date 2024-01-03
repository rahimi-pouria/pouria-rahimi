<template>
    <div dir="auto" class="flex flex-col p-4 gap-8  w-full" id="ContactMe">
        <h3 class="f28-700" dir="auto">
            {{ $t('About', { name: 'About' }) }}
        </h3>
        <p class="f22-400 text-[#565656]" dir="auto">
           {{ $t('Introduction', {name: 'Introduction'}) }}
        </p>
        <p class="14-400 pararaph-about-me" dir="auto">
            {{ $t('description', { name: 'description' }) }}
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.pararaph-about-me {
    line-height: 2.8;
}
</style>