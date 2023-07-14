import React, { SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '../../../svgIcons/Social';
import IconLink from '../IconLink';

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
  id?: string;
  href?: string;
}

const NotificationIcon = ({ alert, id, href, ...props }: NotificationIconProps) => {
  return (
    <IconLink
      id={id}
      href={href}
      children={alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />}
    />
  );
};

export default NotificationIcon;
