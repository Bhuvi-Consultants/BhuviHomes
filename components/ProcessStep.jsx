import Link from "next/link";
import { cn } from "@/lib/utils";

const ProcessStep = ({
  number,
  title,
  description,
  icon: Icon,
  className,
  url,
  isLast = false,
}) => {
  return (
    <div className={cn("relative", !isLast && "pb-12", className)}>
      
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-muted/80"></div>
      )}

      <div className="relative flex items-start">
        
        {/* Step number */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-green-700-foreground font-medium text-lg shrink-0 z-10">
          {number}
        </div>

        {/* Content */}
        <div className="ml-6 w-full md:w-[60vw]">
          <div className="mb-4 p-4 bg-background rounded-lg shadow-sm border border-border">

            {/* Icon */}
            {Icon && (
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-green-700 mb-3">
                <Icon size={24} />
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-serif font-medium mb-2">
              {url ? (
                <Link href={url} className="hover:underline" aria-label={`Learn more about ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>

            {/* Description */}
            <p className="text-gray-500">
              {description}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessStep;