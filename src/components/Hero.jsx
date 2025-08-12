import { assets } from "../assets/assets";
import { Star } from "lucide-react";
import { SignIn, SignUp } from '@clerk/clerk-react'

const Hero = ({ className }) => {
  return (
    <div
      className={` h-3/5 w-full flex justify-center items-center ${className}`}
    >
      {/* leftside:Branding */}
      <div className="flex-3/5 h-full flex flex-col gap-7 justify-center ">
        <div className="flex  gap-4 items-center  justify-start">
          <img src={assets.group_users} className="h-13" alt="" srcSet="" />
          <div className="h-full flex flex-col justify-center">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((x, idx) => {
                  return (
                    <Star
                      key={idx}
                      className="size-5 fill-amber-500 text-transparent"
                    />
                  );
                })}
            </div>
            <p className="text-[#1c398d]">Used by 12K+ developers</p>
          </div>
        </div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f1b4f] to-[#3729ab]">
          <h1 className="text-7xl font-semibold tracking-tighter max-w-6/7">
            More than just friends truly connect
          </h1>
        </div>
        <div>
          <h1 className="text-3xl max-w-4/7 text-[#3729ab]">
            connect with global community on pingup
          </h1>
        </div>
      </div>
      {/* rightside:login */}
      <div className=" flex-2/5 flex justify-center items-center">
                <SignIn />
      </div>
    </div>
  );
};

export default Hero;
