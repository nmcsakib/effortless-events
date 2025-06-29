const SectionTitle = ({title, bgTitle, details}) => {
return (
<div className="py-8">

<h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">{title} <mark class="px-2 text-white rounded-sm bg-[#687FE5]">{bgTitle}</mark> </h1>
<p class="font-normal text-gray-500 text-lg dark:text-gray-400">{details}</p>

 </div>
);
};
export default SectionTitle;