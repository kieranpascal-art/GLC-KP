import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { APPROACH_STEPS, FAQS_DATA } from '../../data/tglcData';
import { ArrowUpRight, Check, Shield, Users, Clock, Globe, Compass, ChevronDown } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const { openIntroductionModal } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const membershipFaqs = FAQS_DATA.filter((f) => f.category === 'Membership' || f.category === 'Admissions').slice(0, 6);

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            Admissions & Charters
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] leading-tight">
            Private Membership
          </h1>
          <p className="font-serif italic text-2xl text-[#D9D4CA] leading-relaxed">
            “The right introduction, at the right moment.”
          </p>
          <p className="text-sm sm:text-base text-[#9C968A] leading-relaxed font-light max-w-2xl">
            TGLC limits its membership roll to preserve the intimacy, responsiveness, and depth of our relationships. We operate on a referral and invitation basis. Terms and retainers are shared following an introductory conversation.
          </p>
          
          <div className="pt-2">
            <button
              onClick={() => openIntroductionModal('General Membership Proposal')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center gap-2"
            >
              <span>Request an Introduction</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
            </button>
          </div>
        </div>

        {/* The 3 Pathways */}
        <div>
          <div className="border-b border-[#222222] pb-6 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-2">
              Three Charters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
              Tailored Pathways to Match Your Rhythm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pathway 1 */}
            <div className="bg-[#121212] border border-[#222222] p-8 sm:p-10 flex flex-col justify-between hover:border-[#444444] transition-all">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8A7654] block mb-2">Charter 01</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The London Membership</h3>
                <p className="text-xs text-[#9C968A] leading-relaxed mb-6">
                  Engineered for residents, regular business travellers, and families who require a connected, sophisticated presence across the British capital.
                </p>
                
                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#202020] pt-6 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Dedicated London Lifestyle Manager at TGLC House</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Preferred table allocations across Mayfair, St James’s, and Soho</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Private gallery previews, artist salons, and cultural admissions</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Chauffeur, theatre, and day-to-day administrative management</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Access to The London Calendar member-only invitations</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#8A7654] italic mb-4">
                  Membership terms available following a private introduction
                </p>
                <button
                  onClick={() => openIntroductionModal('The London Membership')}
                  className="w-full py-3 text-xs uppercase tracking-widest text-[#F4F1EA] bg-[#1A1A1A] hover:bg-[#252525] border border-[#333333] transition-colors"
                >
                  Request London Introduction
                </button>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-[#151515] border border-[#8A7654]/50 p-8 sm:p-10 flex flex-col justify-between relative shadow-2xl hover:border-[#8A7654] transition-all">
              <div className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-[#8A7654] font-medium">
                Most Comprehensive
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#8A7654] block mb-2">Charter 02</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The Global Membership</h3>
                <p className="text-xs text-[#9C968A] leading-relaxed mb-6">
                  For internationally mobile principals and families navigating multi-country residences, private aviation, superyacht charters, and round-the-clock logistics.
                </p>
                
                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#262626] pt-6 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Everything included in The London Membership</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>24/7/365 Global Member Support Desk access</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Private aviation dispatch & tarmac handling (Farnborough / Northolt)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Mediterranean & Alpine private residence and chalet sourcing</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Coverage extended to spouse, children, and travelling assistants</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#8A7654] italic mb-4">
                  Membership terms available following a private introduction
                </p>
                <button
                  onClick={() => openIntroductionModal('The Global Membership')}
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] shadow-lg shadow-[#D4AF37]/25 transition-all"
                >
                  Request Global Introduction
                </button>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="bg-[#121212] border border-[#222222] p-8 sm:p-10 flex flex-col justify-between hover:border-[#444444] transition-all">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8A7654] block mb-2">Charter 03</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The Private Office</h3>
                <p className="text-xs text-[#9C968A] leading-relaxed mb-6">
                  A bespoke arrangement for principals, family offices, and executive leadership teams requiring an integrated, deeply personalised extension of their existing advisory team.
                </p>
                
                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#202020] pt-6 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Senior Executive Lifestyle Director assigned directly</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Integration with family office CFO, EAs, and private bankers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Off-market prime property and country estate acquisition sourcing</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Discreet close protection and cybersecurity protocol coordination</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                    <span>Bespoke retained personnel and custom SLA commitments</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#8A7654] italic mb-4">
                  By bespoke arrangement following partner consultation
                </p>
                <button
                  onClick={() => openIntroductionModal('The Private Office')}
                  className="w-full py-3 text-xs uppercase tracking-widest text-[#F4F1EA] bg-[#1A1A1A] hover:bg-[#252525] border border-[#333333] transition-colors"
                >
                  Request Private Office Advisory
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed What Membership Includes Grid */}
        <div className="p-8 sm:p-12 bg-[#121212] border border-[#222222] space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-1">
              Comprehensive Support
            </span>
            <h3 className="font-serif text-3xl text-[#F4F1EA]">
              What Membership at TGLC Entails
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">Your Dedicated Lifestyle Manager</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                You never interact with an anonymous ticket system. You are paired with a seasoned lifestyle manager at TGLC House who acts as your direct operational peer.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">Proactive Seasonal Planning</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                We present you with bespoke seasonal dossiers ahead of peak periods—locking in prime summer chalets, Wimbledon debentures, and autumn shoot estates months in advance.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">24/7 Member Support Desk</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                When you need an emergency aircraft charter from Nice at midnight or a sudden itinerary change in Tokyo, our private member line is answered immediately by senior coordinators.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">Global Access through Relationships</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Our network opens closed doors: after-hours museum galleries, private sporting enclosures, and Michelin-starred dining rooms where tables are held back from the public.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">Encrypted Confidentiality</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                We operate under strict non-disclosure terms. All communications, billing statements, and member itineraries are handled in strict privacy.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F4F1EA]">Consolidated Accounting</h4>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                All third-party expenses, flights, hotels, and disbursements are reconciled into an itemized, transparent monthly account for your finance team.
              </p>
            </div>
          </div>
        </div>

        {/* The 5-Step Membership Journey */}
        <div>
          <div className="border-b border-[#222222] pb-6 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-2">
              Admissions Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
              How Membership Begins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {APPROACH_STEPS.map((step) => (
              <div key={step.step} className="p-6 bg-[#121212] border border-[#222222] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl text-[#8A7654] block mb-3">{step.step}</span>
                  <h3 className="font-serif text-lg text-[#F4F1EA] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#9C968A] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership FAQs */}
        <div className="space-y-6">
          <div className="border-b border-[#222222] pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-1">
              Admissions Inquiries
            </span>
            <h2 className="font-serif text-3xl text-[#F4F1EA]">
              Membership Questions & Answers
            </h2>
          </div>

          <div className="space-y-3">
            {membershipFaqs.map((faq, idx) => (
              <div key={faq.id} className="bg-[#121212] border border-[#222222]">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-[#F4F1EA] hover:text-white transition-colors"
                >
                  <span className="font-serif text-lg">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#8A7654] transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#9C968A] leading-relaxed border-t border-[#1C1C1C] pt-3 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-10 bg-[#141414] border border-[#242424] text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#8A7654]">Confidential Inquiries</span>
          <h3 className="font-serif text-3xl text-[#F4F1EA]">
            Begin with a Private Conversation
          </h3>
          <p className="text-xs text-[#9C968A] max-w-md mx-auto leading-relaxed">
            We invite prospective members to arrange an unhurried consultation with Sofia Laurent, Director of Private Membership.
          </p>
          <button
            onClick={() => openIntroductionModal('Membership Inquiry')}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] shadow-lg shadow-[#D4AF37]/25 transition-all"
          >
            Submit an Introduction
          </button>
        </div>

      </div>
    </div>
  );
};
