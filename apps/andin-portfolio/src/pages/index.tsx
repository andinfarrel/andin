import { IconLink, PreviewCard, AvatarAndin, TitleHead } from "@/components";
import type { NextPage } from "next";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { workHistory } from "@/utils/data/involvementsData";
import Image from "next/image";
import { PreviewCardProps } from "@/types";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-100">
      <TitleHead iconText="👾" title="Andin Farrel" />
      <div className="h-screen overflow-y-scroll snap-proximity snap-y">
        <HeroSection />
        <InvolvementsSection />
        <CollabSection />
        <Footer />
      </div>
    </div>
  );
};

const HeroSection: FC = () => (
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
      {/* <AvatarAndin /> */}
      <Image
        layout="fill"
        src="/images/andin-weeb.jpeg"
        alt="Andin's profile picture, credit goes to https://picrew.me/image_maker/197705"
      />
    </div>
  </section>
);

const InvolvementsSection: FC = () => {
  const [showcaseHistory, setShowcaseHistory] = useState(workHistory);
  const getTags = useCallback((list: PreviewCardProps[]) => {
    const tags: string[] = [];
    list.forEach((item) => {
      item.tags?.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });
    return tags;
  }, []);

  const onSelectTag: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setShowcaseHistory(() => {
        if (e.target.value === "All") return workHistory;
        return workHistory.filter((work) => work.tags.includes(e.target.value));
      });
    },
    []
  );

  return (
    <section className="flex flex-col h-screen space-y-8 snap-start place-content-center">
      <div className="p-8 mx-auto text-center">
        <p className="p-4 text-2xl italic font-bold md:text-4xl">
          Involvements I am proud of
        </p>
      </div>
      <div className="mx-auto">
        <select
          onChange={onSelectTag}
          className="p-2 rounded-md"
          title="tags"
          name="tags"
          id="tags"
        >
          <option value="All">All</option>
          {getTags(workHistory).map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="hide-scroll p-8 sm:pl-12 pb-40 lg:pb-36 lg:px-36 grid grid-flow-col auto-cols-[85%] md:auto-cols-[33%] gap-8 overflow-x-auto">
        {showcaseHistory.map((work) => (
          <div key={work.company}>
            {work.title && <p className="font-bold">{work.title}</p>}
            <p className="py-1 pb-2 font-medium whitespace-pre-wrap">
              {work.startDate && work.endDate ? (
                <span>
                  {work.startDate} - {work.endDate}{" "}
                </span>
              ) : (
                <span className="p-2" />
              )}
            </p>
            <PreviewCard key={work.company} data={work as PreviewCardProps} />
          </div>
        ))}
      </div>
    </section>
  );
};

const CollabSection: FC = () => (
  <section className="flex flex-col items-center p-24 space-y-2 text-lg snap-start">
    <p className="p-8 text-2xl italic font-bold md:text-4xl">Scenius</p>
    <p>
      Got things you want to share and experiment with just for fun? I&apos;m
      open to collaborating!
    </p>
    <p>Shoot me a message on twitter!</p>
    <IconLink
      className="pt-2 text-3xl"
      href="https://twitter.com/farrelandin"
      ariaLabel="https://twitter.com/farrelandin"
      icon={<AiFillTwitterCircle />}
    />
  </section>
);

const Footer: FC = () => (
  <footer className="block py-8 text-center">Andin Farrel &copy; 2022</footer>
);

export default Home;