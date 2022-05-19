import Avatar from 'app/components/icons/Avatar'
import { FC } from 'react'
import { ToggleHeading, Window, Item } from 'app/components/ui'


export interface AboutMeProps {
  skills: any[]
  techs: any[]
  interests: any[]
}

const AboutMe: FC<{
  me: AboutMeProps
}> =  ({
  me
}) => {
  return (
    <section className="scroll-smooth h-screen p-8 py-12 md:p-12 md:px-16 lg:p-16 lg:px-24 dark:text-gray-700">
      <Window>
          <Avatar className="aspect-square h-52 w-52 md:min-w-[50%] mx-auto bg-white bg-opacity-80 rounded-full overflow-hidden shrink-0" />
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

export default AboutMe
