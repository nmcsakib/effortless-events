/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import EventCard from "../../components/Event-Card/Event-Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import SectionTitle from "../../components/Section-Title/Section-Title";
import SelectBox from "../../components/Select-Box/Select-Box";
import DateBox from "../../components/Date-Box/Date-Box";
import { motion } from "framer-motion";

const AllEvents = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(events);
  const placeholders = ["Search With", "Event Title"];

  // ✅ Fetch events on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER}/all-events`);
        const data = await res.json();
        setEvents(data);
    
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
  const searched = events.filter(event =>
    event.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (searchValue.trim() !== '') {
    setShowEvents(searched);
  } else{
    setShowEvents(events)
  }
}, [searchValue, events]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
      <SectionTitle
        title={"All"}
        bgTitle={"Events"}
        details="Browse through event details, connect with organizers, and secure your spot today. New experiences are just a click away!"
      />

      <div className="flex justify-center items-center gap-5">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholders={placeholders}
        />
        <DateBox />
        <SelectBox />
        <button className="px-6 py-1.5 border border-[#dfdfdf] cursor-pointer  transition duration-300 rounded">
          Clear Filters <span className="text-xl">X</span>
        </button>
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {showEvents.length > 0 ? (
          showEvents.map((event, idx) => (
            <EventCard key={event._id || idx} event={event} />
          ))
        ) : (
          <p className="text-white text-center col-span-3">No events found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default AllEvents;
