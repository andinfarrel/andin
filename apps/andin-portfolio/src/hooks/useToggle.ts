import { useState } from 'react'

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggle = () => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }

  return {isToggled, toggle}
}

export default useToggle
