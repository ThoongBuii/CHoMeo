import Link from 'next/link'
import { FiMoon, FiCommand, FiMap, FiUsers } from 'react-icons/fi'

export default function CurriculumPreview() {
  const coreActivities = [
    {
      icon: <FiMoon className="w-8 h-8" />,
      title: 'Thời Gian Nghỉ Ngơi',
      description: 'Chúng tôi khuyến khích thú cưng nghỉ ngơi và ngủ trước khi chơi tiếp.',
    },
    {
      icon: <FiCommand className="w-8 h-8" />,
      title: 'Lệnh Cơ Bản',
      description: 'Sử dụng phương pháp tích cực, chúng tôi luyện tập các lệnh cơ bản.',
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: 'Vui Chơi Ngoài Trời',
      description: 'Mỗi ngày chúng tôi sẽ đưa thú cưng của bạn đi dạo, đến công viên hoặc khám phá!',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Nhóm Chơi Có Giám Sát',
      description: 'Được chia thành các nhóm chơi với thú cưng cùng kích thước, đảm bảo an toàn.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
      
      {/* Top transition wave - blend tự nhiên với section trên (green) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - blend tự nhiên với section tiếp theo (teal) */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      {/* Organic decorative elements */}
      <div className="absolute top-10 left-5 w-20 h-20 md:w-32 md:h-32 organic-blob bg-green-200/20 opacity-40"></div>
      <div className="absolute bottom-10 right-5 w-16 h-16 md:w-28 md:h-28 organic-blob bg-green-300/20 opacity-40" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl animate-bounce-genz">🎯</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Chương Trình Học Cốt Lõi</h2>
          <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto mb-8 leading-relaxed">
            Up for Paws? Up for Fun! Đây là những hoạt động thú cưng của bạn sẽ tận hưởng tại daycare mỗi ngày
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ transformStyle: 'preserve-3d' }}>
          {coreActivities.map((activity, index) => {
            // Tạo sự méo không gian khác nhau cho mỗi card
            const spatialDistortions = [
              { rotateX: 2, rotateY: -1, skewX: -1.5, skewY: 0.5 },
              { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -1 },
              { rotateX: 1, rotateY: -1.5, skewX: -1, skewY: 1 },
              { rotateX: -1.5, rotateY: 1, skewX: 1.5, skewY: -0.5 },
            ]
            const dist = spatialDistortions[index % spatialDistortions.length]
            
            return (
            <div
              key={index}
              className="card-genz bg-green-100 p-8 border-2 border-green-300 relative overflow-hidden group"
              style={{ 
                transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                transformStyle: 'preserve-3d',
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Animated organic decorative blobs */}
              <div className="absolute top-0 right-0 w-28 h-28 organic-blob bg-green-200/20 float-animation opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 organic-blob bg-green-300/15 float-animation opacity-40" style={{ animationDelay: '1s' }}></div>
              
              <div className="text-green-600 mb-4 relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-4xl">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-gradient-genz">{activity.title}</h3>
              <p className="text-green-800 relative z-10 leading-relaxed">{activity.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/curriculum"
            className="btn-genz-primary inline-flex items-center space-x-3"
          >
            <span>Xem Chương Trình Đầy Đủ</span>
            <span className="text-xl animate-bounce-genz">🐾</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
