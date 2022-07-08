import React, { SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '../../../svgIcons/Social';
import IconLink from '../IconLink';

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
}

const NotificationIcon = ({ alert, ...props }: NotificationIconProps) => {
  return (
    <IconLink
      children={alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />}
    />
  );
};

export default NotificationIcon;
