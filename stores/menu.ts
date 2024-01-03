import { defineStore } from "pinia";

// interface array

export interface MainMenu { 
    name: string,
    path: string,
    id: number
}

export const useMainMenu = defineStore('menu', () => { 
    const MainMenu = ref<MainMenu[]>([
        {
            id: 1,
            name: 'خانه',
            path: '/'
        },
        {
            id: 2,
            name: 'نمونه کارها',
            path: '/Portfolio'
        },
        {
            id: 3,
            name: 'بلاگ',
            path: '/Blog'
        }
    ] as MainMenu[])

    // return
    return {
        MainMenu
    }
})