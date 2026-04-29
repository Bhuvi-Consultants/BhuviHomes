

import Link from "next/link";
import { cn } from '@/lib/utils';
import Image from "next/image";

const ProjectCard = ({
  id,
  title,
  category,
  imageUrl,
  className,
  videoUrl,
}) => {
  return (
    // <Link to={videoUrl} className={cn("block group overflow-hidden rounded-lg card-hover", className)}>
      <div className="relative aspect-[4/3] overflow-hidden block group rounded-lg card-hover">
        {videoUrl ?
          <iframe
            src={videoUrl}
            title={`${category} - ${title}`}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            aria-label={`Embedded YouTube Playlist: ${category}`}
          />
          :
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 hidden hover:block"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white hidden hover:">
          <p className="text-sm uppercase tracking-wider mb-1 ">{category}</p>
          <h3 className="text-lg sm:text-xl font-serif font-medium">{title}</h3>
        </div>
      </div>
    // </Link>
  );
};


export default ProjectCard;
