import React from "react";

interface SectionTagProps {
  num: string;
  label: string;
  theme?: "dark" | "light" | "glass";
  variant?: "default" | "beyond";
  className?: string;
}

export function SectionTag({
  num,
  label,
  theme = "dark",
  variant = "default",
  className = "",
}: SectionTagProps) {
  const containerClass = `${variant === "beyond" ? "beyond-section-tag" : "section-tag"} ${className}`.trim();

  let numStyle: React.CSSProperties | undefined = undefined;
  let lineStyle: React.CSSProperties = { width: "60px", height: "1px" };
  let labelClass = "";

  if (theme === "glass") {
    numStyle = { background: "rgba(255, 255, 255, 0.1)", color: "#fff" };
    lineStyle = { ...lineStyle, background: "rgba(255, 255, 255, 0.3)" };
    labelClass = "beyond-label";
  } else if (theme === "light") {
    lineStyle = { ...lineStyle, background: "#E0E0E0" };
    labelClass = "section-label label-light";
  } else {
    // default / dark theme
    lineStyle = { ...lineStyle, background: "#0505051F" };
    labelClass = "section-label label-dark";
  }

  return (
    <div className={containerClass}>
      <span className="section-num" style={numStyle}>
        {num}
      </span>
      <span className="section-line" style={lineStyle} />
      <span className={labelClass}>
        {label}
      </span>
    </div>
  );
}
