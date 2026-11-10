import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { JOURNAL_ARTICLES } from '../../data/tglcData';
import { ArrowUpRight, BookOpen, Clock, User, Filter } from 'lucide-react';

const JOURNAL_CATEGORIES = [
  'All Articles',
  'London Intelligence',
  'Travel Notes',
  'The Cultural Edit',
  'Dining & Entertaining',
  'Private Residences',
  'Objects of Desire',
  'Member Stories'
];

export const JournalPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredArticles = JOURNAL_ARTICLES.filter(
    (a) => selectedCategory === 'All Articles' || a.category === selectedCategory
  );

  const featuredArticle = JOURNAL_ARTICLES[0];
  const gridArticles = selectedCategory === 'All Articles' ? filteredArticles.slice(1) : filteredArticles;

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-10 sm:pt-14 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            The Journal of The Global Luxury Consortium
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
            London Intelligence & Cultural Notes
          </h1>
          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            “The details are everything.”
          </p>
          <p className="text-sm text-[#9C968A] leading-relaxed font-light max-w-2xl">
            Essays, field dispatches, and private guides examining the architecture of travel, contemporary art, dining, rare objects, and the quiet art of living well.
          </p>
        </div>

        {/* Category Filters */}
        <div className="border-y border-[#202020] py-4 flex flex-wrap gap-2">
          {JOURNAL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#1C1C1C] text-white border border-[#8A7654]'
                  : 'text-[#9C968A] hover:text-white bg-[#121212] border border-[#222222]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Lead Story (shown when All Articles is active) */}
        {selectedCategory === 'All Articles' && (
          <div
            onClick={() => navigateTo('journal-article', { articleSlug: featuredArticle.slug })}
            className="group cursor-pointer p-8 sm:p-12 bg-[#121212] border border-[#222222] hover:border-[#444444] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#8A7654]">
                <span>Lead Editorial</span>
                <span>·</span>
                <span>{featuredArticle.category}</span>
                <span>·</span>
                <span className="text-[#888888]">{featuredArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] group-hover:text-white leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="font-serif italic text-lg text-[#D9D4CA]">
                {featuredArticle.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light max-w-2xl">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between text-xs text-[#777777] border-t border-[#1C1C1C]">
                <span>By {featuredArticle.author}, {featuredArticle.authorRole}</span>
                <span className="text-[#8A7654] group-hover:text-white transition-colors flex items-center gap-1">
                  <span>Read Feature Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((art) => (
            <div
              key={art.slug}
              onClick={() => navigateTo('journal-article', { articleSlug: art.slug })}
              className="group cursor-pointer bg-[#121212] border border-[#222222] hover:border-[#444444] p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden mb-5 bg-[#1C1C1C]">
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#8A7654] mb-2">
                  <span>{art.category}</span>
                  <span>·</span>
                  <span className="text-[#888888]">{art.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F4F1EA] group-hover:text-white mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#9C968A] leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#777777]">
                <span>{art.author}</span>
                <span className="text-[#8A7654] group-hover:text-[#F4F1EA] transition-colors flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
