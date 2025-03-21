// This file contains all the lesson content for the JavaScript Fundamentals course

export interface LessonContentItem {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'quote' | 'code';
  text?: string;
  url?: string;
  alt?: string;
  caption?: string;
  items?: string[];
  author?: string;
  language?: string;
}

export interface LessonData {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  duration: string;
  lastUpdated: string;
  nextLessonId: string;
  nextLessonTitle: string;
  content: LessonContentItem[];
}

// Map of all lesson content by lesson ID
const lessonContent: Record<string, LessonData> = {
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
  },
  '1.2': {
    id: '1.2',
    title: 'Setting Up Your Development Environment',
    courseId: 'javascript-fundamentals',
    courseName: 'JavaScript Fundamentals',
    duration: '20 min',
    lastUpdated: 'April 2023',
    nextLessonId: '1.3',
    nextLessonTitle: 'Your First JavaScript Program',
    content: [
      {
        type: 'heading',
        text: 'Why a Good Development Environment Matters'
      },
      {
        type: 'paragraph',
        text: 'A well-configured development environment can significantly improve your productivity, code quality, and learning experience. In this lesson, we\'ll set up everything you need to write, run, and debug JavaScript code effectively.'
      },
      {
        type: 'heading',
        text: 'Choosing a Code Editor'
      },
      {
        type: 'paragraph',
        text: 'A good code editor is essential for writing JavaScript. Visual Studio Code (VS Code) is a free, open-source editor that has become the industry standard for JavaScript development due to its excellent features, extensions, and performance.'
      },
      {
        type: 'list',
        items: [
          'Download VS Code from https://code.visualstudio.com/',
          'Install helpful extensions like ESLint, Prettier, and JavaScript (ES6) code snippets',
          'Customize your settings to match your preferences'
        ]
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        alt: 'Code editor showing JavaScript code',
        caption: 'Visual Studio Code is a popular choice for JavaScript development'
      },
      {
        type: 'heading',
        text: 'Installing Node.js'
      },
      {
        type: 'paragraph',
        text: 'Node.js is a JavaScript runtime that allows you to execute JavaScript code outside of a web browser. It\'s essential for modern JavaScript development, even if you\'re primarily focused on front-end work.'
      },
      {
        type: 'list',
        items: [
          'Download Node.js from https://nodejs.org/ (choose the LTS version for stability)',
          'The installation includes npm (Node Package Manager), which we\'ll use to install JavaScript libraries',
          'Verify your installation by opening a terminal and typing "node -v" and "npm -v"'
        ]
      },
      {
        type: 'heading',
        text: 'Setting Up Version Control with Git'
      },
      {
        type: 'paragraph',
        text: 'Git is a version control system that helps you track changes to your code and collaborate with others. GitHub is a platform that hosts Git repositories and provides additional features for collaboration.'
      },
      {
        type: 'list',
        items: [
          'Download Git from https://git-scm.com/',
          'Create a free GitHub account at https://github.com/',
          'Configure Git with your username and email'
        ]
      },
      {
        type: 'heading',
        text: 'Browser Developer Tools'
      },
      {
        type: 'paragraph',
        text: 'Modern web browsers come with powerful developer tools that allow you to inspect, debug, and profile your JavaScript code. Chrome DevTools is particularly powerful and widely used in the industry.'
      },
      {
        type: 'list',
        items: [
          'Open Chrome DevTools by pressing F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)',
          'Familiarize yourself with the Console tab for JavaScript execution and debugging',
          'Learn to use the Sources tab for setting breakpoints and stepping through code'
        ]
      },
      {
        type: 'quote',
        text: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
        author: 'Abraham Lincoln'
      },
      {
        type: 'paragraph',
        text: 'This quote perfectly captures the importance of setting up your development environment properly before diving into coding. The time invested now will pay dividends throughout your JavaScript journey.'
      }
    ]
  },
  '1.3': {
    id: '1.3',
    title: 'Your First JavaScript Program',
    courseId: 'javascript-fundamentals',
    courseName: 'JavaScript Fundamentals',
    duration: '25 min',
    lastUpdated: 'April 2023',
    nextLessonId: '2.1',
    nextLessonTitle: 'Variables and Data Types',
    content: [
      {
        type: 'heading',
        text: 'Getting Started with JavaScript'
      },
      {
        type: 'paragraph',
        text: 'Now that your development environment is set up, it\'s time to write your first JavaScript program. We\'ll start with the classic "Hello, World!" example, then explore some basic concepts.'
      },
      {
        type: 'heading',
        text: 'Writing "Hello, World!"'
      },
      {
        type: 'paragraph',
        text: 'Let\'s create a simple HTML file that includes some JavaScript code. First, create a new file called index.html with the following content:'
      },
      {
        type: 'code',
        language: 'html',
        text: `<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript Program</title>
</head>
<body>
    <h1>Hello, World!</h1>
    
    <script>
        // This is a JavaScript comment
        console.log("Hello, World from JavaScript!");
        alert("Hello, World from a popup!");
    </script>
</body>
</html>`
      },
      {
        type: 'paragraph',
        text: 'Open this file in your web browser and you should see a heading that says "Hello, World!" and a popup alert with the same message. You can also open the browser\'s console (F12 > Console tab) to see the logged message.'
      },
      {
        type: 'heading',
        text: 'Understanding the Code'
      },
      {
        type: 'list',
        items: [
          'The <script> tag is used to embed JavaScript code in an HTML document',
          'console.log() outputs a message to the browser\'s JavaScript console',
          'alert() displays a popup message box to the user',
          'Comments in JavaScript start with // for single-line comments'
        ]
      },
      {
        type: 'heading',
        text: 'Using External JavaScript Files'
      },
      {
        type: 'paragraph',
        text: 'While you can write JavaScript directly in HTML, it\'s better practice to keep it in separate files. Let\'s create a file called script.js with the following content:'
      },
      {
        type: 'code',
        language: 'javascript',
        text: `// This is script.js
console.log("Hello from an external JavaScript file!");

// Function to show a greeting
function showGreeting() {
    const name = prompt("What's your name?");
    if (name) {
        alert("Hello, " + name + "! Welcome to JavaScript.");
    } else {
        alert("Hello, stranger! Welcome to JavaScript.");
    }
}

// Call the function
showGreeting();`
      },
      {
        type: 'paragraph',
        text: 'Now modify your HTML file to use this external script:'
      },
      {
        type: 'code',
        language: 'html',
        text: `<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript Program</title>
</head>
<body>
    <h1>Hello, World!</h1>
    
    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>
</body>
</html>`
      },
      {
        type: 'paragraph',
        text: 'This approach helps keep your code organized and maintainable, especially as your programs grow in complexity.'
      },
      {
        type: 'heading',
        text: 'JavaScript in the Real World'
      },
      {
        type: 'paragraph',
        text: 'You\'ve just written your first JavaScript program! This may seem simple, but these same principles are used in complex web applications like Gmail, Facebook, and Twitter. JavaScript allows you to create interactive, dynamic web pages that respond to user actions.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
        alt: 'Developer working on code',
        caption: 'From simple beginnings come great applications'
      }
    ]
  },
  // Additional lessons will follow the same pattern
  '2.1': {
    id: '2.1',
    title: 'Variables and Data Types',
    courseId: 'javascript-fundamentals',
    courseName: 'JavaScript Fundamentals',
    duration: '30 min',
    lastUpdated: 'April 2023',
    nextLessonId: '2.2',
    nextLessonTitle: 'Operators and Expressions',
    content: [
      {
        type: 'heading',
        text: 'Understanding Variables in JavaScript'
      },
      {
        type: 'paragraph',
        text: 'Variables are fundamental to programming - they allow us to store and manipulate data in our programs. Think of them as labeled containers that hold values which can change over time.'
      },
      {
        type: 'heading',
        text: 'Declaring Variables'
      },
      {
        type: 'paragraph',
        text: 'In modern JavaScript, we have three ways to declare variables:'
      },
      {
        type: 'code',
        language: 'javascript',
        text: `// Using let - for variables that can be reassigned
let age = 25;
age = 26; // This is fine

// Using const - for variables that cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// Using var (older way, generally avoided in modern code)
var name = "John";`
      },
      {
        type: 'paragraph',
        text: 'Best practices for variable declarations:'
      },
      {
        type: 'list',
        items: [
          'Use const by default',
          'Use let when you need to reassign values',
          'Avoid var in modern code',
          'Use meaningful variable names that describe what they contain'
        ]
      },
      {
        type: 'heading',
        text: 'JavaScript Data Types'
      },
      {
        type: 'paragraph',
        text: 'JavaScript has several built-in data types that can be categorized as primitive and object types.'
      },
      {
        type: 'heading',
        text: 'Primitive Data Types'
      },
      {
        type: 'code',
        language: 'javascript',
        text: `// Number - represents numeric values
let age = 25;
let price = 19.99;

// String - represents text
let firstName = "John";
let lastName = 'Doe';
let greeting = \`Hello, \${firstName}\`; // Template string (ES6)

// Boolean - represents true/false values
let isActive = true;
let isCompleted = false;

// Undefined - represents a variable that has been declared but not assigned
let unknown;
console.log(unknown); // undefined

// Null - represents the intentional absence of any value
let empty = null;

// Symbol - represents a unique identifier (ES6)
const id = Symbol('id');`
      },
      {
        type: 'heading',
        text: 'Object Types'
      },
      {
        type: 'code',
        language: 'javascript',
        text: `// Object - a collection of key-value pairs
const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};

// Array - an ordered collection of values
const colors = ["red", "green", "blue"];

// Function - a reusable block of code
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Date
const today = new Date();`
      },
      {
        type: 'heading',
        text: 'Type Checking and Conversion'
      },
      {
        type: 'paragraph',
        text: 'JavaScript is a dynamically typed language, which means you don\'t have to declare the type of a variable when you create it. The type is determined automatically when the program runs.'
      },
      {
        type: 'code',
        language: 'javascript',
        text: `// Checking types
let age = 25;
console.log(typeof age); // "number"

let name = "John";
console.log(typeof name); // "string"

// Type conversion
let numString = "42";
let num = Number(numString); // Convert string to number
console.log(num, typeof num); // 42 "number"

let value = 123;
let valueString = String(value); // Convert number to string
console.log(valueString, typeof valueString); // "123" "string"

// Implicit type conversion (coercion)
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (numeric subtraction)`
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'JavaScript code on a screen',
        caption: 'Understanding data types is crucial for writing robust JavaScript programs'
      }
    ]
  }
};

export default lessonContent;

// Helper functions to work with lessons
export function getLessonById(lessonId: string): LessonData | undefined {
  return lessonContent[lessonId];
}

export function getNextLessonId(currentLessonId: string): string | undefined {
  const lesson = getLessonById(currentLessonId);
  return lesson?.nextLessonId;
}

export function getAllLessonIds(): string[] {
  return Object.keys(lessonContent);
}
