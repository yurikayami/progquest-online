
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const stats = [
    { label: "Active students", value: "50,000+" },
    { label: "Courses", value: "150+" },
    { label: "Expert instructors", value: "50+" },
    { label: "Career transitions", value: "15,000+" },
  ];

  const benefits = [
    "Learn from industry experts with years of real-world experience",
    "Gain practical skills through hands-on projects and challenges",
    "Access a supportive community of fellow learners and mentors",
    "Learn at your own pace with flexible, on-demand course structures",
    "Receive personalized feedback on your coding projects",
    "Earn certificates to showcase your achievements to employers",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="container px-6 mx-auto mb-16">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering the Next Generation of Developers
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make high-quality programming education accessible to everyone, regardless of their background or previous experience.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] max-w-5xl mx-auto mb-16">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2019, CodeQuest began with a simple idea: programming education should be engaging, practical, and accessible to everyone. Our founders, experienced developers and educators, were frustrated with the gap between traditional computer science education and the skills needed in the industry.
              </p>
              <p className="text-muted-foreground mb-4">
                We built CodeQuest to bridge that gap, focusing on real-world applications and project-based learning. Today, we're proud to have helped thousands of students transition into tech careers and level up their programming skills.
              </p>
              <p className="text-muted-foreground">
                Our courses are constantly updated to reflect the latest technologies and industry practices, ensuring that our students are always learning the most relevant and in-demand skills.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We believe in learning by doing. That's why every CodeQuest course is built around practical projects that simulate real-world scenarios and challenges. Our instructors don't just teach theory—they guide you through building actual applications and solving authentic problems.
              </p>
              <p className="text-muted-foreground mb-4">
                We've designed our platform to support learners at every level, from complete beginners taking their first steps in coding to experienced developers looking to master new technologies or specialized skills.
              </p>
              <p className="text-muted-foreground">
                Beyond our courses, we foster a supportive community where students can connect, collaborate, and learn from each other, creating a rich ecosystem for growth and innovation.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-secondary/30 py-16">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose CodeQuest</h2>
              <p className="text-muted-foreground">
                We offer a unique learning experience designed to help you succeed in your coding journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 text-primary">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Instructors</h2>
              <p className="text-muted-foreground">
                Learn from industry experts with years of experience in programming and teaching
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "JavaScript Specialist",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  bio: "Former senior developer at Google with 8+ years of experience in frontend development."
                },
                {
                  name: "David Chen",
                  role: "Python & Data Science",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  bio: "PhD in Computer Science specializing in machine learning and data visualization."
                },
                {
                  name: "Michael Roberts",
                  role: "React & Frontend Frameworks",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  bio: "Full-stack developer and architect with 10+ years building scalable web applications."
                }
              ].map((instructor, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden border border-border transition-all hover:shadow-md">
                  <div className="aspect-square">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{instructor.name}</h3>
                    <p className="text-primary text-sm mb-3">{instructor.role}</p>
                    <p className="text-muted-foreground text-sm">{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
