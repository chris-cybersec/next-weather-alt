import React from 'react'

//styles
import styles from "@/app/styles/min/Top.module.css"

const Top = () => {
    return (
        <div className={styles.container}>
            <h1>Einsiedeln</h1>
            <div className={styles.temp}>17°</div>
            <div className={styles.weather}>clouds</div>
        </div>
    )
}

export default Top