import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, BookOpen, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { CourseProps } from '@/components/CourseCard';

const allCourses: CourseProps[] = [
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
    lessons: 40
  }
];

const javaScriptCurriculum = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    lessons: [
      { id: "1.1", title: "History and Evolution of JavaScript", duration: "15 min" },
      { id: "1.2", title: "Setting Up Your Development Environment", duration: "20 min" },
      { id: "1.3", title: "Your First JavaScript Program", duration: "25 min" }
    ]
  },
  {
    id: 2,
    title: "JavaScript Basics",
    lessons: [
      { id: "2.1", title: "Variables and Data Types", duration: "30 min" },
      { id: "2.2", title: "Operators and Expressions", duration: "25 min" },
      { id: "2.3", title: "Control Flow: Conditionals", duration: "35 min" },
      { id: "2.4", title: "Control Flow: Loops", duration: "40 min" }
    ]
  },
  {
    id: 3,
    title: "Functions and Scope",
    lessons: [
      { id: "3.1", title: "Declaring and Calling Functions", duration: "30 min" },
      { id: "3.2", title: "Function Parameters and Return Values", duration: "25 min" },
      { id: "3.3", title: "Function Expressions and Arrow Functions", duration: "35 min" },
      { id: "3.4", title: "Variable Scope and Closures", duration: "45 min" }
    ]
  },
  {
    id: 4,
    title: "Objects and Arrays",
    lessons: [
      { id: "4.1", title: "Working with Arrays", duration: "40 min" },
      { id: "4.2", title: "Array Methods and Iteration", duration: "45 min" },
      { id: "4.3", title: "Creating and Using Objects", duration: "35 min" },
      { id: "4.4", title: "Object Methods and Prototypes", duration: "50 min" }
    ]
  },
  {
    id: 5,
    title: "Modern JavaScript",
    lessons: [
      { id: "5.1", title: "ES6+ Features Overview", duration: "30 min" },
      { id: "5.2", title: "Destructuring and Spread Operator", duration: "35 min" },
      { id: "5.3", title: "Template Literals and String Methods", duration: "25 min" },
      { id: "5.4", title: "Modules and Import/Export", duration: "40 min" }
    ]
  },
  {
    id: 6,
    title: "Asynchronous JavaScript",
    lessons: [
      { id: "6.1", title: "Callbacks and the Event Loop", duration: "40 min" },
      { id: "6.2", title: "Promises and Error Handling", duration: "45 min" },
      { id: "6.3", title: "Async/Await Syntax", duration: "35 min" },
      { id: "6.4", title: "Fetching Data from APIs", duration: "50 min" },
      { id: "6.5", title: "Final Project: Building a JavaScript Application", duration: "120 min" }
    ]
  }
];

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [isExpanded, setIsExpanded] = useState<number[]>([1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  useEffect(() => {
    const foundCourse = allCourses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [courseId]);
  
  const handleEnroll = () => {
    toast({
      title: "Enrolled Successfully!",
      description: `You have enrolled in ${course?.title}. Check your email for details.`,
    });
  };
  
  const toggleModule = (moduleId: number) => {
    if (isExpanded.includes(moduleId)) {
      setIsExpanded(isExpanded.filter(id => id !== moduleId));
    } else {
      setIsExpanded([...isExpanded, moduleId]);
    }
  };
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">
          <div className="container px-6 mx-auto text-center py-24">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="container px-6 mx-auto mb-12">
          <div className="mb-6">
            <Link to="/courses" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="rounded-xl overflow-hidden border border-border bg-white shadow-sm">
                <div className="aspect-video w-full bg-muted overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1 font-medium">{course.rating.toFixed(1)}</span>
                      <span className="ml-1 text-muted-foreground">({Math.floor(Math.random() * 500) + 100} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">Free</div>
                    <p className="text-muted-foreground">Full course access</p>
                  </div>
                  
                  <Button className="w-full mb-4" size="lg" onClick={handleEnroll}>
                    Enroll Now
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    30-day satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container px-6 mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          
          <div className="border border-border rounded-xl overflow-hidden divide-y">
            {javaScriptCurriculum.map((module) => (
              <div key={module.id} className="bg-white">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-muted/30 transition-colors"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">Module {module.id}:</span>
                    <span>{module.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-3">
                      {module.lessons.length} lessons
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${isExpanded.includes(module.id) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                
                {isExpanded.includes(module.id) && (
                  <div className="px-6 pb-4">
                    <Separator className="mb-4" />
                    <ul className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="mr-2 text-primary font-medium">{lesson.id}</span>
                            <Link 
                              to={`/courses/${courseId}/lessons/${lesson.id}`}
                              className="hover:text-primary hover:underline"
                            >
                              {lesson.title}
                            </Link>
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
