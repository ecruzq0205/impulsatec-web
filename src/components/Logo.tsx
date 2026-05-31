type LogoProps = {
  height?: number;
};

export default function Logo({ height = 80 }: LogoProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 20 }}>
      <img
        src="/ImpulsaTec-light.png"
        alt="ImpulsaTec"
        style={{ height, width: 'auto', display: 'block' }}
      />
    </span>
  );
}
