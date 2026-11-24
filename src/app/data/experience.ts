// Public experience content. New owner-supplied updates may be newer than the PDF.
// Leave dates unset when they have not been supplied; never borrow another role's dates.
export interface ExperienceEntry {
  organization: string;
  role: string;
  dates?: string;
  bullets: string[];
  tags: string[];
  projectLink?: { id: string; label: string };
}
export const EXPERIENCE: ExperienceEntry[] = [
  {
    organization: 'Apple',
    role: 'Hardware Engineering Intern · Device Accessories EE',
    dates: 'Jan – Aug 2026',
    bullets: [
      'Validated buck-boost converter stability using frequency-response analysis, Bode plots, phase margin, gain margin, and bandwidth.',
      'Performed LDO characterization and electrical validation; findings informed hardware design modifications.',
      'Designed experiments and Python scripts for automated electrical testing and measurement analysis.',
      'Collaborated with hardware and firmware teams on electrical validation and development-board bring-up.',
    ],
    tags: ['Validation & Test', 'Power Electronics', 'Python'],
  },
  {
    organization: 'UPS',
    role: 'Information Services Management Intern',
    dates: 'Jun – Aug 2024',
    bullets: [
      'Implemented application features and presented technical project results to leadership.',
      'Contributed the Angular interface and map dashboard for a top-nine hackathon prototype.',
    ],
    tags: ['Angular', 'Software', 'Collaboration'],
  },
];
export const RESEARCH: ExperienceEntry[] = [
  {
    organization: 'SYMBIO-X Lab',
    role: 'Undergraduate Research Assistant · Hardware Team',
    dates: 'Feb – Oct 2025',
    bullets: [
      'Evaluated AFE candidates and captured an initial EDA/GSR schematic for an existing EEG device; documented component tradeoffs and recommendations.',
      'Fully SMD-assembled two different sensing devices, including microscopic QFN/WLCSP work; these were separate from the later EDA/GSR schematic effort.',
    ],
    tags: ['PCB Design', 'Mixed-signal', 'PCBA'],
  },
];
export const LEADERSHIP: ExperienceEntry[] = [
  {
    organization: 'Engineers Without Borders',
    role: '2026 President · 2025 Vice President · Fall 2024 Secretary',
    dates: 'Oct 2024 – Present',
    bullets: [
      'Lead the student organization, supporting executive-board development, member retention, and hands-on sustainability projects.',
      'For Rainworks, served as a second electrical lead in Spring 2025, Electrical Lead in Fall 2025, and Co-Lead from Spring 2026.',
      'Led the electrical team’s transition to KiCad and GitHub version control and contributed component-level circuitry for SD-card SPI integration.',
      'Beginning hardware-validation planning for the fabricated SD-card prototype, following earlier PCB redesign, debugging, and sensor-calibration work.',
    ],
    tags: ['Leadership', 'PCB Design', 'KiCad', 'Validation Planning'],
    projectLink: {
      id: 'stormwater-runoff',
      label: 'Explore the Rainworks Project',
    },
  },
  {
    organization: 'ECE Tech Crew',
    role: 'Founding Member · Main Student Lead',
    dates: 'Feb 2024 – Present',
    bullets: [
      'Promote electronic prototyping and hardware design across Vanderbilt through merchandise, flyers, signs, and outreach, helping grow membership from seven to more than thirty in one year.',
      'Coordinate a community of thirty-plus members through Slack and close collaboration with ECE undergraduate-studies leadership.',
      'Train nine lab proctors and coordinate schedules and weekly changes to keep the ECE Makerspace open six days a week for three hours per day.',
      'Selected as one of three ECE undergraduates to present department initiatives at the annual External Advisory Board meeting; also represented ECE initiatives to ABET visitors.',
    ],
    tags: ['Student Leadership', 'Hardware Community', 'Proctor Training'],
  },
  {
    organization: 'ECE Tech Crew',
    role: 'Lab Proctor · ECE Makerspace',
    dates: 'Aug 2024 – May 2025',
    bullets: [
      'Taught students and faculty electrical prototyping and the use of Keysight and other oscilloscopes, waveform generators, multimeters, DC power supplies, and soldering tools.',
      'Helped with senior-design and hobbyist projects, advising on sensors, microcontrollers, possible PCB integration, and electrical-system design.',
      'Managed makerspace open hours for two to three hours per week, checking components and equipment, opening the lab, and advertising access.',
    ],
    tags: ['Prototyping', 'Test Equipment', 'Project Mentoring'],
  },
  {
    organization: 'ECE Tech Crew',
    role: 'Undergraduate Laboratory Assistant · Electronics 1 (ECE 3235L)',
    // The assistantship dates have not been supplied.
    bullets: [
      'Supported hands-on Electronics 1 laboratory assignments for three hours per week, helping students understand diodes, BJTs, MOSFETs, amplifiers, and CMOS circuits.',
      'Helped students debug circuits and interpret measurements using oscilloscopes, multimeters, function generators, and DC power supplies.',
    ],
    tags: ['Circuit Debugging', 'Electronics Teaching', 'Lab Support'],
  },
];
export const SKILLS = [
  {
    title: 'Hardware Design & Simulation',
    items: [
      'Allegro',
      'Eagle',
      'KiCad',
      'Altium',
      'LTspice',
      'Cadence Virtuoso',
      'Fusion 360',
    ],
  },
  {
    title: 'Validation, Debugging & Assembly',
    items: [
      'Oscilloscopes',
      'Multimeters',
      'Electronic loads',
      'Frequency response analysis',
      'Logic analyzers',
      'DC supplies',
      'Function generators',
      'SMD soldering',
      'PCBA',
    ],
  },
  {
    title: 'Supporting Programming & Interfaces',
    items: [
      'C/C++',
      'Python',
      'Arduino',
      'AVR Assembly',
      'I²C',
      'SPI',
      'UART',
      'Git',
    ],
  },
];
