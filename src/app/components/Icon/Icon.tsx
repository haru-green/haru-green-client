import classNames from 'classnames';
import { SVGProps } from 'react';

import * as icons from '@/assets/icons';

export type IconNameType = keyof typeof icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  height?: string;
  name: IconNameType;
  size?: number;
  width?: string;
}

const DEFAULT_SIZE = 30;

function Icon({
  className,
  height,
  name,
  size = DEFAULT_SIZE,
  style,
  width,
  ...props
}: IconProps) {
  const SvgIcon = icons[name];

  return (
    <SvgIcon
      className={classNames(className)}
      {...props}
      style={{ height: height ?? 'auto', width: width ?? size, ...style }}
    />
  );
}

export default Icon;
