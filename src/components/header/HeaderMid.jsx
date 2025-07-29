import React, { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const menuData = {
  "What we do": [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "Cloud Services",
  ],
  "Who we are": ["Our Team", "Our Vision", "Careers"],
  "How we work": ["Approach", "Technologies", "Partnerships"],
  "Case studies": ["Healthcare", "Fintech", "E-commerce"],
};

const HeaderMid = ({
  handleMouseEnter,
  handleMouseLeave,
  isMobile = false,
  closeMobile = () => {},
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);
  const [hasOpenMenu, setHasOpenMenu] = useState(false);
  const handleEnter = (label) => {
    if (isMobile || label === "Case studies") return;
    handleMouseEnter?.();
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleLeave = () => {
    if (isMobile) return;
    handleMouseLeave?.();
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const toggleMobileMenu = (label) => {
    const isSame = activeMenu === label;
    setActiveMenu(isSame ? null : label);
    setHasOpenMenu(!isSame);
  };

  return (
    <nav
      className={`relative ${
        isMobile
          ? `block md:hidden px-4 pt-2 pb-4 transition-all duration-300 ${
              hasOpenMenu ? "bg-white shadow-md rounded-b-md" : "bg-transparent"
            }`
          : "hidden md:block z-50"
      }`}
    >
      <ul
        className={`${
          isMobile
            ? "flex flex-col gap-3"
            : "flex items-center gap-9 md:gap-7 text-[16px]"
        }`}
      >
        {Object.entries(menuData).map(([label, submenu]) => (
          <li
            key={label}
            className={`relative ${isMobile ? "border-b pb-2" : ""}`}
            onMouseEnter={() => handleEnter(label)}
            onMouseLeave={handleLeave}
          >
            <div
              className={`flex items-center justify-between cursor-pointer ${
                isMobile
                  ? "text-[16px] font-semibold text-black"
                  : "hover:text-blue-600 transition-all tracking-wider"
              }`}
              onClick={() => isMobile && toggleMobileMenu(label)}
            >
              {label}
              {label !== "Case studies" && <MdArrowDropDown />}
            </div>

            {/* Submenu */}
            {activeMenu === label && label !== "Case studies" && (
              <ul
                className={`${
                  isMobile
                    ? "pl-4 pt-2 flex flex-col gap-1 text-gray-800 transition-all duration-300"
                    : "absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md overflow-hidden animate-fade-in-down"
                }`}
              >
                {submenu.map((item, idx) => (
                  <li
                    key={idx}
                    className={`${
                      isMobile
                        ? "text-sm text-gray-700 py-2 hover:text-blue-600 transition-colors"
                        : "px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 text-[15px] transition"
                    }`}
                    onClick={() => isMobile && closeMobile()}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMid;
