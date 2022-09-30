import React, { SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '../../../svgIcons/Social';
import IconLink from '../IconLink';

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
  id?: string;
}

const NotificationIcon = ({ alert, id, ...props }: NotificationIconProps) => {
  return (
    <IconLink
      id={id}
      href="#"
      children={alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />}
    />
  );
};

export default NotificationIcon;
