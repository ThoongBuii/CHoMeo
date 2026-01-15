import type { Metadata } from 'next'
import Link from 'next/link'
import { FiMoon, FiCommand, FiMap, FiUsers, FiBook, FiTarget, FiTrendingUp } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Chương Trình Học - Chò Méo',
  description: 'Khám phá các hoạt động và chương trình học tại Chò Méo',
}

export default function CurriculumPage() {
  const coreActivities = [
    {
      icon: <FiMoon className="w-8 h-8" />,
      title: 'Thời Gian Nghỉ Ngơi',
      description: 'Tất cả chúng ta đều cần thời gian nghỉ ngơi. Chúng tôi khuyến khích thú cưng nghỉ ngơi và ngủ trước khi chơi tiếp.',
    },
    {
      icon: <FiCommand className="w-8 h-8" />,
      title: 'Lệnh Cơ Bản',
      description: 'Sử dụng phương pháp tích cực, chúng tôi luyện tập các lệnh cơ bản như ngồi, đứng, nằm, và đến đây!',
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: 'Vui Chơi Ngoài Trời',
      description: 'Thú cưng thuộc về ngoài trời. Mỗi ngày chúng tôi sẽ đưa thú cưng của bạn đi dạo, đến công viên hoặc khám phá!',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Nhóm Chơi Có Giám Sát',
      description: 'Được chia thành các nhóm chơi với thú cưng cùng kích thước, nhân viên của chúng tôi đảm bảo việc giao tiếp xã hội vui vẻ và an toàn.',
    },
  ]

  const enrichmentBenefits = [
    { icon: '🎯', text: 'Hoạt động mới thú vị để thú cưng tiếp tục học hỏi' },
    { icon: '📚', text: 'Sách hướng dẫn kỹ thuật số để bạn có thể thử tại nhà' },
    { icon: '📊', text: 'Báo cáo tiến độ cho từng module để bạn biết thú cưng đã làm như thế nào' },
  ]

  const currentActivity = {
    title: 'Màu Sắc Yêu Thích Của Thú Cưng',
    period: 'Tháng 10 2024 - Tháng 11 2024',
    description: 'Thú cưng không nhìn thế giới bằng màu đen trắng. Thay vào đó, chúng nhìn thấy các sắc thái của xanh dương, vàng và xám. Chúng tôi chơi một loạt trò chơi để tìm ra màu sắc yêu thích của thú cưng bạn.',
  }

  const previousActivities = [
    { title: 'K9 Fitness: Cân Bằng', period: 'Tháng 1 2024 - Tháng 7 2024' },
    { title: 'Snufflin', period: 'Tháng 7 2024 - Tháng 9 2024' },
    { title: 'Logic Games', period: 'Tháng 10 2023 - Tháng 1 2024' },
    { title: 'Paw Preference', period: 'Tháng 8 2023 - Tháng 9 2023' },
    { title: 'TUG!', period: 'Tháng 2 2024 - Tháng 6 2024' },
  ]

  const learningStructure = [
    { icon: <FiTarget className="w-8 h-8" />, title: 'Mục Tiêu Rõ Ràng', desc: 'Mỗi hoạt động có mục tiêu học tập cụ thể' },
    { icon: <FiBook className="w-8 h-8" />, title: 'Theo Dõi Tiến Độ', desc: 'Ghi chép và đánh giá sự phát triển của từng thú cưng' },
    { icon: <FiTrendingUp className="w-8 h-8" />, title: 'Cải Thiện Liên Tục', desc: 'Điều chỉnh chương trình dựa trên phản hồi và kết quả' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - match với navbar background */}
      <section className="relative overflow-hidden pt-24 pb-20" style={{ perspective: '1200px', backgroundColor: '#fef9e7' }}>
        {/* Top wave - match với navbar background */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#fef9e7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left" style={{ transform: 'perspective(1000px) rotateY(0.5deg) rotateX(-0.5deg)' }}>
              <div className="inline-block mb-6">
                <span className="text-6xl animate-bounce-genz">📚</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
                Môi Trường Học Tập An Toàn và
                <span className="block">Chương Trình Vui Vẻ Cho Thú Cưng</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Chò Méo tin rằng một thú cưng hạnh phúc là một thú cưng có nhu cầu tự nhiên và bản năng được đáp ứng.
                Các hoạt động daycare của chúng tôi được thiết kế để thỏa mãn nhu cầu cơ bản của thú cưng để
                chúng có một ngày vui vẻ và ý nghĩa.
              </p>
              <Link
                href="/signup"
                className="btn-genz-primary inline-flex items-center space-x-3 group"
              >
                <span>Đăng Ký Tại Đây</span>
                <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
              </Link>
            </div>

            <div className="relative flex justify-center lg:justify-end" style={{ transform: 'perspective(900px) rotateY(-1deg) rotateX(0.5deg)' }}>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-teal-200/40 blur-xl"></div>
              <div className="absolute -bottom-8 -right-4 w-40 h-40 rounded-full bg-green-200/50 blur-xl"></div>
              <div className="relative bg-white/60 border-2 border-green-200/60 rounded-[32px] p-6 shadow-2xl">
                <img
                  src="/images/curriculum-hero-dog.svg"
                  alt="Chò Méo - Chương trình học cho thú cưng"
                  className="w-[300px] md:w-[360px] lg:w-[420px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Core Activities Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">🎯</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Hoạt Động Cốt Lõi</h2>
            <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
              Chò Méo? Chò Vui! Đây là những hoạt động thú cưng của bạn sẽ tận hưởng tại daycare mỗi ngày
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ transformStyle: 'preserve-3d' }}>
            {coreActivities.map((activity, index) => {
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
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-green-600 mb-4 relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10 text-gradient-genz">{activity.title}</h3>
                  <p className="text-green-800 relative z-10 leading-relaxed">{activity.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Enrichment+ Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1100px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">✨</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">
              Hoạt Động Enrichment+ Là Gì?
            </h2>
            <p className="text-lg md:text-xl text-teal-800 max-w-3xl mx-auto leading-relaxed mb-8">
              Các hoạt động Enrichment+ của chúng tôi nâng cao hơn nữa các lĩnh vực cốt lõi được bao phủ trong 
              chương trình daycare. Các hoạt động luân phiên này đã được lựa chọn và thiết kế đặc biệt để 
              kết hợp các lĩnh vực chính của nhu cầu cơ bản của thú cưng.
            </p>
            <p className="text-lg text-teal-800 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi tin rằng thú cưng nên thử và học những điều mới. Các hoạt động mới được giới thiệu 
              vài tháng một lần để bổ sung cho CỐT LÕI. Các hoạt động này được thiết kế với sự quan tâm đến 
              sức khỏe của thú cưng. Hoạt động sẽ nhằm thỏa mãn một bản năng tự nhiên như tìm kiếm thức ăn, 
              kích thích giác quan hoặc kích thích tinh thần.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16" style={{ transformStyle: 'preserve-3d' }}>
            {enrichmentBenefits.map((benefit, index) => {
              const distortions = [
                { rotateX: -1, rotateY: 1, skewX: 1, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.5, skewY: -1 },
              ]
              const dist = distortions[index]
              
              return (
                <div
                  key={index}
                  className="card-genz bg-teal-100 p-6 border-2 border-teal-300 text-center"
                  style={{ 
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <p className="text-teal-900 leading-relaxed">{benefit.text}</p>
                </div>
              )
            })}
          </div>

          {/* Current Activity */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-teal-900 text-center">Hoạt Động Hiện Tại</h3>
            <div 
              className="card-genz bg-white/80 backdrop-blur-sm p-8 border-2 border-teal-300"
              style={{ transform: 'perspective(800px) rotateY(-0.5deg) rotateX(0.5deg) skewX(-0.3deg)' }}
            >
              <div className="text-sm text-teal-700 font-semibold mb-3">{currentActivity.period}</div>
              <h4 className="text-2xl font-bold mb-4 text-teal-900">{currentActivity.title}</h4>
              <p className="text-gray-700 leading-relaxed">{currentActivity.description}</p>
            </div>
          </div>

          {/* Previous Activities */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-teal-900 text-center">Hoạt Động Trước Đây</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ transformStyle: 'preserve-3d' }}>
              {previousActivities.map((activity, index) => {
                const prevDistortions = [
                  { rotateX: 1, rotateY: -1, skewX: -0.5, skewY: 0.5 },
                  { rotateX: -1, rotateY: 1, skewX: 0.5, skewY: -0.5 },
                  { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.3 },
                  { rotateX: -0.5, rotateY: 0.5, skewX: 0.3, skewY: -0.3 },
                  { rotateX: 1, rotateY: 1, skewX: -0.5, skewY: -0.5 },
                ]
                const dist = prevDistortions[index % prevDistortions.length]
                
                return (
                  <div
                    key={index}
                    className="card-genz bg-teal-100 p-6 border-2 border-teal-300"
                    style={{ 
                      transform: `perspective(500px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="text-sm text-teal-700 font-semibold mb-2">{activity.period}</div>
                    <h4 className="text-lg font-bold text-teal-900">{activity.title}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Learning Structure Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">🏗️</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Cấu Trúc Học Tập</h2>
            <p className="text-lg md:text-xl text-teal-800 max-w-3xl mx-auto leading-relaxed">
              Để thú cưng của bạn có trải nghiệm học tập hiệu quả tại Chò Méo, chúng tôi tuân theo một 
              cấu trúc học tập đã được chứng minh hiệu quả trong tất cả chương trình và hoạt động vui chơi của chúng tôi.
            </p>
            <p className="text-lg text-teal-800 max-w-3xl mx-auto leading-relaxed mt-4">
              Điều này cho phép các chuyên gia của chúng tôi lập kế hoạch và ghi chép tiến độ của từng thú cưng 
              đăng ký tại daycare của chúng tôi. Đảm bảo bạn và tất cả chủ thú cưng rằng thú cưng của bạn đang 
              ở trong tay những người có năng lực.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {learningStructure.map((item, index) => {
              const structureDistortions = [
                { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
                { rotateX: -0.5, rotateY: 1, skewX: 0.5, skewY: -1 },
              ]
              const dist = structureDistortions[index]
              
              return (
                <div
                  key={index}
                  className="card-genz bg-white/80 backdrop-blur-sm p-8 border-2 border-teal-300 text-center"
                  style={{ 
                    transform: `perspective(700px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex justify-center mb-4 text-teal-700">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-teal-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-genz">
              Muốn Biết Thêm Về Chương Trình Của Chúng Tôi?
            </h2>
            <Link
              href="/contact"
              className="btn-genz-primary inline-flex items-center space-x-3 group"
              style={{ transform: 'perspective(600px) rotateY(-0.5deg) rotateX(0.5deg)' }}
            >
              <span>Liên Hệ Chúng Tôi</span>
              <span className="text-xl group-hover:rotate-12 transition-transform duration-300">📧</span>
            </Link>
          </div>
        </div>

        {/* Bottom wave - transition to Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>
    </div>
  )
}
