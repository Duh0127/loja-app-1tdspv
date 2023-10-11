import Link from "next/link";
import Image from "next/image";

export default function Chinelo() {
    return (
        <div className="produto2" style={({ border: "1px solid black", display: "flex", flexDirection: "column", width: "fit-content" })}>
            <h3>Chinelo</h3>
            <Image 
                src="/chinelos.jpg" 
                width={200} 
                height={200} 
                alt="Imagem de chinelo" 
            />
            <p>Detalhes do chinelo</p>
            <Link href="/produtos">Voltar</Link>
        </div>
    )
}