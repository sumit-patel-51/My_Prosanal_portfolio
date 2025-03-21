import React, { createContext, useState } from "react";
import image from "../assets/my.png";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // NavaBar
  const [data, setData] = useState({
    titleName: "Sumit",
  });
  const [links, setLinks] = useState({
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  });

  // HomeSection
  const [homePage, setHomePage] = useState({
    homeName: "Sumit Sachapara",
    devloper: "Web Devloper",
    description:
      "I'm a passionate Web Developer dedicated to building user-friendly and visually appealing websites.",
    imageSrc: "my.png",
    cvdown:"https://drive.google.com/file/d/1pQlNQwLGfpKP_s7Wgi3_RxcfJ3lMZwOq/view?usp=sharing",
    cvimage:"https://i.ibb.co/zWpVgZcg/Screenshot-2025-03-17-084028.png"
  });

  // AboutSection
  const [aboutSection, setAboutSection] = useState({
    aboutTitle: "Web Devloper in India",
    semiTitle: "Hello, I'm Sumit Sachapara, from Gujarat",
    description1:
      "A dedicated Web Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I enjoy bringing creative designs to life and ensuring seamless user experiences.",
    decsription2:
      "I hold a BCA degree and have hands-on experience building e-commerce projects, where I learned to tackle complex challenges and deliver scalable solutions. My skills include working with frameworks like Django and utilizing libraries like GSAP for creating animations that captivate users.",
    decsription3:
      "Beyond coding, I’m a lifelong learner and a tech enthusiast. In my free time, you’ll find me exploring the latest tech trends, honing my problem-solving skills, or enjoying hobbies like gaming and photography.",
    decsription4:
      "I’m excited to collaborate on projects that make an impact. Let’s connect and create something amazing together!",
    imageSrc: "image.png",
  });

  // Education Section
  const [educationSection, setEducationSection] = useState([
    {
      degree: "Bachelor of Computer Application(BCA)",
      univarsity: "MKBU University",
      year: "2021-2024",
      icon: "faCalendarDays",
    },
    {
      degree: "Web Devloper",
      univarsity: "KodNest",
      year: "2024-2025",
      icon: "faCalendarDays",
    },
    {
      degree: "12th",
      univarsity: "Dakshinamurti Vinay Mandir School",
      year: "2020-2021",
      icon: "faCalendarDays",
    },
  ]);

  // SkillSecion
  const [skillSection, setSkillSection] = useState([
    {
      skillName: "HTML5",
      firstWidth: "88%",
      progressWidth: "90%",
    },
    {
      skillName: "CSS",
      firstWidth: "63%",
      progressWidth: "65%",
    },
    {
      skillName: "JavaScript",
      firstWidth: "78%",
      progressWidth: "80%",
    },
    {
      skillName: "React Js",
      firstWidth: "59%",
      progressWidth: "60%",
    },
    {
      skillName: "Tailwind CSS",
      firstWidth: "69%",
      progressWidth: "70%",
    },
    {
      skillName: "Core Java",
      firstWidth: "59%",
      progressWidth: "61%",
    },
    {
      skillName: "MySQL",
      firstWidth: "69%",
      progressWidth: "71%",
    },
  ]);

  // ProjectSection

  const [projectSection, setProjectSection] = useState([
    {
      id:1,
      type:"FronEnd",
      projectName: "Food Delivery",
      visitLink:"https://fooddeliverywebsite-51.netlify.app/",
      gitLink:"https://github.com/sumit-patel-51/Food_delivery_website",
      imageSrc:"food.png"
    },
    {
      id:2,
      type:"FronEnd",
      projectName: "Yami Recipe",
      visitLink:"https://yamirecipe.netlify.app/",
      gitLink:"https://github.com/sumit-patel-51/Yami-Recipe-Website",
      imageSrc:"recipe.webp"
    },
  ])

  // ContactSection
  const [contactSection, setContactSection] = useState({
    description:
      "Get in Touch Have a question or want to work together? Feel free to contact me!",
    address: "Bhavnagar Gujarat, India",
    email: "sumitpatel5251@gmail.com",
    mobile: "7874984396",
  });

  // FooterSection
  const [footerSection, setFooterSection] = useState({
    designedName: "Sumit Sachapara",
    websiteName: "www.sumitsportfolio.com",
    instagram: "https://www.instagram.com/sumit_sachapara_51/w",
    facebook: "https://www.facebook.com/share/15d9tkYpJV/",
    twitter: "https://x.com/SumitPatel71259?t=USiv7xRM8smoupHrqaqjwQ&s=08 ",
    linked: "https://www.linkedin.com/in/sumit-sachapara/",
    git: "https://github.com/sumit-patel-51",
  });

  return (
    <DataContext.Provider
      value={{
        data,
        links,
        homePage,
        aboutSection,
        educationSection,
        skillSection,
        projectSection,
        contactSection,
        footerSection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
