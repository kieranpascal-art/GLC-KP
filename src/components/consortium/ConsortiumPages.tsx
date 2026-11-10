import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { TEAM_MEMBERS, ETHOS_PRINCIPLES, APPROACH_STEPS, LONDON_NEIGHBOURHOODS, TGLC_CONTACT } from '../../data/tglcData';
import { ArrowUpRight, Shield, Award, Users, MapPin, Check, Lock, ChevronRight, Compass } from 'lucide-react';
import { ConsortiumLocationsMap } from './ConsortiumLocationsMap';

interface ConsortiumPagesProps {
  subPage?: 'overview' | 'about' | 'ethos' | 'approach' | 'network' | 'our-london' | 'privacy';
}

export const ConsortiumPages: React.FC<ConsortiumPagesProps> = ({ subPage = 'overview' }) => {
  const { navigateTo, openIntroductionModal } = useNavigation();
  const [selectedLondonArea, setSelectedLondonArea] = useState(0);

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      {/* Editorial Sub-Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654] mb-3">
          <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#D9D4CA]">The Consortium</span>
          {subPage !== 'overview' && (
            <>
              <span>/</span>
              <span className="text-white capitalize">{subPage.replace('-', ' ')}</span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-[#222222] pb-4 text-xs uppercase tracking-wider">
          <button
            onClick={() => navigateTo('consortium')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'overview' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Consortium Overview
          </button>
          <button
            onClick={() => navigateTo('about')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'about' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            About & Leadership
          </button>
          <button
            onClick={() => navigateTo('ethos')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'ethos' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Our Ethos
          </button>
          <button
            onClick={() => navigateTo('approach')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'approach' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Our Approach
          </button>
          <button
            onClick={() => navigateTo('network')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'network' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            The TGLC Network
          </button>
          <button
            onClick={() => navigateTo('our-london')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'our-london' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Our London & Map
          </button>
          <button
            onClick={() => navigateTo('privacy-discretion')}
            className={`px-3 py-1.5 transition-colors ${subPage === 'privacy' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Privacy & Discretion
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. Consortium Overview Subpage */}
      {/* ========================================================= */}
      {subPage === 'overview' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              St James’s, London · Established 2018
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              A private house built on trust, instinct, and sound judgement.
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              “The right introduction, at the right moment.”
            </p>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              The Global Luxury Consortium was established to provide ultra-high-net-worth individuals, families, and family offices with an antidote to generic concierge services. Operating from TGLC House in St James’s, we blend traditional British discretion with effortless international mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#1F1F1F]">
            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">01 / Purpose</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Curated Attention</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                We consciously limit the number of active memberships we manage. This ensures your dedicated lifestyle manager possesses the mental bandwidth to foresee your needs before they arise.
              </p>
              <button onClick={() => navigateTo('about')} className="text-xs uppercase tracking-wider text-[#D9D4CA] hover:text-white pt-2 flex items-center gap-1">
                <span>Meet Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">02 / Principles</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Sound Judgement</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Access is not about automated bots or commercial agreements. It is about decades of mutual respect with restaurateurs, gallery directors, estate custodians, and pilots.
              </p>
              <button onClick={() => navigateTo('ethos')} className="text-xs uppercase tracking-wider text-[#D9D4CA] hover:text-white pt-2 flex items-center gap-1">
                <span>Read Our Ethos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">03 / Trust</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Privacy by Default</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                We maintain an absolute blackout on member identities, itineraries, and private requests. Our staff operate under strict legal confidentiality agreements.
              </p>
              <button onClick={() => navigateTo('privacy-discretion')} className="text-xs uppercase tracking-wider text-[#D9D4CA] hover:text-white pt-2 flex items-center gap-1">
                <span>Confidentiality Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-10 bg-[#141414] border border-[#242424] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Admissions Inquiry</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA] mt-1">Explore Membership with TGLC</h3>
              <p className="text-xs text-[#9C968A] mt-1 max-w-xl">
                Our Private Membership committee reviews introductions year-round. All conversations are held in strict confidence.
              </p>
            </div>
            <button
              onClick={() => openIntroductionModal('Consortium Inquiry')}
              className="px-7 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 whitespace-nowrap shrink-0 transition-all"
            >
              Request an Introduction
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. About TGLC & Leadership Subpage */}
      {/* ========================================================= */}
      {subPage === 'about' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Leadership & Heritage
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              About The Global Luxury Consortium
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              “A life arranged with precision.”
            </p>
            <div className="space-y-4 text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                The Global Luxury Consortium was established in London by Alexander Reed alongside a trusted circle of private family advisors, art specialists, and private aviation coordinators. They shared a conviction that the luxury concierge sector had become too commercial, too loud, and too disconnected from genuine culture.
              </p>
              <p>
                Headquartered at TGLC House on historic Arlington Street in St James’s—a street synonymous with British diplomacy, private clubs, and statecraft—we serve a discerning global membership. We operate not as an outsourced vendor, but as an intimate intellectual and operational extension of our members’ personal lives.
              </p>
            </div>
          </div>

          {/* Team Profiles */}
          <div>
            <div className="border-b border-[#222222] pb-6 mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-serif text-3xl text-[#F4F1EA]">
                The Stewards of TGLC House
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="bg-[#121212] border border-[#222222] p-6 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-[#1A1A1A]">
                      <img
                        src={member.image}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">{member.title}</span>
                    <h3 className="font-serif text-2xl text-[#F4F1EA] mt-1 mb-1">{member.name}</h3>
                    <p className="text-xs text-[#8E8A83] italic mb-4">{member.role} · {member.location}</p>
                    <p className="text-xs text-[#9C968A] leading-relaxed mb-4">{member.bio}</p>
                  </div>
                  <div className="pt-4 border-t border-[#1F1F1F] text-[11px] text-[#D9D4CA]">
                    <span className="text-[#777777] block text-[10px] uppercase tracking-wider">Practice Focus</span>
                    {member.specialism}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. Our Ethos Subpage */}
      {/* ========================================================= */}
      {subPage === 'ethos' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Founding Creed
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              Our Ethos & Principles
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              “A rare breadth of access, guided by sound judgement.”
            </p>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              We govern every decision, hire, introduction, and reservation by five immutable principles. These are not marketing slogans; they are the operational constitution of our house.
            </p>
          </div>

          <div className="space-y-12">
            {ETHOS_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-8 sm:p-12 bg-[#121212] border border-[#222222] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <span className="font-mono text-3xl sm:text-4xl text-[#8A7654]">{principle.number}</span>
                  <h3 className="font-serif text-2xl text-[#F4F1EA] mt-2 leading-snug">
                    {principle.title}
                  </h3>
                </div>

                <div className="lg:col-span-9 space-y-4">
                  <p className="font-serif text-lg text-[#D9D4CA] leading-relaxed">
                    {principle.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. Our Approach Subpage */}
      {/* ========================================================= */}
      {subPage === 'approach' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Methodology & Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              Our Approach
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              From first introduction through private consultation, dossier building, and seamless proactive management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {APPROACH_STEPS.map((item) => (
              <div key={item.step} className="p-6 bg-[#121212] border border-[#222222] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl text-[#8A7654] block mb-4">{item.step}</span>
                  <h3 className="font-serif text-xl text-[#F4F1EA] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-xs text-[#9C968A] leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-[10px] text-[#777777] uppercase tracking-wider">
                  Phase {item.step}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-[#141414] border border-[#242424] max-w-4xl">
            <h3 className="font-serif text-2xl text-[#F4F1EA] mb-3">The Confidential Member Dossier</h3>
            <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed mb-6 font-light">
              Upon induction, your Lifestyle Manager curates your private dossier. This living document captures nuanced details: favorite aircraft cabin seating, private driver preferences, specific dietary restrictions, preferred hotel suites, anniversary dates, and family nuances so you never have to repeat instructions.
            </p>
            <button
              onClick={() => openIntroductionModal('Membership Proposal Request')}
              className="px-8 py-3.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all"
            >
              Begin Your Onboarding Journey
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. The TGLC Network Subpage */}
      {/* ========================================================= */}
      {subPage === 'network' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Curated Global Ecosystem
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              The TGLC Network
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              A private ecosystem built on merit, discretion, and mutual standards.
            </p>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              We do not accept commissions, affiliate kickbacks, or promotional fee arrangements from suppliers. Our network is curated strictly through merit, safety records, and personal relationships cultivated over twenty years across London, Geneva, Paris, New York, and Tokyo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Aviation & Maritime</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Vetted Operators</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Direct relationships with Part 135 / AOC licensed aircraft fleet owners and vetted superyacht captains. Zero commercial intermediary markups.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Arts & Antiquities</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Curators & Dealers</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Senior scholars at national museums, master framers in St James’s, and independent dealers across Cork Street and the Marais.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Private Estates</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Aristocratic Custodians</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Privately held castles, Scottish sporting lodges, and Mediterranean clifftop villas that never enter public rental marketplaces.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Health & Longevity</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Harley Street Alliance</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Direct access to leading consulting surgeons, preventative diagnostics, and restorative alpine wellness clinics in Switzerland.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Security & Transit</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">SIA Close Protection</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                British military and police background close protection officers licensed by the Security Industry Authority, chosen for quiet diplomacy.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Fine Craft & Horology</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Independent Masters</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Geneva master watchmakers, Savile Row cutters, and bespoke silversmiths crafting commemorative pieces with genuine provenance.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. Our London Enclaves Subpage */}
      {/* ========================================================= */}
      {subPage === 'our-london' && (
        <div className="space-y-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Cartography of Access & Private Sanctuary
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              Our London: The Private Map
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              “London, understood from every angle.”
            </p>
            <div className="space-y-4 text-sm text-[#9C968A] leading-relaxed font-light max-w-4xl">
              <p>
                London is not a monoculture; it is an archipelago of historic villages, ancient liveries, diplomatic enclaves, and creative counterpoints. For the ultra-high-net-worth principal, navigating the capital requires an intimate grasp of nuance: which private dining room affords true acoustic isolation, which arcade houses the most scholarly vintage horologists, and how to arrive at Wimbledon Centre Court by air without touching the public South London road network.
              </p>
              <p>
                Below, we invite members and prospective clients to interact with our curated <strong>Consortium Locations</strong> map, exploring TGLC-favored sanctums, private department store penthouses, high jewellery vaults, and championship sporting grounds across the capital.
              </p>
            </div>
          </div>

          {/* Interactive High-Fidelity Consortium Locations Map Section */}
          <ConsortiumLocationsMap />

          {/* Deep Enclave Profiles & Cultural Dossiers */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 pt-8">
            <div className="border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block mb-2">
                Detailed Neighborhood Dossiers
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                The Cultural Anatomy of London’s Quarters
              </h2>
              <p className="text-xs text-[#9C968A] mt-2 max-w-2xl font-light">
                Select an enclave below to inspect our localized intelligence, architectural character, and discrete access privileges cultivated over twenty years of private advisory.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Neighbourhood Selector */}
              <div className="lg:col-span-5 space-y-3">
                {LONDON_NEIGHBOURHOODS.map((area, idx) => (
                  <button
                    key={area.name}
                    onClick={() => setSelectedLondonArea(idx)}
                    className={`w-full text-left p-5 border transition-all ${
                      selectedLondonArea === idx
                        ? 'bg-[#181818] border-[#8A7654] text-white shadow-lg'
                        : 'bg-[#121212] border-[#222222] text-[#9C968A] hover:bg-[#161616]'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654] block mb-1">{area.vibe}</span>
                    <h3 className="font-serif text-xl text-[#F4F1EA]">{area.name}</h3>
                  </button>
                ))}
              </div>

              {/* Right Column: Active Neighbourhood Spotlight with Rich Prose */}
              <div className="lg:col-span-7 bg-[#141414] border border-[#222222] p-8 space-y-6">
                {(() => {
                  const active = LONDON_NEIGHBOURHOODS[selectedLondonArea];
                  return (
                    <div className="space-y-6">
                      <div className="aspect-[16/9] w-full overflow-hidden bg-[#1C1C1C]">
                        <img
                          src={active.image}
                          alt={active.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#8A7654]">{active.vibe}</span>
                        <h2 className="font-serif text-3xl text-[#F4F1EA] mt-1 mb-3">{active.name}</h2>
                        <p className="text-sm text-[#D9D4CA] leading-relaxed font-light">{active.summary}</p>
                      </div>
                      
                      <div className="border-t border-[#222222] pt-6 space-y-3">
                        <h4 className="text-xs uppercase tracking-widest text-[#8A7654]">TGLC Access Highlights & Secret Addresses</h4>
                        <ul className="space-y-2.5">
                          {active.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-[#C8C3BA] flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#8A7654] rounded-full mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <button
                          onClick={() => openIntroductionModal(`Inquiry regarding bespoke arrangements in ${active.name}`)}
                          className="px-7 py-3 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md flex items-center gap-1.5 transition-all"
                        >
                          <span>Arrange an Itinerary in {active.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                        </button>
                        <a
                          href="#consortium-locations"
                          className="text-xs text-[#8A7654] hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>View on Interactive Map</span>
                          <Compass className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 7. Privacy & Discretion Subpage */}
      {/* ========================================================= */}
      {subPage === 'privacy' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
              Confidentiality Protocol
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
              Privacy & Discretion
            </h1>
            <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
              “The finest service is unseen.”
            </p>
            <p className="text-sm text-[#9C968A] leading-relaxed font-light">
              In an era of relentless data harvesting and conspicuous exposure, TGLC treats personal discretion as the highest form of luxury. Our operational architecture is designed to protect your identity, family, and movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#121212] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
                <Lock className="w-4 h-4" />
                <span>Strict Need-to-Know Handling</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Need-to-Know Information Flow</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Service providers and vendors (such as aircraft captains, private dining room managers, or villa custodians) receive only the exact details necessary to execute the service, frequently utilizing member pseudonyms.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
                <Shield className="w-4 h-4" />
                <span>Ironclad Non-Disclosure</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Staff Non-Disclosure Deeds</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Every member of our lifestyle management, advisory, and administrative team signs comprehensive legally binding confidentiality agreements with perpetual survival clauses under English law.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
                <Check className="w-4 h-4" />
                <span>Secure Communications</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Encrypted Channels</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Members may choose their preferred mode of communication—including end-to-end encrypted messaging (Signal / WhatsApp), secure PGP email, or encrypted telephone voice channels.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
                <Award className="w-4 h-4" />
                <span>Zero Public Endorsements</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">No Client Roster Publicity</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                We never photograph our members at private events, never tag clients on social media, and never trade upon celebrity or royal names to build our brand equity.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
