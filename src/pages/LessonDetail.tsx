
import React, { useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { getLessonById } from '@/services/lessonContent';

const LessonDetail = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const lesson = getLessonById(lessonId || '');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">
          <div className="container px-6 mx-auto text-center py-24">
            <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The lesson you're looking for doesn't exist or has been removed.
            </p>
            <Link to={`/courses/${courseId}`}>
              <Button>Back to Course</Button>
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
      <main className="flex-grow pt-24 md:pt-32 pb-12">
        <div className="container px-6 mx-auto">
          <div className="mb-6">
            <Link to={`/courses/${courseId}`} className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {lesson.courseName}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Last updated: {lesson.lastUpdated}</span>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {lesson.content.map((item, index) => {
                  if (item.type === 'heading') {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{item.text}</h2>;
                  } else if (item.type === 'paragraph') {
                    return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{item.text}</p>;
                  } else if (item.type === 'image') {
                    return (
                      <figure key={index} className="my-8">
                        <img 
                          src={item.url} 
                          alt={item.alt} 
                          className="rounded-lg w-full h-auto"
                        />
                        {item.caption && (
                          <figcaption className="text-sm text-center text-gray-500 mt-2">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  } else if (item.type === 'list') {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                        {item.items?.map((listItem, i) => (
                          <li key={i} className="text-gray-700">{listItem}</li>
                        ))}
                      </ul>
                    );
                  } else if (item.type === 'quote') {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-6 text-gray-700">
                        <p>{item.text}</p>
                        {item.author && <footer className="text-sm mt-2">— {item.author}</footer>}
                      </blockquote>
                    );
                  } else if (item.type === 'code') {
                    return (
                      <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                        <code className="text-sm font-mono">{item.text}</code>
                      </pre>
                    );
                  }
                  return null;
                })}
              </div>
              
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Next Lesson</p>
                    <Link 
                      to={`/courses/${courseId}/lessons/${lesson.nextLessonId}`}
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      {lesson.nextLessonTitle}
                    </Link>
                  </div>
                  <Button asChild>
                    <Link to={`/courses/${courseId}/lessons/${lesson.nextLessonId}`}>
                      Continue
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-border p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Course Contents</h3>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="text-left">
                        <div>Module 1: Introduction to JavaScript</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pl-2">
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '1.1' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/1.1`} className="block">
                            1.1 History and Evolution of JavaScript
                          </Link>
                        </li>
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '1.2' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/1.2`} className="block">
                            1.2 Setting Up Your Development Environment
                          </Link>
                        </li>
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '1.3' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/1.3`} className="block">
                            1.3 Your First JavaScript Program
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="text-left">
                        <div>Module 2: JavaScript Basics</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pl-2">
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '2.1' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/2.1`} className="block">
                            2.1 Variables and Data Types
                          </Link>
                        </li>
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '2.2' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/2.2`} className="block">
                            2.2 Operators and Expressions
                          </Link>
                        </li>
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '2.3' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/2.3`} className="block">
                            2.3 Control Flow: Conditionals
                          </Link>
                        </li>
                        <li className={`border-l-2 pl-4 py-1 transition-colors ${lessonId === '2.4' ? 'border-primary font-medium' : 'border-transparent hover:border-muted hover:bg-muted/30'}`}>
                          <Link to={`/courses/${courseId}/lessons/2.4`} className="block">
                            2.4 Control Flow: Loops
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LessonDetail;
