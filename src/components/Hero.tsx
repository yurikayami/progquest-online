
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateHero = () => {
      const elements = heroRef.current?.querySelectorAll('[data-animate]');
      elements?.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove('opacity-0');
          el.classList.add('animate-slideUp');
        }, 200 * index);
      });
    };
    
    animateHero();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299e1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container px-6 mx-auto" ref={heroRef}>
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-6">
            <span 
              data-animate
              className="opacity-0 inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
            >
              Master coding with expert-led courses
            </span>
          </div>
          
          <h1 
            data-animate
            className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Elevate Your <span className="text-primary">Programming Skills</span> to New Heights
          </h1>
          
          <p 
            data-animate
            className="opacity-0 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Discover a curated collection of programming courses designed to transform you from beginner to expert through hands-on projects and expert instruction.
          </p>
          
          <div 
            data-animate
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/courses"
              className="px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Explore Courses
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div 
          data-animate
          className="opacity-0 relative max-w-5xl mx-auto"
        >
          <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students programming" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="absolute -right-10 -bottom-10 -z-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -left-10 -top-10 -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
