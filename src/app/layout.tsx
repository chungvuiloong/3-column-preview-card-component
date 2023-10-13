import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lexend_Deca, Big_Shoulders_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const bigShouldersDisplay = Big_Shoulders_Display({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-big-shoulders-display'
})

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-lexend-deca'
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | 3-column preview card component',
  description: 'Challenge from Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexendDeca.className} ${bigShouldersDisplay.variable} `}>{children}</body>
    </html>
  )
}
