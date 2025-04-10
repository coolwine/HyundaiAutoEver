import { FaqRow } from '@/type'
import { randomNum } from '@/lib/CommonService.server'
import { FaqCategory, ServiceType } from '@/data/faqData'

class FaqListRepository {
  rows: FaqRow[] | null = null
  initGenerateRowCount = 100

  async fetch(serviceType = "", searchText = "", category = "", offset = 0, size = 10) {
    if(this.rows === null){
      this.generateFaqList()
    }

    let rows = this.rows?.filter((row) => row.serviceType === serviceType) || []
    if(category){
      rows = rows.filter((row) => row.categoryId === category)
    }

    if(searchText){
      rows = rows.filter((row) => row.question.includes(searchText))
    }

    return {
      total: rows.length,
      rows: rows?.slice(offset, offset + size) || []
    }
  }

  // 데이터가 없을 경우 정해진 사이즈만큼의 데이터 생성
  generateFaqList(){
    console.log("Generating faq list...")
    this.rows = Array.from(Array(this.initGenerateRowCount).keys()).map((_, i) => {
      const serviceType = ServiceType[randomNum(0, 1)]
      const categoryList = Reflect.get(FaqCategory, serviceType.id)
      const category = categoryList[randomNum(0, categoryList.length - 1)]

      return {
        id: i,
        serviceType: serviceType.id,
        categoryId: category.categoryId,
        subCategoryName: `SubCategory ${i}`,
        question: `Question ${i}`,
        answer: `Answer ${i}`,
      }
    })
  }
}

export default new FaqListRepository()
