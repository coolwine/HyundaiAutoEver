export interface FaqRow {
  id: number
  serviceType: string
  categoryId: string
  subCategoryName: string
  question: string
  answer: string
}

export interface FAQInquiryItem {
  id: string
  title: string
  subTitle?: string
  icon: string
  link: string
}

export interface FAQProcessItem {
  id: number
  title: string
  desc: string
  icon: string
}
