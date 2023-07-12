import { Tilt } from "react-tilt"
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "lib/utils";

// export default function ServiceCard({ index, title, icon }) {
//     return (
//         <Tilt className="xs:w-[250px] w-full">
//             <motion.div
//                 variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//                 className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
//                 <div
//                     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//                     >

//                 </div>

//             </motion.div>
//         </Tilt>
//     )
// }