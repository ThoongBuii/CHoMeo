import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Tin Tức - Chò Méo',
  description: 'Đọc các bài viết về chăm sóc thú cưng và tin tức mới nhất',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Cách Chăm Sóc Thú Cưng Mùa Hè',
      date: '15 Tháng 1, 2024',
      excerpt: 'Những mẹo vặt quan trọng để giữ cho thú cưng của bạn mát mẻ và khỏe mạnh trong mùa hè.',
      category: 'Chăm Sóc',
    },
    {
      title: 'Lợi Ích Của Daycare Cho Thú Cưng',
      date: '10 Tháng 1, 2024',
      excerpt: 'Tìm hiểu tại sao daycare là lựa chọn tuyệt vời cho thú cưng của bạn.',
      category: 'Daycare',
    },
    {
      title: 'Huấn Luyện Thú Cưng Bằng Positive Reinforcement',
      date: '5 Tháng 1, 2024',
      excerpt: 'Phương pháp huấn luyện tích cực giúp thú cưng học nhanh và vui vẻ hơn.',
      category: 'Huấn Luyện',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Tin Tức</h1>
            <p className="text-xl text-teal-100">Cập nhật mới nhất về chăm sóc thú cưng</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Đọc thêm →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
