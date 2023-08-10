import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'

const Header = () => {
  return(
    <header  className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">

          <Link href={'/'} className="flex gap-1  items-center">
            <Image 
              src={'/femi.png'}
              width={30}
              height={30}
              alt=""
              priority={true}
              className="rounded-[50%] rotate-[-22deg]  bg-white"
            />
            <h1 className="text-accent font-semibold">.femade</h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  ) 
};

export default Header;
