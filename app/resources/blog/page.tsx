import type { Metadata } from 'next'
import Link from 'next/link'
import { FiCalendar, FiTag } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Blog & Tin Tức - Chò Méo',
  description: 'Tin tức, bài viết và mẹo chăm sóc thú cưng từ Chò Méo',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Kết Quả Chiến Dịch Quyên Góp Thức Ăn Giáng Sinh 2024',
      date: '27 Tháng 12, 2024',
      category: 'Tổng Hợp',
      excerpt: 'Cảm ơn tất cả các bạn đã tham gia chiến dịch quyên góp thức ăn cho các bạn thú cưng trong dịp Giáng Sinh năm nay...',
    },
    {
      title: 'Huấn Luyện Tích Cực vs Huấn Luyện Truyền Thống',
      date: '31 Tháng 8, 2024',
      category: 'Huấn Luyện Chó',
      excerpt: 'So sánh hai phương pháp huấn luyện phổ biến và tại sao chúng tôi lựa chọn huấn luyện tích cực tại Chò Méo...',
    },
    {
      title: 'Giới Thiệu Bạn Bè',
      date: '3 Tháng 12, 2024',
      category: 'Tổng Hợp',
      excerpt: 'Chương trình giới thiệu bạn bè của chúng tôi - cả hai bạn đều nhận được ưu đãi khi giới thiệu bạn bè đến Chò Méo...',
    },
    {
      title: 'Theo Dõi Chúng Tôi Trên Instagram!',
      date: '2 Tháng 11, 2024',
      category: 'Tổng Hợp',
      excerpt: 'Đừng quên theo dõi chúng tôi trên Instagram để cập nhật những khoảnh khắc đáng yêu nhất của các bé tại daycare...',
    },
    {
      title: 'Chò Méo Trên Báo Chí',
      date: '19 Tháng 2, 2024',
      category: 'Báo Chí',
      excerpt: 'Chò Méo vinh dự được đăng tải trên các báo địa phương về phương pháp chăm sóc thú cưng độc đáo...',
    },
    {
      title: 'Dạy Chó Của Bạn Lệnh "Ở Yên"',
      date: '29 Tháng 5, 2024',
      category: 'Huấn Luyện Chó',
      excerpt: 'Hướng dẫn từng bước để dạy chó của bạn lệnh "ở yên" một cách hiệu quả và nhẹ nhàng...',
    },
    {
      title: 'Dạy Chó "Đến Đây" Khi Gọi',
      date: '13 Tháng 1, 2024',
      category: 'Huấn Luyện Chó',
      excerpt: 'Một trong những lệnh quan trọng nhất - cách dạy chó của bạn quay lại khi bạn gọi tên...',
    },
    {
      title: 'Dạy Chó Lệnh "Bỏ Qua"',
      date: '3 Tháng 1, 2024',
      category: 'Huấn Luyện Chó',
      excerpt: 'Lệnh "bỏ qua" rất quan trọng cho sự an toàn của thú cưng. Hãy học cách dạy chó của bạn...',
    },
    {
      title: 'Đánh Giá Và Lời Chứng Thực Về Chò Méo',
      date: '5 Tháng 11, 2023',
      category: 'Lời Chứng Thực',
      excerpt: 'Đọc những phản hồi chân thực từ các chủ thú cưng đã tin tưởng Chò Méo chăm sóc các bé của họ...',
    },
    {
      title: 'Daycare Có Phù Hợp Với Chó Của Bạn?',
      date: '31 Tháng 3, 2023',
      category: 'Dog Daycare',
      excerpt: 'Tìm hiểu xem dịch vụ daycare có phải là lựa chọn phù hợp cho thú cưng của bạn hay không...',
    },
    {
      title: 'Huấn Luyện Chuồng Là Gì và Tại Sao Nó Tốt?',
      date: '14 Tháng 2, 2023',
      category: 'Huấn Luyện Chó',
      excerpt: 'Tìm hiểu về phương pháp huấn luyện chuồng và những lợi ích của nó đối với thú cưng...',
    },
    {
      title: 'Huấn Luyện Tích Cực Là Gì?',
      date: '29 Tháng 1, 2023',
      category: 'Tích Cực',
      excerpt: 'Khám phá triết lý huấn luyện tích cực mà Chò Méo áp dụng trong tất cả các chương trình...',
    },
  ]

  const categories = ['Tất Cả', 'Tổng Hợp', 'Huấn Luyện Chó', 'Báo Chí', 'Dog Daycare', 'Lời Chứng Thực', 'Tích Cực']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20" style={{ perspective: '1200px', backgroundColor: '#fef9e7' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#fef9e7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center" style={{ transform: 'perspective(1000px) rotateY(0.5deg) rotateX(-0.5deg)' }}>
            <div className="inline-block mb-6">
              <span className="text-6xl animate-bounce-genz">📰</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Blog & Tin Tức
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Tin tức mới nhất, mẹo chăm sóc thú cưng và các bài viết hữu ích từ Chò Méo
            </p>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Category Filter - Optional, for now just display */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-teal-700 hover:bg-teal-100'
                }`}
                style={{
                  transform: `perspective(400px) rotateY(${index % 2 === 0 ? '-0.5' : '0.5'}deg)`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {posts.map((post, index) => {
              const distortions = [
                { rotateX: -0.8, rotateY: 0.8, skewX: 0.5, skewY: -0.3 },
                { rotateX: 0.8, rotateY: -0.8, skewX: -0.5, skewY: 0.3 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.3, skewY: -0.2 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.2 },
                { rotateX: -0.6, rotateY: 0.6, skewX: 0.4, skewY: -0.3 },
                { rotateX: 0.6, rotateY: -0.6, skewX: -0.4, skewY: 0.3 },
              ]
              const dist = distortions[index % distortions.length]

              return (
                <div
                  key={index}
                  className="card-genz bg-white p-6 border-2 border-teal-300 group cursor-pointer"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex items-center space-x-4 mb-4 text-sm text-teal-700">
                    <div className="flex items-center space-x-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiTag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-teal-900 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-teal-700 font-semibold hover:text-teal-900 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Đọc Bài Viết</span>
                    <span>→</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>
    </div>
  )
}
