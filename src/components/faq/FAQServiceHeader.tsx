"use client"

import { useState } from 'react'
import clsx from "clsx"
import Image from 'next/image'
import styles from "./FaqHeader.module.scss"
import { useFAQStore } from '@/store/FAQStore'
import { useCategoryFetcher } from '@/hooks/useFaqFetcher'

function SubCategoryList(){
  const category = useFAQStore((state) => state.category)
  const onChangeCategory = useFAQStore((state) => state.onChangeCategory)
  const { serviceCategoriesMemo } = useCategoryFetcher()

  return (
    <section className={styles.categoryContainer}>
      {
        serviceCategoriesMemo.map((row) => (
          <span
            key={row.categoryId}
            className={clsx({ [styles.activeCategory]: category === row.categoryId })}
            onClick={() => onChangeCategory(row.categoryId)}
          >
            {row.name}
          </span>
        ))
      }
    </section>
  )
}

function FAQSearchInput(){
  const [text, setText] = useState("")
  const { setSearchText } = useFAQStore()

  return (
    <section className={styles.searchContainer}>
      <input
        placeholder="찾으시는 내용을 입력해 주세요"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        onKeyDown={(evt) => evt.key === "Enter" ? setSearchText(text.trim()) : null }
      />

      <button className={styles.clearBtn} onClick={() => setSearchText("")}>
        <Image src="/img/ic_clear.svg" width={30} height={30} alt="clear" />
      </button>

      <button className={styles.searchBtn} onClick={() => setSearchText(text.trim())}>
        <Image src="/img/ic_search.svg" width={30} height={30} alt="Search" />
      </button>
    </section>
  )
}

/**
 * 서비스 타입 선택
 * @constructor
 */
function ServiceTypeSelector(){
  const { serviceTypes, serviceType, setServiceType } = useFAQStore()

  return (
    <section className={styles.tabContainer}>
      <ul>
        {
          serviceTypes.map((item) => (
            <li
              key={item.id}
              className={clsx({ [styles.activeTab]: serviceType === item.id })}
              onClick={() => setServiceType(item.id)}
            >
              { item.name }
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default function FAQServiceHeader(){
  return (
    <div>
      <section className={styles.container}>
        <h1>자주 묻는 질문</h1>
        <p>궁금하신 내용을 빠르게 찾아보세요.</p>
      </section>

      <ServiceTypeSelector />
      <FAQSearchInput/>
      <SubCategoryList />
    </div>
  )
}
