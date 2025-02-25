
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

export const [HeartHexagonIcon, AnimatedHeartHexagonIcon] = createIcon({
name: 'HeartHexagon',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M11.223 2.43164C11.5066 2.27409 11.6484 2.19531 11.7985 2.16442C11.9315 2.13709 12.0685 2.13709 12.2015 2.16442C12.3516 2.19531 12.4934 2.27409 12.777 2.43164L20.177 6.54276C20.4766 6.70916 20.6263 6.79236 20.7354 6.9107C20.8318 7.01539 20.9049 7.13947 20.9495 7.27464C21 7.42744 21 7.59876 21 7.94141V16.0585C21 16.4012 21 16.5725 20.9495 16.7253C20.9049 16.8605 20.8318 16.9845 20.7354 17.0892C20.6263 17.2076 20.4766 17.2908 20.177 17.4572L12.777 21.5683C12.4934 21.7258 12.3516 21.8046 12.2015 21.8355C12.0685 21.8628 11.9315 21.8628 11.7985 21.8355C11.6484 21.8046 11.5066 21.7258 11.223 21.5683L3.82297 17.4572C3.52345 17.2908 3.37369 17.2076 3.26463 17.0892C3.16816 16.9845 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0585V7.94141C3 7.59876 3 7.42744 3.05048 7.27464C3.09515 7.13947 3.16816 7.01539 3.26463 6.9107C3.37369 6.79236 3.52345 6.70916 3.82297 6.54276L11.223 2.43164Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9966 9.06787C10.9969 7.89916 9.32987 7.58478 8.07735 8.65497C6.82482 9.72515 6.64848 11.5145 7.6321 12.7802C8.26211 13.5909 9.87558 15.0942 10.9542 16.0703C11.3127 16.3947 11.4919 16.5569 11.7066 16.6219C11.8911 16.6779 12.102 16.6779 12.2866 16.6219C12.5012 16.5569 12.6805 16.3947 13.0389 16.0703C14.1176 15.0942 15.731 13.5909 16.3611 12.7802C17.3447 11.5145 17.1899 9.7139 15.9158 8.65497C14.6417 7.59604 12.9963 7.89916 11.9966 9.06787Z" stroke="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
