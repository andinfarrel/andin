import Head from 'next/head'
import Image from 'next/image'
import { FC, MouseEventHandler, useRef, useState } from 'react'
import clsx from 'clsx'
import { airtable, getMinifiedRecords } from 'app/services/airtable'
import { GetStaticProps } from 'next'
import { useTheme } from 'app/providers/ThemeProvider'
import Window from 'app/components/ui/Window'
import ToggleHeading from 'app/components/ui/ToggleHeading'
import Item from 'app/components/ui/Item'

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
    <>
      <Head>
        <title>🙋🏻‍♂️ Hi! I'm Andin</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <div className="min-h-screen bg-[#EDF6F9] dark:bg-[#006D77] bg-main bg-fixed bg-cover bg-left-top dark:text-white flex flex-col">
        <button onClick={() => activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light')}  className="ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm">Toggle Theme</button>
        <section className="h-[70vh] flex flex-col place-content-center pl-8 md:pl-24">
          <div className="translate-y-10">
            <p className="font-poppins font-bold text-6xl md:text-7xl">
              Andin Farrel
            </p>
            <p className="font-raleway font-semibold text-2xl lg:text-3xl">
              I build <span className="text-[#006D77] dark:text-[#83c5be] hover:underline underline-offset-4 hover:cursor-default">solutions</span> for your <span className="hover:underline underline-offset-4 hover:cursor-default text-red-600 dark:text-red-300">problems</span>
            </p>
          </div>
        </section>

        <MainSection me={me} />
        <ShowcaseSection />
        <ContactSection />
      </div>
    </>
  )
}

const MainSection: FC<{
  me: AboutMe
}> =  ({
  me
}) => {
  return (
    <section className="scroll-smooth h-screen p-8 py-12 md:p-12 md:px-16 lg:p-16 lg:px-24 dark:text-gray-700">
      <Window>
          <div className="aspect-square h-52 w-52 md:min-w-[50%] mx-auto bg-white bg-opacity-80 rounded-full overflow-hidden shrink-0">
            <img src="/img/blol-look-left.png" alt="my avatar"  className="object-cover h-full mx-auto"/>
          </div>
          <div className="p-4 flex flex-col">
            <p className="font-poppins font-semibold text-2xl">Hi! I'm Andin, </p>
            <p className="font-poppins text-2xl">A full stack web developer based in United Kingdom</p>
          </div>
          <div className="z-0 flex flex-col">
            <ToggleHeading text="skills">
              <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
                {
                  me.skills && me.skills.map((s, index) => (
                    <Item key={index}>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </Item>
                  ))
                }
              </div>
            </ToggleHeading>
          </div>
          <div className="z-0 flex flex-col">
            <ToggleHeading text="technologies">
              <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
                {
                  me.techs && me.techs.map((s, index) => (
                    <Item key={index} className='space-y-4'>
                      <div className='h-8'>
                        <img className="object-contain h-full w-full" src={s.fields.Logo[0].url} alt={`tech I use: ${s.fields.Name}`}/>
                      </div>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </Item>
                  ))
                }
              </div>
            </ToggleHeading>
          </div>
          <div className="z-0 flex flex-col">
            <ToggleHeading text="interests">
              <div className="w-full py-12 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-4">
                {
                  me.interests && me.interests.map((s, index) => (
                    <Item key={index}>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </Item>
                  ))
                }
              </div>
            </ToggleHeading>
          </div>
      </Window>
    </section>
  )
}



const ShowcaseSection: FC = () => {
  return (
    <section className="min-h-screen">
      <div className="min-h-screen md:h-screen flex flex-col md:flex-row-reverse md:justify-around"> 
        <div className="my-auto mx-auto flex flex-col p-14 space-y-8 md:mr-auto">
          <div className="font-poppins font-bold text-4xl">
            <p>Project Showcase</p>
            <p className="italic ">Ngopi UK</p>
          </div>
          <div className="font-raleway font-semibold text-xl">
            <p>UK Based authentic Indonesian coffee shops and roaster</p>
          </div>
          <div className="flex flex-col font-poppins font-semibold">
            <a className="text-[#006d77] hover:text-[#83C5BE] italic" href="https://ngopi-uk.vercel.app" target="_blank" referrerPolicy="no-referrer">Online shop</a>
            <a className="text-[#006d77] hover:text-[#83C5BE] italic" href="https://menu.ngopi.co.uk" target="_blank" referrerPolicy="no-referrer">Online Menu</a>
            {/* <p>Read more about it here:</p> */}
          </div>
        </div>
        <div className="flex md:ml-auto">
          <img className="object-contain h-full w-auto" src="/img/mockups/ngopi-mockup.png" alt="" />
        </div>
      </div>
    </section>
  )
}

const ContactSection: FC = () => {
  return (
    <section className="h-56 flex">
      <div className="mx-auto my-auto">
        Would like to chat? <a className="font-raleway font-bold italic hover:underline underline-offset-4" href="https://airtable.com/shrU1dWowu9TJbxVV" referrerPolicy="no-referrer" target="_blank">Contact me</a>
      </div>
    </section>
  )
}

export default Home
