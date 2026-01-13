import type { Metadata } from 'next'
import Link from 'next/link'
import { FiHeart, FiActivity, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Dịch Vụ - Chò Méo',
  description: 'Khám phá các dịch vụ chăm sóc thú cưng chuyên nghiệp tại Chò Méo',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: 'Dog Daycare',
      description: 'Chương trình daycare được thiết kế để tham gia vào hành vi bản năng của chó, mang lại một ngày vui vẻ và ý nghĩa!',
      features: [
        'Chơi nhóm có giám sát',
        'Hoạt động ngoài trời',
        'Thời gian nghỉ ngơi',
        'Huấn luyện lệnh cơ bản',
        'Cập nhật hình ảnh hàng ngày',
      ],
      color: 'brown',
    },
    {
      icon: <FiActivity className="w-12 h-12" />,
      title: 'Dog Walks',
      description: 'Dịch vụ đi dạo cho chó sẽ thỏa mãn nhu cầu khám phá và tập thể dục hàng ngày của thú cưng bạn!',
      features: [
        'Đi dạo hàng ngày',
        'Khám phá khu phố',
        'Tập thể dục đều đặn',
        'Tương tác xã hội',
        'Linh hoạt theo lịch trình',
      ],
      color: 'brown',
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: 'Huấn Luyện',
      description: 'Chương trình huấn luyện chuyên nghiệp sử dụng phương pháp tích cực, phù hợp với từng thú cưng.',
      features: [
        'Huấn luyện cá nhân',
        'Lệnh cơ bản và nâng cao',
        'Giải quyết hành vi',
        'Báo cáo tiến độ',
        'Tư vấn chủ sở hữu',
      ],
      color: 'brown',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-600 to-brown-800 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch Vụ Của Chúng Tôi</h1>
            <p className="text-xl text-brown-100">
              Các hoạt động vui chơi và ý nghĩa cho thú cưng của bạn
            </p>
          </div>
        </div>
        {/* Jagged line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L120,28 L240,8 L360,32 L480,12 L600,26 L720,6 L840,30 L960,10 L1080,28 L1200,8 L1320,25 L1440,15 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-brown-50 to-brown-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-brown-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <span className="text-brown-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-brown-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown-700 transition-all duration-200 transform hover:scale-105 active:scale-95 w-full text-center block"
                >
                  Tìm Hiểu Thêm
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/signup"
              className="bg-brown-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brown-700 transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Đăng Ký Dịch Vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
