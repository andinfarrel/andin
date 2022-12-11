import { IconLink, TitleHead } from "@/common/components";
import type { NextPage } from "next";
import { FC } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import Involvements from "@/features/LandingPage/Involvements/Involvements";
import Hero from "@/features/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-100">
      <TitleHead iconText="👾" title="Andin Farrel" />
      <div className="h-screen overflow-y-scroll snap-proximity snap-y">
        <Hero />
        <Involvements />
        <Collab />
        <Footer />
      </div>
    </div>
  );
};

const Collab: FC = () => (
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
