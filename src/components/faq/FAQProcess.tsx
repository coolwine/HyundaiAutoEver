import Image from 'next/image'
import React from "react"
import { FAQProcessItems } from '@/data/faqData'
import { FAQProcessItem } from '@/type'
import styles from "./FAQProcess.module.scss"

function ProcessItem({ item }: { item: FAQProcessItem }){
  return (
    <div>
      <Image src={item.icon} width={48} height={48} alt={item.icon} />
      <article>
        <span>{`${item.id}. ${item.title}`}</span>
        <small>{item.desc}</small>
      </article>
    </div>
  )
}

export default function FaqServiceInquiry() {
  return (
    <div className={styles.container}>
      <h2>이용 프로세스 안내</h2>
      <section className={styles.itemContainer}>
        {
          FAQProcessItems.map((item) => (
            <React.Fragment key={item.id}>
              <ProcessItem item={item} />
              { item.id < FAQProcessItems.length && <Image src="/img/ic_step_arrow.svg" alt="arrow" width={24} height={24} /> }
            </React.Fragment>
          ))
        }
      </section>
    </div>
  )
}
