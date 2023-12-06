import { FaCaretDown } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";

let Footer = () => {
  return (
    <div className="w-full flex items-start h-[750px]  sm:h-[630px] justify-center pt-4 pb-1 mt-4 lg:h-[460px]">
      <div className="text-slate-50 h-[690px] lg:h-[400px] sm:h-[570px] flex flex-col justify-between w-[90vw] px-4 xl:pl-[80px]">
        <div className="w-[67vw] text-base font-semibold text-p py-1 sm:text-lg">
          <span>Questions? Call </span>
          <a href="" className="underline">
            000-800-919-1694
          </a>
        </div>
        <div className="w-[55vw] sm:w-[85vw] xl:w-full">
          <div className="w-full xl:w-[85%]">
            <ul className="text-p-footer py-2 w-full sm:flex sm:w-full sm:h-full sm:flex-wrap justify-around sm:justify-start sm:gap-x-2 xl:w-full">
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                FAQ
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Help Centre
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Account
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Media Centre
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Investor Relations
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Jobs
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Ways to Watch
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Terms of Use
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Privacy
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Cookie Preferences
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Corporate Information
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Contact Us
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Speed Test
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Legal Notices
              </li>
              <li className="my-2 hover:cursor-pointer sm:w-[45%] lg:w-[32%] xl:w-[24%]">
                Only on Netflix
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around w-[30vw] items-center p-1 rounded active:border-2 active:border-slate-50 border-f text-slate-50 sm:w-[20vw] lg:w-[12vw] xl:w-[10vw]">
          <div>
            <MdTranslate />
          </div>
          <select className="bg-transparent border-none appearance-none text-slate-50 outline-none">
            <option value="" className="">
              English
            </option>
            <option value="" className="">
              हिंदी
            </option>
          </select>
          <div>
            <FaCaretDown />
          </div>
        </div>

        <div className="w-[55vw] py-1">
          <span className="text-p text-sm xl:text-base">Netflix India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
