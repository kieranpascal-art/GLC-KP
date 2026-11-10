import React, { useState, useMemo } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { LONDON_LOCATIONS, LONDON_DISTRICTS } from '../../data/londonLocationsData';
import {
  LondonVenue,
  filterLondonLocations,
  getDistrictFocusViewBox,
} from '../../utils/londonLocations';
import {
  MapPin,
  Search,
  Compass,
  ArrowUpRight,
  Sparkles,
  Layers,
  ChevronRight,
  Shield,
  Clock,
  Navigation,
  X,
  ExternalLink
} from 'lucide-react';

interface ConsortiumLocationsMapProps {
  initialDistrict?: string;
}

export const ConsortiumLocationsMap: React.FC<ConsortiumLocationsMapProps> = ({ initialDistrict = 'all' }) => {
  const { openIntroductionModal } = useNavigation();
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVenue, setActiveVenue] = useState<LondonVenue | null>(LONDON_LOCATIONS[0]);
  const [hoveredVenue, setHoveredVenue] = useState<LondonVenue | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'directory' | 'split'>('split');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  // Filtered venues based on search & category
  const filteredVenues = useMemo(() => {
    return filterLondonLocations(LONDON_LOCATIONS, {
      districtKey: selectedDistrict,
      category: selectedCategory,
      query: searchQuery
    });
  }, [selectedDistrict, selectedCategory, searchQuery]);

  // ViewBox calculation
  const viewBox = useMemo(() => {
    const box = getDistrictFocusViewBox(selectedDistrict);
    return `${box.x} ${box.y} ${box.width} ${box.height}`;
  }, [selectedDistrict]);

  const categories = [
    'all',
    'Horology & Jewellery',
    'Department Stores & Penthouse Salons',
    'Dining & Private Clubs',
    'Arts & Antiquities',
    'Sporting Heritage'
  ];

  const currentDisplayVenue = hoveredVenue || activeVenue || filteredVenues[0] || LONDON_LOCATIONS[0];

  return (
    <section className="bg-[#0B0B0B] border-t border-[#1F1F1F] text-[#F4F1EA] py-16 sm:py-24" id="consortium-locations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#222222] pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8A7654]">
              <Compass className="w-3.5 h-3.5 text-[#8A7654]" />
              <span>Cartography of Access & Favored Venues</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
              Consortium Locations
            </h2>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              Explore London’s most discreet enclaves and TGLC-favored sanctums—from private horology vaults and department store penthouses to historic tennis lawns and members’ courtyards. Hover over map pins or select an enclave to inspect access privileges.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-[#141414] border border-[#262626] p-1 self-start lg:self-end">
            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                viewMode === 'split' ? 'bg-[#242424] text-white font-medium' : 'text-[#888888] hover:text-[#CCCCCC]'
              }`}
            >
              Interactive & Details
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                viewMode === 'map' ? 'bg-[#242424] text-white font-medium' : 'text-[#888888] hover:text-[#CCCCCC]'
              }`}
            >
              Full Cartography
            </button>
            <button
              onClick={() => setViewMode('directory')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                viewMode === 'directory' ? 'bg-[#242424] text-white font-medium' : 'text-[#888888] hover:text-[#CCCCCC]'
              }`}
            >
              Index List
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          {/* District Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin border-b border-[#1A1A1A]">
            {LONDON_DISTRICTS.map((district) => (
              <button
                key={district.key}
                onClick={() => {
                  setSelectedDistrict(district.key);
                  const inDistrict = LONDON_LOCATIONS.filter(
                    (v) => district.key === 'all' || v.districtKey === district.key
                  );
                  if (inDistrict.length > 0) {
                    setActiveVenue(inDistrict[0]);
                  }
                }}
                className={`whitespace-nowrap px-3.5 py-1.5 text-xs uppercase tracking-wider transition-all border ${
                  selectedDistrict === district.key
                    ? 'border-[#8A7654] bg-[#1C1814] text-[#F4F1EA] font-medium shadow-sm'
                    : 'border-[#222222] bg-[#121212] text-[#888888] hover:text-[#CCCCCC] hover:bg-[#161616]'
                }`}
              >
                {district.shortName}
              </button>
            ))}
          </div>

          {/* Category Filter and Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] uppercase tracking-wider text-[#777777] mr-1 shrink-0">Interest:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 whitespace-nowrap uppercase tracking-wider text-[11px] transition-colors ${
                    selectedCategory === cat
                      ? 'text-[#F4F1EA] border-b border-[#8A7654] font-medium'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All Interests' : cat}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#777777]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Selfridges, Harrods, watches..."
                className="w-full bg-[#141414] border border-[#262626] pl-9 pr-3 py-1.5 text-xs text-[#F4F1EA] placeholder-[#666666] focus:outline-none focus:border-[#8A7654]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777777] hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area based on viewMode */}
        {viewMode !== 'directory' ? (
          <div className={`grid grid-cols-1 ${viewMode === 'split' ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-8 items-start`}>
            
            {/* The Interactive Map View */}
            <div className={`${viewMode === 'split' ? 'lg:col-span-7' : 'lg:col-span-12'} bg-[#121212] border border-[#222222] p-4 sm:p-6 relative overflow-hidden group`}>
              
              {/* Map Ambient Overlays */}
              <div className="flex items-center justify-between text-xs text-[#777777] mb-3 pb-2 border-b border-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8A7654] animate-pulse" />
                  <span className="uppercase tracking-widest text-[10px] text-[#8A7654]">
                    Interactive London Grid · 51.5074° N, 0.1278° W
                  </span>
                </div>
                <span className="text-[11px] text-[#8E8A83]">
                  {filteredVenues.length} {filteredVenues.length === 1 ? 'Enclave' : 'Enclaves'} Mapped
                </span>
              </div>

              {/* Responsive SVG Map */}
              <div className="relative w-full aspect-[16/10] bg-[#0E0E0E] border border-[#1C1C1C] rounded-sm overflow-hidden select-none">
                <svg
                  viewBox={viewBox}
                  className="w-full h-full transition-all duration-700 ease-out"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Interactive Cartography of London Luxury Enclaves"
                >
                  <defs>
                    {/* Grid Pattern */}
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161616" strokeWidth="0.5" />
                    </pattern>
                    
                    {/* Thames Glow Filter */}
                    <linearGradient id="thamesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#8A7654" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1E293B" stopOpacity="0.5" />
                    </linearGradient>

                    {/* Park Fill */}
                    <linearGradient id="parkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#122416" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0B180E" stopOpacity="0.25" />
                    </linearGradient>

                    <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8A7654" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8A7654" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Background Grid */}
                  <rect x="0" y="0" width="1000" height="600" fill="#0D0D0D" />
                  <rect x="0" y="0" width="1000" height="600" fill="url(#grid)" />

                  {/* Royal Parks & Green Enclaves */}
                  {/* Richmond Park / Wimbledon Common (South West) */}
                  <path
                    d="M 60,420 C 90,390 190,400 230,450 C 260,490 240,560 170,580 C 100,590 50,540 60,420 Z"
                    fill="url(#parkGradient)"
                    stroke="#1E3824"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text x="130" y="520" fill="#2E5236" fontSize="10" fontFamily="serif" fontStyle="italic" textAnchor="middle">
                    Richmond Park & Wimbledon Common
                  </text>

                  {/* Hyde Park & Kensington Gardens */}
                  <path
                    d="M 310,230 C 370,225 430,240 425,290 C 410,320 330,330 290,300 C 275,270 285,240 310,230 Z"
                    fill="url(#parkGradient)"
                    stroke="#1E3824"
                    strokeWidth="1"
                  />
                  <text x="350" y="275" fill="#2E5236" fontSize="9" fontFamily="serif" fontStyle="italic" textAnchor="middle">
                    Hyde Park & Kensington Gardens
                  </text>

                  {/* Regent's Park */}
                  <circle cx="430" cy="110" r="50" fill="url(#parkGradient)" stroke="#1E3824" strokeWidth="1" />
                  <text x="430" y="112" fill="#2E5236" fontSize="9" fontFamily="serif" fontStyle="italic" textAnchor="middle">
                    Regent’s Park
                  </text>

                  {/* Green Park & St James's Park */}
                  <path
                    d="M 470,305 C 510,295 540,320 535,350 C 510,360 460,345 470,305 Z"
                    fill="url(#parkGradient)"
                    stroke="#1E3824"
                    strokeWidth="0.8"
                  />
                  <text x="500" y="335" fill="#2E5236" fontSize="8" fontFamily="serif" fontStyle="italic" textAnchor="middle">
                    Green Park & St James’s
                  </text>

                  {/* Battersea Park */}
                  <path
                    d="M 330,440 C 380,430 420,440 410,480 C 370,490 320,480 330,440 Z"
                    fill="url(#parkGradient)"
                    stroke="#1E3824"
                    strokeWidth="0.8"
                  />

                  {/* The River Thames (Curving Natural S-Bend through London) */}
                  <path
                    d="M 40,560 Q 150,480 280,440 T 430,420 T 570,370 T 680,310 T 820,330 T 960,310"
                    fill="none"
                    stroke="url(#thamesGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 40,560 Q 150,480 280,440 T 430,420 T 570,370 T 680,310 T 820,330 T 960,310"
                    fill="none"
                    stroke="#8A7654"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  <text x="760" y="345" fill="#8A7654" fontSize="9" fontFamily="serif" fontStyle="italic" opacity="0.6">
                    River Thames
                  </text>

                  {/* District Boundary Markers & Subtle Labels */}
                  <text x="470" y="275" fill="#555555" fontSize="11" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    MAYFAIR
                  </text>
                  <text x="525" y="315" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    ST JAMES’S
                  </text>
                  <text x="380" y="375" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    BELGRAVIA
                  </text>
                  <text x="340" y="415" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    CHELSEA
                  </text>
                  <text x="460" y="175" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    MARYLEBONE
                  </text>
                  <text x="560" y="225" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    SOHO
                  </text>
                  <text x="720" y="245" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    THE CITY
                  </text>
                  <text x="210" y="495" fill="#555555" fontSize="10" fontFamily="serif" letterSpacing="2" textAnchor="middle">
                    WIMBLEDON
                  </text>

                  {/* Venue Marker Pins */}
                  {filteredVenues.map((venue, idx) => {
                    const isSelected = activeVenue?.id === venue.id;
                    const isHovered = hoveredVenue?.id === venue.id;
                    const isFocus = isSelected || isHovered;

                    return (
                      <g
                        key={venue.id}
                        transform={`translate(${venue.coordinates.x}, ${venue.coordinates.y})`}
                        className="cursor-pointer group/pin"
                        onMouseEnter={() => setHoveredVenue(venue)}
                        onMouseLeave={() => setHoveredVenue(null)}
                        onClick={() => {
                          setActiveVenue(venue);
                          setIsDrawerOpen(true);
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`${venue.name} in ${venue.neighborhood}`}
                      >
                        {/* Glow halo when active */}
                        {isFocus && (
                          <circle
                            cx="0"
                            cy="0"
                            r="22"
                            fill="url(#pinGlow)"
                            className="animate-pulse"
                          />
                        )}

                        {/* Outer Pin Ring */}
                        <circle
                          cx="0"
                          cy="0"
                          r={isFocus ? 11 : 7}
                          fill={isFocus ? '#D4AF37' : '#141414'}
                          stroke={isFocus ? '#F0D572' : '#666666'}
                          strokeWidth={isFocus ? 2 : 1.2}
                          className="transition-all duration-300"
                        />

                        {/* Centre Core */}
                        <circle
                          cx="0"
                          cy="0"
                          r={isFocus ? 4.5 : 2.5}
                          fill={isFocus ? '#0B0B0B' : '#8A7654'}
                        />

                        {/* Floating Label when focused or in zoomed view */}
                        {(isFocus || selectedDistrict !== 'all') && (
                          <g transform="translate(0, -18)" className="pointer-events-none">
                            <rect
                              x={-Math.min(venue.name.length * 3.5, 90)}
                              y="-16"
                              width={Math.min(venue.name.length * 7, 180)}
                              height="18"
                              fill="#0B0B0B"
                              stroke="#8A7654"
                              strokeWidth="0.8"
                              opacity="0.95"
                            />
                            <text
                              x="0"
                              y="-4"
                              fill="#F4F1EA"
                              fontSize="8"
                              fontWeight="500"
                              textAnchor="middle"
                              letterSpacing="0.5"
                            >
                              {venue.name.length > 28 ? venue.name.substring(0, 26) + '...' : venue.name}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Quick Map Controls Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#0B0B0B]/90 border border-[#222222] px-3 py-1.5 text-[10px] text-[#9C968A] flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8A7654]" /> TGLC Access Enclave
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Selected Sanctum
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedDistrict('all')}
                    className="bg-[#121212]/90 hover:bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#D9D4CA] transition-colors"
                  >
                    Reset Zoom
                  </button>
                </div>
              </div>

              {/* Quick Carousel / Chip Selector below map */}
              <div className="mt-4 pt-3 border-t border-[#1F1F1F]">
                <div className="text-[10px] uppercase tracking-widest text-[#777777] mb-2">
                  Mapped in this selection ({filteredVenues.length}):
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {filteredVenues.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setActiveVenue(v);
                        setIsDrawerOpen(true);
                      }}
                      onMouseEnter={() => setHoveredVenue(v)}
                      onMouseLeave={() => setHoveredVenue(null)}
                      className={`px-2.5 py-1 text-[11px] whitespace-nowrap border text-left transition-all ${
                        activeVenue?.id === v.id
                          ? 'border-[#8A7654] bg-[#181818] text-[#F4F1EA] font-medium'
                          : 'border-[#222222] bg-[#0E0E0E] text-[#888888] hover:text-[#CCCCCC]'
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Detail Card / Drawer */}
            {viewMode === 'split' && currentDisplayVenue && (
              <div className="lg:col-span-5 bg-[#141414] border border-[#262626] p-6 sm:p-8 space-y-6 relative">
                
                {/* Venue Image with Badges */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-[#1A1A1A]">
                  <img
                    src={currentDisplayVenue.image}
                    alt={currentDisplayVenue.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill / Tag */}
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 border border-[#8A7654]/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#F4F1EA]">
                    {currentDisplayVenue.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#D9D4CA] flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[#8A7654]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{currentDisplayVenue.neighborhood}</span>
                    </span>
                    <span className="text-[10px] text-[#999999]">{currentDisplayVenue.postcode}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                    {currentDisplayVenue.districtName}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F1EA] leading-tight">
                    {currentDisplayVenue.name}
                  </h3>
                  <p className="text-xs text-[#8A7654] italic">
                    “{currentDisplayVenue.tagline}”
                  </p>
                </div>

                {/* Summary & Curatorial Notes */}
                <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">
                  {currentDisplayVenue.summary}
                </p>

                <div className="p-4 bg-[#0F0F0F] border border-[#222222] space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#8A7654]">
                    <Sparkles className="w-3 h-3 text-[#8A7654]" />
                    <span>Curator’s Operational Insight</span>
                  </div>
                  <p className="text-xs text-[#9C968A] leading-relaxed">
                    {currentDisplayVenue.curatorNotes}
                  </p>
                </div>

                {/* TGLC Access Privileges */}
                <div className="space-y-2.5">
                  <h4 className="text-[11px] uppercase tracking-widest text-[#8A7654] font-medium">
                    TGLC Access Privileges
                  </h4>
                  <ul className="space-y-2">
                    {currentDisplayVenue.tglcPrivileges.map((privilege, pIdx) => (
                      <li key={pIdx} className="text-xs text-[#C8C3BA] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#8A7654] rounded-full mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{privilege}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insider Tip & Season */}
                <div className="pt-4 border-t border-[#222222] grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#666666] block">Prime Season</span>
                    <span className="text-[#D9D4CA] text-xs font-light">{currentDisplayVenue.recommendedSeason}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#666666] block">Adjacent Haven</span>
                    <span className="text-[#D9D4CA] text-xs font-light">{currentDisplayVenue.closestSanctuary}</span>
                  </div>
                </div>

                {/* Insider Whisper */}
                <div className="text-xs text-[#9C968A] bg-[#171412] p-3 border-l-2 border-[#8A7654]">
                  <span className="text-[#8A7654] font-medium mr-1.5">Insider Note:</span>
                  {currentDisplayVenue.insiderTip}
                </div>

                {/* CTA Action */}
                <div className="pt-2">
                  <button
                    onClick={() => openIntroductionModal(`Inquiry regarding access to ${currentDisplayVenue.name}`)}
                    className="w-full py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Request Private Arrangements at This Venue</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Directory View (Index of all mapped enclaves) */}
        {viewMode === 'directory' || viewMode === 'map' ? (
          <div className="space-y-6 pt-4">
            <div className="border-b border-[#222222] pb-3 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#F4F1EA]">
                Complete Enclave Directory ({filteredVenues.length})
              </h3>
              <span className="text-xs text-[#8A7654]">St James’s · Mayfair · Knightsbridge · Marylebone · Wimbledon</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-[#121212] border border-[#222222] hover:border-[#8A7654]/70 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#1A1A1A] relative">
                      <img
                        src={venue.image}
                        alt={venue.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#0B0B0B]/90 border border-[#8A7654]/40 px-2 py-0.5 text-[9px] uppercase tracking-wider text-white">
                        {venue.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">
                        {venue.neighborhood} · {venue.postcode}
                      </span>
                      <h4 className="font-serif text-xl text-[#F4F1EA] group-hover:text-white transition-colors">
                        {venue.name}
                      </h4>
                      <p className="text-xs text-[#9C968A] leading-relaxed line-clamp-3 font-light">
                        {venue.summary}
                      </p>

                      <div className="pt-3 border-t border-[#1C1C1C] space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#666666] block">Access Highlights:</span>
                        <p className="text-xs text-[#C8C3BA] line-clamp-2">
                          {venue.tglcPrivileges.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => openIntroductionModal(`Inquiry regarding ${venue.name}`)}
                      className="w-full py-2.5 text-[11px] uppercase tracking-widest text-[#D9D4CA] hover:text-white bg-[#1A1A1A] hover:bg-[#222222] border border-[#2E2E2E] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Inquire Regarding Access</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

      </div>
    </section>
  );
};
