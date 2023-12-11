import React from "react";
import Image from "next/image";

export type TelegramTab = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const TelegramsTabItem = ({ telegramTab }: { telegramTab: TelegramTab }) => {
  const { title, desc, img } = telegramTab;

  return (
      <div className="flex items-start gap-8 lg:gap-19">
        <Image
            src={img}
            height={100}
            width={550}
            alt={title}/>  
        <div className="">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5 text-base leading-relaxed text-titlebgdark dark:text-waterloo">{desc}</p>
        </div>
      </div>
  );
};

export default TelegramsTabItem;
