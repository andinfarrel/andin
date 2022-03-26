import Head from 'next/head'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { airtable, getMinifiedRecords } from 'app/services/airtable'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const skillsTable = airtable('Skills');
  const techsTable = airtable('Techs');
  const interestsTable = airtable('Interests');


  // const titles = await titlesTable.select({
  //   fields: ["Title"]
  // }).all();
  // const projects = await projectsTable.select({
  //   view: 'Grid view',
  // }).all();
  const skills = await skillsTable.select({}).all();
  const techs = await techsTable.select({}).all();
  const interests = await interestsTable.select({}).all();


  return {
    props: {
      me: {
        skills: getMinifiedRecords(skills),
        techs: getMinifiedRecords(techs),
        interests: getMinifiedRecords(interests)
      }
    }
  }
}

interface AboutMe {
  skills: any[]
  techs: any[]
  interests: any[]
}

const Home: FC<{
  me: AboutMe
}> = ({ me }) => {
  return (
    <div className="snap-mandatory snap-y scroll-smooth bg-hero bg-fixed bg-cover bg-center">
      <section className="snap-center h-[80vh] flex flex-col place-content-center pl-8 md:pl-24">
        <div className="translate-y-20">
          <p className="font-poppins font-bold text-6xl md:text-7xl">
            Andin Farrel
          </p>
          <p className="font-raleway font-semibold text-2xl lg:text-3xl">
            I build <span className="text-[#006D77] hover:underline underline-offset-4 hover:cursor-default">solutions</span> to your <span className="text-[#E29578] hover:underline underline-offset-4 hover:cursor-default">problems</span>
          </p>
        </div>
      </section>

     <MainSection me={me} />
    </div>
  )
}

const MainSection: FC<{
  me: AboutMe
}> =  ({
  me
}) => {
  return (
    <section className="snap-center h-screen p-4 md:p-12 md:px-16 lg:p-16 lg:px-24">
      <div className="flex flex-col h-full w-full bg-[#C6E2EC] bg-opacity-40 backdrop-blur rounded-lg border-2 border-[#C6E2EC] p-4 space-y-4">
        <div className="flex space-x-2">
          <div className='aspect-square h-4 rounded-full bg-[#FF6565]'></div>
          <div className='aspect-square h-4 rounded-full bg-[#FFF16F]'></div>
          <div className='aspect-square h-4 rounded-full bg-[#63FF55]'></div>
        </div>
        <div className="overflow-y-scroll grid grid-flow-row  rounded-lg p-8">
          <div className="z-10 fixed bottom-12 right-0 h-28 border-2 border-[#EDF6F9] md:h-36 aspect-square rounded-full bg-[#EDF6F9] bg-opacity-10 backdrop-blur-lg overflow-hidden mr-12">
            <Image width={250} height={250} layout="responsive" className="object-contain object-top" src="/img/blol-look-left.png" alt="" />
          </div>
          <div className="z-0 flex flex-col">
            <SubSectionTitle text="skills"/>
            <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
              {
                me.skills && me.skills.map((s, index) => (
                  <div key={index} className="py-2 md:py-4 bg-white bg-opacity-50 backdrop-blur-lg flex flex-col  rounded-lg ">
                    <p  className="text-center font-raleway my-auto">{s.fields.Name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="z-0 flex flex-col">
            <SubSectionTitle text="interests"/>
            <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
              {
                me.interests && me.interests.map((s, index) => (
                  <div key={index} className="p-2 md:py-4 bg-white bg-opacity-50 backdrop-blur-lg flex flex-col  rounded-lg ">
                    <p  className="text-center font-raleway my-auto">{s.fields.Name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SubSectionTitle: FC<{
  text: string
}> = ({
  text
}) => {
  const formatted = `{ ${text} }`
  return (
    <p className="text-2xl font-poppins font-bold">{formatted}</p>
  )
}


export default Home
