import { FC } from 'react'

const Avatar: FC<{
  className?: string
}> = ({
  className
}) => {
  return (
    <div className={className}>
      <img src="/img/blol-look-left.png" alt="my avatar"  className="object-cover h-full mx-auto"/>
    </div>
  )
}

export default Avatar
