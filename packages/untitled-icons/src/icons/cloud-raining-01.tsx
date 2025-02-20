
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

export const [CloudRaining01Icon, AnimatedCloudRaining01Icon] = createIcon({
name: 'CloudRaining01',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M20 15.2422C21.206 14.435 22 13.0602 22 11.5C22 9.15643 20.2085 7.23129 17.9203 7.01937C17.4522 4.17213 14.9798 2 12 2C9.02024 2 6.54781 4.17213 6.07974 7.01937C3.79151 7.23129 2 9.15643 2 11.5C2 13.0602 2.79401 14.435 4 15.2422M8 18V20M8 12V14M16 18V20M16 12V14M12 20V22M12 14V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
