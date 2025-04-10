import { useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { myFetch } from '@/lib/CommonService.client'
import { useFAQStore } from '@/store/FAQStore'

export const useCategoryFetcher = () => {
  const serviceType = useFAQStore((state) => state.serviceType)
  const { data, isLoading } = useQuery({
    queryKey: ['faqCategory'],
    queryFn: () => myFetch('/api/faq/category'),
    staleTime: 60000,
  })

  const allCategoryMemo = useMemo(() => {
    return data ? Reflect.ownKeys(data).flatMap(key => data[key]) : []
  }, [data])

  const serviceCategoriesMemo = useMemo<{ categoryId: string, name: string }[]>(() => {
    if(!data || !Reflect.has(data, serviceType)){
      return []
    }

    let all = { categoryId: "", name: "전체" }
    return [all, ...data[serviceType]]
  }, [data, serviceType])

  return {
    data,
    allCategoryMemo,
    serviceCategoriesMemo,
  }
}

export const useFAQFetcher = () => {
  const store = useFAQStore()
  const searchText = useFAQStore(state => state.searchText)
  const serviceType = useFAQStore(state => state.serviceType)
  const category = useFAQStore(state => state.category)
  const pagination = useFAQStore(state => state.pagination)

  const { data, isLoading } = useQuery({
    queryKey: ['faq', pagination.offset, serviceType, category, searchText],
    queryFn: () => {
      const searchParams = new URLSearchParams()
      searchParams.set('size', pagination.size.toString())
      searchParams.set('offset', pagination.offset.toString())
      searchParams.set("service", serviceType)
      searchParams.set('searchText', searchText)
      searchParams.set('category', category)
      return myFetch(`/api/faq?${searchParams.toString()}`)
    }
  })

  useEffect(() => {
    store.updateFetchResult(data?.total, data?.rows)
  }, [data])

  return {
    isLoading,
  }
}
