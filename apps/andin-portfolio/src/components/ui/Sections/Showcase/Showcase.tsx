import { FC } from 'react'

const Showcase: FC = () => {
  return (
    <section className="min-h-screen">
      <div className="min-h-screen md:h-screen md:p-8 flex flex-col lg:flex-row-reverse lg:justify-around"> 
        <div className="my-auto flex flex-col p-14 space-y-8 mx-auto">
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
        <img className="object-contain h-full w-auto mx-auto" src="/img/mockups/ngopi-mockup.png" alt="" />
          
      </div>
    </section>
  )
}

export default Showcase