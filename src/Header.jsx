import { MdTranslate } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

let Header = () => {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-cover h-[700px] sm:h-[780px] flex items-center flex-col justify-between before:bg-black before:absolute before:opacity-70 before:h-[590px] sm:before:h-[676px] xl:before:h-[756px] before:w-full sm:items-start xl:items-center md:before:h-[690px] xl:h-[860px]">
      <div className="w-[94vw] h-[8vh] z-10 p-6 flex justify-between items-center xl:mt-7">
        <img
          src="./public/Untitled.png"
          alt=""
          className="w-[90px] h-[30px] sm:w-[115px] sm:h-[35px] lg:w-[150px] lg:h-[55px]"
        />
        <div className="w-[45vw] xl:w-[20vw] sm:w-[30vw] h-[5vh] flex justify-between items-center relative sm:h-[8vh] md:h-[5vh] lg:h-[7vh] xl:justify-around xl:h-[5.5vh]">
          <div className="flex justify-around items-center h-full min-w-[42%] p-1 rounded active:border-2 active:border-slate-50 smtran text-slate-50 sm:min-w-[54%] bg-black">
            <div>
              <MdTranslate />
            </div>
            <select className="bg-transparent border-none appearance-none text-black sm:text-slate-50 sm:rotate-0 sm:relative sm:pl-0 absolute outline-none rt pl-[15px] left-[5px]">
              <option value="" className="">
                English
              </option>
              <option value="" className="">
                हिंदी
              </option>
            </select>
            <div className="sm:ml-1">
              <FaCaretDown />
            </div>
          </div>

          <button className=" w-[85px] rounded h-full py-1 bg-red-600 hover:bg-red-700 px-4 text-base text-slate-50 font-semibold lg:w-[125px] lg:text-base xl:w-[85px]">
            Sign In
          </button>
        </div>
      </div>

      {/* the unlimited movies block */}

      <div className=" w-[94vw] h-[345px] px-2 py-1 z-10 mt-[160px]  md:ml-[3vw] sm:h-[72vh] sm:w-[75vw] md:w-[62vw] md:h-[50vh] lg:w-[55vw] lg:px-5 lg:ml-8 lg:h-[55vh] xl:ml-[-300px] xl:h-[62vh]">
        <div className="w-full h-full flex flex-col justify-between">
          <h1 className="text-[2rem] font-semibold text-slate-50 lg:text-[2.5rem] lg:font-bold xl:text-[3.5rem]">
            Unlimited movies, TV shows and more
          </h1>
          <span className="text-base text-slate-50 xl:text-xl xl:text-slate-50 xl:font-semibold">
            Starts at ₹149. Cancel anytime.
          </span>

          <div className="h-[28vh] py-1 sm:h-[40vh] flex flex-col md:h-[26vh] justify-around">
            <div>
              <h3 className="text-[1rem] text font-bold">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
            </div>
            <div className="py-1 flex flex-col justify-between h-[115px] sm:flex-row md:h-[50%] sm:justify-between sm:items-center">
              <div className="bg-transparent w-full h-[50px] sm:h-[60px] maindiv relative rounded border sm:w-[60%] lg:w-[65%]">
                <input
                  type="email"
                  className="w-full h-full pt-5 px-4 pb-[14px] inp focus:outline-none group text-[16px] text-slate-50 bg-transparent"
                />
                <h2 className="absolute text font-semibold email transition-all duration-700 top-[11px] left-[18px] sm:top-4 xl:text-lg xl:font-semibold">
                  Email address
                </h2>
                <div className="border-transparent z-[-1] inpdiv px-4 pt-5 pb-3 absolute top-[-5px] rounded left-[-5px] h-[120%] xl:left-[-6px] xl:top-[-6px] w-[103%]"></div>
              </div>
              <div className="bg-red-600 w-[156px] sm:h-[60px] sm:w-[170px] flex hover:bg-red-700 justify-center items-center rounded hover:cursor-pointer sm:justify-evenly sm:pr-3 xl:w-[205px]">
                <button className="py-2 px-3 font-semibold text-slate-50 text-xl xl:text-2xl">
                  Get Started
                </button>
                <p className="text-slate-50 text-xl">
                  <FaChevronRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the unlimited movies block */}

      <div className="z-10 h-[7rem] sm:h-[6.5rem] w-full overflow-hidden flex items-center justify-start">
        <img src="./public/curve.png" className="w-full h-full" alt="" />
      </div>
    </div>
  );
};
export default Header;
