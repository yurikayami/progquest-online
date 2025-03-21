import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Newsletter from '@/components/Newsletter';
import { Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FilterSection from '@/components/FilterSection';

// Sample course data
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
  },
  {
    id: "web-development-bootcamp",
    title: "Full-Stack Web Development Bootcamp",
    description: "Comprehensive course covering HTML, CSS, JavaScript, Node.js, and databases to build complete web applications.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    level: "Beginner",
    duration: "12 weeks",
    instructor: "Jessica Lee",
    rating: 4.8,
    lessons: 64
  },
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    description: "Learn the principles of machine learning and how to apply them to solve real-world problems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI & Machine Learning",
    level: "Intermediate",
    duration: "8 weeks",
    instructor: "Robert Kim",
    rating: 4.9,
    lessons: 36
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native for iOS and Android.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Mobile Development",
    level: "Intermediate",
    duration: "8 weeks",
    instructor: "Amanda Chen",
    rating: 4.7,
    lessons: 28
  }
];

const categories = ["All", "JavaScript", "Python", "React", "Web Development", "AI & Machine Learning", "Mobile Development"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>(allCourses);
  const location = useLocation();
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    
    if (categoryParam) {
      const formattedCategory = categoryParam
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        
      const matchedCategory = categories.find(
        cat => cat.toLowerCase() === formattedCategory.toLowerCase()
      );
      
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
      } else {
        setSelectedCategory("All");
      }
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = [...allCourses];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        course => 
          course.title.toLowerCase().includes(query) || 
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }
    
    if (selectedLevel !== "All") {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }
    
    setFilteredCourses(filtered);
  }, [searchQuery, selectedCategory, selectedLevel]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="container px-6 mx-auto mb-12">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-muted-foreground">
              Browse our collection of programming courses designed to help you level up your skills
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSection
              categories={categories}
              levels={levels}
              selectedCategory={selectedCategory}
              selectedLevel={selectedLevel}
              setSelectedCategory={setSelectedCategory}
              setSelectedLevel={setSelectedLevel}
              showFilters={showFilters}
              toggleFilters={toggleFilters}
            />
            
            <div className="flex-grow">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-background border border-border rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
