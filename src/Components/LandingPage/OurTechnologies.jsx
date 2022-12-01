import React from "react";

import { ourTechnologies } from "../../data/OurTechnologies";

const OurTechnologies = () => {
  return (
    <section className="py-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Technologies</h1>
        <p className="text-xl mt-5">What our developers know</p>
      </div>

      <div className="bg-blue-50 mt-20 px-36 py-10 flex justify-center items-center gap-8 flex-wrap">
        {ourTechnologies.map((technology) => (
          <div key={technology.id} className="w-fit text-center">
            <div className="p-8 border-[0.5px] border-blue-600 bg-white rounded-md shadow-md">
              <img src={technology.image} alt="Android" className="w-20 h-20" />
            </div>
            <p className="mt-4">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTechnologies;
