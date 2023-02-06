
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import aws from "./assets/images/Skills/aws.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import wordpress from "./assets/images/Skills/wordpress.png";
import laravel from "./assets/images/Skills/laravel.png";
import js from "./assets/images/Skills/js.png";

import app from "./assets/images/Services/app.png";
import web from "./assets/images/Services/web.png";
import seo from "./assets/images/Services/seo.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import t from "./assets/images/Testimonials/t.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

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
    title: "Website Developer",
    firstName: "Anand",
    LastName: ".",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web & App Development",
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
        name: "Node JS",
        para: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux and Other OS.",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        para: "MongoDB is a source-available cross-platform document-oriented database program.",
        logo: mongodb,
      },
      {
        name: "AWS Cloud",
        para: "Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions. ",
        logo: aws,
      },
      {
        name: "Wordpress",
        para: "WordPress is a free and open-source content management system.",
        logo: wordpress,
      },

      {
        name: "Figma",
        para: "Figma is a collaborative web application for interface design.",
        logo: figma,
      },
      {
        name: "Python",
        para: "Python is a high-level, general-purpose programming language.",
        logo: python,
      },
      {
        name: "Laravel",
        para: "Laravel is a free and open-source PHP web framework.",
        logo: laravel,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WE OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: web,
      },
      {
        title: "SEO & Content Marketing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: seo,
      },
      {
        title: "App Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
        title: "Interior Design Service",
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
        title: "Acme Education",
        image: project3,
        link:  "https://acmeeducation.org",
      },
      {
        title: "IT - Services",
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
        name: "The SkyLark ( Ansh Raj )",
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
        name: "BlueBird (Tom Jamy)",
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
    title: "Contect Me",
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
    text: "All © Copy Right Reserved 2022",
  },
};
