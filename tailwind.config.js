/** @type {import('tailwindcss').Config} */

// 该方法是为了颜色基础类可以提供设置透明度的快捷方式，
// 只适用 rgb(...) 格式, 值为变量类型不适用
// function withOpacityValue(variable) {
//   // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
//   return ({ opacityValue }) => {
//     if (opacityValue === undefined) {
//       return `rgb(var(${variable}))`
//     }
//     return `rgba(var(${variable}), ${opacityValue})`
//   }
// }

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'border-hard': 'var(--color-border-hard)',
        'border-soft': 'var(--color-border-soft)',
      },
      backgroundColor: {
        body: 'var(--color-bg-body)',
        pure: 'var(--color-bg-pure)',
        opposite: 'var(--color-bg-opposite)',
        // 'btn-primary': 'var(--color-btn-primary)',
        // 'btn-secondary': 'var(--color-btn-secondary)',
        'border-hard': 'var(--color-border-hard)',
        'border-soft': 'var(--color-border-soft)',
        'btn-primary': 'var(--color-btn-primary)',
        'btn-primary-active': 'var(--color-btn-primary-active)',
        'btn-secondary': 'var(--color-btn-secondary)',
        'btn-secondary-active': 'var(--color-btn-secondary-active)',
      },
      borderColor: {
        'border-hard': 'var(--color-border-hard)',
        'border-soft': 'var(--color-border-soft)',
      },
      colors: {
        body: 'var(--color-bg-body)',
        'body-bottom': 'var(--color-bg-body-bottom)',
        header: 'var(--color-bg-body-bottom)',
        'card-bg-primary': 'var(--color-card-bg-primary)',
        'btn-primary': 'var(--color-btn-primary-text)',
        'btn-secondary': 'var(--color-btn-secondary-text)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        opposite: 'var(--color-text-opposite)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        opposite: 'var(--color-text-opposite)',
      },
    },
  },
  plugins: [],
}
