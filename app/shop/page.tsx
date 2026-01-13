import type { Metadata } from 'next'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Cửa Hàng - Chò Méo',
  description: 'Mua sắm các sản phẩm cho thú cưng tại cửa hàng Chò Méo',
}

export default function ShopPage() {
  const products = [
    {
      name: 'Thức Ăn Premium',
      price: '500,000',
      image: '🍖',
      description: 'Thức ăn chất lượng cao cho thú cưng',
    },
    {
      name: 'Đồ Chơi Tương Tác',
      price: '200,000',
      image: '🎾',
      description: 'Đồ chơi kích thích trí tuệ và vận động',
    },
    {
      name: 'Dây Dắt Cao Cấp',
      price: '300,000',
      image: '🦮',
      description: 'Dây dắt chắc chắn, thoải mái cho thú cưng',
    },
    {
      name: 'Bát Ăn Thông Minh',
      price: '250,000',
      image: '🥣',
      description: 'Bát ăn chống trượt, dễ vệ sinh',
    },
    {
      name: 'Giường Ngủ',
      price: '800,000',
      image: '🛏️',
      description: 'Giường ngủ êm ái, thoáng mát',
    },
    {
      name: 'Quần Áo Thời Trang',
      price: '400,000',
      image: '👕',
      description: 'Quần áo đẹp, chất lượng cao',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cửa Hàng</h1>
            <p className="text-xl text-green-100">
              Sản phẩm chất lượng cao cho thú cưng của bạn
            </p>
          </div>
        </div>
        {/* Jagged line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L80,25 L160,8 L240,30 L320,5 L400,28 L480,10 L560,32 L640,8 L720,26 L800,6 L880,29 L960,9 L1040,27 L1120,11 L1200,25 L1280,7 L1360,30 L1440,12 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-12 text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{product.price} VNĐ</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                      <FiShoppingCart className="w-5 h-5" />
                      <span>Thêm</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * Sản phẩm có thể thay đổi. Vui lòng liên hệ để biết thêm chi tiết.
            </p>
            <Link
              href="/contact"
              className="text-green-600 hover:text-green-700 font-semibold underline"
            >
              Liên Hệ Mua Hàng
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
