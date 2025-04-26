import { useNavigate } from "react-router-dom";
import img from "../assets/17.png";

const Applynow = () => {
    const navigate = useNavigate();
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center px-4 sm:px-8"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="p-4 sm:p-8 text-center max-w-7xl">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                    Join Us & Be a Part of Excellence!
                </h1>

                {/* Subheading */}
                <p className="text-blue-500 text-lg sm:text-2xl md:text-3xl font-semibold max-w-5xl mx-auto mb-6 font-playfair">
                    "Step into a world of learning, growth, and endless opportunities."
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 sm:mt-16">
                    <button
                      onClick={() => navigate('/Selection')}
                    className="bg-blue-500 bg-opacity-20 bg-blend-color-burn text-white px-6 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold transition border border-white">
                        Apply Now
                    </button>
                    <button
  onClick={() => navigate('/ENQUIRE')}
  className="bg-blue-600 bg-opacity-20 text-white bg-blend-color-burn px-8 sm:px-16 py-3 sm:py-4 rounded-lg font-semibold transition border border-white"
>
  Inquire
</button>

                </div>
            </div>
        </div>
    );
};

export default Applynow;
