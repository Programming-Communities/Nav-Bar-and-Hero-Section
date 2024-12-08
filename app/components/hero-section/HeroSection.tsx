import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/font'

function HeroSection() {
  return (
    <>
    <section className={`${styles.hero} ${interFont.className}`}>
        <h1>Hey! I'm {" "}
            <span> Programming Communities </span> 
            <br /><span>I</span>'m A Front and back  End Web Developer</h1>
    </section>
    
    </>
  )
}

export default HeroSection
