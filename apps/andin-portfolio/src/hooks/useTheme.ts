import { ThemeContext } from "app/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (themeContext) return themeContext
  else throw new Error("Can't set theme!")
}

export default useTheme
