import logo from "../assets/logo.png";
// import developerLogo from "../assets/logo1.webp"; // Replace with actual path
// import {
//     FaPhoneAlt,
//     FaEnvelope,
//     FaMapMarkerAlt,
//     FaFacebookF,
//     FaYoutube,
//     FaInstagram,
// } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="bg-[#002a4d] text-white w-full px-4 md:px-16 py-5 font-poppins text-[14px]">
//             {/* Logo & Title */}
//             <div className="flex flex-col items-start md:items-center md:text-center mb-6">
//                 <img src={logo} alt="Logo" className="w-[96px] h-[80px] mb-2" />
//                 <h2 className="text-[18px] md:text-[20px] font-semibold font-playfair uppercase tracking-wide">
//                     S.B.O.A School Of Chhatrapati Sambhajinagar
//                 </h2>
//             </div>

//             {/* Divider */}
//             <hr className="w-full border-white opacity-40 mb-6" />

//             {/* Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">

//                 {/* Contact */}
//                 <div className="w-full">
//                     <h3 className="text-white text-[15px] font-semibold mb-3">
//                         Contact
//                         <div className="flex gap-1 mt-1">
//                             <span className="w-[24px] border-b-2 border-white"></span>
//                             <span className="w-[48px] border-b-2 border-yellow-400"></span>
//                         </div>
//                     </h3>
//                     <div className="flex items-center gap-2 mb-3">
//                         <FaPhoneAlt className="text-white text-[13px]" />
//                         <p>02402382003</p>
//                     </div>
//                     <div className="flex items-center gap-2 mb-3">
//                         <FaEnvelope className="text-white text-[13px]" />
//                         <p>sboa.abad@gmail.com</p>
//                     </div>
//                     <div className="flex items-start gap-2">
//                         <FaMapMarkerAlt className="text-white text-[13px] mt-[3px]" />
//                         <p className="leading-[20px]">
//                             Jalgaon Rd, Hudco, Mayur Nagar,<br />
//                             N 11, Cidco, Chhatrapati Sambhajinagar,<br />
//                             Maharashtra 431003
//                         </p>
//                     </div>
//                 </div>

//                 {/* Motto */}
//                 <div className="flex flex-col justify-start items-start md:items-center md:text-center px-2">
//                     <p className="text-[#c7d8e0] text-[14px] leading-relaxed font-normal">
//                         "Empowering young minds with knowledge, values, and innovation to create leaders of tomorrow.
//                         We are committed to academic excellence, holistic development, and lifelong learning."
//                     </p>
//                     <p className="mt-5 font-playfair text-[13px] uppercase tracking-wide text-white">
//                         Excellence | Integrity | Innovation
//                     </p>
//                 </div>

//                 {/* Social */}
//                 <div className="flex flex-col items-start md:items-end">
//                     <h3 className="text-white text-[15px] font-semibold mb-4">
//                         Follow Us
//                         <div className="flex gap-1 mt-1">
//                             <span className="w-[24px] border-b-2 border-white"></span>
//                             <span className="w-[48px] border-b-2 border-yellow-400"></span>
//                         </div>
//                     </h3>
//                     <div className="flex items-center gap-2 mb-3">
//                         <FaFacebookF className="text-white text-[13px]" />
//                         <p>Facebook</p>
//                     </div>
//                     <div className="flex items-center gap-2 mb-3">
//                         <FaYoutube className="text-white text-[13px]" />
//                         <p>Youtube</p>
//                     </div>
//                     <div className="flex items-center gap-2 mb-3">
//                         <FaInstagram className="text-white text-[13px]" />
//                         <p>Instagram</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <hr className="w-full border-white opacity-40 my-6" />

//             <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-white gap-2">
//                 {/* Copyright */}

//                 <p className="text-left w-full md:w-auto">©2025 all copyrights reserved</p>
//                 {/* Developed By */}
//                 <div className="flex items-center gap-2 w-full md:w-auto justify-start md:justify-end">
//                     <span>Developed by</span>
//                     <img src={developerLogo} alt="Developer Logo" className="w-16 h-auto" />
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
// import logo from "../assets/logo.png";
// import logo from "../assets/FooterLogo.png";
import developerLogo from "../assets/logo1.webp"; // Replace with actual path
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002a4d] text-white w-full px-4 md:px-16 font-poppins text-[14px]">
      {/* Logo & Title */}
      <div className="flex my-2 flex-col items-start md:items-center md:text-center mb-2">
        <img src={logo} alt="Logo" className="w-[96px] h-[80px] mb-2" />
        <h2 className="text-[18px] md:text-[20px] font-semibold font-playfair uppercase tracking-wide">
          S.B.O.A School Of Chhatrapati Sambhajinagar
        </h2>
      </div>

      {/* Divider */}
      <hr className="w-full border-white opacity-40 mb-2" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
        {/* Contact */}
        <div className="w-full">
          <h3 className="text-white text-[15px] font-semibold mb-3">
            Contact
            <div className="flex gap-1 mt-1">
              <span className="w-[24px] border-b-2 border-white"></span>
              <span className="w-[48px] border-b-2 border-yellow-400"></span>
            </div>
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <FaPhoneAlt className="text-white text-[13px]" />
            <p>02402382003</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaEnvelope className="text-white text-[13px]" />
            <p>sboa.abad@gmail.com</p>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-white text-[13px] mt-[3px]" />
            <p className="leading-[20px]">
              Jalgaon Rd, Hudco, Mayur Nagar,
              <br />
              N 11, Cidco, Chhatrapati Sambhajinagar,
              <br />
              Maharashtra 431003
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="flex flex-col justify-start items-start md:items-center md:text-center px-2">
          <p className="text-[#c7d8e0] text-[14px] leading-relaxed font-normal">
            "Empowering young minds with knowledge, values, and innovation to
            create leaders of tomorrow. We are committed to academic excellence,
            holistic development, and lifelong learning."
          </p>
          <p className="mt-5 font-playfair text-[13px] uppercase tracking-wide text-white">
            Excellence | Integrity | Innovation
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-white text-[15px] font-semibold mb-4">
            Follow Us
            <div className="flex gap-1 mt-1">
              <span className="w-[24px] border-b-2 border-white"></span>
              <span className="w-[48px] border-b-2 border-yellow-400"></span>
            </div>
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <FaFacebookF className="text-white text-[13px]" />
            <p>Facebook</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaYoutube className="text-white text-[13px]" />
            <p>Youtube</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaInstagram className="text-white text-[13px]" />
            <p>Instagram</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="w-full border-white opacity-40 my-1" />

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-white gap-2">
        {/* Copyright */}

        <p className="text-left w-full md:w-auto">
          ©2025 all copyrights reserved
        </p>
        {/* Developed By */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-start md:justify-end">
          <span>Developed by</span>
          <img src={developerLogo} alt="Developer Logo" className="w-32 h-32" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;