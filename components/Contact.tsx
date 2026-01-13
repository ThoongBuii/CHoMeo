'use client'

import { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
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

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-teal-50 to-teal-100 relative overflow-hidden">
      {/* Jagged decorative line at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
        </svg>
      </div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên Hệ Chúng Tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bạn có câu hỏi về Chò Méo? Chúng tôi chắc chắn có câu trả lời.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <FiPhone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold">Điện Thoại</p>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <FiMail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@chomeo.com</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-600">
              (Thời gian phản hồi trong vòng 24 giờ)
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                <p className="font-semibold mb-2">Cảm ơn bạn đã liên hệ!</p>
                <p>Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tin Nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 resize-none"
                  />
                </div>
                <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 active:scale-95 w-full">
                  Gửi Tin Nhắn
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
