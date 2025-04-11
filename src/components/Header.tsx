"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from "./Header.module.scss"
import { useState } from 'react'
import clsx from 'clsx'

const menus = [
  { link: "/service", text: "서비스 소개" },
  { link: "/faq", text: "자주 묻는 질문" },
  { link: "/notice", text: "새소식" },
  { link: "/contact", text: "상담문의" },
]

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className={styles.container}>
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/img/kia-biz-logo.svg" alt="KIA Biz Logo" width={140} height={80} priority />
        </Link>
      </div>

      <nav className={clsx({ [styles.active]: isActive })}>
        {
          menus.map((menu) => (
            <Link href={menu.link} key={menu.link} className={styles.menu}>
              {menu.text}
            </Link>
          ))
        }
      </nav>

      <div className={styles.moreBtn} onClick={() => setIsActive(!isActive)}>
        <Image src="img/ic_menu.svg" width={40} height={40} alt="more" />
      </div>
    </header>
  )
}

export default Header
