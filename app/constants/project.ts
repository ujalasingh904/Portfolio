import img1 from "../assets/Projects/chat-app.png";
import img2 from "../assets/Projects/application-tracker.png";
import img3 from "../assets/Projects/codeswear.png";
import img4 from "../assets/Projects/mee-shop.png";
import img5 from "../assets/Projects/flavor-feast.png";
import img6 from "../assets/Projects/todo.png";
import  { StaticImageData } from "next/image";

interface Project {
    id:number,
    title:string,
    description:string,
    image: string | StaticImageData,
    live:string,
    source:string
}

export const project:Project[] = [
  {
    id: 1,
    title: "Chat App",
    description: "A chat app where,random users can talk to each other in real time.Built the app using React,Node.js,TailwindCss and Socket.io",
    image: img1,
    live: "https://mern-chat-app-tvr8.onrender.com",
    source: "https://github.com/ujalasingh904/mern-chat-app.git"
  },
    {
        id: 2,
        title: "Application Tracker",
        description: "A full stack application where users can track their job applications.Built the app using React,Node.js,TailwindCss and MongoDB",
        image: img2,
        live: "https://application-tracker-nq3b.onrender.com/",
        source: "https://github.com/ujalasingh904/Application-tracker.git"
    },
    {
        id: 3,
        title: "Codeswear",
        description: "A frontend application where users can see trendy cloths.Built the app using React,TailwindCss and javascript",
        image: img3,
        live: "https://codeswear-com.netlify.app/",
        source: "https://github.com/ujalasingh904/Codeswear.com.git"
    },
    {
        id: 4,
        title: "Mee Shop",
        description: "An e-commerce application where users can buy electronic products.Built the app using React,Html,TailwindCss and javascript",
        image: img4,
        live: "https://mee-shop.netlify.app/",
        source: "https://github.com/ujalasingh904/Mee-Shop.git"
    },
    {
        id: 5,
        title: "Flavor Feast",
        description: "Food web app where users can order food in minutes.Built the app using React,Html, Css and javascript",
        image: img5,
        live: "https://flavor-feast.netlify.app/",
        source: "https://github.com/ujalasingh904/Food-app.git"
    },
    {
        id: 6,
        title: "Todo App",
        description: "An application where users can manage their work by writing todos.Built the app using React,Html, Css and javascript",
        image: img6,
        live: "https://todo-website-app.netlify.app/",
        source: "https://github.com/ujalasingh904/To-do-Web-app.git"
    },
];
