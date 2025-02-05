
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

export const [Strikethrough02Icon, AnimatedStrikethrough02Icon] = createIcon({
name: 'Strikethrough02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12M10.5 20C12.7091 20 14.5 18.2091 14.5 16C14.5 13.7909 12.7091 12 10.5 12M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8M13.5 4C11.2909 4 9.5 5.79086 9.5 8M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
