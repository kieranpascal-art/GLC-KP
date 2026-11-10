import React, { useState } from 'react';
import { HeroCarousel } from './HeroCarousel';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA, JOURNAL_ARTICLES, CALENDAR_EVENTS, ETHOS_PRINCIPLES, LONDON_NEIGHBOURHOODS } from '../../data/tglcData';
import { ArrowUpRight, Compass, Shield, Users, Globe, Sparkles, MapPin, Calendar, Clock, Key, Crown, ChevronRight, Award, Zap, Flame, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Lifestyle pillars highlighting the James Bond English Gentleman & Lady theme + Sub-Rosa London
const LIFESTYLE_PILLARS = [
  {
    id: 'chauffeur-fleet',
    label: 'Chauffeur & Fleet',
    kicker: 'The London Arrival',
    title: 'The Modern English Gentleman & Lady: Motion with Poise',
    image: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
    secondaryImage: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp',
    tagline: 'A Rolls-Royce waiting in the twilight; coach doors opened with quiet military precision.',
    narrative: [
      'In a city of relentless pace, true luxury is serenity. Our chauffeurs are vetted specialists with advanced defensive driving credentials, impeccably attired, discreet, and attuned to the subtle rhythms of our principals.',
      'From late-evening galas in Mayfair to tarmac departures from Battersea Heliport, your vehicle is a private sanctuary stocked with preferred hydration, daily periodicals, and secure communication systems.'
    ],
    features: [
      'Rolls-Royce Phantom & Cullinan, Bentley Flying Spur, Mercedes-Maybach',
      'Door-to-door escort, umbrella protocol, and luggage pre-placement',
      'Direct coordination with private terminal handling at RAF Northolt & Farnborough'
    ],
    ctaText: 'Explore Chauffeur & Fleet Practice',
    targetService: 'transport-security'
  },
  {
    id: 'savile-row-horology',
    label: 'Savile Row & Haute Horlogerie',
    kicker: 'Rare Commissions',
    title: 'Bespoke Sartorial Distinction & Master Timepieces',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2000&auto=format&fit=crop',
    secondaryImage: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    tagline: 'When off-the-shelf luxury is inadequate, we commission the masters.',
    narrative: [
      'The English gentleman and lady are defined by understated craftsmanship. We orchestrate private appointments with Savile Row master cutters who travel to your residence, creating timeless evening dinner suits, bespoke overcoats, and tailored riding attire.',
      'For collectors of haute horlogerie, we locate elusive historical references from Rolex, Patek Philippe, and Cartier through private collector networks in Geneva and London.'
    ],
    features: [
      'Private suite fittings with head cutters from Huntsman, Henry Poole, and Anderson & Sheppard',
      'Provenance-verified sourcing of rare vintage chronographs and independent horology',
      'High jewellery design: untreated natural emeralds, sapphires, and certified pink diamonds'
    ],
    ctaText: 'Explore Luxury Sourcing & Watches',
    targetService: 'luxury-sourcing'
  },
  {
    id: 'sub-rosa-london',
    label: 'Sub-Rosa Access & Arenas',
    kicker: 'The Unlisted Network',
    title: 'UFC Championship Ringside, Arena Suites & Vault Clubs',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=2000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=85&w=2000&auto=format&fit=crop',
    tagline: 'When access is sealed to the public, the private corridor opens.',
    narrative: [
      'The other side of London is unlisted and discreet. From front-row cageside placement at premier UFC London events to 20-person corporate hospitality suites at Wembley Stadium, our principals sit where no public ticket can reach.',
      'After hours, our network unlocks 300-year-old subterranean bank vault cocktail lounges in the City and covert bookcase speakeasies in Mayfair, personally escorted past queues to reserved private alcoves.'
    ],
    features: [
      'UFC London Octagon cageside seats with backstage athlete locker-room credentials',
      'Sold-out stadium suites at Wembley, The O2, and private Royal Box at Royal Albert Hall',
      'Unmarked subterranean speakeasy vaults and after-hours private member cellars'
    ],
    ctaText: 'Explore Sub-Rosa Access',
    targetPage: 'hidden-london'
  },
  {
    id: 'harrods-liberty',
    label: 'Harrods & Heritage Salons',
    kicker: 'Private Salons',
    title: 'Closed-Door Shopping & Landmark London Salons',
    image: '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
    secondaryImage: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
    tagline: 'Private lift access to the penthouse suites of Knightsbridge and Mayfair.',
    narrative: [
      'Avoid the crowds entirely. Through established relationships with department store leadership and heritage boutiques, our members experience after-hours access, private styling suites at Harrods, and curated archival viewings at Liberty.',
      'Rare pieces from Paris and Milan couture houses are delivered directly to your dressing suite for consideration before ever reaching the salon floor.'
    ],
    features: [
      'Harrods Penthouse Suite private bookings with dedicated personal styling teams',
      'Private viewing rooms along Old Bond Street, Mount Street, and Sloane Street',
      'White-glove international export, tax clearance, and immediate secure delivery'
    ],
    ctaText: 'Explore Fashion & Culture Access',
    targetService: 'experiences-culture'
  },
  {
    id: 'aviation-estates',
    label: 'Aviation & Stately Manors',
    kicker: 'Sovereign Freedom',
    title: 'Intercontinental Wings & Stately English Manors',
    image: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
    secondaryImage: '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg',
    tagline: 'From tarmac transfer to Georgian drawing room in sixty minutes.',
    narrative: [
      'True wealth is the absence of friction. Our aviation desk coordinates Bombardier Global, Gulfstream, and Falcon charters with tarmac apron access, ensuring your journey from London to Zurich or New York is effortless.',
      'For weekends away, we manage turnkey provisioning of English country estates in Oxfordshire, Hampshire, and the Cotswolds—hearth fires lit, cellars stocked, and private shoots organized before your arrival.'
    ],
    features: [
      'Tarmac transfers at RAF Northolt, London Farnborough, and Biggin Hill',
      'English country estate staffing: discreet butlers, private chefs, and gamekeepers',
      'Helicopter charter connections between Battersea and country polo fields'
    ],
    ctaText: 'Explore Aviation & Estates',
    targetService: 'travel-aviation'
  }
];

export const HomePage: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const currentPillar = LIFESTYLE_PILLARS[activeTab];

  return (
    <div className="bg-[#070709] text-[#F4F1EA] selection:bg-[#C5A059]/30 selection:text-[#F4F1EA]">
      {/* 1. Full-Screen Cinematic Hero Carousel */}
      <HeroCarousel />

      {/* 2. Full-Width Architectural Introduction - Clean, Unboxed & Authoritative */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#1A1B22] relative overflow-hidden bg-gradient-to-b from-[#070709] via-[#0B0C10] to-[#070709]">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
                alt="TGLC Gold Crest"
                className="w-16 h-20 sm:w-20 sm:h-24 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_4px_24px_rgba(212,175,55,0.45)]"
              />
            </motion.div>

            <span className="text-[11px] uppercase tracking-[0.32em] text-[#C5A059] font-medium block">
              St James’s Private Office · London
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#F4F1EA] max-w-5xl mx-auto text-balance"
            >
              Discretion by default. London intelligence. A life orchestrated with clinical precision and British poise.
            </motion.h2>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />
          </div>

          {/* Full-Width Architectural Triple Statements - Clean, unboxed luxury layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-[#1F212A] pt-12">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <span className="font-serif text-2xl text-[#D4AF37] block font-light">I.</span>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A059] font-mono block">The British Standard</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA]">The English Gentleman & Lady Standard</h3>
              <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                Genuine luxury needs no megaphone. It is felt in the immaculate black Rolls-Royce waiting at dusk, the tailored Savile Row lapel, and an unhurried confidence that every door opens smoothly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <span className="font-serif text-2xl text-[#D4AF37] block font-light">II.</span>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A059] font-mono block">Human Network</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA]">Doors Opened by Relationships, Not Bots</h3>
              <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                We reject algorithmic aggregators. The finest corner tables, off-market Mayfair townhouses, and closed salon previews are granted by human custodians who trust our word and respect our patrons.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <span className="font-serif text-2xl text-[#D4AF37] block font-light">III.</span>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A059] font-mono block">Discretion Protocol</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA]">Absolute Confidentiality & Privacy</h3>
              <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                We never publicise our member roll, photograph patrons at tables, or trade on names. Our lifestyle directors work under ironclad non-disclosure, acting as your trusted, invisible private office.
              </p>
            </motion.div>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              onClick={() => openIntroductionModal('Introductory Consultation')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all flex items-center gap-2.5 shadow-xl shadow-[#D4AF37]/25"
            >
              <span>Begin a Private Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]" />
            </button>
            <button
              onClick={() => navigateTo('hidden-london')}
              className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#E6CA85] border border-[#3E382E] hover:border-[#D4AF37] bg-[#111218] transition-all hover:bg-[#181922] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Explore Sub-Rosa London</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3. NEW FULL-WIDTH SHOWCASE: Sub-Rosa London & Prime Access (UFC, Arenas, Vaults) */}
      <section className="py-24 sm:py-32 border-b border-[#1A1B22] bg-[#0A0B0F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Left Showcase */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#000] border border-[#22242F]">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=2000&auto=format&fit=crop"
                  alt="UFC Cageside and Arena Access"
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#070709]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#D4AF37]/40 flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6CA85]">
                    Unlisted London · Ringside & Vaults
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A0B0F]/85 backdrop-blur-md p-4 border border-[#232530]">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    Arena Combat & Subterranean Sanctums
                  </span>
                  <p className="font-serif italic text-sm text-[#F4F1EA]">
                    “UFC cageside passes, sold-out Wembley suites, and unmarked Mayfair vault clubs.”
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Narrative Right */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 bg-[#12131C]">
                <Zap className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] font-mono">
                  The Hidden Network
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
                The other side of London.
              </h2>

              <p className="font-serif italic text-base text-[#D4AF37]">
                “Beyond Mayfair tea rooms lies the capital’s covert pulse.”
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                <p>
                  Through trusted personal alliances with championship fight promoters, venue owners, and underground custodians, we open doors closed to the general public.
                </p>
                <p>
                  Experience front-row Octagon cageside placement for UFC London with backstage athlete walk-in credentials, private 20-person stadium hospitality boxes for sold-out arena concerts, and unlisted 300-year-old subterranean bank vault cocktail clubs.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => navigateTo('hidden-london')}
                  className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 font-semibold border border-[#F0D572] transition-all flex items-center gap-2 shadow-xl shadow-[#D4AF37]/20"
                >
                  <span>Explore Sub-Rosa Access</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]" />
                </button>
                <button
                  onClick={() => openIntroductionModal('Priority Arena & UFC Access Inquiry')}
                  className="px-4 py-3.5 text-xs uppercase tracking-widest text-[#D9D4CA] hover:text-[#D4AF37] transition-colors"
                >
                  Inquire Privately →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Full-Width Interactive Lifestyle Showcase (Rolls-Royce, Savile Row, Harrods, Aviation, Estates) */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#070709] border-b border-[#1A1B22] relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E202A]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-2">
                The Sovereign Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                The James Bond & Mayfair Architecture
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A83] max-w-md leading-relaxed font-light">
              Explore how we orchestrate every facet of private life — from twilight Rolls-Royce arrivals to Savile Row commissions and closed-door club sanctums.
            </p>
          </div>

          {/* Interactive Navigation Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#181922]">
            {LIFESTYLE_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 border-b-2 flex items-center gap-2 cursor-pointer ${
                  activeTab === idx
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#12131B]'
                    : 'border-transparent text-[#8E8A83] hover:text-[#D9D4CA] hover:bg-[#0D0E14]'
                }`}
              >
                <span className="text-[10px] font-mono text-[#666]">{`0${idx + 1}`}</span>
                <span>{pillar.label}</span>
              </button>
            ))}
          </div>

          {/* Tabbed Interactive Content with Full-Width Split */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#0C0D12] border border-[#1E202B] p-6 sm:p-12 shadow-2xl"
            >
              
              {/* Visual Showcase (Image Grid / Highlight) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#000] border border-[#2A2C38]">
                  <img
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#E6CA85] bg-[#070709]/85 backdrop-blur-md px-4 py-2 border border-[#C5A059]/30">
                    <span className="uppercase tracking-widest font-mono text-[10px]">{currentPillar.kicker}</span>
                    <span className="italic font-serif text-sm">“{currentPillar.tagline}”</span>
                  </div>
                </div>

                {currentPillar.secondaryImage && (
                  <div className="hidden sm:flex items-center gap-4 pt-2">
                    <div className="w-24 h-16 overflow-hidden border border-[#3E382E] shrink-0 bg-[#000]">
                      <img src={currentPillar.secondaryImage} alt="Secondary View" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[11px] text-[#8E8A83] italic">
                      Complimentary private arrangements curated through our St James’s office.
                    </p>
                  </div>
                )}
              </div>

              {/* Editorial Human Copy & Features */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A059] font-medium block mb-2">
                    {currentPillar.kicker}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F4F1EA] leading-snug">
                    {currentPillar.title}
                  </h3>
                </div>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#D9D4CA] font-light leading-relaxed">
                  {currentPillar.narrative.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1C1E27]">
                  {currentPillar.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#E6CA85]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span className="font-light text-[#D9D4CA]">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      if (currentPillar.targetPage === 'hidden-london') {
                        navigateTo('hidden-london');
                      } else {
                        navigateTo('service-detail', { serviceId: currentPillar.targetService });
                      }
                    }}
                    className="px-6 py-3 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] font-semibold transition-all flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <span>{currentPillar.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                  </button>
                  <button
                    onClick={() => openIntroductionModal(currentPillar.title)}
                    className="px-4 py-3 text-xs uppercase tracking-widest text-[#D9D4CA] hover:text-[#D4AF37] transition-colors"
                  >
                    Inquire Privately →
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 5. Full-Width Architectural Services Architecture - NO BOXED CARDS */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#090A0E] border-b border-[#1A1B22]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E202B]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-2">
                Services & Practices
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                From the expected to the exceptional.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A83] max-w-md leading-relaxed font-light">
              Seven dedicated practices operating in concert. Every request handled by your personal lifestyle director with absolute discretion.
            </p>
          </div>

          {/* Full-Width Horizontal Practice Showcase - Sleek Architectural Rows */}
          <div className="space-y-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => navigateTo('service-detail', { serviceId: service.id })}
                className="group cursor-pointer border-b border-[#1E202B] pb-8 pt-4 transition-all duration-300 hover:border-[#D4AF37]/60"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Number & Practice Title */}
                  <div className="lg:col-span-5 space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D4AF37]">0{index + 1}</span>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8E8A83] font-mono">
                        {service.kicker}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] group-hover:text-[#D4AF37] transition-colors flex items-center justify-between pr-4">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                    </h3>
                    <p className="font-serif italic text-xs text-[#C5A059]">
                      “{service.tagline}”
                    </p>
                  </div>

                  {/* Middle: Short Description */}
                  <div className="lg:col-span-4 text-xs sm:text-sm text-[#8E8A83] font-light leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </div>

                  {/* Right: Practice Image Thumbnail & Sub-Practices count */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                    <span className="text-[11px] font-mono text-[#8E8A83] uppercase">
                      {service.subServices.length} Disciplines
                    </span>
                    <div className="w-24 h-14 overflow-hidden border border-[#2A2C38] shrink-0 bg-[#000]">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigateTo('services')}
              className="px-8 py-3.5 text-xs uppercase tracking-widest text-[#E6CA85] border border-[#3E382E] hover:border-[#D4AF37] bg-[#0E0F14] transition-all hover:bg-[#151620]"
            >
              View Complete Practice Directory & Disciplines →
            </button>
          </div>

        </div>
      </section>

      {/* 6. The Consortium Philosophy - Clean Full-Width Editorial Columns */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#1A1B22] bg-[#070709]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block">
              The Consortium Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              The TGLC Difference
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8A83] leading-relaxed font-light">
              We reject the volume model of mass concierge services. We maintain a strictly capped roster of private members to protect the depth of our attention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6 border-t border-[#1E202B]">
            {ETHOS_PRINCIPLES.map((principle) => (
              <div key={principle.number} className="space-y-3">
                <span className="font-serif text-xl text-[#D4AF37] font-light">{principle.number}</span>
                <h3 className="font-serif text-lg text-[#F4F1EA]">{principle.title}</h3>
                <p className="text-xs text-[#8E8A83] leading-relaxed font-light">
                  {principle.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. London Enclaves - Panoramic Architectural Strip */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#1A1B22] bg-[#0A0B0F]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E202B]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-2">
                Capital Intelligence
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                London’s Sovereign Enclaves
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A83] max-w-md leading-relaxed font-light">
              Our presence is rooted in St James’s, with intelligence spanning Mayfair, Knightsbridge, Belgravia, and the River Thames.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LONDON_NEIGHBOURHOODS.slice(0, 4).map((enclave) => (
              <div
                key={enclave.name}
                onClick={() => navigateTo('our-london')}
                className="group cursor-pointer relative aspect-[3/4] overflow-hidden bg-[#000] border border-[#1E202B] hover:border-[#D4AF37]/50 transition-all"
              >
                <img
                  src={enclave.image}
                  alt={enclave.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block">
                    {enclave.name}
                  </span>
                  <p className="text-xs text-[#D9D4CA] font-light line-clamp-2">
                    {enclave.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Minimalist Private Consultation Invitation */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#070709] text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
              alt="TGLC Monogram"
              className="w-14 h-18 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
            />
          </div>

          <span className="text-[11px] uppercase tracking-[0.32em] text-[#C5A059] font-medium block">
            Admissions by Recommendation
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] leading-tight">
            Begin with an unhurried conversation.
          </h2>

          <p className="text-xs sm:text-sm text-[#8E8A83] font-light max-w-xl mx-auto leading-relaxed">
            Whether inquiring about family office representation, sovereign chauffeur fleets, or unlisted sub-rosa access across the capital, our St James’s desk is at your disposal.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => openIntroductionModal('Private Principal Inquiry')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all flex items-center gap-2 shadow-xl shadow-[#D4AF37]/25"
            >
              <span>Request Confidential Introduction</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#E6CA85] border border-[#3E382E] hover:border-[#D4AF37] bg-[#0E0F14] transition-all hover:bg-[#161720]"
            >
              Contact TGLC House
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
