import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-up">
            Chò Méo - Trường Học Thú Cưng #1
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50 slide-up">
            Chăm sóc chuyên nghiệp, tận tâm và đáng tin cậy cho thú cưng của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Link href="#contact" className="btn-primary bg-white text-green-600 hover:bg-green-50">
              Liên Hệ Ngay
            </Link>
            <Link href="#about" className="btn-secondary border-white text-white hover:bg-white/10">
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative jagged line - méo mó */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,120 L80,100 L160,110 L240,85 L320,105 L400,90 L480,115 L560,75 L640,100 L720,85 L800,110 L880,70 L960,95 L1040,105 L1120,80 L1200,115 L1280,90 L1360,100 L1440,85 L1440,120 L1360,120 L1280,120 L1200,120 L1120,120 L1040,120 L960,120 L880,120 L800,120 L720,120 L640,120 L560,120 L480,120 L400,120 L320,120 L240,120 L160,120 L80,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
