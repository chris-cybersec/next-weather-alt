import React from 'react'

//styles
import styles from "@/app/styles/min/Icon.module.css"
import Image from 'next/image'

const icon = "13d"

const Icons = () => {
    return (
        <div className={styles.container} >
            <Image  src={`http://localhost:2233/icons/${icon}.svg`} width={150} height={150} alt="weather- icon" />
        </div>
    )
}

export default Icons