import styles from '../styles/welcome.module.css'
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      {/* <Image src="/logo.webp" width="80" height="80" /> */}
      <div className={styles.welcomeBanner}>
        <h2>Lorem ipsum dolor,</h2>
        <h2>Lorem ipsum dolor,</h2>
      </div>
    </div>
  )
}

export default Welcome
