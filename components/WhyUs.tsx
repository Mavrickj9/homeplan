"use client"; // this is a client component
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoStorefrontSharp } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section className="sect" id="whyUs">
      <div>
        <h1>Why Us</h1>
        <div>
          <div>
            <FaRegEdit />
            <h2>Customize your home plan</h2>
            <p>
              We will work with you to make small or large changes so you get
              the house design of your dreams. Tailor your house blueprints with
              our modification service.
            </p>
          </div>
          <div>
            <HiOutlineCurrencyDollar />
            <h2>Stay on budget / low price guarantee</h2>
            <p>
              Get a Cost to Build report for any house plan. We also offer a low
              price guarantee for home plans and will beat the competition’s
              regularly published price by 5% (conditions apply; call for more
              details. Excludes services, ancillary products, and special
              offers/discounts).
            </p>
          </div>
          <div>
            <IoStorefrontSharp />
            <h2>Get personalized help with your house blueprints</h2>
            <p>
              Shopping for house designs can feel overwhelming. Our experienced
              house blueprint experts are ready to help you find the house plans
              that are just right for you. Call 1-800-913-2350 or click here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
