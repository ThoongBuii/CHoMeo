import type { Metadata } from 'next'
import Link from 'next/link'
import { FiCheckCircle, FiHeart, FiUsers, FiAward } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Về Chúng Tôi - Chò Méo',
  description: 'Tìm hiểu về Chò Méo - Trường học thú cưng độc đáo với dịch vụ chăm sóc chuyên nghiệp',
}

export default function AboutPage() {
  const features = [
    { icon: '🏢', title: 'Cơ Sở Vật Chất Hiện Đại', desc: 'Không gian sạch sẽ, thoáng mát với điều hòa, an toàn và tiện nghi' },
    { icon: '👥', title: 'Đội Ngũ Chuyên Nghiệp', desc: 'Nhân viên được đào tạo bài bản, tận tâm và yêu thương thú cưng' },
    { icon: '✨', title: 'Phương Pháp Tích Cực', desc: 'Huấn luyện bằng positive reinforcement, không ép buộc' },
    { icon: '📸', title: 'Cập Nhật Hàng Ngày', desc: 'Gửi hình ảnh và video mỗi ngày để bạn yên tâm' },
    { icon: '📊', title: 'Báo Cáo Tiến Độ', desc: 'Theo dõi và báo cáo chi tiết về sự phát triển của thú cưng' },
    { icon: '🌳', title: 'Hoạt Động Ngoài Trời', desc: 'Đi dạo, công viên và khám phá thiên nhiên' },
  ]

  const values = [
    { icon: <FiHeart className="w-8 h-8" />, title: 'Tận Tâm', desc: 'Yêu thương và chăm sóc từng thú cưng như thành viên gia đình' },
    { icon: <FiAward className="w-8 h-8" />, title: 'Chuyên Nghiệp', desc: 'Đội ngũ được đào tạo chuyên sâu về hành vi và chăm sóc thú cưng' },
    { icon: <FiUsers className="w-8 h-8" />, title: 'Cộng Đồng', desc: 'Xây dựng môi trường xã hội tích cực cho thú cưng phát triển' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - match với navbar background */}
      <section className="relative overflow-hidden pt-24 pb-20" style={{ perspective: '1200px', backgroundColor: '#fef9e7' }}>
        {/* Top wave - match với navbar background để tạo transparency effect */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#fef9e7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center" style={{ transform: 'perspective(1000px) rotateY(0.5deg) rotateX(-0.5deg)' }}>
            <div className="inline-block mb-6">
              <span className="text-6xl animate-bounce-genz">🌟</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Về Chúng Tôi
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
              Trường Học Thú Cưng Độc Đáo
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Chăm sóc chuyên nghiệp, tận tâm và đáng tin cậy cho thú cưng của bạn
            </p>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave - match với hero bottom wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div 
              className="card-genz bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12"
              style={{ transform: 'perspective(800px) rotateY(-0.5deg) rotateX(0.5deg) skewX(-0.3deg)' }}
            >
              <div className="inline-block mb-6">
                <span className="text-4xl">📖</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-genz">Câu Chuyện Của Chúng Tôi</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-green-700">Chò Méo</strong> được thành lập nhờ nhu cầu ngày càng tăng về một trường học thú cưng 
                  sử dụng phương pháp positive reinforcement. Chúng tôi gặp nhiều ba mẹ thú cưng đang tìm kiếm một 
                  daycare cam kết về an toàn, niềm vui, sự sạch sẽ, giao tiếp cởi mở và positive reinforcement.
                </p>
                <p>
                  Cho đến nay, những giá trị này vẫn là cốt lõi của chúng tôi. Trong những năm đầu, chương trình 
                  daycare của chúng tôi chủ yếu tập trung vào xã hội hóa và vận động thể chất. Chúng tôi có các 
                  nhóm chơi được giám sát, các chuyến đi chơi, đi dạo và công viên để giải phóng năng lượng dư thừa. 
                  Khi kiến thức về thú cưng của chúng tôi phát triển, chúng tôi đã thiết kế một chương trình học mới 
                  bao gồm các hoạt động enrichment để thú cưng có thể thỏa mãn nhu cầu tìm kiếm thức ăn, chạm vào, 
                  giải quyết vấn đề và làm những điều mà chó mèo yêu thích.
                </p>
                <p>
                  Mối quan hệ của chúng tôi với thú cưng và chủ của chúng là điều mà chúng tôi trân trọng. Chúng tôi 
                  cập nhật cho chủ nhân mỗi ngày vào cùng một thời điểm, vì chúng tôi biết các ba mẹ muốn biết điều gì 
                  đang diễn ra. Chúng tôi cũng hy vọng dạy cho các ba mẹ một chút điều gì đó mà họ chưa biết về thú cưng 
                  của mình thông qua các hoạt động và cập nhật của chúng tôi.
                </p>
                <p>
                  Tôi tự hào về đội ngũ của chúng tôi và những thành tựu như một nhà cung cấp daycare đáng tin cậy. 
                  Chúng tôi đã có thể đóng góp lại cho cộng đồng thông qua các chương trình quyên góp thức ăn cho các 
                  trại cứu hộ và các chuyến thăm thú cưng đến các viện dưỡng lão. Hãy tham gia cùng chúng tôi tại 
                  trường học thú cưng độc đáo của chúng tôi.
                </p>
                <p className="mt-8 pt-6 border-t border-gray-200">
                  <strong className="text-green-700">Trân trọng,</strong><br />
                  <span className="text-gray-600">Đồng sáng lập Chò Méo</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave - transition to Values section */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="text-5xl animate-bounce-genz">💎</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Giá Trị Cốt Lõi</h2>
            <p className="text-lg md:text-xl text-teal-800 max-w-2xl mx-auto">
              Những điều chúng tôi cam kết mang lại cho thú cưng của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {values.map((value, index) => {
              const distortions = [
                { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
                { rotateX: -0.5, rotateY: 1, skewX: 0.5, skewY: -1 },
              ]
              const dist = distortions[index]
              
              return (
                <div
                  key={index}
                  className="card-genz bg-teal-100 p-8 border-2 border-teal-300 text-center"
                  style={{ 
                    transform: `perspective(700px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex justify-center mb-4 text-teal-700">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-teal-900">{value.title}</h3>
                  <p className="text-teal-800 leading-relaxed">{value.desc}</p>
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

      {/* Features Section */}
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
              <span className="text-5xl animate-bounce-genz">✨</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Tính Năng Nổi Bật</h2>
            <p className="text-lg md:text-xl text-teal-800 max-w-2xl mx-auto">
              Những điều làm nên sự khác biệt của Chò Méo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {features.map((feature, index) => {
              const spatialDistortions = [
                { rotateX: 1, rotateY: -1.5, skewX: -1, skewY: 0.5 },
                { rotateX: -1, rotateY: 1, skewX: 1, skewY: -0.5 },
                { rotateX: 0.5, rotateY: -1, skewX: -0.5, skewY: 1 },
                { rotateX: -1.5, rotateY: 0.5, skewX: 1, skewY: -0.5 },
                { rotateX: 1, rotateY: 1.5, skewX: -1, skewY: -0.5 },
                { rotateX: -0.5, rotateY: -1, skewX: 0.5, skewY: 1 },
              ]
              const dist = spatialDistortions[index % spatialDistortions.length]
              
              return (
                <div
                  key={index}
                  className="card-genz bg-white/80 backdrop-blur-sm p-6 border-2 border-teal-200"
                  style={{ 
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-teal-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
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

      {/* CTA Section - nội dung giống SignUpSection, background giữ nguyên green */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave - match với Features bottom wave (teal) */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">🎉</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-genz">
              Nghe Có Vẻ Tuyệt Vời? Hãy Đến Thăm Chúng Tôi!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12" style={{ transformStyle: 'preserve-3d' }}>
              {[
                { num: '01', text: 'Điền vào form của chúng tôi để Đăng ký', dist: { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -0.5 } },
                { num: '02', text: 'Đưa thú cưng của bạn đến để đánh giá MIỄN PHÍ', dist: { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 } },
                { num: '03', text: 'Đăng ký Daycare!', dist: { rotateX: -0.5, rotateY: 1, skewX: 0.5, skewY: -1 } },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200/50"
                  style={{ 
                    transform: `perspective(600px) rotateX(${step.dist.rotateX}deg) rotateY(${step.dist.rotateY}deg) skewX(${step.dist.skewX}deg) skewY(${step.dist.skewY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-4xl font-bold mb-2 text-gray-900">{step.num}</div>
                  <p className="text-gray-800">{step.text}</p>
                </div>
              ))}
            </div>

            <p className="text-sm mb-8 text-green-800">
              *Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để sẵn sàng cho daycare
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center space-x-2 bg-teal-500 text-white hover:bg-teal-600 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg shadow-xl hover:shadow-2xl"
            >
              <span>Đặt Lịch Thăm Quan</span>
              <span className="text-xl">🐾</span>
            </Link>
          </div>
        </div>

        {/* Bottom wave - transition to ContactPreview (teal) */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>
    </div>
  )
}
