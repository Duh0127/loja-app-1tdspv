import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <button className="border border-black rounded-md p-1 bg-slate-300 hover:bg-slate-400">
        <Link href="/produtos">Página de produtos</Link>
      </button>
    </>
  )
}