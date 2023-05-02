/** @type {import('tailwindcss').Config} */

// 该方法是为了颜色基础类可以提供设置透明度的快捷方式，
function withOpacityValue(variable) {
  // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}), ${opacityValue})`
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'border-hard': withOpacityValue('--color-border-hard'),
        'border-soft': 'var(--color-border-soft)',
      },
      backgroundColor: {
        'btn-primary': withOpacityValue('--color-btn-primary'),
        'btn-secondary': withOpacityValue('--color-btn-secondary'),
        'border-hard': withOpacityValue('--color-border-hard'),
        'border-soft': 'var(--color-border-soft)',
      },
      borderColor: {
        'border-hard': withOpacityValue('--color-border-hard'),
        'border-soft': 'var(--color-border-soft)',
      },
      colors: {
        'card-bg': withOpacityValue('--color-card-bg'),
      },
    },
  },
  plugins: [],
}
