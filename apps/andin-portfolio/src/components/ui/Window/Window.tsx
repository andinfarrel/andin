import { FC } from 'react'
import s from './Window.module.css'

const Window: FC = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#C6E2EC] bg-opacity-40 backdrop-blur rounded-lg border-2 border-[#C6E2EC] p-4 space-y-4">
      <div className="flex space-x-2">
        <div className='aspect-square h-4 rounded-full bg-[#FF6565]'/>
        <div className='aspect-square h-4 rounded-full bg-[#FFF16F]'/>
        <div className='aspect-square h-4 rounded-full bg-[#63FF55]'/>
      </div>
      <div className="overflow-y-scroll rounded-lg p-4 md:p-8 flex flex-col space-y-8">
        { children }
      </div>
    </div>
  )
}

export default Window
