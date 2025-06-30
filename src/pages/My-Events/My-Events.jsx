/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import EventCard from "../../components/Event-Card/Event-Card";
import SectionTitle from "../../components/Section-Title/Section-Title";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
  const { user } = useContext(AuthContext); 
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/authentication");
      return;
    }

    const fetchMyEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER}/my-events/${user.email}`
        );
        const data = await res.json();
        setMyEvents(data);
      } catch (err) {
        console.error("Error fetching my events:", err);
      }
    };

    fetchMyEvents();
  }, [user, navigate]); 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto min-h-screen"
    >
      <SectionTitle title={"My"} bgTitle={"Events"} />

      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
        {myEvents.length > 0 ? (
          myEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="text-white text-center col-span-3">No events found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default MyEvents;
