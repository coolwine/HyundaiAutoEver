import Image from 'next/image'
import styles from "./Footer.module.scss"

export default function Footer(){
  return (
    <footer className={styles.container}>
      <section className={styles.logoContainer}>
        <Image src="/img/logo_kia.svg" alt="logo" width={116} height={56} />
        <span>© 2023 KIA CORP. All Rights Reserved.</span>
      </section>
      <section className={styles.infoContainer}>
        <article>
          <p>개인정보 처리방침</p>
          <p>이용약관</p>
        </article>
        <article>
          <address>
            <span>서울특별시 서초구 헌릉로 12 <em>기아㈜</em></span>
            <span>대표: <i>송호성, 최준영</i></span>
            <span>사업자등록번호: <i>119-81-02316</i></span>
            <span>통신판매번호: <i>2006-07935</i></span>
            <span>고객센터: <i>1833-4964</i></span>
            <span>제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a></span>
          </address>
        </article>
      </section>
    </footer>
  )
}
