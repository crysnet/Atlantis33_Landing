// Contenido de la landing. Todo es FAKE / placeholder: reemplázalo con la información real del proyecto.

export const site = {
  product: 'ATLANTIS Pathfinder',
  team: 'Atlantis 33',
  event: 'NASA Space Apps Challenge',
  tagline: 'Mission routes for the first humans on Mars.',
  description:
    'SINUS MERIDIANI Pathfinder plans safe traverses for astronauts in Sinus Meridiani and guides the search for ancient biosignatures through phyllosilicates, carbonates, and hydrous mineral detections.',
};

export const nav = [
  { label: 'How it works', href: '#how' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Impact', href: '#impact' },
  { label: 'Tools', href: '#tools' },
  { label: 'Creativity', href: '#creativity' },
];

export const howItWorks = {
  intro:
    'Pathfinder data from mars trek into a living digital twin of Mars. Astronauts and mission control pick a goal, and the system generates the safest, fastest or most scientific route. The app calculates the best route by following these safety and transit filters: ',
  steps: [
    {
      icon: 'satellite',
      title: 'Ingest orbital data',
      text: 'Anchored at a pre-established habitable zone within Sinus Meridiani, serving as the central base camp and starting point for all traverses.',
    },
    {
      icon: 'cpu',
      title: 'Score every cell',
      text: 'Our mission is the search for biosignatures, focusing on highprobability targets containing phyllosilicates, carbonates, Hydrous Mineral Detections, and Valley Networks',
    },
    {
      icon: 'route',
      title: 'Plan the route',
      text: 'Evaluates the Global Dust Cover Index and Thermal Inercia to filter out dust traps. High index values and thermal inertia guarantee a stable transit zone where astronauts and vehicles wont get stuck',
    },
    {
      icon: 'flag',
      title: 'Plant bases & explore',
      text: 'Computes terrain slopes every 10 meters, enforcing a strict safety threshold of under 15% to draw the optimal traverse.',
    },
  ],
};

export const missionMap = {
  // Una ruta por base: todas parten del Habitat (90, 400)
  routes: [
    {
      id: 'alpha',
      label: 'To target 1',
      path: 'M90 400 C 95 300, 120 200, 200 160 S 300 138, 370 150 S 530 185, 620 120',
      distance: '16.8 km',
      duration: '7 h 20 min',
    },
    {
      id: 'beta',
      label: 'To target 2',
      path: 'M90 400 C 200 400, 330 372, 460 330',
      distance: '6.1 km',
      duration: '2 h 30 min',
    },
    {
      id: 'gamma',
      label: 'To target 3',
      path: 'M90 400 C 200 330, 330 240, 450 228 S 640 255, 705 375',
      distance: '15.4 km',
      duration: '6 h 50 min',
    },
  ],
  bases: [
    { name: 'Base Alpha', find: 'Hydrous minerals', x: 620, y: 120, color: '#4cc9f0' },
    { name: 'Base Beta', find: 'Phyllosilicates', x: 460, y: 330, color: '#ffb86b' },
    { name: 'Base Gamma', find: 'Carbonates', x: 705, y: 375, color: '#c77dff' },
  ],
};

export const benefits = [
  {
    icon: 'shield',
    title: 'Safer EVAs',
    text: 'Avoids slopes exceeding 15% and unstable dust traps using Thermal Inertia and Dust Cover Index filters before astronauts depart from Sinus Meridiani.',
  },
  {
    icon: 'layers',
    title: 'Built on open data',
    text: 'Powered by official NASA Mars Trek datasets, integrating MOLA topography, CRISM mineralogy, and thermal data for transparent and scientifically reproducible mission planning.',
  },
];

export const impact = {
  intro:
    'Our goal is to compute safe, optimized traverses in minutes, guiding astronauts from their habitat in Sinus Meridiani directly to high-probability biosignature targets while eliminating environmental and terrain hazards.',
  stats: [
    { value: 38, suffix: '%', label: 'shorter average traverses' },
    { value: 3, suffix: '×', label: 'more sampling sites per mission' },
  ],
};

export const tools = [
  {
    group: 'NASA data',
    items: ['Mars Trek API'],
  },
  {
    group: 'AI & algorithms',
    items: ['Python', 'Antigravity', 'Claude'],
  },
  {
    group: 'Visualization',
    items: ['Stitch', 'Flutter', 'Dart'],
  },
  {
    group: 'Infrastructure',
    items: ['Vercel'],
  },
];

export const creativity = [
  {
    icon: 'gamepad',
    title: 'Strategy-game planning',
    text: 'Inspired by strategy games, crews drag waypoints, drop bases and instantly see the trade-offs.',
  },
  {
    icon: 'book',
    title: 'Routes that tell a story',
    text: 'Each traverse becomes a mission narrative: what you will see, sample and discover along the way.',
  },
  {
    icon: 'sparkles',
    title: 'Map Thinker',
    text: 'The map learns from every excursion, updating hazards and resource predictions for next trips.',
  },
  {
    icon: 'droplet',
    title: 'Resources first',
    text: 'Bases are placed where water and minerals are likely, turning exploration into a path to settlement.',
  },
];

export const teamMembers = [
  { name: 'Crysthel Aparicio', role: 'SI & Data' },
  { name: 'Dennis Carrillo', role: 'Developer' },
  { name: 'JeanPierre Cruz', role: 'UX & storytelling' },
  { name: 'Carlos Lizano', role: 'Application Architect' },
  { name: 'Jhordan Lazma', role: 'Geospatial' },
];
