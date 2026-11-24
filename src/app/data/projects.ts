import { Project, ProjectCategory, ProjectStatus } from './project.model';

// This is the content editor for the portfolio. Order here controls directory order.
// Images are original repository assets or figures extracted from Vivian's reports.
export const PROJECTS: Project[] = [
  {
    id: 'ic-design',
    title: 'IC Design Collection',
    category: 'Course',
    status: 'Completed',
    summary:
      'An 8-bit Booth multiplier and the transistor-level studies behind it.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Cadence Virtuoso', 'HSPICE'],
    context: 'VLSI Design · ECE 5385 · Fall 2025',
    role: 'Circuit design, simulation, layout, and physical verification.',
    problem:
      'Build digital circuits from transistor-level foundations, then combine them into a complete multiplier.',
    sections: [
      {
        title: 'A progression in circuit design',
        paragraphs: [
          'These studies connect individual standard cells to hierarchical arithmetic and sequential circuits. The final 8-bit Booth multiplier brings together encoding, decoding, carry-lookahead addition, and physical verification.',
          'The course workflow included schematic capture, HSPICE simulation, layout, DRC, LVS, parasitic extraction, and pre- and post-layout simulation using a 45 nm technology.',
        ],
      },
    ],
    images: [
      {
        src: '/project-images/booth-layout.jpeg',
        alt: 'Eight-bit Booth multiplier layout in Cadence Virtuoso',
        caption:
          '8-bit Booth multiplier layout · Original final report, Figure 9.',
        fit: 'contain',
      },
    ],
    links: [{ label: 'Read VLSI Report', url: '/vlsifinalproj.pdf' }],
  },
  {
    id: 'stormwater-runoff',
    title: 'Stormwater Runoff Device',
    category: 'Organization',
    status: 'In Progress',
    stage: 'Preparing Hardware & System Validation',
    summary:
      'Electrical leadership, PCB redesign, SD-card integration, and validation planning for campus runoff monitoring.',
    focus: ['PCB Design', 'Validation & Test', 'Embedded Systems'],
    tools: [
      'KiCad',
      'GitHub',
      'EasyEDA',
      'Arduino IDE',
      'ESP8266',
      'ThingSpeak',
    ],
    context: 'Engineers Without Borders · EPA Rainworks project',
    role: 'Electrical Lead in Fall 2025, then Co-Lead from Spring 2026; earlier PCB, sensor-calibration, and prototype-debugging contributor.',
    problem:
      'Collect environmental measurements from a deployable, battery-powered stormwater monitoring device.',
    sections: [
      {
        title: 'My contribution',
        bullets: [
          'Led and co-led the electrical team’s schematic, layout, and prototype-testing efforts as the project moved toward SD-card local storage.',
          'Led the Fall 2026 transition to KiCad and GitHub version control for the electrical team.',
          'Added decoupling and bulk capacitors and resistor networks to support SD-card SPI requirements, with attention to transient behavior, signal integrity, and ESD-protection considerations.',
          'Helped debug electronics, calibrate sensors, and teach new members how the sensing hardware operates.',
        ],
      },
      {
        title: 'SD-card integration & design decisions',
        paragraphs: [
          'The SD-card revision adds local storage to the monitoring device. I worked on its schematic and layout in EasyEDA during Fall 2025 and Spring 2026, followed by the team’s move to KiCad and GitHub in Fall 2026.',
          'The later work used component-level passive circuitry instead of relying on a plug-and-play module, with the goal of reducing PCB space while supporting the SD-card interface. Supply decoupling, bulk capacitance, and resistor networks were design considerations for the SPI connection and electrical robustness.',
        ],
      },
      {
        title: 'Development & leadership timeline',
        bullets: [
          'Fall 2023 — Calculated salinity and conductivity relationships to assess sensor test data.',
          'Spring 2024 — Studied sensor, microcontroller, and ADC operation, assembled electronics in the enclosure, and prepared to teach new members.',
          'Fall 2024 — Created PCB schematic and layout work to reduce the space occupied by wiring.',
          'Spring 2025 — Served as a second electrical lead and helped complete a field-deployable prototype through PCB debugging and sensor calibration.',
          'Fall 2025 — Became Electrical Lead and led PCB redesign and testing efforts, including SD-card integration in EasyEDA.',
          'Spring 2026 — Transitioned to Co-Lead while interning off campus and continued the SD-card schematic/layout effort.',
          'Fall 2026 — Led the KiCad and GitHub transition, refined component-level SD-card circuitry, and began planning hardware-validation efforts.',
        ],
      },
      {
        title: 'Earlier system & low-power work',
        paragraphs: [
          'The earlier design measured pH, conductivity, turbidity, flow rate, and soil moisture using an ESP8266 ThingDev and an ADC. It sent measurements to ThingSpeak and used a PLA enclosure designed in SolidWorks.',
          'I also worked on deep-sleep firmware with the firmware team. The earlier firmware introduced sleep every 15 seconds, with approximately 150 mA active current and 20 µA during sleep. These are operating-state currents rather than measured average power or battery-life results.',
        ],
      },
      {
        title: 'Current milestone & validation planning',
        paragraphs: [
          'The SD-card prototype is finished and fabricated. I am beginning the process of leading hardware-validation efforts; in-system checks are the next stage. Validation results will be documented as that work progresses.',
          'The photographs and schematic below document earlier iterations of the device.',
        ],
      },
    ],
    images: [
      {
        src: '/ewbprototype.jpeg',
        alt: 'Earlier stormwater monitoring prototype in its enclosure',
        caption: 'Earlier prototype · This is not the new SD-card revision.',
        fit: 'cover',
      },
      {
        src: '/ewbschematic.png',
        alt: 'Stormwater sensor PCB schematic',
        caption: 'Schematic from the earlier sensor PCB design.',
        fit: 'contain',
      },
      {
        src: '/ewbsite.jpeg',
        alt: 'EWB team installing an earlier device for field testing',
        caption: 'Earlier field deployment with the EWB team.',
        fit: 'cover',
      },
      {
        src: '/ewbexplanation.png',
        alt: 'Annotated stormwater device components',
        caption: 'Component overview from an earlier iteration.',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'wearable-health-sensor',
    title: 'Wearable Sensing Hardware',
    category: 'Organization',
    status: 'Completed',
    summary:
      'SMD assembly across two devices, followed by EDA/GSR component evaluation and schematic capture for a third.',
    focus: ['PCB Design', 'Analog Circuit Design'],
    tools: ['Eagle', 'SMD Reflow', 'PCBA'],
    context: 'SYMBIO-X Lab · Undergraduate research',
    role: 'Hardware research assistant: SMD assembly, preliminary testing, component evaluation, and schematic capture across distinct devices.',
    problem:
      'Support physiological sensing hardware through hands-on PCB assembly and explore adding EDA/GSR sensing to another existing EEG device.',
    sections: [
      {
        title: '1 · First device: assembly & initial testing',
        paragraphs: [
          'The assembly photographs on this page show the first device I worked on in the lab. I fully assembled its PCB using SMD soldering, with hand-applied solder paste, a microscope, tweezers, and a hot-air station.',
          'After assembly, I performed preliminary testing, then observed another lab member flash firmware and demonstrate the device operating with the lab’s application.',
        ],
      },
      {
        title: '2 · Second device: SMD assembly',
        paragraphs: [
          'I subsequently fully assembled a second, different lab device using SMD soldering.',
        ],
      },
      {
        title: '3 · Third device: EDA/GSR schematic capture',
        paragraphs: [
          'For a third device, an existing EEG PCB, I investigated an EDA/GSR sensing addition. My October 1, 2025 report documents the initial multi-chip schematic implementation in Eagle.',
          'The initial design used a voltage reference, an op-amp stage, and an SPI ADC. The original schematic excerpts below come directly from that progress report.',
        ],
        bullets: [
          'Selected an LT6656 voltage reference, MCP6072 op-amp, and MCP3201 ADC for the initial schematic approach.',
          'Considered component availability, supply current, and downloadable Eagle library support during selection.',
          'Reviewed the existing board’s power arrangement to avoid adding unnecessary regulation, and captured the reference, amplifier, and ADC connections.',
        ],
        images: [
          {
            src: '/project-images/gsr-reference-schematic.png',
            alt: 'Eagle voltage-reference circuit excerpt for the third device’s proposed EDA addition',
            caption:
              'Third device · Initial EDA voltage-reference schematic, October 1 report.',
            fit: 'contain',
          },
          {
            src: '/project-images/gsr-amplifier-schematic.png',
            alt: 'Eagle op-amp circuit excerpt for the third device’s proposed EDA addition',
            caption:
              'Third device · Initial EDA amplifier schematic, October 1 report.',
            fit: 'contain',
          },
          {
            src: '/project-images/gsr-adc-schematic.png',
            alt: 'Eagle ADC circuit excerpt for the third device’s proposed EDA addition',
            caption:
              'Third device · Initial EDA ADC schematic and digital interface, October 1 report.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'AFE comparison & design tradeoffs',
        paragraphs: [
          'My October 3 notes compared the initial multi-chip approach with integrated AFE candidates, including ADS1292R and AD5940, and additional options such as AFE1594, AFE4900, and AFE4460.',
          'I considered resolution, gain, power, noise, footprint, channel count, application fit, and integration complexity. The notes favored ADS1292R among the first two candidates and identified AFE159x as another option for further consideration.',
          'This stage produced a comparative component assessment and recommendations for further design review.',
        ],
      },
      {
        title: 'Scope & outcome',
        paragraphs: [
          'The first two efforts were PCB assembly work on existing device designs. The third produced an initial EDA/GSR schematic and documented component-selection reasoning for a different device.',
          'At the time of the October 1 report, the EDA/GSR schematic was awaiting review, with layout integration identified as the next stage of work.',
        ],
      },
    ],
    imagesHeading: 'First device · Assembly photographs',
    images: [
      {
        src: '/researchWearable.jpg',
        alt: 'First lab device, fully SMD-assembled by Vivian, connected to the lab setup',
        caption:
          'First device · PCB fully assembled by me using SMD soldering. I performed preliminary testing, then observed firmware flashing and a functional demonstration by another lab member.',
        fit: 'cover',
        position: '50% 85%',
      },
      {
        src: '/researchSetup.jpg',
        alt: 'Microscope and tools used during assembly of the first lab device',
        caption:
          'First device · My PCB assembly workstation, separate from the later AFE and schematic work.',
        fit: 'cover',
      },
      {
        src: '/wearableSolder.jpg',
        alt: 'Microscopic solder paste application during assembly of the first lab device',
        caption:
          'First device · Solder paste applied under the microscope during SMD assembly.',
        fit: 'cover',
      },
    ],
    links: [
      {
        label: 'Read Schematic Progress Report',
        url: '/reports/symbio-x-eda-schematic-report.pdf',
      },
      {
        label: 'Read AFE Comparison Notes',
        url: '/reports/symbio-x-gsr-chip-notes.pdf',
      },
    ],
  },
  {
    id: 'bandgap-reference',
    title: 'Floating Bandgap Reference',
    category: 'Course',
    status: 'Completed',
    stage: 'Schematic Design & Simulation',
    summary:
      'PTAT/CTAT analysis, resistor tuning, and supply-sensitivity investigation for a floating 2 V reference.',
    focus: ['Analog Circuit Design', 'Validation & Test'],
    tools: ['LTspice', 'Mathematica'],
    context: 'Advanced Analog Electronics · ECE 6341 · October 2026',
    role: 'Individual schematic design, analytical calculations, and simulation.',
    problem:
      'Design a floating voltage reference meeting nominal-voltage, temperature-sensitivity, and DC supply-rejection requirements.',
    sections: [
      {
        title: 'My contribution',
        bullets: [
          'Derived first-order resistor relationships using PTAT and CTAT contributions and current-mirror scaling.',
          'Used Mathematica calculations to establish initial values, then refined them through LTspice simulations.',
          'Matched R4 and R5 to reduce sensitivity to equal input bias currents and reduced R6 to increase the CTAT contribution.',
          'Investigated low-supply degradation through resistor sweeps and amplifier bias/common-mode experiments.',
        ],
      },
      {
        title: 'Design decisions',
        paragraphs: [
          'The analytical model provided a starting point, but simulation exposed nonidealities including MOSFET body bias and channel-length modulation, BJT behavior, and LT1994 input bias currents. Balancing those effects was essential to meeting the nominal reference and temperature requirements.',
          'The final design retained an undriven LT1994 common-mode pin. A lower common-mode setting improved supply regulation in an alternative configuration, but was not adopted in the reported final circuit.',
        ],
      },
      {
        title: 'Scope & evidence',
        paragraphs: [
          'This was schematic design and simulation only. It did not include IC layout, fabrication, or physical hardware measurements. The original report contains calculations, parameter changes, diagnostic simulations, and the final netlist.',
        ],
      },
    ],
    metrics: [
      {
        label: 'Reference voltage',
        value: '2.003 V',
        context: 'At 23°C; meets 2 V ± 5 mV.',
      },
      {
        label: 'Temperature sensitivity',
        value: '7.1 µV/°C max',
        context: 'Across 17–29°C; meets the <10 µV/°C requirement.',
      },
      {
        label: 'DC supply rejection',
        value: 'Partially met',
        context:
          'Requirement met at about 3.06–3.63 V; missed at lower supply voltages.',
      },
    ],
    limitation:
      'DC PSRR did not meet the requirement across the complete 2.97–3.63 V supply range. Input-current imbalance was a likely contributor in diagnostic configurations; the final root cause was not conclusively established.',
    images: [
      {
        src: '/project-images/bandgap-schematic.png',
        alt: 'Final floating bandgap reference schematic in LTspice',
        caption:
          'Final LTspice schematic · Extracted directly from Figure 2 of the report.',
        fit: 'contain',
      },
      {
        src: '/project-images/bandgap-voltage.png',
        alt: 'Simulated differential reference voltage versus temperature',
        caption: 'Reference-voltage simulation · Report Figure 3.',
        fit: 'contain',
      },
      {
        src: '/project-images/bandgap-tempco.png',
        alt: 'Simulated reference-voltage temperature derivative across 17 to 29 degrees Celsius',
        caption: 'Temperature-sensitivity simulation · Report Figure 4.',
        fit: 'contain',
      },
      {
        src: '/project-images/bandgap-psrr.png',
        alt: 'DC supply rejection simulation showing low-supply degradation',
        caption: 'Supply-sensitivity simulation · Report Figure 5.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'Read Full Report', url: '/reports/bandgap-reference.pdf' },
    ],
  },
  {
    id: 'rad-hard-cpu',
    title: 'Rad-Hard CPU',
    category: 'Course',
    status: 'In Progress',
    stage: 'Specification & Simulation',
    summary:
      'Owning the DFF radiation-hardening work within a team CPU redesign.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Circuit Simulation'],
    context: 'Senior design · ECE 4950 / 4951 · Team of four',
    role: 'Responsible for radiation hardening of the D flip-flop.',
    problem:
      'Explore radiation hardening by design for key cells in an open-source CPU for space-oriented applications.',
    sections: [
      {
        title: 'Current work',
        paragraphs: [
          'Our team is using simulations of the selected open-source CPU to define baseline specifications and determine appropriate goals for the radiation-hardened DFF.',
        ],
      },
      {
        title: 'My ownership',
        paragraphs: [
          'I am tasked with the DFF radiation-hardening design. That design phase follows the current specification and simulation work; completed hardening or radiation-test results are not yet claimed.',
        ],
      },
      {
        title: 'Next steps',
        bullets: [
          'Establish DFF targets from the CPU baseline.',
          'Begin the hardening design and evaluate it against those targets.',
        ],
      },
    ],
  },
  {
    id: 'smart-dorm-light',
    title: 'Smart Dorm Light',
    category: 'Hobbyist',
    status: 'In Progress',
    stage: 'IR Receiver Prototyping',
    summary:
      'Hardware bring-up and IR interface debugging toward a custom smart-light controller.',
    focus: ['Validation & Test', 'Embedded Systems'],
    tools: ['ESP32', 'Arduino IDE', 'IR Receiver'],
    context: 'Personal project · Phase 1',
    role: 'Controller prototyping, firmware tests, and hardware debugging.',
    problem:
      'Control an existing IR-controlled RGBW dorm light with a custom ESP32-based controller, without modifying the bulb.',
    sections: [
      {
        title: 'Verified so far',
        bullets: [
          'Set up ESP32 support and resolved the CP2102 driver/COM-port issue to upload firmware.',
          'Ran a minimal sketch that repeatedly printed “ESP32 running normally.”',
          'Verified GPIO 4 reads HIGH with the receiver signal disconnected and INPUT_PULLUP enabled.',
          'Developed state-monitoring, pulse-width, and interrupt pulse-counting test sketches.',
        ],
      },
      {
        title: 'Current investigation',
        paragraphs: [
          'The receiver did not produce recognizable commands during testing. Signal readings varied between LOW and HIGH depending on pull-up configuration, without observable remote-button transitions.',
          'Some uploads or resets also produced watchdog resets and abnormal flash-loading messages. The cause is unconfirmed. Receiver identity, physical wiring, board/flash settings, and stable boot behavior still need to be verified.',
        ],
      },
      {
        title: 'Next functional milestone',
        paragraphs: [
          'Capture and compare RED, BLUE, and OFF commands, then transmit an IR command from the ESP32. The first functional milestone is turning the bulb red without the original remote.',
        ],
      },
      {
        title: 'Planned roadmap',
        bullets: [
          'IR LED and transistor-driver transmission stage.',
          'Phone-based color selection, presets, and brightness control.',
          'Ambient-light sensing for automatic lighting.',
          'A custom PCB designed in KiCad.',
        ],
      },
    ],
    limitation:
      'Remote protocol decoding and IR transmission are not yet verified. Phone control, ambient-light automation, and the custom PCB are planned features.',
    links: [
      { label: 'View GitHub', url: 'https://github.com/vivian-lz/smart-light' },
    ],
  },
  {
    id: 'sproutly',
    title: 'Sproutly',
    category: 'Course',
    status: 'In Progress',
    stage: 'Startup Concept Development',
    summary:
      'A plant-health startup concept exploring environmental sensing and growth-stage insights; hardware work has not started.',
    focus: ['Product Exploration'],
    tools: ['Concept Development'],
    context: 'AI, Entrepreneurship, and Startups · ECE 4611',
    role: 'Proposed a plant health monitoring system for the class venture.',
    problem:
      'Explore a startup concept centered on helping people monitor plant health.',
    sections: [
      {
        title: 'Current scope',
        paragraphs: [
          'Sproutly is the active startup concept for my class. Current work is concept development; PCB design, firmware, and hardware prototyping have not started. The class does not require a PCB, although I am considering developing one.',
        ],
      },
      {
        title: 'Possible hardware direction',
        paragraphs: [
          'If I pursue a hardware implementation, the repository’s proposed direction is an ESP32-based device with soil moisture, BH1750 light sensing, BME280 temperature/humidity sensing, a display, and a wireless application connection.',
          'The product concept includes growth-stage insights and care recommendations based on environmental history and plant-specific information. These features would require future software, firmware, and validation work.',
        ],
      },
      {
        title: 'Related earlier work',
        paragraphs: [
          'My earlier hobbyist plant-monitoring PCB design is a separate, paused effort. It provides background for this area of interest, but should not be mistaken for a finished Sproutly product.',
        ],
      },
    ],
    links: [
      {
        label: 'View Sproutly GitHub',
        url: 'https://github.com/vivian-lz/sproutly',
      },
    ],
    relatedIds: ['plant-monitor-hardware'],
  },
  {
    id: 'weather-station-v2',
    title: 'Weather Station V2',
    category: 'Hobbyist',
    status: 'Paused',
    summary:
      'Earlier Eagle PCB work progressing from sensor modules toward raw ICs.',
    focus: ['PCB Design', 'Embedded Systems'],
    tools: ['Eagle', 'ESP32', 'BME280', 'C++'],
    context:
      'Personal project · Follow-up to the original Arduino weather station',
    role: 'Schematic and PCB design; planning the module-to-IC transition.',
    problem:
      'Develop a compact weather station with temperature, humidity, pressure, and approximate altitude readouts.',
    sections: [
      {
        title: 'Work completed',
        paragraphs: [
          'Created the module-based PCB design, then developed a raw-IC schematic using an ESP32, BME280, USB-C input, voltage regulation, a USB-to-serial interface, reset control, an RGB LED, and an LCD. The proposed system used a 3.3 V board supply and I²C sensing.',
        ],
      },
      {
        title: 'Design reflection',
        paragraphs: [
          'The early component choices prioritized access to available Vanderbilt lab parts. If I revisit the project, I would redesign placement and select appropriate surface-mount parts before fabrication.',
        ],
      },
      {
        title: 'Current status',
        paragraphs: [
          'Paused after more than a year without active development. These images show design iterations, not manufactured or validated boards. The earlier projected area reduction is not presented as a verified result.',
        ],
      },
    ],
    images: [
      {
        src: '/weatherstationic.png',
        alt: 'Raw-IC weather station PCB design in Eagle',
        caption:
          'Raw-IC design iteration · Placement would be revisited before fabrication.',
        fit: 'contain',
      },
      {
        src: '/Weather_Station_Modules.png',
        alt: 'Module-based weather station PCB design',
        caption: 'Earlier module-based PCB design.',
        fit: 'contain',
      },
    ],
    links: [
      {
        label: 'View GitHub',
        url: 'https://github.com/vivian-lz/weather-station-v2',
      },
    ],
    relatedIds: ['original-weather-station'],
  },
  {
    id: 'plant-monitor-hardware',
    title: 'Plant Health Monitoring Device',
    category: 'Hobbyist',
    status: 'Paused',
    summary:
      'The original hobbyist PCB design, separate from the active Sproutly concept.',
    focus: ['PCB Design', 'Embedded Systems'],
    tools: ['Eagle', 'ESP32', 'BME280', 'BH1750'],
    context: 'Personal hardware project',
    role: 'PCB design for a sensor-module-based plant monitor.',
    problem:
      'Combine soil moisture, temperature, humidity, and light sensing to make plant-care needs easier to understand.',
    sections: [
      {
        title: 'Design scope',
        paragraphs: [
          'The earlier board design supported ESP32 and sensor modules, with LEDs intended to indicate light and watering needs. A raw-IC revision and predictive processing were future ideas, not demonstrated results.',
        ],
      },
      {
        title: 'Current status',
        paragraphs: [
          'The hobbyist hardware effort is paused. Sproutly, the related class startup concept, is active and documented separately.',
        ],
      },
    ],
    images: [
      {
        src: '/PlantDevicePinBoard.png',
        alt: 'Module-based plant monitoring PCB design in Eagle',
        caption: 'Original module-based plant-monitor design.',
        fit: 'contain',
      },
    ],
    links: [
      {
        label: 'View GitHub',
        url: 'https://github.com/vivian-lz/Plant-Health-Monitoring-Device',
      },
    ],
    relatedIds: ['sproutly'],
  },
  {
    id: 'raspberry-pi-security',
    title: 'Raspberry Pi Security System',
    category: 'Hobbyist',
    status: 'Archived',
    summary:
      'Motion-sensing and camera exploration with an assembled Raspberry Pi setup.',
    focus: ['Embedded Systems', 'Software'],
    tools: ['Raspberry Pi 4', 'Python', 'Camera Module 2'],
    context: 'Personal project',
    role: 'Electronics assembly and early Python development.',
    problem:
      'Explore a device that detects visitors to a monitored area and captures images.',
    sections: [
      {
        title: 'Work completed & scope',
        paragraphs: [
          'Assembled the electronics using a motion sensor, Raspberry Pi 4 Model B, and Camera Module 2; began Python code. AI-based identification remained a future idea.',
        ],
      },
      {
        title: 'Archived',
        paragraphs: [
          'No active development is planned. A complete detection or AI-identification system was not demonstrated.',
        ],
      },
    ],
  },
  {
    id: 'booth-multiplier',
    parentId: 'ic-design',
    title: '8-Bit Booth Multiplier',
    category: 'Course',
    status: 'Completed',
    stage: 'Featured IC Case Study',
    summary:
      'Booth encoding and decoding, carry-lookahead arithmetic, and a full physical-design workflow.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Cadence Virtuoso', 'HSPICE', '45 nm'],
    context: 'VLSI Design final project · Fall 2025',
    role: 'Individual hierarchical circuit design, layout, and verification.',
    problem:
      'Implement an 8-bit multiplier using Booth encoding and decoding to reduce partial-product additions.',
    sections: [
      {
        title: 'My contribution',
        bullets: [
          'Implemented the multiplier hierarchy using Booth encoding and decoding.',
          'Used carry-lookahead addition with a Manchester Carry Chain within the arithmetic hierarchy.',
          'Created schematics and layouts and conducted DRC/LVS, parasitic extraction, and pre/post-layout simulation.',
        ],
      },
      {
        title: 'Design decisions',
        paragraphs: [
          'Booth encoding reduced the maximum required additions from seven to three compared with the parallel-multiplier approach described in my report. Carry-lookahead logic addressed propagation through the adder hierarchy. This is an architectural comparison, not a claimed measured speedup.',
        ],
      },
      {
        title: 'Evidence',
        paragraphs: [
          'The final report documents the hierarchy, simulation waveforms and edge cases, layout, and verification records. The original layout and schematic are shown below.',
        ],
      },
    ],
    images: [
      {
        src: '/project-images/booth-layout.jpeg',
        alt: 'Eight-bit Booth multiplier physical layout',
        caption: 'Final 8-bit Booth multiplier layout · Report Figure 9.',
        fit: 'contain',
      },
      {
        src: '/project-images/booth-schematic.png',
        alt: 'Hierarchical schematic of the eight-bit Booth multiplier',
        caption: 'Final multiplier schematic · Report Figure 7.',
        fit: 'contain',
      },
    ],
    links: [{ label: 'Read Full Report', url: '/vlsifinalproj.pdf' }],
  },
  {
    id: 'standard-cells',
    parentId: 'ic-design',
    title: 'INV / NAND / NOR Standard Cells',
    category: 'Course',
    status: 'Completed',
    summary:
      'Transistor-level foundations for hierarchical digital circuit design.',
    focus: ['IC Design'],
    tools: ['Cadence Virtuoso', 'HSPICE', '45 nm'],
    context: 'VLSI Design · Supporting circuit study',
    role: 'Schematic design, simulation, layout, and physical verification.',
    problem:
      'Build and verify foundational logic cells for use in larger circuits.',
    sections: [
      {
        title: 'Design progression',
        paragraphs: [
          'Designed inverter, NAND, and NOR gates using a 45 nm technology and 10-track standard-cell design approach. The course workflow connected schematic simulation with layout and physical verification. These cells established the foundation for subsequent arithmetic circuits.',
        ],
      },
    ],
    relatedIds: ['ripple-carry-adder'],
  },
  {
    id: 'ripple-carry-adder',
    parentId: 'ic-design',
    title: '4-Bit Ripple-Carry Adder',
    category: 'Course',
    status: 'Completed',
    summary:
      'A hierarchical arithmetic design built from smaller adder blocks.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Cadence Virtuoso', 'HSPICE'],
    context: 'VLSI Design · Supporting circuit study',
    role: 'Hierarchical schematic, simulation, layout, and verification.',
    problem:
      'Scale transistor-level logic into a reusable multi-bit arithmetic block.',
    sections: [
      {
        title: 'Hierarchy & implementation',
        paragraphs: [
          'Developed the adder hierarchy through half-adder, full-adder, and two-bit blocks to the complete four-bit ripple-carry adder. The layout and schematic make those hierarchy levels visible.',
        ],
      },
    ],
    images: [
      {
        src: '/fourbitadderlay.png',
        alt: 'Four-bit adder hierarchical layout',
        caption: 'Four-bit adder layout.',
        fit: 'contain',
      },
      {
        src: '/fourbitaddersch.png',
        alt: 'Four-bit adder hierarchical schematic',
        caption: 'Adder schematic and building-block hierarchy.',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'four-bit-counter',
    parentId: 'ic-design',
    title: '4-Bit Counter',
    category: 'Course',
    status: 'Completed',
    summary:
      'DFF and passgate design with additional setup-and-hold timing analysis.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Cadence Virtuoso', 'Parametric Analysis', 'HSPICE'],
    context: 'VLSI Design · Supporting circuit study',
    role: 'Sequential circuit design and additional timing investigation.',
    problem:
      'Design a four-bit counter and understand its sequential timing behavior.',
    sections: [
      {
        title: 'My contribution',
        paragraphs: [
          'Designed the counter using DFFs, passgates, and clocked inverters. Beyond the graded requirements, I used Cadence Virtuoso parametric analysis to investigate setup and hold times.',
        ],
      },
      {
        title: 'Design emphasis',
        paragraphs: [
          'This study connects transistor-level sequential building blocks with timing constraints. No numerical timing result is added without its supporting simulation record.',
        ],
      },
    ],
  },
  {
    id: 'four-bit-multiplier',
    parentId: 'ic-design',
    title: '4-Bit Multiplier',
    category: 'Course',
    status: 'Completed',
    summary:
      'An arithmetic block assembled from four half-adders and eight full-adders.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['Cadence Virtuoso', 'HSPICE'],
    context: 'VLSI Design · Supporting circuit study',
    role: 'Schematic, layout, simulation, and physical verification.',
    problem:
      'Combine reusable adder cells into a complete four-bit multiplier.',
    sections: [
      {
        title: 'Architecture & workflow',
        paragraphs: [
          'Built the multiplier using four half-adders and eight full-adders. The course workflow included DRC, LVS, PEX, and comparison of pre- and post-layout simulations.',
        ],
      },
    ],
    images: [
      {
        src: '/fourbitmultiplierlay.png',
        alt: 'Four-bit multiplier layout in Cadence Virtuoso',
        caption: 'Four-bit multiplier layout.',
        fit: 'contain',
      },
      {
        src: '/fourbitmultipliersch.png',
        alt: 'Four-bit multiplier schematic',
        caption:
          'Multiplier schematic with half-adder and full-adder hierarchy.',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'transmission-gate',
    title: 'Transmission-Gate Study',
    category: 'Course',
    status: 'Completed',
    stage: 'Schematic & Simulation',
    summary: 'Passgate design and simulation against timing requirements.',
    focus: ['IC Design', 'Validation & Test'],
    tools: ['LTspice'],
    context: 'Advanced Digital Electronics · Fall 2025',
    role: 'Passgate circuit design and simulation.',
    problem: 'Design a transmission gate to meet specified timing behavior.',
    sections: [
      {
        title: 'Work completed',
        paragraphs: [
          'Designed and simulated a passgate in LTspice, studying its behavior and timing characteristics. This course mini-project is completed.',
        ],
      },
    ],
  },
  {
    id: 'switched-capacitor',
    title: 'Switched-Capacitor Simulation',
    category: 'Course',
    status: 'Upcoming',
    summary: 'An upcoming advanced analog electronics simulation project.',
    focus: ['Analog Circuit Design'],
    tools: ['Simulation'],
    context: 'Advanced Analog Electronics',
    role: 'Course project — work has not started.',
    problem:
      'Explore switched-capacitor circuit behavior through an upcoming class simulation project.',
    sections: [
      {
        title: 'Planned work',
        paragraphs: [
          'This project is upcoming. Design requirements, implementation, and simulation results will be documented after the work begins.',
        ],
      },
    ],
  },
  {
    id: 'maze-solving-robot',
    title: 'Maze-Solving Robot',
    category: 'Course',
    status: 'Completed',
    summary:
      'Line-following, maze navigation, and route-memory algorithms on a Pololu 3pi+.',
    focus: ['Embedded Systems', 'Software'],
    tools: ['C', 'Microchip Studio', 'Pololu 3pi+'],
    context: 'Microcontrollers · ECE 2218 · Fall 2025 · Team of three',
    role: 'Team-based microcontroller programming and robot integration.',
    problem:
      'Navigate a maze using a left-turn method and remember the route for a subsequent pass.',
    sections: [
      {
        title: 'Implementation',
        paragraphs: [
          'Built on prior line-following work using the robot’s IR sensors and motors. The team programmed in C using Microchip Studio and developed the navigation and remembering algorithms.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The course project is completed. Avoiding mistakes on a second pass was the design goal; no additional quantified performance is claimed here.',
        ],
      },
    ],
  },
  {
    id: 'syringe-pump',
    title: 'Syringe Pump',
    category: 'Course',
    status: 'Completed',
    summary:
      'Arduino wiring and control software for a team-built syringe pump.',
    focus: ['Embedded Systems', 'Validation & Test'],
    tools: ['Arduino Uno', 'Arduino IDE', 'Fusion 360', '3D Printing'],
    context: 'Rapid Prototyping · DF 2100 · Fall 2024 · Team of four',
    role: 'ECE contributor: Arduino/breadboard wiring and much of the control code.',
    problem:
      'Build a self-contained device that pushes 10 mL and 20 mL syringes at a user-selected flow rate.',
    sections: [
      {
        title: 'Team design',
        paragraphs: [
          'The team designed and printed a Fusion 360 enclosure and linear-actuator components, using PLA and an ABS motor mount. An Arduino Uno controlled the stepper-driven mechanism.',
        ],
      },
      {
        title: 'My contribution',
        bullets: [
          'Helped wire the microcontroller and breadboard to the device components.',
          'Helped implement Arduino control software for the pump.',
        ],
      },
      {
        title: 'Interface & result',
        paragraphs: [
          'The design included reset controls, a flow-rate potentiometer targeting 0.1–5 mL/min, LCD feedback, a limit switch, RGB status lighting, and an internal power supply. The team presented a working final device. The flow range is a design feature, not a separate accuracy claim.',
        ],
      },
    ],
    images: [
      {
        src: '/DFFinalProduct.jpg',
        alt: 'Completed team syringe pump at its demonstration',
        caption: 'Final device at the working presentation.',
        fit: 'cover',
      },
      {
        src: '/fusionSyringe.png',
        alt: 'Fusion 360 rendering of the syringe pump enclosure',
        caption: 'Team enclosure rendering.',
        fit: 'contain',
      },
      {
        src: '/DFWiring.jpg',
        alt: 'Internal Arduino and power-supply wiring',
        caption: 'Internal electronics and wiring.',
        fit: 'cover',
      },
    ],
  },
  {
    id: 'original-weather-station',
    title: 'Original Arduino Weather Station',
    category: 'Course',
    status: 'Completed',
    summary:
      'An Arduino weather station with sensor readouts, RGB indication, and a custom enclosure.',
    focus: ['Embedded Systems'],
    tools: ['Arduino Uno', 'Arduino IDE', 'BME280', 'OpenSCAD'],
    context: 'High-school senior-year project-based programming · 2022–2023',
    role: 'Individual device programming, integration, and enclosure design.',
    problem:
      'Make environmental measurements readable in a portable, self-contained device.',
    sections: [
      {
        title: 'Implementation',
        paragraphs: [
          'Connected a BME280 and LCD to an Arduino Uno to display temperature, humidity, pressure, and approximate altitude. An RGB LED represented temperature in six color ranges.',
        ],
      },
      {
        title: 'Iteration & result',
        paragraphs: [
          'Designed and rendered a 3D-printed enclosure in OpenSCAD, presented successive iterations to the class, and refined the device over the school year to a final product.',
          'The device worked when I completed and originally used it. The photograph was taken roughly two years later, when I plugged it in again; the displayed measurements from that later power-on were incorrect.',
        ],
      },
    ],
    images: [
      {
        src: '/project-images/original-weather-station-lcd-obscured.png',
        alt: 'Original Arduino Uno weather station with a wired LCD and illuminated RGB LED; numerical readings obscured',
        caption:
          'Completed Arduino prototype, photographed during a power-on roughly two years later. LCD readings obscured because that later display did not show representative measurements.',
        fit: 'contain',
      },
    ],
    links: [
      {
        label: 'View GitHub',
        url: 'https://github.com/vivian-lz/weather-station-product',
      },
    ],
    relatedIds: ['weather-station-v2'],
  },
  {
    id: 'four-bit-alu',
    title: '4-Bit ALU',
    category: 'Hobbyist',
    status: 'Completed',
    summary:
      'Behavioral and structural Verilog implementations sharing a testbench.',
    focus: ['IC Design', 'Software', 'Validation & Test'],
    tools: ['Verilog', 'Synopsys VCS', 'EDA Playground'],
    context: 'Personal digital-design project',
    role: 'ALU implementations and testbench development.',
    problem:
      'Compare behavioral and structural approaches to an ALU supporting add, subtract, AND, and OR.',
    sections: [
      {
        title: 'Design decisions',
        paragraphs: [
          'One implementation scaled a one-bit ALU using case-based logic; another followed a full-adder/multiplexer structure. Both used a two-bit operation selector and two’s-complement add/subtract logic. Encapsulation allowed one testbench to exercise both versions.',
        ],
      },
      {
        title: 'Reported simulation result',
        paragraphs: [
          'The original project recorded VCS CPU runtimes of 0.430 s for the structural version and 0.460 s for the behavioral version. These are simulator runtimes, not hardware timing, area, or power measurements. Both designs and the testbench are completed.',
        ],
      },
    ],
    links: [
      {
        label: 'View ALU GitHub',
        url: 'https://github.com/vivian-lz/alu_verilog',
      },
      {
        label: 'HDLBits Practice',
        url: 'https://github.com/vivian-lz/verilog_hdlbits_highlights',
      },
    ],
  },
  {
    id: 'adaptive-bike',
    title: 'Modified Bike, Pen Holder & Gloves',
    category: 'Organization',
    status: 'Completed',
    summary:
      'Collaborative assistive designs shaped around an individual child’s needs.',
    focus: ['Assistive Design'],
    tools: ['3D Printing', 'Prototyping'],
    context: 'TOM Vanderbilt Make-a-Thon · Team 12 · 2024',
    role: 'Team participant in collaborative assistive-device design and fabrication.',
    problem:
      'Help a child with a hand difference ride a bike, open pen caps independently, and stay warm.',
    sections: [
      {
        title: 'Team contributions',
        paragraphs: [
          'Our team modified a bicycle with 3D-printed attachments and created a pen holder and custom gloves. We cleaned, repainted, and disassembled/reassembled the bike to accommodate modifications.',
        ],
      },
      {
        title: 'User-centered decisions',
        bullets: [
          'Gloves were shaped to the child’s hand, with fleece lining and a waterproof outer material.',
          'A character-inspired design reflected the child’s own creativity.',
          'Velcro and a loop supported easier glove removal; the pen holder and bike attachments were 3D printed.',
        ],
      },
    ],
    links: [
      {
        label: '2024 Make-a-Thon Story',
        url: 'https://www.vanderbilt.edu/the-wondry/2024/11/14/empowering-independence-tom-makeathon-teams-design-life-changing-adaptive-solutions/',
      },
      {
        label: 'Team 12 Highlight',
        url: 'https://www.instagram.com/vanderbilt_tom/p/DCZsCHxRJWH/',
      },
    ],
  },
  {
    id: 'shoe-drop-device',
    title: 'Shoe Drop Device',
    category: 'Organization',
    status: 'Completed',
    summary:
      'A reusable 3D-printed foot brace supporting therapist-assisted gait training.',
    focus: ['Assistive Design'],
    tools: ['SolidWorks', '3D Printing'],
    context: 'TOM Vanderbilt Make-a-Thon · Team 9 · 2023',
    role: 'Team participant working with a physical therapist on an assistive solution.',
    problem:
      'Replace a disposable makeshift gliding surface with a reusable aid for assisted leg movement.',
    sections: [
      {
        title: 'Team design',
        paragraphs: [
          'Worked with a physical therapist to design and 3D print a foot brace in SolidWorks. Two Velcro straps secured the foot and an additional upper strap gave the therapist support while assisting movement.',
        ],
      },
      {
        title: 'Design intent',
        paragraphs: [
          'The device was designed to facilitate assisted movement during gait training. No clinical effectiveness claim is made.',
        ],
      },
    ],
    youtubeVideoId: 'Fx-5khizxQ0',
    links: [
      {
        label: 'Team 9 Project Story',
        url: 'https://www.vanderbilt.edu/the-wondry/tikkun-olam-makers-2023-makeathon/',
      },
      {
        label: 'Watch Team Presentation',
        url: 'https://www.youtube.com/watch?v=Fx-5khizxQ0',
      },
    ],
  },
  {
    id: 'delivery-calendar',
    title: 'UPS Smart Delivery Calendar',
    category: 'Software',
    status: 'Completed',
    summary:
      'An Angular hackathon prototype combining delivery scheduling and calendar context.',
    focus: ['Software'],
    tools: ['Angular', 'Google Calendar API', 'Vertex AI', 'GCP'],
    context: 'UPS Intern Hackathon · 2025 · Team of five',
    role: 'Frontend developer; employee research and presentation collaboration.',
    problem:
      'Explore how delivery scheduling could reduce missed deliveries by considering a recipient’s calendar.',
    sections: [
      {
        title: 'My contribution',
        paragraphs: [
          'Implemented many of the main Angular frontend features, spoke with UPS employees to gather business context, and helped develop and rehearse the team presentation.',
        ],
      },
      {
        title: 'Prototype features',
        bullets: [
          'Monthly delivery overview and weekly hourly calendar view.',
          'Google Calendar integration with explicit read/write permission requests.',
          'Vertex AI suggestions for scheduling conflicts.',
          'Profile settings and email-alert preferences; sign-up/login exploration for a future real-data integration.',
        ],
      },
      {
        title: 'Outcome & scope',
        paragraphs: [
          'Completed the 24-hour hackathon prototype. This project did not place. The original business analysis projected potential savings above $50M and a 60% reduction in missed deliveries; those were estimates, not realized savings or validated deployment results.',
        ],
      },
    ],
    video: '/UPSDeliveryCalendarDemo.mp4',
  },
  {
    id: 'layoff-recall',
    title: 'UPS Layoff / Recall Feature',
    category: 'Software',
    status: 'Completed',
    summary:
      'Employee-management workflows for recording layoffs and tracking recall rights.',
    focus: ['Software'],
    tools: ['Application Development'],
    context: 'UPS internship · EMS application',
    role: 'Implemented the add/edit layoff and recall feature.',
    problem:
      'Reduce manual tracking of layoff records and seven-year recall-rights expiration dates.',
    sections: [
      {
        title: 'My contribution',
        paragraphs: [
          'Implemented add/edit flows and record cards within the employee profile, including layoff start date, gateway, shop, job class, position type, and optional comments.',
        ],
      },
      {
        title: 'Design decisions',
        bullets: [
          'Automatic expiration-date calculation and removal of expired records.',
          'Dependent dropdown filtering to prevent invalid gateway/shop/job-class combinations.',
          'Role-limited editing and disabled controls for accepted, refused, or expired recalls.',
          'Visible recall details for employees and support staff.',
        ],
      },
      {
        title: 'Result',
        paragraphs: [
          'Completed the feature so support staff could record information in the application rather than maintain separate papers and scripts. No quantified business-impact claim is added.',
        ],
      },
    ],
  },
  {
    id: 'asset-management',
    title: 'UPS Asset Management Application',
    category: 'Software',
    status: 'Completed',
    summary: 'An Angular map dashboard for AI-extracted trailer information.',
    focus: ['Software'],
    tools: ['Angular', 'Google Maps', 'Vertex AI', 'Firestore', 'NestJS'],
    context: 'UPS Intern Hackathon · 2024',
    role: 'Frontend developer, including the Angular interface and Google Maps dashboard.',
    problem:
      'Explore trailer identification and asset visibility using images and location information.',
    sections: [
      {
        title: 'System architecture',
        paragraphs: [
          'The team stored trailer images in Google Cloud storage, used a Vertex AI multimodal model to extract asset details, stored information in Firestore, and accessed it through a NestJS API. The Angular map interface displayed trailer locations and nearby-vehicle quick cards.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'Primarily implemented the Angular frontend and visual interface, including the map dashboard. The backend and AI pipeline were team work.',
        ],
      },
      {
        title: 'Outcome & scope',
        paragraphs: [
          'Our team reached the top nine in the 2024 hackathon after two judging rounds. The original estimate of more than $33M in potential savings was a projection, not a realized financial result.',
        ],
      },
    ],
    video: '/2024vidhackathon.mp4',
  },
  {
    id: 'portfolio-website',
    title: 'Engineering Portfolio Website',
    category: 'Software',
    status: 'In Progress',
    stage: 'Ongoing Portfolio',
    summary:
      'My original Angular portfolio, evolved into a hardware-focused showcase through a redesign I directed with AI assistance.',
    focus: ['Software'],
    tools: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    context: 'Personal website',
    role: 'Original site author and redesign lead, with substantial AI assistance in the redesign’s design and implementation.',
    problem:
      'Make engineering projects and individual contributions easy to discover while keeping the site personal and understandable to maintain.',
    comparison: {
      before: {
        src: '/project-images/portfolio-history/original-home.png',
        alt: 'Original Vivian-built Angular homepage with a light-blue name banner, category navigation, and featured project carousels',
        caption:
          'Original version: designed and implemented by me in Angular, with tutorial guidance and AI debugging assistance. Preserved under the portfolio-original tag.',
      },
      after: {
        src: '/project-images/portfolio-history/redesign-home.png',
        alt: 'Redesigned light-blue homepage with a smaller portrait, engineering project cards, and hardware focus links',
        caption:
          'Redesign: I directed the visual identity, hardware emphasis, content, and review, with substantial AI assistance in design and implementation.',
      },
    },
    sections: [
      {
        title: 'The original site',
        paragraphs: [
          'I originally built this portfolio in Angular using HTML, CSS, TypeScript, and knowledge gained during my software internship. Tutorial guidance helped me get started, and I used AI for debugging assistance. That version represents my own work learning to create and maintain a website.',
        ],
      },
      {
        title: 'My direction, with AI-assisted implementation',
        paragraphs: [
          'For the redesign, I set the hardware-focused direction, chose the light-blue visual identity and personal details, and reviewed the presentation of my projects. I supplied the project history, clarified my contributions, and checked the descriptions against my work.',
          'AI contributed substantially to design proposals, Angular implementation, refactoring, and validation. The result reflects my direction and review alongside that implementation assistance.',
        ],
      },
      {
        title: 'What changed',
        bullets: [
          'A searchable project directory with technical focus and status filters.',
          'Shareable case studies explaining the problem, my role, design decisions, evidence, and current scope.',
          'Responsive layouts, accessible navigation, and galleries using my project photographs and report figures.',
          'Readable project data and a code-editing guide for future updates.',
        ],
      },
      {
        title: 'Why I chose this approach',
        paragraphs: [
          'My primary focus is hardware: circuit design, PCB and IC work, validation, and hands-on engineering. AI assistance helped me improve how I communicate that work while keeping my learning focused on those areas. I remain responsible for the project descriptions and for deciding how the site represents me.',
        ],
      },
      {
        title: 'Preserving the original',
        paragraphs: [
          'The original code is saved under the portfolio-original Git tag and remains available in the repository history. The screenshots above document the visual evolution, and the original version can be revisited without maintaining two separate websites.',
        ],
      },
    ],
    links: [
      {
        label: 'View GitHub',
        url: 'https://github.com/vivian-lz/Vivian-Zeru-Portfolio',
      },
      {
        label: 'Explore Original Code',
        url: 'https://github.com/vivian-lz/Vivian-Zeru-Portfolio/tree/portfolio-original',
      },
    ],
  },
];

export const FOCUS_AREAS = [
  'PCB Design',
  'IC Design',
  'Analog Circuit Design',
  'Validation & Test',
  'Embedded Systems',
  'Software',
  'Assistive Design',
  'Product Exploration',
];
export const STATUSES: ProjectStatus[] = [
  'In Progress',
  'Completed',
  'Paused',
  'Archived',
  'Upcoming',
];
export const CATEGORIES: ProjectCategory[] = [
  'Course',
  'Organization',
  'Hobbyist',
  'Software',
];

// Ordinary array filtering keeps this easy to follow and test. Filters combine with AND.
export function filterProjects(
  projects: Project[],
  query = '',
  focus = 'All',
  status = 'All',
  category = 'All',
): Project[] {
  const search = query.trim().toLowerCase();
  return projects.filter(
    (project) =>
      (focus === 'All' || project.focus.includes(focus)) &&
      (status === 'All' || project.status === status) &&
      (category === 'All' || project.category === category) &&
      (!search ||
        [
          project.title,
          project.summary,
          project.role,
          project.stage,
          ...project.tools,
          ...project.focus,
        ]
          .join(' ')
          .toLowerCase()
          .includes(search)),
  );
}
