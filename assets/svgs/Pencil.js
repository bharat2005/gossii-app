import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({size}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.287 3.152l-.927.927-8.521 8.52h0c-.577.578-.866.867-1.114 1.185a6.556 6.556 0 00-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281-.268.802a1.06 1.06 0 001.342 1.342l.802-.268 3.281-1.094h0c.775-.258 1.162-.387 1.526-.56.43-.205.836-.456 1.211-.749.318-.248.607-.537 1.184-1.114h0l8.521-8.521.927-.927a3.932 3.932 0 00-5.561-5.561z"
        stroke="white"
        strokeWidth={1.5}
      />
      <Path
        opacity={1}
        d="M14.36 4.078s.116 1.97 1.854 3.708c1.738 1.738 3.707 1.853 3.707 1.853M4.198 21.678L2.322 19.8"
        stroke="white"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgComponent
