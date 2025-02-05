
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

export const [Compass01Icon, AnimatedCompass01Icon] = createIcon({
name: 'Compass01',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
