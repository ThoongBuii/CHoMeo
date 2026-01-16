'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
  imageAlt: string
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Chò Méo",
      subtitle: "Dog Care #1 TP.HCM",
      description: "Chăm sóc chuyên nghiệp, tận tâm và đáng tin cậy cho thú cưng của bạn",
      buttonText: "Liên Hệ Ngay",
      buttonLink: "/contact",
      image: "/images/hero-slide-1.svg",
      imageAlt: "Happy dog at Chò Méo daycare",
    },
    {
      id: 2,
      title: "Đi Dạo Cùng Chò Méo",
      subtitle: "Dịch Vụ Đi Dạo Cho Chó",
      description: "Dịch vụ đi dạo sẽ thỏa mãn nhu cầu khám phá và tập thể dục hàng ngày của thú cưng bạn!",
      buttonText: "Tìm Hiểu Thêm",
      buttonLink: "/services",
      image: "/images/hero-slide-2.svg",
      imageAlt: "Dog walking service",
    },
    {
      id: 3,
      title: "Hoạt Động Vui Chơi",
      subtitle: "Có Ý Nghĩa Cho Thú Cưng",
      description: "Chương trình daycare của chúng tôi được thiết kế để tham gia vào hành vi bản năng của thú cưng, mang lại một ngày vui vẻ và ý nghĩa!",
      buttonText: "Xem Chương Trình",
      buttonLink: "/curriculum",
      image: "/images/hero-slide-3.svg",
      imageAlt: "Fun activities for pets",
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
    <section className="relative h-screen overflow-hidden" style={{ backgroundColor: '#fef9e7', perspective: '1500px' }}>
      {/* Background base - beige/cream nhẹ nhàng như Up For Paws - đồng nhất cho tất cả slides */}
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
            {/* Background đồng nhất cho tất cả slides - không thay đổi */}
            <div className="h-full relative">
              <div className="container-custom h-full">
                <div className="grid md:grid-cols-2 gap-8 h-full items-center" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Left Side - Text Content với spatial distortion */}
                  <div className="text-center md:text-left space-y-6 fade-in relative z-10" style={{ transform: 'perspective(1000px) rotateY(1deg) rotateX(-0.5deg) skewX(-0.5deg)' }}>
                    <div className="relative inline-block">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                        {slide.title}
                      </h1>
                      {/* Decorative organic shape behind title */}
                      <div className="absolute -z-10 -top-4 -left-4 w-full h-full organic-blob bg-green-200/20 opacity-50"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold asymmetric-layout inline-block">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href={slide.buttonLink}
                        className="btn-genz-primary group inline-flex items-center space-x-3 relative overflow-hidden"
                      >
                        <span className="relative z-10">{slide.buttonText}</span>
                        <span className="text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-bounce-genz">🐾</span>
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-teal-200 to-brown-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Side - Image với spatial distortion */}
                  <div className="flex items-center justify-center relative" style={{ transform: 'perspective(1000px) rotateY(-1deg) rotateX(0.5deg) skewX(0.5deg)' }}>
                    <div className="relative z-10 w-full max-w-md lg:max-w-lg">
                      <div className="relative float-animation" style={{ transform: 'rotate(-1deg)' }}>
                        <Image
                          src={slide.image}
                          alt={slide.imageAlt}
                          width={600}
                          height={600}
                          className="w-full h-auto opacity-90"
                          priority={index === 0}
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 blur-3xl opacity-20 bg-green-300/30 -z-10 rounded-full"></div>
                      </div>
                    </div>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
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
                ? 'bg-green-600 w-8'
                : 'bg-gray-400 w-3 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom smooth wave - blend tự nhiên với section tiếp theo (teal) */}
      <div className="absolute bottom-0 left-0 right-0 z-0" style={{ height: '150px' }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,150 C120,50 240,70 360,100 C480,130 600,110 720,130 C840,150 960,90 1080,110 C1200,130 1320,70 1440,90 L1440,150 L0,150 Z" fill="#ccfbf1"/>
        </svg>
      </div>
    </section>
  )
}
