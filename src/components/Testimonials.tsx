
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "The JavaScript course completely transformed my career. I went from struggling with basic concepts to confidently building complex applications in just a few months.",
    author: "Alex Morgan",
    role: "Frontend Developer",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    content: "I tried many online platforms, but CodeQuest's Python for Data Science course was by far the most comprehensive and engaging. The real-world projects made all the difference.",
    author: "Jason Chen",
    role: "Data Scientist",
    company: "DataViz Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    content: "As someone who was completely new to programming, I was amazed at how quickly I was able to grasp the concepts. The instructors truly care about your learning journey.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovate Labs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

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
  
  const autoAdvance = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    autoAdvance.current = setInterval(goToNext, 8000);
    
    return () => {
      if (autoAdvance.current) {
        clearInterval(autoAdvance.current);
      }
    };
  }, []);
  
  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute -left-20 top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container px-6 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            Student Success Stories
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            What Our Students Say
          </h2>
          <p className={`text-lg text-muted-foreground ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Hear from our community about how our courses have helped them achieve their coding goals
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto relative ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="absolute top-6 left-6 text-primary opacity-20">
            <Quote className="w-16 h-16" />
          </div>
          
          <div className="relative bg-white rounded-xl p-8 md:p-10 shadow-lg">
            <div className="min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    'transition-all duration-500 absolute w-full',
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  )}
                >
                  <p className="text-lg md:text-xl italic mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                          loading="lazy" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                )}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full md:-translate-x-1/2">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full md:translate-x-1/2">
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
