"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FAQList from "@/components/faq/FAQList"
import FAQProcess from "@/components/faq/FAQProcess"
import FloatingButton from "@/components/FloatingButton"
import FAQServiceHeader from "@/components/faq/FAQServiceHeader"
import FAQBottomBanner from "@/components/faq/FAQBottomBanner"
import FAQServiceInquiry from "@/components/faq/FAQServiceInquiry"
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
        <FloatingButton />
      </main>
    </QueryClientProvider>
  )
}
