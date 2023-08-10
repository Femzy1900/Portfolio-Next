import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'
import { motion } from "framer-motion";
import {fadeIn} from '../../variants'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div>
            <motion.h2 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent"></span>
            </motion.h2>
            < motion.p 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
            >
              💻 Web application development: I specialize in building responsive and user-friendly web applications using technologies like React, Vue, Svelte, and more. I focus on creating interfaces that provide an exceptional user experience, following industry best practices for front-end development.
              <br />
              🔌 API development, integrations, and automations: I have experience in building and integrating APIs using technologies such as Node.js and Express. I ensure scalability, reliability, and ease of use in the APIs I develop. Additionally, I have expertise in automating processes using tools like Zapier and IFTTT.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]">

            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;


