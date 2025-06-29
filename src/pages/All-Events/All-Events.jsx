/* eslint-disable no-unused-vars */
import { useState } from "react";
import EventCard from "../../components/Event-Card/Event-Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import SectionTitle from "../../components/Section-Title/Section-Title";
import SelectBox from "../../components/Select-Box/Select-Box";
import DateBox from "../../components/Date-Box/Date-Box";
import {motion} from "framer-motion"

const AllEvents = () => {
    const [searchValue, setSearchValue] = useState("");
    const placeholders = [
        "Search With", "Event Title"
    ];
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
            <SectionTitle title={"All"} bgTitle={"Events"} details="Browse through event details, connect with organizers, and secure your spot today. New experiences are just a click away!" />
            <div className="flex justify-center items-center gap-5">
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} placeholders={placeholders} />
                <DateBox/>
                <SelectBox/>
                  <button
                className="px-6 py-1.5 border border-[#dfdfdf] cursor-pointer  transition duration-300 rounded ">
                Clear Filters <span className="text-xl">X</span>
            </button>
            </div>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </motion.div>
    );
};
export default AllEvents;