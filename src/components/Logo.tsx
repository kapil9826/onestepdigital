export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            {/* Icon */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bars */}
                <path d="M15 75V55C15 52.2 17.2 50 20 50H25C27.8 50 30 52.2 30 55V75" fill="#1e40af" />
                <path d="M35 75V40C35 37.2 37.2 35 40 35H45C47.8 35 50 37.2 50 40V75" fill="#2563eb" />
                <path d="M55 75V25C55 22.2 57.2 20 60 20H65C67.8 20 70 22.2 70 25V75" fill="#3b82f6" />

                {/* Base line */}
                <path d="M10 80C10 80 40 85 90 70" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />

                {/* Orange Arrow */}
                <path d="M5 60C30 50 45 25 55 5" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
                <path d="M40 5L60 0L55 20" fill="#f59e0b" />
            </svg>
            {/* Text block */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Outfit, sans-serif", color: "#f8fafc", letterSpacing: "0.02em" }}>ONE</span>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Outfit, sans-serif", color: "#f59e0b", letterSpacing: "0.02em" }}>STEP</span>
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "0.15em", color: "#60a5fa", marginTop: "-4px" }}>
                    DIGITAL SOLUTIONS
                </div>
            </div>
        </div>
    );
}
