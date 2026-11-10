import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { DEMO_MEMBER_JAMES_ASHFORD, MEMBER_PRIVILEGES, CALENDAR_EVENTS, TGLC_CONTACT } from '../../data/tglcData';
import { MemberProfile } from '../../types';
import { Lock, Send, Plus, CheckCircle, Calendar, Plane, Shield, MessageSquare, User, ArrowUpRight, Clock, Star } from 'lucide-react';

export const MemberPortal: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'requests' | 'itinerary' | 'messages' | 'preferences' | 'privileges'>('overview');
  
  // State for member data so requests and chat are fully interactive!
  const [member, setMember] = useState<MemberProfile>(DEMO_MEMBER_JAMES_ASHFORD);
  
  // New request modal state
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
  const [requestTitle, setRequestTitle] = useState('');
  const [requestCategory, setRequestCategory] = useState('Travel & Aviation');
  const [requestNotes, setRequestNotes] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Chat message state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Sofia Laurent', time: '14:20', text: 'Good afternoon, James. Your suite at Four Seasons Firenze has been re-confirmed on the garden wing with non-feather pillows as requested.' },
    { sender: 'James Ashford', time: '14:35', text: 'Thank you Sofia. Has Oliver confirmed the airport pickup for tomorrow morning?' },
    { sender: 'Sofia Laurent', time: '14:41', text: 'Yes, Oliver will be holding at Eaton Square in the Range Rover SV at 08:45 sharp. Luggage transfer pre-cleared.' }
  ]);
  const [newMessageText, setNewMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    const userMsg = {
      sender: 'James Ashford',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: newMessageText
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setNewMessageText('');

    // Simulate instant Sofia response after 1 second
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Sofia Laurent',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: 'Thank you James, message received. I am reviewing this with our Arlington Street operations desk now.'
        }
      ]);
    }, 1000);
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTitle.trim()) return;

    const newReq = {
      id: `REQ-${Math.floor(1050 + Math.random() * 50)}`,
      title: requestTitle,
      category: requestCategory,
      submittedDate: 'Just now',
      status: 'Assigned to Manager' as const,
      notes: requestNotes || 'Request received and placed in priority queue with Sofia Laurent.'
    };

    setMember((prev) => ({
      ...prev,
      activeRequests: [newReq, ...prev.activeRequests]
    }));

    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setIsNewRequestOpen(false);
      setRequestTitle('');
      setRequestNotes('');
      setActiveTab('requests');
    }, 1200);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#0B0B0B] text-[#F4F1EA] min-h-[85vh] pt-32 pb-24 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#121212] border border-[#2B2B2B] p-8 sm:p-10 text-center space-y-6">
          <div className="flex justify-center mb-2">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg"
              alt="TGLC Crest"
              className="w-14 h-16 object-contain mix-blend-screen filter brightness-110 contrast-125 drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]"
            />
          </div>
          <h2 className="font-serif text-3xl text-[#F4F1EA]">Private Member Access</h2>
          <p className="text-xs text-[#9C968A] leading-relaxed">
            Please enter your member credentials or card number to access your dedicated lifestyle dashboard.
          </p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Member ID / Credentials (e.g. MEM-8842)"
              defaultValue="MEM-8842 (James Ashford)"
              className="w-full bg-[#181818] border border-[#333333] px-3.5 py-2.5 text-xs text-[#F4F1EA] focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => setIsAuthenticated(true)}
              className="w-full py-3.5 text-xs uppercase tracking-widest bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] text-[#0B0B0B] font-semibold border border-[#F0D572] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all"
            >
              Sign In to Member Portal
            </button>
          </div>
          <p className="text-[11px] text-[#706B62]">
            For access assistance, please contact Member Support at {TGLC_CONTACT.privateMemberLine}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Top Header Card */}
        <div className="p-8 sm:p-10 bg-[#121212] border border-[#262626] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 text-xs tracking-widest uppercase text-[#8A7654]">
              <Lock className="w-3.5 h-3.5" />
              <span>{member.tier} · Member Since {member.memberSince}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              Good evening, {member.name.split(' ')[0]}.
            </h1>
            <p className="text-xs text-[#9C968A]">
              Member ID: {member.id} · Primary Residence: Belgravia, London · Dossier Status: Fully Synchronized
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsNewRequestOpen(true)}
              className="px-5 py-2.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <Plus className="w-3.5 h-3.5 text-[#0B0B0B]" />
              <span>Submit New Request</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className="px-4 py-2.5 text-xs uppercase tracking-widest text-[#D9D4CA] border border-[#3A3A3A] hover:bg-[#1A1A1A] transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#8A7654]" />
              <span>Message Sofia</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1 border-b border-[#222222] pb-2 text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 transition-colors ${activeTab === 'overview' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-4 py-2 transition-colors ${activeTab === 'itinerary' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Active Itinerary (Florence)
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 transition-colors ${activeTab === 'requests' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Concierge Requests ({member.activeRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 transition-colors ${activeTab === 'messages' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Direct Channel (Sofia Laurent)
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`px-4 py-2 transition-colors ${activeTab === 'preferences' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            Saved Dossier Preferences
          </button>
          <button
            onClick={() => setActiveTab('privileges')}
            className={`px-4 py-2 transition-colors ${activeTab === 'privileges' ? 'text-white border-b-2 border-[#8A7654] font-medium' : 'text-[#9C968A] hover:text-white'}`}
          >
            TGLC Privileges & Partner Network
          </button>
        </div>

        {/* ========================================================= */}
        {/* Tab 1: Overview */}
        {/* ========================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            
            {/* Current Itinerary Card */}
            <div className="p-8 bg-[#121212] border border-[#2B2B2B] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#202020] mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A7654] font-mono">Immediate Movement</span>
                  <h3 className="font-serif text-2xl text-[#F4F1EA] mt-0.5">
                    {member.upcomingItinerary.destination}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-[#D9D4CA] block font-mono">{member.upcomingItinerary.dates}</span>
                  <span className="text-[11px] text-[#8A7654]">Confirmed Private Flight Charter</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#9C968A]">
                <div className="p-4 bg-[#161616] border border-[#242424] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Aviation & FBO</span>
                  <p className="text-[#D9D4CA] font-medium">{member.upcomingItinerary.flightDetails}</p>
                </div>
                <div className="p-4 bg-[#161616] border border-[#242424] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Hotel Residence</span>
                  <p className="text-[#D9D4CA] font-medium">{member.upcomingItinerary.accommodation}</p>
                </div>
                <div className="p-4 bg-[#161616] border border-[#242424] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Ground Chauffeur Status</span>
                  <p className="text-[#D9D4CA]">{member.upcomingItinerary.chauffeurStatus}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="text-xs text-[#9C968A]">Four customized arrangements pre-booked in Florence</span>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className="text-xs uppercase tracking-wider text-[#8A7654] hover:text-[#F4F1EA] transition-colors flex items-center gap-1"
                >
                  <span>View Complete Trip Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Upcoming Reservations & Arrangements */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222222]">
                <h3 className="font-serif text-2xl text-[#F4F1EA]">
                  Upcoming Arrangements in London
                </h3>
                <span className="text-xs text-[#8A7654]">Personal concierge monitoring</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.upcomingArrangements.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#121212] border border-[#222222] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8A7654]">
                      <span className="uppercase tracking-wider font-mono">{item.date}</span>
                      <span className="text-[#D9D4CA] bg-[#1E1E1E] px-2 py-0.5 text-[10px] uppercase">{item.status}</span>
                    </div>
                    <h4 className="font-serif text-xl text-[#F4F1EA]">{item.venue}</h4>
                    <p className="text-xs text-[#9C968A] leading-relaxed">{item.details}</p>
                    <div className="pt-2 text-[11px] text-[#777777] border-t border-[#1C1C1C]">
                      Arrangement Type: {item.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assigned Manager Card & Active Requests Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 p-8 bg-[#121212] border border-[#222222] space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8A7654]">Dedicated Lifestyle Director</span>
                <div className="flex items-center gap-4">
                  <img
                    src={member.lifestyleManager.image}
                    alt={member.lifestyleManager.name}
                    className="w-16 h-16 rounded-full object-cover border border-[#3E3E3E]"
                  />
                  <div>
                    <h4 className="font-serif text-xl text-[#F4F1EA]">{member.lifestyleManager.name}</h4>
                    <p className="text-xs text-[#9C968A]">{member.lifestyleManager.role}</p>
                    <p className="text-xs text-[#8A7654] font-mono mt-1">{member.lifestyleManager.phone}</p>
                  </div>
                </div>
                <p className="text-xs text-[#9C968A] leading-relaxed pt-2 border-t border-[#1C1C1C]">
                  Sofia is stationed at TGLC House, St James’s. Available for immediate private inquiries, meeting bookings, and priority flight arrangements.
                </p>
                <button
                  onClick={() => setActiveTab('messages')}
                  className="w-full py-2.5 text-xs uppercase tracking-widest bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white border border-[#333333] transition-colors"
                >
                  Open Direct Channel
                </button>
              </div>

              <div className="lg:col-span-7 p-8 bg-[#121212] border border-[#222222] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#202020]">
                  <span className="text-xs uppercase tracking-widest text-[#8A7654]">Active Requests</span>
                  <button onClick={() => setActiveTab('requests')} className="text-xs text-[#D9D4CA] hover:text-white">
                    View All ({member.activeRequests.length}) →
                  </button>
                </div>
                <div className="space-y-3">
                  {member.activeRequests.slice(0, 2).map((req) => (
                    <div key={req.id} className="p-4 bg-[#161616] border border-[#222222] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-serif text-base text-[#F4F1EA]">{req.title}</span>
                        <span className="text-[#8A7654] text-[10px] uppercase font-mono">{req.status}</span>
                      </div>
                      <p className="text-xs text-[#9C968A] line-clamp-1">{req.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* Tab 2: Active Itinerary */}
        {/* ========================================================= */}
        {activeTab === 'itinerary' && (
          <div className="space-y-8">
            <div className="p-8 sm:p-12 bg-[#121212] border border-[#222222] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Detailed Journey Dossier</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                {member.upcomingItinerary.destination}
              </h2>
              <p className="text-sm text-[#D9D4CA]">
                Travel Window: {member.upcomingItinerary.dates}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#202020]">
                <div className="space-y-3">
                  <h4 className="font-serif text-xl text-[#F4F1EA] flex items-center gap-2">
                    <Plane className="w-4 h-4 text-[#8A7654]" />
                    <span>Flight Logistics</span>
                  </h4>
                  <p className="text-xs text-[#9C968A] leading-relaxed">
                    Aircraft: Bombardier Challenger 350 (9-seat configuration)<br />
                    Departure: London Farnborough (EGLF) Private FBO<br />
                    Arrival: Florence Peretola (LIRQ)<br />
                    Catering: Mayfair deli breakfast hamper + chilled San Pellegrino & 2018 Puligny-Montrachet.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-xl text-[#F4F1EA]">Curated Daily Schedule</h4>
                  <ul className="space-y-2 text-xs text-[#9C968A]">
                    {member.upcomingItinerary.keyArrangements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8A7654] rounded-full shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Tab 3: Concierge Requests */}
        {/* ========================================================= */}
        {activeTab === 'requests' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <h2 className="font-serif text-3xl text-[#F4F1EA]">Active Concierge Requests</h2>
              <button
                onClick={() => setIsNewRequestOpen(true)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest text-[#0B0B0B] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5 text-[#0B0B0B]" />
                <span>Submit New Request</span>
              </button>
            </div>

            <div className="space-y-4">
              {member.activeRequests.map((req) => (
                <div key={req.id} className="p-6 bg-[#121212] border border-[#222222] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[#8A7654]">{req.id}</span>
                      <span className="text-[#666666]">·</span>
                      <span className="text-[#888888]">{req.submittedDate}</span>
                      <span className="text-[#666666]">·</span>
                      <span className="text-[#D9D4CA] uppercase tracking-wider">{req.category}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#1C1C1C] text-[#8A7654] text-[10px] uppercase font-mono border border-[#333333]">
                      {req.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">{req.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">{req.notes}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Tab 4: Direct Channel with Sofia Laurent */}
        {/* ========================================================= */}
        {activeTab === 'messages' && (
          <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <div className="flex items-center gap-3">
                <img
                  src={member.lifestyleManager.image}
                  alt={member.lifestyleManager.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#3E3E3E]"
                />
                <div>
                  <h3 className="font-serif text-xl text-[#F4F1EA]">{member.lifestyleManager.name}</h3>
                  <p className="text-xs text-[#8A7654]">Director of Private Membership · Direct Member Channel</p>
                </div>
              </div>
              <span className="text-[11px] text-[#706B62] hidden sm:block">End-to-End Encrypted</span>
            </div>

            {/* Message Stream */}
            <div className="space-y-4 max-h-[420px] overflow-y-auto p-2">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'James Ashford' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] text-[#777777] mb-1 font-mono">
                    {msg.sender} · {msg.time}
                  </span>
                  <div
                    className={`max-w-lg p-4 text-xs leading-relaxed ${
                      msg.sender === 'James Ashford'
                        ? 'bg-[#221F18] text-[#F4F1EA] border border-[#8A7654]'
                        : 'bg-[#1A1A1A] text-[#D9D4CA] border border-[#2D2D2D]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="pt-4 border-t border-[#222222] flex gap-3">
              <input
                type="text"
                value={newMessageText}
                onChange={(e) => setNewMessageText(e.target.value)}
                placeholder="Type a confidential message to Sofia Laurent..."
                className="flex-1 bg-[#181818] border border-[#333333] focus:border-[#D4AF37] px-4 py-2.5 text-xs text-[#F4F1EA] focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-xs uppercase tracking-widest bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] text-[#0B0B0B] font-semibold border border-[#F0D572] hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </button>
            </form>
          </div>
        )}

        {/* ========================================================= */}
        {/* Tab 5: Saved Dossier Preferences */}
        {/* ========================================================= */}
        {activeTab === 'preferences' && (
          <div className="p-8 sm:p-12 bg-[#121212] border border-[#222222] space-y-8">
            <div className="border-b border-[#222222] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Member Dossier</span>
              <h2 className="font-serif text-3xl text-[#F4F1EA] mt-1">Saved Lifestyle Preferences</h2>
              <p className="text-xs text-[#9C968A] mt-1">
                These instructions are permanently coded into our operations desk for all reservations and bookings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
              <div className="p-5 bg-[#161616] border border-[#222222] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Preferred Aviation Fleet</span>
                <p className="text-[#F4F1EA]">{member.savedPreferences.preferredAirlines.join(' · ')}</p>
              </div>

              <div className="p-5 bg-[#161616] border border-[#222222] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Hotel & Suite Archetype</span>
                <p className="text-[#F4F1EA]">{member.savedPreferences.hotelStyle}</p>
              </div>

              <div className="p-5 bg-[#161616] border border-[#222222] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Dietary & Cellar Requirements</span>
                <p className="text-[#F4F1EA]">{member.savedPreferences.dietaryNotes}</p>
              </div>

              <div className="p-5 bg-[#161616] border border-[#222222] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#777777] block">Vehicle & Chauffeur Specification</span>
                <p className="text-[#F4F1EA]">{member.savedPreferences.vehiclePreference}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Tab 6: TGLC Privileges & Partner Network */}
        {/* ========================================================= */}
        {activeTab === 'privileges' && (
          <div className="space-y-12">
            <div>
              <div className="border-b border-[#222222] pb-4 mb-8">
                <span className="text-xs uppercase tracking-widest text-[#8A7654]">Curated Ecosystem</span>
                <h2 className="font-serif text-3xl text-[#F4F1EA] mt-1">TGLC Member Privileges</h2>
                <p className="text-xs text-[#9C968A] mt-1">
                  Exclusive advantages negotiated with our private network of artisans, clinics, and private aviation facilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MEMBER_PRIVILEGES.map((priv, idx) => (
                  <div key={idx} className="p-6 bg-[#121212] border border-[#222222] space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7654] font-mono">{priv.category}</span>
                    <h3 className="font-serif text-2xl text-[#F4F1EA]">{priv.partner}</h3>
                    <p className="text-xs text-[#D9D4CA] leading-relaxed">{priv.privilege}</p>
                    <div className="pt-2 text-[11px] text-[#777777] border-t border-[#1C1C1C]">
                      Details: {priv.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Network Discreet Area */}
            <div className="p-8 bg-[#141414] border border-[#262626] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8A7654]">Discreet Partner Network</span>
              <h3 className="font-serif text-2xl text-[#F4F1EA]">Vetted Specialist Providers</h3>
              <p className="text-xs text-[#9C968A] leading-relaxed max-w-2xl font-light">
                Our partner network consists of audited specialists across forty disciplines—from superyacht shipyards in Viareggio to antiquarian bookbinders in Bloomsbury. TGLC passes all preferential terms directly to members with zero hidden referral charges.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Modal for Creating New Request */}
      {isNewRequestOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#141414] border border-[#2E2E2E] p-8 space-y-5">
            <h3 className="font-serif text-2xl text-[#F4F1EA]">Submit a New Concierge Request</h3>
            
            {requestSubmitted ? (
              <div className="p-4 bg-[#1C1C1C] border border-[#8A7654] text-xs text-[#D9D4CA] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8A7654]" />
                <span>Request received. Sofia Laurent has been assigned to coordinate.</span>
              </div>
            ) : (
              <form onSubmit={handleCreateRequest} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                    Request Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={requestTitle}
                    onChange={(e) => setRequestTitle(e.target.value)}
                    placeholder="e.g. Private Box for Royal Opera House / Helicopter transfer"
                    className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2 text-white focus:outline-none focus:border-[#8A7654]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                    Category Practice
                  </label>
                  <select
                    value={requestCategory}
                    onChange={(e) => setRequestCategory(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2 text-white focus:outline-none"
                  >
                    <option value="Travel & Aviation">Travel & Aviation</option>
                    <option value="Dining & Social Access">Dining & Social Access</option>
                    <option value="Experiences & Culture">Experiences & Culture</option>
                    <option value="Residences & Estates">Residences & Estates</option>
                    <option value="Luxury Sourcing">Luxury Sourcing</option>
                    <option value="Personal Office Support">Personal Office Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                    Details / Timing / Specific Criteria
                  </label>
                  <textarea
                    rows={4}
                    value={requestNotes}
                    onChange={(e) => setRequestNotes(e.target.value)}
                    placeholder="Please specify preferred dates, passenger counts, or specific venue requirements..."
                    className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2 text-white focus:outline-none focus:border-[#8A7654] resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-[#222222]">
                  <button
                    type="button"
                    onClick={() => setIsNewRequestOpen(false)}
                    className="px-4 py-2 uppercase tracking-wider text-[#9C968A] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 uppercase tracking-wider bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] text-[#0B0B0B] font-semibold border border-[#F0D572] hover:brightness-110 shadow-md"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
