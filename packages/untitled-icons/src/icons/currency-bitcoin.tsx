
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

export const [CurrencyBitcoinIcon, AnimatedCurrencyBitcoinIcon] = createIcon({
name: 'CurrencyBitcoin',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M9.5 2V4M9.5 20V22M13.5 2V4M13.5 20V22M7.5 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H7.5H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H7.5M7.5 4H5.5M7.5 4V20M7.5 20H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
