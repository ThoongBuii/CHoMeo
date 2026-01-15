import type { Metadata } from 'next'
import Link from 'next/link'
import { FiClock, FiTruck } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Bảng Giá - Chò Méo',
  description: 'Xem bảng giá các dịch vụ chăm sóc thú cưng tại Chò Méo',
}

export default function RatesPage() {
  const pricingTiers = [
    {
      name: 'Petite',
      weight: '1Kg – 4Kg',
      price: '4.500.000',
      sessions: '10',
      color: 'from-green-100 to-green-200',
    },
    {
      name: 'Small',
      weight: '5Kg – 9Kg',
      price: '4.700.000',
      sessions: '10',
      color: 'from-teal-100 to-teal-200',
    },
    {
      name: 'Medium',
      weight: '10Kg – 14Kg',
      price: '5.100.000',
      sessions: '10',
      color: 'from-green-100 to-green-200',
    },
    {
      name: 'Large',
      weight: '15Kg – 30Kg',
      price: '5.500.000',
      sessions: '10',
      color: 'from-teal-100 to-teal-200',
    },
  ]

  const packageNotes = [
    'Gói có hiệu lực trong 4 tháng',
    'Giảm giá cho gói dành cho thú cưng tham gia 2 lần/tuần trở lên',
    'Giảm 20% cho thú cưng thứ 2 trong cùng hộ gia đình',
    'Giảm 5% cho thú cưng được nhận nuôi từ trại cứu hộ',
  ]

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
              <span className="text-6xl animate-bounce-genz">💰</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Bảng Giá
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Lựa chọn gói dịch vụ phù hợp với thú cưng của bạn
            </p>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ transformStyle: 'preserve-3d' }}>
            {pricingTiers.map((tier, index) => {
              const distortions = [
                { rotateX: -1, rotateY: 1, skewX: 0.8, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -0.8, skewY: 0.5 },
                { rotateX: -0.8, rotateY: 0.8, skewX: 0.6, skewY: -0.4 },
                { rotateX: 0.8, rotateY: -0.8, skewX: -0.6, skewY: 0.4 },
              ]
              const dist = distortions[index]

              return (
                <div
                  key={tier.name}
                  className={`card-genz bg-gradient-to-br ${tier.color} p-6 border-2 border-green-300 text-center group`}
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{tier.name}</h3>
                  <p className="text-sm text-gray-700 mb-4">{tier.weight}</p>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{tier.price}</div>
                    <p className="text-sm text-gray-700 mt-2">({tier.sessions} Buổi)</p>
                  </div>
                  <Link
                    href="/signup"
                    className="btn-genz-primary inline-block w-full"
                  >
                    Đăng Ký
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Package Notes */}
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {packageNotes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-green-900"
                  style={{
                    transform: `perspective(500px) rotateY(${index % 2 === 0 ? '-0.5' : '0.5'}deg)`,
                  }}
                >
                  <span className="text-green-600 text-lg mt-0.5">•</span>
                  <span className="text-base">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Transport Service */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block mb-4">
                <span className="text-5xl">🚐</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Xe Đưa Đón Thú Cưng</h2>
            </div>

            <div 
              className="card-genz bg-white/80 backdrop-blur-sm p-8 border-2 border-teal-300"
              style={{ transform: 'perspective(700px) rotateY(-0.5deg) rotateX(0.3deg)' }}
            >
              <p className="text-lg text-teal-900 font-semibold mb-6 text-center">
                Thời gian đưa đón có thể trong khoảng:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start space-x-3">
                  <FiClock className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-teal-900 mb-1">Đón:</p>
                    <p className="text-teal-800 italic">7:00 SA – 9:00 SA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiTruck className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-teal-900 mb-1">Trả:</p>
                    <p className="text-teal-800 italic">3:00 CH – 5:30 CH</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-teal-800 text-center italic">
                Dịch vụ đưa đón của chúng tôi tùy thuộc vào vị trí và thời gian yêu cầu của bạn.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Adventures Package */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block mb-4">
                <span className="text-5xl">🏞️</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Chò Méo Adventures</h2>
            </div>

            <div 
              className="card-genz bg-gradient-to-br from-green-100 to-green-200 p-8 border-2 border-green-300 text-center"
              style={{ transform: 'perspective(700px) rotateY(0.5deg) rotateX(-0.3deg)' }}
            >
              <p className="text-lg text-green-900 leading-relaxed mb-6">
                Tham gia cùng chúng tôi trong một chuyến phiêu lưu! Dịch vụ đi dạo tiện lợi của chúng tôi 
                sẽ khám phá các địa điểm khác nhau khắp thành phố cùng thú cưng của bạn. 
                Dẫn dắt bởi các chuyên viên chuyên nghiệp, thú cưng của bạn sẽ được ra khỏi nhà để chạy, 
                giao lưu và vui chơi!
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-green-900">4.700.000</div>
                <p className="text-sm text-green-800 mt-2">(10 Buổi)</p>
              </div>

              <Link
                href="/signup"
                className="btn-genz-primary inline-flex items-center space-x-2"
              >
                <span>Đăng Ký Ngay</span>
                <span className="text-xl">🚀</span>
              </Link>
            </div>
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
