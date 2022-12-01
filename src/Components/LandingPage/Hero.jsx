import React from "react";

const Hero = () => {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-around items-center px-0 sm:px-10 md:px-15 lg:px-20 py-16 text-customBlack gap-10  bg-gray-300">
      <div className="text-center p-4 sm:p-0 md:text-start md:w-2/4 flex flex-col justify-center items-start gap-6">
        <h1 className="text-5xl sm:text-6xl font-semibold">
          Hire Remote Developers on Contract
        </h1>
        <p className="text-lg">
          Hire India’s top remote talent. We source, vet & deploy the top
          marketing & technology professionals India has to offer.
        </p>

        <form action="">
          <div className="w-fit rounded-md bg-blue-600 border-blue-600 border-4">
            <input
              type="email"
              className="outline-none border-black p-2 rounded-l-sm"
              placeholder="Enter your email..."
            />
            <button className="w-fit text-center px-4 font-semibold text-white">
              Hire Now
            </button>
          </div>
        </form>
        <p className="text-lg">
          Hire India’s top remote talent. We source, vet & deploy the top
          marketing & technology professionals India has to offer.
        </p>
      </div>

      <div>
        <form
          action=""
          className="border-[0.5px] border-black rounded-md p-4 flex flex-col justify-center items-center gap-4 sm:gap-6 bg-white"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm">
              Enter your Name
            </label>
            <input
              type="text"
              id="name"
              className="outline-none border-[0.5px] border-black p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm">
              Enter your E-mail
            </label>
            <input
              type="email"
              id="name"
              className="outline-none border-[0.5px] border-black p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="phoneNumber" className="text-sm">
              Enter your Phone Number
            </label>
            <div className="flex">
              <p className="text-center border-[0.5px] border-black border-r-0 p-2 rounded-l-md">
                +91
              </p>
              <input
                type="number"
                id="name"
                className="outline-none border-[0.5px]  border-black p-2 w-full rounded-md rounded-l-none "
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="description" className="text-sm">
              Enter your Project Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="outline-none border-[0.5px] border-black p-2 rounded-md "
            ></textarea>
          </div>

          <button className="bg-customDarkPurple w-11/12 py-2 rounded-md font-semibold text-white">
            Done
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
