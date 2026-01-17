'use client'

import { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/config/emailjs'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    // Owner Info
    ownerName: '',
    email: '',
    phone: '',
    // Service
    service: '',
    address: '',
    country: 'Vietnam',
    // Dog Info
    dogName: '',
    breed: '',
    sex: '',
    ageYears: '',
    ageMonths: '',
    weight: '',
    // How did you hear
    source: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    // Format message cho email
    const serviceLabels: Record<string, string> = {
      'daycare-transport': 'Daycare + Đưa Đón 2 Chiều',
      'daycare-only': 'Daycare (Không Đưa Đón)',
      'adventures': 'Chò Méo Adventures (Dog Walks)',
    }

    const sourceLabels: Record<string, string> = {
      'facebook': 'Facebook',
      'instagram': 'Instagram',
      'search': 'Công Cụ Tìm Kiếm',
      'friend': 'Bạn Bè Giới Thiệu',
      'other': 'Khác',
    }

    const message = `
📋 THÔNG TIN ĐĂNG KÝ MỚI

👤 THÔNG TIN CHỦ SỞ HỮU:
- Tên: ${formData.ownerName}
- Email: ${formData.email}
- Số điện thoại: ${formData.phone}

🐕 THÔNG TIN THÚ CƯNG:
- Tên thú cưng: ${formData.dogName}
- Giống: ${formData.breed}
- Giới tính: ${formData.sex === 'male' ? 'Đực' : 'Cái'}
- Tuổi: ${formData.ageYears} năm ${formData.ageMonths} tháng
- Cân nặng: ${formData.weight} kg

🎯 DỊCH VỤ:
- Dịch vụ: ${serviceLabels[formData.service] || formData.service}
${formData.address ? `- Địa chỉ đưa đón: ${formData.address}, ${formData.country}` : ''}

📢 NGUỒN:
- Biết đến qua: ${sourceLabels[formData.source] || formData.source}
    `.trim()

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.ownerName,
          from_email: formData.email,
          message: message,
        },
        EMAILJS_CONFIG.publicKey
      )
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          ownerName: '',
          email: '',
          phone: '',
          service: '',
          address: '',
          country: 'Vietnam',
          dogName: '',
          breed: '',
          sex: '',
          ageYears: '',
          ageMonths: '',
          weight: '',
          source: '',
        })
      }, 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Không thể gửi đăng ký. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại: +84 123 456 789')
    } finally {
      setSending(false)
    }
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
              <span className="text-6xl animate-bounce-genz">📝</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-genz">
              Đăng Ký
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Đăng ký dịch vụ cho thú cưng của bạn ngay hôm nay
            </p>
          </div>
        </div>

        {/* Bottom smooth wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#fed7aa"/>
          </svg>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="section-padding bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,100 240,80 360,110 C480,140 600,120 720,130 C840,140 960,100 1080,110 C1200,120 1320,80 1440,90 L1440,0 L0,0 Z" fill="#fed7aa"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border-2 border-orange-300"
                style={{ transform: 'perspective(700px) rotateY(0.3deg) rotateX(-0.3deg)' }}
              >
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Cảm Ơn Bạn Đã Đăng Ký!</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để sắp xếp buổi đánh giá MIỄN PHÍ cho thú cưng của bạn.
                </p>
                <Link
                  href="/"
                  className="btn-genz-primary inline-flex items-center space-x-2"
                >
                  <span>Về Trang Chủ</span>
                  <span>🏠</span>
                </Link>
              </div>
            ) : (
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-300 relative z-20"
                style={{ transform: 'perspective(700px) rotateY(-0.3deg) rotateX(0.3deg)' }}
              >
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">Bắt Đầu Nào!</h2>
                <p className="text-center text-gray-700 mb-8">Điền thông tin để đăng ký dịch vụ</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                      Dịch vụ bạn quan tâm? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="daycare-transport">Daycare + Đưa Đón 2 Chiều</option>
                      <option value="daycare-only">Daycare (Không Đưa Đón)</option>
                      <option value="adventures">Chò Méo Adventures (Dog Walks)</option>
                    </select>
                  </div>

                  {/* Owner Info */}
                  <div className="border-t-2 border-orange-200 pt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Thông Tin Chủ Sở Hữu</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-900 mb-2">
                          Tên Chủ Sở Hữu *
                        </label>
                        <input
                          type="text"
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Số Điện Thoại *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+84"
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address (if transport selected) */}
                  {(formData.service === 'daycare-transport' || formData.service === 'adventures') && (
                    <div className="border-t-2 border-orange-200 pt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Địa Chỉ Đưa Đón</h3>
                      <p className="text-sm text-gray-700 mb-4">Vui lòng cung cấp địa chỉ cho dịch vụ đưa đón</p>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Địa chỉ"
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        >
                          <option value="Vietnam">Việt Nam</option>
                          <option value="Singapore">Singapore</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Dog Info */}
                  <div className="border-t-2 border-orange-200 pt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Thông Tin Thú Cưng</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="dogName" className="block text-sm font-medium text-gray-900 mb-2">
                          Tên Thú Cưng *
                        </label>
                        <input
                          type="text"
                          id="dogName"
                          name="dogName"
                          value={formData.dogName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="breed" className="block text-sm font-medium text-gray-900 mb-2">
                          Giống *
                        </label>
                        <input
                          type="text"
                          id="breed"
                          name="breed"
                          value={formData.breed}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-900 mb-2">
                          Giới Tính *
                        </label>
                        <select
                          id="sex"
                          name="sex"
                          value={formData.sex}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        >
                          <option value="">Chọn giới tính</option>
                          <option value="male">Đực</option>
                          <option value="female">Cái</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="ageYears" className="block text-sm font-medium text-gray-900 mb-2">
                            Tuổi (năm) *
                          </label>
                          <input
                            type="number"
                            id="ageYears"
                            name="ageYears"
                            value={formData.ageYears}
                            onChange={handleChange}
                            required
                            min="0"
                            placeholder="0"
                            className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="ageMonths" className="block text-sm font-medium text-gray-900 mb-2">
                            Tuổi (tháng) *
                          </label>
                          <input
                            type="number"
                            id="ageMonths"
                            name="ageMonths"
                            value={formData.ageMonths}
                            onChange={handleChange}
                            required
                            min="0"
                            max="11"
                            placeholder="0"
                            className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="weight" className="block text-sm font-medium text-gray-900 mb-2">
                            Cân Nặng (kg) *
                          </label>
                          <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                            min="0"
                            step="0.1"
                            placeholder="0"
                            className="w-full px-4 py-3 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div className="border-t-2 border-orange-200 pt-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Bạn biết đến chúng tôi qua đâu? *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'facebook', label: 'Facebook' },
                        { value: 'instagram', label: 'Instagram' },
                        { value: 'search', label: 'Công Cụ Tìm Kiếm' },
                        { value: 'friend', label: 'Bạn Bè Giới Thiệu' },
                        { value: 'other', label: 'Khác' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="source"
                            value={option.value}
                            checked={formData.source === option.value}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 text-teal-600 border-orange-400 focus:ring-teal-500"
                          />
                          <span className="text-gray-900 group-hover:text-teal-700 transition-colors">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="bg-teal-100/60 border-2 border-teal-300 rounded-lg p-4 text-sm text-gray-800">
                    <p className="font-semibold mb-1">Lưu ý:</p>
                    <p>* Thú cưng lần đầu cần trải qua đánh giá MIỄN PHÍ để đảm bảo phù hợp với chương trình daycare.</p>
                  </div>

                  {error && (
                    <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-red-800 text-sm">
                      <p className="font-semibold">❌ Lỗi:</p>
                      <p>{error}</p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={sending}
                    className="btn-genz-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                    style={{ transform: 'perspective(500px) rotateY(0.2deg)' }}
                  >
                    {sending ? 'Đang gửi... ⏳' : 'Gửi Đăng Ký 🚀'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 -z-10" style={{ height: '150px' }}>
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,90 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
          </svg>
        </div>
      </section>
    </div>
  )
}
