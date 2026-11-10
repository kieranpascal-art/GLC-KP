import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { TGLC_CONTACT } from '../../data/tglcData';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';

export const IntroductionModal: React.FC = () => {
  const { isIntroModalOpen, closeIntroductionModal, introModalInterest } = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [location, setLocation] = useState('');
  const [contactMethod, setContactMethod] = useState<'Telephone' | 'Email' | 'WhatsApp / Signal' | 'Private In-Person'>('Telephone');
  const [interestArea, setInterestArea] = useState(introModalInterest || 'The London Membership');
  const [referralSource, setReferralSource] = useState('Existing TGLC Member Referral');
  const [message, setMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isIntroModalOpen) return null;

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

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setTelephone('');
    setLocation('');
    setMessage('');
    setPrivacyAgreed(false);
    closeIntroductionModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#2B2B2B] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeIntroductionModal}
          className="absolute top-6 right-6 p-2 text-[#9C968A] hover:text-[#F4F1EA] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1A1A] border border-[#3E3E3E] flex items-center justify-center text-[#8A7654]">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <h3 className="font-serif text-2xl text-[#F4F1EA]">
              Thank you for your introduction.
            </h3>
            
            <p className="font-serif italic text-lg text-[#D9D4CA] max-w-lg mx-auto leading-relaxed">
              “A member of the TGLC team will respond personally and in confidence.”
            </p>

            <div className="bg-[#171717] border border-[#262626] p-5 text-xs text-[#9C968A] max-w-md mx-auto text-left space-y-2">
              <p className="text-[#F4F1EA] font-medium uppercase tracking-wider text-[11px]">Submission Record</p>
              <p>Principal: <span className="text-[#D9D4CA]">{fullName}</span></p>
              <p>Interest: <span className="text-[#D9D4CA]">{interestArea}</span></p>
              <p>Preferred Channel: <span className="text-[#D9D4CA]">{contactMethod}</span></p>
              <p className="text-[11px] text-[#777777] pt-2 border-t border-[#262626]">
                Our Private Membership Director will contact you within 24 hours. For urgent inquiries, please contact our Arlington Street reception directly at {TGLC_CONTACT.telephone}.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#222222] hover:bg-[#2E2E2E] text-[#F4F1EA] border border-[#3A3A3A] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Strictly Confidential Introduction</span>
                </div>
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
                  alt="TGLC Crest"
                  className="w-8 h-10 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)]"
                />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                Begin with a private conversation.
              </h2>
              <p className="text-xs text-[#9C968A] leading-relaxed">
                TGLC membership is by referral or private introduction. Please share your details below, and Sofia Laurent or a member of our private membership committee will be in touch.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 mb-4 bg-[#2C1417] border border-[#521C22] text-xs text-[#F2C2C6]">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
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
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
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
                    placeholder="+44 7... / +1..."
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1.5">
                    Primary City / Country of Residence
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. London / Geneva / New York"
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none"
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
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] focus:outline-none"
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
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] focus:outline-none"
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
                  How did you learn of The Global Luxury Consortium?
                </label>
                <select
                  value={referralSource}
                  onChange={(e) => setReferralSource(e.target.value)}
                  className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] focus:outline-none"
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
                  Message / Context for Our Conversation (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific upcoming travel, relocations, or lifestyle requirements..."
                  className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#8A7654] px-3.5 py-2 text-xs text-[#F4F1EA] placeholder-[#555555] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-1">
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

              <div className="pt-3 flex items-center justify-between border-t border-[#222222]">
                <span className="text-[11px] text-[#706B62]">
                  Private Member Line: +44 (0)20 7946 0849
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 text-xs uppercase tracking-widest bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] text-[#0B0B0B] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting In Confidence...' : 'Submit Private Introduction'}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
