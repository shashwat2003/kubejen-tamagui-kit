
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

export const [DropperIcon, AnimatedDropperIcon] = createIcon({
name: 'Dropper',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M10.5 6.49981L17.5 13.4998M2 21.9998C2 21.9998 6.5 21.4998 9 18.9998L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99982C19.8954 1.89525 18.1046 1.89524 17 2.99981L5 14.9998C2.5 17.4998 2 21.9998 2 21.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
