import React, { useState } from 'react';
import { TGLC_CONTACT } from '../../data/tglcData';
import { ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle, Lock, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [location, setLocation] = useState('');
  const [contactMethod, setContactMethod] = useState<'Telephone' | 'Email' | 'WhatsApp / Signal' | 'Private In-Person'>('Telephone');
  const [interestArea, setInterestArea] = useState('The London Membership');
  const [referralSource, setReferralSource] = useState('Existing TGLC Member Referral');
  const [message, setMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !telephone) {
      setErrorMessage('Please provide your name, email, and telephone number.');
      return;
    }
    if (!privacyAgreed) {
      setErrorMessage('Please acknowledge the privacy & confidentiality terms.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A7654] font-medium block">
            Admissions & Introductions
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight">
            Begin with a private conversation.
          </h1>
          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            “The right introduction, at the right moment.”
          </p>
          <p className="text-sm text-[#9C968A] leading-relaxed font-light max-w-2xl">
            Membership at TGLC is by referral or private introduction. We invite prospective members, family principals, and family office directors to initiate contact below.
          </p>
        </div>

        {/* 2-Column Layout: Form & Address Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#262626] p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1A1A1A] border border-[#3E3E3E] flex items-center justify-center text-[#8A7654]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif text-3xl text-[#F4F1EA]">
                  Thank you for your introduction.
                </h3>
                
                <p className="font-serif italic text-xl text-[#D9D4CA] max-w-lg mx-auto leading-relaxed">
                  “A member of the TGLC team will respond personally and in confidence.”
                </p>

                <div className="bg-[#181818] border border-[#2B2B2B] p-6 text-xs text-[#9C968A] max-w-md mx-auto text-left space-y-2 font-light">
                  <p className="text-[#F4F1EA] font-medium uppercase tracking-wider text-[11px]">Submission Record</p>
                  <p>Principal: <span className="text-[#D9D4CA]">{fullName}</span></p>
                  <p>Interest Area: <span className="text-[#D9D4CA]">{interestArea}</span></p>
                  <p>Preferred Method: <span className="text-[#D9D4CA]">{contactMethod}</span></p>
                  <p className="text-[11px] text-[#706B62] pt-2 border-t border-[#262626]">
                    Our Arlington Street admissions committee will review your submission within one working day.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#222222] hover:bg-[#2E2E2E] text-white border border-[#3A3A3A] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654] pb-2 border-b border-[#202020]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidential Introduction Form</span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#2C1417] border border-[#521C22] text-xs text-[#F2C2C6]">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Lord Harrington / Elena Rostova"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="confidential@domain.com"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="+44 (0)20 ... / +1 ..."
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      City / Country of Residence
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. London / Geneva / New York"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      Primary Area of Interest
                    </label>
                    <select
                      value={interestArea}
                      onChange={(e) => setInterestArea(e.target.value)}
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] focus:outline-none"
                    >
                      <option value="The London Membership">The London Membership</option>
                      <option value="The Global Membership">The Global Membership</option>
                      <option value="The Private Office Advisory">The Private Office Advisory</option>
                      <option value="Travel & Private Aviation">Travel & Private Aviation</option>
                      <option value="London Dining & Cultural Access">London Dining & Cultural Access</option>
                      <option value="Residences & Relocation">Residences & Relocation</option>
                      <option value="Luxury Sourcing & Acquisitions">Luxury Sourcing & Acquisitions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] focus:outline-none"
                    >
                      <option value="Telephone">Telephone Call</option>
                      <option value="Email">Confidential Email</option>
                      <option value="WhatsApp / Signal">WhatsApp / Signal</option>
                      <option value="Private In-Person">In-Person at TGLC House (St James’s)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                    How did you hear about TGLC?
                  </label>
                  <select
                    value={referralSource}
                    onChange={(e) => setReferralSource(e.target.value)}
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] focus:outline-none"
                  >
                    <option value="Existing TGLC Member Referral">Existing TGLC Member Referral</option>
                    <option value="Private Family Office / Advisory Introduction">Private Family Office / Advisory Introduction</option>
                    <option value="St James’s / Mayfair Partner Introduction">St James’s / Mayfair Partner Introduction</option>
                    <option value="Personal Recommendation">Personal Recommendation</option>
                    <option value="Private Invitation">Private Invitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                    Message / Context (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share any specific upcoming travel, relocations, or lifestyle requirements..."
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2.5 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-[#9C968A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="mt-0.5 accent-[#8A7654]"
                    />
                    <span>
                      I understand that TGLC operates on a strict need-to-know basis and agree that my details will be handled confidentially under UK GDPR standards.
                    </span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#222222]">
                  <span className="text-[11px] text-[#706B62]">
                    Encrypted Protocol
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-xs uppercase tracking-widest bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] text-[#0B0B0B] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting In Confidence...' : 'Submit Introduction'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Hours & Urgent Note */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters Card */}
            <div className="p-8 bg-[#121212] border border-[#222222] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Headquarters & Salons</span>
              <h3 className="font-serif text-3xl text-[#F4F1EA]">{TGLC_CONTACT.houseName}</h3>
              
              <div className="space-y-4 text-xs text-[#D9D4CA] border-t border-[#202020] pt-6 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                  <p>{TGLC_CONTACT.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F4F1EA]">General Inquiries: {TGLC_CONTACT.telephone}</p>
                    <p className="text-[#8A7654] pt-1">Private Member Line: {TGLC_CONTACT.privateMemberLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                  <div>
                    <p>Admissions: {TGLC_CONTACT.email}</p>
                    <p className="pt-1">Member Support: {TGLC_CONTACT.memberSupport}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8A7654] shrink-0 mt-0.5" />
                  <p className="text-[#9C968A]">{TGLC_CONTACT.hours}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#202020] text-xs text-[#8E8A83]">
                <p>Social: {TGLC_CONTACT.instagram} · {TGLC_CONTACT.linkedIn}</p>
              </div>
            </div>

            {/* Note for Existing Members */}
            <div className="p-6 bg-[#161616] border border-[#2B2B2B] space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7654]">
                <Lock className="w-3.5 h-3.5" />
                <span>Existing Member Urgent Protocol</span>
              </div>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                Existing members requiring same-day flight alterations, urgent dining placements, or emergency transfers should dial their dedicated Private Member Line ({TGLC_CONTACT.privateMemberLine}) or contact their assigned Lifestyle Manager directly via WhatsApp/Signal.
              </p>
            </div>

            {/* Location Map Visual Framing */}
            <div className="p-6 bg-[#121212] border border-[#222222] space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7654]">St James’s Location</span>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                TGLC House is situated on Arlington Street, steps from The Ritz, Green Park, and the historic private clubs of Pall Mall and St James’s Street. Private vehicle valet parking is available by prior notice.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
