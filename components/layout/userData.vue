<template>
<!-- user data -->
                <div class="flex flex-col gap-9 bg-[#2eca7f] w-full p-6 items-center justify-center">
                    <img src="@/assets/img/profile-pic.png" class="rounded-full w-[195px] h-[195px]" alt="pouria rahimi">
                    <div class="flex flex-col gap-9 items-center">
                        <h2 class="f38-700">
                            {{ $t('Name', { name: 'Name' }) }}
                        </h2>
                    <p class="f14-400">  {{ $t('myJob', { name: 'myJob' }) }} </p>
                    </div>
                    <div class="flex w-full justify-center gap-4">
                        <nuxt-link to="/">
                            <img src="@/assets/img/twiter.png" alt="twitter-pouria-rahimi">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="@/assets/img/linkdin.png" alt="linkdin-pouria-rahimi">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="@/assets/img/facebook.png" alt="facebook-pouria-rahimi">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="@/assets/img/instagram.png" alt="instagram-pouria-rahimi">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="@/assets/img/telegram.png" alt="instagram-pouria-rahimi">
                        </nuxt-link>

                    </div>
                </div>
                <div class="flex w-full shadow-xl bg-white p-9 justify-center items-center">
                    <nuxt-link to="/pouria-rahimi.pdf" 
                    class="btn bg-[#000]
                     text-white p-3 rounded-lg 
                     w-[70%] text-center
                      pointer">{{ $t('resume', { name: 'resume' }) }}</nuxt-link>
                </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// responsive
    @media screen and (max-width: 600px) {  
        .show-resourse-user{
            width: 100% !important;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .User-Data{
            right: 1.5%;
        }
    }

</style>