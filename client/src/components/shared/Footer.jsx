/* eslint-disable no-unused-vars */
import React from "react";
import Containar from "../containar/Containar";
import logo from "../../assets/logo/stamina.png";
import { contactInfo, menulist, socialLink } from "../constants";
import { Link, NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#001802] text-white py-8 md:py-12 lg:py-16 font-roboto">
        <div className="">
          <Containar>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
              {/* Section 1 */}
              <div className="">
                <div className="">
                  <img className="w-[150px] -mt-[25px]" src={logo} />
                </div>
                <h2></h2>
                <p className="text-[14px] leading-7 text-white -mt-6">
                  Export Vision: Stamina+ Beverage Limited is committed to
                  expanding beyond the borders of Bangladesh. With world-class
                  quality and uncompromising standards, the company aims to
                  export its refreshing flavored beverages to international
                  markets, proudly representing Bangladesh on the global stage.
                </p>
              </div>
              {/* Section 2 */}
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-4">Links</h2>
                <ul className="navLink flex flex-col md:flex-row md:flex-wrap lg:flex-col md:gap-3 lg:gap-0 md:gap-y-2 mt-5">
                  {menulist.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item?.link}
                        className={({ isActive }) =>
                          isActive
                            ? "  text-white text-[14px]"
                            : "text-white  text-[14px] hover:text-primary transition-all ease-linear duration-150"
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Section 3 */}
              <div className="mb-4">
                <h2 className="text-xl font-bold my-4 md:mt-0 lg:mt-0">
                  Office
                </h2>
                <p className="text-white text-[14px] mt-6">
                  Block-D, Road Number-11, Plot Number-13, Ashuliya model
                  town,dhaka,bangladesh
                </p>

                <ul className="mt-5 flex flex-col gap-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item?.icon;
                    return (
                      <li
                        className="hover:text-primary text-white transition-all ease-linear duration-150"
                        key={index}
                      >
                        <div className="flex gap-x-2 text-[14px] items-center">
                          <h3>
                            <Icon className="" />
                          </h3>
                          <p>{item?.contact}</p>
                        </div>{" "}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <h3 className="text-[16px] font-bold">Get in touch</h3>
                  <ul className="flex items-center flex-wrap gap-x-2 mt-3">
                    {socialLink.map((item, index) => {
                      const Icon = item?.icon;
                      return (
                        <li className="" key={index}>
                          <Link
                            style={{
                              backgroundColor: item?.color,
                            }}
                            target="_blanck"
                            className="w-8 h-8 justify-center transition-all ease-linear duration-150 items-center flex rounded-full text-[15px] border border-[#828282] hover:border-primary hover:text-white"
                            to={item?.link}
                          >
                            <Icon />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* Section 4 */}
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-4">Maps</h2>
                <iframe
                  className="h-[100px] w-full border-none mt-6"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6566275686887!2d90.34274169999999!3d23.866323899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c36bf5575275%3A0xbf06fa0fed94b9c0!2z4Kas4Kaf4Kak4Kay4Ka-IOCmt-CmvuCmnyDgpqvgpr_gpp8!5e0!3m2!1sen!2sbd!4v1760427398053!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Containar>
        </div>
      </div>

      <div className=" bg-primary  text-sm">
        <Containar>
          <div className="flex justify-between flex-wrap px-5 lg:px-0 py-5 text-white">
            <p className="text-[12px] sm:text-[14px]">
              Stamina<span className="text-xl">+</span> © 2025. All Rights
              Reserved.
            </p>
            <a
              href="https://okobiz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[12px] sm:text-[14px]">
                Developed by <span className="font-bold">okobiz</span>
              </p>
            </a>
          </div>
        </Containar>
      </div>
    </footer>
  );
};

export default Footer;
