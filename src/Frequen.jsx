<<<<<<< HEAD
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

let Frequen = () => {
  let fredata = [
    {
      title: "What is Netflix?",
      body1:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",
      body2:
        "You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      body1:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
      body2:
        " Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      body1:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      body2:
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      body1:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
      body2:
        "There are no cancellation fees - start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      body1:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
      body2: "Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      body1:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      body2:
        " Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    },
  ];

  const [checkdata, checkvisible] = useState(Array(6).fill(false));

  let checkval = (ind) => {
    let newarr = checkdata.map((e, i) => {
      if (ind === i) {
        return true;
      } else {
        return false;
      }
    });
    checkvisible(newarr);
  };

  let changval = (ind) => {
    let newarr = checkdata.map((e, i) => {
      if (ind === i) {
        return false;
      } else {
        return e;
      }
    });
    checkvisible(newarr);
  };

  return (
    <div className="min-h-[590px] bg-black w-full pb-2 sm:flex sm:justify-center xl:w-[85vw] xl:justify-center">
      <div className="h-full w-[97%] flex flex-col justify-between py-2 pl-[10px] sm:w-[95%] xl:w-[85%]">
        <div className="text-xl text-slate-50 font-semibold mb-3 xl:text-2xl xl:font-semibold">
          Frequently Asked Questions
        </div>

        {fredata.map((e, index) => (
          <div
            className="mt-[10px] frediv min-h-[80px] pb-1 w-[97%] flex flex-col justify-between items-center xl:w-[69vw] hover:bg-[rgb(65,65,65)]"
            key={index}
          >
            <button
              className="p-6 w-[94vw] flex justify-between items-center sm:pr-0 sm:w-[80vw] xl:w-full"
              onClick={() =>
                !checkdata[index] ? checkval(index) : changval(index)
              }
            >
              <span
                className="text-xl text-slate-50 font-semibold xl:text-2xl"
                key={index}
              >
                {e.title}
              </span>
              <span
                className={`text-3xl text-slate-50 xl:pr-7 ${
                  checkdata[index] && "-rotate-45"
                }`}
              >
                <FaPlus />
              </span>
            </button>
            {checkdata[index] && (
              <div className=" text-slate-50 text-xl p-6 w-[91vw] border-t border-black sm:w-[90vw] xl:w-[69vw]">
                {e.body1}
                <br />
                <br />
                {e.body2}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Frequen;
=======
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

let Frequen = () => {
  let fredata = [
    {
      title: "What is Netflix?",
      body1:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",
      body2:
        "You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      body1:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
      body2:
        " Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      body1:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      body2:
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      body1:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
      body2:
        "There are no cancellation fees - start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      body1:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
      body2: "Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      body1:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      body2:
        " Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    },
  ];

  const [checkdata, checkvisible] = useState(Array(6).fill(false));

  let checkval = (ind) => {
    let newarr = checkdata.map((e, i) => {
      if (ind === i) {
        return true;
      } else {
        return false;
      }
    });
    checkvisible(newarr);
  };

  let changval = (ind) => {
    let newarr = checkdata.map((e, i) => {
      if (ind === i) {
        return false;
      } else {
        return e;
      }
    });
    checkvisible(newarr);
  };

  return (
    <div className="min-h-[590px] bg-black w-full pb-2 sm:flex sm:justify-center xl:w-[85vw] xl:justify-center">
      <div className="h-full w-[97%] flex flex-col justify-between py-2 pl-[10px] sm:w-[95%] xl:w-[85%]">
        <div className="text-xl text-slate-50 font-semibold mb-3 xl:text-2xl xl:font-semibold">
          Frequently Asked Questions
        </div>

        {fredata.map((e, index) => (
          <div
            className="mt-[10px] frediv min-h-[80px] pb-1 w-[97%] flex flex-col justify-between items-center xl:w-[69vw]"
            key={index}
          >
            <button
              className="p-6 w-[94vw] flex justify-between items-center sm:pr-0 sm:w-[80vw] xl:w-full"
              onClick={() =>
                !checkdata[index] ? checkval(index) : changval(index)
              }
            >
              <span
                className="text-xl text-slate-50 font-semibold xl:text-2xl"
                key={index}
              >
                {e.title}
              </span>
              <span
                className={`text-3xl text-slate-50 xl:pr-7 ${
                  checkdata[index] && "-rotate-45"
                }`}
              >
                <FaPlus />
              </span>
            </button>
            {checkdata[index] && (
              <div className=" text-slate-50 text-xl p-6 w-[91vw] border-t border-black sm:w-[90vw] xl:w-[69vw]">
                {e.body1}
                <br />
                <br />
                {e.body2}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Frequen;
>>>>>>> 8f907973c9985d164288d7da1d55e8701b8aa701
