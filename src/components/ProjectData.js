import picSurePhoto from "../assets/pic-sure.png";
import flavorTownPhoto from "../assets/flavor-town.png";
import coffeeTalkPhoto from "../assets/coffee-talk.png";
import guhradientPhoto from "../assets/guhradient.png";
import picSharePhoto from "../assets/pic-share.png";

export const picShare = {
  name: "Pic Share",
  imgSrc: picSharePhoto,
  imgAlt: "Preview of Pic Share app",
  description: "Pic share is a social app for sharing images",
  features: [
    "Built using Next.JS, utilizing server rendering where possible for performance",
    "Uses Supabase for it's managed Postgres DB, as well as for user creation, verification, authentication, and credential security.",
    "Uses Cloudinary for image storage and hosting.",
  ],
  link: "https://github.com/J5Wood/pic-share",
  url: null,
};

export const guhradient = {
  name: "Guhradient",
  imgSrc: guhradientPhoto,
  imgAlt: "Preview of guhradient app",
  description: "Tool for designing and previewing CSS gradients.",
  features: [
    "Built using only HTML, CSS, and vanilla JavaScript",
    "Can easily switch between radial, linear, and even conic gradients",
    "Integrates jscolor package to make changing colors a breeze",
  ],
  link: "https://github.com/J5Wood/CSSGradients",
  url: "https://guhradient.com",
};

export const picSure = {
  name: "Pic-Sure",
  imgSrc: picSurePhoto,
  imgAlt: "Preview of Pic-Sure app",
  description: "Pic-Sure is an app for sharing images",
  features: [
    "Built with a React/Redux frontend and a Rails API backend",
    "Uses JSON Web Tokens (JWT) for user login authentication",
    "Utilizes Active Storage for image storage",
  ],
  link: "https://github.com/J5Wood/pic-sure",
  url: null,
};

export const flavorTown = {
  name: "Flavor Town",
  imgSrc: flavorTownPhoto,
  imgAlt: "Preview of Flavor Town app",
  description: "Flavor Town is a web app for documenting restaurants",
  features: [
    "Built with vanilla JavaScript on the frontend and a Rails API backend",
    "Employs Object Oriented JavaScript (OOJS)",
    "Incorporates resource filtering by city and restaurant style",
  ],
  link: "https://github.com/J5Wood/Flavor-Town",
  url: null,
};

export const coffeeTalk = {
  name: "Coffee Talk",
  imgSrc: coffeeTalkPhoto,
  imgAlt: "Preview of Coffee Talk app",
  description: "Coffee Talk is a coffee bean and brand review site",
  features: [
    "Fully built Ruby on Rails, MVC application",
    "Implemented user signup and login with Oauth and Github, and also basic username and password",
    "Follows RESTful conventions for all resources, including nested routes.",
  ],
  link: "https://github.com/J5Wood/coffee-talk",
  url: null,
};
