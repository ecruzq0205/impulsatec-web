import { ICONS, type IconName } from '../data/icons';

type AboutIconProps = {
  name: string;
};

export default function AboutIcon({ name }: AboutIconProps) {
  const icon = ICONS[name as IconName] ?? ICONS.target;

  return (
    <span className="impt-about-icon-shell" aria-hidden="true">
      <svg
        className="impt-about-icon"
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
