
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

export const [HeartSquareIcon, AnimatedHeartSquareIcon] = createIcon({
name: 'HeartSquare',
getIcon: (props) => (
  <Svg   viewBox="0 0 24 24" fill="none" {...props}>
<Path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9966 9.06791C10.9969 7.8992 9.32987 7.58482 8.07735 8.65501C6.82482 9.72519 6.64848 11.5145 7.6321 12.7802C8.26211 13.5909 9.87558 15.0942 10.9542 16.0704C11.3127 16.3947 11.4919 16.5569 11.7066 16.622C11.8911 16.6779 12.102 16.6779 12.2866 16.622C12.5012 16.5569 12.6805 16.3947 13.0389 16.0704C14.1176 15.0942 15.731 13.5909 16.3611 12.7802C17.3447 11.5145 17.1899 9.71393 15.9158 8.65501C14.6417 7.59608 12.9963 7.8992 11.9966 9.06791Z" stroke="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
),

})
