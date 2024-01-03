import { defineStore } from "pinia";

// interface

export interface blog { 
    Blogtitle: string,
    description: string,
    description2: string,
    writer: string,
    date: string,
    id: number
}

export const useBlogHome = defineStore('blog', () => { 
    const blogHome = ref<blog[]>([
        {   
            id: 1,
            Blogtitle: 'معرفی فریمورک Nuxt js',
            description: 'جاوااسکریپت (JavaScript) از زبان های برنامه نویسی سمت کلاینت (Client) است. در راستای توسعه زبان ها',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        },
        {
            id: 2,
            Blogtitle: 'معرفی فریمورک Vue js',
            description: 'ویو جی اس یکی از فریمورک های محبوب جاوا اسکریپت هست که در سال 2013 توسط آقای Evan You ارایه شد؛',
            description2: '',
            writer: 'پوریا رحیمی',
            date: '1402/05/02'
        }
    ] as blog[])

    return {
        blogHome
    }
})
