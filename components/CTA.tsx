import Link from 'next/link'

export default function CTA() {
  return (
    <section id="signup" className="section-padding bg-gradient-to-br from-brown-600 to-brown-800 text-white relative overflow-hidden">
      {/* Jagged decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 128" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,128 L120,100 L240,115 L360,85 L480,110 L600,75 L720,105 L840,90 L960,120 L1080,70 L1200,100 L1320,80 L1440,95 L1440,128 L0,128 Z" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 128" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L120,28 L240,13 L360,43 L480,18 L600,53 L720,23 L840,38 L960,8 L1080,58 L1200,28 L1320,48 L1440,33 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nghe Có Vẻ Tuyệt Vời? Hãy Đến Thăm Chúng Tôi!
          </h2>
          <p className="text-xl mb-8 text-brown-50">
            Điền vào form của chúng tôi để Đăng ký
          </p>
          <p className="text-lg mb-8 text-brown-100">
            Đưa thú cưng của bạn đến để đánh giá MIỄN PHÍ
          </p>
          <p className="text-lg mb-8 text-brown-100">
            Đăng ký Daycare!
          </p>
          <p className="text-sm mb-8 text-brown-200">
            *Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để sẵn sàng cho daycare
          </p>
          <Link href="#contact" className="bg-white text-brown-600 hover:bg-brown-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg inline-block">
            Đặt Lịch Thăm Quan
          </Link>
        </div>
      </div>
    </section>
  )
}
