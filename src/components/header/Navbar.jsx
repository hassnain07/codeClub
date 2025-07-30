import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const menuData = {
    "What we do": ["Web Development", "Mobile Apps", "AI Solutions", "Cloud Services"],
    "Who we are": ["Our Team", "Our Vision", "Careers"],
    "How we work": ["Approach", "Technologies", "Partnerships"],
    "Case studies": ["Healthcare", "Fintech", "E-commerce"],
};

const getPath = (item) => {
    switch (item) {
        case "Our Team": return "/our-team";
        case "Our Vision": return "/vision";
        case "Careers": return "/careers";
        case "Web Development": return "/web-development";
        case "Mobile Apps": return "/mobile-apps";
        case "AI Solutions": return "/ai";
        case "Cloud Services": return "/cloud";
        default: return "#";
    }
};

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [hasOpenMenu, setHasOpenMenu] = useState(false);

    const timeoutRef = useRef(null);
    const prevScrollY = useRef(0);
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";


    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    useEffect(() => {
        prevScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setIsScrolled(currentScrollY > 10);
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 300);
    };

    const handleMenuEnter = (label) => {
        if (label === "Case studies") return;
        handleMouseEnter();
        clearTimeout(timeoutRef.current);
        setActiveMenu(label);
    };

    const handleMenuLeave = () => {
        handleMouseLeave();
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 300);
    };

    const toggleMobileMenu = (label) => {
        const isSame = activeMenu === label;
        setActiveMenu(isSame ? null : label);
        setHasOpenMenu(!isSame);
    };

    const bgClass =
        isHome && !(activeMenu || isHovered || isScrolled || !showHeader)
            ? "bg-transparent text-white"
            : "bg-white text-black";

    const buttonClass = isHovered || showHeader
        ? "bg-blue-600 hover:bg-blue-800 text-white"
        : "bg-white/10 hover:bg-blue-600 text-white border border-white";

    return (
        <header
            className={`w-full fixed top-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${bgClass} ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 sm:h-[70px]">
                {/* LEFT */}
                <div className="flex items-center gap-2">
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        CodeClub
                    </span>
                </div>

                {/* MID */}
                <nav className="hidden md:block z-50">
                    <ul className="flex items-center gap-8 text-base font-medium">
                        {Object.entries(menuData).map(([label, submenu]) => (
                            <li
                                key={label}
                                className="relative"
                                onMouseEnter={() => handleMenuEnter(label)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="flex items-center cursor-pointer hover:text-blue-600 transition-all">
                                    {label}
                                    {label !== "Case studies" && <MdArrowDropDown />}
                                </div>
                                {activeMenu === label && label !== "Case studies" && (
                                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                                        {submenu.map((item, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    to={getPath(item)}
                                                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 text-sm"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* RIGHT */}
                <div className="flex items-center gap-3">
                    <button

                        onMouseEnter={handleMouseEnter

                        }
                        onMouseLeave={handleMouseLeave}
                        className={`${buttonClass} cursor-pointer px-8 py-4 text-sm  hidden md:block`}
                    >
                        Send request
                    </button>

                    <button
                        className={`${buttonClass} text-2xl px-2 py-2 rounded-md md:hidden hidden`}
                    >
                        <IoMdMail />
                    </button>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-3xl ml-2 focus:outline-none"
                    >
                        {mobileOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="md:hidden  bg-white text-black px-4 pt-2 pb-4">
                    <ul className="flex flex-col gap-3">
                        {Object.entries(menuData).map(([label, submenu]) => (
                            <li key={label} className="border-b pb-2">
                                <div
                                    className="flex items-center justify-between cursor-pointer text-base font-semibold"
                                    onClick={() => toggleMobileMenu(label)}
                                >
                                    {label}
                                    {label !== "Case studies" && <MdArrowDropDown />}
                                </div>
                                {activeMenu === label && label !== "Case studies" && (
                                    <ul className="pl-4 pt-2 flex flex-col gap-1">
                                        {submenu.map((item, idx) => (
                                            <li key={idx} onClick={() => setMobileOpen(false)}>
                                                <Link
                                                    to={getPath(item)}
                                                    className="block text-sm text-gray-700 py-2 hover:text-blue-600"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <button
                            className="w-full py-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-md"
                            onClick={() => setMobileOpen(false)}
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
