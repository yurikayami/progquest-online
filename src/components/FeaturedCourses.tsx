
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CourseCard, { CourseProps } from './CourseCard';

const featuredCourses: CourseProps[] = [
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript, from basic syntax to advanced functions and modern ES6+ features.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80",
    category: "JavaScript",
    level: "Beginner",
    duration: "6 weeks",
    instructor: "Sarah Johnson",
    rating: 4.8,
    featured: true,
    lessons: 24
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    description: "Learn how to use Python for data analysis, visualization, and machine learning with practical examples.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80",
    category: "Python",
    level: "Intermediate",
    duration: "8 weeks",
    instructor: "David Chen",
    rating: 4.9,
    featured: true,
    lessons: 32
  },
  {
    id: "react-masterclass",
    title: "React Masterclass",
    description: "Build modern web applications with React, Redux, and the latest frontend development tools and patterns.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "React",
    level: "Intermediate",
    duration: "10 weeks",
    instructor: "Michael Roberts",
    rating: 4.7,
    featured: true,
    lessons: 40
  }
];

const FeaturedCourses = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container px-6 mx-auto">
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              Featured Courses
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              Learn from the Best
            </h2>
            <p className={`mt-3 text-muted-foreground text-lg max-w-2xl ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Our most popular courses, handpicked to help you achieve your goals faster.
            </p>
          </div>
          
          <Link 
            to="/courses" 
            className={`mt-6 md:mt-0 group inline-flex items-center text-primary hover:underline font-medium ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
            style={{ animationDelay: '300ms' }}
          >
            View all courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className={isVisible ? 'animate-slideUp' : 'opacity-0'} 
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
