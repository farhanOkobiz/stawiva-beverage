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
        title: "Beverage",
        link: "/industries/beverage",
        description:
          "Refreshing drinks to energize and keep you hydrated all day.",
      },
    ],
  },
  {
    title: "SUSTAINABILITY",
    subMenuList: [
      {
        title: "Team",
        link: "/sustainability/team",
        description:
          "A group working together to achieve common goals efficiently and effectively.",
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
  //   link: "tel:+8801914314909",
  //   color: "#E63946",
  // },
];

export const socialLink = [
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=100054376337057 ",
    color: "#1877F2",
  },
  {
    title: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@shahalam846",
    color: "#C11616",
  },
  {
    title: "WhatsApp",
    icon: FaWhatsapp, // WhatsApp icon from React Icons
    link: "https://wa.me/8801914314909", // WhatsApp link with international number
    color: "#25D366",
  },
  {
    title: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/+88018187729352",
    color: "#0088cc",
  },
  {
    title: "WeChat",
    icon: FaWeixin,
    link: "weixin://dl/chat?shahalam2935",
    color: "#1AAD19",
  },
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
    contact: "01914314909",
    link: "tel:01914314909",
    icon: FaPhoneAlt,
  },
  {
    title: "Email",
    contact: "tmcsbd.hss@gmail.com",
    link: "mailto:tmcsbd.hss@gmail.com",
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
    name: "Stawiva Beverage",
  },
  {
    logo: partner2,
    name: "Stawiva Beverage",
  },
  {
    logo: partner3,
    name: "Stawiva Beverage",
  },
  {
    logo: partner4,
    name: "Stawiva Beverage",
  },
  {
    logo: partner5,
    name: "Stawiva Beverage",
  },
  {
    logo: partner6,
    name: "Stawiva Beverage",
  },
  {
    logo: partner2,
    name: "Stawiva Beverage",
  },
  {
    logo: partner3,
    name: "Stawiva Beverage",
  },
  {
    logo: partner4,
    name: "Stawiva Beverage",
  },
  {
    logo: partner5,
    name: "Stawiva Beverage",
  },
  {
    logo: partner6,
    name: "Stawiva Beverage",
  },
];
