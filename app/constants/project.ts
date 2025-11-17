import img1 from "../assets/Projects/chat-app.png";
import img2 from "../assets/Projects/application-tracker.png";
import img3 from "../assets/Projects/codeswear.png";
import img4 from "../assets/Projects/mee-shop.png";
import img5 from "../assets/Projects/flavor-feast.png";
import img6 from "../assets/Projects/todo.png";
import img7 from "../assets/Projects/blogverse.png";
import img8 from "../assets/Projects/jobsportal.png";
import img9 from "../assets/Projects/github.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  live: string;
  source: string;
}

export const project: Project[] = [
  {
    id: 1,
    title: "Blogverse",
    description:
      "Responsive Blogging platform where users can create, read,and save blogs with images, categorized for easy access.Built the app using  React.js, Tailwindcss, Clerk, TanstackQuery, Mongodb, Node.js, ImageKit",
    image: img7, // add image here
    live: "https://blog-app-frontend-production.up.railway.app",
    source: "https://github.com/ujalasingh904/blog-app.git",
  },
  {
    id: 2,
    title: "Jobs Portal",
    description:
      "A platform where users can register as candidates to apply for jobs or as recruiters to post job openings. Built using Next.js, Tailwind CSS, Clerk for authentication, MongoDB, Supabase, and ShadCN UI for an intuitive and modern experience. ",
    image: img8, // add image here
    live: "https://jobsportal-gamma.vercel.app",
    source: "https://github.com/ujalasingh904/jobsportal.git",
  },
  {
    id: 3,
    title: "Chat App",
    description:
      "A chat app where,random users can talk to each other in real time.Built the app using React,Node.js,TailwindCss and Socket.io",
    image: img1,
    live: "https://mern-chat-app-tvr8.onrender.com",
    source: "https://github.com/ujalasingh904/mern-chat-app.git",
  },
  {
    id: 4,
    title: "Application Tracker",
    description:
      "A full stack application where users can track their job applications.Built the app using React,Node.js,TailwindCss and MongoDB",
    image: img2,
    live: "https://application-tracker-nq3b.onrender.com/",
    source: "https://github.com/ujalasingh904/Application-tracker.git",
  },
  {
    id: 5,
    title: "Codeswear",
    description:
      "A frontend application where users can see trendy cloths.Built the app using React,TailwindCss and javascript",
    image: img3,
    live: "https://codeswear-com.netlify.app/",
    source: "https://github.com/ujalasingh904/Codeswear.com.git",
  },
  {
    id: 6,
    title: "Mee Shop",
    description:
      "An e-commerce application where users can buy electronic products.Built the app using React,Html,TailwindCss and javascript",
    image: img4,
    live: "https://mee-shop.netlify.app/",
    source: "https://github.com/ujalasingh904/Mee-Shop.git",
  },
  {
    id: 7,
    title: "Flavor Feast",
    description:
      "Food web app where users can order food in minutes.Built the app using React,Html, Css and javascript",
    image: img5,
    live: "https://flavor-feast.netlify.app/",
    source: "https://github.com/ujalasingh904/Food-app.git",
  },
  {
    id: 8,
    title: "Todo App",
    description:
      "An application where users can manage their work by writing todos.Built the app using React,Html, Css and javascript",
    image: img6,
    live: "https://todo-website-app.netlify.app/",
    source: "https://github.com/ujalasingh904/To-do-Web-app.git",
  },
  {
    id: 9,
    title: "Github Finder",
    description:
      "A web application where users can search for github users and see their repositories,also they can find popular programming languages repositry.Built the app using React , TailwindCss , Node.js , Express.js , Mongodb , Passport.js and Github API",
    image: img9,
    live: "https://github-2-0-p7d6.onrender.com",
    source: "https://github.com/ujalasingh904/Github-2.0.git",
  },
];
