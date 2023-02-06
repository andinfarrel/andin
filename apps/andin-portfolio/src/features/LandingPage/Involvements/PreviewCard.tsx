import { FC, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { PreviewCardProps } from "@/types";

const ExperienceCard: FC<{
  data: PreviewCardProps;
}> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const description = data.description;

  return (
    <div
      ref={ref}
      onClick={() => {
        if (ref.current)
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
      }}
      className={clsx(
        "relative max-w-sm w-full aspect-video hover:cursor-pointer transition duration-75"
      )}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className={
          "w-full aspect-video rounded-lg flex absolute shadow-lg z-10 bg-white"
        }
      >
        {data.img === "" ? (
          <p className="m-auto text-4xl">{data.company}</p>
        ) : (
          <Image
            className="rounded-lg"
            fill
            src={data.img}
            alt={data.company}
          />
        )}
      </div>
      <div
        className={clsx(
          "w-full bg-white absolute bottom-0 hover:cursor-pointer z-0 flex flex-col place-content-end p-4 rounded-lg shadow-xl transition duration-300 ease-in-out",
          { "translate-y-1/4": !show, "translate-y-full": show }
        )}
      >
        <p className="text-xl italic font-bold md:text-2xl">{data.company}</p>
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
