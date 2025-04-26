import img from "../assets/1.png";
import Navbar from "./Navbar";
import Mission from './Mission';
import TreeCol from './Treecol';
import Whywe from './Whywe';
import Topper from './Topper';
// import Footer from './Compo/Footer';
import Applynow from './Applynow';
import Statics from './Statics';
// import Navbar from './Navbar';



export default function Hero() {
    return (
        <>
            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                {/* <Navbar /> */}
                <div className="absolute inset-0 flex justify-center items-center top-1/2 transform -translate-y-1/2">
                    <div className="text-center text-white p-6 px-4 md:px-12">

                        <p className="text-lg md:text-2xl max-w-2xl font-poppies mx-auto mb-2">
                            Welcome To
                        </p>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-playfair ">S.B.O.A SCHOOL</h1>
                    </div>

                </div>

            </div>
            <Mission />
            <TreeCol />
            <Statics />
            <Whywe />
            <Topper />
            <Applynow />
        </>

    );
}
