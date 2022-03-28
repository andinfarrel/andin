import Head from 'next/head'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { airtable, getMinifiedRecords } from 'app/services/airtable'
import { GetStaticProps } from 'next'
import { useTheme } from 'app/providers/ThemeProvider'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const skillsTable = airtable('Skills');
  const techsTable = airtable('Techs');
  const interestsTable = airtable('Interests');

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
  const { activeTheme, setActiveTheme } = useTheme()
  return (
    <div className="min-h-screen bg-[#EDF6F9] dark:bg-[#006D77] bg-main bg-fixed bg-cover bg-left-top dark:text-white flex flex-col">
      <button onClick={() => activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light')}  className="ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm">Toggle Theme</button>
      <section className="h-[70vh] flex flex-col place-content-center pl-8 md:pl-24">
        <div className="translate-y-10">
          <p className="font-poppins font-bold text-6xl md:text-7xl">
            Andin Farrel
          </p>
          <p className="font-raleway font-semibold text-2xl lg:text-3xl">
            I build <span className="text-[#006D77] dark:text-[#83c5be] hover:underline underline-offset-4 hover:cursor-default">solutions</span> to your <span className="hover:underline underline-offset-4 hover:cursor-default text-red-600 dark:text-red-300">problems</span>
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
    <section className="h-screen p-8 py-12 md:p-12 md:px-16 lg:p-16 lg:px-24 dark:text-gray-700">
      <div className="flex flex-col h-full w-full bg-[#C6E2EC] bg-opacity-40 backdrop-blur rounded-lg border-2 border-[#C6E2EC] p-4 space-y-4">
        <div className="flex space-x-2">
          <div className='aspect-square h-4 rounded-full bg-[#FF6565]'></div>
          <div className='aspect-square h-4 rounded-full bg-[#FFF16F]'></div>
          <div className='aspect-square h-4 rounded-full bg-[#63FF55]'></div>
        </div>
        <div className="overflow-y-scroll grid grid-flow-row  rounded-lg p-4 md:p-8">
          <div className="z-0 flex flex-col">
            <SubSectionTitle text="skills"/>
            <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
              {
                me.skills && me.skills.map((s, index) => (
                  <MeItem key={index}>
                  {s.fields.Name}
                  </MeItem>
                ))
              }
            </div>
          </div>
          <div className="z-0 flex flex-col">
            <SubSectionTitle text="technologies"/>
            <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
              {
                me.techs && me.techs.map((s, index) => (
                  <MeItem key={index}>
                  {s.fields.Name}
                  </MeItem>
                ))
              }
            </div>
          </div>
          <div className="z-0 flex flex-col">
            <SubSectionTitle text="interests"/>
            <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
              {
                me.interests && me.interests.map((s, index) => (
                  <MeItem key={index}>
                    {s.fields.Name}
                  </MeItem>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MeItem: FC = ({ children }) => {
  return (
    <div className="p-2 md:py-4 bg-white bg-opacity-50 flex flex-col  rounded-lg ">
      <p  className="text-center font-raleway my-auto">{ children }</p>
    </div>
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
