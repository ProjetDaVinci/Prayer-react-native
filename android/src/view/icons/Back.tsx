import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({title, titleId, ...props}: SvgProps & SVGRProps) => (
  <Svg width={18} height={16} fill="none" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.707 1.707A1 1 0 0 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H17a1 1 0 0 0 0-2H3.414l5.293-5.293Z"
      fill="#FFFFFF"
    />
  </Svg>
);

export default SvgComponent;
