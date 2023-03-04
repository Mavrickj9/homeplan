"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import css from "./../styles/services.module.css";

const Services = () => {
  return (
    <div className={css.services} id="services">
      <div className="items">
        <div className={css.serv3d}>
          <div className="border-r-4 border-stone-600 pr-20">
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
          <div className="border-l-4 border-stone-600 pl-20">
          <Image src="/openfloorplan.jfif" alt="" width={450} height={450} />
          </div>
        </div>
        <div className={css.furnserv}>
          <div className="border-r-4 border-stone-600 pr-20">
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
