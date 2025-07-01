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
  const [selectedDate, setSelectedDate] = useState("");
 const [selectedItem, setSelectedItem] = useState('Select Option');
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(events);
  const placeholders = ["Search With", "Event Title"];
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${import.meta.env.VITE_SERVER}/all-events`);
        const data = await res.json();
        setEvents(data);
        
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally{
        setLoading(false)
      }
    };
    
    fetchEvents();
  }, []);
  
  useEffect(() => {
    let filtered = events;
  
    if (selectedDate !== "") {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date).toISOString().split("T")[0];
        return eventDate === selectedDate;
      });
    }
  
    // Time filter
    if (selectedItem !== "") {
      const now = new Date();
      const eventInRange = (eventDate, start, end) => {
        const d = new Date(eventDate);
        return d >= start && d <= end;
      };
  
      if (selectedItem === "Current week") {
        const start = new Date(now);
        start.setDate(start.getDate() - start.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        filtered = filtered.filter(event =>
          eventInRange(event.date, start, end)
        );
      }
  
      if (selectedItem === "Last week") {
        const start = new Date(now);
        start.setDate(start.getDate() - start.getDay() - 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        filtered = filtered.filter(event =>
          eventInRange(event.date, start, end)
        );
      }
  
      if (selectedItem === "Current month") {
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        filtered = filtered.filter(event =>
          eventInRange(event.date, start, end)
        );
      }
  
      if (selectedItem === "Last month") {
        const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const end = new Date(now.getFullYear(), now.getMonth(), 0);
        filtered = filtered.filter(event =>
          eventInRange(event.date, start, end)
        );
      }
    }
  
    setShowEvents(filtered);
  }, [searchValue, selectedDate, selectedItem, events]);

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
      className="container mx-auto min-h-screen"
    >
      <SectionTitle
        title={"All"}
        bgTitle={"Events"}
        details="Browse through event details, connect with organizers, and secure your spot today. New experiences are just a click away!"
      />

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholders={placeholders}
        />
        <DateBox setSelectedDate={setSelectedDate} />
        <SelectBox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <button onClick={() => setShowEvents(events)} className="px-6 py-1.5 border border-[#dfdfdf] cursor-pointer  transition duration-300 rounded">
          Clear Filters <span className="text-xl">X</span>
        </button>
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        { loading ? <p className="text-center col-span-3"><span className="loading loading-infinity loading-xl"></span></p> : showEvents.length > 0 ? (
          showEvents.map((event, i) => (
            <div key={event._id || i} className="flex justify-center items-center ">
              <EventCard event={event} />
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-3">No events found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default AllEvents;
