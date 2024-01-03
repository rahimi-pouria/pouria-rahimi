<template>
    <div dir="auto" class="sample p-3 flex flex-col gap-8">
        <h4 class="f28-700">
            {{ $t('Articles', {name: 'Articles'}) }}
        </h4>
        <div class="flex blog-mobile w-full gap-3">
            <div v-for="(item, i) in blog.blogHome" 
            :key="i"
            class="flex flex-col card-blog-mobile w-[50%] gap-3 shadow-xl">
                <!-- header  -->
                <div class="header-card flex">
                   <img src="@/assets/img/nuxt.jpg" alt="">
                </div>
                <!-- body -->
                <div class="flex flex-col gap-5 justify-between">
                    <div class="flex flex-col p-4 gap-3">
                        <h5 class="f28=400">
                         {{ $t(`item${item.id}Blogtitle`) }}
                         </h5>
                        <p class="text-[#919191]">
                        {{ $t(`item${item.id}descBlog`) }}
                        </p>
                    </div>
                    <div class="flex w-full justify-between gap-3 p-4">
                        <p class="f14-400 rounded-lg bg-[#2eca7f] p-2">
                            {{ $t(`item${item.id}writer`) }}
                        </p>
                        <p class="f14-400 rounded-lg bg-[#2eca7f] p-2">{{ item.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBlogHome } from '@/stores/BlogsHome'

const blog = useBlogHome()
</script>

<style lang="scss" scoped>
    // responsive
@media screen and (max-width: 600px) {
    .blog-mobile{
        flex-wrap: wrap;
        gap: 15px;
    }
    .card-blog-mobile{
        width: 100% !important;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .blog-mobile{
        flex-wrap: wrap;
    }
    .card-blog-mobile{
        width: 100% !important;
    }
}
@media screen and (min-width: 820px) and (max-width: 1180px) {
    .blog-mobile{
        flex-wrap: wrap;
    }
    .card-blog-mobile{
        width: 100% !important;
    }
}
</style>