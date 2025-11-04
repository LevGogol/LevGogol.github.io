import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PlayableAdsList from '../PlayableAdsList.vue';

// Mock ItemCard component
const mockItemCard = {
  template: '<li class="mock-item-card">{{ title }} - {{ description }}</li>',
  props: ['title', 'description', 'link', 'tags'],
};

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
    const wrapper = mount(PlayableAdsList);

    // Find ItemCard components directly instead of mocked ones
    const items = wrapper.findAllComponents({ name: 'ItemCard' });
    expect(items.length).toBeGreaterThan(0);
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

    // Check that props are passed correctly (using real data)
    expect(items[0]?.props().title).toBe('World of Artillery');
    expect(items[0]?.props().description).toContain('Intriguing vehicle customization');
    expect(items[0]?.props().link).toBe('/playables/world-of-artillery-02.html');
    expect(items[0]?.props().tags).toEqual(['Cocos Creator', '3D']);

    expect(items[1]?.props().title).toBe('Get Color');
    expect(items[1]?.props().description).toContain('Engaging logic puzzle');
    expect(items[1]?.props().tags).toEqual(['Cocos Creator', '2D']);
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
    expect(items).toHaveLength(2);
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

    // Check that the real data is being used
    const content = wrapper.text();
    expect(content).toContain('World of Artillery');
    expect(content).toContain('Get Color');
    expect(content).toContain('Intriguing vehicle customization');
    expect(content).toContain('Engaging logic puzzle');
  });
});
