import Image from 'next/image'
import { FAQInquiry } from '@/data/faqData'
import { FAQInquiryItem } from '@/type'
import styles from "./FAQServiceInquiry.module.scss"

function InquiryItem({ item }: { item: FAQInquiryItem }){
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <Image src={item.icon} width={48} height={48} alt={item.icon} />
      <article>
        <span>{item.title}</span>
        <small>{item.subTitle}</small>
      </article>
    </a>
  )
}

export default function FaqServiceInquiry() {
  return (
    <section>
      <h2>서비스 문의</h2>
      <article className={styles.container}>
        { FAQInquiry.map((item) => <InquiryItem key={item.id} item={item} />) }
      </article>
    </section>

  )
}
