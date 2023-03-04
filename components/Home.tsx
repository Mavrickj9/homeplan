"use client"; // this is a client component
import React from "react";
import css from "./../styles/home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={css.container} id="Home">
      <div className={css.heroimage}>
        <Image src="/farmhouse.jpg" alt="" fill />
      </div>
      <div className={css.opfade}></div>
      <div className={css.herotext}>
        <h1>BENCHMARK SOLUTIONS</h1>
        <h3>House Designs</h3>
        Be confident in knowing you are buying floor plans for your new home
        from a trusted source offering the highest-standards-in-the industry for
        structural details and code compliancy. Read our services outline below
        and view the photos from people like yourself who have built our plans
        in the gallery. We can also make changes to any house plan and will
        provide a free cost estimate to customize your dream home!
      </div>
    </div>
  );
};

export default Home;
