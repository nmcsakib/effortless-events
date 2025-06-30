import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ id, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

//   console.log(id);
  return (
    <>
      <div className="w-full">
        <button
          onClick={() => {

            setIsModalOpen(true)}}
           className="cursor-pointer w-full mt-3 px-4 py-2 rounded-md bg-red-400 hover:bg-red-500 transition text-sm font-semibold"
        >
          Delete
        </button>
      </div>

      {/* ✅ Modal Overlay */}
      <div
        className={`${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-opacity duration-300`}
      >
        <div
          className={`${
            isModalOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[-200px] opacity-0"
          } w-[80%] sm:w-[90%] md:w-[40%] bg-[#fff] dark:bg-slate-800 rounded-lg transition-all duration-300 mx-auto mt-16`}
        >
          {/* Modal Header */}
          <div className="w-full flex items-end p-4 justify-between dark:border-slate-700 border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] dark:text-[#abc2d3] font-bold">Delete</h1>
            <RxCross1
              className="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
          </div>

          {/* Modal Content */}
          <div className="p-4 border-b dark:border-slate-700 border-[#d1d1d1]">
            <p className="text-[1rem] dark:text-[#abc2d3] text-[#424242]">
              Are you sure?
            </p>
          </div>

          {/* Modal Footer */}
          <div className="flex items-end justify-end gap-4 p-4 ">
            <button
              className="py-2 px-4 dark:hover:bg-slate-900/50 hover:bg-gray-100 border dark:text-[#abc2d3] dark:border-slate-700 border-[#d1d1d1] rounded-md outline-none text-[#353535]"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer py-2 px-4 border dark:border-slate-800 border-[#d1d1d1] rounded-md outline-none bg-[#3B9DF8] text-[#fff]"
              onClick={() => {
                handleDelete(id)
                setIsModalOpen(false)}}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
