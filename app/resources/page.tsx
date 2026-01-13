import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tài Nguyên - Chò Méo',
  description: 'Blog, tin tức, tuyển dụng và đánh giá về Chò Méo',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tài Nguyên</h1>
            <p className="text-xl text-teal-100">
              Khám phá blog, tin tức, cơ hội nghề nghiệp và đánh giá
            </p>
          </div>
        </div>
        {/* Jagged line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              href="/resources/blog"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-2xl font-bold mb-4">Blog & Tin Tức</h2>
              <p className="text-gray-600 mb-4">
                Đọc các bài viết về chăm sóc thú cưng, mẹo vặt và tin tức mới nhất
              </p>
              <span className="text-teal-600 font-semibold">Đọc thêm →</span>
            </Link>

            <Link
              href="/resources/jobs"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-5xl mb-4">💼</div>
              <h2 className="text-2xl font-bold mb-4">Tuyển Dụng</h2>
              <p className="text-gray-600 mb-4">
                Tìm hiểu về cơ hội nghề nghiệp và tham gia đội ngũ của chúng tôi
              </p>
              <span className="text-teal-600 font-semibold">Xem việc làm →</span>
            </Link>

            <Link
              href="/resources/reviews"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-5xl mb-4">⭐</div>
              <h2 className="text-2xl font-bold mb-4">Đánh Giá</h2>
              <p className="text-gray-600 mb-4">
                Xem những gì khách hàng nói về dịch vụ của chúng tôi
              </p>
              <span className="text-teal-600 font-semibold">Xem đánh giá →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
