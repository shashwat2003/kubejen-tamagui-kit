
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

export const [SubscriptIcon, AnimatedSubscriptIcon] = createIcon({
name: 'Subscript',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M3 5L13 15M13 5L3 15M21 19.0001H17C17 17.5001 17.44 17.0001 18.5 16.5001C19.56 16.0001 21 15.3301 21 14.0001C21 13.5301 20.83 13.0701 20.52 12.7101C20.1999 12.3476 19.7649 12.1061 19.2879 12.026C18.811 11.9459 18.321 12.0321 17.9 12.2701C17.48 12.5101 17.16 12.8901 17 13.3401" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
