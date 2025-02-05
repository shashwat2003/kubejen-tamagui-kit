
import React, { memo, forwardRef } from 'react'
import {
Svg,
SvgProps,
Ellipse,
G,
LinearGradient,
RadialGradient,
Line,
Path,
Polygon,
Polyline,
Rect,
Symbol as _Symbol,
Use,
Defs,
Stop,
ClipPath,
Text as _Text,
Circle as _Circle,
} from 'react-native-svg'

import { createIcon } from '@kjt/icons-core'

export const [Wind01Icon, AnimatedWind01Icon] = createIcon({
name: 'Wind01',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M21 18C21 18 19.8096 17.5305 19 17.3021C13.8797 15.8574 10.1203 20.1426 5 18.6979C4.19041 18.4695 3 18 3 18M21 12C21 12 19.8096 11.5305 19 11.3021C13.8797 9.85739 10.1203 14.1426 5 12.6979C4.19041 12.4695 3 12 3 12M21 6C21 6 19.8096 5.53048 19 5.30206C13.8797 3.85739 10.1203 8.14261 5 6.69794C4.19041 6.46952 3 6 3 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
