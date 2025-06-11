import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent({focused, size, color, fromTop}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fromTop ? 'rgb(239, 239, 239)' : focused ? color : 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={11.5} cy={11.5} r={9.5} stroke={ focused ? color : "gray" } strokeWidth={1.5} />
      <Path
        d="M18.5 18.5L22 22"
        stroke={ focused ? color: "gray"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
