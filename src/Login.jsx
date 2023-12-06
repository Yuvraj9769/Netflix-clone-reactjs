import { FaChevronRight } from "react-icons/fa6";

let Login = () => {
  return (
    <div className=" w-full h-[195px] md:flex md:justify-center px-2 py-1 z-10 md:h-[155px] xl:mt-4 xl:items-center xl:justify-center xl:flex my-2">
      <div className="w-[94vw] md:w-[90vw] h-[97%] flex flex-col  justify-between xl:w-[84vw]">
        <h3 className="text-[1rem] text font-bold">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="py-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:justify-between ">
          <div className="bg-transparent w-full h-[50px] maindiv relative rounded border sm:w-[70%] lg:w-[80%] sm:h-[60px]">
            <input
              type="email"
              className="w-full h-full pt-5 px-4 pb-[14px] inp focus:outline-none group text-[16px] text-slate-50 bg-transparent"
            />
            <h2 className="absolute sm:top-[17px] text font-semibold email transition-all duration-700 top-[11px] left-[18px] xl:top-[17px] text-lg ">
              Email address
            </h2>
            <div className="border-transparent z-[-1] w-[102%] lg:w-[101.5%] inpdiv px-4 pt-5 pb-3 absolute top-[-5px] rounded left-[-5px] h-[120%] xl:w-[101.2%]"></div>
          </div>
          <div className="w-[156px] bg-red-600 hover:bg-red-700 flex justify-center items-center rounded hover:cursor-pointer sm:h-[60px] sm:w-[170px] xl:w-[205px]">
            <button className="py-2 px-3 font-semibold text-slate-50 text-xl xl:text-2xl xl:font-bold">
              Get Started
            </button>
            <p className="text-slate-50 text-xl">
              <FaChevronRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
