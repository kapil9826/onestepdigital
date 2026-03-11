export function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`pill ${className}`}>
      {children}
    </div>
  );
}
