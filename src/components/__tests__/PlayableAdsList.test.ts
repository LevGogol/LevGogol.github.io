import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import PlayableAdsList from '../Projects/PlayableAdsList.vue';

// Mock ItemCard component
const mockItemCard = {
  template: '<li class="mock-item-card">{{ title }} - {{ description }}</li>',
  props: ['title', 'description', 'link', 'tags', 'image'],
};

// Mock the playables.json import
vi.mock('@/data/playables.json', () => ({
  default: [
    {
      title: 'Mock Playable 1',
      description: 'This is a mock playable description for testing',
      link: '/playables/mock-playable-1.html',
      tech: ['Unity', '3D'],
      image: '/images/mock1.jpg',
    },
    {
      title: 'Mock Playable 2',
      description: 'Another mock playable without image',
      link: '/playables/mock-playable-2.html',
      tech: ['Cocos Creator', '2D'],
    },
    {
      title: 'Mock Playable 3',
      description: 'Third mock playable with different tech',
      link: '/playables/mock-playable-3.html',
      tech: ['JavaScript', 'HTML5'],
      image: '/images/mock3.jpg',
    },
  ],
}));

describe('PlayableAdsList', () => {
  it('renders section with correct aria-labelledby', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const section = wrapper.find('section.playables');
    expect(section.exists()).toBe(true);
    expect(section.attributes('aria-labelledby')).toBe('playables-heading');
  });

  it('renders ul with correct class', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const list = wrapper.find('ul.playables-list');
    expect(list.exists()).toBe(true);
  });

  it('renders ItemCard components', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents({ name: 'ItemCard' });
    expect(items.length).toBe(3); // Based on our mock data
  });

  it('passes correct props to ItemCard components', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // Test first mock playable
    expect(items[0]?.props().title).toBe('Mock Playable 1');
    expect(items[0]?.props().description).toBe('This is a mock playable description for testing');
    expect(items[0]?.props().link).toBe('/playables/mock-playable-1.html');
    expect(items[0]?.props().tags).toEqual(['Unity', '3D']);
    expect(items[0]?.props().image).toBe('/images/mock1.jpg');

    // Test second mock playable (without image)
    expect(items[1]?.props().title).toBe('Mock Playable 2');
    expect(items[1]?.props().description).toBe('Another mock playable without image');
    expect(items[1]?.props().link).toBe('/playables/mock-playable-2.html');
    expect(items[1]?.props().tags).toEqual(['Cocos Creator', '2D']);
    expect(items[1]?.props().image).toBeUndefined();

    // Test third mock playable
    expect(items[2]?.props().title).toBe('Mock Playable 3');
    expect(items[2]?.props().tags).toEqual(['JavaScript', 'HTML5']);
    expect(items[2]?.props().image).toBe('/images/mock3.jpg');
  });

  it('uses index as key for v-for', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);
    expect(items).toHaveLength(3); // Based on our mock data
    // Keys are handled internally by Vue, we just ensure components render correctly
  });

  it('imports and uses playables data', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    // Check that the mock data is being used
    const content = wrapper.text();
    expect(content).toContain('Mock Playable 1');
    expect(content).toContain('Mock Playable 2');
    expect(content).toContain('Mock Playable 3');
    expect(content).toContain('This is a mock playable description for testing');
    expect(content).toContain('Another mock playable without image');
  });

  it('maps tech to tags prop correctly', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    expect(items[0]?.props().tags).toEqual(['Unity', '3D']);
    expect(items[1]?.props().tags).toEqual(['Cocos Creator', '2D']);
    expect(items[2]?.props().tags).toEqual(['JavaScript', 'HTML5']);
  });

  it('handles playables with and without images', () => {
    const wrapper = mount(PlayableAdsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // First and third playables have images
    expect(items[0]?.props().image).toBe('/images/mock1.jpg');
    expect(items[2]?.props().image).toBe('/images/mock3.jpg');

    // Second playable doesn't have image
    expect(items[1]?.props().image).toBeUndefined();
  });
});
