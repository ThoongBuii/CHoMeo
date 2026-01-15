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
        // Xanh lá cây (Green) - tươi sáng, phù hợp Gen Z
        green: {
          50: '#f0fdf4',   // Rất nhạt - backgrounds
          100: '#dcfce7',  // Nhạt - backgrounds
          150: '#c8f9da',  // Trung gian
          200: '#bbf7d0',  // Nhạt vừa - cards
          250: '#aef5c6',  // Trung gian
          300: '#86efac',  // Sáng - accents
          350: '#6ee99f',  // Trung gian
          400: '#4ade80',  // Tươi - buttons
          450: '#36d973',  // Trung gian
          500: '#22c55e',  // Chính - primary
          550: '#1db851',  // Trung gian
          600: '#16a34a',  // Đậm vừa - hover
          650: '#149244',  // Trung gian
          700: '#15803d',  // Đậm - text
          750: '#137a3a',  // Trung gian
          800: '#166534',  // Rất đậm
          850: '#155f2f',  // Trung gian
          900: '#14532d',  // Cực đậm
        },
        // Xanh nước biển (Teal) - tươi sáng, phù hợp Gen Z
        teal: {
          50: '#f0fdfa',   // Rất nhạt - backgrounds
          100: '#ccfbf1',  // Nhạt - backgrounds
          150: '#b3f9ec',  // Trung gian
          200: '#99f6e4',  // Nhạt vừa - cards
          250: '#80f3dd',  // Trung gian
          300: '#5eead4',  // Sáng - accents
          350: '#45e7cd',  // Trung gian
          400: '#2dd4bf',  // Tươi - buttons
          450: '#1acfb8',  // Trung gian
          500: '#14b8a6',  // Chính - secondary
          550: '#12a896',  // Trung gian
          600: '#0d9488',  // Đậm vừa - hover
          650: '#0c8a7e',  // Trung gian
          700: '#0f766e',  // Đậm - text
          750: '#0e6e66',  // Trung gian
          800: '#115e59',  // Rất đậm
          850: '#105651',  // Trung gian
          900: '#134e4a',  // Cực đậm
        },
        // Nâu ấm/Cam nhẹ (Warm Brown/Peach) - tươi sáng, phù hợp Gen Z
        brown: {
          50: '#fff7ed',   // Rất nhạt - backgrounds (cream)
          100: '#ffedd5',  // Nhạt - backgrounds (peach light)
          150: '#ffe4c4',  // Trung gian
          200: '#fed7aa',  // Nhạt vừa - cards (peach)
          250: '#fdcfa0',  // Trung gian
          300: '#fdba74',  // Sáng - accents (coral)
          350: '#fca96a',  // Trung gian
          400: '#fb923c',  // Tươi - buttons (orange)
          450: '#fa7f2a',  // Trung gian
          500: '#f97316',  // Chính - accent (orange)
          550: '#e8660d',  // Trung gian
          600: '#ea580c',  // Đậm vừa - hover
          650: '#d14d0b',  // Trung gian
          700: '#c2410c',  // Đậm - text
          750: '#b33a0b',  // Trung gian
          800: '#9a3412',  // Rất đậm
          850: '#812d0f',  // Trung gian
          900: '#7c2d12',  // Cực đậm
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
        // Background base colors (giống Up For Paws)
        cream: {
          DEFAULT: '#fef9e7',  // Main background
          light: '#fffbeb',    // Light background
        },
      },
    },
  },
  plugins: [],
}
