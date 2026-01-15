'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, FiStar } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const testimonials = [
    {
      name: 'Meesha',
      pet: 'Ripley',
      text: 'Dịch vụ daycare cho thú cưng tốt nhất ở TP.HCM. Nhân viên thực sự tuyệt vời và tận tâm!',
    },
    {
      name: 'Kathy Ho',
      pet: 'Trixie & Sophie',
      text: 'Chúng tôi nhận được cập nhật và hình ảnh suốt cả ngày. Thật vui khi thấy chúng hạnh phúc!',
    },
    {
      name: 'Cathy Liu',
      pet: 'Cookie',
      text: 'Đội ngũ Chò Méo chăm sóc rất tốt và rất chú ý. Một daycare 5 sao!',
    },
    {
      name: 'Lisa Taylor',
      pet: 'Bear',
      text: 'Bear yêu thích thời gian ở Chò Méo. Chúng tôi tin tưởng họ vô cùng.',
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
              <span className="text-6xl animate-bounce-genz">💬</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Liên Hệ Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Bạn có câu hỏi về Chò Méo? Chúng tôi chắc chắn có câu trả lời.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Click bất kỳ link nào bên dưới để liên hệ với chúng tôi!
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

      {/* Contact Info & Form Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {/* Contact Info - Left Column */}
            <div 
              className="card-genz bg-white/80 backdrop-blur-sm p-8 border-2 border-teal-300"
              style={{ transform: 'perspective(800px) rotateY(-1deg) rotateX(0.5deg) skewX(-0.5deg)' }}
            >
              <h2 className="text-3xl font-bold mb-6 text-teal-900">Thông Tin Liên Hệ</h2>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4 mb-8">
                <a href="#" className="bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition-colors" aria-label="Facebook">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition-colors" aria-label="Instagram">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition-colors" aria-label="Twitter">
                  <FiTwitter className="w-6 h-6" />
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900 mb-1">Điện Thoại</p>
                    <p className="text-teal-800">+84 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                    <FiMail className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900 mb-1">Email</p>
                    <p className="text-teal-800">hello@chomeo.com</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-teal-800 italic">
                (Chúng tôi online từ Thứ Hai đến Thứ Sáu, 9:00 SA – 5:30 CH)
              </p>
            </div>

            {/* Contact Form - Right Column */}
            <div 
              className="card-genz bg-white/80 backdrop-blur-sm p-8 border-2 border-teal-300"
              style={{ transform: 'perspective(800px) rotateY(1deg) rotateX(-0.5deg) skewX(0.5deg)' }}
            >
              <h2 className="text-3xl font-bold mb-6 text-teal-900">Gửi Tin Nhắn</h2>
              {submitted ? (
                <div className="bg-green-200 border-2 border-green-400 rounded-lg p-6 text-green-900">
                  <p className="font-semibold mb-2">Cảm ơn bạn đã liên hệ!</p>
                  <p>Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-teal-900 mb-2">
                      Tên *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-teal-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-teal-900 mb-2">
                      Tin Nhắn *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-genz-primary w-full">
                    Gửi Tin Nhắn
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#dcfce7"/>
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#dcfce7"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-genz">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {testimonials.map((testimonial, index) => {
              const distortions = [
                { rotateX: -0.8, rotateY: 0.8, skewX: 0.5, skewY: -0.3 },
                { rotateX: 0.8, rotateY: -0.8, skewX: -0.5, skewY: 0.3 },
                { rotateX: -0.5, rotateY: 0.5, skewX: 0.3, skewY: -0.2 },
                { rotateX: 0.5, rotateY: -0.5, skewX: -0.3, skewY: 0.2 },
              ]
              const dist = distortions[index]

              return (
                <div
                  key={index}
                  className="card-genz bg-white p-6 border-2 border-green-300"
                  style={{
                    transform: `perspective(600px) rotateX(${dist.rotateX}deg) rotateY(${dist.rotateY}deg) skewX(${dist.skewX}deg) skewY(${dist.skewY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-3 border-green-200">
                    <p className="font-semibold text-green-900 text-sm">
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
