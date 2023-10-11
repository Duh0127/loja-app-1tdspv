import Link from "next/link";
import Image from "next/image";

export default function Meia() {
    return (
        <div className="produto3" style={({ border: "1px solid black", display: "flex", flexDirection: "column", width: "fit-content" })}>
            <h3>Meia</h3>
            <Image 
                src="/meias.jpg" 
                width={200} 
                height={200} 
                alt="Imagem de Meia" 
            />
            <p>Detalhes da meia</p>
            <Link href="/produtos">Voltar</Link>
        </div>
    )
}