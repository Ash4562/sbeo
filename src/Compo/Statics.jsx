import img from '../assets/18.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Statics() {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation speed (1s)
            once: false,      // Animation triggers every time
            mirror: true,     // Animation runs when scrolling up too
        });
    }, []);

    return (
        <div
            className="bg-cover bg-center text-white py-16 px-4 h-auto sm:h-screen flex items-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center w-full px-4">

                {/* Stat Box 1 */}
                <div className="flex flex-col items-center" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">120+</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">TEACHERS COUNT</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Highly qualified and experienced faculty)</p>
                </div>

                {/* Stat Box 2 */}
                <div className="flex flex-col items-center" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">2500+</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">STUDENTS COUNT</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Enrolled across various grades)</p>
                </div>

                {/* Stat Box 3 */}
                <div className="flex flex-col items-center" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">15:1</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">STUDENT TO TEACHER RATIO</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Ensuring personalized attention)</p>
                </div>

                {/* Stat Box 4 */}
                <div className="flex flex-col items-center" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">25+</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">SPORTS TEAM</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Across various disciplines)</p>
                </div>

                {/* Stat Box 5 */}
                <div className="flex flex-col items-center" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">50+</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">ANNUAL EVENTS</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Including cultural, academic, and sports events)</p>
                </div>

                {/* Stat Box 6 */}
                <div className="flex flex-col items-center" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2">30+</h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold font-playfair mt-2">COURSES OFFERED</p>
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-poppins mt-2">(Covering academics, arts, and extracurriculars)</p>
                </div>
            </div>
        </div>
    );
}
