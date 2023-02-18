import React from 'react'
import background from '../../assets/headphones.jpg'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${background})`,
      height: '85vh',      
    }}
    className={styles.home_text}
    >Welcome to my React Capstone!</div>
  )
}

export default Home