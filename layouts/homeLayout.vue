<template>
    <div class="flex container layout-yourself-website gap-6 mx-auto flex-col w-full">
        <LayoutMenu/>
        <div class="flex w-full gap-4 sm:p-6 layouts-user flex-wrap relative">
            <!-- menu-user -->
            <div class="flex xl:w-[13%] lg:w-[13%] 
            md:w-[13%] sm:w-[100%] xl:fixed 
            lg:fixed md:fixed Advance-User sm:order-6 justify-center">
                <LayoutAdvanceUser/>
            </div>
            <div class="flex md:absolute md:w-[61%] sm:order-4 
            bg-white show-data-page container mx-auto">
                <slot />
            </div>
            <div class="flex flex-col xl:fixed lg:fixed 
            md:fixed xl:right-[4.5%] 
            lg:right-[4.5%] md:right-[1%]
             User-Data md:w-[27%] items-center j
             ustify-center sm:order-5 show-resourse-user">
                <LayoutUserData/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .Advance-User{
        left: 0;
    }
    .show-data-page{
        left: 8%;
        z-index: -1;
    }
    // responsive
    @media screen and (max-width: 600px) {  
        .layout-yourself-website{
            padding: 0 25px;
        }
        .show-data-page {
            left: 1%;
            width: 98%;
            order: 1;
        }
        .Advance-User{
            width: 100% !important;
        }
        .layouts-user{
            gap: 20px;
        }
        .show-resourse-user{
            width: 100% !important;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .show-data-page{
            left: 11%;
        }
    }
    @media screen and (min-width: 820px) and (max-width: 1180px) {
        .show-data-page{
            left: 9%;
        } 
        .show-resourse-user{
        right: 3% !important;
        }
    }
</style>