import './globals.css'
import type { Metadata } from 'next'
import {ReactNode} from 'react'

export const metadata: Metadata = {
  title: 'Next auth in Server Component',
  description: 'Simple app where we show how to use Next-auth without Context Provider that would require the app to be almost all within a \'use client\' boundary.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-gray-900 dark:text-white flex flex-col min-h-[100vh]'>
      <header></header>
      <main className='flex flex-col flex-grow'>
      {children}
      </main>
      <footer></footer>
      </body>
    </html>
  )
}
