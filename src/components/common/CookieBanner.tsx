import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { cookieConsent, setCookieConsent, navigateTo } = useNavigation();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  if (cookieConsent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6 bg-[#0E0E0E]/95 border-t border-[#262626] backdrop-blur-md text-[#D9D4CA] shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7654]">
            <Shield className="w-3.5 h-3.5" />
            <span>Confidentiality & Privacy Notice</span>
          </div>
          <p className="text-xs text-[#9C968A] leading-relaxed">
            The Global Luxury Consortium respects your discretion. We employ minimal, essential session technologies to secure your private member inquiries and preserve your preferences. We do not sell data or deploy intrusive commercial tracking cookies.
          </p>
          
          {showPreferences && (
            <div className="pt-3 pb-1 flex flex-wrap gap-6 text-xs text-[#D9D4CA]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked disabled className="accent-[#8A7654]" />
                <span className="text-[#888888]">Strictly Necessary (Required)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="accent-[#8A7654]"
                />
                <span>Performance & Ergonomic Preferences</span>
              </label>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="px-4 py-2 text-xs uppercase tracking-wider text-[#9C968A] hover:text-[#F4F1EA] transition-colors"
          >
            {showPreferences ? 'Hide Options' : 'Preferences'}
          </button>
          
          <button
            onClick={() => setCookieConsent(false)}
            className="px-4 py-2 text-xs uppercase tracking-wider text-[#D9D4CA] bg-[#1A1A1A] hover:bg-[#252525] border border-[#333333] transition-colors"
          >
            Essential Only
          </button>

          <button
            onClick={() => setCookieConsent(true)}
            className="px-5 py-2 text-xs uppercase tracking-wider text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-sm transition-all"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
};
