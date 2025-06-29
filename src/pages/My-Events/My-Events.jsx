/* eslint-disable no-unused-vars */
import EventCard from "../../components/Event-Card/Event-Card";
import SectionTitle from "../../components/Section-Title/Section-Title";
import {motion} from "framer-motion"

const MyEvents = () => {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto"
    >
            <SectionTitle title={"My"} bgTitle={"Events"} />
          
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </motion.div>
    );
};
export default MyEvents;