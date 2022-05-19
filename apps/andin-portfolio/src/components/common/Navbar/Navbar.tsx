import { useTheme, useToggle } from 'app/hooks'
import { FC } from 'react'
import Menu  from 'public/shapes/menu.svg'
import Close from 'public/shapes/close.svg'
import clsx from 'clsx'

interface MenuItem {
  menu: string,
  ref: any
}

const Navbar: FC<{
  menuItems?: MenuItem[]
}> = ({
  menuItems
}) => {
  const { activeTheme, setActiveTheme } = useTheme()
  const { isToggled: isOpen, toggle: toggleOpen } = useToggle()
  const svgfill = activeTheme === 'light' ? "white" : 'black'
  return (
    <div className="flex fixed w-full z-50">
      <button className="ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm" onClick={() => toggleOpen()}>
        <Menu height="20px" width="20px" fill={svgfill}/>
      </button>
      { isOpen && (
        <div className="bg-[#006D77] dark:bg-[#C6E2EC] bg-opacity-80 backdrop-blur w-screen lg:w-[40vw] h-screen fixed right-0">
          <div className="flex">
            <button className="ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm" onClick={() => toggleOpen()}>
              <Close height="20px" width="20px" fill={svgfill} className={clsx('z-20',{'hidden': !isOpen})}/>
            </button>
          </div>
          <div className="flex flex-col">
            <button className="ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm" onClick={() => activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light')}>
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
