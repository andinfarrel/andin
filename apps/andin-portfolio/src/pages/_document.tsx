import { BasicThemeOptions, ThemeContext, ThemeOption, ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { Html, Head, Main, NextScript } from 'next/document'
import { FC, useState } from 'react'



const Document: FC = () => {
  return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}

export default Document
