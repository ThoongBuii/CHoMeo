import Link from 'next/link'
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brown-700 via-brown-800 to-brown-900 text-white relative overflow-hidden">
      {/* Multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-750/50 via-brown-800/40 to-brown-850/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brown-700/60 via-brown-800/50 to-brown-900/70"></div>
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chò Méo</h3>
            <p className="text-brown-200">
              Dịch vụ chăm sóc và giáo dục thú cưng chuyên nghiệp, tận tâm và đáng tin cậy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-brown-200">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-white transition-colors">
                  Chương Trình
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="#rates" className="hover:text-white transition-colors">
                  Bảng Giá
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Tài Nguyên</h4>
            <ul className="space-y-2 text-brown-200">
              <li>
                <Link href="#blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-white transition-colors">
                  Đánh Giá
                </Link>
              </li>
              <li>
                <Link href="#jobs" className="hover:text-white transition-colors">
                  Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-brown-200">
              <li className="flex items-center space-x-2">
                <FiPhone className="w-5 h-5" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="w-5 h-5" />
                <span>hello@chomeo.com</span>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <FiTwitter className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center text-brown-200">
          <p>&copy; {new Date().getFullYear()} Chò Méo. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
