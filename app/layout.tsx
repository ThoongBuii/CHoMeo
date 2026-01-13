import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Chò Méo - Chăm Sóc & Giáo Dục Thú Cưng Chuyên Nghiệp',
  description: 'Dịch vụ chăm sóc và giáo dục thú cưng hàng đầu. Daycare, đào tạo, và các hoạt động vui chơi cho thú cưng của bạn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
