import Link from "next/link";

export default function Cabecalho() {
    return (
        <header className="bg-black p-4 text-white">
            <nav>
                <ul className="flex gap-8">
                    <li className="border border-white rounded-md px-3 py-1 hover:bg-slate-600"><Link href="/produtos/meia">Meia </Link></li>
                    <li className="border border-white rounded-md px-3 py-1 hover:bg-slate-600"><Link href="/produtos/chinelo">Chinelo </Link></li>
                    <li className="border border-white rounded-md px-3 py-1 hover:bg-slate-600"><Link href="/produtos/tenis">Tenis</Link></li>
                    <li className="border border-white rounded-md px-3 py-1 hover:bg-slate-600"><Link href="/produtos/fazenda/loja/laticinios">Queijos</Link></li>
                    <li className="border border-white rounded-md px-3 py-1 hover:bg-slate-600"><Link href="/user-pages">Users</Link></li>
                </ul>
            </nav>
        </header>
    )
}