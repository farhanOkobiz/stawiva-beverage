import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
  FaTelegram,
  FaWeixin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export const menulist = [
  {
    title: "PRODUCTS",
    link: "/products",
  },
  {
    title: "COMPANY",
    subMenuList: [
      {
        title: "About Us",
        link: "/company/about-us",
        description:
          "Our reputation for reliability can be credited to our highly skilled workforce of over 20,000 employees.",
      },
      {
        title: "Management",
        link: "/company/management",
        description:
          "Since the First Footstep in 2009 to till date, Team Group has come a long way.",
      },
      {
        title: "History",
        link: "/company/history",
        description:
          "We have diversified our presence from the apparel manufacturing industry onward to retail, pharmaceuticals, IT and real estate with aspirations to expand even further.",
      },
    ],
  },
  {
    title: "INDUSTRIES",
    subMenuList: [
      {
        title: "Food and Beverage ",
        link: "/industries/food-beverage",
        description:
          "Stamina+ Beverage Limited delivers innovative solutions for the food and beverage sector, focusing on premium-quality products, strict safety standards, and sustainable practices. From concept to consumer, we ensure every product meets the highest standards of taste, nutrition, and reliability.",
      },
    ],
  },
  {
    title: "SUSTAINABILITY",
    subMenuList: [
      {
        title: "Environmental Sustainability",
        link: "/sustainability/environmental-sustainability",
        description:
          "At Stamina+ Beverage Limited, we recognize that protecting the environment is fundamental to our mission. Our commitment to environmental sustainability shapes every decision we make, from sourcing ingredients to delivering products to our consumers.",
      },
      {
        title: "Employment & Welfare",
        link: "/sustainability/employment-welfare",
        description:
          "At Stamina+ Beverage Limited, our employees are the heart of our success. We are committed to creating a work environment that fosters growth, well-being, and professional excellence.",
      },
    ],
  },
  {
    title: "NEWS & EVENTS",
    link: "/news-events",
  },
  {
    title: "CAREER",
    link: "/career",
  },
  {
    title: "POLICY",
    link: "/policy",
  },
  {
    title: "CONTACT US",
    link: "/contact-us",
  },
  // {
  //   title: "Hotline",
  //   icon: FaPhoneAlt,
  //   link: "tel:+8801511169923",
  //   color: "#E63946",
  // },
];

export const socialLink = [
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/people/Staminaplus/61569582182168/?rdid=6TTDKoplN3t7r3oV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bc9oxzDh3%2F",
    color: "#1877F2",
  },
  // {
  //   title: "Youtube",
  //   icon: FaYoutube,
  //   link: "https://www.youtube.com/@shahalam846",
  //   color: "#C11616",
  // },
  {
    title: "WhatsApp",
    icon: FaWhatsapp, // WhatsApp icon from React Icons
    link: "https://wa.me/88 01511169923", // WhatsApp link with international number
    color: "#25D366",
  },
  // {
  //   title: "Telegram",
  //   icon: FaTelegram,
  //   link: "https://t.me/+88018187729352",
  //   color: "#0088cc",
  // },
  // {
  //   title: "WeChat",
  //   icon: FaWeixin,
  //   link: "weixin://dl/chat?shahalam2935",
  //   color: "#1AAD19",
  // },
];

export const contactInfo = [
  // {
  //   title: "Contact Number",
  //   contact: "01970007503",
  //   link: "tel:01970007503",
  //   icon: FaPhoneAlt,
  // },
  {
    title: "Contact Number",
    contact: "01511169923",
    link: "tel:01511169923",
    icon: FaPhoneAlt,
  },
  {
    title: "Email",
    contact: "********@gamil.com",
    link: "mailto:********@gamil.com",
    icon: FaEnvelope,
  },
];

import partner1 from "../../assets/partners/clients-image-copyright-1.webp";
import partner2 from "../../assets/partners/clients-image-copyright-2.webp";
import partner3 from "../../assets/partners/clients-image-copyright-3.webp";
import partner4 from "../../assets/partners/clients-image-copyright-4.webp";
import partner5 from "../../assets/partners/clients-image-copyright-5.webp";
import partner6 from "../../assets/partners/clients-image-copyright-6.webp";

export const partnerList = [
  {
    logo: partner1,
    name: "Stamina Plus",
  },
  {
    logo: partner2,
    name: "Stamina Plus",
  },
  {
    logo: partner3,
    name: "Stamina Plus",
  },
  {
    logo: partner4,
    name: "Stamina Plus",
  },
  {
    logo: partner5,
    name: "Stamina Plus",
  },
  {
    logo: partner6,
    name: "Stamina Plus",
  },
  {
    logo: partner2,
    name: "Stamina Plus",
  },
  {
    logo: partner3,
    name: "Stamina Plus",
  },
  {
    logo: partner4,
    name: "Stamina Plus",
  },
  {
    logo: partner5,
    name: "Stamina Plus",
  },
  {
    logo: partner6,
    name: "Stamina Plus",
  },
];
