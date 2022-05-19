import clsx from 'clsx'
import { FC } from 'react'

const Item: FC<{
  className?: string
}> = ({ className, children }) => {
  return (
    <div className={clsx("p-2 md:py-4 bg-white bg-opacity-50 rounded-lg flex flex-col", className)}>
      { children }
    </div>
  )
}

export default Item
