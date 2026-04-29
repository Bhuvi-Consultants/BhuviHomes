

import { Card, CardContent } from '@/components/ui/card';


const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="backdrop-blur-sm bg-white/90 border-none shadow hover:shadow-md transition-all hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700 text-green-700-foreground mb-4">
          {Icon && <Icon size={24} />}
        </div>
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        <p className="text-gray-500">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
