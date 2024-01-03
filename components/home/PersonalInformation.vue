<template>
    <div class="flex flex-wrap w-full">
        <div dir="auto" class="flex flex-col p-4 gap-8 md:w-[70%]">
            <h4 class="f28-700 personal"> 
                {{ $t('PersonalInformation', {name: 'PersonalInformation'}) }}
            </h4>
            <div class="flex gap-8  flex-col w-full">
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('Age', {name: 'Age'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        32
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('Address', {name: 'Address'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        {{ $t('Tehran', {name: 'Tehran'}) }}
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('Address2', {name: 'Address2'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] break-words w-[75%]">
                        {{ $t('HomeAddress', {name: 'HomeAddress'}) }}
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('Email', {name: 'Email'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] break-words w-[75%]">
                        pouria.rahimy@gmail.com
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('PhoneNumber', {name: 'PhoneNumber'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        09184095907 - 09220529612
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        {{ $t('cooperate', {name: 'cooperate'}) }}
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        {{ $t('work', {name: 'work'}) }}
                    </p>
                </div>
            </div>
        </div>
        <div dir="auto" class="flex flex-col p-4 gap-5 md:w-[30%] faviorate">
            <h4 class="f28-700"> 
                {{ $t('faviorate', {name: 'faviorate'}) }}
            </h4>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/shatrang.png" alt="">
                <p class="f18-400 text-[#919191]">
                    {{ $t('Chess', {name: 'Chess'}) }}
                </p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/music.png" alt="">
                <p class="f18-400 text-[#919191]">
                    {{ $t('Music', {name: 'Music'}) }}
                </p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/footbal.png" alt="">
                <p class="f18-400 text-[#919191]">
                    {{ $t('Soccer', {name: 'Soccer'}) }}
                </p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/food.png" alt="">
                <p class="f18-400 text-[#919191]">
                    {{ $t('hamburger', {name: 'hamburger'}) }}
                </p>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>


// responsive

@media screen and (max-width: 600px) {
    .personal{
        width: 100% !important;
    }
    .faviorate{
        width: 100%;
    }
}
</style>