
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

export const [Contrast03Icon, AnimatedContrast03Icon] = createIcon({
name: 'Contrast03',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 8.5C16 12.6421 12.6421 16 8.5 16C7.88534 16 7.28795 15.9261 6.71623 15.7866C7.89585 17.4297 9.82294 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 9.82294 17.4297 7.89585 15.7866 6.71623C15.9261 7.28795 16 7.88534 16 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
