/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Containar from "../containar/Containar";
import logo from "../../assets/logo/stamina.png";
import { Link, NavLink, matchPath } from "react-router-dom";
import { menulist } from "../constants";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { IoReorderThree } from "react-icons/io5";
import api from "../axios/Axios";
import NavberDrawer from "../Drawer/NavberDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isSticky, setIsSticky] = useState(false); // New state for sticky navbar
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const agroCart = useSelector((state) => state.agroCart);
  const totalItems = agroCart.reduce((total, item) => total + item.quantity, 0);
  const isTon = totalItems >= 1000; // Determine if total quantity exceeds 1000
  const displayQuantity = isTon
    ? (totalItems / 1000).toFixed(2) // Convert to Tons and format to 2 decimals
    : totalItems;
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const response = await api.get("/users/getMe", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data.data.doc);
        } catch (error) {
          // Handle error (optional)
        }
      } else {
        // Clear user data if token is not available
        setUserData(null);
      }
    };

    fetchUserData();
  }, [token]);

  // Add scroll event listener to update sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isShopDrawerOpen, setShopDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setShopDrawerOpen((prevState) => !prevState);
  };

  const isShopPage =
    matchPath({ path: "/shop", end: true }, location.pathname) ||
    matchPath({ path: "/shop/:slug", end: true }, location.pathname);

  return (
    <nav
      className={`transition-all duration-300 ease-in-out ${
        isSticky ? "bg-white" : "sm:bg-[rgba(0,0,0,0.11)] sm:backdrop-blur-[3%]"
      } z-[9999] font-robo fixed left-0 top-0 w-full`}
    >
      <Containar>
        <div className="py-4 lg:py-9">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-x-3 items-center">
                <div className="h-[70px]">
                  <Link to={"/"}>
                    <img className="w-full h-full" src={logo} alt="Logo" />
                  </Link>
                </div>
                {/* <div>
                  <Link
                    to={"/"}
                    className="text-[13px] md:text-[18px] xl:text-[24px] font-bold text-red-600"
                  >
                    LOGO
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center gap-x-3 xl:gap-x-10">
              <ul className="flex space-x-4 relative">
                {menulist?.map((item, index) => (
                  <li key={index} className="relative group">
                    {item?.subMenuList ? (
                      <>
                        <div
                          className={`cursor-pointer text-[14px] xl:text-[16px] font-bold px-4 rounded transition-all ease-linear duration-150 ${
                            isSticky ? "text-gray-700" : "text-white"
                          } group-hover:text-primary`}
                        >
                          {item.title}
                        </div>
                        {/* Dropdown menu */}
                        <ul
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-4
                            opacity-0 translate-y-[20px] 
                            group-hover:opacity-100 group-hover:translate-y-0 
                            group-hover:visible invisible 
                            transition-all duration-500 ease-out z-50 flex`}
                        >
                          {/* 🔺 Arrow */}
                          {/* <div
                            className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 
                            border-l-[8px] border-l-transparent 
                            border-r-[8px] border-r-transparent 
                            border-b-[8px] border-b-white shadow-sm"
                          /> */}
                          {/* Left Menu */}
                          <div className="w-[250px]">
                            {item?.subMenuList?.map((subItem, subIndex) => (
                              <NavLink
                                key={subIndex}
                                to={subItem.link} 
                                onMouseEnter={() => setActiveSubItem(subItem)}
                                className={({ isActive }) =>
                                  `block px-4 py-4 text-white bg-gray-600 hover:bg-gray-700 hover:text-white transition-all ${
                                    isActive ? "bg-gray-700" : ""
                                  }`
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </div>

                          {/* Right Side Content */}
                          {/* <div className="w-[450px] px-4 py-2 text-sm text-gray-600 flex items-center transition-all duration-300 ease-in-out">
                            {activeSubItem && (
                              <p>{activeSubItem.description}</p>
                            )}
                          </div> */}
                        </ul>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary text-[14px] xl:text-[16px] font-bold px-4 py-2 rounded`
                              : `${
                                  isSticky ? "text-gray-700" : "text-white"
                                } text-[14px] xl:text-[16px] font-bold px-4 py-2 rounded hover:text-primary transition-all ease-linear duration-150`
                          }
                        >
                          {item.title}
                        </NavLink>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {/* <ul className="flex space-x-4">
                {menulist.map((item, index) => (
                  <li key={index} className="flex">
                    {item?.title === "Hotline" ? (
                      <a
                        href={item?.link}
                        className="bg-red-500 text-white text-[14px] xl:text-[16px] font-bold px-4 py-2 rounded hover:bg-red-600 transition-all ease-linear duration-150 flex flex-col items-center"
                      >
                        <div className="flex">
                          {item?.icon && <item.icon className="mr-2" />}
                          {item?.title}
                        </div>
                        <span className="hidden lg:block">01000000000</span>
                      </a>
                    ) : (
                      <NavLink
                        to={item?.link}
                        className={({ isActive }) =>
                          isActive
                            ? `text-primary text-[14px] xl:text-[16px] font-bold px-4 py-2 rounded hover:text-primary transition-all ease-linear duration-150 flex items-center`
                            : `${
                                isSticky ? "text-gray-700" : "text-white"
                              }  text-[14px] xl:text-[16px] font-bold px-4 py-2 rounded hover:text-primary transition-all ease-linear duration-150 flex items-center`
                        }
                      >
                        {item?.title}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="block lg:hidden">
              <ul className="flex items-center gap-x-2">
                <li className="text-white text-[20px] relative">
                  <IoReorderThree
                    onClick={toggleDrawer}
                    className={`block lg:hidden text-gray-400 text-3xl `}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* Drawer */}
          <NavberDrawer
            menulist={menulist}
            isShopDrawerOpen={isShopDrawerOpen}
            toggleDrawer={toggleDrawer}
          ></NavberDrawer>
          {/* Drawer */}
          {/*  */}
        </div>
      </Containar>
    </nav>
  );
};

export default Navbar;
