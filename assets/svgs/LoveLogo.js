import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"


function SvgComponent(props) {
  return (
    <Svg
      width="60px"
      height="60px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="112.0574981689453 6.440000915527349 275.8850036621094 137.1199981689453"
      style={{
        background: "0 0"
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="editing-gradow-gradient"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="white" />
          <Stop offset={1} stopColor="white" />
        </LinearGradient>
      </Defs>
      <G filter="url(#editing-gradow-filter)">
        <Path
          d="M4.74 0v-44.03h14.14v32.77h22.59V0H4.74zm64.57-44.8q11.39 0 17.6 5.82 6.21 5.83 6.21 16.96 0 11.14-6.21 16.96Q80.7.77 69.31.77T51.74-5.02q-6.17-5.8-6.17-17t6.17-16.99q6.18-5.79 17.57-5.79zm0 10.56q-4.54 0-6.91 2.75t-2.37 7.43v4.09q0 4.67 2.37 7.43 2.37 2.75 6.91 2.75 4.55 0 6.95-2.75 2.4-2.76 2.4-7.43v-4.09q0-4.68-2.4-7.43t-6.95-2.75zM129.09 0H112.7L97.09-44.03h15.1l8.83 29.44h.26l8.9-29.44h14.46L129.09 0zm21.44 0v-44.03h38.08v10.56h-23.94v6.08h20.48v10.11h-20.48v6.72h24.39V0h-38.53z"
          fill="url(#editing-gradow-gradient)"
          transform="translate(153.1 97.785)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
