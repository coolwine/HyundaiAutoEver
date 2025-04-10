'use client'

export const myFetch = async (url = "", option?: RequestInit) => {
  const res = await fetch(url, option)
  return res.json()
}
