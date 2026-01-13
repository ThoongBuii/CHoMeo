'use client'

import { useState } from 'react'
import { FiMail } from 'react-icons/fi'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-green-100 to-green-150 relative overflow-hidden">
      {/* Multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 via-green-150/40 to-green-200/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/70 via-transparent to-green-100/60"></div>
      
      {/* Jagged decorative line at top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L120,28 L240,8 L360,32 L480,12 L600,26 L720,6 L840,30 L960,10 L1080,28 L1200,8 L1320,25 L1440,15 L1440,0 Z" fill="white"/>
        </svg>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FiMail className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">
            Đăng Ký Nhận Bản Tin
          </h2>
          {submitted ? (
            <div className="bg-green-200 border-2 border-green-400 rounded-lg p-4 text-green-900">
              <p className="font-semibold">Cảm ơn bạn đã đăng ký!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                required
                className="flex-1 px-4 py-3 bg-white border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Đăng Ký
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
