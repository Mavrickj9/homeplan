"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import css from "./../styles/services.module.css";

const Services = () => {
  return (
    <div className={css.services} id="services">
      <h1 className="text-center text-rose-900 font-bold mb-3 text-5xl tracking-wide">
        Services
        <hr className="w-16 h-1 mx-auto my-4 bg-teal-900 border-0 rounded"></hr>
      </h1>

      <div className="md:p-6 md:flex-col md:text-center">
        <div className={css.serv3d}>
          <div className="border-r-4 border-stone-900 pr-20">
            <Image src="/3dplan.jpg" alt="" width={520} height={520} />
          </div>
          <p>
            We will work with you to make small or large changes so you get the
            house design of your dreams. Tailor your house blueprints with our
            modification service
          </p>
        </div>
        <div className={css.serv2d}>
          <p>
            We will work with you to make small or large changes so you get the
            house design of your dreams. Tailor your house blueprints with our
            modification service
          </p>
          <div className="border-l-4 border-stone-900 pl-20">
            <Image src="/openfloorplan.jfif" alt="" width={450} height={450} />
          </div>
        </div>
        <div className={css.furnserv}>
          <div className="border-r-4 border-stone-900 pr-20">
            <Image src="/furnlayout2.webp" alt="" width={450} height={450} />
          </div>
          <p>
            We will work with you to make small or large changes so you get the
            house design of your dreams. Tailor your house blueprints with our
            modification service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
