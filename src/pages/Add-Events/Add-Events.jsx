/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/Section-Title/Section-Title";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEvent = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user) {
    navigate("/authentication");
    return null;
  }

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    attendeeCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      ...formData,
      dateTime: `${formData.date} ${formData.time}`,
      email: user.email,
      attendeeCount: parseInt(formData.attendeeCount) || 0,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/add-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await res.json();

      if (res.ok) {
        toast("✅ Event added successfully!");
        navigate("/Events"); 
      } else {
        toast(result.error || "❌ Failed to add event");
      }
    } catch (error) {
      console.error("Error adding event:", error);
      toast("❌ Error sending request");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
      <SectionTitle title="Add" bgTitle="Event" />
      <form onSubmit={handleSubmit} className="space-y-6 w-3/4 mx-auto">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Event Title"
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Location"
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <input
          type="number"
          name="attendeeCount"
          value={formData.attendeeCount}
          onChange={handleChange}
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Enter Event Description"
          className="w-full p-3 rounded text-white border border-gray-300 outline-none"
          required
        />

        <button
          type="submit"
          className="cursor-pointer w-full py-3 bg-[#687FE5] text-black font-bold rounded hover:bg-[#5a55a0] transition"
        >
          Add Event
        </button>
      </form>
    </motion.div>
  );
};

export default AddEvent;
