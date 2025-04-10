import { NextResponse } from 'next/server'
import { FaqCategory } from "@/data/faqData"

export async function GET(request: Request) {
  try {
    return NextResponse.json(FaqCategory, { status: 200 })
  } catch(err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
