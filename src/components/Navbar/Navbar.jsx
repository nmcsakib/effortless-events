
import React, {useState} from "react";

// react icons
import {IoIosArrowUp, IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = false;
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
       const [accountMenuOpen, setAccountMenuOpen] = useState(false)
     const NavMenu = ({title}) =>  <Link to={`/${title}`} className="before:w-0 hover:before:w-full before:bg-[#687FE5]  before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#687FE5] transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</Link>;
    const SmallNavMenu = ({title}) =>  <a to={`/${title}`} className="before:w-0 hover:before:w-full before:bg-[#687FE5]  before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#687FE5] transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</a>;

    return (
        <nav
            className="flex items-center justify-between w-full relative  px-[10px] py-[8px] container mx-auto">

            {/* logo */}
            <img src="/logo.png" alt="logo" className="w-[55px] invert"/>

            {/* nav links */}
            <ul className="items-center gap-20 text-[1rem] text-[#fff] md:flex hidden">

                

                 <NavMenu title="Home"/>
                <NavMenu title="Events"/>
                <NavMenu title="Add events"/>
                <NavMenu title="My events"/>
            </ul>

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">
                   {/* user account */}
           {
            user ?  <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[10px] cursor-pointer relative"
                     onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                    <div className="relative">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                            alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover"/>
                        <div
                            className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                    </div>

                    <h1 className="text-[1rem]  font-[400] text-gray-600 sm:block hidden">Dhon
                        Deo</h1>

                    <div
                        className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem]  dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                            <FiUser/>
                            View Profile
                        </p>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem]  dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                            <IoSettingsOutline/>
                            Settings
                        </p>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem]  dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                            <FiUser/>
                            View Profile
                        </p>

                        <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                                <TbLogout2/>
                                Logout
                            </p>
                        </div>

                    </div>

                    <IoIosArrowUp
                        className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300  text-gray-600 sm:block hidden`}/>

                </div>

                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                             className="text-[1.8rem]  text-[#424242]c cursor-pointer md:hidden flex"/>
            </div> :   <>
                                
                <button
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#687FE5] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign
                    up
                </button>
            </>
           
           }
           

          


                <CiMenuFries
                    className="text-[1.8rem]  mr-1 text-[#424242]c cursor-pointer md:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 dark:bg-slate-800  dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute dark:text-slate-400 top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                <SmallNavMenu title="Home"/>
                <SmallNavMenu title="Events"/>
                <SmallNavMenu title="Add events"/>
                <SmallNavMenu title="My events"/>

                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          