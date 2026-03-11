import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, desc, center = true }: SectionHeaderProps) {
  return (
    <div className={`sectionHeader ${center ? "sectionHeaderCenter" : ""}`}>
      {eyebrow && (
        <Reveal>
          <div className="eyebrow">
            <span className="eyebrowDot" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="sectionTitle">{title}</h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className="sectionDesc">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
