import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Claude Code Project',
  description: 'A Next.js app with Supabase authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono`}>{children}</body>
    </html>
  )
}