import Image from "next/image";

const Avatar = () => {
  return <div className="hidden rotate-[-22deg]  xl:flex xl:max-w-none w-[400px] h-[600px]"><Image src={'/femi.png'} width={300} height={300} alt="" className="translate-z-0 w-full h-full"/></div>;
};

export default Avatar;
