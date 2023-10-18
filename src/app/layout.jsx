import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from '../components/Cabecalho/page'
import Rodape from '../components/Rodape/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Cabecalho/>  
        {children}
        <Rodape/>
      </body>
    </html>
  )
}
