<template>
    <div dir="auto" class="samples p-4 flex flex-wrap gap-8">
        <h4 class="f28-700">
            {{ $t('portfolio', {name: 'portfolio'}) }}
        </h4>
        <div class="flex flex-wrap w-full gap-4 pr-2">
            <div v-for="(item, i) in sample" 
            :key="i"
            class="flex flex-col portfolio-mobile w-[48%] gap-3 shadow-xl">
                <!-- header  -->
                <div class="header-card flex">
                   <img src="@/assets/img/login.jpg" alt="">
                </div>
                <!-- body -->
                <div class="flex flex-col gap-5 justify-between">
                    <div class="flex flex-col p-4 gap-3">
                        <h5 class="f28=400"> 
                        {{ $t(`item${item.id}titlePortFolio`) }}
                        </h5>
                        <p class="text-[#919191]">
                        {{ $t(`item${item.id}descSample`) }}

                        </p>
                    </div>
                    <div class="flex w-full justify-between gap-3 p-4">
                        <nuxt-link to="/" class="f14-400 rounded-lg bg-[#2eca7f] p-2">
                            {{ $t('seeProject', {name: 'seeProject'}) }}
                        </nuxt-link>
                        <nuxt-link to="/" class="f14-400 rounded-lg bg-[#2eca7f] p-2">
                            {{ $t('seeSourceCode', {name: 'seeSourceCode'}) }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
            layout: 'home-layout'
    })
const sample = [
    {   
            id: 1,
            titlePortFolio: 'سایت شخصی پوریا رحیمی',
            descSample: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه برای معرفی هر چه بهتر اینجانب به کارفرمایان عزیز  پیاده سازی شده است.',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: 'https://pouria-rahimi.ir',
            photo: 'login.jpg'
        },
        {
            id: 2,
            titlePortFolio: 'پنل ادمین اجاره صندلی آرایشگاه',
            descSample: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است و بر اساس میدلور دسترسی ها مشخص شده است',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: 'login.jpg'
        },
        {   id:  3,
            titlePortFolio: 'چت آنلاین',
            descSample: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        },
        {
            id: 4,
            titlePortFolio: 'پنل ادمین همانند وردپرس',
            descSample: 'این پروژه بر اساس ویو جی اس و ناکست سه و تایپ اسکریپت و پینیا پیاده سازی شده اکه بنا بر خواسته شرکت رها طب و طرح فیگما انجام شده است ',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: 'login.jpg'
        },
        {   
            id: 5, 
            titlePortFolio: 'بازی  پازل',
            descSample: 'این پروژه با ری اکت جی اس پیاده سازی شده است. این زمانی پیاده سازی شد که بنده برای استخدامی شرکت بامداد اقدام کرده بودم و این  پروژه تسکی بود برای ورود به شرکت بامداد',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        },
        {
            id: 6,
            titlePortFolio: 'بازی  اسکویید گیم',
            descSample: 'این پروژه با ری اکت جی اس پیاده سازی شده است این پروژه رو در شرکت آیشن زمانی که آخرین مرحله استخدامی بودم پیاده سازی شد و بر این اسا مورد تایید منتور قرار گرفت  ',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        }
]
    
</script>

<style lang="scss" scoped>
// responsive
@media screen and (max-width: 600px) {
    .portfolio-mobile{
        width: 100%;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .portfolio-mobile {
        width: 100% !important;
    }
}
@media screen and (min-width: 820px) and (max-width: 1180px) {
    .sample-mobile{
        flex-wrap: wrap;
    }
    .card-mobile{
        width: 100% !important;
    }
}
</style>