import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Underwater Factories
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Tectonic underwater movements are leveraged to produce clean and
            sustainable energy to power our homes, businesses, factories etc.
            Consequently, manufacturing plants produce at a net zero carbon
            emission rate.
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
