import type { TechItem } from '../data/tech';

type TechLogoProps = {
  tech: TechItem;
};

export default function TechLogo({ tech }: TechLogoProps) {
  return (
    <svg
      className="impt-stack-logo"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={tech.path} fill={tech.color} />
    </svg>
  );
}
