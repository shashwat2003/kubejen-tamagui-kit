
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

export const [Cloud03Icon, AnimatedCloud03Icon] = createIcon({
name: 'Cloud03',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M9.5 19C5.35786 19 2 15.6421 2 11.5C2 7.35786 5.35786 4 9.5 4C12.3827 4 14.8855 5.62634 16.141 8.01153C16.2597 8.00388 16.3794 8 16.5 8C19.5376 8 22 10.4624 22 13.5C22 16.5376 19.5376 19 16.5 19C13.9485 19 12.1224 19 9.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
