'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useCategoryFetcher, useFAQFetcher } from '@/hooks/useFaqFetcher'
import styles from "./FAQList.module.scss"
import { FaqRow } from '@/type'
import { useFAQStore } from '@/store/FAQStore'

function FAQItem({ row }: { row: FaqRow }){
  const [categoryName, setCategoryName] = useState("")
  const { allCategoryMemo } = useCategoryFetcher()

  useEffect(() => {
    const find = allCategoryMemo?.find((r) => r.categoryId === row.categoryId)
    setCategoryName(find?.name || "")
  }, [row, allCategoryMemo])

  return (
    <li className={styles.item}>
      <details>
        <summary>
          <div>{row.id}</div>
          <span>{categoryName || row.categoryId}</span>
          <strong>{row.question}</strong>
          <Image src="/img/ic_arrow.svg" alt="arrow" width={32} height={32} />
        </summary>
        <div>{row.answer}</div>
      </details>
    </li>
  )
}

function EmptyList(){
  return (
    <section className={styles.emptyContainer}>
      <Image src="/img/ic_nodata.svg" alt="empty list" width={56} height={56} />
      <p>검색결과가 없습니다.</p>
    </section>
  )
}

export default function FAQList(){
  const rows = useFAQStore((state) => state.rows)
  const hasNextPage = useFAQStore((state) => state.hasNextPage)
  const onNextPage = useFAQStore((state) => state.onNextPage)
  const { isLoading } = useFAQFetcher()

  return (
    <div>
      <ul className={styles.container}>
        {rows?.map((row) => <FAQItem key={row.id} row={row} />)}
      </ul>

      { isLoading && <div>Loading...</div> }
      { !isLoading && !rows.length && <EmptyList /> }
      {
        (!isLoading && hasNextPage && rows.length) ? (
          <button className={styles.more} onClick={onNextPage}>
            + 더보기
          </button>
        ) : null
      }
    </div>
  )
}
