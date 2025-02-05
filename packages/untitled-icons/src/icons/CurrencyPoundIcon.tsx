
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

export const [CurrencyPoundIcon, AnimatedCurrencyPoundIcon] = createIcon({
name: 'CurrencyPound',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M17.5 20.5H6.5C6.5 20.5 10 17.7413 10 13.5C10 10.6725 7.91376 9.66123 7.8837 7.30497C7.88566 2.64078 13.5005 2.88877 15.4521 4.74258M6.5 13.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
