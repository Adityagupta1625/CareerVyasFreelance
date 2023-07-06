import Image from "next/image";
import Bolt from "../../public/static/Elements/Banner/bolt";
import Stars from "../../public/static/Elements/Banner/stars";

export default function Banner() {
  return (
    <div className="flex flex-row bg-[#EEECEC] w-full h-full relative
    items-center justify-center">
      <Bolt className={"absolute top-0 left-0 translate-x-full translate-y-full lg:block hidden"}/>
      <div className="flex items-center flex-col w-1/2 relative">
        
        <h1 className="text-slate-700 m-2 font-bold text-md
        lg:text-6xl md:text-4xl 
        text-center">
          Get the Best Career Guidance App soon !!
        </h1>
        <p className="m-4 font-semibold text-sm md:text-xl text-center">
          Make sure you keep the eye on our App Launch 👀 👀
        </p>
        <div className="flex flex-row items-center justify-center">
          <div className="relative cursor-pointer">
            <Image
              src="/static/images/Banner/play.svg"
              alt="app carrer vyas"
              width={500}
              height={300}
              objectFit="cover"
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src="/static/images/Banner/apple.svg"
              alt="app carrer vyas"
              width={500}
              height={300}
              objectFit="cover"
              
            />
          </div>
         </div> 
      </div>
      <div className="w-1/2 h-full relative">
        
        <div className="m-10 h-[220px] md:h-[450px] lg:h-[640px] relative">
        <Stars className={"absolute top-10 right-0 lg:right-10 hidden md:block"}></Stars>
          <Image
            src="/static/images/Banner/mobile.svg"
            alt="student carrer vyas"
            width={500}
            height={400}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
