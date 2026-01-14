'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

export default function ContactPreview() {
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
    <section className="section-padding bg-gradient-to-br from-teal-50 via-teal-100 to-teal-150 relative overflow-hidden">
      {/* Multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/40 via-teal-150/30 to-teal-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 via-transparent to-teal-100/50"></div>
      
      {/* Smooth wave transition from SignUp section - giống Up For Paws */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 C120,140 240,120 360,140 C480,160 600,140 720,160 C840,180 960,120 1080,140 C1200,160 1320,100 1440,120 L1440,0 L0,0 Z" fill="#ccfbf1"/>
        </svg>
      </div>
      
      {/* Organic decorative blobs */}
      <div className="absolute top-10 right-10 w-20 h-20 md:w-36 md:h-36 organic-blob bg-teal-200/20 opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 md:w-28 md:h-28 organic-blob bg-teal-300/20 opacity-50" style={{ animationDelay: '1.8s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Liên Hệ Chúng Tôi</h2>
          <p className="text-lg text-teal-800 max-w-2xl mx-auto">
            Bạn có câu hỏi về Chò Méo? Chúng tôi chắc chắn có câu trả lời.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-900">Thông Tin Liên Hệ</h3>
            <p className="text-teal-800 mb-6">
              Click bất kỳ link nào bên dưới để liên hệ với chúng tôi!
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <FiPhone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Điện Thoại</p>
                  <p className="text-teal-800">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-200 p-3 rounded-lg">
                  <FiMail className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Email</p>
                  <p className="text-teal-800">hello@chomeo.com</p>
                </div>
              </div>
            </div>

            <p className="text-teal-800 mb-6">
              (Thời gian phản hồi trong vòng 24 giờ)
            </p>

            <div className="flex items-center space-x-4">
              <a href="#" className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors" aria-label="Facebook">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors" aria-label="Instagram">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors" aria-label="Twitter">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-900">Gửi Tin Nhắn</h3>
            {submitted ? (
              <div className="bg-green-200 border-2 border-green-400 rounded-lg p-6 text-green-900">
                <p className="font-semibold mb-2">Cảm ơn bạn đã liên hệ!</p>
                <p>Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-teal-900 mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-teal-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-teal-900 mb-2">
                    Tin Nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 resize-none"
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
