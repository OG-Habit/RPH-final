import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2 } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5 text-base leading-relaxed text-titlebgdark dark:text-waterloo">{desc1}</p>
          <p className="mb-5 text-base leading-relaxed text-titlebgdark dark:text-waterloo">{desc2}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
