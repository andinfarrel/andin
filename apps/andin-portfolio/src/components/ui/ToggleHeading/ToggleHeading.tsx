import useToggle from 'app/hooks/useToggle'
import { FC } from 'react'
// import TriangleRight  from 'public/shapes/triangle-right-svgrepo-com.svg'
// import TriangleDown  from 'public/shapes/triangle-down-svgrepo-com.svg'
import clsx from 'clsx'
import { TriangleDown, TriangleRight } from 'app/components/icons'

const ToggleHeading: FC<{
  text: string
  headingSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  }> = ({
    text,
    headingSize = "2xl",
    children
  }) => {
    const {isToggled, toggle} = useToggle()
    const headingText = `{ ${text} }`

    return (
      <div>
        <button onClick={() => toggle()} className={"flex items-center"}>
          {
            !isToggled ? (
              <TriangleRight/>
              // "Open"
            ) : (
              <TriangleDown/>
              // "Close"
            )
          }
          <p className={`text-${headingSize} font-poppins font-bold`}>{headingText}</p>
        </button>
        <div className={clsx('transition ease-in-out delay-150', {'hidden': !isToggled, 'visible': isToggled })}>
          { children }
        </div>
      </div>
    )
}

export default ToggleHeading
