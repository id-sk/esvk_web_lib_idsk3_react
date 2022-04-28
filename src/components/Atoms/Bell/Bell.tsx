import React, { SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '../../../svgIcons/Social';

export interface BellProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
}

const Bell = ({ alert, ...props }: BellProps) => {
  return alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />;
};

export default Bell;
