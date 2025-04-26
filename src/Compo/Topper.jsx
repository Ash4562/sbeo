import Marquee from "react-fast-marquee";
import img from '../assets/11.png';
import img2 from '../assets/12.png';
import img3 from '../assets/13.png';
import img4 from '../assets/14.png';
import img5 from '../assets/15.png';
// import img6 from '../assets/66.png';

const ToppersSection = () => {
    const toppers = [
        { id: 1, img: img, className: "translate-y-8" },
        { id: 2, img: img2, className: "-translate-y-8" },
        { id: 3, img: img3, className: "-translate-y-8" },
        { id: 4, img: img4, className: "translate-y-8" },
        { id: 5, img: img5, className: "-translate-y-8" },
    ];

    return (
        <section className="py-8 mt-2 bg-white text-center overflow-hidden font-poppins">
            <h2 className="text-2xl font-bold font-poppins">Meet Our Toppers</h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-2 font-poppins">
                Celebrating the hard work, dedication, and achievements of our brightest minds who have set benchmarks of success!
            </p>
            <div className="h-96">
                <div className="relative w-full p-2 h-full">
                    <Marquee speed={60} gradient={false} className="overflow-hidden w-full h-full">
                        {toppers.map((topper) => (
                            <div
                                key={topper.id}
                                className={`rounded-xl overflow-hidden mx-4 sm:mx-2 md:mx-4 ${topper.className} 
                                    sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60`}
                            >
                                <img
                                    src={topper.img}
                                    alt={`Topper ${topper.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default ToppersSection;
