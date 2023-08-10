import Link from "next/link";
import {RiInstagramLine, RiGithubLine, RiFacebookLine, RiLinkedinLine, RiStackOverflowLine, RiMailCloseLine} from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href='https://github.com/Femzy1900' className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href='adedokunfemi14@gmail.com' className="hover:text-accent transition-all duration-300">
        <RiMailCloseLine />
      </Link>
      <Link href='https://www.linkedin.com/in/adedokun-femi-40053823b/' className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiStackOverflowLine />
      </Link>
    </div>
  )
};

export default Socials;
