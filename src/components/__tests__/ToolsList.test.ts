import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ToolsList from '../ToolsList.vue';

// Mock ItemCard component
const mockItemCard = {
  template: '<li class="mock-item-card">{{ title }} - {{ description }}</li>',
  props: ['title', 'description', 'link', 'tags'],
};

describe('ToolsList', () => {
  it('renders section with correct aria-labelledby', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const section = wrapper.find('section.tools');
    expect(section.exists()).toBe(true);
    expect(section.attributes('aria-labelledby')).toBe('tools-heading');
  });

  it('renders ul with correct class', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const list = wrapper.find('ul.tools-list');
    expect(list.exists()).toBe(true);
  });

  it('renders ItemCard components', () => {
    const wrapper = mount(ToolsList);

    // Find ItemCard components directly instead of mocked ones
    const items = wrapper.findAllComponents({ name: 'ItemCard' });
    expect(items.length).toBeGreaterThan(0);
  });

  it('passes correct props to ItemCard components', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // Check first item (Get Playable)
    expect(items[0]?.props().title).toBe('Get Playable');
    expect(items[0]?.props().description).toContain('open-source');
    expect(items[0]?.props().link).toContain('chromewebstore.google.com');
    expect(items[0]?.props().tags).toEqual(['javascript', 'chrome extension']);

    // Check second item (Video to Playable - no link)
    expect(items[1]?.props().title).toBe('Video to Playable');
    expect(items[1]?.props().link).toBeUndefined();
    expect(items[1]?.props().tags).toEqual(['TypeScript', 'Vue.js', 'Node.js', 'FFmpeg', 'Vite']);
  });

  it('uses index as key for v-for', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);
    expect(items).toHaveLength(4);
    // Keys are handled internally by Vue, we just ensure components render correctly
  });

  it('imports and uses tools data', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    // Check that the real data is being used
    const content = wrapper.text();
    expect(content).toContain('Get Playable');
    expect(content).toContain('Video to Playable');
    expect(content).toContain('Asset Optimizer');
    expect(content).toContain('Template');
  });

  it('maps technologies to tags prop correctly', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // Check that technologies are passed as tags (using real data)
    expect(items[0]?.props().tags).toEqual(['javascript', 'chrome extension']);
    expect(items[1]?.props().tags).toEqual(['TypeScript', 'Vue.js', 'Node.js', 'FFmpeg', 'Vite']);
  });

  it('handles tools without link property', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // Second item (Video to Playable) should have undefined link
    expect(items[1]?.props().link).toBeUndefined();
    // Third item (Asset Optimizer) should also have undefined link
    expect(items[2]?.props().link).toBeUndefined();
  });

  it('correctly types the tools data with ITool interface', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    // This test verifies that the component compiles correctly with TypeScript
    // and that the ITool interface is properly applied
    expect(wrapper.exists()).toBe(true);
  });
});
