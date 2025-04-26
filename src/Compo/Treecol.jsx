import { useState } from "react";
import img1 from "../assets/3.png";
import img2 from "../assets/3.png";
import img3 from "../assets/3.png";
import { BsGoogle } from "react-icons/bs";

export default function ThreeColumns() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const items = [
        {
            id: 1, title: "EMPOWERING FUTURE", subtitle: "LEADERS", img: img1,
            description: "We inspire young minds with confidence, knowledge, and the ability to lead with purpose and vision."
        },
        {
            id: 2, title: "HOLISTIC DEVELOPMENT &", subtitle: "EXCELLENCE", img: img2,
            description: "Our approach nurtures academic, creative, and social skills to build well-rounded individuals."
        },
        {
            id: 3, title: "A GLOBAL PERSPECTIVE", subtitle: "WITH STRONG VALUES", img: img3,
            description: "We encourage students to think globally while staying rooted in strong ethical values and principles."
        }
    ];

    return (
        <div className="flex flex-wrap min-h-screen bg-white justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full text-left text-black font-playfair text-lg">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="relative w-full min-h-[50vh] lg:min-h-screen flex flex-col justify-center items-center border border-gray-300 overflow-hidden p-6"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Image Drop Effect */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out 
                                    ${hoveredIndex === index ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
                            />
                        </div>

                        {/* Title and Subtitle Centered Initially */}
                        <div className={`absolute  text-left 
                            ${hoveredIndex === index ? "bottom-16 left-6 text-white text-left" : "top-1/2 left-36 transform -translate-x-1/2 -translate-y-1/2 text-black"}`}>
                            <p className="text-lg  font-playfair">{item.id}.</p>
                            <p className="font-playfair ">{item.title}</p>
                            <p className="font-playfair">{item.subtitle}</p>
                        </div>

                        {/* Paragraph Below (Appears on Hover) */}
                        <p className={`absolute bottom-2  left-3 px-4 text-sm text-left  font-poppins w-min-lg
                            ${hoveredIndex === index ? "opacity-100 translate-y-0 text-white" : "opacity-0 translate-y-5 text-gray-700"}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
