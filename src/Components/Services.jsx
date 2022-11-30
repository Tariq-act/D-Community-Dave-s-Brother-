import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="flex justify-center items-center gap-8">
      <div className="w-80 h-20 bg-gray-50 border-2 rounded-md flex justify-center items-center text-center">
        <Link to="/clientOnboarding" className="">
          Looking for Developers <br />
          <span className="text-blue-300 font-semibold">Click Here</span>
        </Link>
      </div>

      <div className="w-80 h-20 bg-gray-50 border-2 rounded-md flex justify-center items-center text-center">
        <Link to="/developerOnboarding" className="">
          Are you a Developer Looking For a Job ? <br />
          <span className="text-blue-300 font-semibold">Click Here</span>
        </Link>
      </div>

      <div className="w-80 h-20 bg-gray-50 border-2 rounded-md flex justify-center items-center text-center">
        <Link to="/vendorOnboarding" className="">
          Looking for Developers <br />
          <span className="text-blue-300 font-semibold">Click Here</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
