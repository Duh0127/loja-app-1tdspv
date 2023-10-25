import Link from "next/link";
import Image from "next/image";

export default function Tenis(){
    return(
        <div className="produto1" style={({ border: "1px solid black", display: "flex", flexDirection:"column", width:"fit-content" })}>
          <h3>Tênis</h3>
          <figure>
            <Image 
              src="/tenis.jpg" 
              width={200} 
              height={200} 
              alt="Imagem de Tênis" 
            />
          </figure>
          <p>Detalhes do Tênis</p>
          <Link href="/">Voltar</Link>
        </div>
    )
}