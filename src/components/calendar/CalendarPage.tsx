import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { CALENDAR_EVENTS } from '../../data/tglcData';
import { CalendarEvent } from '../../types';
import { ArrowUpRight, Calendar as CalendarIcon, MapPin, Filter, Check, Clock, Grid, List } from 'lucide-react';

const CATEGORIES = [
  'All Events',
  'Art & Culture',
  'Dining',
  'Fashion',
  'Music',
  'Sport',
  'Family',
  'London After Dark',
  'Private Invitations'
];

export const CalendarPage: React.FC = () => {
  const { openIntroductionModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');
  const [selectedMonth, setSelectedMonth] = useState<'ALL' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER'>('ALL');

  const filteredEvents = CALENDAR_EVENTS.filter((e) => {
    const matchCat =
      selectedCategory === 'All Events' ||
      (selectedCategory === 'Private Invitations' ? e.isPrivateInvitation : e.category === selectedCategory);
    const matchMonth = selectedMonth === 'ALL' || e.month === selectedMonth;
    return matchCat && matchMonth;
  });

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            Seasonal Agenda · Summer & Autumn 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
            The London Calendar
          </h1>
          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            “London, understood from every angle.”
          </p>
          <p className="text-sm text-[#9C968A] leading-relaxed font-light max-w-2xl">
            A curated quarterly schedule of gallery previews, sporting debentures, cellar dinners, opera opening nights, and countryside escapes. All listings are curated recommendations and remain subject to availability, invitation, and change.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="space-y-4 border-y border-[#202020] py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Category Segmented Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#1C1C1C] text-white border border-[#8A7654]'
                      : 'text-[#9C968A] hover:text-white bg-[#121212] border border-[#222222]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Month Filter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#121212] border border-[#222222] p-1">
                {(['ALL', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                      selectedMonth === m ? 'bg-[#222222] text-white font-semibold' : 'text-[#888888] hover:text-[#D9D4CA]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="flex items-center bg-[#121212] border border-[#222222] p-1">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 transition-colors ${viewMode === 'cards' ? 'bg-[#222222] text-white' : 'text-[#777777]'}`}
                  aria-label="Cards view"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`p-1.5 transition-colors ${viewMode === 'timeline' ? 'bg-[#222222] text-white' : 'text-[#777777]'}`}
                  aria-label="Timeline list view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#8A7654]">
          <span>Showing {filteredEvents.length} Curated Experiences</span>
          <span className="text-[#666666]">Updated Weekly by TGLC Cultural Desk</span>
        </div>

        {/* Events Layout: Cards View */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                className="group bg-[#121212] border border-[#222222] hover:border-[#444444] p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden mb-4 bg-[#1C1C1C]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#8A7654] tracking-widest uppercase text-[11px] font-medium">{item.category}</span>
                    <span className="text-[#D9D4CA] font-mono text-[11px]">{item.dates}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA] group-hover:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9C968A] leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <div className="p-3 bg-[#161616] border border-[#222222] text-[11px] text-[#D9D4CA] italic leading-relaxed mb-4">
                    “{item.curatorNote}”
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <div className="text-[11px] text-[#777777] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7654]" />
                    <span className="line-clamp-1">{item.neighbourhood}</span>
                  </div>

                  <button
                    onClick={() => openIntroductionModal(`Inquiry / RSVP for: ${item.title}`)}
                    className="text-xs uppercase tracking-wider text-[#8A7654] hover:text-[#F4F1EA] transition-colors flex items-center gap-1"
                  >
                    <span>Inquire / RSVP</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Events Layout: Timeline List View */
          <div className="divide-y divide-[#1F1F1F] border-y border-[#1F1F1F]">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#121212] px-4 transition-colors"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-20 text-center shrink-0">
                    <span className="block text-xs font-mono tracking-widest text-[#8A7654]">{item.month}</span>
                    <span className="font-serif text-3xl text-[#F4F1EA]">{item.day}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7654]">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span className="text-[#D9D4CA]">{item.neighbourhood}</span>
                      {item.isPrivateInvitation && (
                        <span className="text-[#0B0B0B] bg-gradient-to-r from-[#D4AF37] to-[#C5A059] font-semibold px-2 py-0.5 text-[9px] uppercase tracking-widest">
                          Invitation Only
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-[#F4F1EA]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#9C968A] max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-[11px] text-[#777777] flex items-center gap-1 pt-1">
                      <MapPin className="w-3 h-3 text-[#8A7654]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-auto">
                  <button
                    onClick={() => openIntroductionModal(`Inquiry / RSVP for: ${item.title}`)}
                    className="px-5 py-2 text-xs uppercase tracking-widest bg-[#181818] hover:bg-[#252525] text-[#F4F1EA] border border-[#333333] transition-colors flex items-center gap-1.5"
                  >
                    <span>Inquire / RSVP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7654]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Editorial Callout */}
        <div className="p-10 bg-[#121212] border border-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8A7654]">Custom Itineraries</span>
            <h3 className="font-serif text-2xl text-[#F4F1EA] mt-1">Seeking an Unlisted Experience?</h3>
            <p className="text-xs text-[#9C968A] mt-1 max-w-lg">
              Our cultural practice leads routinely design bespoke weekends for members around private gallery visits, historic estate tours, or private sporting debentures.
            </p>
          </div>
          <button
            onClick={() => openIntroductionModal('Bespoke Cultural Itinerary')}
            className="px-7 py-3 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all whitespace-nowrap shrink-0"
          >
            Design a Bespoke Weekend
          </button>
        </div>

      </div>
    </div>
  );
};
