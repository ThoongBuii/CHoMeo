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
    <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden">
      {/* Multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/60 via-green-150/40 to-green-200/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 via-transparent to-green-100/60"></div>
      
      {/* Smooth wave transition from Credentials section - bay bổng */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 Q180,50 360,30 Q540,10 720,40 Q900,20 1080,50 Q1260,30 1440,60 Q1440,30 1440,0 Q1080,0 720,0 Q360,0 0,0 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - bay bổng với độ cong lớn */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '130px' }}>
        <svg viewBox="0 0 1440 130" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,130 Q180,70 360,110 Q540,90 720,130 Q900,70 1080,110 Q1260,90 1440,130 Q1440,110 1440,90 Q1080,110 720,110 Q360,110 0,90 Q0,110 0,130 Z" fill="#14b8a6" opacity="0.5"/>
        </svg>
      </div>
      
      {/* Organic decorative elements */}
      <div className="absolute top-10 left-5 w-20 h-20 md:w-32 md:h-32 organic-blob bg-green-200/20 opacity-40"></div>
      <div className="absolute bottom-10 right-5 w-16 h-16 md:w-28 md:h-28 organic-blob bg-green-300/20 opacity-40" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Chương Trình Học Cốt Lõi</h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto mb-8">
            Up for Paws? Up for Fun! Đây là những hoạt động thú cưng của bạn sẽ tận hưởng tại daycare mỗi ngày
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coreActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-green-300 relative overflow-hidden organic-card tilt-on-hover group"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Animated organic decorative blobs */}
              <div className="absolute top-0 right-0 w-28 h-28 organic-blob bg-green-200/20 float-animation opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 organic-blob bg-green-300/15 float-animation opacity-40" style={{ animationDelay: '1s' }}></div>
              
              <div className="text-green-600 mb-4 relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10 text-green-900">{activity.title}</h3>
              <p className="text-green-800 relative z-10 leading-relaxed">{activity.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <span>Xem Chương Trình Đầy Đủ</span>
            <span className="text-xl">🐾</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
