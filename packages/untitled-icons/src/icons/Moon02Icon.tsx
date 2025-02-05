
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

export const [Moon02Icon, AnimatedMoon02Icon] = createIcon({
name: 'Moon02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M21.9548 12.9564C20.5779 15.3717 17.9791 17.0001 15 17.0001C10.5817 17.0001 7 13.4184 7 9.00008C7 6.02072 8.62867 3.42175 11.0443 2.04492C5.96975 2.52607 2 6.79936 2 11.9998C2 17.5227 6.47715 21.9998 12 21.9998C17.2002 21.9998 21.4733 18.0305 21.9548 12.9564Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
