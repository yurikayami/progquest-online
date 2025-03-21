
import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
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

// Sample lesson content data - this would normally come from an API
const lessonContent = {
  '1.1': {
    id: '1.1',
    title: 'History and Evolution of JavaScript',
    courseId: 'javascript-fundamentals',
    courseName: 'JavaScript Fundamentals',
    duration: '15 min',
    lastUpdated: 'April 2023',
    nextLessonId: '1.2',
    nextLessonTitle: 'Setting Up Your Development Environment',
    content: [
      {
        type: 'heading',
        text: 'The Birth of JavaScript'
      },
      {
        type: 'paragraph',
        text: 'JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. Remarkably, the initial version of JavaScript was developed in just 10 days. It was originally named "Mocha," then briefly "LiveScript," before finally being renamed "JavaScript" as a marketing decision to capitalize on the popularity of Java, despite the languages having very little in common.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80',
        alt: 'JavaScript code on a screen',
        caption: 'JavaScript has evolved from a simple scripting language to a powerful programming language'
      },
      {
        type: 'heading',
        text: 'The Standardization of JavaScript'
      },
      {
        type: 'paragraph',
        text: 'In 1996, Netscape submitted JavaScript to ECMA International for standardization, leading to the creation of the ECMAScript specification. ECMAScript is the official name of the language, with JavaScript being the most well-known implementation. The first edition of ECMA-262 (ECMAScript 1) was published in June 1997.'
      },
      {
        type: 'paragraph',
        text: 'Since then, the language has gone through several versions:'
      },
      {
        type: 'list',
        items: [
          'ECMAScript 2 (1998): Editorial changes only',
          'ECMAScript 3 (1999): Added regular expressions, try/catch exception handling, and more',
          'ECMAScript 4: Abandoned due to disagreements (never released)',
          'ECMAScript 5 (2009): Added strict mode, JSON support, and various array methods',
          'ECMAScript 6/ES2015 (2015): Major update with classes, modules, arrow functions, promises, and more',
          'ECMAScript 2016-present: Annual releases with incremental improvements'
        ]
      },
      {
        type: 'heading',
        text: 'The Browser Wars and JavaScript Compatibility'
      },
      {
        type: 'paragraph',
        text: 'In the late 1990s and early 2000s, different browsers implemented JavaScript in different ways, leading to compatibility issues that made web development challenging. Developers often had to write different code for different browsers.'
      },
      {
        type: 'paragraph',
        text: 'Libraries like jQuery (released in 2006) became popular as they abstracted away browser differences, allowing developers to write code that worked consistently across browsers.'
      },
      {
        type: 'heading',
        text: 'The Rise of Modern JavaScript'
      },
      {
        type: 'paragraph',
        text: 'The release of ECMAScript 6 (ES6) in 2015 marked a turning point for JavaScript, introducing many features that transformed it into a more powerful and expressive language. Modern JavaScript development is characterized by:'
      },
      {
        type: 'list',
        items: [
          'Package managers like npm and Yarn',
          'Build tools like Webpack and Babel',
          'Frameworks like React, Angular, and Vue.js',
          'Node.js for server-side JavaScript',
          'TypeScript for static typing'
        ]
      },
      {
        type: 'heading',
        text: 'JavaScript Today'
      },
      {
        type: 'paragraph',
        text: 'Today, JavaScript is one of the most popular programming languages in the world. It\'s the primary language for web development and has expanded beyond the browser to servers (Node.js), mobile apps (React Native), desktop apps (Electron), and even machine learning (TensorFlow.js).'
      },
      {
        type: 'paragraph',
        text: 'The language continues to evolve with regular annual updates, adding new features while maintaining backward compatibility. The JavaScript ecosystem is vast and vibrant, with millions of packages available on npm and a large community of developers contributing to its growth and development.'
      },
      {
        type: 'quote',
        text: 'Any application that can be written in JavaScript, will eventually be written in JavaScript.',
        author: 'Jeff Atwood, co-founder of Stack Overflow'
      }
    ]
  }
};

const LessonDetail = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const location = useLocation();
  const lesson = lessonContent[lessonId as keyof typeof lessonContent];
  
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
                        {item.items.map((listItem, i) => (
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
                        <li className="border-l-2 border-primary pl-4 py-1 font-medium">
                          1.1 History and Evolution of JavaScript
                        </li>
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
                          <Link to={`/courses/${courseId}/lessons/1.2`} className="block">
                            1.2 Setting Up Your Development Environment
                          </Link>
                        </li>
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
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
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
                          <Link to={`/courses/${courseId}/lessons/2.1`} className="block">
                            2.1 Variables and Data Types
                          </Link>
                        </li>
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
                          <Link to={`/courses/${courseId}/lessons/2.2`} className="block">
                            2.2 Operators and Expressions
                          </Link>
                        </li>
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
                          <Link to={`/courses/${courseId}/lessons/2.3`} className="block">
                            2.3 Control Flow: Conditionals
                          </Link>
                        </li>
                        <li className="border-l-2 border-transparent hover:border-muted hover:bg-muted/30 pl-4 py-1 transition-colors">
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
