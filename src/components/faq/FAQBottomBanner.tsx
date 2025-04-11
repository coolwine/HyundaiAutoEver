import Image from 'next/image'
import styles from "./FAQBottomBanner.module.scss"

export default function FAQBottomBanner(){
  return (
    <section className={styles.container}>
      <h2>기아 비즈 App 지금 만나보세요!</h2>
      <div>
        <a>
          <Image src="/img/logo_googleplay.svg" alt="googleplay" width={28} height={28} />
          Google Play
        </a>
        <a>
          <Image src="/img/logo_appstore.svg" alt="appstore" width={28} height={28} />
          App Store
        </a>
      </div>
    </section>
  )
}
