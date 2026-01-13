import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bảng Giá - Chò Méo',
  description: 'Xem bảng giá các dịch vụ chăm sóc thú cưng tại Chò Méo',
}

export default function RatesPage() {
  const pricingPlans = [
    {
      name: 'Daycare Cơ Bản',
      price: '500,000',
      period: 'ngày',
      features: [
        'Chơi nhóm có giám sát',
        'Hoạt động ngoài trời',
        'Thời gian nghỉ ngơi',
        'Cập nhật hình ảnh',
      ],
      color: 'green',
    },
    {
      name: 'Daycare Premium',
      price: '800,000',
      period: 'ngày',
      features: [
        'Tất cả tính năng cơ bản',
        'Huấn luyện lệnh cơ bản',
        'Báo cáo tiến độ chi tiết',
        'Hoạt động đặc biệt',
        'Ưu tiên đặt chỗ',
      ],
      color: 'teal',
      popular: true,
    },
    {
      name: 'Gói Tháng',
      price: '15,000,000',
      period: 'tháng',
      features: [
        '20 ngày daycare',
        'Tất cả tính năng premium',
        'Giảm giá 25%',
        'Tư vấn miễn phí',
        'Hỗ trợ 24/7',
      ],
      color: 'brown',
    },
  ]

  const additionalServices = [
    { name: 'Dog Walk (1 lần)', price: '200,000' },
    { name: 'Dog Walk (10 lần)', price: '1,800,000' },
    { name: 'Huấn Luyện Cá Nhân', price: '1,500,000' },
    { name: 'Huấn Luyện Nhóm', price: '800,000' },
    { name: 'Boarding (1 đêm)', price: '600,000' },
    { name: 'Grooming', price: '300,000' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bảng Giá</h1>
            <p className="text-xl text-green-100">
              Lựa chọn gói dịch vụ phù hợp với thú cưng của bạn
            </p>
          </div>
        </div>
        {/* Jagged line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L80,25 L160,8 L240,30 L320,5 L400,28 L480,10 L560,32 L640,8 L720,26 L800,6 L880,29 L960,9 L1040,27 L1120,11 L1200,25 L1280,7 L1360,30 L1440,12 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-4 ring-teal-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Phổ Biến
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600"> VNĐ/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`w-full text-center block px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Đăng Ký Ngay
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Dịch Vụ Bổ Sung</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700 font-medium">{service.name}</span>
                    <span className="text-green-600 font-bold">{service.price} VNĐ</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * Giá có thể thay đổi tùy theo nhu cầu và thời gian. Vui lòng liên hệ để được tư vấn chi tiết.
            </p>
            <Link
              href="/contact"
              className="text-green-600 hover:text-green-700 font-semibold underline"
            >
              Liên Hệ Tư Vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
