import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logo/footerLogo.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavberDrawer = ({ menulist, isShopDrawerOpen, toggleDrawer }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Drawer
      open={isShopDrawerOpen}
      onClose={toggleDrawer}
      direction="left"
      className="lg:hidden"
    >
      <div className="h-screen bg-[#001802] text-white flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <img className="w-[80px]" src={logo} alt="Logo" />
          <RxCross2
            onClick={toggleDrawer}
            className="w-7 h-7 p-1 font-extrabold bg-[#c1af0f] rounded text-[#001802] cursor-pointer"
          />
        </div>

        {/* Menu List */}
        <ul className="flex-1 overflow-y-auto">
          {menulist?.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              {item.subMenuList ? (
                <button
                  onClick={() => toggleSubmenu(index)}
                  className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                >
                  {item.title}
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
              ) : (
                <NavLink
                  to={item.link}
                  className="block px-4 py-3 font-semibold hover:text-[#c1af0f]"
                  onClick={toggleDrawer}
                >
                  {item.title}
                </NavLink>
              )}

              {item.subMenuList && activeIndex === index && (
                <ul className="bg-[#0e240c]">
                  {item.subMenuList.map((sub, i) => (
                    <NavLink
                      key={i}
                      to={sub.link}
                      className="block px-6 py-3 text-sm text-gray-300 hover:text-[#c1af0f]"
                      onClick={toggleDrawer}
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default NavberDrawer;
