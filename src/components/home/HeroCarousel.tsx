import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, ChevronLeft, ChevronRight, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  id: number;
  image: string;
  tag: string;
  locationLabel: string;
  headline: string;
  supporting: string;
  ctaText: string;
  targetPage: any;
  targetParams?: any;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
    tag: 'English Gentleman & Lady · Private Fleet',
    locationLabel: 'Mayfair & St James’s · Curated Chauffeur Service',
    headline: 'Discretion by Default. British Poise by Nature.',
    supporting: 'A black Rolls-Royce Cullinan waiting in the evening lamplight, coach doors held open with quiet military precision, and London moving in absolute harmony with your schedule.',
    ctaText: 'Explore Chauffeur & Fleet',
    targetPage: 'service-detail',
    targetParams: { serviceId: 'transport-security' }
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2400&auto=format&fit=crop',
    tag: 'Savile Row Bespoke & Haute Horlogerie',
    locationLabel: 'Savile Row, Mayfair & Private Dressing Suites',
    headline: 'The Art of the British Gentleman & Lady.',
    supporting: 'Impeccable dinner suits, hand-cut Savile Row master tailoring, and provenance-verified acquisitions of elusive Rolex, Patek Philippe, and Cartier timepieces.',
    ctaText: 'Explore Sourcing & Tailoring',
    targetPage: 'service-detail',
    targetParams: { serviceId: 'luxury-sourcing' }
  },
  {
    id: 3,
    image: '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
    tag: 'Haute Couture & Heritage Salons · Harrods & Liberty',
    locationLabel: 'Regent Street, Mayfair & Knightsbridge Penthouse Suites',
    headline: 'Closed-Door Shopping & Landmark Salons.',
    supporting: 'Closed-door penthouse suites at Harrods, private viewings along Old Bond Street, and couture collections presented privately at your residence before public release.',
    ctaText: 'Explore Luxury Salons',
    targetPage: 'service-detail',
    targetParams: { serviceId: 'experiences-culture' }
  },
  {
    id: 4,
    image: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
    tag: 'Private Sanctums & Maritime Escapes',
    locationLabel: 'Tower Bridge & River Thames · Private Club Access',
    headline: 'The Table Nobody Else Can Book.',
    supporting: 'Chilled Bollinger on a chartered Thames yacht at sunset, corner tables reserved at private St James’s clubs, and discreet subterranean dining.',
    ctaText: 'Explore Dining & Clubs',
    targetPage: 'service-detail',
    targetParams: { serviceId: 'dining-nightlife' }
  },
  {
    id: 5,
    image: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
    tag: 'Private Aviation · Intercontinental Range',
    locationLabel: 'RAF Northolt & Farnborough · Global Mobility',
    headline: 'Every Departure, Pure Elegance.',
    supporting: 'Ultra-long-range cabin comfort, tarmac transfers at thirty seconds’ notice, and seamless private flights to Zurich, Monaco, and Aspen.',
    ctaText: 'Explore Private Aviation',
    targetPage: 'service-detail',
    targetParams: { serviceId: 'travel-aviation' }
  },
  {
    id: 6,
    image: '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg',
    tag: 'Stately Residences · Country Retreats',
    locationLabel: 'The Cotswolds & Surrey Enclaves · Private Manors',
    headline: 'English Sanctuaries, Flawlessly Kept.',
    supporting: 'Turnkey country house provisioning, private shooting syndicates, and heritage estates prepared to the exact standard of a five-star hotel.',
    ctaText: 'Request an Introduction',
    targetPage: 'contact'
  }
];

export const HeroCarousel: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  const handleCta = () => {
    if (slide.targetPage === 'contact' || slide.ctaText === 'Request an Introduction') {
      openIntroductionModal();
    } else {
      navigateTo(slide.targetPage, slide.targetParams);
    }
  };

  return (
    <div
      className="relative w-full h-[94vh] min-h-[660px] max-h-[1100px] bg-[#07080A] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with smooth framer-motion Ken-Burns transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center"
          />
          {/* Deep cinematic gradient scrim tailored for luxury readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-[#0B0B0B]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Floating subtle Gold Monogram Watermark in top right */}
      <div className="absolute top-28 right-8 sm:right-16 z-10 pointer-events-none opacity-20 hidden lg:block">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
          alt="Watermark Crest"
          className="w-32 h-40 object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-end pb-16 sm:pb-24">
        
        {/* Animated Category / Location Marker */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`marker-${slide.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex flex-wrap items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#E6CA85] font-semibold bg-[#141416]/80 px-2.5 py-1 border border-[#C5A059]/40 backdrop-blur-md">
              {slide.tag}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D9D4CA]/80 font-light hidden sm:inline">
              · {slide.locationLabel}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Big Editorial Headline with slide animation */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4F1EA] tracking-tight leading-[1.04] max-w-4xl text-balance"
          >
            {slide.headline}
          </motion.h1>
        </AnimatePresence>

        {/* Human, Bespoke Supporting Narrative */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`support-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-6 font-sans text-base sm:text-lg md:text-xl text-[#D9D4CA] max-w-2xl font-light leading-relaxed"
          >
            {slide.supporting}
          </motion.p>
        </AnimatePresence>

        {/* Action Controls & Slide Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-6 pt-5 border-t border-white/10"
        >
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleCta}
              className="px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all duration-300 flex items-center gap-2.5 shadow-xl shadow-[#D4AF37]/20 group"
            >
              <span>{slide.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0B0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => openIntroductionModal('General Membership & Private Consultation')}
              className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] text-[#E6CA85] hover:text-white border border-[#C5A059]/50 hover:border-[#D4AF37] bg-[#101115]/80 backdrop-blur-md transition-all duration-200"
            >
              Request an Introduction
            </button>
          </div>

          {/* Slide Indicator Numbers, Progress Bar & Navigation Controls */}
          <div className="flex items-center gap-5 sm:gap-7 text-xs text-[#D9D4CA]">
            
            {/* Slide tabs */}
            <div className="hidden md:flex items-center gap-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    idx === currentSlide
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-[#444444] hover:bg-[#888888]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 tracking-widest font-mono text-xs">
              <span className="text-[#D4AF37] font-semibold">0{currentSlide + 1}</span>
              <span className="text-[#666666]">/</span>
              <span className="text-[#888888]">0{HERO_SLIDES.length}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="p-2.5 border border-[#3E382E] hover:border-[#D4AF37] bg-[#141416]/80 text-[#D9D4CA] hover:text-[#D4AF37] transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2.5 border border-[#3E382E] hover:border-[#D4AF37] bg-[#141416]/80 text-[#D9D4CA] hover:text-[#D4AF37] transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};
