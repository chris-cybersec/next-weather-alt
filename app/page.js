import React, { Suspense } from 'react'

//styles
import styles from "@/app/styles/min/Home.module.css"

//Components
import Background from './components/background'
import Top from './components/top'

const Home = () => {
  return (
    <div className={styles.container}>
      {/* //background */}
       <div className={styles.bg}><Suspense fallback={"Loading..."}> <Background /></Suspense></div> 
       <div className={styles.top}><Suspense fallback={"Loading..."}> <Top /></Suspense></div> 
      
    </div>
  )
}

export default Home


//https://dribbble.com/shots/15342976-Weather-forecast-Mobile-App-Deisign

//Top
//Icon
//Control
//Input