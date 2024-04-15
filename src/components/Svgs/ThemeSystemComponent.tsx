import React, { SVGProps } from 'react'

import { THEME } from '@/constant/commons'

interface Props<T> extends SVGProps<T> {
  theme?: THEME
}

const SvgComponent = (props: Props<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} className="icon" viewBox="0 0 1024 1024" {...props}>
      <path d="M931.43 143.611c-13.315 0-22.192 8.877-22.192 22.192v537.049H114.762v-532.61h719.023c13.315 0 22.192-8.877 22.192-22.192s-8.877-22.192-22.192-22.192H114.762c-24.412 0-44.384 17.753-44.384 39.945V707.29c0 22.192 19.972 39.946 44.384 39.946h377.265c0 2.22-2.22 4.439-2.22 6.658v133.152H250.134c-13.315 0-22.192 8.877-22.192 22.192s8.877 22.192 22.192 22.192h523.734c13.315 0 22.192-8.876 22.192-22.192s-8.877-22.192-22.192-22.192H534.192V753.894c0-2.22 0-4.439-2.22-6.658h377.266c24.412 0 44.384-17.754 44.384-39.946V165.803c0-13.315-8.876-22.192-22.192-22.192z" />
    </svg>
  )
}
export default SvgComponent
