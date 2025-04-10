"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FAQList from "@/components/faq/FAQList"
import FAQServiceHeader from "@/components/faq/FAQServiceHeader"
// import FAQClientWrapper from "@/components/faq/FAQClientWrapper"
import { faqData } from '@/data/faqData'
import styles from "./faq.module.css"

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.container}>
        <FAQServiceHeader />
        <FAQList />
        {/*<FAQClientWrapper initialFaqs={faqData} />*/}
      </main>
    </QueryClientProvider>
  )
}
