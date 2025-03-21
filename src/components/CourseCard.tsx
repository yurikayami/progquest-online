
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  instructor: string;
  rating: number;
  featured?: boolean;
  lessons?: number;
  className?: string;
}

const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  category, 
  level, 
  duration, 
  instructor, 
  rating,
  lessons = 12,
  featured = false,
  className 
}: CourseProps) => {
  return (
    <Link
      to={`/courses/${id}`}
      className={cn(
        'group flex flex-col rounded-xl overflow-hidden bg-white border border-border transition-all duration-300',
        'hover:shadow-lg hover:border-transparent transform hover:-translate-y-1',
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full bg-muted overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">{level}</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="ml-1 text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">{title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs font-medium">
              {lessons} lessons • {duration}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              by {instructor}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
