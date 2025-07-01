/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import SectionTitle from "../Section-Title/Section-Title";
import DateBox from "../Date-Box/Date-Box";
import { useLoaderData, useNavigate, useNavigation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateEvent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState([])
  const [selectedDate, setSelectedDate] = useState("");
  useEffect( () => {
    fetch(`${import.meta.env.VITE_SERVER}/event/${params.id}`).then(res => res.json()).then(data => {
     setEvent(data)
     setSelectedDate(data.date)
    })
  },[params.id])

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const updatedEvent = {
    title: form.title.value,
    name: form.name.value,
    date: selectedDate,
    time: form.time.value,
    location: form.location.value,
    description: form.description.value,
    attendeeCount: form.attendeeCount.value,
  };

  try {
    toast.loading("Updating...")
    const res = await fetch(`${import.meta.env.VITE_SERVER}/event/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });

    const result = await res.json();
    if(result.success){
      toast.dismiss()
      toast.success("Event Updated successfully")
    } else{
      toast.dismiss()
      toast.error("No changes made or event not found.")

    }
    navigate('/My-Events')
  } catch (err) {
    console.error("Failed to update event:", err);
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
     <SectionTitle title="Update" bgTitle="Event"/>
      <form onSubmit={handleSubmit} className="space-y-6 w-3/4 mx-auto">
        <div>
          <label className="block text-white font-semibold mb-2">Event Title</label>
          <input
          defaultValue={event.title}
          name="title"
            type="text"
            
            placeholder="Enter Event Title"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Your Name</label>
          <input
          defaultValue={event.name}
            type="text"
            name="name"
            
            placeholder="Enter Your Name"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

  <label className="block text-white font-semibold mb-2">Date</label>
        <DateBox selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <div>
          <label className="block text-white font-semibold mb-2">Time</label>
          <input
          defaultValue={event.time}
          name="time"
            type="time"
            
            placeholder="Enter Time"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={event.location}
            
            
            placeholder="Enter Location"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Attendee</label>
          <input
            type="number"
            name="attendeeCount"
            defaultValue={event.attendeeCount}
            
            placeholder="Enter Attendee numbers"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Description</label>
          <textarea
          defaultValue={event.description}
          name="description"
            
            rows={4}
            placeholder="Enter Event Description"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-3 bg-[#687FE5] text-black font-bold rounded hover:bg-[#5a55a0] transition"
        >
          Update Event
        </button>
      </form>
    </motion.div>
  );
};

export default UpdateEvent;
