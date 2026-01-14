import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ backgroundColor: '#f0fdfa' }}>
      {/* Background base - nhẹ nhàng */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-teal-100/60 to-teal-150/80"></div>
      
      {/* Smooth wave transition from hero - giống Up For Paws với độ cong lớn hơn */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,140 C120,20 240,40 360,80 C480,120 600,100 720,120 C840,140 960,80 1080,100 C1200,120 1320,60 1440,80 L1440,0 L0,0 Z" fill="#f0fdfa"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave bands - giống Up For Paws với nhiều lớp */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '160px' }}>
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,160 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,160 L0,160 Z" fill="#16a34a" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '130px' }}>
        <svg viewBox="0 0 1440 130" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,130 C100,40 200,60 320,90 C440,120 560,100 680,120 C800,140 920,80 1040,100 C1160,120 1280,60 1440,80 L1440,130 L0,130 Z" fill="#0d9488" opacity="0.5"/>
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-animated">
                Trường Học Thú Cưng Độc Đáo
              </h3>
              <p className="text-lg md:text-xl text-teal-800 leading-relaxed">
                Chăm sóc chuyên nghiệp, không lo lắng cho thú cưng của bạn. 
                Chương trình daycare của chúng tôi cung cấp các hoạt động sử dụng 
                phương pháp học tập không ép buộc và vui chơi.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 hover:-rotate-1 active:scale-95 shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Tìm Hiểu Thêm</span>
                <span className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300">🐾</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              {/* Floating decorative element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 organic-blob bg-teal-200/30 float-animation opacity-50"></div>
            </div>
            
            {/* Right side - Visual element với organic shapes */}
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 organic-card bg-gradient-to-br from-teal-200 to-teal-400 rounded-3xl asymmetric-layout-reverse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl opacity-20">🐾</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 organic-blob bg-teal-300/40 float-animation"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 organic-blob bg-teal-200/40 float-animation" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
