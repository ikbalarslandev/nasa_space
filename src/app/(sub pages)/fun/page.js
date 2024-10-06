export const metadata = {
  title: "Fun",
};

import FillWithPlanets from "@/components/models/fun";

export default function Contact() {
  return (
    <>
      <article className=" w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8 z-20">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            underwater arts
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            While living in our underwater world, we can bring our rich and
            diverse cultures and histories in the form of open-air museums.
          </p>
        </div>
      </article>{" "}
      <FillWithPlanets />
    </>
  );
}
