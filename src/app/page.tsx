"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FAQList from "@/components/faq/FAQList"
import FAQServiceInquiry from "@/components/faq/FAQServiceInquiry"
import FAQServiceHeader from "@/components/faq/FAQServiceHeader"
import FAQProcess from "@/components/faq/FAQProcess"
import FAQBottomBanner from "@/components/faq/FAQBottomBanner"
import styles from "./faq.module.css"

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.container}>
        <FAQServiceHeader />
        <FAQList />
        <FAQServiceInquiry />
        <FAQProcess />
        <FAQBottomBanner />
      </main>
    </QueryClientProvider>
  )
}
