import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

export default function About() {
  const features = [
    'Cơ sở vật chất hiện đại, sạch sẽ',
    'Đội ngũ nhân viên được đào tạo chuyên nghiệp',
    'Phương pháp huấn luyện tích cực',
    'Cập nhật hình ảnh hàng ngày',
    'Báo cáo tiến độ chi tiết',
    'Hoạt động ngoài trời và công viên',
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-teal-50 to-teal-100 relative overflow-hidden">
      {/* Jagged decorative line at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
        </svg>
      </div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Về Chúng Tôi</h2>
          <h3 className="text-2xl md:text-3xl text-teal-700 mb-6">
            Trường Học Thú Cưng Độc Đáo
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chăm sóc chuyên nghiệp, không lo lắng cho thú cưng của bạn. 
            Chương trình daycare của chúng tôi cung cấp các hoạt động sử dụng 
            phương pháp học tập không ép buộc và vui chơi. Được hướng dẫn bởi 
            hành vi tự nhiên và nhu cầu bản năng của thú cưng, danh sách hoạt động 
            luôn thay đổi của chúng tôi sẽ giữ cho thú cưng của bạn được vận động 
            về mặt tinh thần, thể chất và xã hội cho đến khi về nhà.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h4 className="text-2xl font-semibold mb-6">Tính Năng Nổi Bật</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Link href="#curriculum" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 active:scale-95 mt-8 inline-block">
              Tìm Hiểu Thêm
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
            {/* Decorative jagged shapes */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M0,150 L50,120 L100,160 L150,100 L200,180 L250,80 L300,170 L350,90 L400,140 L400,300 L0,300 Z" fill="#14b8a6" />
              </svg>
            </div>
            <p className="text-gray-600 text-center">
              [Hình ảnh về cơ sở vật chất hoặc thú cưng vui chơi]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
