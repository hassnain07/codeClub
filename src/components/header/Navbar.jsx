import React, { useEffect, useRef, useState } from "react";
import {
    FaCode,
    FaMobileAlt,
    FaBrain,
    FaShieldAlt,
    FaPencilRuler,
    FaMicrochip,
    FaProjectDiagram,
    FaCogs,
    FaRocket,
    FaUsers,
    FaBriefcase,
    FaBuilding,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";

const menuData = {
    "Our Expertise": [
        {
            label: "Web Development",
            description: "Our experts work on various tech stacks, including MERN and Laravel",
            icon: <FaCode />,
        },
        {
            label: "App Development",
            description: "React Native, Swift, Kotlin, Express",
            icon: <FaMobileAlt />,
        },
        {
            label: "Artificial Intelligence",
            description: "Mathematical Model, NLP, Advanced Python",
            icon: <FaBrain />,
        },
        {
            label: "CyberSecurity",
            description: "Vulnerability Assessment, Pentesting, Security",
            icon: <FaShieldAlt />,
        },
        {
            label: "UI/UX Design",
            description: "Figma, Wireframe, Complete Web and App designs",
            icon: <FaPencilRuler />,
        },
        {
            label: "IOT",
            description: "Our Experts also work on IOT technologies",
            icon: <FaMicrochip />,
        },
    ],
    "How We Work": [
        {
            label: "Our Methodology",
            description: "Our company uses Agile and Scrum methodologies",
            icon: <FaProjectDiagram />,
        },
        {
            label: "Development Approach",
            description: "React Native, Swift, Kotlin, Express",
            icon: <FaCogs />,
        },
        {
            label: "Idea to launch",
            description: "From concept to deployment",
            icon: <FaRocket />,
        },
    ],
    "Who we are": [
        {
            label: "About us",
            description: "Our people and values.",
            icon: <FaBuilding />,
        },
        {
            label: "Experts",
            description: "Our problem-solvers and tech minds.",
            icon: <FaUsers />,
        },
        {
            label: "Careers",
            description: "Our job opportunities, benefits, and company culture.",
            icon: <FaBriefcase />,
        },
    ],
    "Case Studies": [],
};

const getPath = (item) => {
    switch (item) {
        case "Web Development":
            return "/web-development";
        case "App Development":
            return "/mobile-apps";
        case "Artificial Intelligence":
            return "/ai";
        case "CyberSecurity":
            return "/cybersecurity";
        case "UI/UX Design":
            return "/ui-ux";
        case "IOT":
            return "/iot";
        case "Our Methodology":
            return "/methodology";
        case "Development Approach":
            return "/development";
        case "Idea to launch":
            return "/launch";
        case "About us":
            return "/about";
        case "Experts":
            return "/experts";
        case "Careers":
            return "/careers";
        case "Case Studies":
            return "/caseStudies";
        default:
            return "#";
    }
};

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const timeoutRef = useRef(null);
    const prevScrollY = useRef(0);
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowHeader(currentScrollY < prevScrollY.current || currentScrollY < 50);
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
        if (label === "Case Studies") return;
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
            className={`w-full fixed top-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
                } ${bgClass}`}
        >
            <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 sm:h-[70px]">
                {/* Logo */}
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

                {/* Desktop Nav */}
                <nav className="hidden md:block z-50 relative">
                    <ul className="flex items-center gap-8 text-base font-medium">
                        {Object.entries(menuData).map(([label, submenu]) => (
                            <li
                                key={label}
                                className="relative"
                                onMouseEnter={() => handleMenuEnter(label)}
                                onMouseLeave={handleMenuLeave}
                            >
                                {label === "Case Studies" ? (
                                    <Link
                                        to={getPath(label)}
                                        className="flex items-center cursor-pointer hover:text-blue-600 transition-all"
                                    >
                                        {label}
                                    </Link>
                                ) : (
                                    <div className="flex items-center cursor-pointer hover:text-blue-600 transition-all">
                                        {label}
                                        <MdArrowDropDown />
                                    </div>
                                )}

                                {activeMenu === label && label !== "Case Studies" && (
                                    <div
                                        className="fixed left-0 top-full w-full bg-white shadow-lg border-t border-gray-400 z-40"
                                        onMouseEnter={() => handleMenuEnter(label)}
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                                            <div className="col-span-3 grid grid-cols-3 gap-6">
                                                {submenu.map((section, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <div className="flex items-center gap-2 text-blue-600">
                                                            {section.icon}
                                                            <Link
                                                                to={getPath(section.label)}
                                                                className="text-gray-900 font-medium hover:text-blue-600"
                                                            >
                                                                {section.label}
                                                            </Link>
                                                        </div>
                                                        <p className="text-gray-500 text-sm">{section.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/contact"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`${buttonClass} cursor-pointer px-8 py-4 text-sm hidden md:block`}
                    >
                        Send request
                    </Link>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-3xl ml-2 focus:outline-none"
                    >
                        {mobileOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white text-black px-4 pt-2 pb-4">
                    <ul className="flex flex-col gap-3">
                        {Object.entries(menuData).map(([label, submenu]) => (
                            <li key={label} className="border-b pb-2">
                                <div
                                    className="flex items-center justify-between cursor-pointer text-base font-semibold"
                                    onClick={() => toggleMobileMenu(label)}
                                >
                                    {label}
                                    {label !== "Case Studies" && <MdArrowDropDown />}
                                </div>
                                {activeMenu === label && label !== "Case Studies" && (
                                    <ul className="pl-4 pt-2 flex flex-col gap-1">
                                        {submenu.map((item, idx) => (
                                            <li key={idx} onClick={() => setMobileOpen(false)}>
                                                <Link
                                                    to={getPath(item.label)}
                                                    className="block text-sm text-gray-700 py-2 hover:text-blue-600"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <Link
                            to="/contact"
                            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-md cursor-pointer px-8 py-2 block text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            Send Request
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
