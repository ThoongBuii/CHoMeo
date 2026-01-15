'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll để thay đổi navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items bên trái logo
  const leftNavItems = [
    { name: 'Về Chúng Tôi', href: '/about' },
    { name: 'Chương Trình', href: '/curriculum' },
    { name: 'Dịch Vụ', href: '/services' },
    { name: 'Bảng Giá', href: '/rates' },
  ]

  const resourcesItems = [
    { name: 'Blog & Tin Tức', href: '/resources/blog' },
    { name: 'Tuyển Dụng', href: '/resources/jobs' },
    { name: 'Đánh Giá', href: '/resources/reviews' },
  ]

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-br from-green-50 via-amber-50 to-green-50'
      }`}
      style={!isScrolled ? { backgroundColor: '#fef9e7' } : {}}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium text-sm ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-green-600' 
                    : 'text-gray-800 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo ở giữa */}
          <Link href="/" className="flex flex-col items-center justify-center flex-shrink-0 mx-8 group">
            <span className={`text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-green-600' : 'text-gray-900'
            }`}>
              Chò Méo
            </span>
            <span className={`text-xs md:text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-gray-700'
            }`}>
              Trường Học Thú Cưng
            </span>
          </Link>

          {/* Right Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className={`transition-colors font-medium flex items-center space-x-1 text-sm ${
                isScrolled 
                  ? 'text-gray-800 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}>
                <span>Tài Nguyên</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`transition-colors font-medium text-sm ${
                isScrolled 
                  ? 'text-gray-800 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              Liên Hệ
            </Link>

            {/* Sign Up Button - màu teal */}
            <Link
              href="/signup"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 text-sm shadow-md hover:shadow-lg"
            >
              <span>Đăng Ký</span>
              <span className="text-base">🐾</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden py-4 space-y-4 border-t mt-2 ${
            isScrolled ? 'border-gray-200 bg-white' : 'border-gray-200 bg-white/95 backdrop-blur-sm'
          }`}>
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-green-600' 
                    : 'text-gray-800 hover:text-green-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`flex items-center justify-between w-full transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-green-600' 
                    : 'text-gray-800 hover:text-green-600'
                }`}
              >
                <span>Tài Nguyên</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`block transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-800 hover:text-green-600' 
                  : 'text-gray-800 hover:text-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Liên Hệ
            </Link>
            <Link
              href="/signup"
              className="block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Đăng Ký
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
