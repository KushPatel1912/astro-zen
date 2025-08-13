import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kush Patel — Front End Developer",
  author: "Kush Patel",
  description:
    "Frontend Developer based in Boston, MA. I specialize in React.js, Next.js, and building responsive web applications.",
  lang: "en",
  siteLogo: "/kushlogo.jpg",
  navLinks: [
    { text: "Home", href: "#hero" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "/Resume_Kush_Patel_FSDev.pdf" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/__kush_19" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/er-kush-patel-841b25301",
    },
    { text: "Github", href: "https://github.com/KushPatel1912" },
    {
      text: "Instagram",
      href: "https://www.instagram.com/__.kush__19?igsh=MXY1cXJxa3RpdThzeA==",
    },
  ],
  socialImage: "/kushlogo.jpg",
  canonicalURL: "https://kushpatel.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kush Patel",
    specialty: "Front End Developer",
    summary:
      "Frontend Developer based in Boston, MA. I specialize in React.js, Next.js, and building responsive web applications.",
    email: "kush1912patel@gmail.com",
  },
  experience: [
    {
      company: "Dots N Key Technologies",
      position: "Frontend Developer - Internship",
      startDate: "July 2023",
      endDate: "Dec 2023",
      summary: [
        "Developed a React.js POS admin panel with 13+ business management modules (accounting, inventory, sales, employees, appointments, etc.).",
        "Integrated frontend with backend by building REST APIs in Node.js and managing data in MySQL.",
        "Implemented a secure login system with password validation and MySQL authentication.",
        "Collaborated in Agile teams using GitHub for version control.",
      ],
    },
    {
      company: "Keni Technologies",
      position: "Frontend Developer - E-commerce Website",
      startDate: "Dec 2022",
      endDate: "July 2023",
      summary: [
        "Built complete e-commerce frontend using Next.js and React.js, creating seamless shopping experience for end users.",
        "Developed responsive product catalogue, shopping cart, and checkout interfaces using component-based architecture.",
        "Used the help of AI to learn and develop the workflow to rapidly develop and deploy Next.js features while learning the framework.",
        "Implemented mobile-first design principles ensuring optimal user experience across all devices and screen sizes.",
      ],
    },
    {
      company: "Unistar Softech Pvt.Ltd",
      position: "Web Developer – Live Weather App",
      startDate: "May 2022",
      endDate: "July 2022",
      summary: [
        "Built an interactive React.js weather app that pulls live data from a weather API, showing real-time forecasts for the hour, 10 days, and the month.",
        "Designed a clean, light-blue user interface with Bootstrap and CSS, ensuring it looks great and works smoothly on any device.",
        "Added a map-based search so users can click or search for any location to instantly see its weather details.",
        "Included extra insights like UV index, pressure, and maps to give users a complete and engaging weather experience.",
      ],
    },
  ],
  projects: [
    {
      name: "Nike E-Commerce Website",
      summary:
        "A visually captivating and feature-rich e-commerce platform built with React.js, designed to deliver a premium shopping experience inspired by Nike's sleek brand identity. The site showcases high-quality product images through smooth, interactive carousels that make browsing feel dynamic and engaging. Integrated with the Google Maps API, users can instantly find real-time store locations anywhere in the world. Robust form validation ensures a secure and user-friendly process for both sign-in and sign-up, reducing errors and enhancing trust. Every component is designed to be responsive and intuitive, offering a seamless experience whether on desktop, tablet, or mobile. From stunning visuals to practical, real-world functionality, this project blends aesthetic appeal with powerful interactivity.",
      linkPreview: "https://nike-website-eta-pearl.vercel.app/dashboard",
      linkSource: "https://github.com/KushPatel1912/Nike-Website", // Update with actual repo link
      image: "/nike-ecommerce.png", // Add appropriate image
    },
    {
      name: "Sonar POS",
      summary:
        "Developed a React.js POS admin panel with 13+ business management modules (accounting, inventory, sales, employees, appointments, etc.). Integrated frontend with backend by building REST APIs in Node.js and managing data in MySQL. Implemented a secure login system with password validation and MySQL authentication. Collaborated in Agile teams using GitHub for version control.",
      linkPreview: "/",
      linkSource: "https://github.com/KushPatel1912/PointOfSale_System", // Update with actual repo link
      image: "/sonarpos.png", // Add appropriate image
    },
    {
      name: "IPL 2024 Sold Players Dashboard",
      summary:
        "An immersive cricket analytics platform that brings the excitement of the Indian Premier League 2024 auction to life. The dashboard greets users with a visually clean list of all IPL teams, each clickable to reveal the full roster of players sold to that franchise during the auction. With just one more click, users can open a detailed player card displaying in-depth information such as name, role, and auction price—perfect for cricket fans and analysts alike. Built with React.js on the frontend and a Node.js + Express + MongoDB backend, it delivers fast data rendering, smooth navigation, and persistent data storage. The result is a highly interactive, data-driven web application that transforms raw auction results into a user-friendly, engaging experience.",
      linkPreview: "https://ipl-2024-sold-players.vercel.app/",
      linkSource: "https://github.com/KushPatel1912/IPL_2024_Sold_Players", // Update with actual repo link
      image: "/ipl-dashboard.png", // Add appropriate image
    },
    {
      name: "Live Weather App",
      summary:
        "Interactive React.js weather app with real-time forecasts, map-based search, and comprehensive weather insights.",
      linkPreview: "https://react-live-weather-app-two.vercel.app/",
      linkSource: "https://github.com/KushPatel1912", // Update with actual repo link
      image: "/weather-app.png", // Add appropriate image
    },

    {
      name: "CareEscapes AI",
      summary:
        "Partnered with a US-based healthcare company through Northeastern University's experiential learning program to develop patient-facing modules including appointment scheduling, service browsing, and facility information using React.js. Created a secure clinical staff login portal with robust authentication, prioritizing patient data security and regulatory compliance in the healthcare environment.",
      linkPreview: "https://careescapesai.com/",
      linkSource: "https://github.com/KushPatel1912", // Update with actual repo link
      image: "/CE1.png", // Add appropriate image
    },
    {
      name: "ZAK Social Media Platform",
      summary:
        "Developed a Twitter-like social media platform with posting, media upload, and interactive commenting features using React.js. Implemented a secure login system with password validation and MySQL authentication. Collaborated in Agile teams using GitHub for version control.",
      linkPreview: "/",
      linkSource: "/", // Update with actual repo link
      image: "/zak-social.png", // Add appropriate image
    },
  ],
  about: {
    description: `
      Hi, I'm Kush Patel, a passionate Frontend Developer with expertise in React.js and Next.js. Currently pursuing my Master's in Applied Machine Intelligence at Northeastern University, I bring a unique blend of web development skills and AI knowledge to create innovative digital solutions.

      My experience spans across healthcare, e-commerce, and social media platforms, where I've built responsive, scalable web applications with a focus on user experience and performance. I'm particularly skilled in component-based architecture, REST API integration, and creating seamless interfaces that work beautifully across all devices.

      From developing comprehensive business management systems to building engaging social media platforms, I love tackling challenges that push the boundaries of frontend development while ensuring accessibility and scalability.
    `,
    image: "/kushlogo.jpg",
  },
};

// #5755ff
