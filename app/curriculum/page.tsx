import type { Metadata } from 'next'
import { FiMoon, FiCommand, FiMap, FiUsers } from 'react-icons/fi'

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

  const seasonalActivities = [
    {
      title: 'Màu Sắc Yêu Thích Của Thú Cưng',
      period: 'Tháng 10 2024 - Tháng 11 2024',
      description: 'Thú cưng không nhìn thế giới bằng màu đen trắng. Thay vào đó, chúng nhìn thấy các sắc thái của xanh dương, vàng và xám. Chúng tôi chơi một loạt trò chơi để tìm ra màu sắc yêu thích của thú cưng bạn.',
    },
    {
      title: 'K9 Fitness: Cân Bằng',
      period: 'Tháng 1 2024 - Tháng 7 2024',
      description: 'Hoạt động thể dục và cân bằng cho thú cưng, giúp phát triển cơ bắp và sự linh hoạt.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chương Trình Học</h1>
            <p className="text-xl text-green-100">
              Up for Paws? Up for Fun! Các hoạt động thú cưng của bạn sẽ tận hưởng mỗi ngày
            </p>
          </div>
        </div>
        {/* Jagged line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L80,25 L160,8 L240,30 L320,5 L400,28 L480,10 L560,32 L640,8 L720,26 L800,6 L880,29 L960,9 L1040,27 L1120,11 L1200,25 L1280,7 L1360,30 L1440,12 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Core Activities */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoạt Động Cốt Lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những hoạt động hàng ngày mà thú cưng của bạn sẽ tham gia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-green-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L30,20 L60,5 L90,25 L100,0 L100,100 L0,100 Z" fill="currentColor" className="text-green-600" />
                  </svg>
                </div>
                <div className="text-green-600 mb-4 relative z-10">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{activity.title}</h3>
                <p className="text-gray-700 relative z-10">{activity.description}</p>
              </div>
            ))}
          </div>

          {/* Seasonal Activities */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Hoạt Động Theo Mùa
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Chúng tôi tin rằng thú cưng nên thử và học những điều mới. Các hoạt động mới 
              được giới thiệu vài tháng một lần để bổ sung cho các hoạt động CỐT LÕI.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {seasonalActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-green-300 relative overflow-hidden shadow-md"
                >
                  <div className="absolute top-0 left-0 w-full h-2 opacity-30">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M0,20 L40,10 L80,15 L120,5 L160,18 L200,8 L240,12 L280,3 L320,16 L360,7 L400,14 L400,20 Z" fill="#22c55e" />
                    </svg>
                  </div>
                  <div className="text-sm text-green-600 font-semibold mb-2">
                    {activity.period}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
