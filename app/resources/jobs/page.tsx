import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tuyển Dụng - Chò Méo',
  description: 'Cơ hội nghề nghiệp tại Chò Méo',
}

export default function JobsPage() {
  const jobs = [
    {
      title: 'Nhân Viên Chăm Sóc Thú Cưng',
      type: 'Full-time',
      location: 'Hà Nội',
      description: 'Tìm kiếm người yêu thú cưng, có kinh nghiệm chăm sóc và huấn luyện.',
    },
    {
      title: 'Huấn Luyện Viên',
      type: 'Part-time',
      location: 'Hà Nội',
      description: 'Cần người có chứng chỉ huấn luyện thú cưng, phương pháp tích cực.',
    },
    {
      title: 'Nhân Viên Văn Phòng',
      type: 'Full-time',
      location: 'Hà Nội',
      description: 'Quản lý đặt chỗ, liên hệ khách hàng và hỗ trợ hành chính.',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tuyển Dụng</h1>
            <p className="text-xl text-teal-100">Tham gia đội ngũ của chúng tôi</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L100,25 L200,10 L300,30 L400,5 L500,28 L600,8 L700,32 L800,12 L900,26 L1000,6 L1100,29 L1200,9 L1300,27 L1400,11 L1440,20 L1440,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link
                  href="/contact"
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
                >
                  Ứng Tuyển
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
