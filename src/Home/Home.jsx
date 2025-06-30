import React, { useContext, useEffect } from 'react';
import { IoChevronForward } from "react-icons/io5";
import StarfieldWarp from "./StarfieldWarp"
import Navbar from '../components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const location = useLocation()
    const {setUser} =useContext(AuthContext)
    useEffect(()=> {
      const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    },[location])

    return (
        <StarfieldWarp>

            <Navbar />
            <div
                className="relative z-10 text-white w-full container mx-auto flex justify-center items-center flex-col gap-8 max-w-3/4">


                <h1
                    className="text-[2rem] lg:text-[3rem] text-center font-bold lg:leading-relaxed pt-20">
                    Arrange Unforgettable Events <br /> with Zero Stress
                </h1>

                <p
                    className="text-white/80 max-w-[700px] mt-3 text-center">
                    We believe that event management should be simple, smooth, and stress-free. Let us take care of the details while you enjoy the moment.
                </p>

                <div
                    className="flex items-center flex-col md:flex-row gap-3 justify-center 425px:gap-6 mt-10 md:mt-12">
                    <Link to="/Events"
                        className="cursor-pointer bg-[#EBD6FB] pl-5 pr-4 border border-[#EBD6FB] rounded-lg py-3 flex items-center gap-2 text-[1rem] group text-black"
                    >
                        All Events
                        <IoChevronForward className="group-hover:ml-1 transition-all duration-200" />
                    </Link>
                    <Link to="/Add-Events"
                        className="cursor-pointer border-2 border-[#EBD6FB] pl-5 pr-4 rounded-lg py-3 flex items-center gap-2 text-[1rem] group">
                        Add Events
                        <IoChevronForward className="group-hover:ml-1 transition-all duration-200" />
                    </Link>
                </div>
            </div>
        </StarfieldWarp>
    );
};

export default Home;
