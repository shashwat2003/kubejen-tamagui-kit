
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

export const [MicrophoneOff02Icon, AnimatedMicrophoneOff02Icon] = createIcon({
name: 'MicrophoneOff02',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M4 12V13C4 17.4183 7.58172 21 12 21C14.4653 21 16.6701 19.8849 18.1376 18.1316M2 2L22 22M16 10.4V7C16 4.79086 14.2091 3 12 3C11.0406 3 10.1601 3.33778 9.47086 3.9009M12 17C9.79086 17 8 15.2091 8 13V8L15.2815 15.288C14.5585 16.323 13.3583 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
