
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

export const [CurrencyEthereumIcon, AnimatedCurrencyEthereumIcon] = createIcon({
name: 'CurrencyEthereum',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
