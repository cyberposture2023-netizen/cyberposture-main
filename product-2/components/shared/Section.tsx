import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Extra classes on the inner content container */
  innerClassName?: string;
  /** Use a different HTML element as the section wrapper */
  as?: "section" | "div" | "article";
  id?: string;
  /** Apply the subtle (#080f1e) alternating background */
  subtle?: boolean;
}

export default function Section({
  children,
  className = "",
  innerClassName = "",
  as: Tag = "section",
  id,
  subtle,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-20 ${subtle ? "bg-surface-subtle" : ""} ${className}`}
    >
      <div className={`container-content ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
