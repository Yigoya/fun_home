import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'
import { ArrowLeftOutlined, ArrowRight, ForkLeft, ForkLeftOutlined, NotificationAdd, Search } from '@mui/icons-material'
import FoodSearch from './FoodSearch'
function Nav() {
  return (
    <div className={styles.nav}>
            <div>
              <ArrowLeftOutlined/>
            </div>
            <div>
              <FoodSearch />
              <NotificationAdd />
            </div>
    </div>
  )
}

export default Nav