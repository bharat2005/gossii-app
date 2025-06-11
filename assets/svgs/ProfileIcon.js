import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent({size, focused, color}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={focused ? color : 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={12} cy={6} r={4} stroke= {focused ? color : "gray"} strokeWidth={1.5} />
      <Path
        opacity={1}
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5z"
        stroke= {focused ? color : "gray"}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgComponent
