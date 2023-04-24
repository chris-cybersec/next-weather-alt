import React, { Suspense } from 'react'

//styles
import styles from "@/app/styles/min/Home.module.css"

//Components

import Top from './components/top'
import Icon from './components/icon'
import Contents from './components/contents'

const Home = () => {
  return (
    <div className={styles.container}>
       <div className={styles.top}><Suspense fallback={"Loading..."}> <Top /></Suspense></div> 
       <div className={styles.icon}><Suspense fallback={"Loading..."}> <Icon /></Suspense></div> 
       <div className={styles.content}><Suspense fallback={"Loading..."}><Contents /></Suspense></div> 
      
    </div>
  )
}

export default Home


//https://dribbble.com/shots/15342976-Weather-forecast-Mobile-App-Deisign

//Top
//Icon
//Control
//Input