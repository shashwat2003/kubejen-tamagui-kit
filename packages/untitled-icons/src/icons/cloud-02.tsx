
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

export const [Cloud02Icon, AnimatedCloud02Icon] = createIcon({
name: 'Cloud02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M6 19C3.79086 19 2 17.2091 2 15C2 13.1358 3.27532 11.5694 5.00111 11.1257C5.00037 11.0839 5 11.042 5 11C5 7.13401 8.13401 4 12 4C15.6099 4 18.5815 6.73249 18.9594 10.2419C20.7284 10.8481 22 12.5255 22 14.5C22 16.9853 19.9853 19 17.5 19C13.7609 19 10.1876 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
