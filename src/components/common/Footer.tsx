import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { TGLC_CONTACT } from '../../data/tglcData';
import { ArrowUpRight, Check, Lock, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1F1F1F] text-[#9C968A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Section: Brand Statement & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1F1F1F]">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
                alt="TGLC Crest"
                className="w-10 h-12 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.16em] uppercase text-[#F4F1EA] block">
                  The Global Luxury Consortium
                </span>
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#C5A059] font-medium">
                  St James’s, London · Global Private Office
                </span>
              </div>
            </div>
            <p className="font-serif text-lg italic text-[#D9D4CA] max-w-lg leading-relaxed">
              “London, understood from every angle. A life arranged with clinical precision and quiet grace.”
            </p>
            <p className="text-xs text-[#9C968A] max-w-md leading-relaxed font-light">
              A private lifestyle-management house for ultra-high-net-worth individuals, families, and family offices navigating life between London, Geneva, Monaco, and New York. Discretion by default, human intelligence, and unmatched sovereign access.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs tracking-wider uppercase text-[#D9D4CA]">
              <span className="text-[#C5A059] font-medium">ST JAMES’S, LONDON</span>
              <span className="text-[#444444]">·</span>
              <span>22 ARLINGTON STREET</span>
              <span className="text-[#444444]">·</span>
              <span className="text-[#E6CA85]">PRIVATE CHARTER</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-2">
                Private Dispatch
              </span>
              <h4 className="font-serif text-xl text-[#F4F1EA] mb-2">
                Receive The TGLC Journal & Seasonal Invitations
              </h4>
              <p className="text-xs text-[#9C968A] mb-5 max-w-md">
                A quiet, bi-monthly dispatch examining private travel, London intelligence, cultural openings, and acquisitions. No commercial marketing or spam.
              </p>
              
              {newsletterSubscribed ? (
                <div className="p-3 bg-[#141414] border border-[#2E2E2E] text-xs text-[#D9D4CA] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8A7654]" />
                  <span>Thank you. Your email has been added to our private dispatch roll.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter confidential email address..."
                    required
                    className="flex-1 bg-[#141414] border border-[#262626] focus:border-[#8A7654] px-4 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs uppercase tracking-widest bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#F4F1EA] border border-[#333333] transition-colors whitespace-nowrap shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#191919] flex flex-wrap items-center gap-6 text-xs text-[#8E8A83]">
              <span className="text-[#D9D4CA]">Instagram: {TGLC_CONTACT.instagram}</span>
              <span className="text-[#D9D4CA]">LinkedIn: {TGLC_CONTACT.linkedIn}</span>
            </div>
          </div>

        </div>

        {/* Middle Section: Columns of Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-[#1F1F1F] text-xs">
          
          {/* Column 1: The Consortium */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-[#F4F1EA] mb-4">The Consortium</h5>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About TGLC
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('ethos')} className="hover:text-white transition-colors">
                  Our Ethos & Principles
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('approach')} className="hover:text-white transition-colors">
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('network')} className="hover:text-white transition-colors">
                  The TGLC Network
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('our-london')} className="hover:text-white transition-colors">
                  Our London
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('privacy-discretion')} className="hover:text-white transition-colors">
                  Privacy & Discretion
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-[#F4F1EA] mb-4">Core Services</h5>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'travel-aviation' })} className="hover:text-white transition-colors">
                  Travel & Aviation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'dining-nightlife' })} className="hover:text-white transition-colors">
                  Dining & Social Access
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'experiences-culture' })} className="hover:text-white transition-colors">
                  Experiences & Culture
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'residences-relocation' })} className="hover:text-white transition-colors">
                  Residences & Relocation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'transport-security' })} className="hover:text-white transition-colors">
                  Transport & Security
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'personal-private-office' })} className="hover:text-white transition-colors">
                  Personal & Private Office
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('service-detail', { serviceId: 'luxury-sourcing' })} className="hover:text-white transition-colors">
                  Luxury Sourcing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('hidden-london')} className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Sub-Rosa London (UFC & Arenas)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership & Calendar */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-[#F4F1EA] mb-4">Engagement</h5>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateTo('membership')} className="hover:text-white transition-colors">
                  Membership Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('calendar')} className="hover:text-white transition-colors">
                  The London Calendar
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('journal')} className="hover:text-white transition-colors">
                  The TGLC Journal
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => openIntroductionModal('Membership Inquiry')} className="text-[#8A7654] hover:text-[#D9D4CA] transition-colors flex items-center gap-1">
                  <span>Request an Introduction</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Member Access */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-[#F4F1EA] mb-4">Member Portal</h5>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateTo('member-portal')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#8A7654]" />
                  <span>Member Sign In</span>
                </button>
              </li>
              <li>
                <span className="text-[#777777]">Dedicated Member Line:</span>
                <span className="block text-[#D9D4CA] font-medium pt-0.5">{TGLC_CONTACT.privateMemberLine}</span>
              </li>
              <li>
                <span className="text-[#777777]">Member Support Desk:</span>
                <span className="block text-[#D9D4CA] pt-0.5">{TGLC_CONTACT.memberSupport}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Headquarters Address */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="font-serif text-sm uppercase tracking-widest text-[#F4F1EA] mb-4">TGLC House</h5>
            <address className="not-italic space-y-1.5 leading-relaxed text-[#D9D4CA]">
              <p>{TGLC_CONTACT.address}</p>
              <p className="pt-2 text-[#9C968A]">General Inquiries:</p>
              <p className="text-[#D9D4CA]">{TGLC_CONTACT.telephone}</p>
              <p className="text-[#8A7654]">{TGLC_CONTACT.email}</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar: Legal, Regulatory & Image Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#706B62]">
          
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} The Global Luxury Consortium Ltd. All rights reserved.</p>
            <p className="text-[#555555]">
              Registered in England & Wales. TGLC House, 22 Arlington Street, St James’s, London SW1A 1RD.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[#8E8A83]">
            <button onClick={() => navigateTo('privacy-policy')} className="hover:text-[#D9D4CA] transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('terms')} className="hover:text-[#D9D4CA] transition-colors">
              Terms & Conditions
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('cookie-policy')} className="hover:text-[#D9D4CA] transition-colors">
              Cookie Policy
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('accessibility')} className="hover:text-[#D9D4CA] transition-colors">
              Accessibility
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('image-credits')} className="hover:text-[#D9D4CA] transition-colors">
              Image Credits & Disclaimers
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('sitemap')} className="hover:text-[#D9D4CA] transition-colors">
              Sitemap
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
