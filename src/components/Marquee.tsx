import { useEffect, useRef } from "react";

interface MarqueeProps {
  items: readonly string[];
}

export function Marquee({ items }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const speed = 0.4;

    const tick = () => {
      x -= speed;
      const w = el.scrollWidth / 2;
      if (Math.abs(x) >= w) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="marqueeOuter" aria-hidden="true">
      <div className="marqueeTrack" ref={trackRef}>
        {doubled.map((item, i) => (
          <span key={i} className="marqueeItem">
            <span className="marqueeDot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
