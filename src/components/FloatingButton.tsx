"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from "./FloatringButton.module.scss"
import { debounce } from 'next/dist/server/utils'

export default function FloatingButton() {
  const [isScrollTop, setIsScrollTop] = useState(false)

  useEffect(() => {
    const checkScroll = debounce(() => {
      setIsScrollTop(window.scrollY === 0)
    }, 100)

    checkScroll()
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, [])

  function onTopClick(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className={styles.container}>
      <div className={!isScrollTop ? styles.active : "" } onClick={onTopClick}>
        <Image src="/img/ic_top.svg" alt="logo" width={28} height={28} />
      </div>
    </section>
  )
}
