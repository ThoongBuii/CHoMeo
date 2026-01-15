import type { Metadata } from 'next'
import Link from 'next/link'
import { FiActivity, FiMap, FiUsers, FiCamera, FiTruck, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Dog Walks - Chò Méo',
  description: 'Dịch vụ Dog Walks & Adventures của Chò Méo dành cho thú cưng năng động và yêu khám phá',
}

export default function ServicesPage() {
  const adventureHighlights = [
    {
      title: 'Khám Phá TP.HCM',
      description: 'Cùng nhau khám phá những góc phố, công viên và không gian xanh mới lạ.',
    },
    {
      title: 'Nhóm Đi Dạo',
      description: 'Kết bạn mới, giao lưu an toàn với nhóm thú cưng cùng kích thước.',
    },
    {
      title: 'Chạy Bộ Tự Do',
      description: 'Không gian an toàn để chạy nhảy, giải phóng năng lượng mỗi ngày.',
    },
  ]

  const whoIsFor = [
    'Thú cưng khỏe mạnh và năng động',
    'Thú cưng yêu thích khám phá và kết bạn',
    'Thú cưng cần vận động, social hoá và vui chơi ngoài trời',
  ]

  const activitiesInclude = [
    { icon: <FiActivity className="w-6 h-6" />, label: 'Đi dạo & đi nhóm' },
    { icon: <FiCamera className="w-6 h-6" />, label: 'Cập nhật hình ảnh & video' },
    { icon: <FiTruck className="w-6 h-6" />, label: 'Đưa đón 2 chiều' },
  ]

  const schedule = [
    { time: '9:30 - 10:30', title: 'Đón thú cưng', desc: 'Đưa đón tận nhà theo khu vực' },
    { time: '10:30 - 12:00', title: 'Dog Walks / Dog Parks', desc: 'Đi dạo, khám phá và chơi nhóm' },
    { time: '12:00 - 12:30', title: 'Nghỉ ngơi & uống nước', desc: 'Giải lao, bổ sung nước, vệ sinh' },
    { time: '12:30 - 13:30', title: 'Trả thú cưng', desc: 'Đưa về tận nhà an toàn' },
  ]

  const requirements = [
    'Thú cưng đã triệt sản nếu đủ tuổi',
    'Tiêm chủng đầy đủ và phòng ve/rận trước ngày đi',
    'Chủ cung cấp dây dắt và yếm chất lượng phù hợp',
    'Đeo rọ mõm nếu thuộc nhóm cần thiết theo quy định',
    'Có thẻ nhận diện (ID tag) trên vòng cổ/yếm',
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
                <span className="text-6xl animate-bounce-genz">🐾</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
                Dẫn Dạo Cùng Chò Méo
                <span className="block">Phiêu Lưu Mỗi Ngày</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Hãy để thú cưng của bạn tham gia hành trình Dog Walks & Adventures. Cùng nhau khám phá,
                chạy nhảy, social hoá và tận hưởng một ngày tràn đầy năng lượng.
              </p>
              <Link
                href="/signup"
                className="btn-genz-primary inline-flex items-center space-x-3 group"
              >
                <span>Đăng Ký Dịch Vụ</span>
                <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
              </Link>
            </div>

            <div className="relative flex justify-center lg:justify-end" style={{ transform: 'perspective(900px) rotateY(-1deg) rotateX(0.5deg)' }}>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-teal-200/40 blur-xl"></div>
              <div className="absolute -bottom-8 -right-4 w-40 h-40 rounded-full bg-green-200/50 blur-xl"></div>
              <div className="relative bg-white/60 border-2 border-green-200/60 rounded-[32px] p-6 shadow-2xl">
                <img
                  src="/images/dogwalk-hero.svg"
                  alt="Chò Méo Dog Walks Adventures"
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

      {/* What is Adventures */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">🌿</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-genz">Chò Méo Adventures Là Gì?</h2>
            <p className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto leading-relaxed">
              Dịch vụ dắt chó của Chò Méo sẽ đưa thú cưng của bạn khám phá nhiều địa điểm khác nhau tại TP.HCM.
              Được dẫn dắt bởi đội ngũ chuyên nghiệp, thú cưng sẽ được chạy nhảy, social hoá và vui chơi an toàn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" style={{ transformStyle: 'preserve-3d' }}>
            {adventureHighlights.map((item, index) => {
              const distortions = [
                { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
                { rotateX: -1, rotateY: 1, skewX: 1, skewY: -0.5 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.5, skewY: 0.5 },
              ]
              const dist = distortions[index]

              return (
                <div
                  key={item.title}
                  className="card-genz bg-green-100 p-8 border-2 border-green-300 text-center"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-green-900">{item.title}</h3>
                  <p className="text-green-800 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/signup"
              className="btn-genz-primary inline-flex items-center space-x-3"
            >
              <span>Ghi Danh Cho Thú Cưng</span>
              <span className="text-xl">🐕</span>
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Who is for */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Dành Cho Ai?</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Dành cho những bé chó yêu khám phá, thích vận động và cần bạn bè mới.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" style={{ transformStyle: 'preserve-3d' }}>
            {whoIsFor.map((item, index) => {
              const dist = [
                { rotateX: -1, rotateY: 1.2, skewX: 0.8, skewY: -0.5 },
                { rotateX: 1, rotateY: -1, skewX: -0.8, skewY: 0.5 },
                { rotateX: -0.5, rotateY: 0.6, skewX: 0.6, skewY: -0.4 },
              ][index]

              return (
                <div
                  key={item}
                  className="card-genz bg-teal-100 p-6 border-2 border-teal-300"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <p className="text-teal-900 font-semibold">{item}</p>
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

      {/* Activities include */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Hoạt Động Bao Gồm</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {activitiesInclude.map((item, index) => {
              const dist = [
                { rotateX: 1, rotateY: -1, skewX: -0.5, skewY: 0.5 },
                { rotateX: -1, rotateY: 1, skewX: 0.5, skewY: -0.5 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.3 },
              ][index]
              return (
                <div
                  key={item.label}
                  className="card-genz bg-green-100 p-6 border-2 border-green-300 flex items-center space-x-3"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="text-green-600">{item.icon}</div>
                  <div className="text-green-900 font-semibold">{item.label}</div>
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

      {/* Schedule */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Lịch Trình Dã Ngoại</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Lịch trình được thiết kế để đảm bảo an toàn, vui vẻ và đủ thời gian vận động cho thú cưng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {schedule.map((item, index) => {
              const dist = [
                { rotateX: -1, rotateY: 1, skewX: 0.6, skewY: -0.4 },
                { rotateX: 1, rotateY: -1, skewX: -0.6, skewY: 0.4 },
                { rotateX: -0.5, rotateY: 0.6, skewX: 0.4, skewY: -0.3 },
                { rotateX: 0.5, rotateY: -0.6, skewX: -0.4, skewY: 0.3 },
              ][index]

              return (
                <div
                  key={item.time}
                  className="card-genz bg-teal-100 p-6 border-2 border-teal-300"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="text-teal-700 font-bold text-lg mb-2">{item.time}</div>
                  <div className="text-teal-900 font-semibold mb-2">{item.title}</div>
                  <div className="text-gray-700">{item.desc}</div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8 text-teal-800">
            <p className="font-semibold">Quy mô nhóm: 4-6 bé | Nhân sự: tối thiểu 2 | Phí: 350.000đ / buổi</p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Rainy Day */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Ngày Mưa Thì Sao?</h2>
            <p className="text-lg text-green-800 leading-relaxed">
              Thời tiết có thể thay đổi bất ngờ. Nếu mưa nhẹ, chúng tôi sẽ chuyển sang các tuyến đi bộ có mái che.
              Nếu mưa lớn hoặc thời tiết không an toàn, chuyến đi có thể được dời lịch hoặc kết thúc sớm hơn để đảm bảo an toàn.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">Yêu Cầu Tham Gia</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6" style={{ transformStyle: 'preserve-3d' }}>
            {requirements.map((item, index) => {
              const dist = [
                { rotateX: -0.8, rotateY: 0.8, skewX: 0.6, skewY: -0.4 },
                { rotateX: 0.8, rotateY: -0.8, skewX: -0.6, skewY: 0.4 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.4, skewY: -0.3 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.4, skewY: 0.3 },
                { rotateX: -0.6, rotateY: 0.6, skewX: 0.5, skewY: -0.3 },
              ][index % 5]

              return (
                <div
                  key={item}
                  className="card-genz bg-teal-100 p-6 border-2 border-teal-300 flex items-start space-x-3"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="text-teal-700">
                    <FiCheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-teal-900 font-medium">{item}</p>
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

      {/* How to Enroll */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-5xl animate-bounce-genz">🧭</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-genz">
              Cách Đăng Ký Dog Walks
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8" style={{ transformStyle: 'preserve-3d' }}>
              {[
                { num: '01', text: 'Điền form đăng ký để chúng tôi nắm thông tin' },
                { num: '02', text: 'Đưa thú cưng đến đánh giá MIỄN PHÍ' },
                { num: '03', text: 'Bắt đầu chuyến đi cùng Chò Méo!' },
              ].map((step, index) => {
                const dist = [
                  { rotateX: -1, rotateY: 1.5, skewX: 1, skewY: -0.5 },
                  { rotateX: 1, rotateY: -1, skewX: -1, skewY: 0.5 },
                  { rotateX: -0.5, rotateY: 1, skewX: 0.5, skewY: -1 },
                ][index]

                return (
                  <div
                    key={step.num}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-200/60"
                    style={{
                      transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="text-4xl font-bold mb-2 text-gray-900">{step.num}</div>
                    <p className="text-gray-800">{step.text}</p>
                  </div>
                )
              })}
            </div>

            <p className="text-sm mb-8 text-teal-800">
              *Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để đảm bảo phù hợp với chương trình
            </p>

            <Link
              href="/signup"
              className="btn-genz-primary inline-flex items-center space-x-2"
            >
              <span>Đăng Ký Ngay</span>
              <span className="text-xl">🐾</span>
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
