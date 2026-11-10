import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, Shield, Zap, Sparkles, Key, Compass, Music, Flame, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AccessDossier {
  id: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  accentBadge: string;
  narrative: string[];
  deliverables: string[];
  protocol: string;
}

const DOSSIERS: AccessDossier[] = [
  {
    id: 'ufc-combat',
    category: 'Arena Combat & Ringside Supremacy',
    title: 'UFC Championship Cageside & Athlete Sanctum',
    tagline: 'When the doors lock and the world watches, your seats are inside the cordon.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=2000&auto=format&fit=crop',
    accentBadge: 'Ringside · Zero Buffer',
    narrative: [
      'The raw intensity of combat sports cannot be experienced from a screen. For premier UFC London events and international championship pay-per-views, TGLC coordinates direct front-row cageside placement where you hear the impact and see every adjustment.',
      'Our access extends far beyond the seating bowl. Through long-standing friendships with promotion executives and elite fight camps, our principals access official pre-fight weigh-in suites, backstage athlete locker-room walk-ins, and closed post-fight celebrations in Mayfair with victorious athletes and corner teams.'
    ],
    deliverables: [
      'Row 1–2 Octagon Cageside VIP seats at The O2 Arena and international venues',
      'Accredited backstage athlete corridor credentials and locker-room visits',
      'Private weigh-in suite access with dedicated hospitality and security detail',
      'Exclusive post-fight victory dinner reservations with world titleholders',
      'Private closed-door striking and grappling masterclasses with elite coaches'
    ],
    protocol: 'Security Clearance & Advance Accreditation Required (72-Hour Notice)'
  },
  {
    id: 'arena-concerts',
    category: 'Arena Headliners & Private Boxes',
    title: 'Sold-Out Global Concerts & Artist Green Rooms',
    tagline: 'Sold-out is merely a public status. The private entrance remains unhurried.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=85&w=2000&auto=format&fit=crop',
    accentBadge: 'Royal Box & Backstage',
    narrative: [
      'When global headline tours sell out in seconds, our private desk activates direct allocations reserved for stadium owners, artist management, and consortium patrons. No queueing, no ticket transfers, no friction.',
      'Enjoy 20-guest corporate hospitality suites at Wembley Stadium and The O2 with private chefs and sommelier service. For landmark classical or orchestral evenings, we secure the private Royal Box at the Royal Albert Hall, complete with private drawing room reception and interval vintage champagne.'
    ],
    deliverables: [
      'Private hospitality suites at Wembley Stadium, The O2 Arena & Tottenham Hotspur Stadium',
      'Exclusive Royal Box access at the Royal Albert Hall with private salon suite',
      'Direct backstage green-room artist introductions and private soundcheck attendance',
      'After-show artist party access at confidential Mayfair and Soho members’ spaces',
      'Chauffeured subterranean tarmac departure directly from arena vehicle ramps'
    ],
    protocol: 'Private Suite Buyout or Individual Principal Placement Available'
  },
  {
    id: 'secret-clubs',
    category: 'Subterranean Sanctums & Covert Vaults',
    title: 'The Underground Vaults & Mayfair Bookcase Speakeasies',
    tagline: 'London’s finest rooms have no street signage, no public handles, and no social accounts.',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=85&w=2000&auto=format&fit=crop',
    accentBadge: 'Unlisted & Sub-Rosa',
    narrative: [
      'Beneath the cobbled alleys of St James’s and behind unmarked doors in Soho lies the authentic nightlife of the British capital. We unlock access to historic 300-year-old bank vaults converted into subterranean cigar lounges, secret cellar bars hidden behind bespoke library bookcases, and intimate after-hours jazz chambers.',
      'Our lifestyle managers personally introduce you to proprietors and head hosts. Your party is escorted seamlessly past queues, through discrete service elevators, and seated at the room’s premier table with preferred bottle reserves held in waiting.'
    ],
    deliverables: [
      'Unrestricted entry and table placement at unlisted private club basements',
      'Private buyouts of 18th-century subterranean wine catacombs and tasting rooms',
      'Pre-allocated rare whisky lockers and vintage spirits sourcing on arrival',
      'Discreet private security escort for smooth entry and departure transitions',
      'Bespoke after-hours salon hosting with live resident musicians and mixologists'
    ],
    protocol: 'Discretion Accord: Strict No-Photography Protocol Enforced'
  },
  {
    id: 'urban-nocturne',
    category: 'Stealth River Runs & Supercar Nocturnes',
    title: 'Midnight Tunnel Sprints & Nocturne Thames Launches',
    tagline: 'When the city sleeps, London’s architectural corridors become your private circuit.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=85&w=2000&auto=format&fit=crop',
    accentBadge: 'Midnight Speed & Stealth',
    narrative: [
      'For collectors who love the thrill of motion, we orchestrate midnight high-speed supercar runs through London’s landmark tunnels and riverbanks. Routes are scouted in advance, coordinated with discreet escort support, and culminate at private aircraft hangars or unlisted warehouse salons.',
      'On the water, our high-speed stealth river launches glide along the Thames at night—cleared for high-velocity runs past the illuminated Houses of Parliament and Tower Bridge, with vintage Bollinger and midnight supper served on heated open-air aft decks.'
    ],
    deliverables: [
      'Pre-scouted midnight supercar convoy corridors with private mechanical and security support',
      'High-speed night charters on custom stealth launches along the River Thames',
      'Private rooftop helipad arrivals into central London penthouses after dusk',
      'Exclusive access to underground hypercar collector vaults and detailing labs',
      'White-glove track day arrangements at Silverstone and Goodwood Motor Circuit'
    ],
    protocol: 'Coordinated Directly via the TGLC Fleet & Aviation Desk'
  }
];

export const HiddenLondonPage: React.FC = () => {
  const { openIntroductionModal, navigateTo } = useNavigation();
  const [activeDossier, setActiveDossier] = useState<string>('ufc-combat');
  const selectedDossier = DOSSIERS.find((d) => d.id === activeDossier) || DOSSIERS[0];

  return (
    <div className="bg-[#070709] text-[#F4F1EA] min-h-screen selection:bg-[#C5A059]/30 selection:text-[#F4F1EA]">
      {/* 1. Cinematic Full-Bleed Hero Banner */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-[#1E1F26] pt-24 sm:pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=90&w=2400&auto=format&fit=crop"
            alt="London by Night"
            className="w-full h-full object-cover object-center filter brightness-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/60 to-[#070709]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#D4AF37]/40 bg-[#0E0F14]/80 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#E6CA85] font-mono">
              Unlisted Access · The Sub-Rosa Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#F4F1EA] text-balance"
          >
            The Other Side of London.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] max-w-3xl mx-auto"
          >
            “What is not advertised is what is truly exclusive.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-sm text-[#A8A49C] max-w-2xl mx-auto leading-relaxed font-light"
          >
            Beyond the traditional heritage institutions of Mayfair and St James’s lies London’s covert cultural pulse: championship UFC cageside cords, sold-out arena hospitality suites, after-hours subterranean vaults, and midnight tunnel sprints. We hold the relationships that make the impossible effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => openIntroductionModal('Sub-Rosa & Unlisted Access Inquiry')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all flex items-center gap-2 shadow-xl shadow-[#D4AF37]/25"
            >
              <span>Request Unlisted Credentials</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('dossier-matrix');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 text-xs uppercase tracking-widest text-[#E6CA85] border border-[#3E382E] hover:border-[#D4AF37] bg-[#101116] transition-all hover:bg-[#181920]"
            >
              View Access Practices ↓
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Full-Width Experience Dossier */}
      <section id="dossier-matrix" className="py-20 sm:py-28 px-6 sm:px-10 border-b border-[#1E1F26]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1E1F26]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-2">
                Curated Access Practices
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                The Sub-Rosa Dossiers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A83] max-w-md leading-relaxed font-light">
              Select an access vertical to review operational protocols, guaranteed deliverables, and confidential booking frameworks.
            </p>
          </div>

          {/* Large Editorial Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {DOSSIERS.map((dossier, idx) => {
              const isSelected = dossier.id === activeDossier;
              return (
                <button
                  key={dossier.id}
                  onClick={() => setActiveDossier(dossier.id)}
                  className={`p-5 text-left transition-all duration-300 border flex flex-col justify-between h-32 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#15161D] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15'
                      : 'bg-[#0E0F14] border-[#22242D] hover:border-[#3E404E] hover:bg-[#121319]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#888]">
                      0{idx + 1} / PRACTICE
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#070709]'
                          : 'bg-[#1D1E26] text-[#A8A49C] group-hover:text-white'
                      }`}
                    >
                      {dossier.accentBadge}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`font-serif text-base sm:text-lg transition-colors leading-snug ${
                        isSelected ? 'text-[#F4F1EA]' : 'text-[#A8A49C] group-hover:text-white'
                      }`}
                    >
                      {dossier.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Dossier Full-Width Showcase */}
          <div className="bg-[#0E0F14] border border-[#262833] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Edge-to-Edge High-Res Visual */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[560px] bg-[#000] overflow-hidden group">
                <img
                  src={selectedDossier.image}
                  alt={selectedDossier.title}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F14] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0E0F14]" />
                <div className="absolute top-4 left-4 bg-[#070709]/85 backdrop-blur-md px-3 py-1.5 border border-[#D4AF37]/40 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6CA85]">
                    {selectedDossier.protocol}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#070709]/85 backdrop-blur-md p-4 border border-[#2D303C]">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    {selectedDossier.category}
                  </span>
                  <p className="font-serif italic text-sm text-[#F4F1EA]">
                    “{selectedDossier.tagline}”
                  </p>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Deliverables */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#C5A059] font-mono block mb-2">
                    {selectedDossier.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F1EA] mb-4 leading-snug">
                    {selectedDossier.title}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-[#A8A49C] leading-relaxed font-light mb-8">
                    {selectedDossier.narrative.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="space-y-2.5 pt-6 border-t border-[#1F212B]">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E6CA85] font-semibold block mb-3">
                      Exclusive Consortium Deliverables:
                    </span>
                    {selectedDossier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D9D4CA]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1F212B] flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openIntroductionModal(`Inquiry regarding ${selectedDossier.title}`)}
                    className="px-7 py-3 text-xs uppercase tracking-widest text-[#070709] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 font-semibold border border-[#F0D572] transition-all flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <span>Request Private Allocation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#070709]" />
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="px-4 py-3 text-xs uppercase tracking-widest text-[#A8A49C] hover:text-[#D4AF37] transition-colors"
                  >
                    Speak with Director →
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Full-Width Panoramic Gallery: The Nocturne Circuit */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 border-b border-[#1E1F26] bg-[#090A0E]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
              London After Dusk
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              The Nocturne Access Landscape
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8A83] font-light leading-relaxed">
              From subterranean bank vaults in the City to cageside seats at The O2 and private river launches slicing under illuminated suspension bridges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group relative aspect-[4/3] overflow-hidden bg-[#111] border border-[#22242D]">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=1200&auto=format&fit=crop"
                alt="Arena Cageside"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">Combat Sanctum</span>
                <h3 className="font-serif text-xl text-[#F4F1EA]">UFC London Cageside & Locker Rooms</h3>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden bg-[#111] border border-[#22242D]">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=85&w=1200&auto=format&fit=crop"
                alt="Arena Concerts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">Global Headline Stages</span>
                <h3 className="font-serif text-xl text-[#F4F1EA]">Wembley & O2 Private Hospitality Suites</h3>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden bg-[#111] border border-[#22242D]">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=85&w=1200&auto=format&fit=crop"
                alt="Vault Speakeasy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">Subterranean Capital</span>
                <h3 className="font-serif text-xl text-[#F4F1EA]">300-Year-Old Bank Vault Cocktail Clubs</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Direct Confidential Access Dispatch Console */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-gradient-to-b from-[#070709] via-[#0D0E13] to-[#070709]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#14151D] flex items-center justify-center mx-auto text-[#D4AF37]">
            <Key className="w-5 h-5" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-medium block">
            Confidential Dispatcher
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] max-w-2xl mx-auto leading-tight">
            Need immediate access to an unlisted room or sold-out arena?
          </h2>

          <p className="text-xs sm:text-sm text-[#8E8A83] max-w-xl mx-auto font-light leading-relaxed">
            Our private desk operates 24/7 with direct line authority to key venue proprietors, concert promoters, and combat sports officials. Inquiries handled with absolute confidentiality.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('Priority Unlisted Event Dispatch')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#070709] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all flex items-center gap-2 shadow-xl shadow-[#D4AF37]/25"
            >
              <span>Transmit Urgent Request</span>
              <ArrowUpRight className="w-4 h-4 text-[#070709]" />
            </button>
            <button
              onClick={() => navigateTo('home')}
              className="px-6 py-3.5 text-xs uppercase tracking-widest text-[#E6CA85] border border-[#3E382E] hover:border-[#D4AF37] bg-[#101116] transition-all hover:bg-[#181920]"
            >
              Return to Overview
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
