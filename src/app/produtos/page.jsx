import Meia from "./meia/page"
import Tenis from "./tenis/page"
import Chinelo from "./chinelo/page"
import Link from "next/link"

export default function Produtos() {
    return (
        <>
            <Link href="/produtos/meia"> Meia </Link>
            <Link href="/produtos/chinelo"> Chinelo </Link>
            <Link href="/produtos/tenis"> Tenis</Link>

            {/* <Meia />
            <Chinelo />
            <Tenis /> */}
        </>
    )
}