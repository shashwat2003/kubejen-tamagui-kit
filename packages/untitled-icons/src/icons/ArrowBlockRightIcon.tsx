
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

export const [ArrowBlockRightIcon, AnimatedArrowBlockRightIcon] = createIcon({
name: 'ArrowBlockRight',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
