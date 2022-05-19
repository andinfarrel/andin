import useToggle from 'app/hooks/useToggle'
import { FC } from 'react'
import TriangleRight  from 'public/shapes/triangle-right-svgrepo-com.svg'
import TriangleDown  from 'public/shapes/triangle-down-svgrepo-com.svg'
import clsx from 'clsx'

const ToggleHeading: FC<{
  text: string
  headingSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  }> = ({
    text,
    headingSize = "md",
    children
  }) => {
    const {isToggled, toggle} = useToggle()
    const headingText = `{ ${text} }`

    return (
      <div>
        <button onClick={() => toggle()} className={"font-poppins font-bold flex items-center"}>
          {
            !isToggled ? (
              <TriangleRight height="30px"/>
            ) : (
              <TriangleDown height="30px"/>
            )
          }
          <p className={clsx("text-2xl", `text-${headingSize}`)}>{headingText}</p>
        </button>
        <div className={clsx('transition ease-in-out delay-150', {'hidden': !isToggled, 'visible': isToggled })}>
          { children }
        </div>
      </div>
    )
}

export default ToggleHeading
