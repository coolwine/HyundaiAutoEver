'use client';

interface Category {
  id: string;
  name: string;
}

interface FAQCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQCategories = ({ categories, activeCategory, onCategoryChange }: FAQCategoriesProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-2 rounded-full ${
              activeCategory === category.id
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQCategories; 