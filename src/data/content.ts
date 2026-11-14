// Contenido de la landing. Todo es FAKE / placeholder: reemplázalo con la información real del proyecto.

export const site = {
  product: 'ARES Pathfinder',
  team: 'Atlantis 33',
  event: 'NASA Space Apps Challenge',
  tagline: 'Mission routes for the first humans on Mars.',
  description:
    'ARES Pathfinder plans safe traverses for astronauts on the Red Planet and recommends where to plant bases to search for water ice, minerals and new discoveries.',
};

export const nav = [
  { label: 'How it works', href: '#how' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Impact', href: '#impact' },
  { label: 'Tools', href: '#tools' },
  { label: 'Creativity', href: '#creativity' },
];

export const heroStats = [
  { value: '12.4M', label: 'km² of terrain mapped' },
  { value: '3', label: 'route strategies' },
  { value: '< 2 s', label: 'to re-plan a traverse' },
];

export const howItWorks = {
  intro:
    'ARES Pathfinder fuses orbital data from NASA missions into a living digital twin of Mars. Astronauts and mission control pick a goal, and the system generates the safest, fastest or most scientific route, while suggesting where to establish bases along the way.',
  steps: [
    {
      icon: 'satellite',
      title: 'Ingest orbital data',
      text: 'HiRISE imagery, MOLA elevation and CRISM mineral maps are merged into a 3D terrain model at 10 m resolution.',
    },
    {
      icon: 'cpu',
      title: 'Score every cell',
      text: 'An AI model classifies slopes, boulders, dust hazards and the probability of finding water ice or minerals.',
    },
    {
      icon: 'route',
      title: 'Plan the route',
      text: 'Multi-objective pathfinding balances safety, energy, time and science value to draw the optimal traverse.',
    },
    {
      icon: 'flag',
      title: 'Plant bases & explore',
      text: 'It recommends base locations and supply caches, then re-plans live using rover and suit telemetry.',
    },
  ],
};

export const missionMap = {
  routes: [
    {
      id: 'safe',
      label: 'Safest',
      path: 'M90 400 C 160 380, 220 350, 300 335 S 420 345, 460 330 S 560 250, 620 120',
      distance: '14.2 km',
      duration: '6 h 40 min',
      risk: 'Low',
      sites: '3 sampling sites',
    },
    {
      id: 'fast',
      label: 'Fastest',
      path: 'M90 400 L 250 300 L 420 220 L 620 120',
      distance: '9.8 km',
      duration: '4 h 10 min',
      risk: 'Medium',
      sites: '1 sampling site',
    },
    {
      id: 'science',
      label: 'Max science',
      path: 'M90 400 C 180 440, 320 420, 460 330 S 690 440, 705 375 S 720 220, 620 120',
      distance: '18.6 km',
      duration: '9 h 05 min',
      risk: 'Low–Medium',
      sites: '6 sampling sites',
    },
  ],
  bases: [
    { name: 'Base Alpha', find: 'Water ice', x: 620, y: 120, color: '#4cc9f0' },
    { name: 'Base Beta', find: 'Hematite & clays', x: 460, y: 330, color: '#ffb86b' },
    { name: 'Base Gamma', find: 'Lava tube', x: 705, y: 375, color: '#c77dff' },
  ],
};

export const benefits = [
  {
    icon: 'shield',
    title: 'Safer EVAs',
    text: 'Avoids steep slopes, boulder fields and dust storms before astronauts ever leave the habitat.',
  },
  {
    icon: 'zap',
    title: 'Less energy, more range',
    text: 'Optimized traverses reduce rover battery use and oxygen consumption on every excursion.',
  },
  {
    icon: 'flask',
    title: 'More science per sol',
    text: 'Routes are ranked by scientific value, so every hour on the surface counts.',
  },
  {
    icon: 'radio',
    title: 'Works with a 20-min delay',
    text: 'Plans run on board, so crews stay autonomous despite the Earth–Mars communication lag.',
  },
  {
    icon: 'play',
    title: 'Rehearse the mission',
    text: 'Simulate full campaigns, test contingencies and train crews in the digital twin.',
  },
  {
    icon: 'layers',
    title: 'Built on open data',
    text: 'Uses public NASA datasets, making it transparent, reproducible and easy to extend.',
  },
];

export const impact = {
  intro:
    'Our goal is to turn months of manual traverse planning into minutes, helping humanity take its first confident steps on Mars and bringing the same technology back to Earth.',
  stats: [
    { value: 38, suffix: '%', label: 'shorter average traverses' },
    { value: 3, suffix: '×', label: 'more sampling sites per mission' },
    { value: 72, suffix: '%', label: 'fewer high-risk segments' },
    { value: 24, suffix: '/7', label: 'autonomous re-planning' },
  ],
  audiences: [
    {
      icon: 'rocket',
      title: 'For astronauts',
      text: 'Clear, safe paths and fewer surprises during long surface excursions.',
    },
    {
      icon: 'users',
      title: 'For mission control',
      text: 'A shared view of plans, bases and resources to make faster decisions.',
    },
    {
      icon: 'globe',
      title: 'For Earth',
      text: 'The same engine can guide rescue teams and expeditions in extreme environments.',
    },
  ],
};

export const tools = [
  {
    group: 'NASA data',
    items: ['MRO HiRISE imagery', 'MOLA elevation (MGS)', 'CRISM mineral maps', 'Mars Trek API'],
  },
  {
    group: 'AI & algorithms',
    items: ['Python', 'PyTorch', 'A* / D* Lite pathfinding', 'GDAL & Rasterio'],
  },
  {
    group: 'Visualization',
    items: ['Astro', 'Three.js', 'CesiumJS', 'D3.js'],
  },
  {
    group: 'Infrastructure',
    items: ['Docker', 'FastAPI', 'PostGIS', 'GitHub Actions'],
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
    title: 'A living digital twin',
    text: 'The map learns from every excursion, updating hazards and resource predictions in real time.',
  },
  {
    icon: 'droplet',
    title: 'Resources first',
    text: 'Bases are placed where water and minerals are likely, turning exploration into a path to settlement.',
  },
];

export const teamMembers = [
  { name: 'Ana Torres', role: 'Mission design' },
  { name: 'Luis Méndez', role: 'AI & data' },
  { name: 'Sofía Rivera', role: 'Frontend & 3D' },
  { name: 'Diego Castillo', role: 'Geospatial' },
  { name: 'María López', role: 'UX & storytelling' },
];
