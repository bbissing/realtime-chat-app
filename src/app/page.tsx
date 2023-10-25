"use client"

import { signOut } from "next-auth/react"

export default function Home() {
  return <button onClick={() => signOut()}>Sign out</button>
  // return <div className='text-red-500'>hello world</div>
}