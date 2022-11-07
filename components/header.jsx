import styles from '../styles/header.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
            <Link href="#">Home</Link>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <Link href="#">Why Us</Link>
          </li>
          <li>
            <Link href="#">Past Recruiters</Link>
          </li>
          <li>
            <Link href="#">Placement Record</Link>
          </li>
          <li>
            <Link href="#">Infrastructure</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
