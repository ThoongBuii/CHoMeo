'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
  bgColor: string
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Chò Méo",
      subtitle: "Trường Học Thú Cưng #1",
      description: "Chăm sóc chuyên nghiệp, tận tâm và đáng tin cậy cho thú cưng của bạn",
      buttonText: "Liên Hệ Ngay",
      buttonLink: "/contact",
      image: "🐕",
      bgColor: "from-green-500 to-green-700",
    },
    {
      id: 2,
      title: "Đi Dạo Cùng Chò Méo",
      subtitle: "Dịch Vụ Đi Dạo Cho Chó",
      description: "Dịch vụ đi dạo sẽ thỏa mãn nhu cầu khám phá và tập thể dục hàng ngày của thú cưng bạn!",
      buttonText: "Tìm Hiểu Thêm",
      buttonLink: "/services",
      image: "🚶",
      bgColor: "from-teal-500 to-teal-700",
    },
    {
      id: 3,
      title: "Hoạt Động Vui Chơi",
      subtitle: "Có Ý Nghĩa Cho Thú Cưng",
      description: "Chương trình daycare của chúng tôi được thiết kế để tham gia vào hành vi bản năng của thú cưng, mang lại một ngày vui vẻ và ý nghĩa!",
      buttonText: "Xem Chương Trình",
      buttonLink: "/curriculum",
      image: "🎾",
      bgColor: "from-brown-500 to-brown-700",
    },
    {
      id: 4,
      title: "Daycare Chuyên Nghiệp",
      subtitle: "Chăm Sóc Hàng Ngày",
      description: "Cơ sở vật chất hiện đại, đội ngũ được đào tạo chuyên nghiệp, phương pháp tích cực và cập nhật hình ảnh hàng ngày",
      buttonText: "Xem Dịch Vụ",
      buttonLink: "/services",
      image: "🏠",
      bgColor: "from-green-500 to-green-700",
    },
    {
      id: 5,
      title: "Huấn Luyện Tích Cực",
      subtitle: "Phương Pháp Không Ép Buộc",
      description: "Sử dụng positive reinforcement để huấn luyện thú cưng một cách vui vẻ và hiệu quả",
      buttonText: "Tìm Hiểu",
      buttonLink: "/curriculum",
      image: "🎓",
      bgColor: "from-teal-500 to-teal-700",
    },
    {
      id: 6,
      title: "Hoạt Động Ngoài Trời",
      subtitle: "Khám Phá & Vui Chơi",
      description: "Mỗi ngày chúng tôi đưa thú cưng đi dạo, đến công viên hoặc khám phá những nơi mới",
      buttonText: "Xem Thêm",
      buttonLink: "/curriculum",
      image: "🌳",
      bgColor: "from-brown-500 to-brown-700",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Đổi slide mỗi 6 giây

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden" style={{ backgroundColor: '#fef9e7' }}>
      {/* Background base - beige/cream nhẹ nhàng như Up For Paws */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-green-50"></div>
      
      {/* Top left decorative curve - giống Up For Paws */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-30 z-0">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,250 Q125,100 250,175 T500,250 L500,0 L0,0 Z" fill="url(#topLeftGradient)" />
          <defs>
            <linearGradient id="topLeftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#5eead4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Carousel Container */}
      <div className="relative h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.bgColor} text-white`}>
              <div className="container-custom h-full">
                <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                  {/* Left Side - Text Content với thiết kế đột phá */}
                  <div className="text-center md:text-left space-y-6 fade-in relative z-10">
                    <div className="relative inline-block">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient-animated">
                        {slide.title}
                      </h1>
                      {/* Decorative organic shape behind title */}
                      <div className="absolute -z-10 -top-4 -left-4 w-full h-full organic-blob bg-white/10 opacity-50"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold asymmetric-layout inline-block">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href={slide.buttonLink}
                        className="group inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-1 active:scale-95 shadow-2xl relative overflow-hidden"
                      >
                        <span className="relative z-10">{slide.buttonText}</span>
                        <span className="text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300">🐾</span>
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-teal-200 to-brown-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Side - Image/Icon với thiết kế đột phá */}
                  <div className="flex items-center justify-center relative">
                    <div className="relative z-10">
                      <div className="text-9xl md:text-[12rem] lg:text-[16rem] opacity-90 float-animation relative">
                        {slide.image}
                        {/* Glow effect */}
                        <div className="absolute inset-0 blur-3xl opacity-30 bg-white/50 -z-10"></div>
                      </div>
                    </div>
                    {/* Multiple organic blob shapes - tạo độ sâu */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 organic-blob bg-white/15 absolute float-animation"></div>
                      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 organic-blob bg-white/8 absolute float-animation" style={{ animationDelay: '1s' }}></div>
                      <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 organic-blob bg-white/5 absolute float-animation" style={{ animationDelay: '2s' }}></div>
                    </div>
                    {/* Asymmetric decorative elements */}
                    <div className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32 organic-blob bg-white/10 asymmetric-layout"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 md:w-24 md:h-24 organic-blob bg-white/10 asymmetric-layout-reverse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 w-3 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom smooth wave bands - giống Up For Paws với nhiều lớp và độ cong lớn hơn */}
      {/* Dark teal/green wave - layer trên cùng - độ cong lớn và mượt mà hơn */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '180px' }}>
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,180 C120,40 240,60 360,100 C480,140 600,120 720,140 C840,160 960,100 1080,120 C1200,140 1320,80 1440,100 L1440,180 L0,180 Z" fill="#0d9488"/>
        </svg>
      </div>
      
      {/* Brown/orange wave - layer dưới - độ cong lớn và mượt mà hơn, tạo độ sâu */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,150 C100,30 200,50 320,80 C440,110 560,90 680,110 C800,130 920,70 1040,90 C1160,110 1280,50 1440,70 L1440,150 L0,150 Z" fill="#d97706"/>
        </svg>
      </div>
    </section>
  )
}
