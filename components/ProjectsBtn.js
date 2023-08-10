import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
        <Link href={'./work'} className="relative w-[100px] h-[100px] lg:w-[185px] lg:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
          <Image 
            src={'/rounded-text.png'} 
            width={120} 
            height={128} 
            alt="" 
            className="animate-spin-slow w-full h-full lg:max-w-[120px] lg:max-h-[120px]"
          />
          <HiArrowRight className="absolute text-2xl lg:text-4xl group-hover:translate-x-2 transition-all duration-300" />
        </Link>
    </div>
  )
};

export default ProjectsBtn;
