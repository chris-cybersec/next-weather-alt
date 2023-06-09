import { Suspense } from 'react'
import './globals.css'

import { Raleway } from 'next/font/google'

const raleway = Raleway({weight: "200", subsets: ["latin"]})

//styles
import styles from "@/app/styles/min/Root.module.css"

//components
import Footer from './components/footer'

export const metadata = {
  title: 'Next-Meteo | meteo.chris-cybersec.xyz',
  description: 'This is my Weather App using Next js and OpenWeatherMap api.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body className={styles.RootContainer} >
        <div className={styles.container}>
          <header>Header</header>
           <main>{children}</main>
          <footer><Suspense fallback={"Loading..."}><Footer /></Suspense></footer>
        </div>
      </body>
    </html>
  )
}
