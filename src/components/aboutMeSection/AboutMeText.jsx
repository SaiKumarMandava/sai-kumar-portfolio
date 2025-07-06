import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Sai Kumar, Frontend Developer with 1.9 years of experience building 
        responsive and scalable web applications using React.js,
         Redux, and the MERN stack. Proficient in JavaScript, Redux Toolkit, Tailwind CSS, Firebase, and Recharts, 
         with a strong focus on state management, clean code, performance, and user experience. 
         Experienced in version control with Git and GitHub, and working in agile, collaborative team.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
