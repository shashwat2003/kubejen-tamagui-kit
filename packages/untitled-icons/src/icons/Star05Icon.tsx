
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

export const [Star05Icon, AnimatedStar05Icon] = createIcon({
name: 'Star05',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
