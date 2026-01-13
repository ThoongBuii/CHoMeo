import Link from 'next/link'

export default function SignUpSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-brown-500 via-brown-600 to-brown-700 text-white relative overflow-hidden">
      {/* Multiple gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-600/80 via-brown-550/60 to-brown-700/80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brown-500/70 via-brown-600/50 to-brown-800/70"></div>
      
      {/* Decorative curved elements - sống động */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-15">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 Q75,75 150,100 T300,150 L300,0 L0,0 Z" fill="url(#brownGradient1)" />
          <defs>
            <linearGradient id="brownGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="organic-blob w-full h-full bg-gradient-to-br from-brown-400 to-brown-500"></div>
      </div>
      
      {/* Smooth wave transition from Testimonials - bay bổng */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 Q180,60 360,40 Q540,20 720,60 Q900,40 1080,80 Q1260,60 1440,100 Q1440,50 1440,0 Q1080,0 720,0 Q360,0 0,0 Z" fill="#92400e"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave bands - bay bổng với độ cong lớn */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '170px' }}>
        <svg viewBox="0 0 1440 170" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,170 Q180,100 360,140 Q540,120 720,160 Q900,100 1080,140 Q1260,120 1440,160 Q1440,150 1440,140 Q1080,160 720,160 Q360,160 0,140 Q0,155 0,170 Z" fill="#14b8a6" opacity="0.7"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '140px' }}>
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,140 Q180,80 360,120 Q540,100 720,140 Q900,80 1080,120 Q1260,100 1440,140 Q1440,130 1440,120 Q1080,130 720,130 Q360,130 0,120 Q0,130 0,140 Z" fill="#0d9488" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Organic decorative blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 organic-blob bg-white/5 opacity-50 float-animation"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 md:w-40 md:h-40 organic-blob bg-white/5 opacity-50 float-animation" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 organic-blob bg-green-300/10 float-animation" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nghe Có Vẻ Tuyệt Vời? Hãy Đến Thăm Chúng Tôi!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brown-400/30 backdrop-blur-sm rounded-xl p-6 border-2 border-brown-300/50">
              <div className="text-4xl font-bold mb-2 text-brown-50">01</div>
              <p className="text-brown-100">Điền vào form của chúng tôi để Đăng ký</p>
            </div>
            <div className="bg-brown-400/30 backdrop-blur-sm rounded-xl p-6 border-2 border-brown-300/50">
              <div className="text-4xl font-bold mb-2 text-brown-50">02</div>
              <p className="text-brown-100">Đưa thú cưng của bạn đến để đánh giá MIỄN PHÍ</p>
            </div>
            <div className="bg-brown-400/30 backdrop-blur-sm rounded-xl p-6 border-2 border-brown-300/50">
              <div className="text-4xl font-bold mb-2 text-brown-50">03</div>
              <p className="text-brown-100">Đăng ký Daycare!</p>
            </div>
          </div>

          <p className="text-sm mb-8 text-brown-200">
            *Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để sẵn sàng cho daycare
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 bg-white text-brown-600 hover:bg-brown-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg shadow-lg"
          >
            <span>Đặt Lịch Thăm Quan</span>
            <span className="text-xl">🐾</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
