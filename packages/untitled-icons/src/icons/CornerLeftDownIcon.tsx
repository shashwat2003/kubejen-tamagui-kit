
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

export const [CornerLeftDownIcon, AnimatedCornerLeftDownIcon] = createIcon({
name: 'CornerLeftDown',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M21 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L13 15M8 20L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
