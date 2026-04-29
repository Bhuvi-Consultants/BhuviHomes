

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const ContactCard = ({
  icon: Icon,
  title,
  description,
  value,
  buttonText,
  buttonLink,
  isExternal = false
}) => {
  const ButtonContent = () => (
    <Button variant="outline" className="mt-4 w-full border-green-700 text-green-700 hover:bg-green-700/10" aria-label={buttonText}>
      {buttonText}
    </Button>
  );

  return (
    <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="w-16 h-16 rounded-full bg-green-700/10 flex items-center justify-center mx-auto mb-4">
        {Icon && <Icon size={24} className="w-8 h-8 text-green-700" />}
        </div>
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <p className="font-medium text-lg">{value}</p>
        
        {isExternal ? (
          <Link href={buttonLink} target="_blank" rel="noopener noreferrer" aria-label={buttonText}>
            <ButtonContent />
          </Link>
        ) : (
          <Button asChild variant="outline" className="mt-4 w-full border-green-700 text-green-700 hover:bg-green-700/10" aria-label={buttonText}>
            <Link href={buttonLink} aria-label={buttonText}>
              {buttonText}
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactCard;
