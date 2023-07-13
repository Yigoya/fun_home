import Logo from '@/components/Logo'
import React from 'react'
import styles from '@/styles/movies.module.css'
import ExploreIcon from '@mui/icons-material/Explore';
import TimelineIcon from '@mui/icons-material/Timeline';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <div>
        <p>News feed</p>
        <div className={styles.sidelink}>
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className={styles.sidelink}>
          <TimelineIcon />
          <p>Explore</p>
        </div>
        <div className={styles.sidelink}>
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className={styles.sidelink}>
          <ExploreIcon />
          <p>Explore</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar