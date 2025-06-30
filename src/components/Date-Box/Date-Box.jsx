import "cally";
const DateBox = ({setSelectedDate, selectedDate}) => {
return (
<div id="date-range-picker" date-rangepicker class="flex items-center">
  <div class="relative w-full">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <label htmlFor="date">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
         </label>
    </div>
    <input defaultValue={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} id="date" name="date" type="date" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 
    py-2.5 px-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
</div>
);
};
export default DateBox;