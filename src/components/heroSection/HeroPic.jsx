import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { PiRectangleDashedThin } from "react-icons/pi";
import { LuRectangleVertical } from "react-icons/lu";
import { BsCircle } from "react-icons/bs";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center py-16"
    >
      <img
        src="../../public/images/profile.jpg"
        alt="Abdelrahman Qassem"
        className="max-h-[390px] w-auto rounded-full"
      /> 

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <BsCircle className=" md:h-[90%] sm:h-[120%] min-h-[690px] lg:w-[470px] w-[400px] text-lightCyan blur-md animate-[spin_20s_linear_infinite]
       
         " />
          {/* animate-[spin_20s_linear_infinite] */}
      </div>
    </motion.div>
  );
};

export default HeroPic;
