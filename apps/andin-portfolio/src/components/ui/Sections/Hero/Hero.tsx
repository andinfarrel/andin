import { FC } from 'react'

const Hero: FC = () => {
  return (
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
  )
}

export default Hero
