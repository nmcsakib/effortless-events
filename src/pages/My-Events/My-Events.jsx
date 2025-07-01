/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import EventCard from "../../components/Event-Card/Event-Card";
import SectionTitle from "../../components/Section-Title/Section-Title";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyEvents = () => {
  const { user } = useContext(AuthContext); 
  const [myEvents, setMyEvents] = useState([]);
  const[deleted, setDeleted] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/authentication");
      return;
    }

    const fetchMyEvents = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `${import.meta.env.VITE_SERVER}/my-events/${user.email}`
        );
        const data = await res.json();
        setMyEvents(data);
      } catch (err) {
        console.error("Error fetching my events:", err);
      }finally{
        setLoading(false)
      }
    };

    fetchMyEvents();
  }, [user, navigate, deleted]); 

  
  const handleDelete = async (id) => {

  try {
    const res = await fetch(`${import.meta.env.VITE_SERVER}/event/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.success) {
      setDeleted(prev => prev + 1)
      toast.success("Event deleted successfully");
    } else {
      toast.error("Failed to delete event");
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    toast.error("Something went wrong");
  }
};

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
        {loading ? <p className="text-center col-span-3"><span className="loading loading-infinity loading-xl"></span></p> : myEvents.length > 0 ? (
          myEvents.map((event) => (
              <EventCard event={event} key={event._id} handleDelete={handleDelete}/>
            
          ))
        ) : (
          <p className="text-white text-center col-span-3">No events found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default MyEvents;
