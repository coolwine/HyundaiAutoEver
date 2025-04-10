'use client';

import { useState } from 'react';

import { FAQ } from '@/data/faqData';

import FAQCategories from './FAQCategories';
import FAQList from './FAQList';
import FAQSearch from './FAQSearch';

const categories = [
  { id: 'all', name: '전체' },
  { id: 'general', name: '일반' },
  { id: 'service', name: '서비스' },
  { id: 'payment', name: '결제' },
  { id: 'technical', name: '기술지원' },
];

interface FAQClientWrapperProps {
  initialFaqs: FAQ[];
}

const FAQClientWrapper = ({ initialFaqs }: FAQClientWrapperProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = initialFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <FAQSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FAQCategories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {/*<FAQList faqs={filteredFAQs} />*/}
    </>
  );
};

export default FAQClientWrapper;
