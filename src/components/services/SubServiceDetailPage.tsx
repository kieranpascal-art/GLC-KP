import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA } from '../../data/tglcData';
import { ArrowUpRight, ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';

interface SubServiceDetailPageProps {
  serviceId?: string;
  subServiceId?: string;
}

export const SubServiceDetailPage: React.FC<SubServiceDetailPageProps> = ({ serviceId, subServiceId }) => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  const parentService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const subService = parentService.subServices.find((sub) => sub.id === subServiceId) || parentService.subServices[0];
  const siblingSubServices = parentService.subServices.filter((sub) => sub.id !== subService.id);

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-10 sm:pt-14 pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">

        {/* Back Link */}
        <button
          onClick={() => navigateTo('service-detail', { serviceId: parentService.id })}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#9C968A] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {parentService.title} Practice</span>
        </button>

        {/* Main Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              {parentService.title} · Sub-Practice Specialism
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
              {subService.title}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-[#D9D4CA] leading-relaxed">
              {subService.leadParagraph}
            </p>
            <div className="pt-2">
              <button
                onClick={() => openIntroductionModal(`Inquiry regarding ${subService.title}`)}
                className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center gap-2"
              >
                <span>Request {subService.title} Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A] border border-[#222222]">
              <img
                src={subService.image}
                alt={subService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Detailed Points & Capabilities */}
        <div className="p-8 sm:p-12 bg-[#121212] border border-[#222222] space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
            <ShieldCheck className="w-4 h-4" />
            <span>Scope of Service & Protocol</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
            Operational Deliverables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {subService.detailedPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#8A7654] rounded-full shrink-0 mt-2" />
                <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Representative Scenarios & Case Outcomes */}
        {subService.keyScenarios && subService.keyScenarios.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#F4F1EA]">
              Exemplar Case Demonstrations
            </h3>
            <div className="space-y-4">
              {subService.keyScenarios.map((scen, idx) => (
                <div key={idx} className="p-6 bg-[#141414] border border-[#262626] space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">Scenario 0{idx + 1}</span>
                  <h4 className="font-serif text-xl text-[#F4F1EA]">{scen.title}</h4>
                  <p className="text-xs text-[#9C968A] leading-relaxed">{scen.description}</p>
                  <div className="pt-2 text-xs text-[#D9D4CA] flex items-center gap-2 border-t border-[#222222]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8A7654] shrink-0" />
                    <span>Delivered: {scen.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sibling Sub-Services Navigation */}
        {siblingSubServices.length > 0 && (
          <div className="pt-8 border-t border-[#222222]">
            <h3 className="font-serif text-xl text-[#F4F1EA] mb-6">
              Other Sub-Practices in {parentService.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siblingSubServices.map((sib) => (
                <button
                  key={sib.id}
                  onClick={() => navigateTo('subservice-detail', { serviceId: parentService.id, subServiceId: sib.id })}
                  className="p-4 bg-[#121212] border border-[#222222] hover:border-[#444444] text-left transition-colors"
                >
                  <h4 className="font-serif text-base text-[#F4F1EA] mb-1">{sib.title}</h4>
                  <p className="text-[11px] text-[#9C968A] line-clamp-2 leading-relaxed">{sib.shortDesc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
