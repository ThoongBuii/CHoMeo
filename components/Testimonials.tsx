import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Meesha',
      pet: 'Ripley',
      text: 'Dịch vụ daycare cho thú cưng tốt nhất ở Singapore. Bạn có thể cảm thấy an tâm và yên bình khi thú cưng của bạn ở tại daycare. Nhân viên thực sự tuyệt vời và tận tâm, và thú cưng của bạn về nhà hạnh phúc hơn khi rời khỏi nhà.',
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
  ]

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden">
      {/* Multiple gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/50 via-teal-150/30 to-teal-200/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/70 via-transparent to-teal-100/50"></div>
      
      {/* Smooth wave transition from Curriculum section - giống Up For Paws */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 C120,120 240,100 360,120 C480,140 600,120 720,140 C840,160 960,100 1080,120 C1200,140 1320,80 1440,100 L1440,0 L0,0 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      {/* Bottom smooth waves - giống Up For Paws với nhiều lớp và độ cong lớn hơn */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '170px' }}>
        <svg viewBox="0 0 1440 170" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,170 C120,60 240,80 360,110 C480,140 600,120 720,140 C840,160 960,100 1080,120 C1200,140 1320,80 1440,100 L1440,170 L0,170 Z" fill="#d97706" opacity="0.7"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '140px' }}>
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,140 C100,50 200,70 320,100 C440,130 560,110 680,130 C800,150 920,90 1040,110 C1160,130 1280,70 1440,90 L1440,140 L0,140 Z" fill="#f59e0b" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Organic decorative blobs */}
      <div className="absolute top-20 left-20 w-24 h-24 md:w-40 md:h-40 organic-blob bg-teal-200/15 opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 md:w-36 md:h-36 organic-blob bg-teal-300/15 opacity-40" style={{ animationDelay: '2.5s' }}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-teal-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 border-teal-300 organic-card group"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Multiple organic decorative blobs */}
              <div className="absolute top-0 right-0 w-32 h-32 organic-blob bg-teal-200/15 float-animation opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 organic-blob bg-teal-300/10 float-animation opacity-50" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="flex items-center space-x-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 transform group-hover:scale-125 transition-transform duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-teal-900 mb-6 italic leading-relaxed relative z-10 text-lg">"{testimonial.text}"</p>
              <div className="border-t border-teal-300 pt-4 relative z-10">
                <p className="font-semibold text-teal-900 text-lg">
                  - {testimonial.name} | {testimonial.pet}
                </p>
              </div>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/0 to-teal-300/0 group-hover:from-teal-200/50 group-hover:to-teal-300/30 transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
