import { create } from 'zustand'
import { ServiceType } from '@/data/faqData'
import { FaqRow } from '@/type'

const DefaultPagination = { total: 0, offset: 0, size: 10 }

interface FAQStore {
  category: string;
  serviceTypes: { id: string, name: string }[];
  serviceType: string;
  searchText: string;
  rows: FaqRow[];
  hasNextPage: boolean;
  pagination: { total: number, offset: number; size: number }
  setRows: (value: FaqRow[]) => void;
  setServiceType: (value: string) => void;
  setSearchText: (value: string) => void;
  onChangeCategory: (value: string) => void;
  onNextPage: () => void;
  updateFetchResult: (count: number, rows: FaqRow[]) => void
}

export const useFAQStore = create<FAQStore>((set, get) => ({
  serviceTypes: ServiceType,
  serviceType: ServiceType[0].id,
  searchText: "",
  category: "",
  rows: [],
  hasNextPage: false,
  pagination: { ...DefaultPagination },
  setServiceType: (value) => {
    set((state) => ({
      ...state,
      serviceType: value,
      category: "",
      pagination: { ...DefaultPagination }
    }))
  },
  setRows: (value) => set(state => ({ ...state, rows: value })),
  setSearchText: (value) => set(state => ({ ...state, searchText: value })),
  onChangeCategory: (value) => set(state => ({ ...state, category: value, rows: [], pagination: { ...DefaultPagination } })),
  updateFetchResult: (count = 0, rows = []) => {
    const pg = get().pagination
    const nextRows = pg.offset === 0 ? rows : [...get().rows, ...rows]
    set({ pagination: { ...pg, total: count} })
    set({ rows: nextRows })
    set({ hasNextPage: nextRows.length < count })
  },
  onNextPage: () => {
    const pg = get().pagination
    const nextPagination = { ...pg, offset: pg.offset + pg.size }
    set({ pagination: nextPagination })
  }
}))
