import { PROJECTS, filterProjects } from './projects';

describe('Project discovery and content integrity', () => {
  it('keeps every original project and the complete IC study hierarchy discoverable', () => {
    const originalIds = [
      'ic-design',
      'booth-multiplier',
      'standard-cells',
      'ripple-carry-adder',
      'four-bit-counter',
      'four-bit-multiplier',
      'rad-hard-cpu',
      'transmission-gate',
      'maze-solving-robot',
      'syringe-pump',
      'original-weather-station',
      'wearable-health-sensor',
      'stormwater-runoff',
      'adaptive-bike',
      'shoe-drop-device',
      'four-bit-alu',
      'weather-station-v2',
      'plant-monitor-hardware',
      'raspberry-pi-security',
      'delivery-calendar',
      'layoff-recall',
      'asset-management',
      'portfolio-website',
    ];
    for (const id of originalIds)
      expect(PROJECTS.some((project) => project.id === id))
        .withContext(id)
        .toBeTrue();
    expect(
      PROJECTS.filter((project) => project.parentId === 'ic-design').length,
    ).toBe(5);
  });

  it('combines search, focus, status, and category instead of mixing their results', () => {
    expect(
      filterProjects(
        PROJECTS,
        '  Eagle  ',
        'PCB Design',
        'Paused',
        'Hobbyist',
      ).map((project) => project.id),
    ).toEqual(['weather-station-v2', 'plant-monitor-hardware']);
    expect(
      filterProjects(PROJECTS, 'LTspice', 'Software', 'Completed'),
    ).toEqual([]);
    expect(
      filterProjects(PROJECTS, 'DFF').map((project) => project.id),
    ).toContain('four-bit-counter');
  });

  it('distinguishes the paused plant hardware from active Sproutly concept work', () => {
    const sproutly = PROJECTS.find((project) => project.id === 'sproutly')!;
    const hardware = PROJECTS.find(
      (project) => project.id === 'plant-monitor-hardware',
    )!;
    expect(sproutly.status).toBe('In Progress');
    expect(hardware.status).toBe('Paused');
    expect(sproutly.relatedIds).toContain(hardware.id);
    expect(hardware.relatedIds).toContain(sproutly.id);
    expect(
      filterProjects(PROJECTS, '', 'All', 'Archived').map(
        (project) => project.id,
      ),
    ).toContain('raspberry-pi-security');
  });

  it('keeps upcoming simulation work out of completed projects', () => {
    expect(
      filterProjects(PROJECTS, '', 'All', 'Completed').some(
        (project) => project.id === 'switched-capacitor',
      ),
    ).toBeFalse();
    expect(
      filterProjects(PROJECTS, '', 'All', 'Upcoming').map(
        (project) => project.id,
      ),
    ).toEqual(['switched-capacitor']);
  });

  it('uses unique shareable IDs with valid collection and related-project links', () => {
    const ids = PROJECTS.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const project of PROJECTS) {
      expect(project.id).toMatch(/^[a-z0-9-]+$/);
      if (project.parentId) expect(ids).toContain(project.parentId);
      for (const related of project.relatedIds || [])
        expect(ids).toContain(related);
    }
  });
});
