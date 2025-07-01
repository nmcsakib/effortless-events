import { IoChevronForward } from "react-icons/io5";
import StarfieldWarp from "../../components/StarFieldWrap/StarfieldWarp";
import { Link } from "react-router-dom";

const ErrorPage = () => {
return (
<StarfieldWarp>
     <div
                className="relative text-white w-full container mx-auto flex justify-center items-center flex-col gap-8 max-w-3/4 h-screen">


                <h1
                    className="text-[2rem] lg:text-[3rem] text-center font-bold lg:leading-relaxed">
                    404 | Page Not Found
                </h1>
                <Link to="/"
                        className="cursor-pointer border-2 border-[#EBD6FB] pl-5 pr-4 rounded-lg py-3 flex items-center gap-2 text-[1rem] group">
                        Go to Home
                        <IoChevronForward className="group-hover:ml-1 transition-all duration-200" />
                    </Link>
                </div>
</StarfieldWarp>
);
};
export default ErrorPage;