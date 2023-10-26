import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from './../components/Header/Header'
import './variables.scss'
import './globals.scss'


const mont = Montserrat({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
