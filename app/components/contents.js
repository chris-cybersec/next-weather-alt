//styles
import styles from "@/app/styles/min/Content.module.css"

const sunrise = 1646306882
const sunset = 1646347929

const sunriseTime = new Date(sunrise * 1000)
const sunsetTime = new Date(sunset * 1000)
const sunriseHour = sunriseTime.getHours()
const sunriseMinute = sunriseTime.getMinutes()
const sunsetHour = sunsetTime.getHours()
const sunsetMinute = sunsetTime.getMinutes()

const Contents = () => {
    return (
        <div className={styles.container} >
            <div className={styles.sun}>
                <div>sunrise <span>{sunriseHour}:{sunriseMinute}</span></div>
                <div>sunset <span>{sunsetHour}:{sunsetMinute}</span></div>
            </div>
            {/* <div className={styles.humidity}>humidity: <span>10</span>% </div> */}
        </div>
    )
}

export default Contents