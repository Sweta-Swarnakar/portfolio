// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Sweta Swarnakar",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Hello, my name is Sweta Swarnakar.I am from Nadia, West Bengal. I always have had a passion for technologies which resulted into me choosing web development. I am Skilled full-stack developer looking to associate with a progressive organization to hone my technical skills and grow professionally."
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Node js",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  // {
  //   name: "C",
  //   // svg: '',
  //   faClass: "fa-regular fa-c",
  // },
  // {
  //   name: "MongoDb",
  //   // svg: '',
  //   faClass: "fab fa-php",
  // },
  {
    name: "MongoDb",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Orbitz.com",
    des: "A hotel booking website",
    skills: ["HTML, CSS, JS, local Storage"],
    
    url: " https://sweta-swarnakar.github.io/Orbitz-clone/",
    link: "https://github.com/Sweta-Swarnakar/Orbitz-clone"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Ebay clone",
    des: "An ecommerce website to purchase a wide range of products.",
    skills: ["HTML, CSS, JS, Mock Server"],
    
    url: " https://sweta-swarnakar.github.io/ebay-clone/",
    link: "https://github.com/Sweta-Swarnakar/ebay-clone"
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Walmart Clone",
    des: "An ecommerce website where you can get wide range of products.",
    skills: ["HTML, CSS, JS, Local Storage"],
   
    url: "https://madhurima956.github.io/walmart-clone.github.io/walmart/index001.html",
    link: "https://github.com/pabloescobar4/Walmart-Clone"
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Food recipe",
    des: "A small food recipe checking web app",
    skills: ["HTML, CSS, JS, fetch api"],
   
    url: "https://foodrecipechecking.netlify.app/",
    link: "https://github.com/Sweta-Swarnakar/food-recipe-app"
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Notepad web app",
    des: "A note taking web application",
    skills: ["HTML, CSS, JS, React"],
    
    url: "https://sweta-swarnakar.github.io/note-pad/",
    link: "https://github.com/Sweta-Swarnakar/note-pad"
  },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   des: "A hotel booking website",
  //   skills: ["HTML, CSS, JS"],
    
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "My blogs";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Clone of Orbitz.com ",
    url: "https://sweta90.hashnode.dev/clone-of-orbitzcom-a-solo-project",
    des: "A blog about Orbitz's Clone"
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Ebay Clone",
    url: "https://sweta90.hashnode.dev/ebay-clone-project",
    des: "A blog about ebay clone"
  },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/kaustubhai",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you want to contact me feel free to connect with me.Here are my social media handles.",
  copyright: "Kaustubh Mishra",
  contactUrl: "https://formspree.io/f/xnqwpkkp",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Sweta-Swarnakar",
  facebook: "https://www.facebook.com/sweta.swarnakar.7/",
  twitter: "https://twitter.com/sweta_tifa",
  instagram: "https://www.instagram.com/tifalockhart321/",
  linkedin: "https://www.linkedin.com/in/sweta-swarnakar-0346b616b/",
  resume: "https://drive.google.com/file/d/1m8cwTgr_GePOEcasEn1V9cR-wjJuE8bS/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
