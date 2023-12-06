import { FaCaretDown } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";

let Signin = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] sm:before:bg-black sm:before:absolute sm:before:top-0 sm:before:h-[970px] md:before:h-[996px] sm:before:w-full sm:before:opacity-50 sm:bg-no-repeat lg:before:h-[1006px] sm:bg-cover sm:bg-center xl:before:h-[1003px] bg-black">
      <div className="sm:pl-[40px] py-5 px-3 sm:self-start sm:mb-3 md:mb-7 z-10 xl:w-full">
        <img
          src="./public/Untitled.png"
          className="h-[35px] w-[115px] lg:w-[165px] lg:h-[55px] lg:ml-[100px]"
          alt=""
        />
      </div>

      <div className="h-[575px] w-full sm:h-[630px] z-10 flex sm:items-center sm:justify-center borderbot sm:border-none">
        <div className="form rounded md:w-[50%] py-1 px-3 h-[510px] w-full flex flex-col justify-around sm:px-[50px] sm:w-[70%] sm:items-start sm:h-[590px] lg:w-[44%] xl:w-[36%]">
          <h1 className="text-slate-50 font-bold text-4xl">Sign In</h1>
          {/* first input box */}
          <div className="bg-transparent w-full h-[50px] sm:h-[60px] maindiv relative rounded border sm:w-full lg:w-full">
            <input
              type="email"
              className="w-full h-full pt-5 px-4 pb-[14px] inp2 focus:outline-none group text-[16px] text-slate-50 bg-transparent"
            />
            <h2 className="absolute text font-semibold email transition-all duration-700 top-[11px] left-[18px] sm:top-4 xl:text-lg xl:font-semibold">
              Email or phone number
            </h2>
            <div className="border-transparent z-[-1] inpdiv2 px-4 pt-5 pb-3 absolute top-[-5px] rounded left-[-5px] h-[120%] xl:left-[-6px] xl:top-[-6px] w-[103%]"></div>
          </div>

          {/* second input box */}
          <div className="bg-transparent w-full h-[50px] sm:h-[60px] maindiv relative rounded border sm:w-full lg:w-full">
            <input
              type="email"
              className="w-full h-full pt-5 px-4 pb-[14px] inp2 focus:outline-none group text-[16px] text-slate-50 bg-transparent"
            />
            <h2 className="absolute text font-semibold email transition-all duration-700 top-[11px] left-[18px] sm:top-4 xl:text-lg xl:font-semibold">
              Password
            </h2>
            <div className="border-transparent z-[-1] inpdiv2 px-4 pt-5 pb-3 absolute top-[-5px] rounded left-[-5px] h-[120%] xl:left-[-6px] xl:top-[-6px] w-[103%]"></div>
          </div>

          {/* sign in button */}
          <button className="bg-red-700 w-full text-lg py-2 rounded hover:bg-red-800 font-semibold text-slate-50">
            Sign In
          </button>

          {/* forgot password */}
          <a href="" className="text-slate-50 text-base text-center w-full">
            Forgot password?
          </a>

          {/* checkbox */}

          <div className="text-base text-slate-50">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-[20px] w-[35px] accent-[#f3f3f3]"
                defaultChecked="true"
              />
              Remember me
            </label>
          </div>

          {/* new to netflix */}
          <div className="text-base text-slate-50 newnet text-[13px]">
            New to Netflix? <span className="font-semibold">Sign up now</span>
          </div>

          <div className="py-1 text-sm h-[75px] newnet">
            <p>
              Sign in is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-[#0071eb]">
                {"<![CDATA[<b>Learn more.</b>]]>"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* second footer div */}
      <div className="form w-full px-3 sm:mt-5 z-10 py-5 flex flex-col justify-around gap-4 md:w-full xl:pl-[125px]">
        <p className="newnet">
          Questions? Call <a href="">000-800-919-1694</a>
        </p>
        <div className="w-full h-[100px] flex justify-center items-center">
          <ul className="underline newnet flex flex-row flex-wrap text-[0.875rem] w-full h-[90%] md:gap-y-3">
            <li className="w-[45%] lg:w-[25%]">FAQ</li>
            <li className="w-[45%] lg:w-[25%]">Help Centre</li>
            <li className="w-[45%] lg:w-[25%]">Terms of Use</li>
            <li className="w-[45%] lg:w-[25%]">Privacy</li>
            <li className="w-[45%] lg:w-[25%]">Cookie Preferences</li>
            <li className="w-[45%] lg:w-[25%]">Corporate Information</li>
          </ul>
        </div>

        <div className="w-[47vw] xl:w-[20vw] sm:w-[30vw] h-[5vh] flex justify-between items-center relative sm:h-[7vh] md:h-[5vh] lg:h-[7vh] xl:justify-start xl:h-[5.5vh] md:w-[22vw]">
          <div className="flex justify-around items-center h-full min-w-[50%] p-1 rounded active:border-2 active:border-slate-50 smtran text-slate-50 sm:min-w-[54%] bg-black space-x-2">
            <div>
              <MdTranslate />
            </div>
            <select className="bg-transparent border-none appearance-none text-slate-50 sm:rotate-0 sm:relative sm:pl-0 outline-none">
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
        </div>
      </div>
    </div>
  );
};
export default Signin;
