import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA, JOURNAL_ARTICLES, TGLC_CONTACT } from '../../data/tglcData';
import { PageRoute } from '../../types';
import { ArrowLeft, ArrowUpRight, Shield, FileText, CheckCircle, Lock } from 'lucide-react';

interface LegalPagesProps {
  page: 'privacy-policy' | 'terms' | 'cookie-policy' | 'accessibility' | 'image-credits' | 'sitemap' | 'not-found';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ page }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Top Back Link */}
        <button
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7654] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Home</span>
        </button>

        {/* 1. Privacy Policy */}
        {page === 'privacy-policy' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Statutory Governance & GDPR Compliance
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Privacy Policy</h1>
              <p className="text-xs text-[#8E8A83]">Effective Date: 1 January 2026 · Last Reviewed: Autumn 2026</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                The Global Luxury Consortium Ltd (“TGLC”, “we”, “our”, or “us”), registered at TGLC House, 22 Arlington Street, St James’s, London SW1A 1RD, United Kingdom, is committed to safeguarding the personal data and private affairs of our members, prospective applicants, and website visitors.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">1. Data Controller & Principles</h3>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, TGLC acts as the data controller for information gathered during inquiries and membership management. We adhere strictly to principles of data minimization, accuracy, purpose limitation, and storage security.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">2. Categories of Data Collected</h3>
              <p>
                We collect personal identifiers (name, telephone, email, principal residences), travel preferences (flight route specifications, passport particulars for FBO clearances), culinary tastes, and billing details provided voluntarily. We never collect sensitive personal biometric or political data without explicit statutory necessity.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">3. Need-to-Know Vendor Disclosure</h3>
              <p>
                Third-party suppliers (such as aircraft operators, hotels, private dining rooms, or chauffeured fleets) receive only the minimum information necessary to execute requested services, frequently utilizing pseudonymized booking names. We do not sell, rent, or trade client information to commercial brokers or advertisers under any circumstance.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">4. Your Statutory Rights</h3>
              <p>
                Under UK GDPR, you have the right to request access to your member dossier, rectification of inaccurate records, erasure of discretionary notes, restriction of processing, and data portability. Inquiries may be addressed to our Data Protection Officer at {TGLC_CONTACT.email}.
              </p>
            </div>
          </div>
        )}

        {/* 2. Terms & Conditions */}
        {page === 'terms' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Statutory Charter & Usage Agreements
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Terms & Conditions</h1>
              <p className="text-xs text-[#8E8A83]">Governing Law: England and Wales</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                These Terms and Conditions govern access to the website of The Global Luxury Consortium Ltd and form the overarching contractual framework for private membership charters and advisory services.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">1. Nature of Concierge & Advisory Representation</h3>
              <p>
                TGLC acts as an introductory coordinator and lifestyle manager on behalf of its members. Unless expressly stipulated in a specific service contract, TGLC does not own commercial aircraft, charter vessels, or licensed restaurant venues. All third-party contracts (such as Part 135 air charters or yacht charter agreements) are executed between the member and the duly licensed operator.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">2. Independent Professional Counsel</h3>
              <p>
                TGLC does not provide regulated legal, conveyancing, mortgage, tax, immigration, medical, or investment advice. Where members require these services, TGLC facilitates introductions to duly qualified, independent, and statutory-regulated practitioners.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">3. Confidentiality Obligations</h3>
              <p>
                Both TGLC and the member agree to maintain mutual confidentiality regarding all discussions, fee schedules, member identities, and private itineraries, surviving termination of membership.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">4. Jurisdiction</h3>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales. The courts of England shall have exclusive jurisdiction over any disputes.
              </p>
            </div>
          </div>
        )}

        {/* 3. Cookie Policy */}
        {page === 'cookie-policy' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Session Protocols
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Cookie Policy</h1>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                The Global Luxury Consortium website utilizes minimal, essential session identifiers to maintain security, verify active inquiries, and remember navigation preferences.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">1. Strictly Necessary Cookies</h3>
              <p>
                These cookies are required for fundamental navigation, secure authentication inside the private member demo portal, and maintaining CSRF protection during form submissions.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">2. Performance & Ergonomic Cookies</h3>
              <p>
                These anonymous cookies allow us to monitor page transition fluidity, viewport responsiveness, and navigation pathways so we can refine the digital experience. We do not use third-party behavioral advertising pixels or tracking cookies.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">3. Managing Preferences</h3>
              <p>
                You may modify or revoke your cookie consent at any time via your browser settings or our persistent cookie preference panel located in the site footer.
              </p>
            </div>
          </div>
        )}

        {/* 4. Accessibility Statement */}
        {page === 'accessibility' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Digital Inclusion
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Accessibility Statement</h1>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                TGLC is dedicated to ensuring digital accessibility for all visitors, including individuals with visual, cognitive, motor, or auditory impairments.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">1. Compliance Benchmark</h3>
              <p>
                This website is built to conform to the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG 2.1) Level AA standards.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">2. Accessibility Features Implemented</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>WCAG-compliant contrast ratios across typography and dark surfaces.</li>
                <li>Visible keyboard focus outlines (`focus-visible`) for all interactive elements.</li>
                <li>Accessible touch targets exceeding 44px on mobile devices.</li>
                <li>Descriptive semantic HTML elements (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;button&gt;).</li>
                <li>`prefers-reduced-motion` compliance across video and transitions.</li>
              </ul>
            </div>
          </div>
        )}

        {/* 5. Image Credits & Disclaimers */}
        {page === 'image-credits' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Intellectual Property & Photography Attributions
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Image Credits & Disclaimers</h1>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              <p>
                This preview website for The Global Luxury Consortium utilizes high-resolution editorial photography curated from royalty-free, commercial-use photo libraries including Unsplash, Pexels, and Wikimedia Commons.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">1. Editorial Curation</h3>
              <p>
                All imagery depicts atmospheric London landmarks, St James’s architecture, private aviation scenes, historic European estates, and fine craftsmanship to illustrate TGLC’s breadth of service. Imagery does not imply endorsement by featured venues, artists, or vehicle marques.
              </p>

              <h3 className="font-serif text-xl text-[#F4F1EA] pt-4">2. Confidentiality Note</h3>
              <p>
                In alignment with our strict privacy protocol, no TGLC member photographs or private residential interiors are displayed on this public demonstration website.
              </p>
            </div>
          </div>
        )}

        {/* 6. Sitemap */}
        {page === 'sitemap' && (
          <div className="space-y-8">
            <div className="space-y-3 border-b border-[#222222] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7654] font-medium block">
                Index of All Pages
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F4F1EA]">Consortium Sitemap</h1>
              <p className="text-xs text-[#9C968A]">Complete directory of 35+ pages, sub-practices, and journal essays.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs">
              
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F4F1EA] border-b border-[#202020] pb-2">Core Navigation</h4>
                <ul className="space-y-2 text-[#9C968A]">
                  <li><button onClick={() => navigateTo('home')} className="hover:text-white">Home Page</button></li>
                  <li><button onClick={() => navigateTo('consortium')} className="hover:text-white">The Consortium Overview</button></li>
                  <li><button onClick={() => navigateTo('about')} className="hover:text-white">About & Leadership</button></li>
                  <li><button onClick={() => navigateTo('ethos')} className="hover:text-white">Our Ethos & Principles</button></li>
                  <li><button onClick={() => navigateTo('approach')} className="hover:text-white">Our Approach</button></li>
                  <li><button onClick={() => navigateTo('network')} className="hover:text-white">The TGLC Network</button></li>
                  <li><button onClick={() => navigateTo('our-london')} className="hover:text-white">Our London Enclaves</button></li>
                  <li><button onClick={() => navigateTo('privacy-discretion')} className="hover:text-white">Privacy & Discretion</button></li>
                  <li><button onClick={() => navigateTo('membership')} className="hover:text-white">Membership Charters</button></li>
                  <li><button onClick={() => navigateTo('calendar')} className="hover:text-white">The London Calendar</button></li>
                  <li><button onClick={() => navigateTo('journal')} className="hover:text-white">The TGLC Journal</button></li>
                  <li><button onClick={() => navigateTo('member-portal')} className="hover:text-white">Private Member Access</button></li>
                  <li><button onClick={() => navigateTo('contact')} className="hover:text-white">Contact & Address</button></li>
                  <li><button onClick={() => navigateTo('faq')} className="hover:text-white">Frequently Asked Questions</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F4F1EA] border-b border-[#202020] pb-2">Services & Practices</h4>
                <ul className="space-y-2 text-[#9C968A]">
                  <li><button onClick={() => navigateTo('services')} className="hover:text-white">Services Directory Hub</button></li>
                  {SERVICES_DATA.map((s) => (
                    <li key={s.id}>
                      <button onClick={() => navigateTo('service-detail', { serviceId: s.id })} className="hover:text-white">
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F4F1EA] border-b border-[#202020] pb-2">Journal Feature Articles</h4>
                <ul className="space-y-2 text-[#9C968A]">
                  {JOURNAL_ARTICLES.slice(0, 8).map((a) => (
                    <li key={a.slug}>
                      <button onClick={() => navigateTo('journal-article', { articleSlug: a.slug })} className="hover:text-white line-clamp-1 text-left">
                        {a.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* 7. 404 Not Found Page */}
        {page === 'not-found' && (
          <div className="py-20 text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A7654]">Error 404</span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA]">Page Not Found</h1>
            <p className="font-serif italic text-lg text-[#D9D4CA] max-w-md mx-auto">
              “The door you are seeking is presently closed.”
            </p>
            <p className="text-xs text-[#9C968A] max-w-sm mx-auto leading-relaxed">
              The address you entered does not exist or may have been relocated within our private index.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => navigateTo('home')}
                className="px-6 py-2.5 text-xs uppercase tracking-widest bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0B0B0B] font-medium border border-[#D4AF37]/50 shadow-md transition-all"
              >
                Return to Homepage
              </button>
              <button
                onClick={() => navigateTo('services')}
                className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#181818] hover:bg-[#222222] text-[#D9D4CA] border border-[#333333]"
              >
                View Services
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
