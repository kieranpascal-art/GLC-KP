import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA } from '../../data/tglcData';
import { ArrowUpRight, Check, HelpCircle, ChevronRight, AlertCircle } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId = 'travel-aviation' }) => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-10 sm:pt-14 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12 border-b border-[#222222]">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              {service.kicker} · Specialized Practice
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              {service.title}
            </h1>
            <p className="font-serif italic text-2xl text-[#D9D4CA] leading-relaxed">
              “{service.tagline}”
            </p>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              {service.overview}
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openIntroductionModal(`Inquiry regarding ${service.title}`)}
                className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center gap-2"
              >
                <span>Request Practice Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#1A1A1A] border border-[#222222]">
              <img
                src={service.heroImage}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Regulatory Note (if present) */}
        {service.regulatoryNote && (
          <div className="p-4 bg-[#141414] border border-[#2B2B2B] text-xs text-[#9C968A] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
            <p className="leading-relaxed">{service.regulatoryNote}</p>
          </div>
        )}

        {/* Sub-Services Modules (5 to 7 Sub-Services) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#222222]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-1">
                Sub-Practice Capabilities
              </span>
              <h2 className="font-serif text-3xl text-[#F4F1EA]">
                {service.subServices.length} Specialized Sub-Services in {service.title}
              </h2>
            </div>
            <p className="text-xs text-[#9C968A] max-w-sm">
              Click any sub-practice to review full operational scope, scenarios, and execution protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub, i) => (
              <div
                key={sub.id}
                onClick={() => navigateTo('subservice-detail', { serviceId: service.id, subServiceId: sub.id })}
                className="group cursor-pointer bg-[#121212] border border-[#222222] hover:border-[#444444] p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden mb-4 bg-[#1A1A1A]">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  <span className="font-mono text-xs text-[#8A7654] block mb-1">0{i + 1}</span>
                  <h3 className="font-serif text-2xl text-[#F4F1EA] group-hover:text-white mb-2 flex items-center justify-between">
                    <span>{sub.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D9D4CA]" />
                  </h3>
                  <p className="text-xs text-[#9C968A] leading-relaxed line-clamp-3 mb-4">
                    {sub.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#8A7654] group-hover:text-[#F4F1EA] transition-colors">
                  <span>Explore Sub-Service Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Scenario / Case Study */}
        <div className="p-8 sm:p-12 bg-[#121212] border border-[#222222] space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
            <Check className="w-3.5 h-3.5" />
            <span>Demonstration Member Scenario</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
            {service.memberScenario.client}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#1E1E1E]">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#777777] block">The Brief</span>
              <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">
                {service.memberScenario.brief}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#8A7654] block">The TGLC Execution</span>
              <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">
                {service.memberScenario.solution}
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#161616] border border-[#262626] text-xs text-[#9C968A] italic">
            Outcome: {service.memberScenario.details}
          </div>
        </div>

        {/* Practice Features */}
        <div className="p-8 sm:p-12 bg-[#141414] border border-[#222222]">
          <h3 className="font-serif text-2xl text-[#F4F1EA] mb-6">
            Key Execution Standards & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#8A7654] rounded-full shrink-0 mt-2" />
                <p className="text-xs text-[#D9D4CA] leading-relaxed">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-[#222222] pb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-1">
                Frequently Addressed Inquiries
              </span>
              <h2 className="font-serif text-3xl text-[#F4F1EA]">
                {service.title} Questions & Clarifications
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((f, i) => (
                <div key={i} className="p-6 bg-[#121212] border border-[#222222] space-y-2">
                  <h4 className="font-serif text-lg text-[#F4F1EA] flex items-start gap-2">
                    <span className="text-[#8A7654] font-mono text-sm">Q.</span>
                    <span>{f.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed pl-6 font-light">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        <div className="pt-8 border-t border-[#222222]">
          <h3 className="font-serif text-2xl text-[#F4F1EA] mb-6">
            Explore Adjacent Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigateTo('service-detail', { serviceId: rel.id })}
                className="p-5 bg-[#121212] border border-[#222222] hover:border-[#444444] cursor-pointer transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block mb-1">{rel.kicker}</span>
                <h4 className="font-serif text-xl text-[#F4F1EA] mb-2">{rel.title}</h4>
                <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed">{rel.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
