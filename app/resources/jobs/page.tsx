import type { Metadata } from 'next'
import Link from 'next/link'
import { FiHeart, FiBriefcase, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Tuyển Dụng - Chò Méo',
  description: 'Cơ hội nghề nghiệp tại Chò Méo - Trường học thú cưng',
}

export default function JobsPage() {
  const benefits = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Môi Trường Yêu Thương',
      desc: 'Làm việc với những người yêu thú cưng, tận hưởng niềm vui mỗi ngày',
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: 'Phát Triển Nghề Nghiệp',
      desc: 'Học hỏi và phát triển kỹ năng chăm sóc, huấn luyện thú cưng chuyên nghiệp',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Đội Ngũ Tận Tâm',
      desc: 'Tham gia vào một đội ngũ trẻ, năng động và đam mê',
    },
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
              <span className="text-6xl animate-bounce-genz">💼</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Cơ Hội Nghề Nghiệp Tại Chò Méo
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ở Chò Méo, chúng tôi đang xây dựng một văn hóa nơi những người yêu thú cưng có thể chia sẻ 
              kiến thức về cách huấn luyện và chăm sóc thú cưng đúng cách, đồng thời phát triển sự nghiệp 
              và tích lũy kinh nghiệm. Nếu điều đó nghe có vẻ "pawsome", bạn đã đến đúng nơi rồi!
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Tại Sao Chọn Chò Méo?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16" style={{ transformStyle: 'preserve-3d' }}>
            {benefits.map((benefit, index) => {
              const distortions = [
                { rotateX: -1, rotateY: 1, skewX: 0.8, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -0.8, skewY: 0.5 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.5, skewY: -0.3 },
              ]
              const dist = distortions[index]

              return (
                <div
                  key={index}
                  className="card-genz bg-white p-8 border-2 border-green-300 text-center group"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex justify-center mb-4 text-green-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-900">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div 
            className="max-w-3xl mx-auto text-center card-genz bg-green-100 p-12 border-2 border-green-300"
            style={{ transform: 'perspective(700px) rotateY(-0.3deg) rotateX(0.3deg)' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-900">
              Sẵn Sàng Tham Gia Đội Ngũ Chúng Tôi?
            </h3>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Nếu bạn yêu thích thú cưng, có tinh thần trách nhiệm và muốn làm việc trong một môi trường 
              năng động, vui vẻ, hãy liên hệ với chúng tôi ngay!
            </p>
            <Link
              href="/contact"
              className="btn-genz-primary inline-flex items-center space-x-2"
            >
              <span>Liên Hệ Ngay</span>
              <span className="text-xl">📧</span>
            </Link>
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
