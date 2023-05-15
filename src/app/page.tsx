import Navbar from '@/components/home/navbar'
import Link from '@/components/links'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <h1 className="text-3xl font-bold text-center">Next 13.4 playground</h1>

      <Navbar>
        <Link href="/reducer">UseReducer</Link>
        <Link href="/fetch">Fetch</Link>
      </Navbar>
    </main>
  )
}
