import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({color, size, focused}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={focused ? color : 'white'}
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 01-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.775 25.775 0 0014.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 01-.693-2.375z"
        stroke={focused ? color : 'gray'}
        strokeWidth={1.5}
      />
      <Path
        opacity={0.5}
        d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
        stroke={focused ? color : 'gray'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
