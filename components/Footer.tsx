import Image from 'next/image';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="text-rose-100 flex flex-col" id="contact">
      <div className="flex flex-row space-x-4 bg-rose-900 p-6 align-center">
        <div className="flex flex-col md:w-1/4">
          <Image src="/logo.jpg" alt="" width={200} height={200} />
          <div className="flex flex-row flex-wrap p-4 gap-2">
            <FaFacebookSquare
              size={60}
              color="#e9e6e7"
              className="cursor-pointer hover:-translate-y-1 transition-transform"
            />
            <GrInstagram
              size={60}
              color="#e9e6e7"
              className="cursor-pointer hover:-translate-y-1 transition-transform"
            />
          </div>
        </div>
        <div className="md:w-1/4">
          <h1 className="font-mono text-xl font-bold mb-2 text-dred-200">
            BROWSE PLANS
          </h1>
          <p>SEARCH</p>
          <p>EXCLUSIVE DESIRNS</p>
          <p>ON SALE</p>
        </div>
        <div className="md:w-1/4">
          <h1 className="font-mono text-xl mb-2 font-bold text-dred-200">
            WHAT WE DO
          </h1>
          <p>ABOUT US</p>
          <p>GALLERY</p>
          <p>FAQ</p>
        </div>
        <div className="md:w-1/4">
          <h1 className="font-mono text-xl mb-2 font-bold text-dred-200">
            GET IN TOUCH
          </h1>
          <p>CONTACT US</p>
          <p>TEL</p>
          <p>EMAIL</p>
        </div>
      </div>
      <div className="text-sm bg-red-900 p-8 text-center text-dred-200">
        © 2023 Benchmark Solutions, A Zimbabwean Corporation. All rights
        reserved
      </div>
    </section>
  );
}

export default Footer