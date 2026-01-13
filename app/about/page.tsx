import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Về Chúng Tôi - Chò Méo',
  description: 'Tìm hiểu về Chò Méo - Trường học thú cưng độc đáo với dịch vụ chăm sóc chuyên nghiệp',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
            <p className="text-xl text-teal-100">
              Trường Học Thú Cưng Độc Đáo
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

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Câu Chuyện Của Chúng Tôi</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Chò Méo được thành lập với sứ mệnh mang lại dịch vụ chăm sóc và giáo dục thú cưng 
                  chuyên nghiệp, tận tâm và đáng tin cậy. Chúng tôi tin rằng mỗi thú cưng đều xứng đáng 
                  được chăm sóc tốt nhất và có cơ hội phát triển toàn diện.
                </p>
                <p className="text-gray-700 mb-6">
                  Chương trình daycare của chúng tôi được thiết kế để tham gia vào hành vi bản năng 
                  của thú cưng, mang lại một ngày vui vẻ và ý nghĩa. Được hướng dẫn bởi hành vi tự nhiên 
                  và nhu cầu bản năng, danh sách hoạt động luôn thay đổi của chúng tôi sẽ giữ cho thú cưng 
                  của bạn được vận động về mặt tinh thần, thể chất và xã hội.
                </p>
                <p className="text-gray-700">
                  Chúng tôi sử dụng phương pháp học tập không ép buộc và vui chơi, đảm bảo mỗi thú cưng 
                  đều cảm thấy an toàn, vui vẻ và được yêu thương.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Cơ Sở Vật Chất Hiện Đại', desc: 'Không gian sạch sẽ, thoáng mát với điều hòa' },
                { title: 'Đội Ngũ Chuyên Nghiệp', desc: 'Nhân viên được đào tạo bài bản và tận tâm' },
                { title: 'Phương Pháp Tích Cực', desc: 'Huấn luyện bằng positive reinforcement' },
                { title: 'Cập Nhật Hàng Ngày', desc: 'Gửi hình ảnh và video mỗi ngày' },
                { title: 'Báo Cáo Tiến Độ', desc: 'Theo dõi và báo cáo chi tiết về thú cưng' },
                { title: 'Hoạt Động Ngoài Trời', desc: 'Đi dạo, công viên và khám phá' },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-teal-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/signup"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 inline-block"
              >
                Đăng Ký Ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
