
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tag, Layers, Filter } from 'lucide-react';

interface FilterSectionProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  selectedLevel: string;
  setSelectedCategory: (category: string) => void;
  setSelectedLevel: (level: string) => void;
  showFilters: boolean;
  toggleFilters: () => void;
}

const FilterSection = ({
  categories,
  levels,
  selectedCategory,
  selectedLevel,
  setSelectedCategory,
  setSelectedLevel,
  showFilters,
  toggleFilters
}: FilterSectionProps) => {
  return (
    <>
      <button
        onClick={toggleFilters}
        className="md:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
      >
        <Filter className="h-5 w-5" />
        Filters
      </button>
      
      <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64`}>
        <div className="bg-background rounded-xl border border-border p-6 shadow-sm space-y-6">
          <div>
            <div className="flex items-center gap-2 font-medium text-base mb-4">
              <Tag className="h-5 w-5 text-primary" /> 
              <h3>Categories</h3>
            </div>
            
            <RadioGroup 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
              className="space-y-2"
            >
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={`category-${category}`} />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer hover:text-primary transition-colors"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div>
            <div className="flex items-center gap-2 font-medium text-base mb-4">
              <Layers className="h-5 w-5 text-primary" /> 
              <h3>Experience Level</h3>
            </div>
            
            <RadioGroup 
              value={selectedLevel} 
              onValueChange={setSelectedLevel}
              className="space-y-2"
            >
              {levels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <RadioGroupItem value={level} id={`level-${level}`} />
                  <Label 
                    htmlFor={`level-${level}`}
                    className="text-sm cursor-pointer hover:text-primary transition-colors"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
