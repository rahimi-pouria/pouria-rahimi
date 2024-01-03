<template>
    <div dir="auto" class="flex flex-col p-4 gap-8">
        <h4 class="f28-700"> 
            {{ $t('experience', {name: 'experience'}) }}
        </h4>
        <div class="flex flex-wrap w-full">
            <div v-for="(item, i) in experience.exper" :key="item.id" 
            class="flex flex-col w-[50%] expirence-responsive gap-4 p-4 items-start">
                <img src="@/assets/img/designer.png" class="w-[90px] mr-[-16px]" alt="">
                <h5 class="f22-400 title-responsive">
                    {{ $t(`item${item.id}title`) }}
                    <!-- {{ $t('experience', {name: 'experience'}) }} -->
                </h5>
                <div class="flex gap-1">
                    <span class="f18-400 text-[#919191]"> 
                        {{ $t('position', {name: 'position'}) }}
                    </span>
                    :
                    <span class="f18-400 text-[#919191]">
                    {{ $t(`item${item.id}jobTitle`) }}
                    </span>
                </div>
                <p class="f18-400 decription text-[#919191]">
                    {{ $t(`item${item.id}description`) }}
                </p>
                <p class="text-[#919191]"> 
                    {{ $t('Companylocation1', {name: 'Companylocation1'}) }} : 

                  {{ $t(`item${item.id}location`) }}
                  
                </p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useExperience } from '@/stores/experience'
const experience = useExperience()

</script>

<style lang="scss" scoped>
    .decription{
        line-height: 1.5;
    }
// responsive

@media screen and (max-width: 600px) {
    .expirence-responsive{
        width: 100% !important;
    }
    .title-responsive{
        font-size: 18px;
    }
}

</style>