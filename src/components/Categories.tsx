
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Code, Database, Globe, BarChart, Monitor, Server, Lock, Cpu } from 'lucide-react';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  courses: number;
  slug: string;
}

const categories: CategoryProps[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Learn to build responsive websites and web applications",
    courses: 42,
    slug: "web-development"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Science",
    description: "Master data analysis, visualization, and machine learning",
    courses: 36,
    slug: "data-science"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Build iOS and Android apps with React Native and Flutter",
    courses: 28,
    slug: "mobile-development"
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Game Development",
    description: "Create engaging games for multiple platforms",
    courses: 24,
    slug: "game-development"
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Design beautiful and functional user interfaces",
    courses: 32,
    slug: "ui-ux-design"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "DevOps",
    description: "Implement CI/CD pipelines and containerization",
    courses: 21,
    slug: "devops"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Protect applications and data from security threats",
    courses: 18,
    slug: "cybersecurity"
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI & Machine Learning",
    description: "Build intelligent systems and algorithms",
    courses: 26,
    slug: "ai-machine-learning"
  }
];

const CategoryCard = ({ icon, title, description, courses, slug, index, isVisible }: CategoryProps & { index: number, isVisible: boolean }) => {
  return (
    <Link 
      to={`/courses?category=${slug}`}
      className={cn(
        'group p-6 rounded-xl transition-all duration-300 flex flex-col',
        'border border-border hover:border-primary/30 hover:shadow-lg',
        'bg-white hover:bg-primary/5',
        isVisible ? 'animate-slideUp' : 'opacity-0'
      )}
      style={{ animationDelay: `${300 + index * 50}ms` }}
    >
      <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary inline-flex">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {description}
      </p>
      
      <div className="mt-2 text-sm font-medium">
        {courses} courses
      </div>
    </Link>
  );
};

const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            Browse by Category
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Explore Our Course Categories
          </h2>
          <p className={`text-lg text-muted-foreground ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Find the perfect course to match your learning goals across various programming disciplines
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.slug} 
              {...category} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
