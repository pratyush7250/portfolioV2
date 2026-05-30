import project_food from '../assets/food.png'
import project_food_admin from '../assets/foodAdmin.png'
import project_udvavisk from '../assets/udvavisk.png'
import project_safari from '../assets/safari.png'
import project_chat from '../assets/chat.png'
import project_api from '../assets/apibuilder.png'
import icon_react from './tech_logo/reactjs.png'
import icon_angular from './tech_logo/angular.png'
import icon_nodejs from './tech_logo/nodejs.png'
import icon_mongo from './tech_logo/mongodb.png'
import icon_css from './tech_logo/css.png'
import icon_express from './tech_logo/express.png'
import icon_tailwind from './tech_logo/tailwindcss.png'
import icon_wix from './tech_logo/wix.jpg'
import icon_figma from './tech_logo/figma.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "API Builder",
        w_img: project_api,
        link: 'https://api-builder-85z7.onrender.com/',
        tech_icons: [icon_angular, icon_nodejs, icon_mongo, icon_css,icon_figma] // Add icons here
    },
    {
        w_no: 2,
        w_name: "Udvavisk",
        w_img: project_udvavisk,
        link: 'https://www.udvavisk.com/',
        tech_icons: [icon_wix,icon_figma] // Add icons here

    },
    {
        w_no: 3,
        w_name: "Chat",
        w_img: project_chat,
        link: 'https://chitchat-juxw.onrender.com/',
        tech_icons: [icon_react, icon_nodejs, icon_mongo,icon_tailwind,icon_figma] // Add icons here

    },
    {
        w_no: 4,
        w_name: "Food",
        w_img: project_food,
        link: 'https://foodie-wd80.onrender.com/',
        tech_icons: [icon_react, icon_nodejs, icon_mongo, icon_css,icon_figma] // Add icons here

    },
    {
        w_no: 5,
        w_name: "Food Admin",
        w_img: project_food_admin,
        link: 'https://foodie-admin-pa99.onrender.com/',
        tech_icons: [icon_react, icon_nodejs, icon_mongo, icon_css,icon_figma] // Add icons here


    }, {
        w_no: 6,
        w_name: "Safari",
        w_img: project_safari,
        link: 'https://safari-hc1d.onrender.com/',
        tech_icons: [icon_react,icon_tailwind,icon_figma] // Add icons here


    },
]

export default mywork_data;
