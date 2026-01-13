/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Xanh lá cây (Green) - nhiều sắc độ
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          150: '#c8f9da', // Thêm sắc độ trung gian
          200: '#bbf7d0',
          250: '#aef5c6', // Thêm sắc độ trung gian
          300: '#86efac',
          350: '#6ee99f', // Thêm sắc độ trung gian
          400: '#4ade80',
          450: '#36d973', // Thêm sắc độ trung gian
          500: '#22c55e',
          550: '#1db851', // Thêm sắc độ trung gian
          600: '#16a34a',
          650: '#149244', // Thêm sắc độ trung gian
          700: '#15803d',
          750: '#137a3a', // Thêm sắc độ trung gian
          800: '#166534',
          850: '#155f2f', // Thêm sắc độ trung gian
          900: '#14532d',
        },
        // Xanh nước biển (Teal/Cyan) - nhiều sắc độ
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          150: '#b3f9ec', // Thêm sắc độ trung gian
          200: '#99f6e4',
          250: '#80f3dd', // Thêm sắc độ trung gian
          300: '#5eead4',
          350: '#45e7cd', // Thêm sắc độ trung gian
          400: '#2dd4bf',
          450: '#1acfb8', // Thêm sắc độ trung gian
          500: '#14b8a6',
          550: '#12a896', // Thêm sắc độ trung gian
          600: '#0d9488',
          650: '#0c8a7e', // Thêm sắc độ trung gian
          700: '#0f766e',
          750: '#0e6e66', // Thêm sắc độ trung gian
          800: '#115e59',
          850: '#105651', // Thêm sắc độ trung gian
          900: '#134e4a',
        },
        // Màu nâu (Brown/Amber) - nhiều sắc độ
        brown: {
          50: '#fffbeb',
          100: '#fef3c7',
          150: '#fdefb3', // Thêm sắc độ trung gian
          200: '#fde68a',
          250: '#fcdf71', // Thêm sắc độ trung gian
          300: '#fcd34d',
          350: '#fbcb2e', // Thêm sắc độ trung gian
          400: '#fbbf24',
          450: '#fab517', // Thêm sắc độ trung gian
          500: '#f59e0b',
          550: '#e4910a', // Thêm sắc độ trung gian
          600: '#d97706',
          650: '#c86d05', // Thêm sắc độ trung gian
          700: '#b45309',
          750: '#a04a08', // Thêm sắc độ trung gian
          800: '#92400e',
          850: '#84390d', // Thêm sắc độ trung gian
          900: '#78350f',
        },
        // Primary sẽ là xanh lá
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          150: '#c8f9da',
          200: '#bbf7d0',
          250: '#aef5c6',
          300: '#86efac',
          350: '#6ee99f',
          400: '#4ade80',
          450: '#36d973',
          500: '#22c55e',
          550: '#1db851',
          600: '#16a34a',
          650: '#149244',
          700: '#15803d',
          750: '#137a3a',
          800: '#166534',
          850: '#155f2f',
          900: '#14532d',
        },
      },
    },
  },
  plugins: [],
}
