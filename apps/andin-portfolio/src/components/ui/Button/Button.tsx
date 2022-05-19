import clsx from "clsx"
import { FC, MouseEventHandler } from "react"

const Button: FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string
}> = ({ children, ...props }) => {
  const { className, ...rest } = props
  return (
      <button className={clsx("ml-auto p-3 m-4 bg-black dark:bg-white dark:text-black rounded-md text-white text-sm", className)} {...rest}>
        {children}
      </button>
  )
}

export default Button
