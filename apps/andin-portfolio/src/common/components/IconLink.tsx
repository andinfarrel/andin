import { FC, ReactElement, ReactNode } from "react";

const IconLink: FC<{
  icon: ReactElement;
  href: string;
  ariaLabel?: string;
  className?: string
}> = ({ icon, href, ariaLabel, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
      className={className}
    >
      {icon}
    </a>
  );
};

export default IconLink;
