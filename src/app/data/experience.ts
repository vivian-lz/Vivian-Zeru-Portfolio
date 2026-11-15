// Public resume content. Keep dates and claims aligned with the downloadable PDF.
export const EXPERIENCE = [
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
export const RESEARCH = [
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
export const LEADERSHIP = [
  {
    organization: 'ECE Tech Crew',
    role: 'Founding Member · Undergraduate Lab Assistant · Lab Proctor',
    dates: 'Feb 2024 – Present',
    bullets: [
      'Help students analyze, debug, and design diode, MOSFET, BJT, amplifier, and CMOS circuits in Electronics 1 Laboratory.',
      'Trained nine students in Keysight measurement tools for senior-design and research debugging.',
      'Supported membership growth from seven to more than thirty through outreach, and presented to the ECE External Advisory Board and ABET visitors.',
    ],
    tags: ['Mentoring', 'Lab Debugging', 'Community'],
  },
  {
    organization: 'Engineers Without Borders',
    role: '2026 President · 2025 Vice President · Fall 2024 Secretary',
    dates: 'Oct 2024 – Present',
    bullets: [
      'Lead and support the student organization, building an executive board and strengthening member retention.',
      'Serve as Rainworks Electrical Lead (Fall 2025 – Present).',
      'Contribute electrical leadership and hands-on work to the stormwater monitoring project.',
    ],
    tags: ['Leadership', 'Sustainability', 'Hardware'],
  },
];
export const SKILLS = [
  {
    title: 'Hardware Design & Simulation',
    items: [
      'Allegro',
      'Eagle',
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
