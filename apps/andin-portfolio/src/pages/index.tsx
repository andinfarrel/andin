import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import { airtable, getMinifiedRecords } from 'app/services/airtable'
import { GetStaticProps } from 'next'
import { useTheme } from 'app/hooks'
import { Hero, AboutMe, AboutMeProps, Showcase, Contact } from 'app/components/ui/Sections'

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

const Home: FC<{
  me: AboutMeProps
}> = ({ me }) => {

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
        <Hero />
        <AboutMe me={me} />
        <Showcase />
        <Contact />
      </div>
    </>
  )
}

export default Home
