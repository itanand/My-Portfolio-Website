
import Hero_person from "./assets/images/Hero/person.png";


import mongodb from "./assets/images/Skills/mongodb.png";
import aws from "./assets/images/Skills/aws.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import wordpress from "./assets/images/Skills/wordpress.png";
import js from "./assets/images/Skills/js.png";
import docker from "./assets/images/Skills/docker.png";
import linux from "./assets/images/Skills/linux.png";
import github from "./assets/images/Skills/github.png";

import app from "./assets/images/Services/app.png";
import web from "./assets/images/Services/web.png";
import seo from "./assets/images/Services/seo.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/project.png";

import t from "./assets/images/Testimonials/t.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import accenture from "./assets/images/Experience/webshilla.png";
import heatrec from "./assets/images/Experience/heatrec.png";
import webshilla from "./assets/images/Experience/web.png";



import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsNewspaper, BsTwitter } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "DevOps Engineer | Full Stack & Frappe Developer",
    firstName: "Anand",
    LastName: ".",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3.0+",
        text: "Years of Experinse in Software Development",
      },
      {
        count: "20+",
        text: "Development Projects Completed in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Top Skills",
    skills_content: [
      {
        name: "JavaScript",
        para: "JavaScript (js) is a light-weight object-oriented programming language.",
        logo: js,
      },
       {
        name: "Python",
        para: "Python is a high-level, general-purpose programming language.",
        logo: python,
      },
      {
        name: "Frappe ",
        para: "I have 1.5+ years of experiance in Frappe / ERPNext Development.",
        logo: wordpress,
      },
      {
        name: "React JS",
        para: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ",
        logo: reactjs,
      },
      {
        name: "AWS Cloud",
        para: "I have good Command in AWS Services, Sevices like IAM, Ec-2, AWS Lambda, AWS VPS etc.",
        logo: aws,
      },
      {
        name: "Docker",
        para: "I have started learning and implementing docker for Containerized Applications. ",
        logo: docker,
      },
      {
        name: "Linux",
        para: "I have started learning and implementing docker for Containerized Applications. ",
        logo: linux,
      },
      {
        name: "Github",
        para: "I have started learning and implementing docker for Containerized Applications. ",
        logo: github,
      },
      {
        name: "NodeJS",
        para: "I am Beginner in the NodeJS Development.",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        para: "I am using MongoDB Database from since 1.5 years. It's Amazing.",
        logo: mongodb,
      },
    
    ],
    icon: MdArrowForward,
  },
  experience: {
    title: "My Experience",
    subtitle: "Companies I Worked For :)",
    service_content: [
      {
        title: "Team Lead | DevOps Engineer",
        date: "From - 05/2023 -> To - Present",
        para: "I am working here as a DevOps Engineer since May 2022. In my current role,I used to handle the team of dedvelopers, Code Revies, and Deployment part. I am the frontend development team lead.",
        logo: heatrec,
      },
       {
        title: "T DevOps Engineer",
        date: "From - 05/2022 -> To - 05",
        para: "I am working here as a DevOps Engineer since May 2022. In my current role,I used to handle the team of dedvelopers, Code Revies, and Deployment part. I am the frontend development team lead.",
        logo: heatrec,
      },
      {
        title: "Analytics Engineer",
        date: "From - 11/2021 -> To - 04/2022",
        para: "Awesome experince working as a Analytics Associate at World top organization like Accenture. I was responsible for the Website Analytics and implement tags in the website. ",
        logo: accenture,
      },
      {
        title: " Founder & CEO",
        date: "From - 03/2020 -> To - 09/2021",
        para: "I have started webshilla in 2019 with the aim to provide Enterprise level Software Solutions to MSMEs, We have served many clients worldwide in the field of Software Development, Digital Marketing.",
        logo: webshilla,
      },
      {
        title: "Full Stack Developer",
        date: "From - 03/2020 -> To - 09/2021",
        para: "It's Awesome Experince to work with USIB-the Team. I have worked here as a UI/UX Developer. I used to work on UI Designing, and UI Development using React.",
        logo: webshilla,
      },
    ],
  },
  services: {
    title: "Technologies",
    subtitle: "I Knows",
    service_content: [
      {
        title: "Full Stack Development",
        para: "I am Full Stack Developer Developer, Intereseted in creating some awesome projects. I have done some awesome projects in Web & App Development. ",
        logo: web,
      },
      {
        title: "Frappe / ERPNext Developement",
        para: "I have more than 1.5 yeras of experience in frappe and ERPENxt Development. I can help you with ERP Solutions, and also consultant you to setup your ERP at very low cost. ",
        logo: seo,
      },
      {
        title: "Cloud & DevOps Services",
        para: "I am currently learning and practicing Cloud & DevOps Tools like AWS, Azure, Docker, Kubernets, Jenkins, Ansible and Terraform.",
        logo: app,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Freely - An Open Source Platform for Freelancers and Clients ",
        image: project1,
        link:  "https://webshilla.com",
      },
      {
        title: "Thehindustanvoice - India's best business news channel",
        image: project3,
        link:  "https://thehindustanvoice.in",
      },
      {
        title: "Collegepur - An Open Source EdTech Platform for Students",
        image: project1,
        link:  "https://collegepur.in",
      },
      {
        title: "Thinkbox - HRMS, IT and Finance Tool",
        image: project2,
        link:  "https://thinkbox.webshilla.com",
      },
      {
        title: "Thinkbox chat - A Slack and Discord clone",
        image: project3,
        link:  "https://thinkbox.webshilla.com",
      },
      {
        title: "HeaTRec Solutions - IT Service Website",
        image: project3,
        link:  "https://heatrecsolutions.com",
      },
    ],
  },
  Testimonials: {
    title: "Blog",
    subtitle: "MY Latest Blogs",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: t,
        name: "Hash Node ",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "Acme Education (Alok Singh Rahi)",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Eccom Store( Anand Mohan )",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Ghoom Yatri (Khalid Ahmad)",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "It- Website (james Naura)",
      },
    ],
  },
  Hireme: {
    title: "Contact Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Contact Here",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hey.itanand@gmail.com",
        icon: GrMail,
        link: "mailto:hey.itanand@gmail.com",
      },

      {
        text: "Anand Mohan(data.integer)",
        icon: BsTwitter,
        link: "https://twitter.com/itanand_",
      },
      {
        text: "Anand Mohan",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/itanand",
      },
      {
        text: "Anand Mohan",
        icon: BsGithub,
        link: "https://www.github.com/itanand",
      },
      {
        text: "ITanand's Blog",
        icon: BsNewspaper,
        link: "https://itanand.hashnode.dev/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
