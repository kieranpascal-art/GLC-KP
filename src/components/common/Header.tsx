import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA } from '../../data/tglcData';
import { ArrowUpRight, ChevronDown, Menu, X, Shield, Lock, Compass, Calendar, BookOpen, User, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const { route, navigateTo, openIntroductionModal, openSearch } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMegaOpen, setIsServicesMegaOpen] = useState(false);
  const [isConsortiumMenuOpen, setIsConsortiumMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsServicesMegaOpen(false);
        setIsConsortiumMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesMegaOpen(false);
        setIsConsortiumMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isCurrent = (p: string) => {
    if (p === 'consortium' && ['consortium', 'about', 'ethos', 'approach', 'network', 'our-london', 'privacy-discretion'].includes(route.page)) return true;
    if (p === 'services' && ['services', 'service-detail', 'subservice-detail'].includes(route.page)) return true;
    if (p === 'journal' && ['journal', 'journal-article'].includes(route.page)) return true;
    return route.page === p;
  };

  return (
    <header
      ref={megaMenuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isServicesMegaOpen || isConsortiumMenuOpen || isMobileMenuOpen
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          
          {/* Zone 1: Luxury Gold Monogram Crest & Wordmark */}
          <button
            onClick={() => {
              navigateTo('home');
              setIsServicesMegaOpen(false);
              setIsConsortiumMenuOpen(false);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] group shrink-0"
          >
            <img 
              src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg" 
              alt="TGLC Crest" 
              className="w-8 h-10 sm:w-9 sm:h-11 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="hidden md:inline font-serif text-lg sm:text-xl font-normal tracking-[0.16em] uppercase text-[#F4F1EA] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                The Global Luxury Consortium
              </span>
              <span className="md:hidden font-serif text-base tracking-[0.2em] uppercase text-[#F4F1EA] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                TGLC
              </span>
              <span className="text-[9px] uppercase tracking-[0.26em] text-[#C5A059] font-medium hidden sm:block">
                London · St James’s · Global
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs tracking-[0.12em] uppercase font-medium text-[#D9D4CA]">
            
            {/* The Consortium Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsConsortiumMenuOpen(!isConsortiumMenuOpen);
                  setIsServicesMegaOpen(false);
                }}
                onMouseEnter={() => {
                  setIsConsortiumMenuOpen(true);
                  setIsServicesMegaOpen(false);
                }}
                className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                  isCurrent('consortium') ? 'text-white border-b border-[#8A7654]' : 'text-[#D9D4CA]'
                }`}
              >
                <span>The Consortium</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isConsortiumMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenu Dropdown */}
              {isConsortiumMenuOpen && (
                <div 
                  onMouseLeave={() => setIsConsortiumMenuOpen(false)}
                  className="absolute top-full left-0 mt-3 w-64 bg-[#141414] border border-[#262626] rounded-sm py-2 shadow-2xl backdrop-blur-md"
                >
                  <button
                    onClick={() => { navigateTo('consortium'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    Consortium Overview
                  </button>
                  <button
                    onClick={() => { navigateTo('about'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    About TGLC & Leadership
                  </button>
                  <button
                    onClick={() => { navigateTo('ethos'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    Our Ethos & Principles
                  </button>
                  <button
                    onClick={() => { navigateTo('approach'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    Our Approach & Journey
                  </button>
                  <button
                    onClick={() => { navigateTo('network'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    The Global Network
                  </button>
                  <button
                    onClick={() => { navigateTo('our-london'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    Our London Enclaves
                  </button>
                  <button
                    onClick={() => { navigateTo('privacy-discretion'); setIsConsortiumMenuOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white hover:bg-[#1E1E1E] transition-colors block"
                  >
                    Privacy & Discretion
                  </button>
                </div>
              )}
            </div>

            {/* Services Mega-Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsServicesMegaOpen(!isServicesMegaOpen);
                  setIsConsortiumMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setIsServicesMegaOpen(true);
                  setIsConsortiumMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                  isCurrent('services') ? 'text-white border-b border-[#8A7654]' : 'text-[#D9D4CA]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesMegaOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Sub-Rosa London & Prime Access */}
            <button
              onClick={() => {
                navigateTo('hidden-london');
                setIsServicesMegaOpen(false);
                setIsConsortiumMenuOpen(false);
              }}
              className={`py-1 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                route.page === 'hidden-london'
                  ? 'text-[#D4AF37] border-b border-[#D4AF37]'
                  : 'text-[#E6CA85] hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Sub-Rosa Access</span>
            </button>

            {/* Membership */}
            <button
              onClick={() => {
                navigateTo('membership');
                setIsServicesMegaOpen(false);
                setIsConsortiumMenuOpen(false);
              }}
              className={`py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                isCurrent('membership') ? 'text-white border-b border-[#8A7654]' : 'text-[#D9D4CA]'
              }`}
            >
              Membership
            </button>

            {/* London Calendar */}
            <button
              onClick={() => {
                navigateTo('calendar');
                setIsServicesMegaOpen(false);
                setIsConsortiumMenuOpen(false);
              }}
              className={`py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                isCurrent('calendar') ? 'text-white border-b border-[#8A7654]' : 'text-[#D9D4CA]'
              }`}
            >
              London Calendar
            </button>

            {/* Journal */}
            <button
              onClick={() => {
                navigateTo('journal');
                setIsServicesMegaOpen(false);
                setIsConsortiumMenuOpen(false);
              }}
              className={`py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                isCurrent('journal') ? 'text-white border-b border-[#8A7654]' : 'text-[#D9D4CA]'
              }`}
            >
              Journal
            </button>

            {/* Private Member Access Portal link */}
            <button
              onClick={() => {
                navigateTo('member-portal');
                setIsServicesMegaOpen(false);
                setIsConsortiumMenuOpen(false);
              }}
              className={`py-1 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 hover:text-white ${
                isCurrent('member-portal') ? 'text-[#D9D4CA] border-b border-[#8A7654]' : 'text-[#9C968A]'
              }`}
            >
              <Lock className="w-3 h-3 text-[#8A7654]" />
              <span>Private Member Access</span>
            </button>
          </nav>

          {/* Zone 3: Search affordance + 1 primary action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Discreet Search Trigger */}
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 p-2 sm:px-2.5 sm:py-1.5 text-xs tracking-wider uppercase text-[#D9D4CA] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8A7654] border border-transparent hover:border-[#2E2E2E]"
              aria-label="Search services, articles, and calendar"
            >
              <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#8A7654]" />
              <span className="hidden md:inline text-[11px] text-[#A6A095]">Search</span>
              <kbd className="hidden md:inline text-[9px] text-[#6E6A63] border border-[#2E2E2E] px-1 py-0.5 font-sans bg-[#121212]">
                ⌘K
              </kbd>
            </button>

            {/* Testing Console Lock Trigger */}
            <button
              onClick={() => {
                if (typeof (window as any).tglcLockConsole === 'function') {
                  (window as any).tglcLockConsole();
                }
              }}
              className="p-2 text-[#8E8A83] hover:text-[#D4AF37] transition-colors focus:outline-none"
              title="Lock Console (Testing)"
              aria-label="Lock Console"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => openIntroductionModal('General Membership & Private Conversation')}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all duration-200 whitespace-nowrap shrink-0 rounded-none shadow-md shadow-[#D4AF37]/20 flex items-center gap-1.5 sm:gap-2"
            >
              <span className="hidden sm:inline">Request an Introduction</span>
              <span className="sm:hidden">Introduction</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F4F1EA] hover:text-[#D9D4CA] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8A7654]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Editorial Mega-Menu for Services */}
      {isServicesMegaOpen && (
        <div
          onMouseLeave={() => setIsServicesMegaOpen(false)}
          className="absolute top-full left-0 right-0 bg-[#0E0E0E] border-b border-[#262626] shadow-2xl py-8 px-6 sm:px-12 backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-200"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#222222]">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A7654] font-medium">Services Directory</span>
                <h3 className="font-serif text-2xl text-[#F4F1EA] mt-1">Seven Categories of Private Lifestyle Management</h3>
              </div>
              <button
                onClick={() => {
                  navigateTo('services');
                  setIsServicesMegaOpen(false);
                }}
                className="text-xs uppercase tracking-widest text-[#D9D4CA] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>View Full Services Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_DATA.slice(0, 4).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    navigateTo('service-detail', { serviceId: cat.id });
                    setIsServicesMegaOpen(false);
                  }}
                  className="group cursor-pointer p-4 bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#383838] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/9] w-full overflow-hidden mb-3 bg-[#1C1C1C]">
                      <img
                        src={cat.heroImage}
                        alt={cat.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">{cat.kicker}</span>
                    <h4 className="font-serif text-lg text-[#F4F1EA] group-hover:text-white mt-1 mb-1.5 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D9D4CA]" />
                    </h4>
                    <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed">
                      {cat.shortDesc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#222222] text-[11px] text-[#8A7654] font-medium tracking-wide">
                    {cat.subServices.length} Sub-Services Available →
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {SERVICES_DATA.slice(4).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    navigateTo('service-detail', { serviceId: cat.id });
                    setIsServicesMegaOpen(false);
                  }}
                  className="group cursor-pointer p-4 bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#383838] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">{cat.kicker}</span>
                    <h4 className="font-serif text-lg text-[#F4F1EA] group-hover:text-white mt-1 mb-1 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D9D4CA]" />
                    </h4>
                    <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed">
                      {cat.shortDesc}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] text-[#8A7654] font-medium tracking-wide">
                    {cat.subServices.length} Sub-Services Available →
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#8E8A83]">
              <span>TGLC House, 22 Arlington Street, St James’s, London</span>
              <span className="text-[#D9D4CA]">Private Member Desk: +44 (0)20 7946 0849</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0B0B0B] z-40 p-6 overflow-y-auto border-t border-[#262626]">
          <div className="space-y-6 pb-12">
            
            {/* Mobile Search Trigger */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-[#141414] border border-[#262626] text-[#8E8A83] hover:text-white hover:border-[#383838] transition-colors text-xs tracking-wider uppercase"
              aria-label="Open global search"
            >
              <span className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#8A7654]" />
                <span className="text-[#A6A095]">Search services, articles, calendar...</span>
              </span>
              <kbd className="text-[10px] text-[#6E6A63] border border-[#2E2E2E] px-1.5 py-0.5 font-sans">
                ⌘K
              </kbd>
            </button>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => {
                  navigateTo('member-portal');
                  setIsMobileMenuOpen(false);
                }}
                className="p-3 text-xs uppercase tracking-wider text-[#D9D4CA] border border-[#333333] bg-[#141414] flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#8A7654]" />
                <span>Member Portal</span>
              </button>
              <button
                onClick={() => {
                  openIntroductionModal();
                  setIsMobileMenuOpen(false);
                }}
                className="p-3 text-xs uppercase tracking-wider text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] border border-[#F0D572] font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Introduction</span>
              </button>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 border-t border-[#222222] pt-4">
              <button
                onClick={() => { navigateTo('home'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                Home
              </button>

              <div className="py-2 border-b border-[#1E1E1E]">
                <button
                  onClick={() => { navigateTo('consortium'); setIsMobileMenuOpen(false); }}
                  className="w-full text-left py-2 text-sm uppercase tracking-widest text-[#F4F1EA] font-medium"
                >
                  The Consortium
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  <button onClick={() => { navigateTo('about'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">About TGLC</button>
                  <button onClick={() => { navigateTo('ethos'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">Our Ethos</button>
                  <button onClick={() => { navigateTo('approach'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">Our Approach</button>
                  <button onClick={() => { navigateTo('network'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">The TGLC Network</button>
                  <button onClick={() => { navigateTo('our-london'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">Our London</button>
                  <button onClick={() => { navigateTo('privacy-discretion'); setIsMobileMenuOpen(false); }} className="block text-xs uppercase tracking-wider text-[#9C968A] py-1">Privacy & Discretion</button>
                </div>
              </div>

              <div className="py-2 border-b border-[#1E1E1E]">
                <button
                  onClick={() => { navigateTo('services'); setIsMobileMenuOpen(false); }}
                  className="w-full text-left py-2 text-sm uppercase tracking-widest text-[#F4F1EA] font-medium"
                >
                  Services
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        navigateTo('service-detail', { serviceId: s.id });
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-xs uppercase tracking-wider text-[#9C968A] py-1 text-left w-full"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { navigateTo('hidden-london'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#E6CA85] border-b border-[#1E1E1E] flex items-center justify-between"
              >
                <span>Sub-Rosa London & Prime Access</span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </button>

              <button
                onClick={() => { navigateTo('membership'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                Membership
              </button>

              <button
                onClick={() => { navigateTo('calendar'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                London Calendar
              </button>

              <button
                onClick={() => { navigateTo('journal'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                Journal
              </button>

              <button
                onClick={() => { navigateTo('faq'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                Frequently Asked Questions
              </button>

              <button
                onClick={() => { navigateTo('contact'); setIsMobileMenuOpen(false); }}
                className="w-full text-left py-3 text-sm uppercase tracking-widest text-[#F4F1EA] border-b border-[#1E1E1E]"
              >
                Contact & Address
              </button>
            </div>

            {/* Fictional contact info */}
            <div className="pt-4 text-xs text-[#8E8A83] space-y-1">
              <p className="font-serif text-[#F4F1EA] text-sm">TGLC House</p>
              <p>22 Arlington Street, St James’s, London SW1A 1RD</p>
              <p className="text-[#D9D4CA] pt-1">Tel: +44 (0)20 7946 0848</p>
              <p className="text-[#8A7654]">Member Line: +44 (0)20 7946 0849</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
