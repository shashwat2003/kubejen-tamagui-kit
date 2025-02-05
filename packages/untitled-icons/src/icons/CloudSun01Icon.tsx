
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

export const [CloudSun01Icon, AnimatedCloudSun01Icon] = createIcon({
name: 'CloudSun01',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M19.368 12.4048C20.935 11.5606 22 9.9047 22 8C22 5.23858 19.7614 3 17 3C14.2386 3 12 5.23858 12 8M12 8C9.86227 8 8.0094 9.2196 7.09922 11.001C7.06622 11.0003 7.03315 11 7 11C4.23858 11 2 13.2386 2 16C2 18.7614 4.23858 21 7 21C11.2352 21 13.7434 21 17.5 21C19.9853 21 22 18.9853 22 16.5C22 14.0147 19.9853 12 17.5 12C17.4311 12 17.3625 12.0016 17.2943 12.0046C16.6429 9.69375 14.5192 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
