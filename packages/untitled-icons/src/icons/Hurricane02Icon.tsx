
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

export const [Hurricane02Icon, AnimatedHurricane02Icon] = createIcon({
name: 'Hurricane02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12M18 12C18 16.4183 14.4183 20 10 20C5.58172 20 2 16.4183 2 12M6 12C6 7.58172 9.58172 4 14 4C18.4183 4 22 7.58172 22 12M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
