import { FiAward, FiUsers, FiHeart, FiShield, FiCheckCircle, FiStar } from 'react-icons/fi'

export default function Credentials() {
  const credentials = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Cơ Sở Vật Chất Hiện Đại',
      description: 'Không gian sạch sẽ, thoáng mát với điều hòa',
      color: 'green',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Đội Ngũ Chuyên Nghiệp',
      description: 'Nhân viên được đào tạo bài bản và tận tâm',
      color: 'teal',
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Phương Pháp Tích Cực',
      description: 'Huấn luyện bằng positive reinforcement',
      color: 'brown',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'An Toàn & Đáng Tin Cậy',
      description: 'Giám sát 24/7, bảo hiểm đầy đủ',
      color: 'green',
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Cập Nhật Hàng Ngày',
      description: 'Gửi hình ảnh và video mỗi ngày',
      color: 'teal',
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Báo Cáo Tiến Độ',
      description: 'Theo dõi và báo cáo chi tiết về thú cưng',
      color: 'brown',
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600 bg-green-100'
      case 'teal':
        return 'text-teal-600 bg-teal-100'
      case 'brown':
        return 'text-brown-600 bg-brown-100'
      default:
        return 'text-green-600 bg-green-100'
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden">
      {/* Smooth wave transition from About section - giống Up For Paws */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 C120,120 240,100 360,120 C480,140 600,120 720,140 C840,160 960,100 1080,120 C1200,140 1320,80 1440,100 L1440,0 L0,0 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      {/* Multiple gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 via-transparent to-green-150/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/30 to-green-200/40"></div>
      
      {/* Bottom smooth wave - giống Up For Paws với độ cong lớn hơn */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,150 C120,40 240,60 360,90 C480,120 600,100 720,120 C840,140 960,80 1080,100 C1200,120 1320,60 1440,80 L1440,150 L0,150 Z" fill="#14b8a6" opacity="0.6"/>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Cam Kết & Chứng Chỉ</h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto">
            Những điều chúng tôi cam kết mang lại cho thú cưng của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border-2 hover:shadow-2xl transition-all duration-300 tilt-on-hover relative overflow-hidden organic-card stagger-${(index % 4) + 1} ${
                credential.color === 'green' ? 'bg-green-100 border-green-300' :
                credential.color === 'teal' ? 'bg-teal-100 border-teal-300' :
                'bg-brown-100 border-brown-300'
              }`}
              style={{ 
                transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Multiple organic decorative blobs */}
              <div className={`absolute top-0 right-0 w-24 h-24 opacity-15 organic-blob float-animation ${
                credential.color === 'green' ? 'bg-green-200' : 
                credential.color === 'teal' ? 'bg-teal-200' : 
                'bg-brown-200'
              }`} style={{ animationDelay: `${index * 0.2}s` }}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 opacity-10 organic-blob float-animation ${
                credential.color === 'green' ? 'bg-green-300' : 
                credential.color === 'teal' ? 'bg-teal-300' : 
                'bg-brown-300'
              }`} style={{ animationDelay: `${index * 0.3}s` }}></div>
              
              <div className={`inline-flex p-4 rounded-xl mb-4 transform hover:rotate-12 transition-transform duration-300 ${getColorClasses(credential.color)}`}>
                {credential.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                credential.color === 'green' ? 'text-green-900' :
                credential.color === 'teal' ? 'text-teal-900' :
                'text-brown-900'
              }`}>{credential.title}</h3>
              <p className={`leading-relaxed ${
                credential.color === 'green' ? 'text-green-800' :
                credential.color === 'teal' ? 'text-teal-800' :
                'text-brown-800'
              }`}>{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
