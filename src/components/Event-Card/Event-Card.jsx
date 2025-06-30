/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const EventCard = ({ event }) => {
  const {
    _id,
    title,
    name,
    date,
    time,
    location,
    description,
    attendeeCount,
  } = event || {};

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);
  const theme = "dark";
  const {pathname} = useLocation();
  const [count, setCount] = useState(attendeeCount || 0);
  const [joined, setJoined] = useState(false);

 const handleJoin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/join-event/${_id}`, {
        method: "PATCH",
      });

      const data = await res.json();
      if (data.success) {
        setCount(prev => prev + 1); 
        setJoined(true)
        toast('Thank you for Joining')
      } else {
        toast("Failed to join event");
      }
    } catch (err) {
      console.error("Error joining event:", err);
    }
  };




  // Only used for spotlight glow
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  const spotlightX = `${mousePosition.x * 100}%`;
  const spotlightY = `${mousePosition.y * 100}%`;

  return (
    <div
      className="relative w-80 h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-5"
        // ❌ Rotation removed
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="flex flex-col gap-2 text-white z-10">
         <h3 className="text-xl font-bold text-purple-400">🌟 {title}</h3>
          <p className="text-sm text-gray-300">Posted by: <span className="font-medium text-white">{name}</span></p>
          <p className="text-sm">🕒 {date} • {time}</p> 
          <p className="text-sm">📍 {location}</p>
          <p className="text-sm text-gray-300">{description}</p>
          <p className="text-sm">👥 {count} Attendees</p>

          {pathname === '/My-Events' ? (
            <>
              <Link
                to="/My-Events/update"
                className="text-center cursor-pointer mt-3 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold"
              >
                Update
              </Link>
              <button className="cursor-pointer mt-3 px-4 py-2 rounded-md bg-red-400 hover:bg-red-500 transition text-sm font-semibold">
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleJoin} disabled={joined} className="disabled:cursor-not-allowed disabled:bg-purple-300 cursor-pointer mt-3 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold">
              {joined ? "Joined" : "Join Event"}
            </button>
          )}
        </div>

        {/* ✅ Spotlight Glow (Kept) */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            style={{
              background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, ${
                theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgb(152, 0, 255, 0.3)"
              } 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default EventCard;
