import React, { SVGProps } from 'react'

import { THEME } from '@/constant/commons'

interface Props<T> extends SVGProps<T> {
  theme?: THEME
}

const SvgComponent = (props: Props<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} className="icon" viewBox="0 0 1024 1024" {...props}>
      <path d="M512.299 831.147a32 32 0 0 1 32 32v42.666a32 32 0 0 1-64 0v-42.666a32 32 0 0 1 32-32zm270.933-93.462 30.165 30.166a32 32 0 1 1-45.248 45.248l-30.165-30.166a32 32 0 0 1 45.248-45.248zm-496.597 0a32 32 0 0 1 0 45.227l-30.187 30.187a32 32 0 0 1-45.227-45.248l30.144-30.166a32 32 0 0 1 45.27 0zM512 234.667c153.173 0 277.333 124.16 277.333 277.333S665.173 789.333 512 789.333 234.667 665.173 234.667 512 358.827 234.667 512 234.667zm0 64c-117.824 0-213.333 95.509-213.333 213.333S394.176 725.333 512 725.333 725.333 629.824 725.333 512 629.824 298.667 512 298.667zM906.112 480a32 32 0 0 1 0 64h-42.667a32 32 0 0 1 0-64h42.667zm-744.96 0a32 32 0 0 1 0 64h-42.667a32 32 0 0 1 0-64h42.667zm652.245-269.099a32 32 0 0 1 0 45.248l-30.165 30.166a32 32 0 0 1-45.248-45.227l30.165-30.187a32 32 0 0 1 45.248 0zm-556.949 0 30.187 30.166a32 32 0 1 1-45.27 45.248L211.2 256.149a32 32 0 1 1 45.248-45.248zm255.85-124.714a32 32 0 0 1 32 32v42.666a32 32 0 0 1-64 0v-42.666a32 32 0 0 1 32-32z" />
    </svg>
  )
}
export default SvgComponent
