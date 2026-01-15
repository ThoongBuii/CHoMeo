import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ backgroundColor: '#f0fdfa', perspective: '1000px' }}>
      
      {/* Top transition wave - blend tự nhiên với section trên (hero) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - blend tự nhiên với section tiếp theo (green) */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      {/* Organic decorative blobs - nhẹ nhàng */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 organic-blob bg-teal-200/15 opacity-30 float-animation"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 md:w-36 md:h-36 organic-blob bg-teal-300/15 opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric layout với text và visual elements */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text với thiết kế đột phá */}
            <div className="space-y-6 relative">
              <div className="inline-block asymmetric-layout">
                <h2 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">Về Chúng Tôi</h2>
              </div>
              <div className="inline-block mb-2">
                <span className="text-3xl animate-bounce-genz">🌟</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-genz">
                Trường Học Thú Cưng Độc Đáo
              </h3>
              <p className="text-lg md:text-xl text-teal-800 leading-relaxed">
                Chăm sóc chuyên nghiệp, không lo lắng cho thú cưng của bạn. 
                Chương trình daycare của chúng tôi cung cấp các hoạt động sử dụng 
                phương pháp học tập không ép buộc và vui chơi.
              </p>
              <Link
                href="/about"
                className="btn-genz-primary group inline-flex items-center space-x-3 relative overflow-hidden"
              >
                <span className="relative z-10">Tìm Hiểu Thêm</span>
                <span className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-bounce-genz">🐾</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              {/* Floating decorative element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 organic-blob bg-teal-200/30 float-animation opacity-50"></div>
            </div>
            
            {/* Right side - Visual element với spatial distortion */}
            <div className="relative h-64 md:h-80" style={{ transform: 'perspective(1000px) rotateY(-2deg) rotateX(1deg) skewX(1deg)' }}>
              <div className="absolute inset-0 organic-card bg-gradient-to-br from-teal-200 to-teal-400 rounded-3xl" style={{ transform: 'skewX(-1deg) skewY(0.5deg)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl opacity-20" style={{ transform: 'rotate(-2deg)' }}>🐾</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
