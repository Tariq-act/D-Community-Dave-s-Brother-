import React from "react";

import { heroLogos } from "../../data/Logos";

import HeroAvatar from "../../assets/hero.gif";

const Hero = () => {
  return (
    <section className="w-screen h-auto md:h-screen flex flex-col justify-center items-center px-2 sm:px-10 md:px-15 lg:px-20 pt-10 md:pt-16 pb-10 text-customBlack gap-32 bg-heroBg">
      <div className="text-start p-4 sm:p-0 flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5">
          <h1 className="text-4xl sm:text-6xl font-semibold">
            <span className="text-customBlue">Hire Remote</span> Developers on
            Contract
          </h1>
          <p className="text-lg">
            Hire India’s top remote talent. We source, vet & deploy the top
            marketing & technology professionals India has to offer.
          </p>

          <form action="" className="w-full">
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

        <div className="h-[40vh] md:h-auto overflow-hidden hidden md:block">
          <img src={HeroAvatar} alt="HeroAvatar" className="w-10/12" />
        </div>
      </div>

      <div className="hidden px-4 w-screen md:flex flex-col justify-center items-center text-customGray gap-8">
        <p className="text-center">
          Join 50.000+ websites that use EmbedSocial to sell more
        </p>
        <div className="flex justify-center items-center text-4xl gap-6 flex-wrap">
          {heroLogos.map((logo) => (
            <div key={logo.id}>
              <img src={logo.image} alt="" className="w-3/4 md:w-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* <div></div> */}
    </section>
  );
};

export default Hero;
