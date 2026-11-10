import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { searchTGLC } from '../../utils/searchEngine';
import { SearchCategoryType, GlobalSearchResult } from '../../types';
import { Search, X, ArrowUpRight, Compass, Calendar, BookOpen, Building2, ChevronRight, CornerDownLeft } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, navigateTo, openIntroductionModal } = useNavigation();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategoryType>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when opened & reset state
  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
      setCategory('all');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Perform search query
  const results = useMemo(() => {
    return searchTGLC(query, category);
  }, [query, category]);

  // Clamp selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results, category]);

  // Handle keyboard navigation within results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
      return;
    }

    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = results[selectedIndex];
      if (selected) {
        navigateTo(selected.targetRoute, selected.routeParams);
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (!resultsContainerRef.current) return;
    const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (result: GlobalSearchResult) => {
    navigateTo(result.targetRoute, result.routeParams);
  };

  const getCategoryIcon = (cat: GlobalSearchResult['category']) => {
    switch (cat) {
      case 'services':
        return <Compass className="w-3.5 h-3.5 text-[#8A7654]" />;
      case 'journal':
        return <BookOpen className="w-3.5 h-3.5 text-[#8A7654]" />;
      case 'calendar':
        return <Calendar className="w-3.5 h-3.5 text-[#8A7654]" />;
      case 'consortium':
      default:
        return <Building2 className="w-3.5 h-3.5 text-[#8A7654]" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global Search and Directory"
      className="fixed inset-0 z-50 bg-[#0B0B0B]/85 backdrop-blur-md flex items-start justify-center pt-12 sm:pt-20 px-4 sm:px-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeSearch();
      }}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="w-full max-w-3xl bg-[#121212] border border-[#262626] shadow-2xl text-[#F4F1EA] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 relative"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3.5 px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <Search className="w-5 h-5 text-[#8A7654] shrink-0" aria-hidden="true" />
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, practices, articles, calendar events, or enclaves..."
            aria-label="Search consortium records"
            className="w-full bg-transparent font-serif text-lg sm:text-xl text-[#F4F1EA] placeholder-[#5C574F] focus:outline-none"
          />

          {query && (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 text-[#8E8A83] hover:text-white transition-colors"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#262626] shrink-0">
            <kbd className="text-[10px] tracking-widest uppercase text-[#8E8A83] border border-[#2E2E2E] px-2 py-0.5 font-sans bg-[#0E0E0E]">
              ESC
            </kbd>
          </div>

          <button
            onClick={closeSearch}
            className="sm:hidden p-1 text-[#8E8A83] hover:text-white"
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar (Zero-Pill Discipline: Unboxed Text Controls with hairline borders) */}
        <div className="flex items-center gap-1 sm:gap-2 px-6 py-2.5 border-b border-[#1E1E1E] bg-[#0E0E0E] overflow-x-auto text-xs tracking-wider uppercase font-medium scrollbar-none">
          <button
            onClick={() => setCategory('all')}
            className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
              category === 'all'
                ? 'text-white border-b border-[#8A7654]'
                : 'text-[#8E8A83] hover:text-[#D9D4CA]'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setCategory('services')}
            className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
              category === 'services'
                ? 'text-white border-b border-[#8A7654]'
                : 'text-[#8E8A83] hover:text-[#D9D4CA]'
            }`}
          >
            Services & Practices
          </button>
          <button
            onClick={() => setCategory('journal')}
            className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
              category === 'journal'
                ? 'text-white border-b border-[#8A7654]'
                : 'text-[#8E8A83] hover:text-[#D9D4CA]'
            }`}
          >
            Journal
          </button>
          <button
            onClick={() => setCategory('calendar')}
            className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
              category === 'calendar'
                ? 'text-white border-b border-[#8A7654]'
                : 'text-[#8E8A83] hover:text-[#D9D4CA]'
            }`}
          >
            London Calendar
          </button>
          <button
            onClick={() => setCategory('consortium')}
            className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
              category === 'consortium'
                ? 'text-white border-b border-[#8A7654]'
                : 'text-[#8E8A83] hover:text-[#D9D4CA]'
            }`}
          >
            Consortium & Enclaves
          </button>
        </div>

        {/* Results Body */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto divide-y divide-[#1A1A1A] max-h-[55vh] scrollbar-thin"
        >
          {results.length > 0 ? (
            <div>
              {!query.trim() && (
                <div className="px-6 py-2.5 bg-[#141414]/60 text-[11px] tracking-widest uppercase text-[#8A7654] font-medium flex items-center justify-between border-b border-[#1A1A1A]">
                  <span>Curated Editorial Suggestions</span>
                  <span className="text-[#6B655D] normal-case tracking-normal text-xs">Press ↑↓ to navigate</span>
                </div>
              )}

              {results.map((result, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={result.id}
                    data-index={idx}
                    onClick={() => handleSelectResult(result)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group px-6 py-3.5 cursor-pointer transition-colors duration-150 flex items-start justify-between gap-4 ${
                      isSelected ? 'bg-[#1A1A1A] text-white' : 'hover:bg-[#161616]'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      {/* Unboxed metadata kicker */}
                      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#8A7654] mb-1">
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(result.category)}
                          <span>{result.categoryLabel}</span>
                        </span>
                        <span aria-hidden="true" className="text-[#4A453F]">·</span>
                        <span className="text-[#8E8A83] truncate">{result.meta}</span>
                      </div>

                      {/* Result title */}
                      <h4 className="font-serif text-base sm:text-lg text-[#F4F1EA] group-hover:text-white transition-colors truncate">
                        {result.title}
                      </h4>

                      {/* Result snippet */}
                      <p className="text-xs text-[#9C968A] line-clamp-1 mt-0.5 leading-relaxed">
                        {result.snippet}
                      </p>
                    </div>

                    {/* Action Affordance */}
                    <div className="flex items-center gap-2 shrink-0 pt-2 text-[#8E8A83] group-hover:text-[#F4F1EA]">
                      {isSelected && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#8A7654]">
                          <span>Select</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </span>
                      )}
                      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <Compass className="w-8 h-8 text-[#5C574F] mx-auto mb-3" />
              <h4 className="font-serif text-xl text-[#F4F1EA] mb-2">No Private Records Found</h4>
              <p className="text-xs text-[#9C968A] max-w-md mx-auto leading-relaxed mb-6">
                No items match “{query}”. TGLC operates on unlisted discretion. If your inquiry requires bespoke sourcing or private introductions, our desk remains at your disposal.
              </p>
              <button
                onClick={() => {
                  closeSearch();
                  openIntroductionModal(`Inquiry regarding bespoke search: "${query}"`);
                }}
                className="px-5 py-2 text-xs font-medium tracking-widest uppercase text-[#0B0B0B] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] border border-[#D4AF37]/50 transition-all shadow-md"
              >
                Request Confidential Consultation
              </button>
            </div>
          )}
        </div>

        {/* Footer Ribbon with Key Commands & Direct Contact */}
        <div className="px-6 py-3 border-t border-[#1E1E1E] bg-[#0E0E0E] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#736E66]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#171717] border border-[#2E2E2E] text-[10px] font-sans">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-[#171717] border border-[#2E2E2E] text-[10px] font-sans">↓</kbd>
              <span className="ml-1 text-[#8E8A83]">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#171717] border border-[#2E2E2E] text-[10px] font-sans">↵</kbd>
              <span className="ml-1 text-[#8E8A83]">Open</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#171717] border border-[#2E2E2E] text-[10px] font-sans">ESC</kbd>
              <span className="ml-1 text-[#8E8A83]">Close</span>
            </span>
          </div>

          <div className="text-right">
            <span>Private Member Line: </span>
            <span className="text-[#D9D4CA] font-medium">+44 (0)20 7946 0849</span>
          </div>
        </div>
      </div>
    </div>
  );
};
