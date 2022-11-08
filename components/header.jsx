import styles from '../styles/header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src="/logo.webp"
        width="80"
        height="80"
        priority="true"
        alt="DCSA-PU Logo"
      />
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#pastrecruit">Past Recruiters</a>
          </li>
          <li>
            <a href="#">Placement Record</a>
          </li>
          <li>
            <a href="#">Infrastructure</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
