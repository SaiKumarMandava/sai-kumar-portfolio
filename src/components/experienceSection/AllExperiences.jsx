import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    id:1,
    job: "Associate Software Developer",
    company: "1990 minds & Co",
    date: "May 2023 - June 2024",
    responsibilities: [
      "Led distributed frontend development using React, Tailwind CSS, and CSS for styling, ensuring responsiveness.",
      "Utilized Material-UI (MUI) and Ant Design to create intuitive, scalable, and visually appealing interfaces.",
      "Drove backend development with Node.js and Express.js, implementing multi-tenant architecture in MongoDB and successfully monitoring data flow.",
      " Deployed applications on Firebase for scalable hosting and utilized DigitalOcean for reliable and efficient cloud hosting solutions.",
    ],
  },
  {
     id:2,
    job: "Software Developer",
    company: "Cloud Express Solutions",
    date: "July 2024 - Jan 2025",
    responsibilities: [
      "Spearheaded the development and deployment of MERN stack applications, delivering tailored solutions to meet business needs.",
      "Enhanced functionality and user satisfaction through responsive React UIs and seamless API integrations.",
      "Demonstrated a strong commitment to code quality and project deadlines.",
      " Excelled in a remote work environment, demonstrating strong collaboration, communication, and leadership skills."
    ],
  },
  // {
  //   job: "Course Instructor",
  //   company: "Sprints",
  //   date: "2024 - Present",
  //   responsibilities: [
  //     "Teaching JavaScript, React and TailwindCSS.",
  //     "Participating in preparing course materials.",
  //     "Helping students through their way in learning web development technologies.",
  //   ],
  // },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences?.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
