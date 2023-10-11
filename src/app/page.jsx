import Link from "next/link";
import Meia from "./produtos/meia/page";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <Link href="/produtos">Clique Aqui</Link>
    </>
  )
}