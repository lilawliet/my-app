import React, { SVGProps } from 'react'

import { THEME } from '@/constant/commons'

interface Props<T> extends SVGProps<T> {
  theme?: THEME
}
const SvgComponent = (props: Props<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} className="icon" viewBox="0 0 1024 1024" {...props}>
      <path d="M512 117.333c-6.25 0-12.544.15-18.837.427a32 32 0 0 0-28.886 42.197C474.667 190.677 480 222.976 480 256c0 168.405-139.37 305.707-313.13 309.27l-7.958.085a32 32 0 0 0-30.592 39.488C170.73 780.672 328.683 906.667 512 906.667c217.963 0 394.667-176.704 394.667-394.667S729.963 117.333 512 117.333zm26.283 74.091-1.814-9.195 2.326.171c170.09 13.653 303.872 155.99 303.872 329.6 0 182.613-148.054 330.667-330.667 330.667l-7.296-.086a330.944 330.944 0 0 1-301.44-211.861l-1.344-3.563.768-.064C394.283 606.656 544 448.491 544 256c0-21.824-1.92-43.413-5.717-64.576z" />
    </svg>
  )
}
export default SvgComponent
