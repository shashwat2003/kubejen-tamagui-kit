
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

export const [BarChartCircle02Icon, AnimatedBarChartCircle02Icon] = createIcon({
name: 'BarChartCircle02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M8 15V17M12 11V17M16 7V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
