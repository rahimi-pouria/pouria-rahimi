import { defineStore } from "pinia";

// interface
export interface protSample { 
    nameSAmple: string,
    descriptionSample: string,
    pathCode: string,
    pathView: string,
    photo: string,
    id: number
}

export const useSamplePOrtFolio = defineStore('samples', () => { 
    const portData = ref<protSample[]>([
        {
            id: 1,
            nameSAmple: 'پنل ادمین اجاره صندلی آرایشگاه',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: '@/assets/img/login.jpg'
        },
        {
            id: 2,
            nameSAmple: 'چت آنلاین',
            descriptionSample: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: '~/assets/img/chat.jpg'
        }
        
    ] as protSample[])


    return {
        portData
    }
})