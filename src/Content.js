
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
import usib from "./assets/images/Experience/webshilla.png";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
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
    title: "Sofware Developer",
    firstName: "Anand",
    LastName: ".",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2.0",
        text: "Years of Experinse in Web Development and DevOps",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
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

      {
        name: "Wordpress Development",
        para: "I have 3+ years of experiance in Wordpress Website Development. Delivered more than 10 Websites.",
        logo: wordpress,
      },
      {
        name: "Python",
        para: "Python is a high-level, general-purpose programming language.",
        logo: python,
      },

    ],
    icon: MdArrowForward,
  },
  experience: {
    title: "My Experience",
    subtitle: "Companies I Worked For :)",
    service_content: [
      {
        title: "Software Developer",
        date: "From - 06/2022 -> To - Present",
        para: "I am working here as a Software Developer since June 2022. In my current role, I used to handle the team of dedvelopers, Code Revies, and Deployment part. I am the frontend development team lead and also pursuing my dream job devops. I'm responsible to Code Management, CI/CD, and many mores.",
        logo: heatrec,
      },
      {
        title: "Analytics Associate",
        date: "From - 11/2021 -> To - 04/2022",
        para: "Awesome experince working as a Analytics Associate at World top organization like Accenture. I was responsible for the Website Analytics and implement tags in the website. ",
        logo: accenture,
      },
      {
        title: "UI/ UX Developer",
        date: "From - 09/2020 -> To - 09/2021",
        para: "It's Awesome Experince to work with USIB-the Team. I have worked here as a UI/UX Developer. I used to work on UI Designing, and UI Development using React.",
        logo: usib,
      },
    ],
  },
  services: {
    title: "Technologies",
    subtitle: "I Knows",
    service_content: [
      {
        title: "Web Development(MERN)",
        para: "I am a UI/UX Developer, Intereseted in creating some awesome projects. I have done some awesome projects in Web & App Development. ",
        logo: web,
      },
      {
        title: "AWS Cloud",
        para: "I am familliar with AWS Services, Enjoyed to work with the AWS Sevices. I love to work with the AWS Cloud Services. ",
        logo: seo,
      },
      {
        title: "DevOps Tools",
        para: "I am currently learning and practicing DevOps Tools like Docker, Kubernets, Jenkins, Ansible and Terraform.",
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
        title: "Deployed a Microservices Application",
        image: project1,
        link:  "https://tacticenterprises.com",
      },
      {
        title: "Learning Management System",
        image: project2,
        link:  "https://theskylark.in",
      },
      {
        title: "Tour & Travel Service",
        image: project3,
        link:  "https://ghoomyatri.com",
      },
      {
        title: "3D Portfolio",
        image: project3,
        link:  "https://acmeeducation.org",
      },
      {
        title: "IT Service Website",
        image: project3,
        link:  "https://heatrecsolutions.com",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: t,
        name: "Tactic Enterprises (Rahul Patel Singh)",
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
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
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
        text: "+91 7004238112",
        icon: MdCall,
        link: "https://wa.me/7004238112",
      },
      {
        text: "Anand Mohan(data.integer)",
        icon: BsInstagram,
        link: "https://www.instagram.com/data.integer",
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
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
