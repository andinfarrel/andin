import Head from 'next/head'
import Image from 'next/image'
import { FC, useState } from 'react'
import clsx from 'clsx'
import { airtable, getMinifiedRecords } from 'app/services/airtable'
import { GetStaticProps } from 'next'
import { useTheme } from 'app/providers/ThemeProvider'
import TriangleRight  from 'public/shapes/triangle-right-svgrepo-com.svg'
import TriangleDown  from 'public/shapes/triangle-down-svgrepo-com.svg'
import Blol from 'public/avatars/blol.svg'

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
          <div className='aspect-square h-4 rounded-full bg-[#FF6565]'/>
          <div className='aspect-square h-4 rounded-full bg-[#FFF16F]'/>
          <div className='aspect-square h-4 rounded-full bg-[#63FF55]'/>
        </div>
        <div className="overflow-y-scroll rounded-lg p-4 md:p-8 flex flex-col space-y-8">
          <div className="aspect-square h-52 min-w-[50%] mx-auto bg-white bg-opacity-80 rounded-full overflow-hidden shrink-0">
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
                    <MeItem key={index}>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </MeItem>
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
                    <MeItem key={index} className='space-y-4'>
                      <div className='h-8'>
                        <img className="object-contain h-full w-full" src={s.fields.Logo[0].url} alt={`tech I use: ${s.fields.Name}`}/>
                      </div>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </MeItem>
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
                    <MeItem key={index}>
                      <p className="text-center font-raleway my-auto">{s.fields.Name}</p>
                    </MeItem>
                  ))
                }
              </div>
            </ToggleHeading>
          </div>
        </div>
      </div>
    </section>
  )
}

const MeItem: FC<{
  className?: string
}> = ({ className, children }) => {
  return (
    <div className={clsx("p-2 md:py-4 bg-white bg-opacity-50 rounded-lg flex flex-col", className)}>
      { children }
    </div>
  )
}

const ToggleHeading: FC<{
  text: string
}> = ({
  text,
  children
}) => {
  const [toggled, setToggled] = useState(false)
  const formatted = `{ ${text} }`

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <div>
      <button onClick={() => handleToggle()} className="text-2xl font-poppins font-bold flex items-center">
        {
          !toggled ? (
            <TriangleRight height="30px"/>
          ) : (
            <TriangleDown height="30px"/>
          )
        }
        {formatted}
      </button>
      <div className={clsx({'hidden': !toggled, 'visible': toggled })}>
        { children }
      </div>
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
