import { NextRequest, NextResponse } from 'next/server'
import faqListRepository from '@/data/faqListRepository'
import { ServiceType } from '@/data/faqData'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const offset = Number(searchParams.get('offset') || 0)
    const size = Number(searchParams.get('size') || 10)
    const serviceType = searchParams.get('service') || ServiceType[0].id
    const searchText = searchParams.get('searchText') || ''
    const category = searchParams.get('category') || ''

    const rows = await faqListRepository.fetch(serviceType, searchText, category, offset, size)
    return NextResponse.json(rows, { status: 200 })
  } catch(err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
