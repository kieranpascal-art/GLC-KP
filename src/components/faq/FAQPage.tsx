import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { FAQS_DATA } from '../../data/tglcData';
import { Search, ChevronDown, ArrowUpRight, HelpCircle } from 'lucide-react';

const FAQ_CATEGORIES = [
  'All Inquiries',
  'Membership',
  'Services & Scope',
  'Discretion & Privacy',
  'International',
  'Family & Private Office',
  'Admissions'
];

export const FAQPage: React.FC = () => {
  const { openIntroductionModal } = useNavigation();
  const [selectedCat, setSelectedCat] = useState('All Inquiries');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchCat = selectedCat === 'All Inquiries' || item.category === selectedCat;
    const matchSearch =
      !searchQuery.trim() ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            Admissions & Operations Guidance
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
            Frequently Addressed Inquiries
          </h1>
          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            “A life arranged with precision.”
          </p>
          <p className="text-sm text-[#9C968A] leading-relaxed font-light">
            Comprehensive explanations regarding our membership admissions, practice scope, international mobility, family office collaboration, and confidentiality architecture.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 border-y border-[#202020] py-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7654]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inquiries (e.g. aviation, fees, confidentiality, restaurants)..."
              className="w-full bg-[#141414] border border-[#2B2B2B] focus:border-[#8A7654] pl-11 pr-4 py-3 text-xs text-[#F4F1EA] placeholder-[#666666] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                  selectedCat === cat
                    ? 'bg-[#1C1C1C] text-white border border-[#8A7654]'
                    : 'text-[#9C968A] hover:text-white bg-[#121212] border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#888888] bg-[#121212] border border-[#222222]">
              No questions found matching your search. Please contact our admissions team directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-[#121212] border border-[#222222] transition-colors">
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 text-[#F4F1EA] hover:text-white"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654] font-mono block">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A7654] shrink-0 mt-1 transition-transform duration-200 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#1C1C1C] text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* ========================================================= */}
        {/* Client Help & Operational Protocols Guide */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-[#222222] space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Member Advisory & Response Service Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
              How TGLC Member Support Operates
            </h2>
            <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              Clear benchmarks, emergency dispatch windows, and step-by-step assistance protocols for principals, family offices, and executive assistants.
            </p>
          </div>

          {/* Response SLA Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 bg-[#121212] border border-[#222222] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block">SLA 01 · Urgent Aviation</span>
              <div className="font-serif text-3xl text-[#F4F1EA]">15 Mins</div>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Initial aircraft confirmation options presented for unscheduled departures from RAF Northolt, Farnborough, or Luton.
              </p>
            </div>

            <div className="p-6 bg-[#121212] border border-[#222222] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block">SLA 02 · Table Adjustments</span>
              <div className="font-serif text-3xl text-[#F4F1EA]">30 Mins</div>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Same-day guest headcount modifications, dietary briefs, and private room placement in premier London dining rooms.
              </p>
            </div>

            <div className="p-6 bg-[#121212] border border-[#222222] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block">SLA 03 · Complex Charters</span>
              <div className="font-serif text-3xl text-[#F4F1EA]">2–4 Hours</div>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Comprehensive multi-leg maritime, villa, or alpine itineraries delivered with full operator vetting and flight logs.
              </p>
            </div>

            <div className="p-6 bg-[#121212] border border-[#222222] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block">SLA 04 · Coverage</span>
              <div className="font-serif text-3xl text-[#F4F1EA]">24/7/365</div>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Direct access to duty lifestyle managers via encrypted line. Never outsourced to third-party offshore call centres.
              </p>
            </div>
          </div>

          {/* Detailed Protocol Playbooks */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#8A7654] mb-2">
              Member Protocol Playbooks
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#141414] border border-[#222222] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">Protocol Alpha</span>
                <h4 className="font-serif text-xl text-[#F4F1EA]">Private Aviation Tarmac Dispatch</h4>
                <p className="text-xs text-[#9C968A] leading-relaxed">
                  For London departures, your driver proceeds directly to the designated FBO gate. Border clearances are pre-submitted via your Member Dossier so passengers step from vehicle straight to the aircraft airstairs without entering the terminal building.
                </p>
                <div className="text-[11px] text-[#C8C3BA] pt-2 border-t border-[#1C1C1C]">
                  Key airfields: RAF Northolt (EGWU), London Farnborough (EGLF), London Biggin Hill (EGKB).
                </div>
              </div>

              <div className="p-6 bg-[#141414] border border-[#222222] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">Protocol Beta</span>
                <h4 className="font-serif text-xl text-[#F4F1EA]">Horology & High Jewellery Acquisition</h4>
                <p className="text-xs text-[#9C968A] leading-relaxed">
                  When seeking rare complications or high jewellery, your manager schedules private penthouse viewings at Selfridges, Harrods, or Bond Street. All provenance checks, GIA certificates, and secure courier escorts are managed under strict NDA.
                </p>
                <div className="text-[11px] text-[#C8C3BA] pt-2 border-t border-[#1C1C1C]">
                  Direct access: Burlington Arcade, Cartier Townhouse, Selfridges Duke St Penthouse.
                </div>
              </div>

              <div className="p-6 bg-[#141414] border border-[#222222] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">Protocol Gamma</span>
                <h4 className="font-serif text-xl text-[#F4F1EA]">Family Office & Executive Assistant Integration</h4>
                <p className="text-xs text-[#9C968A] leading-relaxed">
                  We integrate directly with your Chief of Staff, EA, or family office director. Authorised delegates can submit requests, approve flight schedules, and view consolidated monthly statements without bothering the principal with logistical minutiae.
                </p>
                <div className="text-[11px] text-[#C8C3BA] pt-2 border-t border-[#1C1C1C]">
                  Encrypted channels: Signal / WhatsApp private group, PGP secure email, Member Portal.
                </div>
              </div>

              <div className="p-6 bg-[#141414] border border-[#222222] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">Protocol Delta</span>
                <h4 className="font-serif text-xl text-[#F4F1EA]">Confidential Disbursements & Invoicing</h4>
                <p className="text-xs text-[#9C968A] leading-relaxed">
                  Third-party disbursements (hotels, aircraft charters, fine wines, gallery acquisitions) are settled without commercial retail markups. Monthly itemised statements are issued with confidential pseudonymised references suitable for family trust accounting.
                </p>
                <div className="text-[11px] text-[#C8C3BA] pt-2 border-t border-[#1C1C1C]">
                  Settlement methods: Dedicated client treasury account, corporate card, SWIFT wire.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Still have questions banner */}
        <div className="p-10 bg-[#141414] border border-[#242424] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-[#F4F1EA]">Have a Specific Inquiry or Need Urgent Assistance?</h3>
            <p className="text-xs text-[#9C968A] mt-1 max-w-xl">
              Our Private Office desk at 22 Arlington Street is available for prospective members and family office principals. Telephone: +44 (0)20 7946 0848 · Member Desk: +44 (0)20 7946 0849.
            </p>
          </div>
          <button
            onClick={() => openIntroductionModal('Unlisted Question Consultation')}
            className="px-7 py-3 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Request a Conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
          </button>
        </div>

      </div>
    </div>
  );
};
