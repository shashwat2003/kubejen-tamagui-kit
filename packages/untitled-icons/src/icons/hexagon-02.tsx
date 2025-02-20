
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

export const [Hexagon02Icon, AnimatedHexagon02Icon] = createIcon({
name: 'Hexagon02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M21.5679 11.223C21.7255 11.5066 21.8042 11.6484 21.8351 11.7985C21.8625 11.9315 21.8625 12.0685 21.8351 12.2015C21.8042 12.3516 21.7255 12.4934 21.5679 12.777L17.4568 20.177C17.2904 20.4766 17.2072 20.6263 17.0889 20.7354C16.9842 20.8318 16.8601 20.9049 16.7249 20.9495C16.5721 21 16.4008 21 16.0582 21H7.94104C7.5984 21 7.42708 21 7.27428 20.9495C7.1391 20.9049 7.01502 20.8318 6.91033 20.7354C6.79199 20.6263 6.70879 20.4766 6.54239 20.177L2.43128 12.777C2.27372 12.4934 2.19494 12.3516 2.16406 12.2015C2.13672 12.0685 2.13672 11.9315 2.16406 11.7985C2.19494 11.6484 2.27372 11.5066 2.43128 11.223L6.54239 3.82297C6.70879 3.52345 6.79199 3.37369 6.91033 3.26463C7.01502 3.16816 7.1391 3.09515 7.27428 3.05048C7.42708 3 7.5984 3 7.94104 3L16.0582 3C16.4008 3 16.5721 3 16.7249 3.05049C16.8601 3.09515 16.9842 3.16816 17.0889 3.26463C17.2072 3.37369 17.2904 3.52345 17.4568 3.82297L21.5679 11.223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
