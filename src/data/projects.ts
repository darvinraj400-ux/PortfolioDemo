export type Category = 'branding' | 'digital' | 'art-direction' | 'experiments';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  year: string;
  role: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  colors: string[];
  composition: 'left-heavy' | 'right-heavy' | 'centered' | 'diagonal' | 'split' | 'stacked';
}

export const projects: Project[] = [
  {
    id: 'void-studios',
    title: 'VOID',
    subtitle: 'Studios Identity System',
    category: 'branding',
    year: '2024',
    role: 'Brand Designer & Strategist',
    client: 'Void Studios — Creative Technology Lab',
    description: 'A complete identity system for an experimental creative technology studio. The brand needed to feel both precise and chaotic — like controlled entropy.',
    challenge: 'How do you brand a studio that refuses to be categorized? Void Studios works across generative art, spatial computing, and sound design. The identity needed to be a system, not a logo.',
    solution: 'Developed a generative identity system where the wordmark distorts based on real-time data inputs. The visual language uses a monospace typeface paired with fluid, algorithmic forms that never repeat.',
    results: [
      'Brand recognition increased 340% in target market',
      'Identity system featured in Brand New and It\'s Nice That',
      'Reduced client onboarding time by 60% through clear brand guidelines',
      'System adapted across 12+ touchpoints seamlessly'
    ],
    colors: ['#0066ff', '#ffffff', '#0a0a0a'],
    composition: 'left-heavy'
  },
  {
    id: 'tessera',
    title: 'TESSERA',
    subtitle: 'Digital Art Platform',
    category: 'digital',
    year: '2024',
    role: 'Product Designer & Creative Director',
    client: 'Tessera — Digital Art Marketplace',
    description: 'Designing a platform where digital artists can exhibit, sell, and contextualize their work. Not another marketplace — a digital gallery that respects the art.',
    challenge: 'Most art platforms treat digital work like commodities. Tessera needed to feel like walking into a gallery — contemplative, spacious, and focused on the work itself.',
    solution: 'Created an immersive browsing experience with generous whitespace, contextual metadata, and a viewing mode that lets collectors experience pieces at full scale. The interface recedes; the art advances.',
    results: [
      'Average session duration: 14 minutes (industry avg: 3.2 min)',
      'Artist onboarding increased 280%',
      'Featured in Awwwards Site of the Day',
      '$2.4M in artwork sold in first quarter'
    ],
    colors: ['#0066ff', '#1a1a2e', '#e0e0e0'],
    composition: 'right-heavy'
  },
  {
    id: 'mono-room',
    title: 'MONO/ROOM',
    subtitle: 'Exhibition Art Direction',
    category: 'art-direction',
    year: '2023',
    role: 'Art Director & Spatial Designer',
    client: 'Museum of Contemporary Digital Art',
    description: 'Art direction for "Mono/Room" — an exhibition exploring monochrome in the age of infinite color. A meditation on restraint.',
    challenge: 'How do you create visual excitement from limitation? The exhibition featured 23 artists working exclusively in black, white, and one accent color. The spatial design needed to honor each artist\'s palette.',
    solution: 'Designed a modular exhibition system where each room transitions through tonal zones. Wayfinding uses typographic scale as navigation — the closer you are to a work, the larger its label becomes.',
    results: [
      '47,000 visitors over 8-week run',
      'Exhibition catalog sold out first printing (3,000 copies)',
      'Extended by 4 weeks due to demand',
      'Press coverage in Wallpaper*, Dezeen, and Frieze'
    ],
    colors: ['#000000', '#ffffff', '#0066ff'],
    composition: 'centered'
  },
  {
    id: 'signal-noise',
    title: 'SIGNAL/NOISE',
    subtitle: 'Generative Type Experiments',
    category: 'experiments',
    year: '2024',
    role: 'Creative Technologist',
    client: 'Self-initiated',
    description: 'An ongoing series of generative typography experiments exploring the boundary between legibility and abstraction. Letters as living systems.',
    challenge: 'Can type be both readable and alive? This project investigates how letterforms can respond to data, sound, and interaction while maintaining their fundamental purpose: communication.',
    solution: 'Built a custom WebGL engine that treats each glyph as a particle system. Letters breathe, distort, and reform based on audio input and mouse position. The result is type that feels organic without losing function.',
    results: [
      '12 experimental type specimens produced',
      'Engine open-sourced with 2,400+ GitHub stars',
      'Workshop presented at OFFF Festival Barcelona',
      'Commissioned by 3 brands for campaign use'
    ],
    colors: ['#0066ff', '#00ff88', '#0a0a0a'],
    composition: 'diagonal'
  },
  {
    id: 'atlas-protocol',
    title: 'ATLAS',
    subtitle: 'Protocol Design System',
    category: 'digital',
    year: '2023',
    role: 'Design Systems Lead',
    client: 'Atlas Protocol — Decentralized Infrastructure',
    description: 'A design system for complex decentralized infrastructure. Making the invisible visible, making the complex feel simple.',
    challenge: 'Atlas Protocol\'s documentation and dashboards were built by engineers, for engineers. They needed to serve a broader audience — investors, partners, and developers — without dumbing down the content.',
    solution: 'Created a progressive disclosure system where complexity is available but not overwhelming. Layered information architecture with a visual language that communicates trust through precision, not decoration.',
    results: [
      'Documentation NPS improved from 23 to 71',
      'Developer onboarding time reduced by 45%',
      'Design system adopted by 8 internal teams',
      'Component library: 200+ tokens, 60+ components'
    ],
    colors: ['#0066ff', '#0d1117', '#c9d1d9'],
    composition: 'split'
  },
  {
    id: 'echo-chamber',
    title: 'ECHO',
    subtitle: 'Chamber — Sound Installation',
    category: 'art-direction',
    year: '2023',
    role: 'Creative Director & Interaction Designer',
    client: 'Sonar Festival — Barcelona',
    description: 'An interactive sound installation where visitors\' movements create architectural soundscapes. The body as instrument, the room as composition.',
    challenge: 'How do you design an experience where the audience IS the content? Echo Chamber needed to be intuitive enough for anyone to engage, yet deep enough to reward repeated visits.',
    solution: 'Mapped the installation space into zones, each with distinct sonic characteristics. Visitors trigger and shape sound through proximity and movement. The space learns — compositions evolve over the course of each day.',
    results: [
      '12,000+ interactions recorded during festival',
      'Winner of Sonar+D Audience Choice Award',
      'Installation toured to 4 additional venues',
      'Documentary short received 500K+ views'
    ],
    colors: ['#0066ff', '#1a0033', '#ff0066'],
    composition: 'stacked'
  },
  {
    id: 'null-object',
    title: 'NULL',
    subtitle: 'Object — Material Research',
    category: 'experiments',
    year: '2024',
    role: 'Researcher & Designer',
    client: 'Self-initiated — Material Lab',
    description: 'Exploring the space between digital and physical through computational material design. What does a digital object feel like?',
    challenge: 'Digital design has no weight, no texture, no temperature. This project asks: can we create digital materials that evoke physical sensation through visual and interactive design alone?',
    solution: 'Developed a series of interactive material studies using custom shaders and haptic feedback patterns. Each "object" responds to touch with visual and tactile properties that suggest weight, friction, and temperature.',
    results: [
      'Research published in ACM SIGGRAPH 2024',
      'Material library used by 3 product teams',
      'Talk delivered at Eyeo Festival',
      'Patent pending on haptic-visual synthesis method'
    ],
    colors: ['#0066ff', '#f0f0f0', '#0a0a0a'],
    composition: 'left-heavy'
  }
];

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'digital', label: 'Digital Products' },
  { id: 'art-direction', label: 'Art Direction' },
  { id: 'experiments', label: 'Experiments' }
];

export const clients = [
  'Void Studios',
  'Tessera',
  'MOCDA',
  'Atlas Protocol',
  'Sonar Festival',
  'Nike',
  'Spotify',
  'Aesop',
  'The New York Times',
  'Google Creative Lab',
  'MoMA',
  'Off-White'
];

export const collaborators = [
  { name: 'Studio Dumbar', role: 'Type Design' },
  { name: 'Random International', role: 'Installation' },
  { name: 'Field', role: 'Generative Systems' },
  { name: 'Universal Everything', role: 'Motion' },
  { name: 'Nervous System', role: 'Computational Design' }
];
