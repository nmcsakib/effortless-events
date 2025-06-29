/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const EventCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);
  const theme = "dark"; // change to "light" if needed
  const location = useLocation();
  console.log(location.pathname);
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };

  const rotateY = isHovered ? (mousePosition.x - 0.5) * 20 : 0;
  const rotateX = isHovered ? (0.5 - mousePosition.y) * 20 : 0;

  const spotlightX = `${mousePosition.x * 100}%`;
  const spotlightY = `${mousePosition.y * 100}%`;

  return (
    <div
      className="relative w-80 h-auto perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-5"
        animate={{
          rotateY,
          rotateX,
        
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="flex flex-col gap-2 text-white z-10">
          <h3 className="text-xl font-bold text-purple-400">🌟 Tech Innovators Meetup</h3>
          <p className="text-sm text-gray-300">Posted by: <span className="font-medium text-white">John Doe</span></p>
          <p className="text-sm">🕒 July 12, 2025 • 4:00 PM</p>
          <p className="text-sm">📍 Daffodil Smart Auditorium, Dhaka</p>
          <p className="text-sm text-gray-300">
            Join us for an evening of innovation, discussion, and networking with tech leaders.
          </p>
          <p className="text-sm">👥 124 Attendees</p>
          {
            location.pathname === '/My-Events' ? <>
            <Link to="/My-Events/update" className=" text-center cursor-pointer mt-3 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold">
            Update
          </Link>
            <button className=" cursor-pointer mt-3 px-4 py-2 rounded-md bg-red-400 hover:bg-red-500 transition text-sm font-semibold">
            Delete
          </button>
          </>
          : <button className=" cursor-pointer mt-3 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold">
            Join Event
          </button>
          }
        </div>

        {/* Spotlight effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            style={{
              background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, ${
                theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgb(152, 0, 255, 0.3)"
              } 0%, transparent 70%)`
            }}
          />
        )}

      
      </motion.div>
    </div>
  );
};

export default EventCard;
