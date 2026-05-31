import { ICONS, type IconName } from '../data/icons';

type ServiceIconProps = {
  name: string;
};

export default function ServiceIcon({ name }: ServiceIconProps) {
  const icon = ICONS[name as IconName] ?? ICONS.code;

  return (
    <span className="impt-card-icon-shell" aria-hidden="true">
      <svg
        className="impt-card-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </span>
  );
}
