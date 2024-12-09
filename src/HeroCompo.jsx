<<<<<<< HEAD
let HeroCompo = () => {
  let data = [
    {
      title: "Enjoy on your TV",
      body: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      path: "/net-tv-1.png",
    },
    {
      title: "Download your shows to watch offline",
      body: "Save your favourites easily and always have something to watch.",
      path: "/net-down-1.png",
    },
    {
      title: "Watch everywhere",
      body: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      path: "/net-tele-1.png",
    },
    {
      title: "Create profiles for kids",
      body: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      path: "/net-kids-1.png",
    },
  ];

  return (
    <div className="bg-black w-full h-auto flex justify-center items-center sm:mt-8 mb-8 lg:mb-0 xl:mt-0 xl:h-auto">
      <div className="w-[94vw] py-1 flex items-start justify-center h-full lg:h-[90%] xl:h-full">
        <div className="h-[96%] flex flex-col items-center sm:w-[88vw] justify-around lg:justify-between lg:h-full xl:w-[90%] xl:h-[98%]">
          {/* Play games div */}
          <div className="flex flex-col justify-between h-[430px] w-full lg:h-[325px] xl:h-[445px]">
            <div className="h-[28px] w-full  lg:h-[35px]">
              <h1 className="text-lg text-slate-50 font-semibold lg:text-2xl">
                Play Mobile Games
              </h1>
            </div>
            <div className="w-full h-[388px] rounded-xl flex flex-col box-1 pl-[17px] sm:justify-evenly sm:items-end lg:flex-row lg:items-center lg:justify-between lg:h-[280px] xl:h-[400px]">
              <div className="h-[172px] w-[295px] flex flex-col items-center justify-around sm:w-full sm:items-start sm:h-[95px] lg:w-[45%] lg:h-[175px] xl:h-full xl:justify-center xl:gap-5 xl:pl-8 xl:w-[50%]">
                <h1 className="text-slate-50 text-2xl font-bold xl:text-[2rem]">
                  Mobile games now included in every plan
                </h1>
                <p className="text-p text-base font-semibold">
                  No ads, extra fees, or in-app purchases. Enjoy unlimited
                  access to a growing catalogue of popular and exclusive games.
                </p>
              </div>
              <div className="overflow-hidden lg:self-end lg:h-full xl:h-full">
                <img
                  src="/gamesnetflix.png"
                  alt=""
                  height="200px"
                  className="w-full h-full lg:hidden"
                />
                <img
                  src="/newone-netflix.png"
                  alt=""
                  height="200px"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* More reasond to join */}

          <div className="flex flex-col mt-4 justify-between w-full">
            <div className="h-[28px] w-full  lg:h-[35px]">
              <h1 className="text-lg text-slate-50 font-semibold lg:text-2xl">
                More reasons to join
              </h1>
            </div>

            <div className="flex flex-col lg:justify-start lg:gap-x-4 lg:flex lg:flex-row lg:flex-wrap justify-center items-center lg:w-[95%] xl:gap-x-3 xl:w-full">
              {data.map((e, index) => (
                <div
                  className="w-[95%] h-[215px] lg:w-[400px] lg:h-[210px] rounded-xl flex flex-col justify-between box-2 my-2 pl-[17px] sm:items-end xl:w-[275px] xl:h-[350px] xl:py-3 xl:pt-5 xl:px-2 xl:overflow-hidden"
                  key={index}
                >
                  <div className="h-[135px] w-[295px] flex flex-col rounded-xl justify-around sm:w-full sm:h-[95px] lg:h-[115px] xl:h-auto xl:gap-3 xl:px-1 xl:w-[99%]">
                    <h1 className="text-slate-50 text-2xl font-bold text-left">
                      {e.title}
                    </h1>
                    <p className="text-p text-base font-semibold text-left">
                      {e.body}
                    </p>
                  </div>
                  <div className="py-1 rounded pr-1 xl:h-[80px] xl:w-[300px]">
                    <img
                      src={e.path}
                      alt=""
                      className="rounded-xl xl:w-full xl:h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCompo;
=======
let HeroCompo = () => {
  let data = [
    {
      title: "Enjoy on your TV",
      body: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      path: "./public/net-tv-1.png",
    },
    {
      title: "Download your shows to watch offline",
      body: "Save your favourites easily and always have something to watch.",
      path: "./public/net-down-1.png",
    },
    {
      title: "Watch everywhere",
      body: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      path: "./public/net-tele-1.png",
    },
    {
      title: "Create profiles for kids",
      body: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      path: "./public/net-kids-1.png",
    },
  ];

  return (
    <div className="bg-black w-full h-auto flex justify-center items-center sm:mt-8 mb-8 lg:mb-0 xl:mt-0 xl:h-auto">
      <div className="w-[94vw] py-1 flex items-start justify-center h-full lg:h-[90%] xl:h-full">
        <div className="h-[96%] flex flex-col items-center sm:w-[88vw] justify-around lg:justify-between lg:h-full xl:w-[90%] xl:h-[98%]">
          {/* Play games div */}
          <div className="flex flex-col justify-between h-[430px] w-full lg:h-[325px] xl:h-[445px]">
            <div className="h-[28px] w-full  lg:h-[35px]">
              <h1 className="text-lg text-slate-50 font-semibold lg:text-2xl">
                Play Mobile Games
              </h1>
            </div>
            <div className="w-full h-[388px] rounded-xl flex flex-col box-1 pl-[17px] sm:justify-evenly sm:items-end lg:flex-row lg:items-center lg:justify-between lg:h-[280px] xl:h-[400px]">
              <div className="h-[172px] w-[295px] flex flex-col items-center justify-around sm:w-full sm:items-start sm:h-[95px] lg:w-[45%] lg:h-[175px] xl:h-full xl:justify-center xl:gap-5 xl:pl-8 xl:w-[50%]">
                <h1 className="text-slate-50 text-2xl font-bold xl:text-[2rem]">
                  Mobile games now included in every plan
                </h1>
                <p className="text-p text-base font-semibold">
                  No ads, extra fees, or in-app purchases. Enjoy unlimited
                  access to a growing catalogue of popular and exclusive games.
                </p>
              </div>
              <div className="overflow-hidden lg:self-end lg:h-full xl:h-full">
                <img
                  src="./public/gamesnetflix.png"
                  alt=""
                  height="200px"
                  className="w-full h-full lg:hidden"
                />
                <img
                  src="./public/newone-netflix.png"
                  alt=""
                  height="200px"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* More reasond to join */}

          <div className="flex flex-col mt-4 justify-between w-full">
            <div className="h-[28px] w-full  lg:h-[35px]">
              <h1 className="text-lg text-slate-50 font-semibold lg:text-2xl">
                More reasons to join
              </h1>
            </div>

            <div className="flex flex-col lg:justify-start lg:gap-x-4 lg:flex lg:flex-row lg:flex-wrap justify-center items-center lg:w-[95%] xl:gap-x-3 xl:w-full">
              {data.map((e, index) => (
                <div
                  className="w-[95%] h-[215px] lg:w-[400px] lg:h-[210px] rounded-xl flex flex-col justify-between box-2 my-2 pl-[17px] sm:items-end xl:w-[275px] xl:h-[350px] xl:py-3 xl:pt-5 xl:px-2 xl:overflow-hidden"
                  key={index}
                >
                  <div className="h-[135px] w-[295px] flex flex-col rounded-xl justify-around sm:w-full sm:h-[95px] lg:h-[115px] xl:h-auto xl:gap-3 xl:px-1 xl:w-[99%]">
                    <h1 className="text-slate-50 text-2xl font-bold text-left">
                      {e.title}
                    </h1>
                    <p className="text-p text-base font-semibold text-left">
                      {e.body}
                    </p>
                  </div>
                  <div className="py-1 rounded pr-1 xl:h-[80px] xl:w-[300px]">
                    <img
                      src={e.path}
                      alt=""
                      className="rounded-xl xl:w-full xl:h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCompo;
>>>>>>> 8f907973c9985d164288d7da1d55e8701b8aa701
