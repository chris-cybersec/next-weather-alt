//styles
import styles from "@/app/styles/min/Footer.module.css"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
          <p>&copy;&nbsp;{ new Date().getFullYear() }&nbsp;<Link href={"#"}>next-meteo</Link>.</p>
        </div>
    )
}

export default Footer