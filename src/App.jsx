import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Helper from "./components/helper";
import CursorDot from "./components/CursorDot";
import Index from "./pages/Index";
import OurTeam from "./pages/OurTeam";
import OurVision from "./pages/OurVision";
import CareerPage from "./pages/Careers";
import FooterMain from "./components/footer/FooterMain";
import Navbar from "./components/header/Navbar";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  const lastScroll = useRef(0);

  useEffect(() => {
    const footer = document.querySelector("footer");

    const handleScroll = () => {
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const footerTop = rect.top + window.scrollY;
      const scrollTop = window.scrollY;
      const scrollDir = scrollTop > lastScroll.current ? "down" : "up";

      // If user is scrolling down and footer is about to go out of view
      if (
        scrollDir === "down" &&
        window.innerHeight + scrollTop >= footerTop + footer.offsetHeight
      ) {
        window.scrollTo({ top: lastScroll.current, behavior: "auto" });
        return;
      }

      // Save last valid scroll position
      lastScroll.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col ">
        <Navbar />
        <main className="flex-1 font-body">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/vision" element={<OurVision />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/caseStudies" element={<CaseStudies />} />
            <Route path="/experts" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/:slug" element={<Service />} />
          </Routes>
        </main>
        <FooterMain />
        {/* <Helper /> */}
        <CursorDot />
      </div>
    </Router>
  );
}

export default App;
