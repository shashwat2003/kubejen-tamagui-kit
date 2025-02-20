
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

export const [MessageNotificationCircleIcon, AnimatedMessageNotificationCircleIcon] = createIcon({
name: 'MessageNotificationCircle',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M11.707 3.03647C7.38421 3.43621 3.99962 7.07285 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.44299 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78121 19.299 8.85882 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20C16.9304 20 20.5694 16.6098 20.9641 12.2819M20.1209 3.87868C21.2925 5.05025 21.2925 6.94975 20.1209 8.12132C18.9494 9.29289 17.0499 9.29289 15.8783 8.12132C14.7067 6.94975 14.7067 5.05025 15.8783 3.87868C17.0499 2.70711 18.9494 2.70711 20.1209 3.87868Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
