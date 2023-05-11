import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <h1 className="text-3xl font-bold text-center">Next 13.4 playground</h1>
      <Link href="/about">Go to About.tsx</Link>
    </main>
  )
}
