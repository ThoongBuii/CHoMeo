import Link from 'next/link'

export default function SignUpSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 text-gray-900 relative overflow-hidden" style={{ perspective: '1000px' }}>
      
      {/* Top transition wave - blend tự nhiên với section trên (teal) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ffedd5"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - blend tự nhiên với section tiếp theo (teal) */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-5xl animate-bounce-genz">🎉</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-genz">
            Nghe Có Vẻ Tuyệt Vời? Hãy Đến Thăm Chúng Tôi!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12" style={{ transformStyle: 'preserve-3d' }}>
            {[
              { num: '01', text: 'Điền vào form của chúng tôi để Đăng ký', dist: { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -0.5 } },
              { num: '02', text: 'Đưa thú cưng của bạn đến để đánh giá MIỄN PHÍ', dist: { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 } },
              { num: '03', text: 'Đăng ký Daycare!', dist: { rotateX: -0.5, rotateY: 1, skewX: 0.5, skewY: -1 } },
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50"
                style={{ 
                  transform: `perspective(600px) rotateX(${step.dist.rotateX}deg) rotateY(${step.dist.rotateY}deg) skewX(${step.dist.skewX}deg) skewY(${step.dist.skewY}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-4xl font-bold mb-2 text-gray-900">{step.num}</div>
                <p className="text-gray-800">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-sm mb-8 text-gray-700">
            *Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để sẵn sàng cho daycare
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 bg-teal-500 text-white hover:bg-teal-600 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg shadow-xl hover:shadow-2xl"
          >
            <span>Đặt Lịch Thăm Quan</span>
            <span className="text-xl">🐾</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
