import type { Metadata } from 'next'
import { FiStar } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Đánh Giá - Chò Méo',
  description: 'Xem những gì khách hàng nói về dịch vụ của Chò Méo',
}

export default function ReviewsPage() {
  const testimonials = [
    {
      name: 'Meesha',
      pet: 'Ripley',
      text: 'Dịch vụ daycare cho thú cưng tốt nhất. Bạn có thể cảm thấy an tâm và yên bình khi thú cưng của bạn ở tại daycare. Nhân viên thực sự tuyệt vời và tận tâm, và thú cưng của bạn về nhà hạnh phúc hơn khi rời khỏi nhà.',
      rating: 5,
    },
    {
      name: 'Kathy Ho',
      pet: 'Trixie & Sophie',
      text: 'Thumbs up cho daycare của Chò Méo. Chúng tôi nhận được cập nhật và hình ảnh suốt cả ngày. Thật vui khi thấy những khuôn mặt hạnh phúc và chúng tận hưởng những buổi đi dạo và giấc ngủ như thế nào.',
      rating: 5,
    },
    {
      name: 'Cathy Liu',
      pet: 'Cookie',
      text: 'Đội ngũ Chò Méo chăm sóc rất tốt và rất chú ý. Tôi luôn có thể tin tưởng đội ngũ đúng giờ cho việc đón và trả. Họ gửi tin nhắn bao gồm hình ảnh và video ít nhất hai lần một ngày.',
      rating: 5,
    },
    {
      name: 'Rachel Teo',
      pet: 'Bibi',
      text: 'Thú cưng của tôi đã tham gia daycare tại Chò Méo từ khi 5 tháng tuổi và luôn mong đợi được dành thời gian ở đó. Chò Méo giống như ngôi nhà thứ hai của nó.',
      rating: 5,
    },
    {
      name: 'Lisa Taylor',
      pet: 'Bear',
      text: 'Bear yêu thích thời gian ở Chò Méo. Cô ấy đã kết bạn với rất nhiều bạn và luôn mong đợi được đón. Họ luôn sẵn sàng giúp đỡ và luôn có ý định tốt nhất cho Bear.',
      rating: 5,
    },
    {
      name: 'Reed Liriano',
      pet: 'Beau',
      text: 'Đội ngũ tại Chò Méo đã tuyệt vời với chú poodle của chúng tôi. Anh ấy có một khoảng thời gian tuyệt vời với bạn bè và chúng tôi được gửi hình ảnh về những cuộc đi dạo và cuộc phiêu lưu của họ.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Đánh Giá</h1>
            <p className="text-xl text-teal-100">Khách hàng nói gì về chúng tôi</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden border-2 border-teal-200"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M100,0 L70,30 L90,50 L50,70 L80,90 L100,100 L100,0 Z" fill="currentColor" className="text-teal-600" />
                  </svg>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    - {testimonial.name} | {testimonial.pet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
