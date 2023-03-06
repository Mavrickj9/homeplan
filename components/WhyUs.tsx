"use client"; // this is a client component
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoStorefrontSharp } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section className="sect" id="whyUs">
      <div className="my-12 md:pt-16 md:pb-2">
        <h1 className="text-center md:pb-3 text-rose-900 font-bold mb-3 text-5xl tracking-wider">
          Why Us
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-center items-center md:space-x-10 md:space-y-0 md:p-6 md:flex-row md:text-center">
          <div className="md:w-1/3">
            <div className="flex justify-center align-center">
              <FaRegEdit size={70} color="#F26419" />
            </div>
            <h2 className="text-center text-xl text-rose-900 font-bold mb-6 md:text-center">
              Customize your home plan
            </h2>
            <p>
              We will work with you to make small or large changes so you get
              the house design of your dreams. Tailor your house blueprints with
              our modification service.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex justify-center align-center">
              <HiOutlineCurrencyDollar size={70} color="#557821" />
            </div>
            <h2 className="text-center text-xl text-rose-900 font-bold mb-6 md:text-center">
              Stay on budget / low price guarantee
            </h2>
            <p>
              Get a Cost to Build report for any house plan. We also offer a low
              price guarantee for home plans and will beat the competition’s
              regularly published price by 5% (conditions apply; call for more
              details. Excludes services, ancillary products, and special
              offers/discounts).
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex justify-center align-center">
              <IoStorefrontSharp size={70} color="#F6AE2D" />
            </div>
            <h2 className="text-center text-xl text-rose-900 font-bold mb-6 md:text-center">
              Get personalized help with your house blueprints
            </h2>
            <p>
              Shopping for house designs can feel overwhelming. Our experienced
              house blueprint experts are ready to help you find the house plans
              that are just right for you. Call 1-800-913-2350 or click here.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-1 mx-auto my-4 bg-stone-900 border-0 rounded"></hr>
    </section>
  );
};

export default WhyUs;
