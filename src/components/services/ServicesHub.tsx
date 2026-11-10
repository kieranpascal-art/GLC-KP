import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA } from '../../data/tglcData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesHub: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-10 sm:pt-14 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            Practice Disciplines
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
            Seven Pillars of Private Lifestyle Management
          </h1>
          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            “From the expected to the exceptional.”
          </p>
          <p className="text-sm text-[#9C968A] leading-relaxed font-light max-w-2xl">
            TGLC integrates seven specialized departments under one coordinated private house. Rather than navigating fragmented brokers, agencies, and concierge apps, our members enjoy unified management through their dedicated lifestyle manager.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-12 bg-[#121212] border border-[#222222] hover:border-[#383838] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8A7654]">{service.kicker}</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                  {service.title}
                </h2>
                <p className="font-serif italic text-sm text-[#D9D4CA]">
                  “{service.tagline}”
                </p>
                <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                  {service.overview}
                </p>

                {/* Subservice Pills */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-2">Specialist Sub-Practices:</span>
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => navigateTo('subservice-detail', { serviceId: service.id, subServiceId: sub.id })}
                        className="text-xs text-[#D9D4CA] bg-[#1A1A1A] hover:bg-[#262626] border border-[#2D2D2D] px-3 py-1.5 transition-colors text-left"
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => navigateTo('service-detail', { serviceId: service.id })}
                    className="px-6 py-3 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
                  >
                    <span>View Category Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div
                  onClick={() => navigateTo('service-detail', { serviceId: service.id })}
                  className="aspect-[16/10] w-full overflow-hidden cursor-pointer group bg-[#1A1A1A]"
                >
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-12 bg-[#141414] border border-[#222222] text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-[#F4F1EA]">
            Looking for a Tailored Lifestyle Solution?
          </h3>
          <p className="text-xs text-[#9C968A] leading-relaxed max-w-lg mx-auto">
            Our teams routinely design bespoke arrangements spanning multiple categories—from international family relocations to private art collection tours.
          </p>
          <button
            onClick={() => openIntroductionModal('Bespoke Multi-Category Lifestyle Charter')}
            className="px-8 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all"
          >
            Request a Private Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
