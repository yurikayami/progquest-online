
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1000);
  };
  
  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container px-6 mx-auto">
        <div 
          className={cn(
            "max-w-4xl mx-auto rounded-xl overflow-hidden",
            "bg-gradient-to-r from-primary/90 to-primary",
            "shadow-xl shadow-primary/10",
            isVisible ? 'animate-fadeIn' : 'opacity-0'
          )}
        >
          <div className="p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with New Courses
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know when we launch new courses, tutorials, and special offers.
              </p>
            </div>
            
            <form 
              onSubmit={handleSubmit} 
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className={cn(
                  "h-12 px-6 rounded-lg font-medium transition-all",
                  "bg-white text-primary hover:bg-white/90",
                  "shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-white/30",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            
            <p className="text-white/70 text-sm text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
