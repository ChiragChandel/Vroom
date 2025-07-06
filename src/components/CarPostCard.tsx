import Link from 'next/link';
import {Props} from '../types/index'

export default function CarPostCard({ id, title, description, author, imageUrl, tag, likes, rating }: Props) {
  return (
    <Link
      href={`/posts/${id}`}
      className="block bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-102 h-full flex flex-col"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(64, 64, 64, 0.3)'
      }}
    >
      
      <div className="relative w-full h-48 flex-shrink-0">
        <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
            loading="lazy"
            />
      </div>
      
      
      <div className="p-4 flex flex-col flex-grow">
        
        <div className="h-12 sm:h-14 mb-3 flex items-start">
          <h2 className="font-semibold text-base sm:text-lg text-white line-clamp-2 leading-tight">
            {title}
          </h2>
        </div>
        
        
        <div className="h-10 sm:h-12 mb-4">
          <p className="text-sm text-[#E0E0E0] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        
        
        <div className="mb-3">
          <p className="text-xs text-[#B0B0B0]">By {author}</p>
        </div>
        
        
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-1 rounded">
            {tag}
          </span>
        </div>
        
        
        <div className="flex-grow"></div>
        
        
        <div className="flex items-center justify-between text-sm text-[#B0B0B0] mt-auto">
          <span>❤️ {likes}</span>
          <span>⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}