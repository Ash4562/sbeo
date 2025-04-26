import React from "react";
import img from '../assets/25.png';
import Meeteducator from '../Compo/Meeteducator'
import PrimaryTech from '../Compo/PrimaryTech'
import Preprimary from '../Compo/Preprimary'
import Navbar from "./Navbar";
import AdminStaff from "./AdminStaff";
// import Galleryphoto from "./Galleryphoto";

const Teachers = () => {


    return (
        <>

            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                {/* <Navbar /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
                    <h1 className="sm:text-4xl text-2xl font-bold font-playfair">EXPLORE OUR CAMPUS LIFE</h1>
                    <p className="text-lg mt-2">Scroll Down</p>
                </div>
            </div >

            <Meeteducator />
            <PrimaryTech />
            <Preprimary />
            <AdminStaff />

        </>
    );
};

export default Teachers;
