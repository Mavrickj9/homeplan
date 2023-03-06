import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section id="gallery">
      <hr className="h-1 mx-auto my-4 bg-stone-900 border-0 rounded"></hr>
      <div className="md:pt-10">
        <h1 className="text-center text-rose-900 font-bold mb-3 text-5xl tracking-wide">
          Gallery
          <hr className="w-16 h-1 mx-auto my-4 bg-stone-900 border-0 rounded"></hr>
        </h1>
        <div className="md:pt-16 grid grid-cols-3 gap-8 p-8 pt-10 md:space-y-0">
          <div>
            <Image
              src="/zimhouse7.jpg"
              alt=""
              width={700}
              height={50}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
          <div>
            <Image
              src="/zimhouse1.jpg"
              alt=""
              width={700}
              height={700}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
          <div>
            <Image
              src="/zimhouse2.jpg"
              alt=""
              width={700}
              height={700}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
          <div>
            <Image
              src="/zimhouse3.jpg"
              alt=""
              width={700}
              height={700}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
          <div>
            <Image
              src="/zimhouse4.jpg"
              alt=""
              width={700}
              height={700}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
          <div>
            <Image
              src="/zimhouse5.jfif"
              alt=""
              width={700}
              height={700}
              className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-1 transition-transform"
            />
            <p className="text-center text-rose-900 font-medium mb-3 text-lg">
              Two story 4 bedroom house
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
