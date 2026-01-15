'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
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

  return (
    <footer className="bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 text-gray-900 relative overflow-hidden">
      {/* Top transition wave - blend tự nhiên với section trên (teal) */}
      <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        {/* Contact Us Section - 2 columns giống Up For Paws */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12" style={{ transformStyle: 'preserve-3d' }}>
          {/* Contact Info - Left Column */}
          <div style={{ transform: 'perspective(800px) rotateY(-1deg) rotateX(0.5deg) skewX(-0.5deg)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Liên Hệ Chúng Tôi</h2>
            <p className="text-lg text-gray-800 mb-6">
              Bạn có câu hỏi về Chò Méo? Chúng tôi chắc chắn có câu trả lời.
            </p>
            <p className="text-gray-800 mb-8">
              Click bất kỳ link nào bên dưới để liên hệ với chúng tôi!
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors" aria-label="Facebook">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors" aria-label="Instagram">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors" aria-label="Twitter">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gray-900" />
                <span className="text-gray-800">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gray-900" />
                <span className="text-gray-800">hello@chomeo.com</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm">
              (Thời gian phản hồi trong vòng 24 giờ)
            </p>
          </div>

          {/* Contact Form - Right Column */}
          <div style={{ transform: 'perspective(800px) rotateY(1deg) rotateX(-0.5deg) skewX(0.5deg)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Gửi Tin Nhắn</h2>
            {submitted ? (
              <div className="bg-green-200 border-2 border-green-400 rounded-lg p-6 text-green-900">
                <p className="font-semibold mb-2">Cảm ơn bạn đã liên hệ!</p>
                <p>Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="footer-name" className="block text-sm font-medium text-gray-900 mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="footer-email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="footer-message" className="block text-sm font-medium text-gray-900 mb-2">
                    Tin Nhắn *
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 resize-none"
                  />
                </div>
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 w-full">
                  Gửi Tin Nhắn
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-400/50 pt-8 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} Chò Méo. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
