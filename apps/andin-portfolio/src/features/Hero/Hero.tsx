import { IconLink } from "@/common/components";
import Image from "next/image";
import { FC } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Hero: FC = () => (
  <section className="flex flex-col-reverse items-center h-screen p-8 snap-start md:flex-row justify-evenly">
    <div className="flex flex-col space-y-2">
      <p className="text-3xl italic font-bold lg:text-6xl">Andin Farrel</p>
      <p className="text-xl lg:text-3xl">I build solutions for your problems</p>
      <p className="text-lg italic lg:text-xl">
        Building @{" "}
        <a
          href="https://senecalearning.com/en-GB/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold hover:underline underline-offset-4"
        >
          Seneca
        </a>
      </p>
      <div className="flex pt-2 space-x-2 text-2xl">
        <IconLink
          href="https://github.com/andinfarrel"
          ariaLabel="github"
          icon={<AiFillGithub />}
        />
        <IconLink
          href="https://linkedin.com/in/andinfarrel"
          ariaLabel="linkedin"
          icon={<AiFillLinkedin />}
        />
        <IconLink
          href="https://twitter.com/farrelandin"
          ariaLabel="twitter"
          icon={<AiFillTwitterCircle />}
        />
      </div>
    </div>
    <div className="h-48 overflow-hidden translate-y-10 rounded-full aspect-square md:h-64 lg:h-80 lg:-translate-x-20 lg:-translate-y-6">
      <Image
        src="/images/andin-weeb.jpeg"
        alt="Andin's profile picture, credit goes to https://picrew.me/image_maker/197705"
        width={500}
        height={500}
      />
    </div>
  </section>
);

export default Hero;
