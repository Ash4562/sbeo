import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import SwiperCore from "swiper";
import logo from "../assets/logo.png";
import img1 from "../assets/8.png";
import img2 from "../assets/9.png";
import img3 from "../assets/10.png";
import img4 from "../assets/11.png";

SwiperCore.use([]);

const Whywe = () => {
    const swiperRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Update isMobile state based on window size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);  // Mobile threshold
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Check the size initially
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (swiperRef.current) {
                const scrollY = window.scrollY;
                const scrollDirection = scrollY > lastScrollY ? 1 : -1;
                setLastScrollY(scrollY);

                if (scrollDirection === 1) {
                    swiperRef.current.swiper.slideNext();
                } else {
                    swiperRef.current.swiper.slidePrev();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="bg-[#e0f5fd] py-8 px-6 text-center">
            <div className="max-w-xl mx-auto">
                <img src={logo} alt="Logo" className="mx-auto w-20 h-16" />
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">Why Choose Us ?</h2>
            </div>

            <div className="max-w-xl mx-auto mt-2">
                <p className="text-lg font-semibold text-gray-800 mb-2 font-poppins">A Place Where Learning Meets Excellence</p>
            </div>

            <div className="max-w-xl mx-auto mt-2">
                <p className="text-gray-600 text-md relative top-2 font-poppins">We are committed to shaping young minds through a blend of academic excellence, character development, and holistic learning. With a rich heritage in education, we provide students with a nurturing environment that fosters curiosity, creativity, and confidence.</p>
            </div>

            <div className="mt-12 px-12">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1} // One slide on mobile by default
                    spaceBetween={30}
                    speed={1000}  // Transition speed in milliseconds (600ms = 0.6 seconds)

                    breakpoints={{
                        0: { slidesPerView: 1 }, // Single slide on mobile
                        768: { slidesPerView: 2 }, // Two slides on laptop
                    }}
                    className="w-full"
                >
                    {[{
                        title: "WORLD-CLASS INFRASTRUCTURE",
                        text: "Smart classrooms, modern labs, and a resourceful library to enhance learning experiences.",
                        img: img1
                    }, {
                        title: "HOLISTIC DEVELOPMENT",
                        text: "A balance of academics, sports, arts, and extracurricular activities for well-rounded growth.",
                        img: img2
                    }, {
                        title: "EXPERIENCED FACULTY",
                        text: "Qualified and dedicated teachers who inspire and guide students toward excellence.",
                        img: img3
                    }, {
                        title: "INNOVATIVE TEACHING METHODS",
                        text: "Modern teaching techniques that encourage critical thinking and problem-solving.",
                        img: img4
                    }].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`flex flex-col md:flex-row text-end space-x-4 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                                <div className="w-1/3">
                                    <h3 className="text-xl font-bold text-gray-900 font-playfair">{item.title}</h3>
                                    <p className="text-gray-600 mt-2 font-poppins" >{item.text}</p>
                                </div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-2/3 h-80 object-cover "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Whywe;
