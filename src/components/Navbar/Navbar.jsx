
import React, {useState} from "react";

// react icons
import {IoIosArrowUp, IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
      const { user, logout } = useContext(AuthContext);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
       const [accountMenuOpen, setAccountMenuOpen] = useState(false)
     const NavMenu = ({title, link}) =>  <Link to={`/${link}`} className="before:w-0 hover:before:w-full before:bg-[#687FE5]  before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#687FE5] transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</Link>;
    const SmallNavMenu = ({title, link}) =>  <Link to={`/${link}`} className="before:w-0 hover:before:w-full before:bg-[#687FE5]  before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#687FE5] transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</Link>;

    return (
        <nav
            className="flex items-center justify-between w-full relative  px-[10px] py-[8px] container mx-auto">

            {/* logo */}
            <img src="/logo.png" alt="logo" className="w-[55px] invert"/>

            {/* nav links */}
            <ul className="items-center gap-20 text-[1rem] text-[#fff] md:flex hidden">

                

                 <NavMenu title="Home" link=""/>
                <NavMenu title="Events" link="Events"/>
                <NavMenu title="Add Events" link="Add-Events"/>
                <NavMenu title="My Events" link="My-Events"/>
            </ul>

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">
                   {/* user account */}
           {
            user ?  <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[10px] relative"
                     onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                    <div className="relative">
                        <img
                            src={user?.photoURL}
                            alt="avatar" className="cursor-pointer w-[35px] h-[35px] rounded-full object-cover"/>
                        
                    </div>

                    <div
                        className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem]  text-gray-400">
                            <FiUser/>
                            {user?.name}
                        </p>

                        <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                            <p onClick={logout} className="cursor-pointer flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
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
                                
                <Link to={'/authentication'}
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#687FE5] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign
                    In
                </Link>
            </>
           
           }
           
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden p-4 text-center absolute top-[65px] bg-slate-400 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
               
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                <SmallNavMenu title="Home" link=""/>
                <SmallNavMenu title="Events" link="Events"/>
                <SmallNavMenu title="Add Events" link="Add-Events"/>
                <SmallNavMenu title="My Events" link="My-Events"/>
            </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          