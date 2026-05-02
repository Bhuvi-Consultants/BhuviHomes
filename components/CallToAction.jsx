import Link from "next/link";
import { Button } from "@/components/ui/button";

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-offwhite">
      <div className="container mx-auto px-4 text-center max-w-3xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 ">
          {description}
        </p>

        {/* Button */}
        <Button
          asChild
          size="lg"
          aria-label={buttonText}
          className="bg-red-500 hover:bg-red-600 text-primary-foreground py-2 px-8 "
        >
          <Link href={buttonLink} aria-label={buttonText}>
            {buttonText}
          </Link>
        </Button>

      </div>
    </section>
  );
};

export default CallToAction;