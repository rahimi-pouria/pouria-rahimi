import { defineStore } from "pinia";

export interface blogMenu { 
        title: string,
        description: string,
        description2: string,
        writer: string,
        date: string
}

export const useBlogMenu = defineStore('blog', () => { 
    const blogMenu = ref<blogMenu[]>([
        {
            title: 'معرفی فریمورک Nuxt js',
            description: 'جاوااسکریپت (JavaScript) از زبان های برنامه نویسی سمت کلاینت (Client) است. در راستای توسعه زبان ها',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        },
        {
            title: 'معرفی فریمورک Vue js',
            description: 'ویو جی اس یکی از فریمورک های محبوب جاوا اسکریپت هست که در سال 2013 توسط آقای Evan You ارایه شد؛',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        },        {
            title: 'معرفی فریمورک Nuxt js',
            description: 'جاوااسکریپت (JavaScript) از زبان های برنامه نویسی سمت کلاینت (Client) است. در راستای توسعه زبان ها',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        },
        {
            title: 'معرفی فریمورک Vue js',
            description: 'ویو جی اس یکی از فریمورک های محبوب جاوا اسکریپت هست که در سال 2013 توسط آقای Evan You ارایه شد؛',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        },
        {
        title: 'معرفی فریمورک Nuxt js',
        description: 'جاوااسکریپت (JavaScript) از زبان های برنامه نویسی سمت کلاینت (Client) است. در راستای توسعه زبان ها',
        description2: '',
        writer: 'پوریا رحیمی',
        date: '1402/05/02'
    },
    {
        title: 'معرفی فریمورک Vue js',
        description: 'ویو جی اس یکی از فریمورک های محبوب جاوا اسکریپت هست که در سال 2013 توسط آقای Evan You ارایه شد؛',
        description2: '',
        writer: 'پوریا رحیمی',
        date: '1402/05/02'
    }
    ] as blogMenu[])

    return {
        blogMenu
    }
})