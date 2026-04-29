import { cn } from "@/lib/utils";

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className,
  as: Tag = "h2", // 👈 dynamic tag
}) => {
  return (
    <div
      className={cn(
        centered ? "text-center" : "text-left",
        "mb-12",
        className
      )}
    >
      <Tag className="section-title">{title}</Tag>

      {subtitle && (
        <p className={cn("section-subtitle", !centered && "mx-0")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;