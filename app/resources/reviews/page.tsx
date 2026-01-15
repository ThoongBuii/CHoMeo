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
      text: 'Dịch vụ daycare cho thú cưng tốt nhất ở TP.HCM. Bạn có thể cảm thấy an tâm và yên bình khi thú cưng của bạn ở tại Chò Méo. Nhân viên thực sự tuyệt vời và tận tâm, và thú cưng của bạn về nhà hạnh phúc hơn khi rời khỏi nhà. Quyết định tốt nhất chúng tôi đã đưa ra. Chú Corgi của chúng tôi yêu daycare hơn bất cứ điều gì và điều đó khiến chúng tôi rất hạnh phúc khi thấy chú bé vui vẻ.',
    },
    {
      name: 'Kathy Ho',
      pet: 'Trixie & Sophie',
      text: 'Thumbs up cho daycare của Chò Méo. Chúng tôi nhận được cập nhật và hình ảnh suốt cả ngày. Thật vui khi thấy những khuôn mặt hạnh phúc và chúng tận hưởng những buổi đi dạo và giấc ngủ như thế nào. Nhờ lời giới thiệu của bạn và rất vui vì con chúng tôi được vận động và chơi thay vì nhốt ở nhà cả ngày. Đã giới thiệu Chò Méo cho các bạn nuôi chó.',
    },
    {
      name: 'Cathy Liu',
      pet: 'Cookie',
      text: 'Đội ngũ Chò Méo chăm sóc rất tốt và rất chú ý. Tôi luôn có thể tin tưởng đội ngũ đúng giờ cho việc đón và trả. Họ gửi tin nhắn bao gồm hình ảnh và video ít nhất hai lần một ngày. Cookie đã kết bạn rất nhiều và thậm chí còn giúp tôi kết bạn với các phụ huynh nuôi chó khác. Một daycare 5 sao để tóm lại!',
    },
    {
      name: 'Ambigai Thambyah',
      pet: 'Tucker',
      text: 'Cảm ơn đội ngũ Chò Méo vì dịch vụ xuất sắc và rất chu đáo. Rõ ràng là mọi người trong đội ngũ đều tận tâm. Những cập nhật rất an ủi và tôi cảm thấy Tucker có một khoảng thời gian tuyệt vời mỗi ngày với những người bạn mới, cả con người và bạn lông xù.',
    },
    {
      name: 'Rachel Teo',
      pet: 'Bibi',
      text: 'Chú Chihuahua Bibi của tôi đã tham gia daycare tại Chò Méo từ khi 5 tháng tuổi và luôn mong đợi được dành thời gian ở đó. Chò Méo giống như ngôi nhà thứ hai của nó. Rất vui khi tìm được một trong những Daycare + Boarding tốt nhất cho chó!',
    },
    {
      name: 'Saloni Singh',
      pet: 'Oscar',
      text: 'Chò Méo thật không thể tin được! Chúng tôi tìm thấy nó qua một người bạn và đã trung thành với nó kể từ đó! Oscar yêu thích nơi đó và những bức ảnh cập nhật họ gửi cho chúng tôi rất dễ thương đến mức làm cho ngày của chúng tôi tuyệt vời!',
    },
    {
      name: 'Lisa Anne Taylor-Chong',
      pet: 'Bear',
      text: 'Bear yêu thích thời gian ở Chò Méo. Cô ấy đã kết bạn rất nhiều và mong đợi được đón bằng xe trắng của Chò Méo. Họ rất tốt trong việc giúp đỡ với thông báo ngắn và luôn có ý định tốt nhất cho Bear. Thật tuyệt khi biết rằng Bear có một gia đình tuyệt vời tại daycare của cô ấy. Chúng tôi tin tưởng Chò Méo vô cùng.',
    },
    {
      name: 'Linda Lauv',
      pet: 'Harriet',
      text: 'Chúng tôi yêu dịch vụ Chò Méo cung cấp và biết ơn vì đã tìm được một daycare đáng tin cậy, đáng tin và hiệu quả như vậy. Harriet là một chú chó Chihuahua và đã đi Chò Méo trong 6 tháng. Chò Méo đã chăm sóc cô ấy rất tốt và không có nơi nào khác tôi muốn gửi cô ấy!',
    },
    {
      name: 'Gurmit',
      pet: 'Krypto',
      text: 'Nếu bạn cần chó của bạn được chăm sóc tốt bởi những người có đam mê thì tôi thực sự khuyên dùng Chò Méo. Tôi đã gửi chó của tôi đến đó và nó trở về là một chú chó tốt hơn! LOL... Tôi có thể thấy đội ngũ yêu thích công việc họ làm và điều đó rất cần thiết trong một doanh nghiệp như thế này. Cảm ơn Chò Méo, và tiếp tục làm việc tốt!!!',
    },
    {
      name: 'Shelbie Hanft',
      pet: 'Duke',
      text: 'Nếu bạn muốn hoặc cần ai đó chăm sóc chó của bạn, không cần tìm xa hơn! Đội ngũ Chò Méo là tốt nhất. Chó của bạn sẽ được yêu thương, vui chơi và chăm sóc. Cảm ơn vì tất cả tình yêu và nỗ lực bạn dành cho Duke! Ngay khi anh ấy nhìn thấy xe trắng của bạn, anh ấy trở nên phấn khích!',
    },
    {
      name: 'Marissa Lau',
      pet: 'Toby',
      text: 'Những người yêu chó chân chính biết điều gì tốt nhất cho thú cưng lông xù của bạn. Đội ngũ trẻ tận tâm. Rất khuyến khích.',
    },
    {
      name: 'Allie Bartolino Hollowell',
      pet: 'Henry',
      text: 'Toàn bộ đội ngũ Chò Méo thật tuyệt vời. Chúng tôi gửi chó của chúng tôi mỗi tuần một lần để chơi và duy trì xã hội hóa và anh ấy luôn về nhà vui vẻ và mệt mỏi. Bây giờ anh ấy cố gắng nhảy vào mọi chiếc xe trắng anh ấy nhìn thấy nghĩ rằng đó có thể là Chò Méo đến đón anh ấy đi "cắm trại"!',
    },
    {
      name: 'Thira Wong',
      pet: 'Jasper, Taco & Froyo',
      text: 'Đừng ngại đưa chó của bạn đến đây vì đội ngũ tận tâm chăm sóc chúng rất tốt! Họ luôn vượt ra ngoài mong đợi, thậm chí chạy trong mưa để giúp tôi! Tôi luôn mong đợi những cập nhật ảnh và yêu thích việc nhìn thấy chó của tôi luôn vui vẻ! Cảm ơn các bạn, vì mọi điều bạn làm!',
    },
    {
      name: 'Reed Liriano',
      pet: 'Beau',
      text: 'Đội ngũ tại Chò Méo đã tuyệt vời với chú toy poodle Beau của chúng tôi. Anh ấy có một khoảng thời gian tuyệt vời với bạn bè và chúng tôi được gửi hình ảnh về những cuộc đi dạo và cuộc phiêu lưu của họ. Chúng tôi thích thấy anh ấy rất hạnh phúc với tất cả các chó khác và anh ấy rất mệt khi về nhà. Chò Méo đã nghĩ đến mọi thứ. Chúng tôi yêu thích việc họ đón chó vào buổi sáng và trả vào buổi chiều. Rất khuyến khích.',
    },
    {
      name: 'Neil',
      pet: 'Oscar & Ollie',
      text: 'Chúng tôi đã sử dụng Chò Méo trong một thời gian khá lâu và họ rất tuyệt! Luôn đúng giờ và chó của chúng tôi luôn hào hứng để đi. Các chó được chăm sóc tốt và có rất nhiều niềm vui. Chúng tôi cũng đã sử dụng họ cho dịch vụ lưu trú và họ đã đi xa hơn....cảm ơn Chò Méo, bạn là tốt nhất!',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20" style={{ perspective: '1200px', backgroundColor: '#fef9e7' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#fef9e7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center" style={{ transform: 'perspective(1000px) rotateY(0.5deg) rotateX(-0.5deg)' }}>
            <div className="inline-block mb-6">
              <span className="text-6xl animate-bounce-genz">⭐</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Những phản hồi chân thực từ các chủ thú cưng đã tin tưởng Chò Méo
            </p>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {testimonials.map((testimonial, index) => {
              const distortions = [
                { rotateX: -0.8, rotateY: 0.8, skewX: 0.5, skewY: -0.3 },
                { rotateX: 0.8, rotateY: -0.8, skewX: -0.5, skewY: 0.3 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.3, skewY: -0.2 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.2 },
              ]
              const dist = distortions[index % distortions.length]

              return (
                <div
                  key={index}
                  className="card-genz bg-white p-8 border-2 border-teal-300 relative overflow-hidden group"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4 border-teal-200">
                    <p className="font-semibold text-teal-900">
                      -{testimonial.name} | {testimonial.pet}
                    </p>
                  </div>
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
    </div>
  )
}
