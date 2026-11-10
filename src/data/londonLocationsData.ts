import { LondonVenue } from '../utils/londonLocations';

export const LONDON_DISTRICTS = [
  {
    key: 'all',
    name: 'All Enclaves',
    shortName: 'All',
    vibe: 'Capital-Wide Cartography'
  },
  {
    key: 'mayfair-stjames',
    name: 'Mayfair & St James’s',
    shortName: 'St James’s & Mayfair',
    vibe: 'Old Masters, Bespoke Horology & Aristocratic Clubs'
  },
  {
    key: 'knightsbridge-belgravia',
    name: 'Knightsbridge & Belgravia',
    shortName: 'Knightsbridge & Harrods',
    vibe: 'Private Harrods Salons, Diplomatic Garden Squares & Embassies'
  },
  {
    key: 'marylebone-oxford',
    name: 'Marylebone & Oxford Street',
    shortName: 'Marylebone & Selfridges',
    vibe: 'Selfridges Wonder Room, Specialist Perfumery & Georgian Salons'
  },
  {
    key: 'chelsea-southken',
    name: 'Chelsea & South Kensington',
    shortName: 'Chelsea & South Ken',
    vibe: 'Sloane Street Couture, Private V&A Archives & Royal Parks'
  },
  {
    key: 'soho-fitzrovia',
    name: 'Soho & Fitzrovia',
    shortName: 'Soho & Fitzrovia',
    vibe: 'Private Screening Salons, Hidden Cellars & Contemporary Haunts'
  },
  {
    key: 'city-shoreditch',
    name: 'The City & Shoreditch',
    shortName: 'City & Shoreditch',
    vibe: 'Historic Banking Vaults, Independent Watchmakers & Loft Ateliers'
  },
  {
    key: 'wimbledon-richmond',
    name: 'Wimbledon & Richmond',
    shortName: 'Wimbledon & SW',
    vibe: 'Championship Lawn Debentures, Royal Parks & Riverside Manors'
  }
];

export const LONDON_LOCATIONS: LondonVenue[] = [
  {
    id: 'tglc-house',
    slug: 'tglc-house-arlington-street',
    name: 'TGLC House — Arlington Street',
    neighborhood: 'St James’s',
    districtKey: 'mayfair-stjames',
    districtName: 'Mayfair & St James’s',
    category: 'Dining & Private Clubs',
    address: '22 Arlington Street, St James’s',
    postcode: 'SW1A 1RD',
    coordinates: { x: 502, y: 304 },
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Private headquarters, discreet courtyard salons and member library',
    summary: 'The operational anchor and discreet spiritual home of The Global Luxury Consortium. Situated opposite the Ritz on historic Arlington Street, TGLC House offers secluded drawing rooms, a private dining room for twelve, and an encrypted boardroom for confidential affairs.',
    curatorNotes: 'Constructed in 1740 as a diplomatic townhouse, the house features original lime-washed plaster mouldings, a private walled courtyard garden hidden from street view, and 24-hour lifestyle management desks with secure diplomatic courier intake.',
    tglcPrivileges: [
      'Unrestricted member access to private drawing rooms and courtyard',
      'Private sommelier cellar tastings and vintage reserve allocations',
      'Discreet private car port and courtyard vehicle drop-off away from Arlington Street',
      'Encrypted meeting suites with Faraday shielded communications lockers'
    ],
    recommendedSeason: 'Year-round sanctuary',
    insiderTip: 'The Garden Saloon on the lower ground level remains whisper-quiet even during state banquets on Piccadilly.',
    closestSanctuary: 'Green Park Private Walkway (2 mins walk)'
  },
  {
    id: 'selfridges-wonder-room',
    slug: 'selfridges-wonder-room-and-penthouse',
    name: 'Selfridges — The Wonder Room & Personal Shopping Penthouse',
    neighborhood: 'Marylebone / Oxford Street',
    districtKey: 'marylebone-oxford',
    districtName: 'Marylebone & Oxford Street',
    category: 'Horology & Jewellery',
    address: '400 Oxford Street (Private Entrance via Duke Street)',
    postcode: 'W1A 1AB',
    coordinates: { x: 472, y: 216 },
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Premier haute horology destination and secluded private styling apartments',
    summary: 'Spanning 20,000 square feet on the ground floor of London’s architectural retail icon, The Wonder Room is one of the world’s foremost sanctuaries of rare mechanical timepieces and high jewellery. TGLC members access the private fourth-floor Personal Shopping Penthouse suites and closed-door after-hours vault salons.',
    curatorNotes: 'Houses independent watchmakers alongside Patek Philippe, Audemars Piguet, Cartier, Vacheron Constantin, and bespoke gem cutters. Private viewing suites feature museum-grade illumination, diamond loupe apparatus, and vintage Krug champagne pairings.',
    tglcPrivileges: [
      'Direct private valet entrance on Duke Street with dedicated express lift to Penthouse suites',
      'Closed-door Wonder Room viewings prior to public 10:00 opening or following evening closure',
      'Priority allocation on rare, limited-edition perpetual calendars and tourbillons',
      'Bespoke high jewellery consultations with senior gemmologists and master polishers'
    ],
    recommendedSeason: 'Autumn collection releases & Geneva preview season',
    insiderTip: 'Request Private Suite 4 in the Duke Street Penthouse: it overlooks Manchester Square and features its own private fitting dressing room and drinks cabinet.',
    closestSanctuary: 'Manchester Square Garden & The Wallace Collection (3 mins walk)'
  },
  {
    id: 'harrods-penthouse',
    slug: 'harrods-penthouse-and-fine-watch-room',
    name: 'Harrods — Penthouse Private Shopping & Fine Watch Room',
    neighborhood: 'Knightsbridge',
    districtKey: 'knightsbridge-belgravia',
    districtName: 'Knightsbridge & Belgravia',
    category: 'Department Stores & Penthouse Salons',
    address: '87–135 Brompton Road (Hans Crescent Private Portico)',
    postcode: 'SW1X 7XL',
    coordinates: { x: 395, y: 352 },
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Discreet private styling apartments, high jewellery vaults and historic Hans Crescent access',
    summary: 'The pinnacle of London department store grandeur, transformed into an intimate private enclave. Through TGLC’s longstanding relationships with the Harrods Private Shopping Directorate, members bypass the public avenues entirely, accessing the secluded fifth-floor Penthouse styling suites.',
    curatorNotes: 'Featuring twenty private suites individually decorated with bespoke silk wallcoverings and marble fireplaces. The subterranean Fine Watch Room and High Jewellery Salon present pieces of historic provenance, unique tiaras, and multi-million-pound high complications.',
    tglcPrivileges: [
      'Private subterranean car entrance and vehicle turntable off Hans Crescent',
      'Dedicated Harrods Private Client Director assigned specifically to your household',
      'Pre-selection of international runway collections flown into your London suite before UK release',
      'Private dining in-suite from Harrods Dining Hall chefs (Gordon Ramsay, Kerridge’s, Caviar House)'
    ],
    recommendedSeason: 'Pre-Ascot and Gala Season (April – June, October – December)',
    insiderTip: 'The private vault on Lower Ground can be reserved on 24 hours notice for insurance appraisal and bespoke resetting of historic family heirlooms.',
    closestSanctuary: 'Hyde Park South Carriage Drive (4 mins walk)'
  },
  {
    id: 'wimbledon-aelte',
    slug: 'all-england-lawn-tennis-club-wimbledon',
    name: 'All England Lawn Tennis Club (Wimbledon)',
    neighborhood: 'Wimbledon Village',
    districtKey: 'wimbledon-richmond',
    districtName: 'Wimbledon & South West London',
    category: 'Sporting Heritage',
    address: 'Church Road, Wimbledon, London',
    postcode: 'SW19 5AE',
    coordinates: { x: 232, y: 512 },
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Centre Court debenture hospitality, Renshaw and Rosewater pavilions and champion lawn dining',
    summary: 'The cathedral of world tennis. TGLC curates seamless access to the Championship fortnight in July, securing pair allocations on Centre Court and No. 1 Court through debenture holders, accompanied by private terrace dining at The Renshaw and The Rosewater pavilions.',
    curatorNotes: 'Beyond the courts, TGLC coordinates private village lawn receptions, discreet chauffeur drop-offs at Gate 5, and direct helicopter transfers between Battersea Heliport and Wimbledon Common.',
    tglcPrivileges: [
      'Direct Centre Court & Court 1 Debenture seats with private lounge & restaurant access',
      'Exclusive reservation of private dining tables in The Rosewater Pavilion overlooking the grounds',
      'Private morning tour of the All England grounds before public gates unlock at 10:30',
      'Chauffeured vehicle passes with designated VIP parking on Somerset Road'
    ],
    recommendedSeason: 'Championship Fortnight (July) and private lawn clinics (May – September)',
    insiderTip: 'For finals weekend, book helicopter transit into the Wimbledon Common landing pad to bypass the South Circular completely.',
    closestSanctuary: 'Wimbledon Common & Cannizaro Park (5 mins walk)'
  },
  {
    id: 'burlington-arcade',
    slug: 'burlington-arcade-vintage-horology',
    name: 'Burlington Arcade & Vintage Horology Salons',
    neighborhood: 'Mayfair',
    districtKey: 'mayfair-stjames',
    districtName: 'Mayfair & St James’s',
    category: 'Horology & Jewellery',
    address: '51 Piccadilly, Mayfair',
    postcode: 'W1J 0QJ',
    coordinates: { x: 488, y: 288 },
    image: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'The world capital of vintage Rolex, Patek Philippe, and bespoke British leather craft',
    summary: 'Opened in 1819 by Lord George Cavendish “for the gratification of the public and to give employment to industrious females,” the Burlington Arcade remains London’s most celebrated covered promenade of connoisseurship. Guarded by the ceremonial Head Beadle, it is home to the world’s densest concentration of rare vintage timepieces.',
    curatorNotes: 'Salons such as The Vintage Watch Company and Somlo London house museum-quality pieces: original 1960s Paul Newman Daytonas, Patek Philippe perpetual calendar chronographs, and rare military Submariners with original papers and provenance.',
    tglcPrivileges: [
      'Closed-arcade evening walks with the Head Beadle and private salon access after 18:00',
      'Private authentication and archival provenance search with independent horological scholars',
      'First-look preview rights on important estate collections arriving from European estates',
      'Private bespoke leather fitting for custom exotic skin watch straps'
    ],
    recommendedSeason: 'Spring & Autumn auction weeks',
    insiderTip: 'The upper mezzanine of Somlo London houses one of the finest private collections of antique pocket watches and Omega archives in the United Kingdom.',
    closestSanctuary: 'Albany Courtyard & St James’s Church Gardens (1 min walk)'
  },
  {
    id: 'new-bond-street-jewellery',
    slug: 'new-bond-street-high-jewellery-mile',
    name: 'New Bond Street High Jewellery Mile & Vaults',
    neighborhood: 'Mayfair',
    districtKey: 'mayfair-stjames',
    districtName: 'Mayfair & St James’s',
    category: 'Horology & Jewellery',
    address: 'New Bond Street & Old Bond Street, Mayfair',
    postcode: 'W1S 2TE',
    coordinates: { x: 480, y: 248 },
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Cartier, Graff, Harry Winston, Van Cleef & Arpels private high jewellery salons',
    summary: 'Old and New Bond Street represent the undisputed global epicentre of high jewellery. Behind neoclassical facades lie private salons accessible only by appointment, where stones of extraordinary clarity—D-flawless diamonds, unheated Burmese rubies, and Colombian emeralds—are presented on velvet.',
    curatorNotes: 'TGLC facilitates private introductions to heritage house historians and High Jewellery directors, enabling members to commission unique pieces, source certified historic stones, or acquire tiaras for royal receptions.',
    tglcPrivileges: [
      'Private salon appointments behind closed velvet curtains with Master Gemmologists',
      'Confidential viewing of archival museum collections and royal commission ledgers',
      'Direct sourcing from diamond bourses in Antwerp, Tel Aviv, and Mumbai without retail markups',
      'Private security armed transport arrangements for international piece delivery'
    ],
    recommendedSeason: 'November – December jewellery salons and Biennale seasons',
    insiderTip: 'Ask your Lifestyle Manager to coordinate a private appointment on the fourth floor of Cartier’s Grade II listed townhouse; the historical archive room holds original drawings for the Duchess of Windsor.',
    closestSanctuary: 'Brown’s Hotel Drawing Room (2 mins walk)'
  },
  {
    id: 'savile-row-ateliers',
    slug: 'savile-row-bespoke-tailoring-ateliers',
    name: 'Savile Row Bespoke Tailoring Ateliers',
    neighborhood: 'Mayfair',
    districtKey: 'mayfair-stjames',
    districtName: 'Mayfair & St James’s',
    category: 'Arts & Antiquities',
    address: 'Savile Row, Mayfair',
    postcode: 'W1S 3PR',
    coordinates: { x: 494, y: 260 },
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Master cutters, centuries-old shears, and private bespoke fitting salons',
    summary: 'The worldwide benchmark for bespoke tailoring for more than two centuries. TGLC works with the senior cutters at Huntsman, Henry Poole & Co, Anderson & Sheppard, and discreet contemporary houses, arranging private fitting sessions in London or in members’ private hotel suites worldwide.',
    curatorNotes: 'Each two-piece suit requires over eighty hours of hand-labour and at least three fittings. Cloth is milled exclusively in Yorkshire and the Scottish Highlands from rare Merino wool, cashmere, and vicuña.',
    tglcPrivileges: [
      'In-residence or in-hotel fitting sessions with head cutters traveling to your residence',
      'Archival ledger viewings containing measurements of British prime ministers, European royalty, and Hollywood legends',
      'Expedited hand-cutting service for diplomatic and ceremonial emergencies',
      'Private access to rare vintage bolts of Scottish tweed and Irish linen mills'
    ],
    recommendedSeason: 'September – November (Autumn/Winter suiting) & March – May (Summer linens)',
    insiderTip: 'Henry Poole & Co maintains the original 1860 ledger recording the creation of the very first tuxedo/dinner jacket for the Prince of Wales.',
    closestSanctuary: 'The Burlington Club & Albany Walk (3 mins walk)'
  },
  {
    id: 'mount-street-culinary',
    slug: 'mount-street-culinary-and-art-enclave',
    name: 'Mount Street Culinary & Art Enclave',
    neighborhood: 'Mayfair',
    districtKey: 'mayfair-stjames',
    districtName: 'Mayfair & St James’s',
    category: 'Dining & Private Clubs',
    address: 'Mount Street, Mayfair',
    postcode: 'W1K 2ST',
    coordinates: { x: 440, y: 254 },
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Michelin-starred private dining rooms, Audemars Piguet House and art-rich salons',
    summary: 'Mount Street is Mayfair’s refined village street, connecting Berkeley Square with Grosvenor Square. Lined with terracotta Queen Anne architecture, it hosts some of Europe’s most discreet dining rooms, luxury flagships, and private contemporary art spaces.',
    curatorNotes: 'Home to the Mount St. Restaurant (housing over £50m of museum-quality art by Lucian Freud and Andy Warhol), The Connaught, Scott’s, and private client lounges. TGLC members secure prime tables and private drawing rooms without third-party publicity.',
    tglcPrivileges: [
      'Guaranteed private dining room bookings in Mount St. Restaurant and The Connaught',
      'Private invitation access to the Audemars Piguet AP House on New Bond Street / Mount Street',
      'Direct sommelier cellar reservations and off-menu rare vintage pairings',
      'Curator-led walkthrough of the private art collection at 41-43 Mount Street'
    ],
    recommendedSeason: 'Year-round evening dining & London Frieze Art Week',
    insiderTip: 'Table 4 in the main room of Mount St. Restaurant sits directly beneath a rare Matisse oil painting and offers maximum discretion.',
    closestSanctuary: 'Mount Street Gardens (quiet public courtyard garden behind Jesuit Church)'
  },
  {
    id: 'the-berkeley-belgravia',
    slug: 'the-berkeley-and-wilton-crescent-enclave',
    name: 'The Berkeley & Wilton Crescent Enclave',
    neighborhood: 'Belgravia',
    districtKey: 'knightsbridge-belgravia',
    districtName: 'Knightsbridge & Belgravia',
    category: 'Private Residences & Mews',
    address: 'Wilton Place, Belgravia',
    postcode: 'SW1X 7RL',
    coordinates: { x: 410, y: 334 },
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Secluded crescent architecture, diplomatic mews and rooftop spa sanctuaries',
    summary: 'Wilton Crescent and Wilton Place define Belgravia’s serene architectural heritage. Quiet white-stucco facades shelter ambassadors, prominent family offices, and private art patrons.',
    curatorNotes: 'TGLC coordinates off-market residential acquisitions and leases along Wilton Crescent, Eaton Square, and Chester Square, alongside private access to The Berkeley’s rooftop sanctuary overlooking Hyde Park.',
    tglcPrivileges: [
      'Private access to key-held Belgravia garden squares for members and families',
      'Discreet off-market mews property sourcing and turnkey residential management',
      'Rooftop private pool cabana bookings overlooking the Knightsbridge skyline',
      '24/7 dedicated domestic staff staffing and private security patrol coordination'
    ],
    recommendedSeason: 'Spring garden season (April – June)',
    insiderTip: 'The mews connecting Wilton Crescent to Belgrave Square provides an unobserved exit point for high-profile principals during state visits.',
    closestSanctuary: 'Wilton Crescent Private Gardens'
  },
  {
    id: 'wallace-collection-marylebone',
    slug: 'the-wallace-collection-manchester-square',
    name: 'The Wallace Collection & Manchester Square',
    neighborhood: 'Marylebone',
    districtKey: 'marylebone-oxford',
    districtName: 'Marylebone & Oxford Street',
    category: 'Arts & Antiquities',
    address: 'Hertford House, Manchester Square',
    postcode: 'W1U 3BN',
    coordinates: { x: 454, y: 194 },
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Hertford House private curatorial tours, Fragonard masterpieces and courtyard dinners',
    summary: 'One of the world’s greatest private collections of fine and decorative arts bequeathed to the British nation. Housed in Hertford House, the historic London residence of the Marquesses of Hertford and Sir Richard Wallace, it showcases Fragonard, Rembrandt, Titian, and extraordinary 18th-century French furniture.',
    curatorNotes: 'TGLC arranges closed-door evening tours led by Senior Curators of Armour and French Paintings, followed by private champagne dinners under the glazed courtyard roof.',
    tglcPrivileges: [
      'Private after-hours access when public galleries are completely dark and tranquil',
      'Private viewing of the Wallace European Arms and Armour collection with the Head of Conservation',
      'Exclusive dinner hosting rights in the glazed Italianate Courtyard for up to 40 guests',
      'Scholarly advisory on French 18th-century porcelain and Boulle marquetry acquisition'
    ],
    recommendedSeason: 'Summer evening salon dinners (June – September)',
    insiderTip: 'Stand alone in front of Fragonard’s “The Swing” under soft museum lighting after hours; it is a transcendent London art experience.',
    closestSanctuary: 'Manchester Square Private Garden Key Access'
  },
  {
    id: 'sloane-street-couture',
    slug: 'sloane-street-haute-couture-mile',
    name: 'Sloane Street Haute Couture Mile',
    neighborhood: 'Chelsea',
    districtKey: 'chelsea-southken',
    districtName: 'Chelsea & South Kensington',
    category: 'Department Stores & Penthouse Salons',
    address: 'Sloane Street, Chelsea',
    postcode: 'SW1X 9LA',
    coordinates: { x: 345, y: 390 },
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Haute couture flagships, Cadogan estate gardens and private salon presentations',
    summary: 'Connecting Knightsbridge to Sloane Square, Sloane Street has undergone a multi-million-pound architectural transformation led by the Cadogan Estate, creating wide stone promenades and verdant pocket gardens. It houses the global flagships of Chanel, Dior, Hermes, and Bottega Veneta.',
    curatorNotes: 'TGLC members enjoy closed-door salon presentations, private fitting suites with direct subterranean parking, and champagne receptions with Paris couture directors.',
    tglcPrivileges: [
      'Closed-door appointments before 10:00 or after 19:00 with dedicated salon managers',
      'Exclusive allocation of Hermes leather goods and bespoke luggage orders',
      'Private trunk shows arranged directly inside members’ Chelsea residences',
      'Access to the private Cadogan Place garden tennis courts and grounds'
    ],
    recommendedSeason: 'Paris & London Autumn Couture release windows',
    insiderTip: 'The Hermes flagship at 31 Sloane Street possesses a hidden private courtyard garden for discreet client discussions.',
    closestSanctuary: 'Cadogan Place Gardens'
  },
  {
    id: 'va-museum-archives',
    slug: 'victoria-and-albert-museum-private-archives',
    name: 'Victoria & Albert Museum Private Archives',
    neighborhood: 'South Kensington',
    districtKey: 'chelsea-southken',
    districtName: 'Chelsea & South Kensington',
    category: 'Arts & Antiquities',
    address: 'Cromwell Road, South Kensington',
    postcode: 'SW7 2RL',
    coordinates: { x: 305, y: 375 },
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Closed-door jewellery archives, historic couture collections and conservation vaults',
    summary: 'The world’s leading museum of art, design, and performance, housing over 2.3 million objects spanning 5,000 years. The William and Judith Bollinger Jewellery Gallery and the Fashion Archives contain treasures rarely seen by the general public.',
    curatorNotes: 'Through TGLC’s patronage, members access conservation laboratories where royal tapestries, historic emerald tiaras, and 1920s couture gowns are preserved and studied under microscopic detail.',
    tglcPrivileges: [
      'Private curatorial walkthroughs of the Jewellery Gallery vaults with senior scholars',
      'Behind-the-scenes visits to the Clothworkers’ Centre for the Study and Conservation of Textiles',
      'Private patron dinners inside the grand Raphael Court under historic Renaissance cartoons',
      'Early access to blockbuster exhibition previews prior to global public openings'
    ],
    recommendedSeason: 'Winter cultural season (November – March)',
    insiderTip: 'The National Art Library on the second floor overlooks the John Madejski Garden and offers private scholar study carrels for researching artistic provenance.',
    closestSanctuary: 'The John Madejski Garden at the V&A'
  },
  {
    id: 'soho-private-salons',
    slug: 'dean-street-and-greek-street-cultural-haunts',
    name: 'Dean Street & Greek Street Cultural Haunts',
    neighborhood: 'Soho',
    districtKey: 'soho-fitzrovia',
    districtName: 'Soho & Fitzrovia',
    category: 'Dining & Private Clubs',
    address: 'Dean Street & Greek Street, Soho',
    postcode: 'W1D 4QJ',
    coordinates: { x: 535, y: 242 },
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Historic creative members’ clubs, 35mm private screening salons and secret dining cellars',
    summary: 'Behind Soho’s lively bohemian facades lie Georgian townhouses that have served as the intellectual sanctuary for artists, filmmakers, writers, and musicians since the 18th century. Dean Street and Greek Street house historic clubs like the Groucho, Quo Vadis, and Soho House.',
    curatorNotes: 'TGLC curates entry to private 35mm screening rooms, subterranean jazz dens, and discreet private dining salons where London’s leading cultural figures meet away from the public gaze.',
    tglcPrivileges: [
      'Private salon reservations with confidential dining menus from acclaimed Soho chefs',
      'Private hire of 35mm acoustic screening rooms for family premieres and archive film viewings',
      'Direct table placements in intimate natural wine cellars with zero waiting lines',
      'Late-night private driver pickup coordinated at discreet side mews'
    ],
    recommendedSeason: 'Autumn film festival season & London after dark',
    insiderTip: 'The Marx Room on the second floor of Quo Vadis was where Karl Marx once lived; it is one of the most characterful private dining spaces in London.',
    closestSanctuary: 'St Anne’s Churchyard Gardens'
  },
  {
    id: 'the-royal-exchange-city',
    slug: 'the-royal-exchange-and-city-vaults',
    name: 'The Royal Exchange & Historic City Vaults',
    neighborhood: 'The City',
    districtKey: 'city-shoreditch',
    districtName: 'The City & Shoreditch',
    category: 'Horology & Jewellery',
    address: 'The Royal Exchange, Bank, London',
    postcode: 'EC3V 3LR',
    coordinates: { x: 720, y: 268 },
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Historic 16th-century trading courtyard, independent watchmakers and bullion repositories',
    summary: 'Founded in 1566 by Sir Thomas Gresham, The Royal Exchange was the historic birthplace of London commerce. Today, the majestic neo-classical building opposite the Bank of England is an enclave of fine horology, luxury leather goods, and private finance dining.',
    curatorNotes: 'Features boutiques for Bremont, Tiffany & Co., Omega, and independent bespoke watchmakers, alongside the Fortnum & Mason Bar & Restaurant in the central covered courtyard.',
    tglcPrivileges: [
      'Private breakfast and closing bell dinners in the central neoclassical courtyard',
      'Direct introductions to City bullion vaults and secure precious metals custody partners',
      'Private viewing of historic financial archives and 17th-century navigational maritime clocks',
      'Chauffeured transit links directly connecting the City to London City Airport (EGLC)'
    ],
    recommendedSeason: 'Spring and Autumn financial & philanthropic seasons',
    insiderTip: 'The mezzanine private rooms offer panoramic views over the trading floor courtyard while providing acoustic isolation for confidential mergers discussions.',
    closestSanctuary: 'St Michael Cornhill Churchyard (2 mins walk)'
  },
  {
    id: 'richmond-park-petersham',
    slug: 'richmond-park-and-petersham-meadows',
    name: 'Richmond Park & Petersham Enclave',
    neighborhood: 'Richmond',
    districtKey: 'wimbledon-richmond',
    districtName: 'Wimbledon & South West London',
    category: 'Sporting Heritage',
    address: 'Petersham Road, Richmond-upon-Thames',
    postcode: 'TW10 7AA',
    coordinates: { x: 140, y: 470 },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Ancient royal deer park, private equestrian hacks and Petersham Nurseries dining',
    summary: 'Covering 2,500 acres of ancient oaks, wild bracken, and roaming herds of red and fallow deer, Richmond Park is London’s largest Royal Park. The adjacent village of Petersham offers idyllic riverside meadows, Georgian country houses, and tranquil culinary gardens.',
    curatorNotes: 'TGLC coordinates private equestrian hacking with master stables, private botanical dinners in the glasshouses of Petersham Nurseries, and chartered river launches cruising down the Thames to Hampton Court Palace.',
    tglcPrivileges: [
      'Private equestrian trail rides through protected deer conservation corridors',
      'Glasshouse private dining reservations in Petersham Nurseries with bespoke seasonal menus',
      'Access to Pembroke Lodge private gardens and protected St Paul’s view corridor',
      'Private wooden launch charters from Richmond Quay up to Windsor and Bray'
    ],
    recommendedSeason: 'May – October (Summer wildflower and equestrian season)',
    insiderTip: 'King Henry’s Mound provides an uninterrupted protected sightline across ten miles directly to St Paul’s Cathedral in the City of London.',
    closestSanctuary: 'Isabella Plantation (within Richmond Park)'
  }
];
