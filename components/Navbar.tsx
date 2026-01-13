'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown, FiShoppingCart } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  // Navigation items bên trái logo
  const leftNavItems = [
    { name: 'Về Chúng Tôi', href: '/about' },
    { name: 'Chương Trình', href: '/curriculum' },
    { name: 'Dịch Vụ', href: '/services' },
    { name: 'Bảng Giá', href: '/rates' },
    { name: 'Cửa Hàng', href: '/shop' },
  ]

  const resourcesItems = [
    { name: 'Blog & Tin Tức', href: '/resources/blog' },
    { name: 'Tuyển Dụng', href: '/resources/jobs' },
    { name: 'Đánh Giá', href: '/resources/reviews' },
  ]

  return (
    <nav className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 shadow-md sticky top-0 z-50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-450/30 via-transparent to-green-500/20"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6 flex-1">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-green-900 hover:text-green-700 transition-colors font-semibold text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo ở giữa */}
          <Link href="/" className="flex flex-col items-center justify-center flex-shrink-0 mx-8">
            <span className="text-2xl md:text-3xl font-bold text-green-900">Chò Méo</span>
            <span className="text-xs md:text-sm text-green-800 font-medium">Trường Học Thú Cưng</span>
          </Link>

          {/* Right Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-green-900 hover:text-green-700 transition-colors font-semibold flex items-center space-x-1 text-sm">
                <span>Tài Nguyên</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-green-100 rounded-lg shadow-lg border-2 border-green-300 py-2 z-50">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-green-900 hover:bg-green-200 hover:text-green-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-green-900 hover:text-green-700 transition-colors font-semibold text-sm"
            >
              Liên Hệ
            </Link>

            {/* Sign Up Button - màu xanh nước biển (teal) */}
            <Link
              href="/signup"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-2 text-sm"
            >
              <span>Đăng Ký</span>
              <span className="text-sm">🐾</span>
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/shop"
              className="relative p-2 text-green-900 hover:text-green-700 transition-colors"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-green-900"
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
          <div className="lg:hidden py-4 space-y-4 border-t border-green-300 mt-2">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-green-900 hover:text-green-700 transition-colors font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between w-full text-green-900 hover:text-green-700 transition-colors font-semibold"
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
                      className="block text-green-800 hover:text-green-700 transition-colors"
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
              className="block text-green-900 hover:text-green-700 transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Liên Hệ
            </Link>
            <Link
              href="/signup"
              className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Đăng Ký
            </Link>
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-green-900 hover:text-green-700 transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>Cửa Hàng (0 items)</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
