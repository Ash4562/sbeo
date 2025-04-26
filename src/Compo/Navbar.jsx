// import React, { useState, useEffect, lazy, Suspense } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// import img from "../assets/logo.png";
// import Hero from "./Hero";

// // Lazy imports
// const pageComponents = {
//   Home: lazy(() => import("../Compo/Hero")),
//   FACILITIES: lazy(() => import("../Compo/Facilities")),
//   ABOUT: lazy(() => import("../Compo/Aboutus")),
//   ACADEMICS: lazy(() => import("../Compo/Acadmic")),
//   ADMISSIONS: lazy(() => import("../Compo/Admisions")),
//   GALLERY: lazy(() => import("../Compo/Gallery")),
//   FACULTY: lazy(() => import("../Compo/Teachers")),
//   ALUMNI: lazy(() => import("../Compo/Students")),
//   ACHIEVEMENTS: lazy(() => import("../Compo/Achivements")),
//   LOGIN: lazy(() => import("../Compo/Log")),

// };

// // Sticky Scroll Navbar component
// const StickyScrollNavbar = () => {
//   const [showSticky, setShowSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 200) {
//         setShowSticky(true);
//       } else {
//         setShowSticky(false);
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // const links = ["Home", "GALLERY", "FACULTY", "ALUMNI", "ACHIEVEMENTS", "LOGIN", "FACILITIES", "ABOUT", "ACADEMICS", "ADMISSIONS"];
//   const links = ["Home", "GALLERY", "FACULTY", "ALUMNI", "ACHIEVEMENTS", "LOGIN", "FACILITIES", "ABOUT", "ACADEMICS", "ADMISSIONS"];

//   return (
//     <AnimatePresence>
//       {showSticky && (
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -50, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed top-0 left-0 w-full bg-[#456e79] text-white z-[60] shadow-md md:hidden"
//         >
//           <div className="flex items-center justify-between  px-4 py-3">
//             <img src={img} alt="Logo" className="h-10 w-auto" />
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={22} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {isOpen && (
//             <div className="flex flex-col px-4 pb-4 space-y-2 text-sm">
//               {links.map((link, i) => (
//                 <Link
//                   to={`/${link.toLowerCase()}`}
//                   key={i}
//                   className="hover:underline"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Main Navbar
// const Navbar = () => {
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMouseEnter = (link) => {
//     if (pageComponents[link]) {
//       setHoveredLink(link);
//       setDropdownVisible(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setDropdownVisible(false);
//     setTimeout(() => setHoveredLink(null), 300);
//   };

//   const MobileNavbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//       <div className={`md:hidden ${scrolled ? "bg-[#456e79]" : "bg-[#456e79]"} text-white font-poppins fixed top-0 w-full z-50`}>
//         <div className="flex items-center justify-between p-4">
//           <img src={img} alt="School Logo" className="h-14 w-20" />
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="bg-[#456e79] text-white text-center"
//             >
//               <div className="flex flex-col space-y-4 p-4">
//                 {["Home", "GALLERY", "FACULTY", "ALUMNI", "ACHIEVEMENTS", "LOGIN", "FACILITIES", "ABOUT", "ACADEMICS", "ADMISSIONS"].map((link, index) => (
//                   <li key={index} className="border-b border-gray-300 pb-2 cursor-pointer hover:text-gray-200 list-none">
//                     {link}
//                   </li>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   };

//   return (
//     <>
//       <StickyScrollNavbar />
//       <MobileNavbar />

//       <div className={` z-50 top-0 left-0 w-full z-50 hidden md:block transition-all duration-300 ${scrolled ? "bg-[#456e79]" : "bg-transparent"}`}>
//         {/* Desktop Navbar */}
//         <nav className="bg-[#456e79] text-white font-semibold font-poppins text-sm w-full transition-all duration-300">
//           <div className="container mx-auto flex flex-col items-center relative">
//             {/* Top Section */}
//             <div className="w-full flex items-center justify-between px-28 mt-4 relative">
//               <ul className="flex space-x-20 mb-4">
//                 {["Home", "ABOUT", "FACULTY"].map((link, index) => (
//                   <li
//                     key={index}
//                     className="group cursor-pointer relative"
//                     onMouseEnter={() => handleMouseEnter(link)} // 👈 add this
//                   >
//                     <Link
//                       to={`/${link === "Home" ? "" : link.toLowerCase()}`} // 👈 handle Home separately
//                       className="inline-block group-hover:border-b-2 group-hover:border-white"
//                     >
//                       {link}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>


//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-transparent">
//                 <img src={img} alt="School Logo" className="h-28 w-28 mt-10" />
//               </div>

//               <ul className="flex space-x-16 mb-4">
//                 {["FACILITIES", "ACHIEVEMENTS", "LOGIN"].map((link, index) => (
//                   <li
//                     key={index}
//                     className="group cursor-pointer relative"
//                     onMouseEnter={() => handleMouseEnter(link)} // 👈 handle hover
//                     onMouseLeave={handleMouseLeave} // 👈 handle mouse leave
//                   >
//                     {link === "LOGIN" ? (
//                       // LOGIN is a regular link
//                       <Link to="/login" className="inline-block group-hover:border-b-2 group-hover:border-white">
//                         {link}
//                       </Link>
//                     ) : (
//                       <span className="inline-block group-hover:border-b-2 group-hover:border-white">{link}</span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* HR */}
//             <div className="relative w-full flex items-center justify-center gap-20 mt-4">
//               <hr className="w-full border-t border-white" />
//               <div className="w-48"></div>
//               <hr className="w-full border-t border-white" />
//             </div>

//             {/* Lower Links */}
//             <div className="container mx-auto flex justify-center items-center">
//               <div className="flex space-x-40 items-center">
//               <div className="flex space-x-10 font-poppins">
//   {["GALLERY", "ALUMNI"].map((link, index) => (
//     <div
//       key={index}
//       onMouseEnter={() => handleMouseEnter(link)} // Trigger hover effect
//       className="group cursor-pointer relative px-6"
//     >
//       <div className="absolute left-0 top-0 h-14 border-l border-white"></div>
//       <p className="mt-4">
//         <Link
//           to={`/${link.toLowerCase()}`} // Convert the link text to lowercase for the route
//           className="inline-block group-hover:border-b-2 group-hover:border-white"
//         >
//           {link}
//         </Link>
//       </p>
//     </div>
//   ))}
// </div>


//                 <div className="flex space-x-8 pl-16">
//                   {["ACADEMICS", "ADMISSIONS"].map((link, index) => (
//                     <div key={index} onMouseEnter={() => handleMouseEnter(link)} className="group cursor-pointer relative px-6">
//                       <p className="mt-4">
//                         <span className="inline-block group-hover:border-b-2 group-hover:border-white">{link}</span>
//                       </p>
//                       <div className="absolute right-0 top-0 h-14 border-r border-white"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <hr className="w-full border-t border-white mt-5" />
//           </div>
//         </nav>

//         <AnimatePresence>
//           {isDropdownVisible && hoveredLink && (
//             <motion.div
//               key={hoveredLink}
//               className="fixed left-0 w-full bg-white text-black shadow-lg z-40"
//               style={{ top: "130px" }}
//               initial={{ opacity: 0, y: "-20px" }}
//               animate={{ opacity: 1, y: "0px" }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="container mx-auto py-10">
//                 <Suspense fallback={<p>Loading...</p>}>
//                   {React.createElement(pageComponents[hoveredLink])}
//                 </Suspense>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Navbar;// Ye pura code waise ka waise rahega jaise tumne diya tha
// Main sirf ek chhoti si cheez update ki:
// Link pe hover karte waqt bas dropdown dikhana, 
// jab link click karoge to proper routing ho jaayegi
import React, { useState, useEffect, useCallback, useMemo, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
// Lazy imports
const pageComponents = {
  Home: lazy(() => import("../Compo/Hero")),
  FACILITIES: lazy(() => import("../Compo/Teachers")),
  ABOUT: lazy(() => import("../Compo/Aboutus")),
  ACADEMICS: lazy(() => import("../Compo/Acadmic")),
  ADMISSIONS: lazy(() => import("../Compo/Admisions")),
  GALLERY: lazy(() => import("../Compo/Gallery")),
  FACULTY: lazy(() => import("../Compo/Teachers")),
  ALUMNI: lazy(() => import("../Compo/Students")),
  ACHIEVEMENTS: lazy(() => import("../Compo/Achivements")),
  LOGIN: lazy(() => import("../Compo/Log")),

};

const NAV_LINKS = [
  "Home", "GALLERY", "FACULTY", "ALUMNI", "ACHIEVEMENTS",
  "LOGIN", "FACILITIES", "ABOUT", "ACADEMICS", "ADMISSIONS"
];

const StickyScrollNavbar = React.memo(() => {
  const [showSticky, setShowSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > 200;
    setShowSticky(shouldShow);
    if (!shouldShow) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <AnimatePresence>
      {showSticky && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full bg-[#456e79] text-white z-[60] shadow-md md:hidden"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <img src={img} alt="Logo" className="h-10 w-auto" />
            <button onClick={toggleMenu}>
              {isOpen ? <X size={22} /> : <Menu size={28} />}
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col px-4 pb-4 space-y-2 text-sm">
              {NAV_LINKS.map(link => (
                <Link
                  to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  key={link}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

const MobileNavbar = React.memo(({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className={`md:hidden bg-[#456e79] text-white font-poppins fixed top-0 w-full z-50`}>
      <div className="flex items-center justify-between p-4">
        <img src={img} alt="School Logo" className="h-14 w-20" />
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#456e79] text-white text-center"
          >
            <div className="flex flex-col space-y-4 p-4">
              {NAV_LINKS.map(link => (
                <Link
                  key={link}
                  to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="border-b border-gray-300 pb-2 hover:text-gray-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const topLinks = useMemo(() => ["Home", "ABOUT", "FACULTY"], []);
  const rightLinks = useMemo(() => ["FACILITIES", "ACHIEVEMENTS", "LOGIN"], []);
  const lowerLeftLinks = useMemo(() => ["GALLERY", "ALUMNI"], []);
  const lowerRightLinks = useMemo(() => ["ACADEMICS", "ADMISSIONS"], []);

  return (
    <>
      <StickyScrollNavbar />
      <MobileNavbar scrolled={scrolled} />

      <div className={`top-0 left-0 w-full z-50 hidden md:block transition-all duration-300 ${scrolled ? "bg-[#456e79]" : "bg-transparent"}`}>
        <nav className="bg-[#456e79] text-white font-semibold font-poppins text-sm w-full transition-all duration-300">
          <div className="container mx-auto flex flex-col items-center relative">
            <div className="w-full flex items-center justify-between px-28 mt-4 relative">
              <ul className="flex space-x-20 mb-4">
                {topLinks.map(link => (
                  <li key={link} className="group cursor-pointer relative">
                    <Link
                      to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                      className="inline-block group-hover:border-b-2 group-hover:border-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-transparent">
                <img src={img} alt="School Logo" className="h-28 w-28 mt-10" />
              </div>

              <ul className="flex space-x-16 mb-4">
                {rightLinks.map(link => (
                  <li key={link} className="group cursor-pointer relative">
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="inline-block group-hover:border-b-2 group-hover:border-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full flex items-center justify-center gap-20 mt-4">
              <hr className="w-full border-t border-white" />
              <div className="w-48"></div>
              <hr className="w-full border-t border-white" />
            </div>

            <div className="container mx-auto flex justify-center items-center">
              <div className="flex space-x-40 items-center">
                <div className="flex space-x-10 font-poppins">
                  {lowerLeftLinks.map(link => (
                    <div key={link} className="group cursor-pointer relative px-6">
                      <div className="absolute left-0 top-0 h-14 border-l border-white" />
                      <p className="mt-4">
                        <Link
                          to={`/${link.toLowerCase()}`}
                          className="inline-block group-hover:border-b-2 group-hover:border-white"
                        >
                          {link}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-8 pl-16">
                  {lowerRightLinks.map(link => (
                    <div key={link} className="group cursor-pointer relative px-6">
                      <p className="mt-4">
                        <Link
                          to={`/${link.toLowerCase()}`}
                          className="inline-block group-hover:border-b-2 group-hover:border-white"
                        >
                          {link}
                        </Link>
                      </p>
                      <div className="absolute right-0 top-0 h-14 border-r border-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="w-full border-t border-white mt-5" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default React.memo(Navbar);
