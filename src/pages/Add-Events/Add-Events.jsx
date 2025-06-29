/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import { motion } from "framer-motion";
import SectionTitle from "../../components/Section-Title/Section-Title";
import DateBox from "../../components/Date-Box/Date-Box";

const AddEvent = () => {
//   const { register, handleSubmit, reset } = useForm();

  const handleSubmit = (data) => {
    const eventData = {
      title: data.title,
      name: data.name,
      dateTime: data.dateTime,
      location: data.location,
      description: data.description,
      attendeeCount: 0,
    };
    console.log(eventData);

    // axiosNormal.post("/event", eventData).then((res) => {
    //   if (res.data.message === "success") {
    //     Swal.fire({
    //       title: "Event Added Successfully!",
    //       icon: "success",
    //       confirmButtonText: "OK",
    //     });
    //     reset();
    //   }
    // });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
     <SectionTitle title="Add" bgTitle="Event"/>
      <form onSubmit={handleSubmit} className="space-y-6 w-3/4 mx-auto">
        <div>
          <label className="block text-white font-semibold mb-2">Event Title</label>
          <input
            type="text"
            // {...register("title", { required: true })}
            placeholder="Enter Event Title"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Your Name</label>
          <input
            type="text"
            // {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

  <label className="block text-white font-semibold mb-2">Date</label>
        <DateBox/>

        <div>
          <label className="block text-white font-semibold mb-2">Time</label>
          <input
            type="time"
            // {...register("location", { required: true })}
            placeholder="Enter Time"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Location</label>
          <input
            type="text"
            
            // {...register("location", { required: true })}
            placeholder="Enter Location"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Attendee</label>
          <input
            type="number"
            defaultValue={0}
            // {...register("location", { required: true })}
            placeholder="Enter Attendee numbers"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Description</label>
          <textarea
            // {...register("description", { required: true })}
            rows={4}
            placeholder="Enter Event Description"
            className="w-full p-3 rounded  text-white border border-gray-300 outline-none"
          ></textarea>
        </div>

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
