import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'

export const BasicThemeOptions = ['light', 'dark'] as const
export type ThemeOption = typeof BasicThemeOptions[number]
export const isThemeOption = (check: any): check is ThemeOption => BasicThemeOptions.includes(check)

export const ThemeContext = createContext<{
  activeTheme: ThemeOption
  setActiveTheme: React.Dispatch<React.SetStateAction<ThemeOption>>
}>({} as any)


export const ThemeProvider: FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeOption>(BasicThemeOptions[0])

  useEffect(() => {
    const savedTheme = localStorage.getItem("savedTheme")

    if (savedTheme && isThemeOption(savedTheme)) {
      setActiveTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const documentElement = document.documentElement
    if (documentElement.getAttribute("class")) {
      documentElement.classList.remove(...BasicThemeOptions)
      documentElement.classList.add(activeTheme)
    } else {
      documentElement.setAttribute("class", activeTheme)
    }
    localStorage.setItem("savedTheme", activeTheme)
  }, [activeTheme])

  return (
    <ThemeContext.Provider value={{
      activeTheme,
      setActiveTheme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}
