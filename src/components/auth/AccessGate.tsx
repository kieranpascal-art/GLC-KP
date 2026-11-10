import React, { useState, useEffect } from 'react';
import { Lock, Key, Shield, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccessGateProps {
  children: React.ReactNode;
}

const PASSWORD_KEY = 'tglc_auth_pass';
const VALID_PASSWORD = 'glcglc';

export const AccessGate: React.FC<AccessGateProps> = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return (
        sessionStorage.getItem(PASSWORD_KEY) === 'granted' ||
        localStorage.getItem(PASSWORD_KEY) === 'granted'
      );
    } catch {
      return false;
    }
  });

  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    setTimeout(() => {
      if (inputVal.trim().toLowerCase() === VALID_PASSWORD) {
        setSuccess(true);
        try {
          sessionStorage.setItem(PASSWORD_KEY, 'granted');
          localStorage.setItem(PASSWORD_KEY, 'granted');
        } catch (e) {
          console.error(e);
        }
        setTimeout(() => {
          setIsUnlocked(true);
          setIsSubmitting(false);
        }, 600);
      } else {
        setError(true);
        setIsSubmitting(false);
      }
    }, 350);
  };

  const handleLock = () => {
    try {
      sessionStorage.removeItem(PASSWORD_KEY);
      localStorage.removeItem(PASSWORD_KEY);
    } catch (e) {
      console.error(e);
    }
    setIsUnlocked(false);
    setInputVal('');
    setSuccess(false);
    setError(false);
  };

  // Expose lock globally for discreet testing button
  useEffect(() => {
    (window as any).tglcLockConsole = handleLock;
    return () => {
      delete (window as any).tglcLockConsole;
    };
  }, []);

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-[#070709] text-[#F4F1EA] flex flex-col items-center justify-center p-6 select-none overflow-hidden font-sans">
      {/* Ambient background glow & luxury vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_rgba(7,7,9,0.95)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,_transparent_1px),linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10 text-center"
      >
        {/* Official Gold Monogram Emblem with mix-blend-screen for zero box artifacts */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
              alt="The Global Luxury Consortium"
              className="w-16 h-20 sm:w-20 sm:h-24 object-contain mix-blend-screen filter drop-shadow-[0_4px_20px_rgba(212,175,55,0.45)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Wordmark & Titles */}
        <span className="text-[10px] uppercase tracking-[0.32em] text-[#C5A059] font-medium block mb-2">
          St James’s Private Office · London
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.14em] uppercase text-[#F4F1EA] mb-3">
          The Global Luxury Consortium
        </h1>
        <p className="font-serif italic text-sm text-[#C5A059] mb-8">
          “Discretion by default. Access by accreditation.”
        </p>

        {/* Password Entry Box */}
        <div className="bg-[#0E0F14]/90 border border-[#2A2B33] p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#16171F] flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
            {success ? (
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
          </div>

          <span className="text-xs uppercase tracking-widest text-[#D9D4CA] font-medium block mb-1">
            Private Verification
          </span>
          <p className="text-[11px] text-[#8E8A83] mb-6 leading-relaxed">
            Please enter your private key to view the testing portal.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  if (error) setError(false);
                }}
                autoFocus
                placeholder="Enter access key..."
                className={`w-full bg-[#08080B] border px-4 py-3 text-center text-sm font-mono tracking-widest text-[#F4F1EA] placeholder-[#555] focus:outline-none transition-all duration-300 ${
                  error
                    ? 'border-red-500/80 ring-1 ring-red-500/50'
                    : 'border-[#33353F] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50'
                }`}
              />
              <Key className="w-3.5 h-3.5 text-[#777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center justify-center gap-1.5 text-[11px] text-red-400 font-light"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Access key unverified. Discretion maintained.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting || success}
              className="w-full py-3 px-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:brightness-110 border border-[#F0D572] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 cursor-pointer disabled:opacity-50"
            >
              <span>{success ? 'Accreditation Confirmed' : isSubmitting ? 'Verifying Cipher...' : 'Authorize Access'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#1C1D24] flex items-center justify-between text-[10px] text-[#6E6B65]">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#D4AF37]" />
              <span>TLS 256-Bit Encrypted</span>
            </span>
            <span className="font-mono text-[#8E8A83]">TGLC · MAYFAIR</span>
          </div>
        </div>

        {/* Discreet testing reminder for patron */}
        <p className="text-[10px] text-[#555] mt-6 tracking-wider">
          Testing cipher: <span className="font-mono text-[#8A7654]">glcglc</span>
        </p>
      </motion.div>
    </div>
  );
};
