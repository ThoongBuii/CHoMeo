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
    <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* Top transition wave - blend tự nhiên với section trên (teal) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      {/* Bottom smooth wave - blend tự nhiên với section tiếp theo (green) */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl animate-bounce-genz">✨</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Cam Kết & Chứng Chỉ</h2>
          <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
            Những điều chúng tôi cam kết mang lại cho thú cưng của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {credentials.map((credential, index) => {
            // Tạo sự méo không gian khác nhau cho mỗi card
            const distortions = [
              { rotateX: -1, rotateY: 2, skewX: 1, skewY: -0.5 },
              { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
              { rotateX: 0.5, rotateY: 1.5, skewX: 0.5, skewY: -1 },
              { rotateX: -0.5, rotateY: -2, skewX: -0.5, skewY: 1 },
              { rotateX: 1.5, rotateY: 0.5, skewX: 1, skewY: 0.5 },
              { rotateX: -1.5, rotateY: -0.5, skewX: -1, skewY: -0.5 },
            ]
            const dist = distortions[index % distortions.length]
            
            return (
            <div
              key={index}
              className={`card-genz p-8 border-2 relative overflow-hidden group scale-on-hover ${
                credential.color === 'green' ? 'bg-green-100 border-green-300' :
                credential.color === 'teal' ? 'bg-teal-100 border-teal-300' :
                'bg-brown-100 border-brown-300'
              }`}
              style={{ 
                transform: `perspective(800px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                transformStyle: 'preserve-3d',
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
              
              <div className={`inline-flex p-4 rounded-2xl mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ${getColorClasses(credential.color)}`}>
                {credential.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-gradient-genz ${
                credential.color === 'green' ? '' :
                credential.color === 'teal' ? '' :
                ''
              }`}>{credential.title}</h3>
              <p className={`leading-relaxed ${
                credential.color === 'green' ? 'text-green-800' :
                credential.color === 'teal' ? 'text-teal-800' :
                'text-brown-800'
              }`}>{credential.description}</p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
