
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

export const [RefreshCw03Icon, AnimatedRefreshCw03Icon] = createIcon({
name: 'RefreshCw03',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M14 22C14 22 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C17.1187 4.39077 15.5993 3.58669 14 3.22383M14 22H20M14 22L14 16M10 2.00019C10 2.00019 9.15076 2.12152 5.63604 5.63624C2.12132 9.15095 2.12132 14.8494 5.63604 18.3642C6.88131 19.6094 8.40072 20.4135 10 20.7764M10 2.00019L4 2M10 2.00019L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
