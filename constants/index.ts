import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


export type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};
export const SKILL_DATA: Skill[] = [
  // 🖥️ Programming Languages
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },

  // 🎨 Frontend Technologies
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },

  // ⚙️ Backend Technologies
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },

  // 🗄️ Databases
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Supabase",
    image: "supabase.png",
    width: 80,
    height: 80,
  },

  // ☁️ Cloud & Hosting
  {
    skill_name: "Github",
    image: "github.png",
    width: 80,
    height: 80,
  },
  
   {
    skill_name: "Typescript",
    image: "typescript.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Netlify",
    image: "netlify-logo.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub Pages",
    image: "github.png",
    width: 80,
    height: 80,
  },{
    skill_name: "Render",
    image: "render.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Railway",
    image: "railway.png",
    width: 80,
    height: 80,
  },
] as const;


export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL: Skill[] = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL: Skill[] = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },


] as const;

export const FULLSTACK_SKILL: Skill[] = [
] as const;

export const OTHER_SKILL: Skill[] = [

] as const;

export const PROJECTS = [
   {
    title: "Neurohub",
    image: "/projects/nuerohub.png",
    link: "https://nuerohub.vercel.app/",
    description:
      "A neurodiverse support platform with tools for learning, daily routines, community engagement, and accessibility features like text-to-speech and focus tools.",
  },
  {
    title: "CraveFinder",
    image: "/projects/cravefinder.png",
    link: "https://crave-finder.vercel.app/",
    description:
      "A modern food discovery app to explore restaurants, cafes, and local eateries with a clean UI and seamless browsing experience.",
  },
  {
    title: "Redestiny",
    image: "/projects/redestiny.png",
    link: "https://redestiny.netlify.app/",
    description:
      "A creative project showcasing interactive design and engaging user experiences with a focus on UI aesthetics and responsive layouts.",
  },
  {
    title: "SIH - Innovation & Startups For Gujarat",
    image: "/projects/sihgujarat.png",
    link: "https://innovationgujarat.vercel.app/",
    description:
      "A comprehensive platform for managing research, IPR, innovation projects, and startups in Gujarat, developed for Smart India Hackathon.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Sujay149/",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sujaybabu",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:sujayss149@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
    {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },

] as const;


