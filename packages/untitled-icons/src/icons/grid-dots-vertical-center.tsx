
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

export const [GridDotsVerticalCenterIcon, AnimatedGridDotsVerticalCenterIcon] = createIcon({
name: 'GridDotsVerticalCenter',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M3 3H3.01M3 21H3.01M3 16.5H3.01M3 7.5H3.01M7.5 3H7.51M7.5 21H7.51M16.5 3H16.51M16.5 21H16.51M12 3H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
