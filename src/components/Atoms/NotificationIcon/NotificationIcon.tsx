import React, { MouseEventHandler, SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '../../../svgIcons/Social';
import IconLink from '../IconLink';

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
  id?: string;
  href?: string;
}

const NotificationIcon = ({ alert, id, href, onClick, ...props }: NotificationIconProps) => {
  return (
    <IconLink
      id={id}
      href={href}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      children={alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />}
    />
  );
};

export default NotificationIcon;
