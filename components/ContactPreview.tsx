import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'

export default function ContactPreview() {
  // Placeholder images - có thể thay bằng ảnh thật sau
  const galleryItems = [
    { id: 1, type: 'image', icon: '🐕', title: 'Hoạt Động Ngoài Trời' },
    { id: 2, type: 'video', icon: '🎥', title: 'Video Hoạt Động' },
    { id: 3, type: 'image', icon: '🏃', title: 'Chạy Bộ Cùng Thú Cưng' },
    { id: 4, type: 'image', icon: '🎾', title: 'Vui Chơi' },
    { id: 5, type: 'image', icon: '🌳', title: 'Khám Phá Công Viên' },
    { id: 6, type: 'image', icon: '👥', title: 'Xã Hội Hóa' },
    { id: 7, type: 'image', icon: '🎯', title: 'Huấn Luyện' },
    { id: 8, type: 'image', icon: '💚', title: 'Khoảnh Khắc Đáng Yêu' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
      
      {/* Top transition wave - blend tự nhiên với section trên (teal) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - cùng màu xanh với Footer top wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">
            Chò Méo? Chò Vui!
          </h2>
          <p className="text-lg md:text-xl text-teal-800 max-w-2xl mx-auto mb-8">
            Khám phá những khoảnh khắc đáng yêu và hoạt động thú vị của thú cưng tại Chò Méo
          </p>
          
          {/* Instagram Link */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full">
              <FiInstagram className="w-6 h-6 text-white" />
            </div>
            <Link 
              href="https://instagram.com/chomeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 font-semibold text-lg transition-colors"
            >
              @chomeo
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
          {galleryItems.map((item, index) => {
            const distortions = [
              { rotateX: 1, rotateY: -1, skewX: -0.5, skewY: 0.5 },
              { rotateX: -1, rotateY: 1, skewX: 0.5, skewY: -0.5 },
              { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.3 },
              { rotateX: -0.5, rotateY: 0.5, skewX: 0.3, skewY: -0.3 },
              { rotateX: 1, rotateY: 1, skewX: -0.5, skewY: -0.5 },
              { rotateX: -1, rotateY: -1, skewX: 0.5, skewY: 0.5 },
              { rotateX: 0.3, rotateY: -0.3, skewX: -0.2, skewY: 0.2 },
              { rotateX: -0.3, rotateY: 0.3, skewX: 0.2, skewY: -0.2 },
            ]
            const dist = distortions[index % distortions.length]
            
            return (
              <div
                key={item.id}
                className="card-genz bg-gradient-to-br from-teal-200 to-teal-300 aspect-square rounded-2xl overflow-hidden group cursor-pointer relative"
                style={{ 
                  transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-teal-200/80 to-teal-300/80 group-hover:from-teal-300/90 group-hover:to-teal-400/90 transition-all duration-300">
                  <div className="text-6xl md:text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-semibold">
                      ▶
                    </div>
                  )}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                    {item.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
