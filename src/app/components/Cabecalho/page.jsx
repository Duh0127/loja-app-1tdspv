import Link from "next/link";

export default function Cabecalho() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/produtos/meia"> Meia </Link></li>
                    <li><Link href="/produtos/chinelo"> Chinelo </Link></li>
                    <li><Link href="/produtos/tenis"> Tenis</Link></li>
                </ul>
            </nav>
        </header>
    )
}