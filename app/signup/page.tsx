'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', petName: '', petType: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Đăng Ký</h1>
            <p className="text-xl text-green-100">
              Đăng ký dịch vụ cho thú cưng của bạn ngay hôm nay
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

      {/* Sign Up Form */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {submitted ? (
                <div className="text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800 mb-6">
                    <p className="font-semibold text-xl mb-2">Cảm ơn bạn đã đăng ký!</p>
                    <p>Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để sắp xếp buổi đánh giá miễn phí.</p>
                  </div>
                  <Link
                    href="/"
                    className="text-green-600 hover:text-green-700 font-semibold underline"
                  >
                    Về Trang Chủ
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-center">Điền Thông Tin Đăng Ký</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Tên Chủ Sở Hữu *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Số Điện Thoại *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">
                        Tên Thú Cưng *
                      </label>
                      <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-2">
                        Loại Thú Cưng *
                      </label>
                      <select
                        id="petType"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                      >
                        <option value="">Chọn loại thú cưng</option>
                        <option value="dog">Chó</option>
                        <option value="cat">Mèo</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Ghi Chú
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 resize-none"
                      />
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
                      <p className="font-semibold mb-1">Lưu ý:</p>
                      <p>* Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để sẵn sàng cho daycare.</p>
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95 w-full">
                      Gửi Đăng Ký
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
